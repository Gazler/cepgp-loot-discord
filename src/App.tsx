import React, { useState } from "react";
import RaidCard from "components/Raid/RaidCard";
import RaidWithLoot from "components/Raid/RaidWithLoot";
import parse, { Raid } from "utils/trafficParser";
import "./tailwind.css";

const App: React.FC = () => {
  const [raids, setRaids] = useState<Raid[]>([]);
  const [currentRaid, selectRaid] = useState<Raid>();
  const [traffic, setTraffic] = useState<string>("");
  const parseRaids = (e: any) => {
    const raids = parse(JSON.parse(e.target.value));
    setTraffic(JSON.stringify(JSON.parse(e.target.value), null, 2));
    setRaids(raids);
    selectRaid(raids[0]);
  };

  return (
    <div className="flex">
      <div className="w-1/4 p-8 h-screen">
        <textarea
          placeholder="paste traffic here"
          className="w-full h-full border p-2"
          value={traffic}
          onChange={parseRaids}
        />
      </div>
      <div className="w-1/4 h-screen py-8 overflow-y-auto flex flex-wrap space-between">
        {raids.map((raid, i) => (
          <RaidCard
            key={i}
            bossCount={raid.bosses.length}
            {...raid}
            onClick={() => selectRaid(raid)}
            active={raid.id === currentRaid?.id}
          />
        ))}
      </div>
      {currentRaid && <RaidWithLoot {...currentRaid} />}
    </div>
  );
};

export default App;
