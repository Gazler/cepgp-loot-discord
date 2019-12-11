import React, { useState } from "react";
import RaidCard from "components/Raid/RaidCard";
import RaidWithLoot from "components/Raid/RaidWithLoot";
import parse, { Raid } from "utils/trafficParser";
import loot from "images/loot.png";
import { ReactComponent as Logo } from "images/treasure-chest-duotone.svg";
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

  const reset = () => {
    setTraffic("");
    selectRaid(undefined);
    setRaids([]);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-200">
      <nav className="w-full flex items-center flex-wrap bg-purple-600 text-white">
        <div className="container mx-auto flex p-2">
          <div className="flex items-center flex-shrink-0 mr-6">
            <Logo className="w-8 mr-2" />
            <span className="font-semibold text-xl">CEPGP Loot Publisher</span>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <a
                className="block text-purple-200 mr-4"
                href="https://github.com/gazler/cepgp-loot-discord"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex flex-grow h-full">
        <div className="flex flex-col flex-shrink-0 w-1/4 p-8 h-full">
          <textarea
            placeholder="paste traffic here"
            className="w-full flex-grow border p-2 border-gray-600 text-gray-800"
            value={traffic}
            onChange={parseRaids}
          />
          <button
            onClick={() => reset()}
            className="w-32 mt-2 bg-white hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded"
          >
            Reset
          </button>
        </div>
        <div className="flex-grow h-full py-8 overflow-y-auto flex flex-wrap space-between">
          {raids.length === 0 && (
            <div className="pr-16">
              <h2 className="text-2xl font-bold text-purple-600">Instructions</h2>
              <h3 className="text-xl text-purple-600 mt-4">Export the JSON</h3>
              <p className="mt-2">
                To publish your raid loot to discord, you will need to export the traffic log to
                JSON from the addon.
              </p>
              <ol className="mt-2 ml-2 pl-4 list-decimal">
                <li className="pl-1">Open World of Warcraft Classic</li>
                <li className="pl-1">log in to a character that can see officer notes</li>
                <li className="pl-1">
                  type <pre className="inline">/cep show</pre>
                </li>
                <li className="pl-1">
                  Navigate to Guild &gt; View EPGP Traffic &gt; Export EPGP Traffic
                </li>
                <li className="pl-1">Click Format to JSON</li>
                <li className="pl-1">
                  Copy and paste the contents into the input on the left of this page
                </li>
              </ol>

              <h3 className="text-xl text-purple-600 mt-4">Select a Raid</h3>
              <p className="mt-2">
                After pasting the JSON, you will be given the option to select a raid.
                <br />
                You can select a raid and publish to a discord channel.
              </p>

              <h3 className="text-xl text-purple-600 mt-4">Create a discord webhook</h3>
              <p className="mt-2">
                A webhook is required to publish the loot. Anyone with permission can create a
                webhook.
                <br />
                Please follow the
                <a
                  className="text-purple-600 ml-1 mr-1 font-bold hover:text-purple-700"
                  href="https://support.discordapp.com/hc/en-us/articles/228383668-Intro-to-Webhooks"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord Intro to Webhooks
                </a>
                documentation for instructions.
                <br />
                You can enter the webhook URL after selecting a raid.
              </p>
            </div>
          )}
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
        {currentRaid ? (
          <RaidWithLoot {...currentRaid} />
        ) : (
          <div className="text-center w-1/3 flex items-center justify-center bg-gray-700">
            <img
              className="object-contain flex-grow-0 max-h-full"
              src={loot}
              alt="Screenshot of Discord Bot"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
