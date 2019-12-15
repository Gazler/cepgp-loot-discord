import React from "react";
import LootItem from "components/Raid/LootItem";
import { Loot } from "utils/trafficParser";

type Props = {
  loot: Loot[];
};

const TrashCard: React.FC<Props> = ({ loot }) => (
  <div className="px-6 pt-8 pb-4">
    <div className="font-bold text-xl mb-2">Trash</div>
    {loot.map((lootItem, i) => (
      <LootItem {...lootItem} index={i} key={i} />
    ))}
  </div>
);

export default TrashCard;
