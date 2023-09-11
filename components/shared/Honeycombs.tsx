import React from "react";
import { MdOutlineHexagon } from "react-icons/md";
import { IconType } from "react-icons";

type HoneyCombProps = {
  Icon1: IconType;
  Icon2: IconType;
  Icon3: IconType;
  size?: number;
  color?: string;
};

export const HoneyCombLine: React.FC<HoneyCombProps> = ({
  Icon1,
  Icon2,
  Icon3,
  size,
  color,
}) => {
  return (
    <div className="flex flex-col justify-center scale-50 lg:scale-75 w-full">
      <div className="flex justify-center gap-16 items-center ">
        <div className="flex justify-center items-center p-0 m-0">
          <MdOutlineHexagon className={`z-0 ${color}`} size={200} />
          <Icon1 className="z-1 absolute" size={size || 80} />
        </div>
        <div className="flex justify-center items-center">
          <MdOutlineHexagon className={`z-0 ${color}`} size={200} />
          <Icon2 className="z-1 absolute" size={size || 80} />
        </div>
        <div className="flex justify-center items-center">
          <MdOutlineHexagon className={`z-0 ${color}`} size={200} />
          <Icon3 className="z-1 absolute" size={size || 80} />
        </div>
      </div>
      <div className="flex justify-center gap-16 items-center mt-[-7.5rem]">
        <div className="flex justify-center items-center p-0 m-0">
          <MdOutlineHexagon className={`z-0 ${color}`} size={200} />
          <Icon1 className="z-1 absolute" size={size || 80} />
        </div>
        <div className="flex justify-center items-center">
          <MdOutlineHexagon className={`z-0 ${color}`} size={200} />
          <Icon2 className="z-1 absolute" size={size || 80} />
        </div>
      </div>
    </div>
  );
};

export const HoneyCombThreeLarge_A: React.FC<HoneyCombProps> = ({
  Icon1,
  Icon2,
  Icon3,
  size,
  color,
}) => {
  return (
    <div className="flex realative">
      <div className="flex justify-center items-center">
        <MdOutlineHexagon className={`z-0 ${color}`} size={200} />
        <Icon1 className="z-1 absolute" size={size || 80} />
      </div>
      <div className="flex justify-center items-center absolute translate-y-40">
        <MdOutlineHexagon className={`z-0 ${color}`} size={200} />
        <Icon2 className="z-1 absolute" size={size || 80} />
      </div>
      <div className="flex justify-center items-center absolute translate-y-[5rem] translate-x-[8.5rem]">
        <MdOutlineHexagon className={`z-0 ${color}`} size={200} />
        <Icon3 className="z-1 absolute" size={size || 80} />
      </div>
    </div>
  );
};

export const HoneyCombThreeSmall_A: React.FC<HoneyCombProps> = ({
  Icon1,
  Icon2,
  Icon3,
  size,
}) => {
  return (
    <div className="hidden sm:block relative test2 w-48 h-48 pl-2">
      <div className="flex">
        <div className="flex justify-center items-center">
          <MdOutlineHexagon className="z-0 bg-honeycomb" size={100} />
          <Icon1 className="z-1 absolute" size={size || 40} />
        </div>
        <div className="flex justify-center items-center absolute translate-y-20">
          <MdOutlineHexagon className="z-0 text-yellow-600" size={100} />
          <Icon2 className="z-1 absolute" size={size || 40} />
        </div>
        <div className="flex justify-center items-center absolute translate-y-10 translate-x-[4.3rem]">
          <MdOutlineHexagon className="z-0 text-yellow-600" size={100} />
          <Icon3 className="z-1 absolute" size={size || 40} />
        </div>
      </div>
    </div>
  );
};

export const HoneyCombThreeLarge_B: React.FC<HoneyCombProps> = ({
  Icon1,
  Icon2,
  Icon3,
  size,
}) => {
  return (
    <div className="flex realative pl-8">
      <div className="flex justify-center items-center">
        <MdOutlineHexagon className="z-0 text-honeycomb" size={200} />
        <Icon1 className="z-1 absolute" size={size || 80} />
      </div>
      <div className="flex justify-center items-center absolute translate-x-[-8.5rem] translate-y-[5rem]">
        <MdOutlineHexagon className="z-0 text-yellow-600" size={200} />
        <Icon2 className="z-1 absolute" size={size || 80} />
      </div>
      <div className="flex justify-center items-center absolute translate-x-[8.5rem] translate-y-[5rem]">
        <MdOutlineHexagon className="z-0 text-yellow-600" size={200} />
        <Icon3 className="z-1 absolute" size={size || 80} />
      </div>
    </div>
  );
};

export const HoneyCombThreeSmall_B: React.FC<HoneyCombProps> = ({
  Icon1,
  Icon2,
  Icon3,
  size,
}) => {
  return (
    <div className="flex realative">
      <div className="flex justify-center items-center">
        <MdOutlineHexagon className="z-0 text-yellow-600" size={100} />
        <Icon1 className="z-1 absolute" size={size || 40} />
      </div>
      <div className="flex justify-center items-center absolute translate-x-[-4.3rem] translate-y-10">
        <MdOutlineHexagon className="z-0 text-yellow-600" size={100} />
        <Icon2 className="z-1 absolute" size={size || 40} />
      </div>
      <div className="flex justify-center items-center absolute translate-x-[4.3rem] translate-y-10">
        <MdOutlineHexagon className="z-0 text-yellow-600" size={100} />
        <Icon3 className="z-1 absolute" size={size || 40} />
      </div>
    </div>
  );
};
