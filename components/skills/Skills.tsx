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
import Skill_Icon from "./Skill_Icon";
import SkillTree_FrontEnd from "./SkillTree_FrontEnd";
import SkillTree_BackEnd from "./SkillTree_BackEnd";
import SkillTree_Other from "./SkillTree_Other";

const Skills = () => {
  const [skillsSelected, setSkillsSelected] = useState("front-end");

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
      <div className="flex">
        <SkillTree_FrontEnd skillsSelected={skillsSelected} />
        <SkillTree_BackEnd skillsSelected={skillsSelected} />
        <SkillTree_Other skillsSelected={skillsSelected} />
        <div className=" grid gap-2 lg:hidden">
          <div className="bg-gray-400 p-12 w-full text-center justify-center items-center border-4 border-blue-500 border-l-0 rounded-md">
            Software
          </div>
          <button
            onClick={() => setSkillsSelected("front-end")}
            className={`${
              skillsSelected === "front-end" ? "bg-gray-200" : "bg-gray-400"
            } p-12 w-full text-center justify-center items-center border-4 border-blue-500 border-l-0 rounded-md shadow-none focus:shadow-none hover:shadow-none`}
          >
            Frontend
          </button>
          <button
            onClick={() => setSkillsSelected("back-end")}
            className={`${
              skillsSelected === "back-end" ? "bg-gray-200" : "bg-gray-400"
            } p-12 w-full text-center justify-center items-center border-4 border-blue-500 border-l-0 rounded-md shadow-none focus:shadow-none hover:shadow-none`}
          >
            Backend
          </button>
          <button
            onClick={() => setSkillsSelected("other")}
            className={`${
              skillsSelected === "other" ? "bg-gray-200" : "bg-gray-400"
            } p-12 w-full text-center justify-center items-center border-4 border-blue-500 border-l-0 rounded-md shadow-none focus:shadow-none hover:shadow-none`}
          >
            Other
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
