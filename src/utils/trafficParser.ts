import { HEROIC_ICC_ITEMS } from "utils/heroicLoot";
export type TrafficItem = {
  target_name: string;
  issuer_name: string;
  action: string;
  ep_before: string;
  ep_after: string;
  gp_before: string;
  gp_after: string;
  timestamp: string;
  item_name?: string;
  item_id?: string;
};

export type Traffic = {
  epgp_traffic: TrafficItem[];
};

enum EventType {
  LOOT_GIVEN,
  BOSS_KILL,
  DISENCHANT,
  OTHER
}

type Item = {
  name: string;
  id: number;
};

export type Loot = {
  item: Item;
  receiver: string;
  cost: number;
};

export type Boss = {
  name: string;
  loot: Loot[];
  points: number;
  date: Date;
};

export type Trash = {
  loot: Loot[];
};

export type Raid = {
  name: string;
  id: string;
  raidId: RaidId;
  date: Date;
  leader: string;
  bosses: Boss[];
  trash: Trash;
};

export enum RaidId {
  ONYXIA = "Onyxia",
  MOLTEN_CORE = "Molten Core",
  BLACKWING_LAIR = "Blackwing Lair",
  ZUL_GURUB = "Zul'Gurub",
  RUINS_OF_AHN_QIRAJ = "Ruins of Ahn'Qiraj",
  TEMPLE_OF_AHN_QIRAJ = "Temple of Ahn'Qiraj",
  NAXXRAMAS = "Naxxramas",

  KARAZHAN = "Karazhan",
  GRUULS_LAIR = "Gruul's Lair",
  MAGTHERIDONS_LAIR = "Magtheridon's Lair",

  SERPENTSHRINE_CAVERN = "Serpentshrine Cavern",
  THE_EYE = "The Eye",

  BATTLE_FOR_MOUNT_HYJAL = "Battle for Mount Hyjal",
  BLACK_TEMPLE = "Black Temple",

  SUNWELL_PLATEAU = "Sunwell Plateau",

  ICECROWN_CITADEL = "Icecrown Citadel",
}

const raidBosses: { [key: string]: RaidId } = {
  Onyxia: RaidId.ONYXIA,

  Lucifron: RaidId.MOLTEN_CORE,
  Magmadar: RaidId.MOLTEN_CORE,
  Gehennas: RaidId.MOLTEN_CORE,
  Garr: RaidId.MOLTEN_CORE,
  "Baron Geddon": RaidId.MOLTEN_CORE,
  Shazzrah: RaidId.MOLTEN_CORE,
  "Sulfuron Harbinger": RaidId.MOLTEN_CORE,
  "Golemagg the Incinerator": RaidId.MOLTEN_CORE,
  "Majordomo Executus": RaidId.MOLTEN_CORE,
  Ragnaros: RaidId.MOLTEN_CORE,

  "Razorgore the Untamed": RaidId.BLACKWING_LAIR,
  "Vaelastrasz the Corrupt": RaidId.BLACKWING_LAIR,
  "Broodlord Lashlayer": RaidId.BLACKWING_LAIR,
  Firemaw: RaidId.BLACKWING_LAIR,
  Ebonroc: RaidId.BLACKWING_LAIR,
  Flamegor: RaidId.BLACKWING_LAIR,
  Chromaggus: RaidId.BLACKWING_LAIR,
  Nefarian: RaidId.BLACKWING_LAIR,

  "High Priest Venoxis": RaidId.ZUL_GURUB,
  "High Priestess Jeklik": RaidId.ZUL_GURUB,
  "High Priestess Mar'li": RaidId.ZUL_GURUB,
  "High Priest Thekal": RaidId.ZUL_GURUB,
  "High Priestess Arlokk": RaidId.ZUL_GURUB,
  Hakkar: RaidId.ZUL_GURUB,
  "Bloodlord Mandokir": RaidId.ZUL_GURUB,
  "Gri'lek": RaidId.ZUL_GURUB,
  "Hazza'rah": RaidId.ZUL_GURUB,
  Renataki: RaidId.ZUL_GURUB,
  Wushoolay: RaidId.ZUL_GURUB,
  "The Edge of Madness": RaidId.ZUL_GURUB,
  "Gahz'ranka": RaidId.ZUL_GURUB,
  "Jin'do the Hexxer": RaidId.ZUL_GURUB,

  Kurinnaxx: RaidId.RUINS_OF_AHN_QIRAJ,
  "General Rajaxx": RaidId.RUINS_OF_AHN_QIRAJ,
  Moam: RaidId.RUINS_OF_AHN_QIRAJ,
  "Buru the Gorger": RaidId.RUINS_OF_AHN_QIRAJ,
  "Ayamiss the Hunter": RaidId.RUINS_OF_AHN_QIRAJ,
  "Ossirian the Unscarred": RaidId.RUINS_OF_AHN_QIRAJ,

  "The Prophet Skeram": RaidId.TEMPLE_OF_AHN_QIRAJ,
  "Battleguard Sartura": RaidId.TEMPLE_OF_AHN_QIRAJ,
  "Fankriss the Unyielding": RaidId.TEMPLE_OF_AHN_QIRAJ,
  "Princess Huhuran": RaidId.TEMPLE_OF_AHN_QIRAJ,
  "The Silithid Royalty": RaidId.TEMPLE_OF_AHN_QIRAJ,
  Viscidus: RaidId.TEMPLE_OF_AHN_QIRAJ,
  Ouro: RaidId.TEMPLE_OF_AHN_QIRAJ,
  "The Twin Emperors": RaidId.TEMPLE_OF_AHN_QIRAJ,
  "C'Thun": RaidId.TEMPLE_OF_AHN_QIRAJ,

  "Anub'Rekhan": RaidId.NAXXRAMAS,
  "Grand Widow Faerlina": RaidId.NAXXRAMAS,
  "Maexxna": RaidId.NAXXRAMAS,

  "Noth the Plaguebringer": RaidId.NAXXRAMAS,
  "Heigan the Unclean": RaidId.NAXXRAMAS,
  "Loatheb": RaidId.NAXXRAMAS,

  "Instructor Razuvious": RaidId.NAXXRAMAS,
  "Gothik the Harvester": RaidId.NAXXRAMAS,
  "The Four Horsemen": RaidId.NAXXRAMAS,

  "Patchwerk": RaidId.NAXXRAMAS,
  "Grobbulus": RaidId.NAXXRAMAS,
  "Gluth": RaidId.NAXXRAMAS,
  "Thaddius": RaidId.NAXXRAMAS,

  "Sapphiron": RaidId.NAXXRAMAS,
  "Kel'Thuzad": RaidId.NAXXRAMAS,

  "Attumen the Huntsman": RaidId.KARAZHAN,
  "Moroes": RaidId.KARAZHAN,
  "Maiden of Virtue": RaidId.KARAZHAN,
  "Opera Hall": RaidId.KARAZHAN,
  "The Curator": RaidId.KARAZHAN,
  "Terestian Illhoof": RaidId.KARAZHAN,
  "Shade of Aran": RaidId.KARAZHAN,
  "Netherspite": RaidId.KARAZHAN,
  "Chess Event": RaidId.KARAZHAN,
  "Prince Malchezaar": RaidId.KARAZHAN,
  "Nightbane": RaidId.KARAZHAN,

  "High King Maulgar": RaidId.GRUULS_LAIR,
  "Gruul the Dragonkiller": RaidId.GRUULS_LAIR,

  "Magtheridon": RaidId.MAGTHERIDONS_LAIR,

  "Hydross the Unstable": RaidId.SERPENTSHRINE_CAVERN,
  "The Lurker Below": RaidId.SERPENTSHRINE_CAVERN,
  "Leotheras the Blind": RaidId.SERPENTSHRINE_CAVERN,
  "Fathom-Lord Karathress": RaidId.SERPENTSHRINE_CAVERN,
  "Morogrim Tidewalker": RaidId.SERPENTSHRINE_CAVERN,
  "Lady Vashj": RaidId.SERPENTSHRINE_CAVERN,

  "Al'ar": RaidId.THE_EYE,
  "Void Reaver": RaidId.THE_EYE,
  "High Astromancer Solarian": RaidId.THE_EYE,
  "Kael'thas Sunstrider": RaidId.THE_EYE,

  "Rage Winterchill": RaidId.BATTLE_FOR_MOUNT_HYJAL,
  "Anetheron": RaidId.BATTLE_FOR_MOUNT_HYJAL,
  "Kaz'rogal": RaidId.BATTLE_FOR_MOUNT_HYJAL,
  "Azgalor": RaidId.BATTLE_FOR_MOUNT_HYJAL,
  "Archimonde": RaidId.BATTLE_FOR_MOUNT_HYJAL,

  "High Warlord Naj'entus": RaidId.BLACK_TEMPLE,
  "Supremus": RaidId.BLACK_TEMPLE,
  "Shade of Akama": RaidId.BLACK_TEMPLE,
  "Teron Gorefiend": RaidId.BLACK_TEMPLE,
  "Gurtogg Bloodboil": RaidId.BLACK_TEMPLE,
  "Reliquary of Souls": RaidId.BLACK_TEMPLE,
  "Mother Shahraz": RaidId.BLACK_TEMPLE,
  "The Illidari Council": RaidId.BLACK_TEMPLE,
  "Illidan Stormrage": RaidId.BLACK_TEMPLE,


  "Kalecgos": RaidId.SUNWELL_PLATEAU,
  "Brutallus": RaidId.SUNWELL_PLATEAU,
  "Felmyst": RaidId.SUNWELL_PLATEAU,
  "Eredar Twins": RaidId.SUNWELL_PLATEAU,
  "M'uru": RaidId.SUNWELL_PLATEAU,
  "Kil'jaeden": RaidId.SUNWELL_PLATEAU,

  "Lord Marrowgar": RaidId.ICECROWN_CITADEL,
  "Lady Deathwhisper": RaidId.ICECROWN_CITADEL,
  "Icecrown Gunship Battle": RaidId.ICECROWN_CITADEL,
  "Deathbringer Saurfang": RaidId.ICECROWN_CITADEL,
  "Festergut": RaidId.ICECROWN_CITADEL,
  "Rotface": RaidId.ICECROWN_CITADEL,
  "Professor Putricide": RaidId.ICECROWN_CITADEL,
  "Blood Council": RaidId.ICECROWN_CITADEL,
  "Queen Lana'thel": RaidId.ICECROWN_CITADEL,
  "Valithria Dreamwalker": RaidId.ICECROWN_CITADEL,
  "Sindragosa": RaidId.ICECROWN_CITADEL,
  "The Lich King": RaidId.ICECROWN_CITADEL,


  // ruRU

  Ониксия: RaidId.ONYXIA,

  Люцифрон: RaidId.MOLTEN_CORE,
  Магмадар: RaidId.MOLTEN_CORE,
  Гееннас: RaidId.MOLTEN_CORE,
  Гарр: RaidId.MOLTEN_CORE,
  "Барон Геддон": RaidId.MOLTEN_CORE,
  Шаззрах: RaidId.MOLTEN_CORE,
  "Предвестник Сульфурон": RaidId.MOLTEN_CORE,
  "Маг-лорд из клана Гордок": RaidId.MOLTEN_CORE,
  "Мажордом Экзекутус": RaidId.MOLTEN_CORE,
  Рагнарос: RaidId.MOLTEN_CORE,

  "Бритвосмерт Неукротимый": RaidId.BLACKWING_LAIR,
  "Валестраз Порочный": RaidId.BLACKWING_LAIR,
  "Предводитель драконов Разящий Бич": RaidId.BLACKWING_LAIR,
  Огнечрев: RaidId.BLACKWING_LAIR,
  Черноскал: RaidId.BLACKWING_LAIR,
  Пламегор: RaidId.BLACKWING_LAIR,
  Хроммагус: RaidId.BLACKWING_LAIR,
  Нефариан: RaidId.BLACKWING_LAIR,

  "Верховный жрец Веноксис": RaidId.ZUL_GURUB,
  "Верховная жрица Джеклик": RaidId.ZUL_GURUB,
  "Верховная жрица Мар'ли": RaidId.ZUL_GURUB,
  "Верховный жрец Текал": RaidId.ZUL_GURUB,
  "Верховная жрица Арлокк": RaidId.ZUL_GURUB,
  Хаккар: RaidId.ZUL_GURUB,
  "Мандокир Повелитель Крови": RaidId.ZUL_GURUB,
  "Гри'лек": RaidId.ZUL_GURUB,
  "Хазза'рах": RaidId.ZUL_GURUB,
  Ренатаки: RaidId.ZUL_GURUB,
  Вушулай: RaidId.ZUL_GURUB,
  "Край безумия": RaidId.ZUL_GURUB,
  "Газ'ранка": RaidId.ZUL_GURUB,
  "Джин'до Проклинатель": RaidId.ZUL_GURUB
};

const trashItems: { [key: string]: RaidId } = {
  "16802": RaidId.MOLTEN_CORE, // Arcanist Belt
  "16799": RaidId.MOLTEN_CORE, // Arcanist Bindings
  "16864": RaidId.MOLTEN_CORE, // Belt of Might
  "16861": RaidId.MOLTEN_CORE, // Bracers of Might
  "16828": RaidId.MOLTEN_CORE, // Cenarion Belt
  "16830": RaidId.MOLTEN_CORE, // Cenarion Bracers
  "16838": RaidId.MOLTEN_CORE, // Earthfury Belt
  "16840": RaidId.MOLTEN_CORE, // Earthfury Bracers
  "16806": RaidId.MOLTEN_CORE, // Felheart Belt
  "16804": RaidId.MOLTEN_CORE, // Felheart Bracers
  "16851": RaidId.MOLTEN_CORE, // Giantstalker's Belt
  "16850": RaidId.MOLTEN_CORE, // Giantstalker's Bracers
  "16817": RaidId.MOLTEN_CORE, // Girdle of Prophecy
  "16819": RaidId.MOLTEN_CORE, // Vambraces of Prophecy
  "16858": RaidId.MOLTEN_CORE, // Lawbringer Belt
  "16857": RaidId.MOLTEN_CORE, // Lawbringer Bracers
  "16827": RaidId.MOLTEN_CORE, // Nightslayer Belt
  "16825": RaidId.MOLTEN_CORE, // Nightslayer Bracelets

  "19437": RaidId.BLACKWING_LAIR, // Boots of Pure Thought
  "19436": RaidId.BLACKWING_LAIR, // Cloak of Draconic Might
  "19358": RaidId.BLACKWING_LAIR, // Draconic Maul
  "19362": RaidId.BLACKWING_LAIR, // Doom's Edge
  "19435": RaidId.BLACKWING_LAIR, // Essence Gatherer
  "19434": RaidId.BLACKWING_LAIR, // Band of Dark Dominion
  "19354": RaidId.BLACKWING_LAIR, // Draconic Avenger
  "19439": RaidId.BLACKWING_LAIR, // Interlaced Shadow Jerkin
  "19438": RaidId.BLACKWING_LAIR, // Ringo's Blizzard Boots

  "19908": RaidId.ZUL_GURUB, // Sceptre of Smiting
  "20258": RaidId.ZUL_GURUB, // Zulian Ceremonial Staff
  "19921": RaidId.ZUL_GURUB, // Zulian Hacker
  "20261": RaidId.ZUL_GURUB, // Shadow Panther Hide Belt
  "20259": RaidId.ZUL_GURUB, // Shadow Panther Hide Gloves
  "20263": RaidId.ZUL_GURUB, // Gurubashi Helm

  "21891": RaidId.TEMPLE_OF_AHN_QIRAJ, // Shard of the Fallen Star
  "21837": RaidId.TEMPLE_OF_AHN_QIRAJ, // Anubisath Warhammer

  "23667": RaidId.NAXXRAMAS, // Spaulders of the Grand Crusader
  "23069": RaidId.NAXXRAMAS, // Necro-Knight's Garb
  "23226": RaidId.NAXXRAMAS, // Ghoul Skin Tunic
  "23666": RaidId.NAXXRAMAS, // Belt of the Grand Crusader
  "23669": RaidId.NAXXRAMAS, // Leggings of the Grand Crusader
  "23237": RaidId.NAXXRAMAS, // Ring of the Eternal Flame
  "23238": RaidId.NAXXRAMAS, // Stygian Buckler
  "23044": RaidId.NAXXRAMAS, // Harbinger of Doom
  "23221": RaidId.NAXXRAMAS, // Misplaced Servo Arm

  "30642": RaidId.KARAZHAN, //Drape of the Righteous
  "30666": RaidId.KARAZHAN, //Ritssyn's Lost Pendant
  "30667": RaidId.KARAZHAN, //Ring of Unrelenting Storms
  "30668": RaidId.KARAZHAN, //Grasp of the Dead
  "30673": RaidId.KARAZHAN, //Inferno Waist Cord
  "30644": RaidId.KARAZHAN, //Grips of Deftness
  "30674": RaidId.KARAZHAN, //Zierhut's Lost Treads
  "30643": RaidId.KARAZHAN, //Belt of the Tracker
  "30641": RaidId.KARAZHAN, //Boots of Elusion

  "30027": RaidId.SERPENTSHRINE_CAVERN, // Boots of Courage Unending
  "30022": RaidId.SERPENTSHRINE_CAVERN, // Pendant of the Perilous
  "30021": RaidId.SERPENTSHRINE_CAVERN, // Wildfury Greatstaff
  "30025": RaidId.SERPENTSHRINE_CAVERN, // Serpentshrine Shuriken
  "30023": RaidId.SERPENTSHRINE_CAVERN, // Totem of the Maelstrom
  "30620": RaidId.SERPENTSHRINE_CAVERN, // Spyglass of the Hidden Fleet
  "30183": RaidId.SERPENTSHRINE_CAVERN, // Nether Vortex

  "30024": RaidId.THE_EYE, // Mantle of the Elven Kings
  "30020": RaidId.THE_EYE, // Fire-Cord of the Magus
  "30029": RaidId.THE_EYE, // Bark-Gloves of Ancient Wisdom
  "30026": RaidId.THE_EYE, // Bands of the Celestial Archer
  "30030": RaidId.THE_EYE, // Girdle of Fallen Stars
  "30028": RaidId.THE_EYE, // Seventh Ring of the Tirisfalen

  "32590": RaidId.BATTLE_FOR_MOUNT_HYJAL, //Nethervoid Cloak
  "34010": RaidId.BATTLE_FOR_MOUNT_HYJAL, //Pepe's Shroud of Pacification
  "32591": RaidId.BATTLE_FOR_MOUNT_HYJAL, //Choker of Serrated Blades
  "32589": RaidId.BATTLE_FOR_MOUNT_HYJAL, //Hellfire-Encased Pendant
  "32609": RaidId.BATTLE_FOR_MOUNT_HYJAL, //Boots of the Divine Light
  "32592": RaidId.BATTLE_FOR_MOUNT_HYJAL, //Chestguard of Relentless Storms
  "32946": RaidId.BATTLE_FOR_MOUNT_HYJAL, //Claw of Molten Fury
  "32945": RaidId.BATTLE_FOR_MOUNT_HYJAL, //Fist of Molten Fury
  "34009": RaidId.BATTLE_FOR_MOUNT_HYJAL, //Hammer of Judgement

  "32593": RaidId.BLACK_TEMPLE, //Treads of the Den Mother
  "32606": RaidId.BLACK_TEMPLE, //Girdle of the Lightbearer
  "32608": RaidId.BLACK_TEMPLE, //Pillager's Gauntlets
  "34011": RaidId.BLACK_TEMPLE, //Illidari Runeshield
  "34012": RaidId.BLACK_TEMPLE, //Shroud of the Final Stand
  "32526": RaidId.BLACK_TEMPLE, //Band of Devastation
  "32528": RaidId.BLACK_TEMPLE, //Blessed Band of Karabor
  "32527": RaidId.BLACK_TEMPLE, //Ring of Ancient Knowledge
  "32943": RaidId.BLACK_TEMPLE, //Swiftsteel Bludgeon

  "34349": RaidId.SUNWELL_PLATEAU, // Blade of Life's Inevitability
  "34350": RaidId.SUNWELL_PLATEAU, // Gauntlets of the Ancient Shadowmoon
  "34346": RaidId.SUNWELL_PLATEAU, // Mounting Vengeance
  "35733": RaidId.SUNWELL_PLATEAU, // Ring of Harmonic Beauty
  "34183": RaidId.SUNWELL_PLATEAU, // Shivering Felspine
  "34351": RaidId.SUNWELL_PLATEAU, // Tranquil Majesty Wraps
  "34348": RaidId.SUNWELL_PLATEAU, // Wand of Cleansing Light
  "34347": RaidId.SUNWELL_PLATEAU, // Wand of the Demonsoul

  "50451": RaidId.ICECROWN_CITADEL, // Belt of the Lonely Noble
  "50447": RaidId.ICECROWN_CITADEL, // Harbinger's Bone Band
  "50775": RaidId.ICECROWN_CITADEL, // Leggings of Dubious Charms
  "50453": RaidId.ICECROWN_CITADEL, // Ring of Rotting Sinew
  "50444": RaidId.ICECROWN_CITADEL, // Rowan's Rifle of Silver Bullets
  "50449": RaidId.ICECROWN_CITADEL, // Stifened Corpse Shoulderpads
  "50452": RaidId.ICECROWN_CITADEL, // Wodin's Lucky Necklace

};

function isNewRaid(currentRaids: { [key: string]: Raid }, newRaid: Raid): boolean {
  const prevRaid = currentRaids[newRaid.leader];
  if (!prevRaid) {
    return true;
  }

  // More than 18 hours between raids
  if (
    newRaid.date.getTime() - prevRaid.bosses[prevRaid.bosses.length - 1].date.getTime() >
    18 * 60 * 60 * 1000
  ) {
    return true;
  }

  // Different raid
  if (currentRaids[newRaid.leader] && currentRaids[newRaid.leader].name !== newRaid.name) {
    return true;
  }

  return false;
}

function idForRaid(trafficItem: TrafficItem): string {
  return trafficItem.issuer_name.toLowerCase() + trafficItem.timestamp;
}

function isTrashItem(item: Item): boolean {
  return Object.keys(trashItems).indexOf(item.id.toString()) > -1;
}

declare var fengari: any;

export function dataFromLua(input: string, post13: boolean): any {
  let returnVal = "(TRAFFIC or CEPGP.Traffic)";
  if (post13) {
    returnVal = "(CEPGP.Traffic or TRAFFIC)";
  }
  const traffic = window.fengari.load(
    "TRAFFIC=false\n" + input + "\n return " + returnVal
  )();
  let i = 1;
  let entry;
  const output = [];
  while ((entry = traffic.get(i))) {
    i++;
    const target_name = entry.get(1);
    const issuer_name = entry.get(2);
    const action = entry.get(3);
    const ep_before = entry.get(4);
    const ep_after = entry.get(5);
    const gp_before = entry.get(6);
    const gp_after = entry.get(7);
    const item = entry.get(8);
    const timestamp = entry.get(9);

    const trafficEntry: any = {
      target_name,
      issuer_name,
      action,
      ep_before,
      ep_after,
      gp_before,
      gp_after,
      timestamp
    };

    let reg = /\|H?item:(\d+).*\|h\[([^\]]*)/;
    if (item) {
      const matches = item.match(reg);
      if (matches && matches.length > 2) {
        trafficEntry.item_id = matches[1];
        trafficEntry.item_name = matches[2];
      }
    }

    if (!(trafficEntry.item_name && trafficEntry.item_name.indexOf("Qiraji Resonating Crystal") !== -1)) {
      output.push(trafficEntry);
    }
  }
  return { epgp_traffic: output };
}

export default function parse(input: Traffic): Raid[] {
  const currentRaids: { [key: string]: Raid } = {};
  const pendingTrash: { [key: string]: [Loot] } = {};
  return input.epgp_traffic
    .sort((a, b) => parseInt(a.timestamp, 10) - parseInt(b.timestamp, 10))
    .reduce((acc, trafficItem) => {
      if (!trafficItem.timestamp) {
        return acc;
      }

      const date = new Date(parseInt(trafficItem.timestamp, 10) * 1000);
      const eventType = getEventType(trafficItem);

      if (eventType === EventType.BOSS_KILL) {
        if (!trafficItem.timestamp) {
          return acc;
        }
        const bossName = getBossName(trafficItem);
        const points = getPoints(trafficItem);
        const leader = trafficItem.issuer_name;
        const raidName = raidBosses[bossName];
        const boss = { name: bossName, loot: new Array<Loot>(), date, points };
        const newRaid = {
          name: raidName,
          id: idForRaid(trafficItem),
          raidId: raidName as RaidId,
          leader: trafficItem.issuer_name,
          date,
          trash: { loot: pendingTrash[leader] ?? new Array<Loot>() },
          bosses: [boss]
        };
        if (isNewRaid(currentRaids, newRaid)) {
          delete pendingTrash[leader];
          currentRaids[leader] = newRaid;
          acc.push(newRaid);
        } else {
          if (currentRaids[leader]) {
            currentRaids[leader].bosses.push(boss);
          }
        }
      }

      if (
        (eventType === EventType.LOOT_GIVEN || eventType === EventType.DISENCHANT) &&
        trafficItem.item_name &&
        trafficItem.item_id
      ) {
        const cost = parseInt(trafficItem.gp_after, 10) - parseInt(trafficItem.gp_before, 10) || 0;
        const item: Item = {
          name: trafficItem.item_name,
          id: parseInt(trafficItem.item_id, 10)
        };
        const leader = trafficItem.issuer_name;
        const receiver =
          eventType === EventType.LOOT_GIVEN ? trafficItem.target_name : "DISENCHANT";
        if (currentRaids[leader]) {
          const loot = { item, receiver, cost };
          if (isTrashItem(item)) {
            if (currentRaids[leader].raidId === trashItems[item.id]) {
              currentRaids[leader].trash.loot.push(loot);
            } else {
              // Loot dropped before the first boss kill.
              pendingTrash[leader] = pendingTrash[leader] ?? [];
              pendingTrash[leader].push(loot);
            }
          } else {
            if (isHeroicItem(item.id)) {
              let boss = currentRaids[leader].bosses[currentRaids[leader].bosses.length - 1];
              if (boss.name.indexOf("(HC)") === -1) {
                boss.name = boss.name + " (HC)";
              }
            }
            currentRaids[leader].bosses[currentRaids[leader].bosses.length - 1].loot.push(loot);
          }
        }
      }

      return acc;
    }, new Array<Raid>())
    .reverse();
}

function isHeroicItem(id: number): Boolean {
  return HEROIC_ICC_ITEMS.indexOf(id) !== -1;
}

function getBossName({ action }: TrafficItem): string {
  const parts = action.split(" - ");
  if (parts.length > 1) {
    return parts[parts.length - 1];
  } else {
    // Handle cases where EP is awarded manually
    return Object.keys(raidBosses).find(boss => action.indexOf(boss) > -1) || "";
  }
}

function getPoints({ action }: TrafficItem): number {
  const index = action.indexOf("+");
  return parseInt(action.substr(index));
}

function getEventType({ target_name, item_name, action }: TrafficItem): EventType {
  if (target_name === "" && (action === "Not EPGP Moderated" || action === "Manually Awarded")) {
    return EventType.DISENCHANT;
  }

  if (item_name) {
    return EventType.LOOT_GIVEN;
  }

  const isBoss = Object.keys(raidBosses).find(boss => action.indexOf(boss) > -1);

  if (target_name === "Raid" && isBoss) {
    return EventType.BOSS_KILL;
  }

  return EventType.OTHER;
}
