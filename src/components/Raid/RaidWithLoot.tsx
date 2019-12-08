import React, { useState } from "react";
import { Raid } from "utils/trafficParser";
import publish from "utils/publish";
import BossCard from "components/Raid/BossCard";
import TrashCard from "components/Raid/TrashCard";

type Props = Raid;

const RaidWithLoot: React.FC<Props> = props => {
  const [webhookUrl, setWebhookUrl] = useState<string>("");
  return (
    <div className="flex flex-col items-baseline w-1/2 h-screen">
      <div className="flex p-8 overflow-y-auto">
        <div className="flex flex-wrap">
          {props.bosses.map(boss => (
            <BossCard {...boss} />
          ))}

          {props.trash.loot.length > 0 && <TrashCard {...props.trash} />}
        </div>
      </div>
      <div className="flex-grow"></div>
      <div className="h-16 w-full flex-shrink-0 bg-purple-600 flex items-center pl-8">
        <div className="flex-grow"></div>
        <div className="h-8 mr-4">
          <input
            className="p-2 mr-2"
            placeholder="Discord Webhook URL"
            value={webhookUrl}
            onChange={e => setWebhookUrl(e.target.value)}
          />
          <button
            onClick={() => publish(webhookUrl, props)}
            className="bg-white hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded"
          >
            Post Loot!
          </button>
        </div>
      </div>
    </div>
  );
};

export default RaidWithLoot;
