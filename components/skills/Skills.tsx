"use client";
import React, { useState } from "react";
import useScreenSize from "../../hooks/useScreenSize";
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
import Skill_Icon from "./Skill_Icon";

const Skills = () => {
  const [skillsSelected, setSkillsSelected] = useState("front-end");
  const screeSize = useScreenSize();

  return (
    <div className="w-full py-12 px-2">
      <div className="hidden lg:grid w-full grid-cols-3 text-center bg-gray-300 gap-2 pb-2">
        <div className="bg-gray-200">
          <p>Font-end</p>
        </div>
        <div className="bg-gray-200">
          <p>Font-end</p>
        </div>
        <div className="bg-gray-200">
          <p>Font-end</p>
        </div>
      </div>
      <div className="bg-gray-400 flex">
        <div
          className={`${
            skillsSelected === "front-end" ? "grid" : "hidden"
          } grid-cols-3 w-full gap-12 bg-gray-200 p-4 lg:grid`}
        >
          <Skill_Icon
            title="CSS"
            icon={<FaCss3Alt size={50} className="text-blue-600" />}
          />
          <Skill_Icon
            title="HTML"
            icon={<FaHtml5 size={50} className="text-orange-600" />}
          />
          <Skill_Icon
            title="Ts"
            icon={<SiTypescript size={50} className="text-blue-600" />}
          />
          <div></div>
          <Skill_Icon
            title="Tailwind"
            icon={<SiTailwindcss size={50} className="text-blue-600" />}
          />
          <Skill_Icon
            title="React"
            icon={<FaReact size={50} className="text-blue-600" />}
          />
          <Skill_Icon
            title="SCSS"
            icon={<FaSass size={50} className="text-pink-600" />}
          />
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <Skill_Icon
            title="NextJs"
            icon={<TbBrandNextjs size={50} className="text-black" />}
          />
        </div>
        <div
          className={`${
            skillsSelected === "back-end" ? "grid" : "hidden"
          } grid-cols-3 w-full gap-12 bg-gray-200 p-4 lg:grid`}
        >
          <Skill_Icon
            title="Git"
            icon={<BsGit size={50} className="text-orange-600" />}
          />
          <div></div>
          <Skill_Icon
            title="Git"
            icon={<BsGit size={50} className="text-orange-600" />}
          />
          <div></div>
          <Skill_Icon
            title="Git"
            icon={<BsGit size={50} className="text-orange-600" />}
          />
          <Skill_Icon
            title="Git"
            icon={<BsGit size={50} className="text-orange-600" />}
          />
          <Skill_Icon
            title="Git"
            icon={<BsGit size={50} className="text-orange-600" />}
          />
          <Skill_Icon
            title="Git"
            icon={<BsGit size={50} className="text-orange-600" />}
          />
          <div></div>
          <Skill_Icon
            title="Git"
            icon={<BsGit size={50} className="text-orange-600" />}
          />
          <div></div>
          <Skill_Icon
            title="Git"
            icon={<BsGit size={50} className="text-orange-600" />}
          />
        </div>
        <div
          className={`${
            skillsSelected === "other" ? "grid" : "hidden"
          } grid-cols-3 w-full gap-12 bg-gray-200 p-4 lg:grid`}
        >
          <Skill_Icon
            title="Git"
            icon={<BsGit size={50} className="text-orange-600" />}
          />
          <div></div>
          <Skill_Icon
            title="Git"
            icon={<BsGit size={50} className="text-orange-600" />}
          />
          <div></div>
          <Skill_Icon
            title="Git"
            icon={<BsGit size={50} className="text-orange-600" />}
          />
          <div></div>
          <Skill_Icon
            title="Git"
            icon={<BsGit size={50} className="text-orange-600" />}
          />
          <div></div>
          <div></div>
          <Skill_Icon
            title="Git"
            icon={<BsGit size={50} className="text-orange-600" />}
          />
          <div></div>
          <Skill_Icon
            title="Git"
            icon={<BsGit size={50} className="text-orange-600" />}
          />
        </div>
        <div className=" grid gap-2 lg:hidden">
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
          <Skill_Icon
            title="Git"
            icon={<BsGit size={50} className="text-orange-600" />}
          />
        </div>
        <h2 className="underline underline-offset-2 pt-8 text-gray-400">
          Front End
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 mt-12">
          <Skill_Icon
            title="HTML"
            icon={<FaHtml5 size={50} className="text-[#E44D26]" />}
          />
          <Skill_Icon
            title="Javascript"
            icon={<SiJavascript size={50} className="text-yellow-500" />}
          />
          <Skill_Icon
            title="Typescript"
            icon={<SiTypescript size={50} className="text-blue-700" />}
          />
          <Skill_Icon
            title="CSS"
            icon={<FaCss3Alt size={50} className="text-blue-500" />}
          />
          <Skill_Icon
            title="SCSS"
            icon={<FaSass size={50} className="text-pink-400" />}
          />
          <Skill_Icon
            title="React Js"
            icon={<FaReact size={50} className="text-blue-400" />}
          />
          <Skill_Icon
            title="Tailwind CSS"
            icon={<SiTailwindcss size={50} className="text-[#0F7F7F]" />}
          />
          <Skill_Icon
            title="Bootstrap"
            icon={<FaBootstrap size={50} className="text-purple-600" />}
          />
          <Skill_Icon
            title="Redux"
            icon={<SiRedux size={50} className="text-purple-600" />}
          />
        </div>
        <h2 className="underline underline-offset-2 pt-8 text-gray-400">
          Back End
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 mt-12">
          <Skill_Icon
            title="Firebase"
            icon={<SiFirebase size={50} className="text-orange-600" />}
          />
          <Skill_Icon
            title="Mongo DB"
            icon={<SiMongodb size={50} className="text-green-600" />}
          />
          <Skill_Icon
            title="Node Js"
            icon={<SiNodedotjs size={50} className="text-green-600" />}
          />
        </div>
        <h2 className="underline underline-offset-2 pt-8 text-gray-400">
          Full
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 mt-12">
          <Skill_Icon
            title="Next Js"
            icon={<TbBrandNextjs size={50} className="dark:text-gray-300" />}
          />
        </div>
        <h2 className="underline underline-offset-2 pt-8 text-gray-400">CMS</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 mt-12">
          <Skill_Icon
            title="SquareSpace"
            icon={<FaSquarespace size={50} className="dark:text-gray-300" />}
          />
        </div>
      </div> */}
    </div>
  );
};

export default Skills;
