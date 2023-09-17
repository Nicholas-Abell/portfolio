import React from "react";
import { BiSolidShield } from "react-icons/bi";
import { BsFillHeartFill } from "react-icons/bs";

type TempStatsProps = { sheetNumber: number };

const TempStats: React.FC<TempStatsProps> = ({ sheetNumber }) => {
  return (
    <div
      className={`${sheetNumber === 2 ? "grid" : "hidden"}
  border border-gray-400 grid-cols-2 justify-center gap-1 p-4 lg:grid bg-gray-200 rounded-lg`}
    >
      <BsFillHeartFill size={60} className="m-auto text-black" />
      <BiSolidShield size={60} className="m-auto text-black" />
      <div className="bg-white rounded-lg border-2 border-gray-400 flex flex-col justify-between items-center">
        <div className="w-full h-full flex justify-center items-center">
          <p className="py-8">18</p>
        </div>
        <p className="font-bold uppercase">TEMP HP</p>
      </div>
      <div className="bg-white rounded-lg border-2 border-gray-400 flex flex-col justify-between items-center">
        <div className="w-full h-full flex justify-center items-center">
          <p className="py-8">2d6</p>
        </div>
        <p className="font-bold uppercase">HIT DICE</p>
      </div>
      <div className="bg-white rounded-lg border-2 border-gray-400 flex flex-col justify-between items-center">
        <div className="w-full h-full flex justify-center items-center">
          <p className="py-8">12ft</p>
        </div>
        <p className="font-bold uppercase">SPEED</p>
      </div>
      <div className="bg-white rounded-lg border-2 border-gray-400 flex flex-col justify-between items-center">
        <div className="w-full h-full flex justify-center items-center">
          <p className="py-8">+2</p>
        </div>
        <p className="font-bold uppercase">INITIATIVE</p>
      </div>
      <div className="bg-white border-gray-400 border-2 rounded-full col-span-2 flex justify-between items-center w-full">
        <div className="rounded-full border-2 border-gray-400 px-8 py-1">
          <p>27</p>
        </div>
        <p className="text-center font-bold w-full uppercase">
          PASSIVE PERCEPTION
        </p>
      </div>
      <div className="bg-white border-gray-400 border-2 rounded-full col-span-2 flex justify-between items-center w-full">
        <div className="rounded-full border-2 border-gray-400 px-8 py-1">
          <p>+2</p>
        </div>
        <p className="text-center font-bold w-full uppercase">PROFICIENCY</p>
      </div>
      <div className="bg-white grid grid-cols-1 border-2 border-gray-400 col-span-2 rounded-lg">
        <div className="w-full border-black border-b py-3"></div>
        <div className="w-full border-black border-b py-3"></div>
        <p className="w-full border-black border-b text-center">Negotiable</p>
        <div className="w-full border-black border-b py-3"></div>
        <div className="w-full border-black border-b py-3"></div>
        <p className="text-center font-bold uppercase border-t-2">CURRENCY</p>
      </div>
    </div>
  );
};
export default TempStats;
