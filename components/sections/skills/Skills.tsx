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
      <div className="hidden lg:grid w-full grid-cols-3 text-center bg-redwine text-white tracking-widest uppercase font-bold">
        <div>
          <p>Font-end</p>
        </div>
        <div>
          <p>Back-end</p>
        </div>
        <div>
          <p>Other</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row overflow-hidden">
        <div className=" grid grid-cols-3 gap-2 lg:hidden">
          {/* <div className="bg-slate-700 md:p-12 md:px-16 w-full text-center justify-center items-center border-4 border-slate-800 md:border-l-0 rounded-md hidden md:block" /> */}
          <button
            onClick={() => setSkillsSelected("front-end")}
            className={`${
              skillsSelected === "front-end"
                ? "bg-none text-reddnd"
                : "bg-redwine text-white"
            } uppercase tracking-wide font-extrabold w-full text-center justify-center items-center border-4 border-slate-500 rounded-md shadow-none focus:shadow-none hover:shadow-none`}
          >
            Frontend
          </button>
          <button
            onClick={() => setSkillsSelected("back-end")}
            className={`${
              skillsSelected === "back-end"
                ? "bg-none text-reddnd"
                : "bg-redwine text-white"
            } uppercase tracking-wide font-extrabold w-full text-center justify-center items-center border-4 border-slate-500 rounded-md shadow-none focus:shadow-none hover:shadow-none`}
          >
            Backend
          </button>
          <button
            onClick={() => setSkillsSelected("other")}
            className={`${
              skillsSelected === "other"
                ? "bg-none text-reddnd"
                : "bg-redwine text-white"
            } uppercase tracking-wide font-extrabold w-full text-center justify-center items-center border-4 border-slate-500 rounded-md shadow-none focus:shadow-none hover:shadow-none`}
          >
            Other
          </button>
        </div>
          <SkillTree_FrontEnd skillsSelected={skillsSelected} />
          <SkillTree_BackEnd skillsSelected={skillsSelected} />
          <SkillTree_Other skillsSelected={skillsSelected} />
      </div>
    </div>
  );
};

export default Skills;
