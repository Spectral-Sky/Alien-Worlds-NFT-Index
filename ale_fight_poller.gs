// ── ALE Fight Stats Poller ────────────────────────────────────────────────────
// Paste into Google Apps Script (script.google.com) attached to a spreadsheet.
//
// Sheet columns (16):
//   history_id | wallet | timestamp | fight_type | dungeon_difficulty |
//   winner | crew_asset_id | weapon_asset_id |
//   team1_classes | team2_classes | team1_fighter_ids | team2_fighter_ids |
//   team1_races | team2_races | team1_elements | team2_elements
//
// Note: team2 crew/weapon asset IDs are NOT in the fight data — the
//       battle.ale::fight action only records the attacker's NFTs.
//
// After running repairSheet(), publish the "fights" sheet as CSV:
//   File → Share → Publish to web → Sheet "fights" → CSV → Copy link
//   Paste that URL into the ale.html STATS ⚙ SETUP panel.

var WAX_NODE   = 'https://wax.greymass.com';
var SHEET_NAME = 'fights';
var MAX_ROWS   = 100000;

var HYPERION_NODES = [
  'https://wax.eosusa.io',
  'https://wax.eosphere.io',
  'https://api.waxsweden.org',
  'https://wax.eosrio.io'
];

// ─────────────────────────────────────────────────────────────────────────────
// UI MENU
// ─────────────────────────────────────────────────────────────────────────────
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('ALE Fight Stats')
    .addItem('Run Manual Scan', 'scanFightsManual')
    .addSeparator()
    .addItem('Setup Auto-Trigger (5 min)', 'createTrigger')
    .addSeparator()
    .addItem('Repair Header (safe — keeps all rows)', 'repairSheet')
    .addItem('⚠ Full Reset (DELETES all data)', 'fullResetSheet')
    .addToUi();
}

// ─────────────────────────────────────────────────────────────────────────────
// MANUAL SCAN — creates a timestamped sheet each run
// ─────────────────────────────────────────────────────────────────────────────
function scanFightsManual() {
  var ss        = SpreadsheetApp.getActiveSpreadsheet();
  var sheetName = 'fights_' + Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyyMMdd_HHmmss');
  var sheet     = ss.insertSheet(sheetName);
  writeHeader_(sheet);
  ss.toast('Fetching fights from chain…', 'ALE Stats');
  var count = processFightsData_(sheet);
  ss.toast('Done. Added ' + count + ' rows to ' + sheetName, 'ALE Stats');
}

// ─────────────────────────────────────────────────────────────────────────────
// AUTO SCAN — called by time trigger every 5 min
// ─────────────────────────────────────────────────────────────────────────────
function scanFights() {
  var ss    = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    writeHeader_(sheet);
  }
  processFightsData_(sheet);
}

// ─────────────────────────────────────────────────────────────────────────────
// CORE LOGIC
// ─────────────────────────────────────────────────────────────────────────────
function processFightsData_(sheet) {
  // Collect existing history_ids to skip duplicates
  var existingIds = new Set();
  var lastRow = sheet.getLastRow();
  if (lastRow > 1) {
    sheet.getRange(2, 1, lastRow - 1, 1).getValues()
      .forEach(function(r){ if (r[0]) existingIds.add(String(r[0])); });
  }

  var enrichMap = buildEnrichMap_();
  var fights    = fetchFightsTable_();
  Logger.log('Fights in table: ' + fights.length + ' | Hyperion matches: ' + Object.keys(enrichMap).length);

  var newRows = [];
  fights.forEach(function(row) {
    if (existingIds.has(row.history_id)) return;

    var en     = enrichMap[row.history_id] || {};
    var winner = (row.log === 'Team 1 wins') ? 1 : 2;
    var wallet = row.wallet || '';

    var t1c = (row.team1_fighters || [])
      .filter(function(f){ return f.classname && f.classname.trim(); })
      .map(function(f){ return f.classname; }).join('|');

    var t2c = (row.team2_fighters || [])
      .filter(function(f){ return f.classname && f.classname.trim(); })
      .map(function(f){ return f.classname; }).join('|');

    var t1r = (row.team1_fighters || [])
      .filter(function(f){ return f.racename && f.racename.trim(); })
      .map(function(f){ return f.racename; }).join('|');

    var t2r = (row.team2_fighters || [])
      .filter(function(f){ return f.racename && f.racename.trim(); })
      .map(function(f){ return f.racename; }).join('|');

    var t1e = (row.team1_fighters || [])
      .filter(function(f){ return (f.elementname || f.element || '').trim(); })
      .map(function(f){ return f.elementname || f.element; }).join('|');

    var t2e = (row.team2_fighters || [])
      .filter(function(f){ return (f.elementname || f.element || '').trim(); })
      .map(function(f){ return f.elementname || f.element; }).join('|');

    // fighter_id 99999999999 is the weapon NFT slot placeholder — exclude it
    var t1ids = (row.team1_fighters || [])
      .filter(function(f){ return f.fighter_id && String(f.fighter_id) !== '99999999999'; })
      .map(function(f){ return String(f.fighter_id); }).join('|');

    var t2ids = (row.team2_fighters || [])
      .filter(function(f){ return f.fighter_id && String(f.fighter_id) !== '99999999999'; })
      .map(function(f){ return String(f.fighter_id); }).join('|');

    // Infer fight_type when not in Hyperion window
    // NOTE: both arena and dungeon team2 can have gamertags (dungeon defenders
    // are real players' staked fighters), so this heuristic is unreliable —
    // prefer Hyperion-confirmed fight_type whenever available.
    var ft = en.fight_type || '';

    newRows.push([
      row.history_id,   // A
      wallet,           // B
      row.timestamp,    // C
      ft,               // D
      en.difficulty || 0,           // E
      winner,                       // F
      en.crew_asset_id   || '',     // G  (attacker's crew NFT)
      en.weapon_asset_id || '',     // H  (attacker's weapon NFT)
      t1c,                          // I
      t2c,                          // J
      t1ids,                        // K
      t2ids,                        // L
      t1r,                          // M
      t2r,                          // N
      t1e,                          // O
      t2e                           // P
    ]);
  });

  if (newRows.length > 0) {
    sheet.getRange(sheet.getLastRow() + 1, 1, newRows.length, 16).setValues(newRows);
    Logger.log('Appended ' + newRows.length + ' rows.');
  } else {
    Logger.log('No new fights.');
  }

  // Trim oldest rows if sheet exceeds MAX_ROWS
  var total = sheet.getLastRow() - 1;
  if (total > MAX_ROWS) {
    sheet.deleteRows(2, total - MAX_ROWS);
    Logger.log('Trimmed to ' + MAX_ROWS + ' rows.');
  }

  return newRows.length;
}

// ─────────────────────────────────────────────────────────────────────────────
// Write the canonical 16-column header
// ─────────────────────────────────────────────────────────────────────────────
function writeHeader_(sheet) {
  sheet.getRange(1, 1, 1, 16).setValues([[
    'history_id','wallet','timestamp','fight_type','dungeon_difficulty',
    'winner','crew_asset_id','weapon_asset_id',
    'team1_classes','team2_classes','team1_fighter_ids','team2_fighter_ids',
    'team1_races','team2_races','team1_elements','team2_elements'
  ]]);
  sheet.setFrozenRows(1);
}

// ─────────────────────────────────────────────────────────────────────────────
// Fetch battle.ale::fights table (paginated)
// ─────────────────────────────────────────────────────────────────────────────
function fetchFightsTable_() {
  var rows = [], lb = '', LIMIT = 500;
  for (var page = 0; page < 20; page++) {
    var payload = { code:'battle.ale', scope:'battle.ale', table:'fights', limit:LIMIT, json:true };
    if (lb) payload.lower_bound = lb;
    var res = UrlFetchApp.fetch(WAX_NODE + '/v1/chain/get_table_rows', {
      method:'post', contentType:'application/json',
      payload:JSON.stringify(payload), muteHttpExceptions:true
    });
    if (res.getResponseCode() !== 200) break;
    var data = JSON.parse(res.getContentText());
    (data.rows || []).forEach(function(r){ rows.push(r); });
    if (data.more && (data.rows||[]).length === LIMIT) lb = data.next_key;
    else break;
  }
  return rows;
}

// ─────────────────────────────────────────────────────────────────────────────
// Hyperion with failover across nodes
// ─────────────────────────────────────────────────────────────────────────────
function fetchHyperionData_(path) {
  for (var i = 0; i < HYPERION_NODES.length; i++) {
    try {
      var res = UrlFetchApp.fetch(HYPERION_NODES[i] + path, { muteHttpExceptions:true });
      if (res.getResponseCode() === 200) return JSON.parse(res.getContentText());
    } catch(e) { Logger.log('Hyperion fail ' + HYPERION_NODES[i] + ': ' + e); }
  }
  return null;
}

// ─────────────────────────────────────────────────────────────────────────────
// Build enrichment map: history_id → {fight_type, difficulty, crew, weapon}
// ─────────────────────────────────────────────────────────────────────────────
function buildEnrichMap_() {
  var map = {};

  var d1 = fetchHyperionData_('/v2/history/get_actions?account=arena.ale&filter=arena.ale%3Aplayarena&limit=1000&sort=desc');
  if (d1 && d1.actions) {
    d1.actions.forEach(function(a) {
      var d = a.act && a.act.data;
      if (d && d.history_id) {
        map[d.history_id] = { fight_type:'arena', difficulty:0,
          crew_asset_id:String(d.crew_asset_id||''), weapon_asset_id:String(d.weapon_asset_id||'') };
      }
    });
  }

  var d2 = fetchHyperionData_('/v2/history/get_actions?account=dungeons.ale&filter=dungeons.ale%3Aplaydungeon&limit=1000&sort=desc');
  if (d2 && d2.actions) {
    d2.actions.forEach(function(a) {
      var d = a.act && a.act.data;
      if (d && d.history_id) {
        map[d.history_id] = { fight_type:'dungeon', difficulty:Number(d.difficulty||0),
          crew_asset_id:String(d.crew_asset_id||''), weapon_asset_id:String(d.weapon_asset_id||'') };
      }
    });
  }

  return map;
}

// ─────────────────────────────────────────────────────────────────────────────
// REPAIR — fixes the header row only, keeps all existing data rows intact,
// then appends any new fights from chain (duplicates are skipped automatically)
// ─────────────────────────────────────────────────────────────────────────────
function repairSheet() {
  var ss    = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    Logger.log('Sheet not found — created new one.');
  }
  // Overwrite row 1 with canonical header, leave all data rows untouched
  writeHeader_(sheet);
  var count = processFightsData_(sheet);
  ss.toast('Header fixed. Added ' + count + ' new rows (existing rows preserved).', 'Repair Done');
  Logger.log('repairSheet done. ' + count + ' new rows appended.');
}

// ─────────────────────────────────────────────────────────────────────────────
// FULL RESET — wipes the sheet and repopulates from chain.
// WARNING: only recovers as far back as battle.ale::fights table holds.
// Historical data older than that is permanently lost.
// ─────────────────────────────────────────────────────────────────────────────
function fullResetSheet() {
  var ui = SpreadsheetApp.getUi();
  var confirm = ui.alert(
    '⚠ Full Reset — Are you sure?',
    'This will DELETE all rows and repopulate from the chain table.\n\nHistorical data NOT in the current chain table will be permanently lost.\n\nDuplicate the sheet manually before proceeding if you want a backup.',
    ui.ButtonSet.OK_CANCEL
  );
  if (confirm !== ui.Button.OK) { ui.alert('Cancelled.'); return; }
  var ss    = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) { Logger.log('Sheet "' + SHEET_NAME + '" not found.'); return; }
  sheet.clearContents();
  writeHeader_(sheet);
  var count = processFightsData_(sheet);
  ss.toast('Full reset done. ' + count + ' rows written.', 'Reset Complete');
  Logger.log('fullResetSheet done. ' + count + ' rows.');
}

// ─────────────────────────────────────────────────────────────────────────────
// TRIGGER SETUP — run once manually
// ─────────────────────────────────────────────────────────────────────────────
function createTrigger() {
  ScriptApp.getProjectTriggers().forEach(function(t) {
    if (t.getHandlerFunction() === 'scanFights') ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger('scanFights').timeBased().everyMinutes(5).create();
  SpreadsheetApp.getActiveSpreadsheet().toast('Polling every 5 min.', 'Trigger Set');
  Logger.log('Trigger created.');
}
