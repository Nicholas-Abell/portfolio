import React from "react";
import Image from "next/image";
import Project from "./Project";
import Link from "next/link";

//images
import movieDatabase from "../../../public/assets/images/movie_database.png";
import smsConstruction from "../../../public/assets/images/sms_construction.png";
import wordleClone from "../../../public/assets/images/wordle_clone.jpeg";
import everdell from "../../../public/assets/images/everdell_1.jpg";
import reddit from "../../../public/assets/images/reddit_emblem.png";
import thistlethorns from "../../../public/assets/images/Thistle&Thorns.png";

//icons
import { FaReact, FaSquarespace } from "react-icons/fa";
import { GiSevenPointedStar } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";
import { TbAmpersand } from "react-icons/tb";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full h-auto text-center grid grid-cols-1 grid-rows-1 lg:grid-cols-2 xl:grid-cols-3 xl:px-12 gap-4 justify-center items-center mt-24 p-4 overflow-hidden"
    >
      <div className="bg-blue-400 h-full w-full flex flex-col justify-center items-center gap-4 py-8 relative overflow-hidden text-white font-bold rounded-xl">
        <div className="absolute bg-yellow-400 p-4 md:p-8 h-80 rotate-45 -top-24 left-8 text-center" />
        <p className="absolute top-0 left-0 text-yellow-400 text-2xl">P1</p>
        <h2 className="font-bold">Project 1</h2>
        <p className="text-yellow-400 text-3xl font-bold">Reddit Clone</p>
        <div className="flex justify-center items-center ">
          <Link
            href="https://www.thistleandthornsllc.com/"
            className="flex justify-center items-center gap-2 p-2 shadow-gray-400 rounded-xl uppercase bg-white text-black neon"
          >
            <CgWebsite size={25} className="w-full h-full" />
            <h3>Live</h3>
          </Link>
        </div>
        <Image
          src={reddit}
          alt="Reddit Clone"
          className="bg-gray-200 border-black rounded-lg w-[80%] h-64"
        />
        <div className="w-[75%] text-left">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi,
            numquam ipsum mollitia dolorum, minus tenetur suscipit iure magnam
            dignissimos dolor quasi neque laudantium molestiae similique omnis,
            voluptatum quas natus est? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit.
            <br /> Repellendus, corrupti soluta similique ullam vitae omnis vel
            libero ratione commodi ad doloribus iste, aperiam qui? In illo
            mollitia harum voluptas aspernatur.
          </p>
        </div>
        <div className="w-full flex justify-between px-12">
          <FaSquarespace size={50} />
          <FaSquarespace size={50} />
          <FaSquarespace size={50} />
        </div>
      </div>

      <div className="bg-red-400 h-full w-full flex flex-col justify-center items-center gap-4 py-8 relative overflow-hidden text-white font-bold rounded-xl">
        <div className="absolute bg-blue-600 top-0 left-0 py-1 px-8 w-full text-white flex justify-between">
          <p>P2</p> <p>sdfasf</p>
          <p>00012</p>
        </div>
        <div className="flex justify-center items-center -ml-8">
          <TbAmpersand size={80} />
          <div className="flex flex-col">
            <h2 className="-ml-8">Thistle</h2>
            <h2>Thorns</h2>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <Link
            href="https://www.thistleandthornsllc.com/"
            className="flex justify-center items-center gap-2 p-2 shadow-gray-400 rounded-xl uppercase bg-white text-black neon"
          >
            <CgWebsite size={25} className="w-full h-full" />
            <h3>Live</h3>
          </Link>
        </div>
        <Image
          src={thistlethorns}
          alt="thistle&Thorns"
          className="bg-gray-200 border-black rounded-lg w-[80%] h-64"
        />
        <div className="w-[75%] text-left pb-12">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi,
            numquam ipsum mollitia dolorum, minus tenetur suscipit iure magnam
            dignissimos dolor quasi neque laudantium molestiae similique omnis,
            voluptatum quas natus est? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit.
          </p>
        </div>
        <div className="w-full flex justify-center items-center relative border border-1 border-white h-0">
          <FaSquarespace size={80} className="bg-red-400 p-4" />
        </div>
      </div>

      <div className="bg-red-400 h-full w-full flex flex-col justify-center items-center gap-4 py-8 relative overflow-hidden text-white font-bold rounded-xl">
        <div className="absolute bg-blue-600 top-0 left-0 py-1 px-8 w-full text-white flex justify-between">
          <p>P2</p> <p>sdfasf</p>
          <p>00012</p>
        </div>
        <div className="flex justify-center items-center -ml-8">
          <TbAmpersand size={80} />
          <div className="flex flex-col">
            <h2 className="-ml-8">Thistle</h2>
            <h2>Thorns</h2>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <Link
            href="https://www.thistleandthornsllc.com/"
            className="flex justify-center items-center gap-2 p-2 shadow-gray-400 rounded-xl uppercase bg-white text-black neon"
          >
            <CgWebsite size={25} className="w-full h-full" />
            <h3>Live</h3>
          </Link>
        </div>
        <Image
          src={thistlethorns}
          alt="thistle&Thorns"
          className="bg-gray-200 border-black rounded-lg w-[80%] h-64"
        />
        <div className="w-[75%] text-left pb-12">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi,
            numquam ipsum mollitia dolorum, minus tenetur suscipit iure magnam
            dignissimos dolor quasi neque laudantium molestiae similique omnis,
            voluptatum quas natus est? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit.
          </p>
        </div>
        <div className="w-full flex justify-center items-center relative border border-1 border-white h-0">
          <FaSquarespace size={80} className="bg-red-400 p-4" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
