import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { CgWebsite } from "react-icons/cg";
import { FaSquarespace, FaUnity, FaGithub, FaReact } from "react-icons/fa";
import { TbAmpersand } from "react-icons/tb";
import { SiTailwindcss, SiFirebase, SiReact } from "react-icons/si";

import everdell from "../../../public/assets/images/everdell_1.jpg";
import reddit from "../../../public/assets/images/reddit_emblem.png";
import thistlethorns from "../../../public/assets/images/Thistle&Thorns.png";
import movieDatabase from "../../../public/assets/images/movie_database.png";
import wordle from "../../../public/assets/images/wordle_clone.jpeg";

type ProjectProps = {};

export const MovieDatabase: React.FC<ProjectProps> = () => {
  return (
    <div className="bg-yellow-800 h-full max-w-[620px] mx-auto flex flex-col justify-between items-center gap-4 py-8 relative overflow-hidden text-white font-bold rounded-xl">
      <div className="absolute bg-orange-400 p-4 md:p-8 h-80 rotate-45 -top-24 left-8 text-center" />
      <p className="absolute top-2 left-3 text-orange-400 text-2xl">P1</p>
      <h2 className="font-bold">Movie Database</h2>
      <p className="text-orange-400 text-xl font-bold">Movie Database</p>
      <div className="flex justify-center items-center gap-2">
        <Link
          href="https://github.com/Nicholas-Abell/movie_database"
          className="flex justify-center items-center gap-2 p-2 shadow-gray-400 rounded-xl uppercase bg-white text-black neon"
        >
          <FaGithub size={25} className="w-full h-full" />
          <h3>Github</h3>
        </Link>
        <Link
          href="https://movie-database-4bf43.web.app/"
          className="flex justify-center items-center gap-2 p-2 shadow-gray-400 rounded-xl uppercase bg-white text-black neon"
        >
          <CgWebsite size={25} className="w-full h-full" />
          <h3>Live</h3>
        </Link>
      </div>
      <div className="bg-gray-200 border-black rounded-lg w-[80%] h-64 relative object-cover">
        <Image src={movieDatabase} alt="thistle&Thorns" fill />
      </div>
      <div className="w-[75%] text-left">
        <p className="text-sm">
          Curious about new and upcoming movies? Looking for a classic and
          wonder which streaming service to watch it on? This solves these
          issues in a single website. Inspired by Netflix's design this site
          uses the IMDB database api for up to date movie information and the
          Youtube api for trailers.
        </p>
      </div>
      <div className="w-full flex justify-between px-12 pt-8">
        <SiTailwindcss size={50} />
        <FaReact size={50} />
        <SiFirebase size={50} />
      </div>
    </div>
  );
};

export const Everdell: React.FC<ProjectProps> = () => {
  return (
    <div className="bg-gradient-to-b from-teal-500 to-black via-black to-100% h-full w-full max-w-[620px] mx-auto flex flex-col justify-between items-center gap-4 py-8 relative overflow-hidden text-white font-bold rounded-xl">
      <div className="absolute bg-yellow-600 top-0 left-0 py-1 px-8 w-full text-black flex justify-between">
        <p>P4</p> <p>C#</p>
        <p>UNITY</p>
      </div>
      <h2 className="pt-4">Everdell</h2>
      <h3>Point Calculator</h3>
      <div className="flex justify-center items-center gap-2">
        <div className="flex justify-center items-center gap-2 p-2 shadow-gray-400 rounded-xl uppercase bg-red-800 text-black cursor-default">
          <CgWebsite size={25} className="w-full h-full" />
          <h3>Live</h3>
        </div>
        <Link
          href="https://github.com/Nicholas-Abell/Everdell-Point-Tracker"
          className="flex justify-center items-center gap-2 p-2 shadow-gray-400 rounded-xl uppercase bg-white text-black neon"
        >
          <FaGithub size={25} className="w-full h-full" />
          <h3>Github</h3>
        </Link>
      </div>
      <div className="bg-gray-200 border-black rounded-lg w-[80%] h-64 relative object-cover">
        <Image src={everdell} alt="thistle&Thorns" fill />
      </div>
      <div className="w-[75%] text-left pb-12">
        <p>
          Welcome to the Everdell Point Tracker, a companion app designed to
          enhance your gaming experience of the popular board game Everdell.
        </p>
        <p className="text-red-800">
          Note: not currently live due to recent issues with Unity change in
          terms of service
        </p>
      </div>
      <div className="w-full grid grid-cols-3 justify-center items-center">
        <div className="border border-white " />
        <FaUnity size={50} className="mx-auto" />
        <div className="border border-white " />
      </div>
    </div>
  );
};

export const Reddit: React.FC<ProjectProps> = () => {
  return (
    <div className="bg-blue-400 h-full max-w-[620px] mx-auto flex flex-col justify-between items-center gap-4 py-8 relative overflow-hidden text-white font-bold rounded-xl">
      <div className="absolute bg-yellow-400 p-4 md:p-8 h-80 rotate-45 -top-24 left-8 text-center" />
      <p className="absolute top-2 left-3 text-yellow-400 text-2xl">P3</p>
      <h2 className="font-bold">Reddit</h2>
      <p className="text-yellow-400 text-3xl font-bold">Clone</p>
      <div className="flex justify-center items-center gap-2">
        <Link
          href="https://reddit-clone-4fg5-git-main-nicholas-abell.vercel.app/"
          className="flex justify-center items-center gap-2 p-2 shadow-gray-400 rounded-xl uppercase bg-white text-black neon"
        >
          <FaGithub size={25} className="w-full h-full" />
          <h3>Github</h3>
        </Link>
        <Link
          href="https://github.com/Nicholas-Abell/reddit_clone"
          className="flex justify-center items-center gap-2 p-2 shadow-gray-400 rounded-xl uppercase bg-white text-black neon"
        >
          <CgWebsite size={25} className="w-full h-full" />
          <h3>Live</h3>
        </Link>
      </div>
      <div className="bg-gray-200 border-black rounded-lg w-[80%] h-64 relative object-cover">
        <Image src={reddit} alt="thistle&Thorns" fill />
      </div>
      <div className="w-[75%] text-left">
        <p>
          A clone of the populer app Reddit. Made in React using TypeScript,
          styled with Tailwind CSS and Chakra UI.
          <br />
          Create Communities
          <br />
          Create Posts
        </p>
      </div>
      <div className="w-full flex justify-between px-12 mt-auto">
        <SiTailwindcss size={50} />
        <SiReact size={50} />
        <SiFirebase size={50} />
      </div>
    </div>
  );
};

export const ThistleandThorns: React.FC<ProjectProps> = () => {
  return (
    <div className="bg-red-400 h-full w-full max-w-[620px] mx-auto flex flex-col justify-between items-center gap-4 py-8 relative overflow-hidden text-white font-bold rounded-xl">
      <div className="absolute bg-blue-600 top-0 left-0 py-1 px-8 w-full text-white flex justify-between">
        <p>P2</p> <p>Squarespace</p>
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
      <div className="bg-gray-200 border-black rounded-lg w-[80%] h-64 relative object-cover">
        <Image src={thistlethorns} alt="thistle&Thorns" fill />
      </div>
      <div className="w-[75%] text-left pb-12">
        <p>
          A website that I desinged and built for a client. They approached me
          after having difficulty with thier chosen cms. I had never worked with
          Squarespace prior to this.
        </p>
      </div>
      <div className="w-full grid grid-cols-3 justify-center items-center">
        <div className="border border-white " />
        <FaSquarespace size={50} className="mx-auto" />
        <div className="border border-white " />
      </div>
    </div>
  );
};

export const Wordle: React.FC<ProjectProps> = () => {
  return (
    <div className="bg-gradient-to-b from-black via-amber-950 to-red-800 to-100% h-full w-full max-w-[620px] mx-auto flex flex-col justify-between items-center gap-4 py-8 relative overflow-hidden text-white font-bold rounded-xl">
      <div className="absolute bg-yellow-600 top-0 left-0 py-1 px-8 w-full text-black flex justify-between">
        <p>P5</p>
        <p>JS</p>
        <p>React</p>
      </div>
      <h2 className="pt-4">Wordle</h2>
      <h3>clone</h3>
      <div className="flex justify-center items-center gap-2">
        <Link
          href="https://nicholas-abell.github.io/wordle_clone/"
          className="flex justify-center items-center gap-2 p-2 shadow-gray-400 rounded-xl uppercase bg-white text-black neon"
        >
          <CgWebsite size={25} className="w-full h-full" />
          <h3>Live</h3>
        </Link>
        <Link
          href="https://github.com/Nicholas-Abell/wordle_clone"
          className="flex justify-center items-center gap-2 p-2 shadow-gray-400 rounded-xl uppercase bg-white text-black neon"
        >
          <FaGithub size={25} className="w-full h-full" />
          <h3>Github</h3>
        </Link>
      </div>
      <div className="bg-gray-200 border-black rounded-lg w-[80%] h-64 relative object-cover">
        <Image src={wordle} alt="thistle&Thorns" fill />
      </div>
      <div className="w-[75%] text-left pb-12">
        A clone of the popular game wordle.
        <br />
        Guess a five letter word.
        <br />
        Red: incorrect letter
        <br />
        Yellow: correct letter wrong space
        <br />
        Green: correct letter and space
      </div>
      <div className="w-full grid grid-cols-3 justify-center items-center">
        <div className="border border-white " />
        <SiReact size={50} className="mx-auto" />
        <div className="border border-white " />
      </div>
    </div>
  );
};
