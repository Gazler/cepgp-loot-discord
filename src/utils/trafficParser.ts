export type TrafficItem = {
  target_name: string
  issuer_name: string
  action: string
  ep_before: string
  ep_after: string
  gp_before: string
  gp_after: string
  timestamp: string
  item_name?: string
  item_id?: string
}

export type Traffic = {
  epgp_traffic: TrafficItem[]
}

enum EventType {
  LOOT_GIVEN,
  BOSS_KILL,
  OTHER
}

type Item = {
  name: string,
  id: number
}

type Loot = {
  item: Item,
  receiver: string,
  cost: number
}

type Boss = {
  name: string,
  loot: Loot[],
  date: Date
}

export type Raid = {
  name: string
  date: Date,
  leader: string,
  bosses: Boss[]
}

enum RaidId {
  ONYXIA = "Onyxia",
  MOLTEN_CORE = "Molten Core"
}

const raidBosses: {[key: string]: RaidId} = {
  Onyxia: RaidId.ONYXIA,
  "Lucifron": RaidId.MOLTEN_CORE,
  "Magmadar": RaidId.MOLTEN_CORE,
  "Gehennas": RaidId.MOLTEN_CORE,
  "Garr": RaidId.MOLTEN_CORE,
  "Baron Geddon": RaidId.MOLTEN_CORE,
  "Shazzrah": RaidId.MOLTEN_CORE,
  "Sulfuron Harbinger": RaidId.MOLTEN_CORE,
  "Golemagg the Incinerator": RaidId.MOLTEN_CORE,
  "Majordomo Executus": RaidId.MOLTEN_CORE,
  "Ragnaros": RaidId.MOLTEN_CORE
}

/*
[Arcanist Belt]
[Arcanist Bindings]
[Belt of Might]
[Bracers of Might]
[Cenarion Belt]
[Cenarion Bracers]
[Earthfury Belt]
[Earthfury Bracers]
[Felheart Belt]
[Felheart Bracers]
[Giantstalker's Belt]
[Giantstalker's Bracers]
[Girdle of Prophecy]
[Lawbringer Belt]
[Lawbringer Bracers]
[Nightslayer Belt]
[Nightslayer Bracelets]
[Vambraces of Prophecy]
*/

function isNewRaid(currentRaids: {[key: string]: Raid}, newRaid: Raid): boolean {
  const prevRaid = currentRaids[newRaid.leader];
  if (!prevRaid) {
    return true;
  }

  // More than 18 hours between raids

  if (newRaid.date.getTime() - prevRaid.bosses[prevRaid.bosses.length - 1].date.getTime() > (18 * 60 * 60 * 1000)) {
    return true;
  }

  // Different raid
  if (currentRaids[newRaid.leader] && currentRaids[newRaid.leader].name !== newRaid.name) {
    return true;
  }


  return false;
}

export default function parse(input: Traffic): Raid[] {
  let lastRaid: RaidId;
  const currentRaids: {[key: string]: Raid} = {};
  return input.epgp_traffic
    .sort((a, b) => parseInt(a.timestamp, 10) - parseInt(b.timestamp, 10))
    .reduce((acc, trafficItem) => {
    const date = new Date(parseInt(trafficItem.timestamp, 10) * 1000);
    const eventType = getEventType(trafficItem);

    if (eventType === EventType.BOSS_KILL) {
      const bossName = getBossName(trafficItem);
      const points = getPoints(trafficItem);
      const leader = trafficItem.issuer_name;
      const raidName = raidBosses[bossName];
      const newRaid = {
        name: raidName,
        leader: trafficItem.issuer_name,
        date,
        bosses: [{name: bossName, loot: new Array<Loot>(), date}]
      }
      if (isNewRaid(currentRaids, newRaid)) {
        currentRaids[leader] = newRaid;
        acc.push(newRaid);
      } else {
        if (currentRaids[leader]) {
          currentRaids[leader].bosses.push({name: bossName, loot: new Array<Loot>(), date})
        }
      }

      // console.log(date, raid, bossName, points);
    }

    if (eventType === EventType.LOOT_GIVEN && trafficItem.item_name && trafficItem.item_id) {
      const cost = parseInt(trafficItem.gp_after, 10) - parseInt(trafficItem.gp_before, 10)
      const item: Item = {
        name: trafficItem.item_name,
        id: parseInt(trafficItem.item_id, 10)
      }
      const leader = trafficItem.issuer_name;
      const receiver = trafficItem.target_name;
      if (currentRaids[leader]) {
        currentRaids[leader].bosses[currentRaids[leader].bosses.length - 1].loot.push({
          item,
          receiver,
          cost
        });
      }
    }

    return acc;
    }, new Array<Raid>());
}

function getBossName({ action }: TrafficItem): string {
  const parts = action.split(" - ");
  if (parts.length > 1) {
    return parts[parts.length - 1];
  } else {
    // Handle cases where EP is awarded manually
    return Object.keys(raidBosses).find((boss) => action.indexOf(boss) > -1) || "";
  }
}

function getPoints({ action }: TrafficItem): number {
  const index = action.indexOf("+");
  return parseInt(action.substr(index));
}

function getEventType({ target_name, item_name }: TrafficItem): EventType {
  if(item_name) {
    return EventType.LOOT_GIVEN;
  }

  if (target_name === "Raid") {
    return EventType.BOSS_KILL;
  }

  return EventType.OTHER;
}
