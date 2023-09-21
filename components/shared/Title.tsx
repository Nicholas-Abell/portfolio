import React from "react";
import { FaDiceD20 } from "react-icons/fa";

type TitleProps = {
  title: string;
};

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <div className="w-full grid grid-cols-3 justify-center items-center px-4 py-24">
      <div className="border border-redwine " />
      <div className="flex justify-center items-center gap-8 px-2">
        <FaDiceD20 size={20} />
        <h2 className="text-center uppercase font-bold tracking-widest text-reddnd text-2xl md:text-4xl">
          {title}
        </h2>
        <FaDiceD20 size={20} />
      </div>
      <div className="border border-redwine " />
    </div>
  );
};
export default Title;
