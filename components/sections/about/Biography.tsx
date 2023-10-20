import React from "react";

type BiographyProps = {
  sheetNumber: number;
};

const Biography: React.FC<BiographyProps> = ({ sheetNumber }) => {
  return (
    <aside
      className={`${
        sheetNumber === 1 ? "grid" : "hidden"
      } min-h-[50vh] md:min-h-0 lg:grid border border-gray-400 p-2 bg-gray-200 rounded-lg gap-4 lg:hover:scale-105 lg:hover:shadow-lg shadow-black ease-in duration-300`}
    >
      <div className="bg-white grid grid-cols-1 border-2 border-gray-400 col-span-2 rounded-lg">
        <p className="w-full border-black border-b text-center">
          A software developer looking to
        </p>
        <p className="w-full border-black border-b px-2 text-center">
          expand his resume. I make mobile
        </p>
        <p className="w-full border-black border-b px-2 text-center">
          responsive websites primarily using
        </p>
        <p className="w-full border-black border-b px-2 text-center">
          NextJs and tailwind css, but
        </p>
        <p className="w-full border-black border-b px-2 text-center">
          am always excited to learn new
        </p>
        <p className="w-full border-black border-b px-2 text-center">
          frameworks or tech stacks.
        </p>
        <p className="text-center font-bold uppercase border-t-2">bio</p>
      </div>
      <div className="bg-white grid grid-cols-1 grid-rows-6 border-2 border-gray-400 col-span-2 rounded-lg">
        <div className="w-full border-black border-b"></div>
        <div className="w-full border-black border-b"></div>
        <p className="w-full border-black border-b text-center">
          English - Fluent
        </p>
        {/* <p className="w-full border-black border-b text-center">
          Spanish - Basic
        </p> */}
        <div className="w-full border-black border-b"></div>
        <p className="text-center font-bold uppercase border-t-2">Languages</p>
      </div>
      <div className="bg-white grid grid-cols-1 grid-rows-6 border-2 border-gray-400 col-span-2 rounded-lg gap-2 text-xs">
        <div className="grid grid-cols-4 px-4 text-gray-400 gap-4">
          <p className=" col-span-2 text-xs">NAME</p>
          <p className=" col-span-1 text-xs">ATK BONUS</p>
          <p className=" col-span-1 text-xs">DMG/TYPE</p>
        </div>
        <div className="grid grid-cols-4 px-4 text-gray-400 gap-4">
          <div className="col-span-2 bg-gray-200 rounded-tl-lg rounded-br-lg text-center">
            <p>CyberPowerPC</p>
          </div>
          <div className="col-span-1 bg-gray-200 rounded-tl-lg rounded-br-lg text-center">
            <p>+0</p>
          </div>
          <div className="col-span-1 bg-gray-200 rounded-tl-lg rounded-br-lg text-center">
            <p>Desktop</p>
          </div>
        </div>
        <div className="grid grid-cols-4 px-4 text-gray-400 gap-4">
          <div className="col-span-2 bg-gray-200 rounded-tl-lg rounded-br-lg text-center">
            <p>Dell G7 15</p>
          </div>
          <div className="col-span-1 bg-gray-200 rounded-tl-lg rounded-br-lg text-center">
            <p>+0</p>
          </div>
          <div className="col-span-1 bg-gray-200 rounded-tl-lg rounded-br-lg text-center">
            <p>Laptop</p>
          </div>
        </div>
        <div className="grid grid-cols-4 px-4 text-gray-400 gap-4">
          <div className="col-span-2 bg-gray-200 rounded-tl-lg rounded-br-lg text-center"></div>
          <div className="col-span-1 bg-gray-200 rounded-tl-lg rounded-br-lg text-center"></div>
          <div className="col-span-1 bg-gray-200 rounded-tl-lg rounded-br-lg text-center"></div>
        </div>
        <div className="w-full border-black border-b"></div>
        <p className="text-center font-bold uppercase">EQUIPMENT</p>
      </div>
    </aside>
  );
};
export default Biography;
