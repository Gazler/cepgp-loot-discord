import React, { useState } from "react";
import { Raid } from "utils/trafficParser";
import publish from "utils/publish";
import BossCard from "components/Raid/BossCard";
import TrashCard from "components/Raid/TrashCard";

type Props = Raid;

const RaidWithLoot: React.FC<Props> = props => {
  const defaultButtonText = "Post Loot!";
  const [webhookUrl, setWebhookUrl] = useState<string>("");
  const [publishing, setPublishing] = useState<boolean>(false);
  const [publishedText, setPublishedText] = useState<string>(defaultButtonText);

  const publishLoot = () => {
    if (!publishing) {
      setPublishing(true);
      setPublishedText("Posting");
      const reset = (text: string) => {
        setPublishedText(text);
        setTimeout(() => {
          setPublishing(false);
          setPublishedText(defaultButtonText);
        }, 1000);
      };
      publish(webhookUrl, props)
        .then((response) => {
          if (response.ok) {
            reset("Posted");
          } else {
            reset("Failed");
          }
        })
        .catch(() => reset("Failed"));
    }
  };

  let buttonClass =
    "w-32 bg-white text-purple-700 font-semibold py-2 px-4 border border-purple-500 hover:border-transparent rounded";
  if (publishing) {
    buttonClass = buttonClass + " opacity-75 cursor-not-allowed";
  } else {
    buttonClass = buttonClass + " hover:text-white hover:bg-purple-500";
  }

  return (
    <div className="flex-shrink-0 flex flex-col items-baseline w-1/2 h-full">
      <div className="flex p-8 overflow-y-auto">
        <div className="flex flex-wrap">
          {props.bosses.map(boss => (
            <BossCard {...boss} />
          ))}

          {props.trash.loot.length > 0 && <TrashCard {...props.trash} />}
        </div>
      </div>
      <div className="flex-grow"></div>
      <div className="h-24 w-full flex-shrink-0 bg-purple-600 flex items-center pl-8 items-baseline pt-1">
        <div className="flex-grow"></div>
        <div className="h-8 mr-4">
          <input
            className="p-2 mr-2"
            placeholder="Discord Webhook URL"
            value={webhookUrl}
            onChange={e => setWebhookUrl(e.target.value)}
          />
          <button onClick={() => publishLoot()} className={buttonClass} disabled={publishing}>
            {publishedText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RaidWithLoot;
