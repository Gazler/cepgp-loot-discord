import { Raid, RaidId, Loot } from "utils/trafficParser";
const baseUrl =
  process.env.PUBLIC_URL === ""
    ? "https://cepgp-loot-discord.netlify.app"
    : process.env.PUBLIC_URL;

const raidIcons = {
  [RaidId.MOLTEN_CORE]: {
    icon: "https://www.heroesfire.com/images/wikibase/icon/talents/cauterize-wounds.png",
    image: "https://art.hearthstonejson.com/v1/256x/TB_EVILBRM_Ragnaros01.jpg"
  },
  [RaidId.BLACKWING_LAIR]: {
    icon:
      "https://vignette.wikia.nocookie.net/wowwiki/images/1/1e/IconSmall_Nefarian.gif/revision/latest?cb=20090827161607",
    image: "https://art.hearthstonejson.com/v1/256x/BRM_030.jpg"
  },
  [RaidId.ONYXIA]: {
    icon:
      "https://vignette.wikia.nocookie.net/wowwiki/images/0/02/IconSmall_Onyxia.gif/revision/latest?cb=20090827161643",
    image: "https://art.hearthstonejson.com/v1/256x/EX1_562.jpg"
  },
  [RaidId.ZUL_GURUB]: {
    icon: `${baseUrl}/images/hakkar-icon.png`,
    image: `${baseUrl}/images/hakkar.jpg`
  },
  [RaidId.RUINS_OF_AHN_QIRAJ]: {
    icon:
      "https://vignette.wikia.nocookie.net/wowwiki/images/c/c9/IconSmall_Horusath.gif/revision/latest?cb=20090307115004",
    image:
      "https://vignette.wikia.nocookie.net/wowwiki/images/7/74/Ossirian.jpg/revision/latest?cb=20060307175326"
  },
  [RaidId.TEMPLE_OF_AHN_QIRAJ]: {
    icon:
      "https://vignette.wikia.nocookie.net/wowwiki/images/3/36/IconSmall_OldGod.gif/revision/latest?cb=20071025202824",
    image:
      "https://vignette.wikia.nocookie.net/wowwiki/images/5/59/C%27Thun.jpg/revision/latest?cb=20160406234009"
  },
  [RaidId.NAXXRAMAS]: {
    icon:
    "https://static.wikia.nocookie.net/wowpedia/images/e/e9/IconSmall_Kel%27Thuzad.gif/revision/latest/scale-to-width-down/16?cb=20100816040058",
    image:
    "https://static.wikia.nocookie.net/wowpedia/images/9/9d/Kel%27thuzad_Ingame.png/revision/latest?cb=20091014162235"
  },
  [RaidId.KARAZHAN]: {
    icon:
    "https://images.wikia.com/wowpedia/images/archive/c/c6/20200505171701%21IconSmall_Man%27ari_Male.gif",
    image:
    "https://static.wikia.nocookie.net/wowpedia/images/a/ad/Prince_Malchezaar_HS.jpg/revision/latest/scale-to-width-down/389?cb=20160810151000"
    },
  [RaidId.GRUULS_LAIR]: {
    icon:
    "https://static.wikia.nocookie.net/wowpedia/images/e/ef/IconSmall_Gronn.gif/revision/latest/scale-to-width-down/16?cb=20070804111913",
    image:
    "https://static.wikia.nocookie.net/wowpedia/images/e/ea/GruulClose.jpg/revision/latest/scale-to-width-down/767?cb=20091228180321"
    },

  [RaidId.MAGTHERIDONS_LAIR]: {
    icon:
    "https://static.wikia.nocookie.net/wowpedia/images/b/b1/IconSmall_PitLord.gif/revision/latest?cb=20170811004859",
    image:
    "https://static.wikia.nocookie.net/wowpedia/images/e/ed/Magtheridon_unleashed_TCG.jpg/revision/latest/scale-to-width-down/1000?cb=20160503214840"
  },

  [RaidId.SERPENTSHRINE_CAVERN]: {
    icon:
    "https://static.wikia.nocookie.net/wowpedia/images/b/b9/IconSmall_Vashj.gif/revision/latest/scale-to-width-down/16?cb=20200413162055",
    image:
    "https://static.wikia.nocookie.net/wowpedia/images/a/a3/200px-Lady_Vashj.PNG/revision/latest/scale-to-width-down/507?cb=20160731110603"
  },

  [RaidId.THE_EYE]: {
    icon:
    "https://static.wikia.nocookie.net/wowpedia/images/2/20/IconSmall_Kael%27thas.gif/revision/latest/scale-to-width-down/16?cb=20200520160455",
    image:
    "https://static.wikia.nocookie.net/wowpedia/images/6/62/Bloodmage_Kael%27thas.jpg/revision/latest/scale-to-width-down/682?cb=20210402103754"
  },

  [RaidId.BATTLE_FOR_MOUNT_HYJAL]: {
    icon:
    "https://static.wikia.nocookie.net/wowpedia/images/a/ad/IconSmall_Archimonde.gif/revision/latest?cb=20200519181227",
    image:
    "https://static.wikia.nocookie.net/wowpedia/images/8/8d/Archimonde_the_Defiler.jpg/revision/latest/scale-to-width-down/293?cb=20120921052506"
  },

  [RaidId.BLACK_TEMPLE]: {
    icon:
    "https://static.wikia.nocookie.net/wowpedia/images/d/d5/IconSmall_Illidan.gif/revision/latest?cb=20211211102517",
    image:
    "https://static.wikia.nocookie.net/wowpedia/images/e/e0/Illidan_the_Betrayer.jpg/revision/latest?cb=20150907112817"
  }
};

function lootString(loot: Loot[]) {
  const lootString = loot.reduce((acc, loot) => {
    return (
      acc +
      `[${loot.item.name}](https://tbc.wowhead.com/item=${loot.item.id})\n\`${loot.cost}\` **${loot.receiver}**\n`
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

  const totalEp = raid.bosses.reduce((acc, { points }) => acc + points, 0);

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

  return fetch(url, {
    method: "POST", // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json"
    }
  });
}
