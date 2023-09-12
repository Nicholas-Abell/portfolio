"use client";
import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaSass,
  FaSquarespace,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiFirebase,
  SiTypescript,
  SiMongodb,
  SiRedux,
  SiNodedotjs,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BsGit } from "react-icons/bs";
import Skill from "../shared/Skill";

const Skills = () => {
  const [skillsSelected, setSkillsSelected] = useState("front-end");

  return (
    <div className="w-full py-12 px-2">
      <div className="bg-gray-200 flex">
        {skillsSelected === "front-end" && (
          <div className="grid grid-cols-3 w-full gap-12 bg-gray-200 p-4">
            <Skill
              title="Git"
              icon={<BsGit size={50} className="text-orange-600" />}
            />
            <div></div>
            <Skill
              title="Git"
              icon={<BsGit size={50} className="text-orange-600" />}
            />
            <div></div>
            <Skill
              title="Git"
              icon={<BsGit size={50} className="text-orange-600" />}
            />
            <Skill
              title="Git"
              icon={<BsGit size={50} className="text-orange-600" />}
            />
            <Skill
              title="Git"
              icon={<BsGit size={50} className="text-orange-600" />}
            />
            <Skill
              title="Git"
              icon={<BsGit size={50} className="text-orange-600" />}
            />
            <div></div>
            <Skill
              title="Git"
              icon={<BsGit size={50} className="text-orange-600" />}
            />
            <Skill
              title="Git"
              icon={<BsGit size={50} className="text-orange-600" />}
            />
            <Skill
              title="Git"
              icon={<BsGit size={50} className="text-orange-600" />}
            />
          </div>
        )}

        {skillsSelected === "back-end" && (
          <div className="grid grid-cols-3 w-full gap-12 bg-gray-200 p-4">
            <Skill
              title="Git"
              icon={<BsGit size={50} className="text-orange-600" />}
            />
            <div></div>
            <Skill
              title="Git"
              icon={<BsGit size={50} className="text-orange-600" />}
            />
            <div></div>
            <Skill
              title="Git"
              icon={<BsGit size={50} className="text-orange-600" />}
            />
            <Skill
              title="Git"
              icon={<BsGit size={50} className="text-orange-600" />}
            />
            <Skill
              title="Git"
              icon={<BsGit size={50} className="text-orange-600" />}
            />
            <Skill
              title="Git"
              icon={<BsGit size={50} className="text-orange-600" />}
            />
            <div></div>
            <Skill
              title="Git"
              icon={<BsGit size={50} className="text-orange-600" />}
            />
            <div></div>
            <Skill
              title="Git"
              icon={<BsGit size={50} className="text-orange-600" />}
            />
          </div>
        )}

        {skillsSelected === "other" && (
          <div className="grid grid-cols-3 w-full gap-12 bg-gray-200 p-4">
            <Skill
              title="Git"
              icon={<BsGit size={50} className="text-orange-600" />}
            />
            <div></div>
            <Skill
              title="Git"
              icon={<BsGit size={50} className="text-orange-600" />}
            />
            <div></div>
            <Skill
              title="Git"
              icon={<BsGit size={50} className="text-orange-600" />}
            />
            <div></div>
            <Skill
              title="Git"
              icon={<BsGit size={50} className="text-orange-600" />}
            />
            <div></div>
            <div></div>
            <Skill
              title="Git"
              icon={<BsGit size={50} className="text-orange-600" />}
            />
            <div></div>
            <Skill
              title="Git"
              icon={<BsGit size={50} className="text-orange-600" />}
            />
          </div>
        )}

        <div className="w-[20%] grid gap-2">
          <div className="bg-gray-400 p-12 w-full text-center justify-center items-center border-4 border-blue-500 border-l-0 rounded-md">
            Software <br /> Dev
          </div>
          <button
            onClick={() => setSkillsSelected("front-end")}
            className={`${
              skillsSelected === "front-end" ? "bg-gray-200" : "bg-gray-400"
            } p-12 w-full text-center justify-center items-center border-4 border-blue-500 border-l-0 rounded-md`}
          >
            Frontend
          </button>
          <button
            onClick={() => setSkillsSelected("back-end")}
            className={`${
              skillsSelected === "back-end" ? "bg-gray-200" : "bg-gray-400"
            } p-12 w-full text-center justify-center items-center border-4 border-blue-500 border-l-0 rounded-md`}
          >
            Backend
          </button>
          <button
            onClick={() => setSkillsSelected("other")}
            className={`${
              skillsSelected === "other" ? "bg-gray-200" : "bg-gray-400"
            } p-12 w-full text-center justify-center items-center border-4 border-blue-500 border-l-0 rounded-md`}
          >
            Other
          </button>
        </div>
      </div>
      {/* <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p
          id="skills"
          className="text-xl tracking-widest uppercase text-red-800 dark:text-red-500"
        >
          Skills
        </p>
        <h2 className="text-black dark:text-gray-400">What I Can Do</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 my-12">
          <Skill
            title="Git"
            icon={<BsGit size={50} className="text-orange-600" />}
          />
        </div>
        <h2 className="underline underline-offset-2 pt-8 text-gray-400">
          Front End
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 mt-12">
          <Skill
            title="HTML"
            icon={<FaHtml5 size={50} className="text-[#E44D26]" />}
          />
          <Skill
            title="Javascript"
            icon={<SiJavascript size={50} className="text-yellow-500" />}
          />
          <Skill
            title="Typescript"
            icon={<SiTypescript size={50} className="text-blue-700" />}
          />
          <Skill
            title="CSS"
            icon={<FaCss3Alt size={50} className="text-blue-500" />}
          />
          <Skill
            title="SCSS"
            icon={<FaSass size={50} className="text-pink-400" />}
          />
          <Skill
            title="React Js"
            icon={<FaReact size={50} className="text-blue-400" />}
          />
          <Skill
            title="Tailwind CSS"
            icon={<SiTailwindcss size={50} className="text-[#0F7F7F]" />}
          />
          <Skill
            title="Bootstrap"
            icon={<FaBootstrap size={50} className="text-purple-600" />}
          />
          <Skill
            title="Redux"
            icon={<SiRedux size={50} className="text-purple-600" />}
          />
        </div>
        <h2 className="underline underline-offset-2 pt-8 text-gray-400">
          Back End
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 mt-12">
          <Skill
            title="Firebase"
            icon={<SiFirebase size={50} className="text-orange-600" />}
          />
          <Skill
            title="Mongo DB"
            icon={<SiMongodb size={50} className="text-green-600" />}
          />
          <Skill
            title="Node Js"
            icon={<SiNodedotjs size={50} className="text-green-600" />}
          />
        </div>
        <h2 className="underline underline-offset-2 pt-8 text-gray-400">
          Full
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 mt-12">
          <Skill
            title="Next Js"
            icon={<TbBrandNextjs size={50} className="dark:text-gray-300" />}
          />
        </div>
        <h2 className="underline underline-offset-2 pt-8 text-gray-400">CMS</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 mt-12">
          <Skill
            title="SquareSpace"
            icon={<FaSquarespace size={50} className="dark:text-gray-300" />}
          />
        </div>
      </div> */}
    </div>
  );
};

export default Skills;
