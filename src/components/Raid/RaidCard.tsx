import React from "react";

type Props = {
  name: string;
  leader: string;
  date: Date;
  onClick: () => void;
  active?: boolean;
  bossCount: number;
};

const coverImage = (name: string): string => {
  if (name === "Onyxia") {
    return "https://vignette.wikia.nocookie.net/wowwiki/images/4/46/Onyxia%27s_Lair_loading_screen.jpg/revision/latest?cb=20110217222549";
  }

  return "https://vignette.wikia.nocookie.net/wowwiki/images/2/20/Molten_Core_loading_screen.jpg/revision/latest?cb=20110217231319";
};

const RaidCard: React.FC<Props> = ({ name, leader, date, bossCount, onClick, active }) => (
  <div
    className={`flex-shrink-0 m-2 w-64 rounded overflow-hidden shadow-lg cursor-pointer border-2 ${
      active ? "border-blue-400" : ""
    }`}
    onClick={onClick}
  >
    <img className="w-full h-32 object-cover" src={coverImage(name)} alt={name} />
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
