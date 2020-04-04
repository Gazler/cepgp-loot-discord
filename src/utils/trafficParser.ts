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
  BLACKWING_LAIR = "Blackwing Lair"
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
  Нефариан: RaidId.BLACKWING_LAIR
};

const trashItems: { [key: string]: RaidId } = {
  "Arcanist Belt": RaidId.MOLTEN_CORE,
  "Arcanist Bindings": RaidId.MOLTEN_CORE,
  "Belt of Might": RaidId.MOLTEN_CORE,
  "Bracers of Might": RaidId.MOLTEN_CORE,
  "Cenarion Belt": RaidId.MOLTEN_CORE,
  "Cenarion Bracers": RaidId.MOLTEN_CORE,
  "Earthfury Belt": RaidId.MOLTEN_CORE,
  "Earthfury Bracers": RaidId.MOLTEN_CORE,
  "Felheart Belt": RaidId.MOLTEN_CORE,
  "Felheart Bracers": RaidId.MOLTEN_CORE,
  "Giantstalker's Belt": RaidId.MOLTEN_CORE,
  "Giantstalker's Bracers": RaidId.MOLTEN_CORE,
  "Girdle of Prophecy": RaidId.MOLTEN_CORE,
  "Lawbringer Belt": RaidId.MOLTEN_CORE,
  "Lawbringer Bracers": RaidId.MOLTEN_CORE,
  "Nightslayer Belt": RaidId.MOLTEN_CORE,
  "Nightslayer Bracelets": RaidId.MOLTEN_CORE,
  "Vambraces of Prophecy": RaidId.MOLTEN_CORE,

  "Boots of Pure Thought": RaidId.BLACKWING_LAIR,
  "Cloak of Draconic Might": RaidId.BLACKWING_LAIR,
  "Draconic Maul": RaidId.BLACKWING_LAIR,
  "Doom's Edge": RaidId.BLACKWING_LAIR,
  "Essence Gatherer": RaidId.BLACKWING_LAIR,
  "Band of Dark Dominion": RaidId.BLACKWING_LAIR,
  "Draconic Avenger": RaidId.BLACKWING_LAIR,
  "Interlaced Shadow Jerkin": RaidId.BLACKWING_LAIR,
  "Ringo's Blizzard Boots": RaidId.BLACKWING_LAIR
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
  return Object.keys(trashItems).indexOf(item.name) > -1;
}

declare var fengari: any;

export function dataFromLua(input: string): any {
  const table = window.fengari.load(input + "\n return CEPGP")();
  const traffic = table.get("Traffic");
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
    output.push(trafficEntry);
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
            if (currentRaids[leader].raidId === trashItems[item.name]) {
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

  const isBoss = Object.keys(raidBosses).find((boss) => action.indexOf(boss) > -1);

  if (target_name === "Raid" && isBoss) {
    return EventType.BOSS_KILL;
  }

  return EventType.OTHER;
}
