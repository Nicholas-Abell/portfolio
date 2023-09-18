"use client";
import Image from "next/image";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFirebase } from "react-icons/si";
import MovieDatabaseImg from "../../public/assets/images/movie_database.png";
import Skill from "../../components/sections/skills/Skill_Icon";
import Link from "next/link";

export default function MovieDatabase() {
  return (
    <div className="w-full overflow-hidden pt-20">
      <div className="w-screen h-[50vh] lg:h-[60vh] relative text-gray-300">
        <div className="absolute top-0 left-0 w-full h-[50vh] lg:h-[60vh] z-10 from-black bg-gradient-to-r" />
        <Image
          src={MovieDatabaseImg}
          className="absolute z-1 object-left-top"
          fill
          style={{ objectFit: "cover" }}
          alt="/Movie Database"
        />
        <div className="absolute text-white dark:text-gray-300 pl-8 z-40 top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h2 className="py-2">Movie Database</h2>
          <h3>React Js | Tailwind | Firebase</h3>
        </div>
      </div>
      <div className="mx-auto max-w-[1240px] grid md:grid-cols-5 gap-8 p-8 dark:text-gray-300">
        <div className="col-span-4">
          <p className="text-xl tracking-widest uppercase text-red-800 dark:text-red-500">
            Project
          </p>
          <h2 className="dark:text-gray-400">Overview</h2>
          <p className="py-8 dark:text-gray-300">
            Curious about new and upcoming movies? Looking for a classic and
            wonder which streaming service to watch it on? This solves these
            issues in a single website. Inspired by Netflix's design this site
            uses the IMDB database api for up to date movie information and the
            Youtube api for trailers.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://movie-database-4bf43.web.app/"
              className="flex justify-center items-center gap-2 p-2 shadow-gray-400 rounded-xl uppercase neon"
            >
              <CgWebsite size={25} className="w-full h-full" />
              <h3>Live</h3>
            </Link>
            <Link
              href="https://github.com/Nicholas-Abell/movie_database"
              className="flex justify-center items-center gap-2 p-2 shadow-gray-400 rounded-xl uppercase neon"
            >
              <AiFillGithub size={25} className="w-full h-full" />
              <h3>GITHUB</h3>
            </Link>
          </div>
        </div>
        <div className="col-span-5 lg:col-span-1 shadow-xl shadow-gray-400 rounded-xl px-4 py-12 neon">
          <p className="mb-4 uppercase tracking-widest font-bold lg:tracking-normal text-red-800 dark:text-red-500 text-center">
            Technologies
          </p>
          <div className="grid grid-cols-3 lg:grid-cols-1 gap-4 text-black dark:text-gray-300">
            <Skill icon={<FaReact size={25} />} title="React" />
            <Skill icon={<SiTailwindcss size={25} />} title="Tailwind" />
            <Skill icon={<SiFirebase size={25} />} title="Firebase" />
          </div>
        </div>
      </div>
    </div>
  );
}
