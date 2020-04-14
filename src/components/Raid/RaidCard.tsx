import React from "react";
import { RaidId } from "utils/trafficParser";
import moltenCoreImg from "images/molten-core.jpg";
import blackwingLairImg from "images/blackwing-lair.jpg";
import onyxiaImg from "images/onyxia.jpg";
import zulGurubImg from "images/zul-gurub.jpg";

type Props = {
  name: string;
  leader: string;
  date: Date;
  raidId: RaidId;
  onClick: () => void;
  active?: boolean;
  bossCount: number;
};

const coverImage = (raidId: RaidId): string => {
  if (raidId === RaidId.BLACKWING_LAIR) {
    return blackwingLairImg;
  }

  if (raidId === RaidId.ONYXIA) {
    return onyxiaImg;
  }

  if (raidId === RaidId.ZUL_GURUB) {
    return zulGurubImg;
  }

  return moltenCoreImg;
};

const RaidCard: React.FC<Props> = ({ name, leader, date, bossCount, onClick, active, raidId }) => (
  <div
    className={`flex-shrink-0 m-2 w-64 rounded-lg overflow-hidden shadow-lg cursor-pointer border-2 bg-white ${
      active ? "border-blue-400" : ""
    }`}
    onClick={onClick}
  >
    <img className="w-full h-32 object-cover" src={coverImage(raidId)} alt={name} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{name}</div>
      <div className="font text-lg mb-2">{leader}</div>
      <div className="font text-lg mb-2">{date.toDateString()}</div>
      <p className="text-gray-700 text-base">
        {bossCount} boss{bossCount !== 1 ? "es" : ""} killed
      </p>
    </div>
  </div>
);

export default RaidCard;
