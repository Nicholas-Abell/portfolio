"use client";
import React, { useState } from "react";
import profileTwo from "../../public/assets/images/profile.png";
import Image from "next/image";
import { Roboto, Indie_Flower } from "@next/font/google";
import { BsFillHeartFill } from "react-icons/bs";
import { BiSolidShield } from "react-icons/bi";
import {
  IoChevronBackCircleSharp,
  IoChevronForwardCircleSharp,
} from "react-icons/io5";

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
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-center gap-2 p-4 relative test min-h-[50vh]">
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

        <div
          className={`${sheetNumber === 1 ? "grid" : "hidden"}
        } border border-gray-400 grid-cols-2 justify-center gap-4 p-4 lg:grid`}
        >
          <BsFillHeartFill size={60} className="m-auto" />
          <BiSolidShield size={60} className="m-auto" />
          <div className="bg-white rounded-lg border-2 border-gray-400 py-12 flex flex-col justify-between items-center">
            <div className="w-[25%] bg-gray-600 p-2"></div>
            <p className="text-center font-bold uppercase py-4">
              TEMP HP
            </p>
          </div>
          <div className="bg-white rounded-lg border-2 border-gray-400 py-12">
            c
          </div>
          <div className="bg-white rounded-lg border-2 border-gray-400 py-12">
            c
          </div>
          <div className="bg-white rounded-lg border-2 border-gray-400 py-12">
            c
          </div>
          <div className="bg-gray-600 col-span-2">c</div>
          <div className="bg-gray-400 border-4 flex flex-col justify-between col-span-2">
            <div className="flex justify-center items-center w-full h-full">
              <p className="p-8">Nagotiable</p>
            </div>
            <p className="text-center font-bold bottom-0 uppercase py-4 border-t-2">
              CURRENCY
            </p>
          </div>
        </div>

        <div
          className={`${
            sheetNumber === 2 ? "grid" : "hidden"
          } lg:grid grid-cols-1 border border-gray-400  justify-center p-4`}
        >
          <div className="grid grid-cols-3 border-b-2">
            <div className="bg-red-800 p-4">b</div>
            <div className="bg-gray-300 col-span-2 p-4">b</div>
          </div>
          <div className="grid grid-cols-3 border-b-2">
            <div className="bg-red-800 p-4">b</div>
            <div className="bg-gray-300 col-span-2 p-4">b</div>
          </div>
          <div className="grid grid-cols-3 border-b-2">
            <div className="bg-red-800 p-4">b</div>
            <div className="bg-gray-300 col-span-2 p-4">b</div>
          </div>
          <div className="grid grid-cols-3 border-b-2">
            <div className="bg-red-800 p-4">b</div>
            <div className="bg-gray-300 col-span-2 p-4">b</div>
          </div>
          <div className="grid grid-cols-3 border-b-2">
            <div className="bg-red-800 p-4">b</div>
            <div className="bg-gray-300 col-span-2 p-4">b</div>
          </div>
          <div className="grid grid-cols-3">
            <div className="bg-red-800 p-4">b</div>
            <div className="bg-gray-300 col-span-2 p-4">b</div>
          </div>
        </div>

        <div
          className={`${
            sheetNumber === 3 ? "grid" : "hidden"
          } lg:grid border border-gray-400 p-2 rounded-lg`}
        >
          <div className="bg-gray-400 border-4 flex flex-col justify-between">
            <div className="flex justify-center items-center w-full h-full">
              <p className="px-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                culpa tempore an asdfasd fsdf asdf sadf hfghpfpgiojear
                sdcxzp'cogjvar twseiofjs
              </p>
            </div>
            <p className="text-center font-bold uppercase py-4 border-t-2">
              BIO
            </p>
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
      </div>
    </div>
  );
};

export default About;
