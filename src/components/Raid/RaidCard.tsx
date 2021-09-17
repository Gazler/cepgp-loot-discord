import React from "react";
import { RaidId } from "utils/trafficParser";
import moltenCoreImg from "images/molten-core.jpg";
import blackwingLairImg from "images/blackwing-lair.jpg";
import onyxiaImg from "images/onyxia.jpg";
import zulGurubImg from "images/zul-gurub.jpg";
import aq20Img from "images/aq20.jpg";
import aq40Img from "images/aq40.jpg";
import naxxramasImg from "images/naxxramas.jpg";
import karaImg from "images/karazhan.jpg";
import gruulImg from "images/gruul.jpg";
import magtheridonImg from "images/magtheridon.jpg";
import sscImg from "images/ssc.jpg";
import tkImg from "images/tk.jpg";

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

  if (raidId === RaidId.RUINS_OF_AHN_QIRAJ) {
    return aq20Img;
  }

  if (raidId === RaidId.TEMPLE_OF_AHN_QIRAJ) {
    return aq40Img;
  }

  if (raidId === RaidId.NAXXRAMAS) {
    return naxxramasImg;
  }

  if (raidId === RaidId.KARAZHAN) {
    return karaImg;
  }

  if (raidId === RaidId.GRUULS_LAIR) {
    return gruulImg;
  }

  if (raidId === RaidId.MAGTHERIDONS_LAIR) {
    return magtheridonImg;
  }

  if (raidId === RaidId.SERPENTSHRINE_CAVERN) {
    return sscImg;
  }

  if (raidId === RaidId.THE_EYE) {
    return tkImg;
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
