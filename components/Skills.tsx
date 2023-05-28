import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaSass,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiFirebase,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BsGit } from "react-icons/bs";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div className="w-full py-12 p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p
          id="skills"
          className="text-xl tracking-widest uppercase text-red-800 dark:text-red-500"
        >
          Skills
        </p>
        <h2 className="text-black dark:text-gray-400">What I Can Do</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 mt-12">
          <Skill
            title="HTML"
            icon={<FaHtml5 size={50} className="text-[#E44D26]" />}
          />
          <Skill
            title="Git"
            icon={<BsGit size={50} className="text-orange-600" />}
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
            title="Next Js"
            icon={<TbBrandNextjs size={50} className="dark:text-gray-300" />}
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
            title="Firebase"
            icon={<SiFirebase size={50} className="text-orange-600" />}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
