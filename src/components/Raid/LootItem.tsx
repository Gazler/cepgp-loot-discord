import React from "react";
import { Loot } from "utils/trafficParser";

const LootItem: React.FC<Loot> = ({ item, cost, receiver }) => (
  <div className="pb-2">
    <div className="text-purple-600">{item.name}</div>
    <div>
      <span className="w-4 pr-2">{cost}</span>
      <span className="font-bold">{receiver}</span>
    </div>
  </div>
);

export default LootItem;
