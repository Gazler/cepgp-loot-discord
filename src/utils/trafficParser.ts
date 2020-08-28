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
  TEMPLE_OF_AHN_QIRAJ = "Temple of Ahn'Qiraj"
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
  "20263": RaidId.ZUL_GURUB // Gurubashi Helm
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

export function dataFromLua(input: string): any {
  const traffic = window.fengari.load(
    "TRAFFIC=false\n" + input + "\n return (TRAFFIC or CEPGP.Traffic)"
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
            currentRaids[leader].bosses[currentRaids[leader].bosses.length - 1].loot.push(loot);
          }
        }
      }

      return acc;
    }, new Array<Raid>())
    .reverse();
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
