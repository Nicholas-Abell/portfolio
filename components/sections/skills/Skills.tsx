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
import Title from "../../shared/Title";

const Skills = () => {
  const [skillsSelected, setSkillsSelected] = useState("front-end");

  return (
    <div className="w-full py-12 px-2" id="skills">
      <Title title="Skills" />
      <div className="hidden lg:grid w-full grid-cols-3 text-center bg-gray-400 gap-2 pb-2">
        <div className="bg-gray-200">
          <p>Font-end</p>
        </div>
        <div className="bg-gray-200">
          <p>Back-end</p>
        </div>
        <div className="bg-gray-200">
          <p>Other</p>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row overflow-hidden">
        <SkillTree_FrontEnd skillsSelected={skillsSelected} />
        <SkillTree_BackEnd skillsSelected={skillsSelected} />
        <SkillTree_Other skillsSelected={skillsSelected} />
        <div className=" grid grid-cols-4 md:grid-cols-1 gap-2 lg:hidden">
          <div className="bg-gray-400 md:p-12 w-full text-center justify-center items-center border-4 border-slate-500 md:border-l-0 rounded-md">
            Software
          </div>
          <button
            onClick={() => setSkillsSelected("front-end")}
            className={`${
              skillsSelected === "front-end" ? "bg-none" : "bg-gray-400"
            } md:p-12 w-full text-center justify-center items-center border-4 border-slate-500 md:border-l-0 rounded-md shadow-none focus:shadow-none hover:shadow-none`}
          >
            Frontend
          </button>
          <button
            onClick={() => setSkillsSelected("back-end")}
            className={`${
              skillsSelected === "back-end" ? "bg-none" : "bg-gray-400"
            } md:p-12 w-full text-center justify-center items-center border-4 border-slate-500 md:border-l-0 rounded-md shadow-none focus:shadow-none hover:shadow-none`}
          >
            Backend
          </button>
          <button
            onClick={() => setSkillsSelected("other")}
            className={`${
              skillsSelected === "other" ? "bg-none" : "bg-gray-400"
            } md:p-12 w-full text-center justify-center items-center border-4 border-slate-500 md:border-l-0 rounded-md shadow-none focus:shadow-none hover:shadow-none`}
          >
            Other
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
