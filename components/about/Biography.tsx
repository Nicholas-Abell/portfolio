import React from "react";

type BiographyProps = {
  sheetNumber: number;
};

const Biography: React.FC<BiographyProps> = ({ sheetNumber }) => {
  return (
    <div
      className={`${
        sheetNumber === 3 ? "grid" : "hidden"
      } lg:grid border border-gray-400 p-2 bg-gray-200 rounded-lg`}
    >
      <div className="bg-gray-400 border-4 flex flex-col justify-between">
        <div className="flex justify-center items-center w-full h-full">
          <p className="px-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic culpa
            tempore an asdfasd fsdf asdf sadf hfghpfpgiojear sdcxzp'cogjvar
            twseiofjs
          </p>
        </div>
        <p className="text-center font-bold uppercase py-4 border-t-2">BIO</p>
      </div>
      <div className="bg-gray-400 border-4 grid grid-cols-1 ">
        <p className="border-b-2 pt-4 pl-4">English - fluent</p>
        <p className="border-b-2 pt-4 pl-4">Spanish - basic</p>
        <span className="border-b-2 p-4"></span>
        <span className="border-b-2 p-4"></span>
        <p className="text-center font-bold bottom-0 uppercase pt-4">
          Proficiencies & Languages
        </p>
      </div>
    </div>
  );
};
export default Biography;
