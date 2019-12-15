import React from "react";
import LootItem from "components/Raid/LootItem";
import { Boss } from "utils/trafficParser";

type BossProps = Boss;

const BossCard: React.FC<BossProps> = ({ name, loot, points, date }) => (
  <div className="px-6 pt-8 pb-4">
    <div className="font-bold text-xl mb-2">{date.toDateString()}</div>
    <div className="font-bold text-xl mb-2">{name}</div>
    <div className="absolute" style={{ right: 8, top: 8 }}>
      EP: {points}
    </div>
    {loot.map((lootItem, i) => (
      <LootItem {...lootItem} index={i} key={i} />
    ))}
  </div>
);

export default BossCard;
