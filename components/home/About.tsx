"use client";
import React, { useState } from "react";
import profileTwo from "../../public/assets/images/profile.png";
import Image from "next/image";
import { Roboto, Indie_Flower } from "@next/font/google";
import { BsFillHeartFill, BsFillDiamondFill } from "react-icons/bs";
import { BiSolidShield } from "react-icons/bi";
import { RxDotFilled, RxDot } from "react-icons/rx";
import {
  IoChevronBackCircleSharp,
  IoChevronForwardCircleSharp,
} from "react-icons/io5";
import { AiTwotoneCheckCircle } from "react-icons/ai";
import AbilityScores from "../about/AbilityScores";
import Biography from "../about/Biography";

const indie_flower = Indie_Flower({
  subsets: ["latin"],
  weight: "400",
});

const About = () => {
  const [sheetNumber, setSheetNumber] = useState(2);

  const handleSheetNumber = (x: number) => {
    if (x + sheetNumber > 3) setSheetNumber(1);
    else if (x + sheetNumber < 1) setSheetNumber(3);
    else setSheetNumber((sheetNumber) => sheetNumber + x);
  };

  return (
    <div id="about" className="w-full px-2 py-10">
      <div className="flex justify-center items-center w-full px-4 lg:px-24">
        <Image
          src={profileTwo}
          alt="profile"
          className=" rounded-full border-gray-700 border-8 p-1"
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
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-center gap-2 p-4 relative bg-white test">
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

        <AbilityScores sheetNumber={1} />

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
            <p className="text-center font-bold w-full uppercase">
              PROFICIENCY
            </p>
          </div>
          <div className="bg-white grid grid-cols-1 border-2 border-gray-400 col-span-2 rounded-lg">
            <div className="w-full border-black border-b py-3"></div>
            <div className="w-full border-black border-b py-3"></div>
            <p className="w-full border-black border-b text-center">
              Negotiable
            </p>
            <div className="w-full border-black border-b py-3"></div>
            <div className="w-full border-black border-b py-3"></div>
            <p className="text-center font-bold uppercase border-t-2">
              CURRENCY
            </p>
          </div>
        </div>

        <Biography sheetNumber={3} />
      </div>
    </div>
  );
};

export default About;
