"use client";
import React from "react";
import { AiTwotoneCheckCircle } from "react-icons/ai";
import { BsFillDiamondFill } from "react-icons/bs";

type AbilityScoresProps = {
  sheetNumber: number;
};

const AbilityScores: React.FC<AbilityScoresProps> = ({ sheetNumber }) => {
  return (
    <aside
      className={`${
        sheetNumber === 3 ? "grid" : "hidden"
      } min-h-[50vh] md:min-h-0 lg:grid grid-cols-1 grid-rows-4 border border-gray-400 justify-center p-4 bg-gray-200 rounded-lg lg:hover:scale-105 lg:hover:shadow-lg shadow-black ease-in duration-300`}
    >
      <div className="grid grid-cols-3 border-black border-2 rounded-l-lg">
        <div className="bg-white flex flex-col justify-between items-center rounded-lg">
          <div className="w-[25%] p-4 bg-gray-400 border-2 border-black"></div>
          <p className="w-fulltext-center font-bold uppercase text-sm">
            FRONT-END
          </p>
        </div>
        <div className="bg-gray-300 col-span-2 p-4 gap-1 flex flex-col text-xs">
          <div className="flex gap-2">
            <BsFillDiamondFill className="text-white" />
            <span className="border-b border-black w-4"></span>
            <p>SAVING THROWS</p>
          </div>
          <div className="flex gap-2">
            <AiTwotoneCheckCircle className="text-slate-600" />
            <span className="border-b border-black w-4"></span>
            <p>FRAMEWORKS</p>
          </div>
          <div className="flex gap-2">
            <AiTwotoneCheckCircle className="text-slate-600" />
            <span className="border-b border-black w-4"></span>
            <p>STYLING</p>
          </div>
          <div className="flex gap-2">
            <AiTwotoneCheckCircle className="text-white" />
            <span className="border-b border-black w-4"></span>
            <p>SEO</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 border-black border-2 rounded-l-lg">
        <div className="bg-white flex flex-col justify-between items-center rounded-lg">
          <div className="w-[25%] p-4 bg-gray-400 border-2 border-black"></div>
          <p className="w-full text-center font-bold uppercase text-sm">
            BACK-END
          </p>
        </div>
        <div className="bg-gray-300 col-span-2 p-4 gap-1 flex flex-col text-xs">
          <div className="flex gap-2">
            <BsFillDiamondFill className="text-white" />
            <span className="border-b border-black w-4"></span>
            <p>SAVING THROWS</p>
          </div>
          <div className="flex gap-2">
            <AiTwotoneCheckCircle className="text-slate-600" />
            <span className="border-b border-black w-4"></span>
            <p>DATABASE</p>
          </div>
          <div className="flex gap-2">
            <AiTwotoneCheckCircle className="text-slate-600" />
            <span className="border-b border-black w-4"></span>
            <p>API</p>
          </div>
          <div className="flex gap-2">
            <AiTwotoneCheckCircle className="text-white" />
            <span className="border-b border-black w-4"></span>
            <p>SERVERS</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 border-black border-2 rounded-l-lg">
        <div className="bg-white flex flex-col justify-between items-center rounded-lg">
          <div className="w-[25%] p-4 bg-gray-400 border-2 border-black"></div>
          <p className="w-fulltext-center font-bold uppercase text-xs">
            VERSION CONTROL
          </p>
        </div>
        <div className="bg-gray-300 col-span-2 p-4 gap-1 flex flex-col text-xs">
          <div className="flex gap-2">
            <BsFillDiamondFill className="text-slate-600" />
            <span className="border-b border-black w-4"></span>
            <p>SAVING THROWS</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 border-black border-2 rounded-l-lg">
        <div className="bg-white flex flex-col justify-between items-center rounded-lg">
          <div className="w-[25%] p-4 bg-gray-400 border-2 border-black"></div>
          <p className="w-fulltext-center font-bold uppercase text-sm">CMS</p>
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
            <p>WORDPRESS</p>
          </div>
          <div className="flex gap-2">
            <AiTwotoneCheckCircle className="text-slate-600" />
            <span className="border-b border-black w-4"></span>
            <p>SQUARESPACE</p>
          </div>
          <div className="flex gap-2">
            <AiTwotoneCheckCircle className="text-white" />
            <span className="border-b border-black w-4"></span>
            <p>DRUPAL</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
export default AbilityScores;
