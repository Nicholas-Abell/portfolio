"use client";
import React, { useState } from "react";
import profileTwo from "../../../public/assets/images/profile.png";
import Image from "next/image";
import { Roboto, Indie_Flower } from "@next/font/google";
import {
  IoChevronBackCircleSharp,
  IoChevronForwardCircleSharp,
} from "react-icons/io5";
import AbilityScores from "./AbilityScores";
import Biography from "./Biography";
import TempStats from "./TempStats";

const indie_flower = Indie_Flower({
  subsets: ["latin"],
  weight: "400",
});

const About = () => {
  const [sheetNumber, setSheetNumber] = useState(1);

  const handleSheetNumber = (x: number) => {
    if (x + sheetNumber > 3) setSheetNumber(1);
    else if (x + sheetNumber < 1) setSheetNumber(3);
    else setSheetNumber((sheetNumber) => sheetNumber + x);
  };

  return (
    <div id="about" className="w-full px-2 py-10">
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-center items-center w-full px-4 lg:px-24 pb-4">
        <Image
          src={profileTwo}
          alt="profile"
          className="rounded-full border-gray-700 border-8 p-1"
          height={200}
          width={200}
        />
        <div className="grid grid-cols-1 w-full gap-4">
          <div className="text-center grid grid-cols-3">
            <div>
              <p className={indie_flower.className}>Nicholas Abell</p>
            </div>
            <div>
              <p className={indie_flower.className}>Software Developer</p>
            </div>
            <div>
              <p className={indie_flower.className}>Self Taught</p>
            </div>
            <div className=" col-span-3 border-b-2 border-gray-400"></div>
            <div>
              <p>NAME</p>
            </div>
            <div>
              <p>CLASS</p>
            </div>
            <div>
              <p>BACKGROUND</p>
            </div>
          </div>
          <div className="text-center grid grid-cols-3">
            <div>
              <p className={indie_flower.className}>Human</p>
            </div>
            <div>
              <p className={indie_flower.className}>Chaotic-Good</p>
            </div>
            <div>
              <p className={indie_flower.className}>2 years</p>
            </div>
            <div className=" col-span-3 border-b-2 border-gray-400"></div>
            <div>
              <p>RACE</p>
            </div>
            <div>
              <p>ALIGNMENT</p>
            </div>
            <div>
              <p>EXPERIENCE</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 justify-center gap-2 p-4 relative bg-white">
        <div className="lg:hidden absolute w-full flex justify-between top-[50%]">
          <IoChevronBackCircleSharp
            size={60}
            onClick={() => handleSheetNumber(-1)}
            className="cursor-pointer opacity-25 hover:opacity-100 hover:scale-110 transition-opacity ease-in duration-200"
          />
          <IoChevronForwardCircleSharp
            size={60}
            onClick={() => handleSheetNumber(1)}
            className="cursor-pointer opacity-25 hover:opacity-100 hover:scale-110 transition-opacity ease-in duration-200"
          />
        </div>
        <AbilityScores sheetNumber={sheetNumber} />
        <TempStats sheetNumber={sheetNumber} />
        <Biography sheetNumber={sheetNumber} />
      </div>
    </div>
  );
};

export default About;
