import { Raid, RaidId, Loot } from "utils/trafficParser";

const raidIcons = {
  [RaidId.MOLTEN_CORE]: {
    icon: "https://www.heroesfire.com/images/wikibase/icon/talents/cauterize-wounds.png",
    image: "https://art.hearthstonejson.com/v1/256x/TB_EVILBRM_Ragnaros01.jpg"
  },
  [RaidId.ONYXIA]: {
    icon:
      "https://vignette.wikia.nocookie.net/wowwiki/images/0/02/IconSmall_Onyxia.gif/revision/latest?cb=20090827161643",
    image: "https://art.hearthstonejson.com/v1/256x/EX1_562.jpg"
  }
};

function lootString(loot: Loot[]) {
  const lootString = loot.reduce((acc, loot) => {
    return (
      acc +
      `[${loot.item.name}](https://classic.wowhead.com/item=${loot.item.id})\n\`${loot.cost}\` **${loot.receiver}**\n`
    );
  }, "");
  return lootString ? `${lootString}\n` : "*(No Loot)*\n";
}

export default function publish(url: string, raid: Raid) {
  const fields = raid.bosses.map(boss => {
    return {
      name: `**${boss.name}**⠀⠀`,
      value: lootString(boss.loot),
      inline: true
    };
  });

  if (raid.trash.loot.length > 0) {
    fields.push({
      name: "**Trash**⠀⠀",
      value: lootString(raid.trash.loot),
      inline: true
    });
  }

  const totalEp = raid.bosses.reduce((acc, { points }) => acc + points, 0)

  const data = {
    embeds: [
      {
        description: `Loot Master: **${raid.leader}** Total EP for Raid: \`${totalEp}\``,
        color: 8924413,
        author: {
          name: `${raid.date.toDateString()} - ${raid.name}`,
          icon_url: raidIcons[raid.raidId].icon
        },
        image: {
          url: raidIcons[raid.raidId].image
        },
        fields: fields
      }
    ]
  };

  console.log(data);

  try {
    fetch(url, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    })
      // .then((resp) => resp.json())
      .then(console.log);
  } catch (error) {
    console.error("Error:", error);
  }
}
