"use client";
import React from "react";
import IconPalette from "../IconPalette";
import { SiReact, SiTailwindcss, SiFirebase } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Main = () => {
  return (
    <div
      id="home"
      className="w-full h-screen text-center flex justify-center items-center"
    >
      <div className="relative max-w-[1240px] w-full h-full p-2 flex justify-center items-center">
        <div>
          <div
            className="flex justify-center items-center gap-2
           text-gray-700"
          >
            <SiReact size={25} />
            <TbBrandNextjs size={25} />
            <SiTailwindcss size={25} />
            <SiFirebase size={25} />
          </div>
          <p className="uppercase text-sm tracking-widest pb-4 text-gray-600">
            Let me Improve your Company
          </p>
          <h1 className="dark:text-white text-gray-700">
            I'm
            <span className="text-red-800 dark:text-red-600 px-4">
              Nicholas Abell
            </span>
          </h1>
          <p className="py-4 dark:text-gray-300 text-gray-600 max-w-[70%] m-auto">
            A front end developer looking to make a difference on your next
            project.
          </p>
          <IconPalette />
        </div>
      </div>
    </div>
  );
};

export default Main;
