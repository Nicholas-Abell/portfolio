import React from "react";
import profileTwo from "../../public/assets/images/profile.png";
import Image from "next/image";
import { Roboto, Indie_Flower } from "@next/font/google";
import { BsFillHeartFill } from "react-icons/bs";
import { BiSolidShield } from "react-icons/bi";

const indie_flower = Indie_Flower({
  subsets: ["latin"],
  weight: "400",
});

const About = () => {
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
              <p className={indie_flower.className}>Software Developer</p>
            </div>
            <div>
              <p className={indie_flower.className}>Self Taught</p>
            </div>
            <div>
              <p className={indie_flower.className}>Nicholas Abell</p>
            </div>
            <div className=" col-span-3 border-b-2 border-gray-400"></div>
            <div>
              <p>CLASS</p>
            </div>
            <div>
              <p>BACKGROUND</p>
            </div>
            <div>
              <p>NAME</p>
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
      <div className="grid grid-cols-3 justify-center gap-2 p-4">
        <div className="border border-gray-400 grid grid-cols-2 justify-center gap-4 p-4">
          <BsFillHeartFill size={50} className="m-auto" />
          <BiSolidShield size={60} className="m-auto" />
          <div className="bg-gray-600 py-12">c</div>
          <div className="bg-gray-600 py-12">c</div>
          <div className="bg-gray-600 py-12">c</div>
          <div className="bg-gray-600 py-12">c</div>
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

        <div className="border border-gray-400 grid grid-cols-1 justify-center p-4">
          <div className="grid grid-cols-3 border-b-2">
            <div className="bg-red-800 p-4"></div>
            <div className="bg-gray-300 col-span-2 p-4"></div>
          </div>
          <div className="grid grid-cols-3 border-b-2">
            <div className="bg-red-800 p-4"></div>
            <div className="bg-gray-300 col-span-2 p-4"></div>
          </div>
          <div className="grid grid-cols-3 border-b-2">
            <div className="bg-red-800 p-4"></div>
            <div className="bg-gray-300 col-span-2 p-4"></div>
          </div>
          <div className="grid grid-cols-3 border-b-2">
            <div className="bg-red-800 p-4"></div>
            <div className="bg-gray-300 col-span-2 p-4"></div>
          </div>
          <div className="grid grid-cols-3 border-b-2">
            <div className="bg-red-800 p-4"></div>
            <div className="bg-gray-300 col-span-2 p-4"></div>
          </div>
          <div className="grid grid-cols-3">
            <div className="bg-red-800 p-4"></div>
            <div className="bg-gray-300 col-span-2 p-4"></div>
          </div>
        </div>

        <div className="border border-gray-400 grid p-2 rounded-lg">
          <div className="bg-gray-400 border-4 flex flex-col justify-between">
            <div className="flex justify-center items-center w-full h-full">
              <p className="pl-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                culpa tempore an asdfasd fsdf asdf sadf hfghpfpgiojear
                sdcxzp'cogjvar twseiofjs
              </p>
            </div>
            <p className="text-center font-bold bottom-0 uppercase py-4 border-t-2">
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
