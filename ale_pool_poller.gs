// ── ALE Pool Poller ───────────────────────────────────────────────────────────
// Paste into Google Apps Script (script.google.com) attached to a spreadsheet.
//
// Creates two sheets:
//   "tlmpools"   — one row per pool per snapshot (TLM pool state)
//   "shardpools" — one row per pool per snapshot (Shard pool state)
//
// tlmpools columns (10):
//   snapshot_time | pool | fillrate_tlm | tlm_reserve | tlm_current |
//   fill_pct | fillrate_1d_pct | claim_per_hour_pct |
//   last_reserve_update | last_current_update
//
// shardpools columns (4):
//   snapshot_time | pool | shard_current | fillrate_per_hour | last_current_update
//
// After running, publish each sheet as CSV:
//   File → Share → Publish to web → Sheet → CSV → Copy link
//   Use those URLs as data sources for your graph page.

var WAX_NODES = [
  'https://wax.greymass.com',
  'https://wax.eosusa.io',
  'https://wax.eosphere.io',
  'https://api.waxsweden.org'
];

var TLM_SHEET   = 'tlmpools';
var SHARD_SHEET = 'shardpools';
var MAX_ROWS    = 50000;  // ~70 days at 30-min intervals with ~10 pools

// ─────────────────────────────────────────────────────────────────────────────
// UI MENU
// ─────────────────────────────────────────────────────────────────────────────
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('ALE Pool Poller')
    .addItem('Run Manual Snapshot', 'snapshotManual')
    .addSeparator()
    .addItem('Setup Auto-Trigger (30 min)', 'createTrigger')
    .addItem('Remove Auto-Trigger', 'removeTrigger')
    .addSeparator()
    .addItem('Repair Headers (keeps all data)', 'repairSheets')
    .addItem('⚠ Full Reset (DELETES all data)', 'fullResetSheets')
    .addSeparator()
    .addItem('NFT Stats — Run Manual Refresh', 'refreshNftValuesManual')
    .addItem('NFT Stats — Setup Daily Trigger', 'createNftTrigger')
    .addItem('NFT Stats — Remove Daily Trigger', 'removeNftTrigger')
    .addToUi();
}

// ─────────────────────────────────────────────────────────────────────────────
// MANUAL — single snapshot, logs result
// ─────────────────────────────────────────────────────────────────────────────
function snapshotManual() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  ss.toast('Fetching pool data…', 'ALE Pool Poller');
  var result = runSnapshot_();
  ss.toast(
    'Done. tlmpools: +' + result.tlm + ' rows | shardpools: +' + result.shard + ' rows',
    'Snapshot Complete'
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// AUTO — called by time trigger
// ─────────────────────────────────────────────────────────────────────────────
function snapshotPools() {
  runSnapshot_();
}

// ─────────────────────────────────────────────────────────────────────────────
// CORE
// ─────────────────────────────────────────────────────────────────────────────
function runSnapshot_() {
  var ss        = SpreadsheetApp.getActiveSpreadsheet();
  var tlmSheet  = getOrCreateSheet_(ss, TLM_SHEET,   writeTlmHeader_);
  var shrdSheet = getOrCreateSheet_(ss, SHARD_SHEET, writeShardHeader_);
  var now       = new Date();

  // ── TLM pools ──
  var tlmRows  = [];
  var tlmPools = fetchTable_('pools.ale', 'pools.ale', 'tlmpools');
  tlmPools.forEach(function(p) {
    var reserve = parseTlm_(p.tlm_reserve);
    var current = parseTlm_(p.tlm_current);
    var fillPct = reserve > 0 ? Math.round(current / reserve * 10000) / 100 : 0;  // 2 decimals
    tlmRows.push([
      now,                                          // A snapshot_time
      p.pool,                                       // B pool
      parseTlm_(p.fillrate),                        // C fillrate_tlm
      reserve,                                      // D tlm_reserve
      current,                                      // E tlm_current
      fillPct,                                      // F fill_pct (%)
      (p.fillrate_1d_percent  || 0) / 10000,        // G fillrate_1d_pct (%)
      (p.claim_per_hour_percent || 0) / 10000,      // H claim_per_hour_pct (%)
      p.last_reserve_update  || '',                 // I last_reserve_update
      p.last_current_update  || ''                  // J last_current_update
    ]);
  });
  if (tlmRows.length > 0) {
    tlmSheet.getRange(tlmSheet.getLastRow() + 1, 1, tlmRows.length, 10).setValues(tlmRows);
  }
  trimSheet_(tlmSheet);

  // ── Shard pools ──
  var shardRows  = [];
  var shardPools = fetchTable_('pools.ale', 'pools.ale', 'shardpools');
  shardPools.forEach(function(p) {
    shardRows.push([
      now,                        // A snapshot_time
      p.pool,                     // B pool
      p.shard_current  || 0,      // C shard_current
      p.fillrate_per_hour || 0,   // D fillrate_per_hour
      p.last_current_update || '' // E last_current_update
    ]);
  });
  if (shardRows.length > 0) {
    shrdSheet.getRange(shrdSheet.getLastRow() + 1, 1, shardRows.length, 5).setValues(shardRows);
  }
  trimSheet_(shrdSheet);

  Logger.log('Snapshot done — tlm: ' + tlmRows.length + ' rows, shard: ' + shardRows.length + ' rows');
  return { tlm: tlmRows.length, shard: shardRows.length };
}

// ─────────────────────────────────────────────────────────────────────────────
// Parse "1234.5678 TLM" → 1234.5678
// ─────────────────────────────────────────────────────────────────────────────
function parseTlm_(str) {
  if (!str) return 0;
  var n = parseFloat(String(str));
  return isNaN(n) ? 0 : n;
}

// ─────────────────────────────────────────────────────────────────────────────
// Fetch a full table (paginated, up to 20 pages × 500 rows)
// ─────────────────────────────────────────────────────────────────────────────
function fetchTable_(code, scope, table) {
  var rows = [], lb = '', LIMIT = 500;
  for (var page = 0; page < 20; page++) {
    var payload = { code: code, scope: scope, table: table, limit: LIMIT, json: true };
    if (lb) payload.lower_bound = lb;
    var data = waxPost_('/v1/chain/get_table_rows', payload);
    if (!data) break;
    (data.rows || []).forEach(function(r) { rows.push(r); });
    if (data.more && (data.rows || []).length === LIMIT) lb = data.next_key;
    else break;
  }
  return rows;
}

// ─────────────────────────────────────────────────────────────────────────────
// POST to WAX with node failover
// ─────────────────────────────────────────────────────────────────────────────
function waxPost_(path, payload) {
  for (var i = 0; i < WAX_NODES.length; i++) {
    try {
      var res = UrlFetchApp.fetch(WAX_NODES[i] + path, {
        method: 'post',
        contentType: 'application/json',
        payload: JSON.stringify(payload),
        muteHttpExceptions: true
      });
      if (res.getResponseCode() === 200) return JSON.parse(res.getContentText());
      Logger.log('WAX ' + WAX_NODES[i] + ' returned ' + res.getResponseCode());
    } catch(e) {
      Logger.log('WAX node fail ' + WAX_NODES[i] + ': ' + e);
    }
  }
  return null;
}

// ─────────────────────────────────────────────────────────────────────────────
// Sheet helpers
// ─────────────────────────────────────────────────────────────────────────────
function getOrCreateSheet_(ss, name, headerFn) {
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    headerFn(sheet);
  }
  return sheet;
}

function writeTlmHeader_(sheet) {
  sheet.getRange(1, 1, 1, 10).setValues([[
    'snapshot_time', 'pool', 'fillrate_tlm', 'tlm_reserve', 'tlm_current',
    'fill_pct', 'fillrate_1d_pct', 'claim_per_hour_pct',
    'last_reserve_update', 'last_current_update'
  ]]);
  sheet.setFrozenRows(1);
  // Format snapshot_time column as datetime
  sheet.getRange('A2:A').setNumberFormat('yyyy-MM-dd HH:mm:ss');
}

function writeShardHeader_(sheet) {
  sheet.getRange(1, 1, 1, 5).setValues([[
    'snapshot_time', 'pool', 'shard_current', 'fillrate_per_hour', 'last_current_update'
  ]]);
  sheet.setFrozenRows(1);
  sheet.getRange('A2:A').setNumberFormat('yyyy-MM-dd HH:mm:ss');
}

function trimSheet_(sheet) {
  var total = sheet.getLastRow() - 1;
  if (total > MAX_ROWS) {
    var excess = total - MAX_ROWS;
    sheet.deleteRows(2, excess);
    Logger.log('Trimmed ' + excess + ' rows from ' + sheet.getName());
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// REPAIR — fix headers only, keep all data, then run a snapshot
// ─────────────────────────────────────────────────────────────────────────────
function repairSheets() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var tlmSheet  = getOrCreateSheet_(ss, TLM_SHEET,   writeTlmHeader_);
  var shrdSheet = getOrCreateSheet_(ss, SHARD_SHEET, writeShardHeader_);
  writeTlmHeader_(tlmSheet);
  writeShardHeader_(shrdSheet);
  var result = runSnapshot_();
  ss.toast('Headers repaired. +' + result.tlm + ' tlm / +' + result.shard + ' shard rows', 'Repair Done');
}

// ─────────────────────────────────────────────────────────────────────────────
// FULL RESET
// ─────────────────────────────────────────────────────────────────────────────
function fullResetSheets() {
  var ui = SpreadsheetApp.getUi();
  var ans = ui.alert(
    '⚠ Full Reset',
    'DELETE all rows in tlmpools and shardpools and start fresh?\n\nHistorical snapshots will be permanently lost.',
    ui.ButtonSet.OK_CANCEL
  );
  if (ans !== ui.Button.OK) { ui.alert('Cancelled.'); return; }
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  [TLM_SHEET, SHARD_SHEET].forEach(function(name) {
    var s = ss.getSheetByName(name);
    if (s) s.clearContents();
  });
  var tlmSheet  = getOrCreateSheet_(ss, TLM_SHEET,   writeTlmHeader_);
  var shrdSheet = getOrCreateSheet_(ss, SHARD_SHEET, writeShardHeader_);
  writeTlmHeader_(tlmSheet);
  writeShardHeader_(shrdSheet);
  var result = runSnapshot_();
  ss.toast('Reset done. ' + result.tlm + ' tlm / ' + result.shard + ' shard rows written.', 'Reset Complete');
}

// ─────────────────────────────────────────────────────────────────────────────
// TRIGGER — 15-minute polling
// ─────────────────────────────────────────────────────────────────────────────
function createTrigger() {
  removeTrigger();  // clear any existing first
  ScriptApp.newTrigger('snapshotPools').timeBased().everyMinutes(30).create();
  SpreadsheetApp.getActiveSpreadsheet().toast('Polling every 30 min.', 'Trigger Set');
  Logger.log('Trigger created.');
}

function removeTrigger() {
  ScriptApp.getProjectTriggers().forEach(function(t) {
    if (t.getHandlerFunction() === 'snapshotPools') ScriptApp.deleteTrigger(t);
  });
}

// ═════════════════════════════════════════════════════════════════════════════
// ALE NFT VALUES POLLER
// Pulls fighters.ale::nftvalues (crew + arms base stats) once per day.
// Writes to a single "nftvalues" sheet — full overwrite each run.
//
// nftvalues columns (20):
//   template_id | type | rarity | shine | classname | racename | element |
//   health | damage | taunt | initiative | attackspeed |
//   res_fire | res_nature | res_air | res_gem | res_metal | res_neutral |
//   ability_name | ability_desc
//
// All stat values are stored RAW (on-chain units).
// ale.html divides by 10 for display; resistances / 10 = percentage.
//
// After first run, publish the "nftvalues" sheet as CSV:
//   File → Share → Publish to web → Sheet "nftvalues" → CSV → Copy link
//   Paste that URL (or the Sheet ID) into ale.html config.
// ═════════════════════════════════════════════════════════════════════════════

var NFT_SHEET = 'nftvalues';

// ─────────────────────────────────────────────────────────────────────────────
// MANUAL — run once to populate / re-populate on demand
// ─────────────────────────────────────────────────────────────────────────────
function refreshNftValuesManual() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  ss.toast('Fetching NFT stats from chain…', 'ALE NFT Poller');
  var count = runNftRefresh_();
  ss.toast('Done. ' + count + ' NFTs written to "' + NFT_SHEET + '".', 'NFT Refresh Complete');
}

// ─────────────────────────────────────────────────────────────────────────────
// AUTO — called by daily time trigger
// ─────────────────────────────────────────────────────────────────────────────
function refreshNftValues() {
  runNftRefresh_();
}

// ─────────────────────────────────────────────────────────────────────────────
// CORE — fetch, filter, overwrite
// ─────────────────────────────────────────────────────────────────────────────
function runNftRefresh_() {
  var ss    = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(NFT_SHEET);
  if (!sheet) sheet = ss.insertSheet(NFT_SHEET);

  // Fetch all rows from fighters.ale::nftvalues
  var allRows = fetchTable_('fighters.ale', 'fighters.ale', 'nftvalues');

  // Filter to crew and arms only (exclude faces, tools, etc.)
  var KEEP = { 'crew.worlds': true, 'arms.worlds': true };
  var rows = allRows.filter(function(r) { return KEEP[r.type]; });

  if (!rows.length) {
    Logger.log('runNftRefresh_: no crew/arms rows returned — aborting overwrite.');
    return 0;
  }

  // Build data array
  var data = [writeNftHeader_()];
  rows.forEach(function(r) {
    var s   = r.stats  || {};
    var ab  = (r.ability && r.ability[0]) || {};
    data.push([
      r.template_id   || '',   // A
      r.type          || '',   // B
      r.rarity        || '',   // C
      r.shine         || '',   // D
      r.classname     || '',   // E
      r.racename      || '',   // F
      r.element       || '',   // G
      s.health        || 0,    // H
      s.damage        || 0,    // I
      s.taunt         || 0,    // J
      s.initiative    || 0,    // K  (windup — lower = attacks sooner)
      s.attackspeed   || 0,    // L  (cooldown — lower = attacks faster)
      s.res_fire      || 0,    // M
      s.res_nature    || 0,    // N
      s.res_air       || 0,    // O
      s.res_gem       || 0,    // P
      s.res_metal     || 0,    // Q
      s.res_neutral   || 0,    // R
      ab.displayname  || '',   // S
      ab.description  || ''    // T
    ]);
  });

  // Full overwrite: clear content, write header + all data in one call
  sheet.clearContents();
  sheet.getRange(1, 1, data.length, 20).setValues(data);
  sheet.setFrozenRows(1);

  Logger.log('runNftRefresh_: wrote ' + (data.length - 1) + ' NFT rows.');
  return data.length - 1;
}

function writeNftHeader_() {
  return [
    'template_id', 'type', 'rarity', 'shine', 'classname', 'racename', 'element',
    'health', 'damage', 'taunt', 'initiative', 'attackspeed',
    'res_fire', 'res_nature', 'res_air', 'res_gem', 'res_metal', 'res_neutral',
    'ability_name', 'ability_desc'
  ];
}

// ─────────────────────────────────────────────────────────────────────────────
// TRIGGER — daily, independent of the pool trigger
// ─────────────────────────────────────────────────────────────────────────────
function createNftTrigger() {
  removeNftTrigger();
  ScriptApp.newTrigger('refreshNftValues').timeBased().everyHours(24).create();
  SpreadsheetApp.getActiveSpreadsheet().toast('NFT stats polling daily.', 'NFT Trigger Set');
  Logger.log('NFT daily trigger created.');
}

function removeNftTrigger() {
  ScriptApp.getProjectTriggers().forEach(function(t) {
    if (t.getHandlerFunction() === 'refreshNftValues') ScriptApp.deleteTrigger(t);
  });
}
