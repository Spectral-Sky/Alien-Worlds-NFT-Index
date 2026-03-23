// nft_data.js — Unified NFT Template Database for NaronCodex Army Builder
// Source: verified Google Sheets exports (all PD sheets + crew.worlds.html + arms.worlds.html)
//
// AW crew movecost stored as raw units (PD_Movecost_Minutes_Added × 6) to match
// army.html formula: movecost × 10 seconds = seconds added to travel time.
// AW arms have no movecost. Abundant AW crew are excluded (don't count in PD).
//
// Usage: NFT_DATA[template_id] → { category, rarity, atk, def, movecost, ... }

const NFT_DATA = {

  // ── PD WARLORDS ─────────────────────────────────────────────────────────────
  899894: { collection:"planetdefnft", category:"warlord", rarity:"common",    name:"Tactician",         crew_slots:1,  atk:0, def:0, img:"QmSb6Zt8upZK5CxQhzuZmjBR4RytrnYsKzWG6nHFfibeps" },
  899895: { collection:"planetdefnft", category:"warlord", rarity:"uncommon",  name:"Exo-Colonel",       crew_slots:6,  atk:0, def:0, img:"QmScUnzH7Z1tY53iJDHL8oi7V6nB11eqnr9mVUh6hmzHmw" },
  899896: { collection:"planetdefnft", category:"warlord", rarity:"rare",      name:"Warfare Architect", crew_slots:14, atk:0, def:0, img:"QmSwZrCLXFwW6y3mTQ3DFo9qmGV14rsbiAoJzh9xsPJZsD" },
  899897: { collection:"planetdefnft", category:"warlord", rarity:"epic",      name:"Overlord",          crew_slots:24, atk:0, def:0, img:"QmNZgiF6d1hLaWRTQUkP2quBsrmK3KCJNDYwQzECJHAcL3" },
  899898: { collection:"planetdefnft", category:"warlord", rarity:"legendary", name:"Supremacy Warden",  crew_slots:47, atk:0, def:0, img:"QmTMy1ySaVWA4mJ38KUa3Z6q6ELT5YUQyQq2xse7HnjKBA" },
  899899: { collection:"planetdefnft", category:"warlord", rarity:"mythic",    name:"Warmaster",         crew_slots:75, atk:0, def:0, img:"QmazonPNgfxM1LYEG4mVoFRPbTnHWqcKEMDaCqzHVzxgE3" },

  // ── PD MERCENARIES — Multi-Skilled ──────────────────────────────────────────
  891507: { collection:"planetdefnft", category:"crew", rarity:"common",    name:"Trooper Recruit",      atk:23,  def:23,  movecost:15, img:"QmS1Bj3aEHvLu36S46uJbSTnNDrLtmpvT9Qa2GpJcdFJ1c" },
  891508: { collection:"planetdefnft", category:"crew", rarity:"uncommon",  name:"Trooper Veteran",      atk:46,  def:46,  movecost:26, img:"QmYiRV8FZzut14TxMNnvcZfRL5htzESLWc9QsdqvHcRNqF" },
  891509: { collection:"planetdefnft", category:"crew", rarity:"rare",      name:"Field Operative",      atk:78,  def:78,  movecost:39, img:"QmZVRTimiidn76rGRARuQmsVXS2QnmMx72eQYvBCmMAYE9" },
  891510: { collection:"planetdefnft", category:"crew", rarity:"epic",      name:"Battleforged Veteran", atk:115, def:115, movecost:51, img:"QmRuuF3Mar6Hk37tzVVrSzLyyYg7ZT2CTp68SNDi91MD9u" },
  891511: { collection:"planetdefnft", category:"crew", rarity:"legendary", name:"Warfare Specialist",   atk:190, def:190, movecost:67, img:"QmfLNKMT8rUKHuWfxHza5Nk91Yx6G9U2UgtmDinM9GC5Sm" },
  891512: { collection:"planetdefnft", category:"crew", rarity:"mythic",    name:"Warfare Elite",        atk:285, def:285, movecost:81, img:"QmXRLbuoo2MDTjmMpU7mpBG6v3VHRGiuPu8fPv1gVLp8F9" },

  // ── PD MERCENARIES — Raider ──────────────────────────────────────────────────
  896605: { collection:"planetdefnft", category:"crew", rarity:"common",    name:"Scout Recruit",    atk:37,  def:25,  movecost:20, img:"QmPskniCsnZ8GGBL3PiRTPKNgHoaxtuHqXZtmkENonq4Up" },
  896606: { collection:"planetdefnft", category:"crew", rarity:"uncommon",  name:"Scout Veteran",    atk:66,  def:44,  movecost:31, img:"Qmf8Pcu7DYrrbjRxHJ7Y8M8huap16wCCAFaypDBK1KhHiZ" },
  896608: { collection:"planetdefnft", category:"crew", rarity:"rare",      name:"Gunslinger",       atk:106, def:70,  movecost:44, img:"QmQAjx6jcFTAy3LeAp7wh4HqvbidLMZdu8WY92pXeeP39i" },
  896609: { collection:"planetdefnft", category:"crew", rarity:"epic",      name:"Enforcer",         atk:152, def:101, movecost:56, img:"QmZsnYHeWoqNQXt2YUYDrFuP1MzYU1BfaQnhbvKtugTsLq" },
  896610: { collection:"planetdefnft", category:"crew", rarity:"legendary", name:"Strike Operative", atk:245, def:163, movecost:72, img:"QmaE6Yohrx4rj6W53mJDkBhyH6ArSN41L1mMusneVAp6PF" },
  896611: { collection:"planetdefnft", category:"crew", rarity:"mythic",    name:"Warhound",         atk:363, def:242, movecost:86, img:"Qma71SBEWYeNpRniurvuQqWwJv3ifdLuii5yonRSo6CaCF" },

  // ── PD MERCENARIES — Protector ───────────────────────────────────────────────
  898934: { collection:"planetdefnft", category:"crew", rarity:"common",    name:"Sentinel Recruit",   atk:25,  def:37,  movecost:20, img:"QmZJQwbcnt86zUVrnHkp1tYNFq52bq5mDiadog5RLBQCMV" },
  898935: { collection:"planetdefnft", category:"crew", rarity:"uncommon",  name:"Sentinel Veteran",   atk:44,  def:66,  movecost:31, img:"Qmdayv19GtY4E5kpTdkEk2Uqo8ycCFZRLGAdWqan7LVEDB" },
  898936: { collection:"planetdefnft", category:"crew", rarity:"rare",      name:"Bulwark Specialist", atk:70,  def:106, movecost:44, img:"QmdYxoZzpyrZEauVK3zwJtSm2NbaaWcQJ9oBn8NTMtkTd9" },
  898937: { collection:"planetdefnft", category:"crew", rarity:"epic",      name:"Bastion Defender",   atk:101, def:152, movecost:56, img:"QmRWAHtMB4GQHbjryTeCXdDKejSi2mhArgqX4xiteTphYk" },
  898938: { collection:"planetdefnft", category:"crew", rarity:"legendary", name:"Titan Guard",        atk:163, def:245, movecost:72, img:"QmXwWepCzJmnhBpipMXjEepx2nB8g2zfL7fJEKSn8RMKvn" },
  898939: { collection:"planetdefnft", category:"crew", rarity:"mythic",    name:"Shieldmaster",       atk:242, def:363, movecost:86, img:"QmPkgBzNKDn3fzjPvq5T3jpdyPVUFbYxffH7V6j7zmYfiX" },

  // ── PD CREATURES ─────────────────────────────────────────────────────────────
  888541: { collection:"planetdefnft", category:"creature", rarity:"common",    name:"Ma-Boar",                atk:10, def:8,  img:"bafybeidotzsn4soc6p3p7gommcasll6nm2mvnrxah6jh5e375riqvxnkba" },
  888549: { collection:"planetdefnft", category:"creature", rarity:"uncommon",  name:'DogX403 - The "Hotdog"', atk:12, def:9,  img:"bafybeibccre5kymkdchjw45antdozxolhxajnb6sig6h4liizmjzboacwe" },
  888550: { collection:"planetdefnft", category:"creature", rarity:"rare",      name:"Luminyx",                atk:14, def:15, img:"bafybeidqio4m4co4x7pmkppo64qyp3axycgi7zm2emzfejcxhmfnd7rlh4" },
  888554: { collection:"planetdefnft", category:"creature", rarity:"epic",      name:"Nebulon",                atk:18, def:16, img:"bafybeiam3dqdh2s7cwyt6rxvngu3ny7lvlyozystyjhcrykuhhqgwn446u" },
  888560: { collection:"planetdefnft", category:"creature", rarity:"legendary", name:"Chronowyrm",             atk:25, def:25, img:"bafybeie6nvflh7bbadplv4r5dz36httx6ub2vqk7mqpq6z23eagdajk5om" },
  888566: { collection:"planetdefnft", category:"creature", rarity:"mythic",    name:"Void Walker",            atk:30, def:28, img:"bafybeig5tteikdatxvc2cuxrbd46pae3yrupoghyaeagxre2jjrvhvjv6i" },

  // ── PD EQUIPMENT — Gadgets ───────────────────────────────────────────────────
  902055: { collection:"planetdefnft", category:"equipment", rarity:"common",    name:"Nano-Heal Injector",      atk:14,  def:14,  img:"QmWAsoCiw6daLYLrD6XXaZeNF4gP6xWonrAJY13ErSc3Lj" },
  902056: { collection:"planetdefnft", category:"equipment", rarity:"uncommon",  name:"FragFinder Lens-9000",    atk:25,  def:25,  img:"QmbcN18dZ45qeDicZ2Vj7pNyYoLJqXxPMfPhyfeUjoCkxm" },
  902057: { collection:"planetdefnft", category:"equipment", rarity:"rare",      name:"EMP Scrambler",           atk:38,  def:38,  img:"QmTkrgL7vAVcsLM694Fwaz3bkrFtA565npyqm3SLpW6BKh" },
  902058: { collection:"planetdefnft", category:"equipment", rarity:"epic",      name:"Crimson Hunter",          atk:54,  def:54,  img:"QmaZVA8YfkDsFiL8H9WDMB86pF38PXaA4tvLnZT7UkRLFb" },
  902059: { collection:"planetdefnft", category:"equipment", rarity:"legendary", name:"Neural Reflex Amplifier", atk:94,  def:94,  img:"QmZWHPYUvd7juEZWDXt9i5HosvR9QJGouptromN54wC3dD" },
  902060: { collection:"planetdefnft", category:"equipment", rarity:"mythic",    name:"Void Disruptor",          atk:148, def:148, img:"QmUKqkKNauB7CHACifqBQz1bAE6W5875JjETp4hqVzaL7e" },

  // ── PD EQUIPMENT — Weapons ───────────────────────────────────────────────────
  903762: { collection:"planetdefnft", category:"equipment", rarity:"common",    name:"Reaper-1 Rifle",        atk:26,  def:17,  img:"QmNcM7hN8xVcb7m4DqfFM5k5kxMd8cVH8zN6pNnCi8e4Sq" },
  903763: { collection:"planetdefnft", category:"equipment", rarity:"uncommon",  name:"Cyclone Repeater",      atk:40,  def:27,  img:"QmWZRT1WcrEhjdkH6KYWfwiSBsPmWdkHGB3S96VyNwpNDr" },
  903764: { collection:"planetdefnft", category:"equipment", rarity:"rare",      name:"Boar Rush-69",          atk:58,  def:38,  img:"QmTBiCeptFepQ1bEoUzNPkMtXXYGvdaGoBbhADyARnEE1N" },
  903765: { collection:"planetdefnft", category:"equipment", rarity:"epic",      name:"PyroFury Flamethrower", atk:78,  def:52,  img:"Qmby8S4epSXhR7kpAscihNJfM3N1AjXFV1nvKxzt2s9r31" },
  903766: { collection:"planetdefnft", category:"equipment", rarity:"legendary", name:"Stormpiercer Railgun",   atk:129, def:86,  img:"QmQNYCDyddc56G5qBiDz3QBi478BVBL5jLhjfH1odkQG3j" },
  903767: { collection:"planetdefnft", category:"equipment", rarity:"mythic",    name:"Void Annihilator",      atk:198, def:132, img:"QmYMLvZAy7r65M8Q6vAETZbqP9BY8G2VZSCCU7WDyQDcEB" },

  // ── PD EQUIPMENT — Protection ────────────────────────────────────────────────
  904159: { collection:"planetdefnft", category:"equipment", rarity:"common",    name:"Shellguard Vest",      atk:17,  def:26,  img:"QmdmatbGVr1kNXhuddzL4jgARQJTiNzeJfNTCsp9bttoXn" },
  904160: { collection:"planetdefnft", category:"equipment", rarity:"uncommon",  name:"Red Tusks Shield",     atk:27,  def:40,  img:"QmWCQff15JxWe9DPpB7QZu48cpw5Fw89hr8HLdptchHDqH" },
  904161: { collection:"planetdefnft", category:"equipment", rarity:"rare",      name:"Spectra-Veil Mk.I",    atk:38,  def:58,  img:"QmdJDbr9omKSgww4SX86KthP5Av25cduRq2UdpWCHJbf1h" },
  904162: { collection:"planetdefnft", category:"equipment", rarity:"epic",      name:"Drone Shield Swarm",   atk:52,  def:78,  img:"Qmc1iSnr1BUbmUVXz1GgZS2Gvfv2sKUkhkxSeUk3RPMbz2" },
  904163: { collection:"planetdefnft", category:"equipment", rarity:"legendary", name:"Neural Sync Exo-Suit", atk:86,  def:129, img:"QmYZXkTuRLcqh731WD2LfnrnvCAghgSYzywSwmqw9eiJf5" },
  904164: { collection:"planetdefnft", category:"equipment", rarity:"mythic",    name:"Eclipse Barrier",      atk:132, def:198, img:"QmZKf1sgqBxKePtkcoBr3ZZXrjBCBb3YF37i3PT5HpmRfX" },

  // ── PD SUPPLIES ──────────────────────────────────────────────────────────────
  900705: { collection:"planetdefnft", category:"supply", rarity:"common",    name:"Red Boar - Decaffeinated",      atk:0,  def:0,  movecost:0, move_cost_reduction:1,  img:"QmTfia5gGFrEeEK6XPDn6B4smcnAgAHr35rXr9TkksJZpo" },
  900706: { collection:"planetdefnft", category:"supply", rarity:"uncommon",  name:"Red Boar - Sugar Free",         atk:8,  def:8,  movecost:0, move_cost_reduction:9,  img:"QmUQJCTsGYuoaXLwXamycxWaxzHYYMLg3DzkDgbfymjx7v" },
  900707: { collection:"planetdefnft", category:"supply", rarity:"rare",      name:"Red Boar - Classic",            atk:16, def:16, movecost:0, move_cost_reduction:17, img:"QmZaQ78PKjWxATpPc3uRXXGNmsiMG2HdR1ZdhhVvmT1mz6" },
  900708: { collection:"planetdefnft", category:"supply", rarity:"epic",      name:"Red Boar - Cosmic Fusion",      atk:24, def:24, movecost:0, move_cost_reduction:25, img:"QmdoCX2YViExQ1g2EzBWVXApsjqsBJYJ9X98xgQpqRLhyP" },
  900709: { collection:"planetdefnft", category:"supply", rarity:"legendary", name:"Red Boar - Stellar Nectarion",  atk:42, def:42, movecost:0, move_cost_reduction:43, img:"QmZGFUzsZpg8n381fQunGxHMHmsFmC6fpaFWP6ES32k1Ra" },
  900710: { collection:"planetdefnft", category:"supply", rarity:"mythic",    name:"Red Boar - Primordial Essence", atk:62, def:62, movecost:0, move_cost_reduction:62, img:"QmfUz3BdHYDZ8nEHgmCRmKDGH4erDyHUhcYQcUHkMsV6LN" },

  // ── PD SERVICES — LAVA LUX HOTELS ────────────────────────────────────────────
  904574: { collection:"planetdefnft", category:"service", rarity:"common",    name:"Lava Lux - Basic Suite",      atk:0,  def:0,  movecost:0, img:"QmUe1evcLDzwvdAx3JA5EyE4y8PDcGwRPKimpDdTc9QPVh" },
  904575: { collection:"planetdefnft", category:"service", rarity:"uncommon",  name:"Lava Lux - Thermal Pass",     atk:8,  def:8,  movecost:0, img:"QmYXhzrJQozcJ5w6kf8WqTqMwhh5UiuPGtYD2i5GFHxjPV" },
  904576: { collection:"planetdefnft", category:"service", rarity:"rare",      name:"Lava Lux - Magma Therapy",    atk:16, def:16, movecost:0, img:"QmVM6ocqdQ4RM8rHN1wtuRYSEvYy362QXmLgv9ehYVr8dF"  },
  904577: { collection:"planetdefnft", category:"service", rarity:"epic",      name:"Lava Lux - Ember Serenity",   atk:24, def:24, movecost:0, img:"QmXfq31RgmMAD6ykZJynaoGQye1YUx2bijBKTm99nwr8dA"  },
  904578: { collection:"planetdefnft", category:"service", rarity:"legendary", name:"Lava Lux - Core Retreat",     atk:42, def:42, movecost:0, img:"QmegmC7DzkyNYZy1Uz8BaaKqm1CU424hLQADQtqkhrybpC" },
  904579: { collection:"planetdefnft", category:"service", rarity:"mythic",    name:"Lava Lux - Volcanic VIP",     atk:62, def:62, movecost:0, img:"QmU9m8synBXRezKjVmxHrry6Q4ML5nQ624nwWThaVDSH3j"  },

  // ── AW CREW — Common (Stone) ─────────────────────────────────────────────────
  // movecost = PD_Movecost_Minutes_Added × 6  (converts minutes to ×10-second units)
  // Abundant AW crew are excluded — they don't count in PD's balance system
  19626: { collection:"alien.worlds", category:"crew", rarity:"common", shine:"stone",    name:"LG Soldier",      atk:5,   def:5,   movecost:10 },
  19638: { collection:"alien.worlds", category:"crew", rarity:"common", shine:"stone",    name:"LG Soldier",      atk:11,  def:8,   movecost:20 },
  19628: { collection:"alien.worlds", category:"crew", rarity:"common", shine:"stone",    name:"Nordic Warrior",  atk:19,  def:9,   movecost:30 },
  19647: { collection:"alien.worlds", category:"crew", rarity:"common", shine:"stone",    name:"Terminator",      atk:19,  def:10,  movecost:30 },
  19640: { collection:"alien.worlds", category:"crew", rarity:"common", shine:"stone",    name:"Nordic Warrior",  atk:17,  def:11,  movecost:30 },
  19635: { collection:"alien.worlds", category:"crew", rarity:"common", shine:"stone",    name:"Terminator",      atk:17,  def:11,  movecost:30 },
  19639: { collection:"alien.worlds", category:"crew", rarity:"common", shine:"stone",    name:"Grey Scientist",  atk:20,  def:23,  movecost:50 },
  19627: { collection:"alien.worlds", category:"crew", rarity:"common", shine:"stone",    name:"Grey Scientist",  atk:17,  def:26,  movecost:50 },

  // ── AW CREW — Common (Gold) ──────────────────────────────────────────────────
  141518: { collection:"alien.worlds", category:"crew", rarity:"common", shine:"gold",    name:"LG Soldier",      atk:15,  def:18,  movecost:10 },
  141531: { collection:"alien.worlds", category:"crew", rarity:"common", shine:"gold",    name:"LG Soldier",      atk:36,  def:24,  movecost:20 },
  141520: { collection:"alien.worlds", category:"crew", rarity:"common", shine:"gold",    name:"Nordic Warrior",  atk:60,  def:27,  movecost:30 },
  141540: { collection:"alien.worlds", category:"crew", rarity:"common", shine:"gold",    name:"Terminator",      atk:60,  def:30,  movecost:30 },
  141533: { collection:"alien.worlds", category:"crew", rarity:"common", shine:"gold",    name:"Nordic Warrior",  atk:54,  def:33,  movecost:30 },
  141528: { collection:"alien.worlds", category:"crew", rarity:"common", shine:"gold",    name:"Terminator",      atk:54,  def:33,  movecost:30 },
  141532: { collection:"alien.worlds", category:"crew", rarity:"common", shine:"gold",    name:"Grey Scientist",  atk:60,  def:75,  movecost:50 },
  141519: { collection:"alien.worlds", category:"crew", rarity:"common", shine:"gold",    name:"Grey Scientist",  atk:51,  def:84,  movecost:50 },

  // ── AW CREW — Common (Stardust) ──────────────────────────────────────────────
  141543: { collection:"alien.worlds", category:"crew", rarity:"common", shine:"stardust", name:"LG Soldier",     atk:35,  def:30,  movecost:10 },
  141553: { collection:"alien.worlds", category:"crew", rarity:"common", shine:"stardust", name:"LG Soldier",     atk:60,  def:50,  movecost:20 },
  141545: { collection:"alien.worlds", category:"crew", rarity:"common", shine:"stardust", name:"Nordic Warrior", atk:100, def:55,  movecost:30 },
  141561: { collection:"alien.worlds", category:"crew", rarity:"common", shine:"stardust", name:"Terminator",     atk:100, def:60,  movecost:30 },
  141555: { collection:"alien.worlds", category:"crew", rarity:"common", shine:"stardust", name:"Nordic Warrior", atk:90,  def:65,  movecost:30 },
  141551: { collection:"alien.worlds", category:"crew", rarity:"common", shine:"stardust", name:"Terminator",     atk:90,  def:65,  movecost:30 },
  141554: { collection:"alien.worlds", category:"crew", rarity:"common", shine:"stardust", name:"Grey Scientist", atk:110, def:125, movecost:50 },
  141544: { collection:"alien.worlds", category:"crew", rarity:"common", shine:"stardust", name:"Grey Scientist", atk:95,  def:140, movecost:50 },

  // ── AW CREW — Rare (Stone) ───────────────────────────────────────────────────
  254350: { collection:"alien.worlds", category:"crew", rarity:"rare", shine:"stone",    name:"Intergalactic Zombie",    atk:21,  def:13,  movecost:30 },
  235640: { collection:"alien.worlds", category:"crew", rarity:"rare", shine:"stone",    name:"Intergalactic Zombie",    atk:21,  def:13,  movecost:30 },
  19646:  { collection:"alien.worlds", category:"crew", rarity:"rare", shine:"stone",    name:"Robot Supersoldier",      atk:18,  def:16,  movecost:30 },
  19634:  { collection:"alien.worlds", category:"crew", rarity:"rare", shine:"stone",    name:"Robot Supersoldier",      atk:17,  def:17,  movecost:30 },
  19641:  { collection:"alien.worlds", category:"crew", rarity:"rare", shine:"stone",    name:"Wise Ancient One",        atk:11,  def:28,  movecost:40 },
  19629:  { collection:"alien.worlds", category:"crew", rarity:"rare", shine:"stone",    name:"Wise Ancient One",        atk:9,   def:31,  movecost:40 },
  19631:  { collection:"alien.worlds", category:"crew", rarity:"rare", shine:"stone",    name:"Explosives Specialist",   atk:21,  def:37,  movecost:60 },
  19643:  { collection:"alien.worlds", category:"crew", rarity:"rare", shine:"stone",    name:"Explosives Specialist",   atk:17,  def:40,  movecost:60 },

  // ── AW CREW — Rare (Gold) ────────────────────────────────────────────────────
  254352: { collection:"alien.worlds", category:"crew", rarity:"rare", shine:"gold",    name:"Intergalactic Zombie",    atk:66,  def:39,  movecost:30 },
  235642: { collection:"alien.worlds", category:"crew", rarity:"rare", shine:"gold",    name:"Intergalactic Zombie",    atk:66,  def:39,  movecost:30 },
  141539: { collection:"alien.worlds", category:"crew", rarity:"rare", shine:"gold",    name:"Robot Supersoldier",      atk:60,  def:48,  movecost:30 },
  141527: { collection:"alien.worlds", category:"crew", rarity:"rare", shine:"gold",    name:"Robot Supersoldier",      atk:57,  def:51,  movecost:30 },
  141534: { collection:"alien.worlds", category:"crew", rarity:"rare", shine:"gold",    name:"Wise Ancient One",        atk:33,  def:90,  movecost:40 },
  141522: { collection:"alien.worlds", category:"crew", rarity:"rare", shine:"gold",    name:"Wise Ancient One",        atk:27,  def:99,  movecost:40 },
  141524: { collection:"alien.worlds", category:"crew", rarity:"rare", shine:"gold",    name:"Explosives Specialist",   atk:63,  def:120, movecost:60 },
  141536: { collection:"alien.worlds", category:"crew", rarity:"rare", shine:"gold",    name:"Explosives Specialist",   atk:51,  def:129, movecost:60 },

  // ── AW CREW — Rare (Stardust) ────────────────────────────────────────────────
  254354: { collection:"alien.worlds", category:"crew", rarity:"rare", shine:"stardust", name:"Intergalactic Zombie",   atk:110, def:70,  movecost:30 },
  235644: { collection:"alien.worlds", category:"crew", rarity:"rare", shine:"stardust", name:"Intergalactic Zombie",   atk:110, def:70,  movecost:30 },
  141560: { collection:"alien.worlds", category:"crew", rarity:"rare", shine:"stardust", name:"Robot Supersoldier",     atk:100, def:90,  movecost:30 },
  141550: { collection:"alien.worlds", category:"crew", rarity:"rare", shine:"stardust", name:"Robot Supersoldier",     atk:95,  def:95,  movecost:30 },
  141556: { collection:"alien.worlds", category:"crew", rarity:"rare", shine:"stardust", name:"Wise Ancient One",       atk:65,  def:150, movecost:40 },
  141546: { collection:"alien.worlds", category:"crew", rarity:"rare", shine:"stardust", name:"Wise Ancient One",       atk:55,  def:165, movecost:40 },
  141548: { collection:"alien.worlds", category:"crew", rarity:"rare", shine:"stardust", name:"Explosives Specialist",  atk:115, def:200, movecost:60 },
  141558: { collection:"alien.worlds", category:"crew", rarity:"rare", shine:"stardust", name:"Explosives Specialist",  atk:100, def:215, movecost:60 },

  // ── AW CREW — Rare (Antimatter) ──────────────────────────────────────────────
  254356: { collection:"alien.worlds", category:"crew", rarity:"rare", shine:"antimatter", name:"Intergalactic Zombie",  atk:161, def:98,  movecost:30 },
  235646: { collection:"alien.worlds", category:"crew", rarity:"rare", shine:"antimatter", name:"Intergalactic Zombie",  atk:161, def:98,  movecost:30 },
  141574: { collection:"alien.worlds", category:"crew", rarity:"rare", shine:"antimatter", name:"Robot Supersoldier",    atk:161, def:126, movecost:30 },
  141568: { collection:"alien.worlds", category:"crew", rarity:"rare", shine:"antimatter", name:"Robot Supersoldier",    atk:147, def:140, movecost:30 },
  141570: { collection:"alien.worlds", category:"crew", rarity:"rare", shine:"antimatter", name:"Wise Ancient One",      atk:112, def:210, movecost:40 },
  141564: { collection:"alien.worlds", category:"crew", rarity:"rare", shine:"antimatter", name:"Wise Ancient One",      atk:91,  def:238, movecost:40 },
  141566: { collection:"alien.worlds", category:"crew", rarity:"rare", shine:"antimatter", name:"Explosives Specialist", atk:175, def:294, movecost:60 },
  141572: { collection:"alien.worlds", category:"crew", rarity:"rare", shine:"antimatter", name:"Explosives Specialist", atk:161, def:308, movecost:60 },

  // ── AW CREW — Rare (XDimension) ──────────────────────────────────────────────
  20993: { collection:"alien.worlds", category:"crew", rarity:"rare", shine:"xdimension", name:"Robot Supersoldier",     atk:189, def:153, movecost:30 },
  20990: { collection:"alien.worlds", category:"crew", rarity:"rare", shine:"xdimension", name:"Robot Supersoldier",     atk:171, def:171, movecost:30 },
  20991: { collection:"alien.worlds", category:"crew", rarity:"rare", shine:"xdimension", name:"Wise Ancient One",       atk:117, def:270, movecost:40 },
  20988: { collection:"alien.worlds", category:"crew", rarity:"rare", shine:"xdimension", name:"Wise Ancient One",       atk:90,  def:297, movecost:40 },
  20989: { collection:"alien.worlds", category:"crew", rarity:"rare", shine:"xdimension", name:"Explosives Specialist",  atk:207, def:351, movecost:60 },
  20992: { collection:"alien.worlds", category:"crew", rarity:"rare", shine:"xdimension", name:"Explosives Specialist",  atk:162, def:387, movecost:60 },

  // ── AW CREW — Epic (Stone) ───────────────────────────────────────────────────
  254351: { collection:"alien.worlds", category:"crew", rarity:"epic", shine:"stone",    name:"Interstellar Emissary",   atk:14,  def:20,  movecost:20 },
  235641: { collection:"alien.worlds", category:"crew", rarity:"epic", shine:"stone",    name:"Interstellar Emissary",   atk:14,  def:20,  movecost:20 },
  19645:  { collection:"alien.worlds", category:"crew", rarity:"epic", shine:"stone",    name:"Enhanced Reptiloid",      atk:25,  def:20,  movecost:30 },
  19636:  { collection:"alien.worlds", category:"crew", rarity:"epic", shine:"stone",    name:"Mysterious Hacker",       atk:22,  def:22,  movecost:30 },
  19633:  { collection:"alien.worlds", category:"crew", rarity:"epic", shine:"stone",    name:"Enhanced Reptiloid",      atk:22,  def:22,  movecost:30 },
  19624:  { collection:"alien.worlds", category:"crew", rarity:"epic", shine:"stone",    name:"Mysterious Hacker",       atk:21,  def:23,  movecost:30 },
  28422:  { collection:"alien.worlds", category:"crew", rarity:"epic", shine:"stone",    name:"Astronaut (KOGs)",        atk:40,  def:24,  movecost:50 },

  // ── AW CREW — Epic (Gold) ────────────────────────────────────────────────────
  141538: { collection:"alien.worlds", category:"crew", rarity:"epic", shine:"gold",    name:"Enhanced Reptiloid",      atk:81,  def:60,  movecost:30 },
  254353: { collection:"alien.worlds", category:"crew", rarity:"epic", shine:"gold",    name:"Interstellar Emissary",   atk:42,  def:63,  movecost:20 },
  235643: { collection:"alien.worlds", category:"crew", rarity:"epic", shine:"gold",    name:"Interstellar Emissary",   atk:42,  def:63,  movecost:20 },
  141541: { collection:"alien.worlds", category:"crew", rarity:"epic", shine:"gold",    name:"Astronaut (KOGs)",        atk:132, def:72,  movecost:50 },
  141529: { collection:"alien.worlds", category:"crew", rarity:"epic", shine:"gold",    name:"Mysterious Hacker",       atk:66,  def:72,  movecost:30 },
  141526: { collection:"alien.worlds", category:"crew", rarity:"epic", shine:"gold",    name:"Enhanced Reptiloid",      atk:66,  def:72,  movecost:30 },
  141516: { collection:"alien.worlds", category:"crew", rarity:"epic", shine:"gold",    name:"Mysterious Hacker",       atk:63,  def:75,  movecost:30 },

  // ── AW CREW — Epic (Stardust) ────────────────────────────────────────────────
  254355: { collection:"alien.worlds", category:"crew", rarity:"epic", shine:"stardust", name:"Interstellar Emissary",  atk:75,  def:105, movecost:20 },
  235645: { collection:"alien.worlds", category:"crew", rarity:"epic", shine:"stardust", name:"Interstellar Emissary",  atk:75,  def:105, movecost:20 },
  141559: { collection:"alien.worlds", category:"crew", rarity:"epic", shine:"stardust", name:"Enhanced Reptiloid",     atk:135, def:110, movecost:30 },
  141552: { collection:"alien.worlds", category:"crew", rarity:"epic", shine:"stardust", name:"Mysterious Hacker",      atk:120, def:120, movecost:30 },
  141549: { collection:"alien.worlds", category:"crew", rarity:"epic", shine:"stardust", name:"Enhanced Reptiloid",     atk:120, def:120, movecost:30 },
  141542: { collection:"alien.worlds", category:"crew", rarity:"epic", shine:"stardust", name:"Mysterious Hacker",      atk:115, def:125, movecost:30 },
  141562: { collection:"alien.worlds", category:"crew", rarity:"epic", shine:"stardust", name:"Astronaut (KOGs)",       atk:220, def:135, movecost:50 },

  // ── AW CREW — Epic (Antimatter) ──────────────────────────────────────────────
  254357: { collection:"alien.worlds", category:"crew", rarity:"epic", shine:"antimatter", name:"Interstellar Emissary", atk:105, def:154, movecost:20 },
  235647: { collection:"alien.worlds", category:"crew", rarity:"epic", shine:"antimatter", name:"Interstellar Emissary", atk:105, def:154, movecost:20 },
  141573: { collection:"alien.worlds", category:"crew", rarity:"epic", shine:"antimatter", name:"Enhanced Reptiloid",    atk:210, def:154, movecost:30 },
  141569: { collection:"alien.worlds", category:"crew", rarity:"epic", shine:"antimatter", name:"Mysterious Hacker",     atk:182, def:182, movecost:30 },
  141567: { collection:"alien.worlds", category:"crew", rarity:"epic", shine:"antimatter", name:"Enhanced Reptiloid",    atk:175, def:182, movecost:30 },
  141563: { collection:"alien.worlds", category:"crew", rarity:"epic", shine:"antimatter", name:"Mysterious Hacker",     atk:175, def:182, movecost:30 },

  // ── AW CREW — Epic (XDimension) ──────────────────────────────────────────────
  44933: { collection:"alien.worlds", category:"crew", rarity:"epic", shine:"xdimension", name:"Alien Bat (Horrors)",    atk:189, def:126, movecost:20 },

  // ── AW CREW — Legendary ──────────────────────────────────────────────────────
  19630:  { collection:"alien.worlds", category:"crew", rarity:"legendary", shine:"stone",      name:"Storm Giant", atk:81,  def:42,  movecost:70 },
  19642:  { collection:"alien.worlds", category:"crew", rarity:"legendary", shine:"stone",      name:"Storm Giant", atk:75,  def:46,  movecost:70 },
  141523: { collection:"alien.worlds", category:"crew", rarity:"legendary", shine:"gold",       name:"Storm Giant", atk:255, def:126, movecost:70 },
  141535: { collection:"alien.worlds", category:"crew", rarity:"legendary", shine:"gold",       name:"Storm Giant", atk:240, def:138, movecost:70 },
  141547: { collection:"alien.worlds", category:"crew", rarity:"legendary", shine:"stardust",   name:"Storm Giant", atk:425, def:225, movecost:70 },
  141557: { collection:"alien.worlds", category:"crew", rarity:"legendary", shine:"stardust",   name:"Storm Giant", atk:400, def:245, movecost:70 },
  141565: { collection:"alien.worlds", category:"crew", rarity:"legendary", shine:"antimatter", name:"Storm Giant", atk:602, def:336, movecost:70 },
  141571: { collection:"alien.worlds", category:"crew", rarity:"legendary", shine:"antimatter", name:"Storm Giant", atk:574, def:364, movecost:70 },
  28424:  { collection:"alien.worlds", category:"crew", rarity:"legendary", shine:"xdimension", name:"Storm Giant", atk:747, def:405, movecost:70 },
  28423:  { collection:"alien.worlds", category:"crew", rarity:"legendary", shine:"xdimension", name:"Storm Giant", atk:711, def:432, movecost:70 },

  // ── AW ARMS — Abundant ───────────────────────────────────────────────────────
  // PD rule: abundant arms = +1/+1 stone, +3/+3 gold regardless of base stat
  19583:  { collection:"alien.worlds", category:"arms", rarity:"abundant", shine:"stone", name:"Standard Sword",     atk:1, def:1 },
  19609:  { collection:"alien.worlds", category:"arms", rarity:"abundant", shine:"stone", name:"Rock Cudgel",        atk:1, def:1 },
  19610:  { collection:"alien.worlds", category:"arms", rarity:"abundant", shine:"stone", name:"Standard Issue Axe", atk:1, def:1 },
  19619:  { collection:"alien.worlds", category:"arms", rarity:"abundant", shine:"stone", name:"Standard Shield",    atk:1, def:1 },
  141407: { collection:"alien.worlds", category:"arms", rarity:"abundant", shine:"gold",  name:"Standard Sword",     atk:3, def:3 },
  141433: { collection:"alien.worlds", category:"arms", rarity:"abundant", shine:"gold",  name:"Rock Cudgel",        atk:3, def:3 },
  141434: { collection:"alien.worlds", category:"arms", rarity:"abundant", shine:"gold",  name:"Standard Issue Axe", atk:3, def:3 },
  141443: { collection:"alien.worlds", category:"arms", rarity:"abundant", shine:"gold",  name:"Standard Shield",    atk:3, def:3 },

  // ── AW ARMS — Common (Stone) ─────────────────────────────────────────────────
  19584: { collection:"alien.worlds", category:"arms", rarity:"common", shine:"stone",    name:"Rock Blade",         atk:14, def:5  },
  19585: { collection:"alien.worlds", category:"arms", rarity:"common", shine:"stone",    name:"Stave of Deception", atk:7,  def:8  },
  19586: { collection:"alien.worlds", category:"arms", rarity:"common", shine:"stone",    name:"Titanium Dagger",    atk:13, def:6  },
  19588: { collection:"alien.worlds", category:"arms", rarity:"common", shine:"stone",    name:"Kite Axe",           atk:10, def:13 },
  19591: { collection:"alien.worlds", category:"arms", rarity:"common", shine:"stone",    name:"Widow Maker",        atk:11, def:15 },
  19594: { collection:"alien.worlds", category:"arms", rarity:"common", shine:"stone",    name:"Spike Hammer",       atk:13, def:27 },
  19604: { collection:"alien.worlds", category:"arms", rarity:"common", shine:"stone",    name:"Confuser",           atk:5,  def:18 },
  19613: { collection:"alien.worlds", category:"arms", rarity:"common", shine:"stone",    name:"Lithium Dagger",     atk:14, def:42 },
  19616: { collection:"alien.worlds", category:"arms", rarity:"common", shine:"stone",    name:"Infernal Axe",       atk:13, def:5  },
  19620: { collection:"alien.worlds", category:"arms", rarity:"common", shine:"stone",    name:"Sky Shield",         atk:5,  def:12 },
  19621: { collection:"alien.worlds", category:"arms", rarity:"common", shine:"stone",    name:"Plasma Shield",      atk:6,  def:6  },

  // ── AW ARMS — Common (Gold) ──────────────────────────────────────────────────
  141408: { collection:"alien.worlds", category:"arms", rarity:"common", shine:"gold",    name:"Rock Blade",         atk:45, def:9  },
  141409: { collection:"alien.worlds", category:"arms", rarity:"common", shine:"gold",    name:"Stave of Deception", atk:21, def:8  },
  141410: { collection:"alien.worlds", category:"arms", rarity:"common", shine:"gold",    name:"Titanium Dagger",    atk:42, def:6  },
  141412: { collection:"alien.worlds", category:"arms", rarity:"common", shine:"gold",    name:"Kite Axe",           atk:33, def:14 },
  141415: { collection:"alien.worlds", category:"arms", rarity:"common", shine:"gold",    name:"Widow Maker",        atk:36, def:5  },
  141418: { collection:"alien.worlds", category:"arms", rarity:"common", shine:"gold",    name:"Spike Hammer",       atk:42, def:6  },
  141428: { collection:"alien.worlds", category:"arms", rarity:"common", shine:"gold",    name:"Confuser",           atk:15, def:14 },
  141437: { collection:"alien.worlds", category:"arms", rarity:"common", shine:"gold",    name:"Lithium Dagger",     atk:45, def:13 },
  141440: { collection:"alien.worlds", category:"arms", rarity:"common", shine:"gold",    name:"Infernal Axe",       atk:42, def:15 },
  141444: { collection:"alien.worlds", category:"arms", rarity:"common", shine:"gold",    name:"Sky Shield",         atk:15, def:39 },
  141445: { collection:"alien.worlds", category:"arms", rarity:"common", shine:"gold",    name:"Plasma Shield",      atk:18, def:18 },

  // ── AW ARMS — Common (Stardust) ──────────────────────────────────────────────
  141450: { collection:"alien.worlds", category:"arms", rarity:"common", shine:"stardust", name:"Rock Blade",         atk:75, def:27 },
  141451: { collection:"alien.worlds", category:"arms", rarity:"common", shine:"stardust", name:"Stave of Deception", atk:40, def:24 },
  141452: { collection:"alien.worlds", category:"arms", rarity:"common", shine:"stardust", name:"Titanium Dagger",    atk:70, def:18 },
  141454: { collection:"alien.worlds", category:"arms", rarity:"common", shine:"stardust", name:"Kite Axe",           atk:55, def:45 },
  141457: { collection:"alien.worlds", category:"arms", rarity:"common", shine:"stardust", name:"Widow Maker",        atk:60, def:15 },
  141460: { collection:"alien.worlds", category:"arms", rarity:"common", shine:"stardust", name:"Spike Hammer",       atk:70, def:18 },
  141470: { collection:"alien.worlds", category:"arms", rarity:"common", shine:"stardust", name:"Confuser",           atk:30, def:45 },
  141477: { collection:"alien.worlds", category:"arms", rarity:"common", shine:"stardust", name:"Lithium Dagger",     atk:75, def:42 },
  141480: { collection:"alien.worlds", category:"arms", rarity:"common", shine:"stardust", name:"Infernal Axe",       atk:70, def:30 },
  141483: { collection:"alien.worlds", category:"arms", rarity:"common", shine:"stardust", name:"Sky Shield",         atk:30, def:65 },
  141484: { collection:"alien.worlds", category:"arms", rarity:"common", shine:"stardust", name:"Plasma Shield",      atk:35, def:35 },

  // ── AW ARMS — Rare (Stone) ───────────────────────────────────────────────────
  19587: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"stone",    name:"Jaggered Spear",       atk:17, def:50  },
  19589: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"stone",    name:"Emerald Dagger",       atk:17, def:45  },
  19590: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"stone",    name:"Equalizer Bow",        atk:18, def:35  },
  19592: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"stone",    name:"Storm Edge Sword",     atk:14, def:75  },
  19597: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"stone",    name:"Waxon Sword",          atk:14, def:30  },
  19602: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"stone",    name:"Moonshot Blade",       atk:16, def:35  },
  19603: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"stone",    name:"Dawn Sword",           atk:13, def:75  },
  19605: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"stone",    name:"Necromancers Hammer",  atk:13, def:70  },
  19606: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"stone",    name:"Green Axe",            atk:12, def:7   },
  19607: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"stone",    name:"Nordic Warhammer",     atk:15, def:8   },
  19617: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"stone",    name:"Reptiloid Blade",      atk:16, def:6   },

  // ── AW ARMS — Rare (Gold) ────────────────────────────────────────────────────
  141411: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"gold",    name:"Jaggered Spear",       atk:54,  def:11  },
  141413: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"gold",    name:"Emerald Dagger",       atk:54,  def:11  },
  141414: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"gold",    name:"Equalizer Bow",        atk:57,  def:8   },
  141416: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"gold",    name:"Storm Edge Sword",     atk:45,  def:12  },
  141421: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"gold",    name:"Waxon Sword",          atk:45,  def:12  },
  141426: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"gold",    name:"Moonshot Blade",       atk:51,  def:13  },
  141427: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"gold",    name:"Dawn Sword",           atk:42,  def:10  },
  141429: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"gold",    name:"Necromancers Hammer",  atk:42,  def:8   },
  141430: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"gold",    name:"Green Axe",            atk:36,  def:21  },
  141431: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"gold",    name:"Nordic Warhammer",     atk:48,  def:24  },
  141441: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"gold",    name:"Reptiloid Blade",      atk:51,  def:18  },

  // ── AW ARMS — Rare (Stardust) ────────────────────────────────────────────────
  141453: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"stardust", name:"Jaggered Spear",      atk:90,  def:33  },
  141455: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"stardust", name:"Emerald Dagger",      atk:90,  def:33  },
  141456: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"stardust", name:"Equalizer Bow",       atk:95,  def:24  },
  141458: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"stardust", name:"Storm Edge Sword",    atk:80,  def:36  },
  141463: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"stardust", name:"Waxon Sword",         atk:75,  def:36  },
  141468: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"stardust", name:"Moonshot Blade",      atk:85,  def:42  },
  141469: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"stardust", name:"Dawn Sword",          atk:70,  def:30  },
  141471: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"stardust", name:"Necromancers Hammer", atk:70,  def:24  },
  141472: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"stardust", name:"Green Axe",           atk:65,  def:40  },
  141473: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"stardust", name:"Nordic Warhammer",    atk:80,  def:45  },
  141481: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"stardust", name:"Reptiloid Blade",     atk:85,  def:35  },

  // ── AW ARMS — Rare (Antimatter) ──────────────────────────────────────────────
  141489: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"antimatter", name:"Jaggered Spear",      atk:133, def:55  },
  141490: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"antimatter", name:"Emerald Dagger",      atk:133, def:60  },
  141491: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"antimatter", name:"Equalizer Bow",       atk:140, def:45  },
  141492: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"antimatter", name:"Storm Edge Sword",    atk:119, def:65  },
  141496: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"antimatter", name:"Waxon Sword",         atk:112, def:70  },
  141501: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"antimatter", name:"Moonshot Blade",      atk:126, def:70  },
  141502: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"antimatter", name:"Dawn Sword",          atk:105, def:55  },
  141503: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"antimatter", name:"Necromancers Hammer", atk:105, def:45  },
  141504: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"antimatter", name:"Green Axe",           atk:98,  def:63  },
  141505: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"antimatter", name:"Nordic Warhammer",    atk:119, def:70  },
  141511: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"antimatter", name:"Reptiloid Blade",     atk:126, def:56  },

  // ── AW ARMS — Rare (XDimension) ──────────────────────────────────────────────
  20973: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"xdimension", name:"Jaggered Spear",       atk:171, def:84  },
  20974: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"xdimension", name:"Emerald Dagger",       atk:171, def:91  },
  20975: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"xdimension", name:"Equalizer Bow",        atk:180, def:70  },
  20976: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"xdimension", name:"Storm Edge Sword",     atk:144, def:98  },
  20977: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"xdimension", name:"Waxon Sword",          atk:144, def:105 },
  20978: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"xdimension", name:"Moonshot Blade",       atk:162, def:105 },
  20979: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"xdimension", name:"Dawn Sword",           atk:135, def:84  },
  20980: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"xdimension", name:"Necromancers Hammer",  atk:135, def:70  },
  20981: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"xdimension", name:"Green Axe",            atk:126, def:90  },
  20982: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"xdimension", name:"Nordic Warhammer",     atk:153, def:90  },
  20983: { collection:"alien.worlds", category:"arms", rarity:"rare", shine:"xdimension", name:"Reptiloid Blade",      atk:162, def:72  },

  // ── AW ARMS — Epic (Stone) ───────────────────────────────────────────────────
  19593: { collection:"alien.worlds", category:"arms", rarity:"epic", shine:"stone",    name:"Waxon Staff",          atk:16,  def:117 },
  19595: { collection:"alien.worlds", category:"arms", rarity:"epic", shine:"stone",    name:"Star Fire Sword",      atk:20,  def:117 },
  19596: { collection:"alien.worlds", category:"arms", rarity:"epic", shine:"stone",    name:"Sandmaster Spear",     atk:22,  def:90  },
  19599: { collection:"alien.worlds", category:"arms", rarity:"epic", shine:"stone",    name:"Elite Dagger",         atk:23,  def:126 },
  19601: { collection:"alien.worlds", category:"arms", rarity:"epic", shine:"stone",    name:"Randomizer Bow",       atk:23,  def:126 },
  19612: { collection:"alien.worlds", category:"arms", rarity:"epic", shine:"stone",    name:"Dagger of Creation",   atk:22,  def:135 },
  19615: { collection:"alien.worlds", category:"arms", rarity:"epic", shine:"stone",    name:"Toothed Dagger",       atk:19,  def:108 },
  19622: { collection:"alien.worlds", category:"arms", rarity:"epic", shine:"stone",    name:"Waxon Shield",         atk:15,  def:99  },

  // ── AW ARMS — Epic (Gold) ────────────────────────────────────────────────────
  141417: { collection:"alien.worlds", category:"arms", rarity:"epic", shine:"gold",    name:"Waxon Staff",          atk:48,  def:19  },
  141419: { collection:"alien.worlds", category:"arms", rarity:"epic", shine:"gold",    name:"Star Fire Sword",      atk:63,  def:14  },
  141420: { collection:"alien.worlds", category:"arms", rarity:"epic", shine:"gold",    name:"Sandmaster Spear",     atk:69,  def:12  },
  141423: { collection:"alien.worlds", category:"arms", rarity:"epic", shine:"gold",    name:"Elite Dagger",         atk:72,  def:12  },
  141425: { collection:"alien.worlds", category:"arms", rarity:"epic", shine:"gold",    name:"Randomizer Bow",       atk:72,  def:11  },
  141436: { collection:"alien.worlds", category:"arms", rarity:"epic", shine:"gold",    name:"Dagger of Creation",   atk:69,  def:13  },
  141439: { collection:"alien.worlds", category:"arms", rarity:"epic", shine:"gold",    name:"Toothed Dagger",       atk:60,  def:15  },
  141446: { collection:"alien.worlds", category:"arms", rarity:"epic", shine:"gold",    name:"Waxon Shield",         atk:45,  def:19  },

  // ── AW ARMS — Epic (Stardust) ────────────────────────────────────────────────
  141459: { collection:"alien.worlds", category:"arms", rarity:"epic", shine:"stardust", name:"Waxon Staff",         atk:85,  def:60  },
  141461: { collection:"alien.worlds", category:"arms", rarity:"epic", shine:"stardust", name:"Star Fire Sword",     atk:105, def:42  },
  141462: { collection:"alien.worlds", category:"arms", rarity:"epic", shine:"stardust", name:"Sandmaster Spear",    atk:115, def:36  },
  141465: { collection:"alien.worlds", category:"arms", rarity:"epic", shine:"stardust", name:"Elite Dagger",        atk:120, def:36  },
  141467: { collection:"alien.worlds", category:"arms", rarity:"epic", shine:"stardust", name:"Randomizer Bow",      atk:120, def:33  },
  141476: { collection:"alien.worlds", category:"arms", rarity:"epic", shine:"stardust", name:"Dagger of Creation",  atk:115, def:39  },
  141479: { collection:"alien.worlds", category:"arms", rarity:"epic", shine:"stardust", name:"Toothed Dagger",      atk:100, def:45  },
  141485: { collection:"alien.worlds", category:"arms", rarity:"epic", shine:"stardust", name:"Waxon Shield",        atk:80,  def:60  },

  // ── AW ARMS — Epic (Antimatter) ──────────────────────────────────────────────
  141493: { collection:"alien.worlds", category:"arms", rarity:"epic", shine:"antimatter", name:"Waxon Staff",       atk:126, def:100 },
  141494: { collection:"alien.worlds", category:"arms", rarity:"epic", shine:"antimatter", name:"Star Fire Sword",   atk:154, def:75  },
  141495: { collection:"alien.worlds", category:"arms", rarity:"epic", shine:"antimatter", name:"Sandmaster Spear",  atk:168, def:65  },
  141498: { collection:"alien.worlds", category:"arms", rarity:"epic", shine:"antimatter", name:"Elite Dagger",      atk:175, def:65  },
  141500: { collection:"alien.worlds", category:"arms", rarity:"epic", shine:"antimatter", name:"Randomizer Bow",    atk:175, def:60  },
  141508: { collection:"alien.worlds", category:"arms", rarity:"epic", shine:"antimatter", name:"Dagger of Creation",atk:168, def:70  },
  141510: { collection:"alien.worlds", category:"arms", rarity:"epic", shine:"antimatter", name:"Toothed Dagger",    atk:147, def:80  },
  141513: { collection:"alien.worlds", category:"arms", rarity:"epic", shine:"antimatter", name:"Waxon Shield",      atk:119, def:100 },

  // ── AW ARMS — Legendary (Stone) ──────────────────────────────────────────────
  19598: { collection:"alien.worlds", category:"arms", rarity:"legendary", shine:"stone",    name:"Healing Blade",    atk:32,  def:147 },
  19600: { collection:"alien.worlds", category:"arms", rarity:"legendary", shine:"stone",    name:"Eternal Blade",    atk:35,  def:112 },
  19608: { collection:"alien.worlds", category:"arms", rarity:"legendary", shine:"stone",    name:"Galatic Fireblade",atk:38,  def:98  },
  19611: { collection:"alien.worlds", category:"arms", rarity:"legendary", shine:"stone",    name:"Divine Blade",     atk:37,  def:98  },
  19618: { collection:"alien.worlds", category:"arms", rarity:"legendary", shine:"stone",    name:"AI Sword",         atk:37,  def:91  },
  56042: { collection:"alien.worlds", category:"arms", rarity:"legendary", shine:"stone",    name:"Moonkey Scepter",  atk:36,  def:105 },

  // ── AW ARMS — Legendary (Gold) ───────────────────────────────────────────────
  141422: { collection:"alien.worlds", category:"arms", rarity:"legendary", shine:"gold",    name:"Healing Blade",    atk:96,  def:119 },
  141424: { collection:"alien.worlds", category:"arms", rarity:"legendary", shine:"gold",    name:"Eternal Blade",    atk:105, def:147 },
  141432: { collection:"alien.worlds", category:"arms", rarity:"legendary", shine:"gold",    name:"Galatic Fireblade",atk:117, def:40  },
  141435: { collection:"alien.worlds", category:"arms", rarity:"legendary", shine:"gold",    name:"Divine Blade",     atk:114, def:38  },
  141442: { collection:"alien.worlds", category:"arms", rarity:"legendary", shine:"gold",    name:"AI Sword",         atk:114, def:35  },
  141448: { collection:"alien.worlds", category:"arms", rarity:"legendary", shine:"gold",    name:"Moonkey Scepter",  atk:111, def:36  },

  // ── AW ARMS — Legendary (Stardust) ───────────────────────────────────────────
  141464: { collection:"alien.worlds", category:"arms", rarity:"legendary", shine:"stardust", name:"Healing Blade",   atk:165, def:36  },
  141466: { collection:"alien.worlds", category:"arms", rarity:"legendary", shine:"stardust", name:"Eternal Blade",   atk:180, def:36  },
  141474: { collection:"alien.worlds", category:"arms", rarity:"legendary", shine:"stardust", name:"Galatic Fireblade",atk:195,def:123 },
  141475: { collection:"alien.worlds", category:"arms", rarity:"legendary", shine:"stardust", name:"Divine Blade",    atk:190, def:117 },
  141482: { collection:"alien.worlds", category:"arms", rarity:"legendary", shine:"stardust", name:"AI Sword",        atk:190, def:105 },
  141487: { collection:"alien.worlds", category:"arms", rarity:"legendary", shine:"stardust", name:"Moonkey Scepter", atk:185, def:108 },

  // ── AW ARMS — Legendary (Antimatter) ─────────────────────────────────────────
  141497: { collection:"alien.worlds", category:"arms", rarity:"legendary", shine:"antimatter", name:"Healing Blade",   atk:238, def:108 },
  141499: { collection:"alien.worlds", category:"arms", rarity:"legendary", shine:"antimatter", name:"Eternal Blade",   atk:259, def:108 },
  141506: { collection:"alien.worlds", category:"arms", rarity:"legendary", shine:"antimatter", name:"Galatic Fireblade",atk:280,def:205 },
  141507: { collection:"alien.worlds", category:"arms", rarity:"legendary", shine:"antimatter", name:"Divine Blade",    atk:273, def:195 },
  141512: { collection:"alien.worlds", category:"arms", rarity:"legendary", shine:"antimatter", name:"AI Sword",        atk:273, def:180 },
  141515: { collection:"alien.worlds", category:"arms", rarity:"legendary", shine:"antimatter", name:"Moonkey Scepter", atk:266, def:185 },

  // ── AW ARMS — Mythical (Stone) ───────────────────────────────────────────────
  19582: { collection:"alien.worlds", category:"arms", rarity:"mythical", shine:"stone",    name:"Waxon Fire Sword", atk:65,  def:185 },
  19614: { collection:"alien.worlds", category:"arms", rarity:"mythical", shine:"stone",    name:"Sungorger",        atk:63,  def:185 },
  19623: { collection:"alien.worlds", category:"arms", rarity:"mythical", shine:"stone",    name:"Leveller Bow",     atk:62,  def:294 },

  // ── AW ARMS — Mythical (Gold) ────────────────────────────────────────────────
  141406: { collection:"alien.worlds", category:"arms", rarity:"mythical", shine:"gold",    name:"Waxon Fire Sword", atk:198, def:280 },
  141438: { collection:"alien.worlds", category:"arms", rarity:"mythical", shine:"gold",    name:"Sungorger",        atk:192, def:259 },
  141447: { collection:"alien.worlds", category:"arms", rarity:"mythical", shine:"gold",    name:"Leveller Bow",     atk:186, def:266 },

  // ── AW ARMS — Mythical (Stardust) ────────────────────────────────────────────
  141449: { collection:"alien.worlds", category:"arms", rarity:"mythical", shine:"stardust", name:"Waxon Fire Sword",atk:330, def:266 },
  141478: { collection:"alien.worlds", category:"arms", rarity:"mythical", shine:"stardust", name:"Sungorger",       atk:320, def:266 },
  141486: { collection:"alien.worlds", category:"arms", rarity:"mythical", shine:"stardust", name:"Leveller Bow",    atk:315, def:59  },

  // ── AW ARMS — Mythical (Antimatter) ──────────────────────────────────────────
  141488: { collection:"alien.worlds", category:"arms", rarity:"mythical", shine:"antimatter", name:"Waxon Fire Sword",atk:469, def:60  },
  141509: { collection:"alien.worlds", category:"arms", rarity:"mythical", shine:"antimatter", name:"Sungorger",       atk:455, def:62  },
  141514: { collection:"alien.worlds", category:"arms", rarity:"mythical", shine:"antimatter", name:"Leveller Bow",    atk:448, def:177 },

  // ── AW FACES — Division Leaders ──────────────────────────────────────────────
  // crew_slots = RARITY_BONUS[rarity] × SHINE_MULT[shine]
  // Common=1, Rare=3, Epic=7, Legendary=25, Mythical=50 (stone base, ×shine mult)
  // Abundant faces are all Human and excluded by isHuman filter — not added here.
  // atk/def = 0 (faces contribute slots only, no combat stats)

  // Common — Stone (slots: 1×1 = 1)
  19657: { collection:"alien.worlds", category:"face", rarity:"common",   shine:"stone",      name:"Male Nordic",   crew_slots:1,   atk:0, def:0, img:"QmZT6PyREyuivPA7ZtxN1r8gMw128ojTpzMjpZXHj65KiV" },
  19656: { collection:"alien.worlds", category:"face", rarity:"common",   shine:"stone",      name:"Female Nordic", crew_slots:1,   atk:0, def:0, img:"QmPTU9pcseB61Lp2esADYmEvPdJMHZBEiXbc9aCDChZS5m" },
  19651: { collection:"alien.worlds", category:"face", rarity:"common",   shine:"stone",      name:"Male Grey",     crew_slots:1,   atk:0, def:0, img:"QmRnmsAXtdxFiosAC4xTNAirxtACSh8Cua4Nnp367XEZae" },
  19650: { collection:"alien.worlds", category:"face", rarity:"common",   shine:"stone",      name:"Female Grey",   crew_slots:1,   atk:0, def:0, img:"QmNSXmTh2uHDY6EwK4CqeQBvB7y23iZNvrfuHmHKogruEt" },

  // Common — Gold (slots: 1×3 = 3)
  48128: { collection:"alien.worlds", category:"face", rarity:"common",   shine:"gold",       name:"Male Nordic",   crew_slots:3,   atk:0, def:0, img:"QmZ8mCLfCv79LnVdyf4duMYi8H6ca5x3nGqnsBNA4xA2W3" },
  48127: { collection:"alien.worlds", category:"face", rarity:"common",   shine:"gold",       name:"Female Nordic", crew_slots:3,   atk:0, def:0, img:"QmUFHJpSfgoMCVqkgPAieS2a1joNWDq1Bf7FfmtiSZxYUD" },
  48122: { collection:"alien.worlds", category:"face", rarity:"common",   shine:"gold",       name:"Male Grey",     crew_slots:3,   atk:0, def:0, img:"QmTwZpGsixrGW5fwvFxaJUM6tRS44W8NNK25tub86DvvzF" },
  48121: { collection:"alien.worlds", category:"face", rarity:"common",   shine:"gold",       name:"Female Grey",   crew_slots:3,   atk:0, def:0, img:"QmaZRBMe7kaLrfhVohpcX8eiLQuMxtwbT4VErJSQweyuDX" },

  // Common — Stardust (slots: 1×5 = 5)
  48141: { collection:"alien.worlds", category:"face", rarity:"common",   shine:"stardust",   name:"Male Nordic",   crew_slots:5,   atk:0, def:0, img:"QmaokVaofHgBGmu1MZi2PEy6WLWEkcRm66wUB2z7XYdeph" },
  48140: { collection:"alien.worlds", category:"face", rarity:"common",   shine:"stardust",   name:"Female Nordic", crew_slots:5,   atk:0, def:0, img:"QmXUja1UiiH2YB893VxdhKTvjfW9qkNN3jm24QdkLzMe1M" },
  48135: { collection:"alien.worlds", category:"face", rarity:"common",   shine:"stardust",   name:"Male Grey",     crew_slots:5,   atk:0, def:0, img:"QmZH63zgtEzoa3c4K2Ah6K8fhjaQRSphSsAJkaUXfEF5LT" },
  48134: { collection:"alien.worlds", category:"face", rarity:"common",   shine:"stardust",   name:"Female Grey",   crew_slots:5,   atk:0, def:0, img:"Qmbp6jheyp7utoS2Q3EQ4E21ieo3hzXskAYu9ZLKJpFgAt" },

  // Rare — Stone (slots: 3×1 = 3)
  19655: { collection:"alien.worlds", category:"face", rarity:"rare",     shine:"stone",      name:"Male Little Green Person",   crew_slots:3,  atk:0, def:0, img:"QmdHLuJf7SmoL9AJ2ScrxfbUQKJgcZsDKa6pdXro7hy3jk" },
  19654: { collection:"alien.worlds", category:"face", rarity:"rare",     shine:"stone",      name:"Female Little Green Person", crew_slots:3,  atk:0, def:0, img:"QmZot4HaFaonY7UYZqGKVqygKYo7yvBSgeh6jCGrcattr1" },
  19653: { collection:"alien.worlds", category:"face", rarity:"rare",     shine:"stone",      name:"Male Reptiloid",             crew_slots:3,  atk:0, def:0, img:"QmQGq9X8odfm9B6H5Y1wcau1fc92Z7579qrWbsW5Rdn9TR" },
  19652: { collection:"alien.worlds", category:"face", rarity:"rare",     shine:"stone",      name:"Female Reptiloid",           crew_slots:3,  atk:0, def:0, img:"QmUnBMPBCsjbDNt1itshyqXk2L4BkyFGC5Zgt2UkbYA45A" },
  17453: { collection:"alien.worlds", category:"face", rarity:"rare",     shine:"stone",      name:"Female Cyborg T8",           crew_slots:3,  atk:0, def:0, img:"QmdNPERi5eFHapErYmYgzZh9VcQGLTjb1N6TTTGKn1C3fk" },
  13728: { collection:"alien.worlds", category:"face", rarity:"rare",     shine:"stone",      name:"Male Cyborg T15",            crew_slots:3,  atk:0, def:0, img:"QmQ1GBDMPRiadFGxRAWSensph8i4dmtfHDj7jcPVrz39UY" },

  // Rare — Gold (slots: 3×3 = 9)
  48126: { collection:"alien.worlds", category:"face", rarity:"rare",     shine:"gold",       name:"Male Little Green Person",   crew_slots:9,  atk:0, def:0, img:"QmWj5PBYJJ2Nr9RsKFzDBhcFPJMBT85eJVGXKQdx5vdByB" },
  48125: { collection:"alien.worlds", category:"face", rarity:"rare",     shine:"gold",       name:"Female Little Green Person", crew_slots:9,  atk:0, def:0, img:"QmXXbrRxnwWtZ7nSDmizxYBTAAJEspc8BfVzfHqJ7X5s8u" },
  48124: { collection:"alien.worlds", category:"face", rarity:"rare",     shine:"gold",       name:"Male Reptiloid",             crew_slots:9,  atk:0, def:0, img:"QmW3PZQyBA4WL91N3bbeqq2S8883UtZRHQyeJ2YMH7dXL5" },
  48123: { collection:"alien.worlds", category:"face", rarity:"rare",     shine:"gold",       name:"Female Reptiloid",           crew_slots:9,  atk:0, def:0, img:"QmdWgCr3EdK3YNv2LQE5zhBiwTLAkqjELo2Qaj3DxkA1wi" },
  48118: { collection:"alien.worlds", category:"face", rarity:"rare",     shine:"gold",       name:"Male Cyborg T15",            crew_slots:9,  atk:0, def:0, img:"Qmf87Uw5tkUMHUJgC9R8mRBYCD3dc5iLHgWcnnz79HJxbA" },
  48117: { collection:"alien.worlds", category:"face", rarity:"rare",     shine:"gold",       name:"Female Cyborg T8",           crew_slots:9,  atk:0, def:0, img:"QmU28G5awtckr3E5Eix37acnqeu5Dzv3Avs3cD29NM9LBE" },

  // Rare — Stardust (slots: 3×5 = 15)
  48139: { collection:"alien.worlds", category:"face", rarity:"rare",     shine:"stardust",   name:"Male Little Green Person",   crew_slots:15, atk:0, def:0, img:"QmVMWRDzHqZCsUbhrERiKAdW8aPXbMBYF4noDRdN6gkmHZ" },
  48138: { collection:"alien.worlds", category:"face", rarity:"rare",     shine:"stardust",   name:"Female Little Green Person", crew_slots:15, atk:0, def:0, img:"QmTgmy2DBV7oSBqE38bkSdyqEpDA9wquUcCAdVE5QW4ZqD" },
  48137: { collection:"alien.worlds", category:"face", rarity:"rare",     shine:"stardust",   name:"Male Reptiloid",             crew_slots:15, atk:0, def:0, img:"QmNdx1bZB2dzUkchq5CyTVYkqshn7kFF3k1AaFMuVSjC46" },
  48136: { collection:"alien.worlds", category:"face", rarity:"rare",     shine:"stardust",   name:"Female Reptiloid",           crew_slots:15, atk:0, def:0, img:"QmeqfZfajEuyE9KzmoJDhNaiVcWyNk97qABLoNxiGDNQxx" },
  48133: { collection:"alien.worlds", category:"face", rarity:"rare",     shine:"stardust",   name:"Male Cyborg T15",            crew_slots:15, atk:0, def:0, img:"QmTxnUGtWq1VXuE7Hy7Np7gp9Zhv1qz3RpuUz23D6cevq4" },
  48132: { collection:"alien.worlds", category:"face", rarity:"rare",     shine:"stardust",   name:"Female Cyborg T8",           crew_slots:15, atk:0, def:0, img:"QmNNvMy9oxQ5iWsD7REhJZBvgPRNuN3h3ars4iUXMT4Pmz" },

  // Rare — Antimatter (slots: 3×7 = 21)
  48150: { collection:"alien.worlds", category:"face", rarity:"rare",     shine:"antimatter", name:"Male Little Green Person",   crew_slots:21, atk:0, def:0, img:"QmYBsNuGrj4TYmwa9PtCp9AYq98p7wKk31zbLAdgzK6RGw" },
  48149: { collection:"alien.worlds", category:"face", rarity:"rare",     shine:"antimatter", name:"Female Little Green Person", crew_slots:21, atk:0, def:0, img:"QmXSn5tUiwGh47EYAju4YE2hD8YuEn4QgG9SG1vSmaaeyG" },
  48148: { collection:"alien.worlds", category:"face", rarity:"rare",     shine:"antimatter", name:"Male Reptiloid",             crew_slots:21, atk:0, def:0, img:"QmQaqwP4rMgtGvZVvyxdCBAnLsRgqVrAaVtVB9Y5ixodXV" },
  48147: { collection:"alien.worlds", category:"face", rarity:"rare",     shine:"antimatter", name:"Female Reptiloid",           crew_slots:21, atk:0, def:0, img:"QmPLsatFjxiLAEPHUA3REYxGdLrM6YAcq1e8zs2j1cPzNX" },
  48146: { collection:"alien.worlds", category:"face", rarity:"rare",     shine:"antimatter", name:"Male Cyborg T15",            crew_slots:21, atk:0, def:0, img:"QmRAKWyV2DKgnU5bycPA8JzDxbpZS9HnLbBU2dYC3vSkLa" },
  48145: { collection:"alien.worlds", category:"face", rarity:"rare",     shine:"antimatter", name:"Female Cyborg T8",           crew_slots:21, atk:0, def:0, img:"QmdXtDaxuoxquMpqKmTsn3QnWWKh6aU4HVDAEXAMquEykG" },

  // Rare — XDimension (slots: 3×9 = 27)
  20987: { collection:"alien.worlds", category:"face", rarity:"rare",     shine:"xdimension", name:"Male Little Green Person",   crew_slots:27, atk:0, def:0, img:"QmcN4wXdks74Cpb6dE6qygdXNniXqPEHciXbGsgYgh37TT" },
  20986: { collection:"alien.worlds", category:"face", rarity:"rare",     shine:"xdimension", name:"Female Little Green Person", crew_slots:27, atk:0, def:0, img:"QmQXfax83Xu1YhJHsVArRp2H6gzFx5oDovgcyMPbY6zSns" },
  20985: { collection:"alien.worlds", category:"face", rarity:"rare",     shine:"xdimension", name:"Male Reptiloid",             crew_slots:27, atk:0, def:0, img:"QmWdw1vLXG7REw4uvHnKBmU57ifrhEoGEbDttUHw4PNUpB" },
  20984: { collection:"alien.worlds", category:"face", rarity:"rare",     shine:"xdimension", name:"Female Reptiloid",           crew_slots:27, atk:0, def:0, img:"QmRMvFR65B3tczqS3ribubRsfkBkhiUSkL2PNNFgukxkTk" },

  // Epic — Stone (slots: 7×1 = 7)
  19660: { collection:"alien.worlds", category:"face", rarity:"epic",     shine:"stone",      name:"Ted Shadewick",    crew_slots:7,   atk:0, def:0, img:"QmRM8f2cE7UyZmVE9haoLtaV4wGa7BR8XJaLbur9RM9cVP" },
  19658: { collection:"alien.worlds", category:"face", rarity:"epic",     shine:"stone",      name:"Robotron Soldier", crew_slots:7,   atk:0, def:0, img:"QmdV7HKYmEycnoLqKGNStniZDfSVdhouZmvLaUtymLbSvF" },

  // Epic — Gold (slots: 7×3 = 21)
  48130: { collection:"alien.worlds", category:"face", rarity:"epic",     shine:"gold",       name:"Ted Shadewick",    crew_slots:21,  atk:0, def:0, img:"QmQa93rBR3nyW5FShjVV29M1XRrLicePX14TAdtQu4zsFD" },
  48116: { collection:"alien.worlds", category:"face", rarity:"epic",     shine:"gold",       name:"Robotron Soldier", crew_slots:21,  atk:0, def:0, img:"QmQ3HQrqLvK7FV93KJEiVEzFuJsR1EXmnZZm6y2tWkDLMZ" },

  // Epic — Stardust (slots: 7×5 = 35)
  48143: { collection:"alien.worlds", category:"face", rarity:"epic",     shine:"stardust",   name:"Ted Shadewick",    crew_slots:35,  atk:0, def:0, img:"QmbKUo3zTvMenRyWdGdf35HMy67v3Ukm4UeqKt3YEXzTKZ" },
  48131: { collection:"alien.worlds", category:"face", rarity:"epic",     shine:"stardust",   name:"Robotron Soldier", crew_slots:35,  atk:0, def:0, img:"QmQpCVK7F7P7LV9dwZvKEwhHKoU5UtvezT4ny83xJUSj6n" },

  // Epic — Antimatter (slots: 7×7 = 49)
  48152: { collection:"alien.worlds", category:"face", rarity:"epic",     shine:"antimatter", name:"Ted Shadewick",    crew_slots:49,  atk:0, def:0, img:"QmQ7rgJLWpAzNsmsfNWZHcKNvZsJjHJpX3YaQhQFJ6p4hg" },
  48144: { collection:"alien.worlds", category:"face", rarity:"epic",     shine:"antimatter", name:"Robotron Soldier", crew_slots:49,  atk:0, def:0, img:"QmVPYCX46Nqq9WEvZnqiTjGid26cAuNcKV5wofmKEcQohe" },

  // Epic — XDimension (slots: 7×9 = 63)
  44934: { collection:"alien.worlds", category:"face", rarity:"epic",     shine:"xdimension", name:"Celestial Terror",  crew_slots:63,  atk:0, def:0, img:"QmUhF6u35iSj1WtJtGokvGXxassdp1dgZ9Agk34u3imWdK" },

  // Legendary — Stone (slots: 25×1 = 25)
  19659: { collection:"alien.worlds", category:"face", rarity:"legendary", shine:"stone",      name:"Commander Church", crew_slots:25,  atk:0, def:0, img:"QmdVJG3Ced5xvtSyji44moWfJaJHFnWZRqWA1w2UTGED4k" },

  // Legendary — Gold (slots: 25×3 = 75)
  48129: { collection:"alien.worlds", category:"face", rarity:"legendary", shine:"gold",       name:"Commander Church", crew_slots:75,  atk:0, def:0, img:"QmeK926g8EH56AfSQSrT34zuT5yaY72owKSNKuW5iRfmov" },

  // Legendary — Stardust (slots: 25×5 = 125)
  48142: { collection:"alien.worlds", category:"face", rarity:"legendary", shine:"stardust",   name:"Commander Church", crew_slots:125, atk:0, def:0, img:"QmRMMQCGCdGhvW6m7tbUpRr5qp8pmpWFjKKDxjGvuuntjG" },

  // Legendary — Antimatter (slots: 25×7 = 175)
  48151: { collection:"alien.worlds", category:"face", rarity:"legendary", shine:"antimatter", name:"Commander Church", crew_slots:175, atk:0, def:0, img:"Qmczn4dhfm5f1x3xPFYsA7jLRnV5YYw58MAUkcV3Phoret" },

  // Mythical — Stone (slots: 50×1 = 50)
  652725: { collection:"alien.worlds", category:"face", rarity:"mythical", shine:"stone",      name:"Kol, The Emancipator", crew_slots:50,  atk:0, def:0, img:"Qmca53fZ3eb4bx7N8cm8i3J96XutCttNyZZwK3ofQ7GGHi" },
  28425:  { collection:"alien.worlds", category:"face", rarity:"mythical", shine:"stone",      name:"Aioshi Holoform",      crew_slots:50,  atk:0, def:0, img:"Qmc6YSi3jwfcrR5V41ZwS1M6dJZEUxM6h8G7KKbj6HdDWw" },

};
