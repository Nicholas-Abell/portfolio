import React from "react";
import { AiTwotoneCheckCircle } from "react-icons/ai";
import { BsFillDiamondFill } from "react-icons/bs";

type AbilityScoresProps = {
  sheetNumber: number;
};

const AbilityScores: React.FC<AbilityScoresProps> = ({ sheetNumber }) => {
  return (
    <div
      className={`${
        sheetNumber === 1 ? "grid" : "hidden"
      } lg:grid grid-cols-1 border border-gray-400  justify-center p-4 bg-gray-200 rounded-lg`}
    >
      <div className="grid grid-cols-3 border-black border-2 rounded-l-lg">
        <div className="bg-white flex flex-col justify-between items-center rounded-lg">
          <div className="w-[25%] p-4 bg-gray-400 border-2 border-black"></div>
          <p className="w-fulltext-center font-bold uppercase">STRENGTH</p>
        </div>
        <div className="bg-gray-300 col-span-2 p-4 gap-1 flex flex-col text-xs">
          <div className="flex gap-2">
            <BsFillDiamondFill className="text-white" />
            <span className="border-b border-black w-4"></span>
            <p>SAVING THROWS</p>
          </div>
          <div className="flex gap-2">
            <AiTwotoneCheckCircle className="text-white" />
            <span className="border-b border-black w-4"></span>
            <p>ATHLETICS</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 border-black border-2 rounded-l-lg">
        <div className="bg-white flex flex-col justify-between items-center rounded-lg">
          <div className="w-[25%] p-4 bg-gray-400 border-2 border-black"></div>
          <p className="w-full text-center font-bold uppercase">DEXTERITY</p>
        </div>
        <div className="bg-gray-300 col-span-2 p-4 gap-1 flex flex-col text-xs">
          <div className="flex gap-2">
            <BsFillDiamondFill className="text-white" />
            <span className="border-b border-black w-4"></span>
            <p>SAVING THROWS</p>
          </div>
          <div className="flex gap-2">
            <AiTwotoneCheckCircle className="text-white" />
            <span className="border-b border-black w-4"></span>
            <p>ACROBATICS</p>
          </div>
          <div className="flex gap-2">
            <AiTwotoneCheckCircle className="text-white" />
            <span className="border-b border-black w-4"></span>
            <p>SLEIGHT OF HAND</p>
          </div>
          <div className="flex gap-2">
            <AiTwotoneCheckCircle className="text-white" />
            <span className="border-b border-black w-4"></span>
            <p>STEALTH</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 border-black border-2 rounded-l-lg">
        <div className="bg-white flex flex-col justify-between items-center rounded-lg">
          <div className="w-[25%] p-4 bg-gray-400 border-2 border-black"></div>
          <p className="w-fulltext-center font-bold uppercase">STRENGTH</p>
        </div>
        <div className="bg-gray-300 col-span-2 p-4 gap-1 flex flex-col text-xs">
          <div className="flex gap-2">
            <BsFillDiamondFill className="text-white" />
            <span className="border-b border-black w-4"></span>
            <p>SAVING THROWS</p>
          </div>
          <div className="flex gap-2">
            <AiTwotoneCheckCircle className="text-white" />
            <span className="border-b border-black w-4"></span>
            <p>ATHLETICS</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 border-black border-2 rounded-l-lg">
        <div className="bg-white flex flex-col justify-between items-center rounded-lg">
          <div className="w-[25%] p-4 bg-gray-400 border-2 border-black"></div>
          <p className="w-fulltext-center font-bold uppercase">STRENGTH</p>
        </div>
        <div className="bg-gray-300 col-span-2 p-4 gap-1 flex flex-col text-xs">
          <div className="flex gap-2">
            <BsFillDiamondFill className="text-white" />
            <span className="border-b border-black w-4"></span>
            <p>SAVING THROWS</p>
          </div>
          <div className="flex gap-2">
            <AiTwotoneCheckCircle className="text-white" />
            <span className="border-b border-black w-4"></span>
            <p>ATHLETICS</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 border-black border-2 rounded-l-lg">
        <div className="bg-white flex flex-col justify-between items-center rounded-lg">
          <div className="w-[25%] p-4 bg-gray-400 border-2 border-black"></div>
          <p className="w-fulltext-center font-bold uppercase">STRENGTH</p>
        </div>
        <div className="bg-gray-300 col-span-2 p-4 gap-1 flex flex-col text-xs">
          <div className="flex gap-2">
            <BsFillDiamondFill className="text-white" />
            <span className="border-b border-black w-4"></span>
            <p>SAVING THROWS</p>
          </div>
          <div className="flex gap-2">
            <AiTwotoneCheckCircle className="text-white" />
            <span className="border-b border-black w-4"></span>
            <p>ATHLETICS</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 border-black border-2 rounded-l-lg">
        <div className="bg-white flex flex-col justify-between items-center rounded-lg">
          <div className="w-[25%] p-4 bg-gray-400 border-2 border-black"></div>
          <p className="w-fulltext-center font-bold uppercase">STRENGTH</p>
        </div>
        <div className="bg-gray-300 col-span-2 p-4 gap-1 flex flex-col text-xs">
          <div className="flex gap-2">
            <BsFillDiamondFill className="text-white" />
            <span className="border-b border-black w-4"></span>
            <p>SAVING THROWS</p>
          </div>
          <div className="flex gap-2">
            <AiTwotoneCheckCircle className="text-white" />
            <span className="border-b border-black w-4"></span>
            <p>ATHLETICS</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AbilityScores;