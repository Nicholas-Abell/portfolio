import React from "react";
import { FaCss3Alt, FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import {
  HiArrowDownLeft,
  HiArrowDownRight,
  HiArrowDown,
  HiArrowLeft,
  HiArrowRight,
} from "react-icons/hi2";
import Skill_Icon from "./Skill_Icon";
import Line from "./Line";

type SkillTree_FrontEndProps = {
  skillsSelected: string;
};

const SkillTree_FrontEnd: React.FC<SkillTree_FrontEndProps> = ({
  skillsSelected,
}) => {
  return (
    <div
      className={`${
        skillsSelected === "front-end" ? "grid" : "hidden"
      } grid-cols-3 w-full gap-12  p-4 lg:grid relative`}
    >
      <Skill_Icon
        title="CSS"
        icon={<FaCss3Alt size={50} className="text-blue-600" />}
        ArrowBottom
      />
      <Skill_Icon
        title="HTML"
        icon={<FaHtml5 size={50} className="text-orange-600" />}
        ArrowBottom
      />
      <Skill_Icon
        title="Ts"
        icon={<SiTypescript size={50} className="text-blue-600" />}
        ArrowBottom
      />
      <Line color="green" />
      <Skill_Icon
        title="Tailwind"
        icon={<SiTailwindcss size={50} className="text-blue-600" />}
      />
      <Skill_Icon
        title="React"
        icon={<FaReact size={50} className="text-blue-600" />}
        ArrowBottom
      />
      <Skill_Icon
        title="SCSS"
        icon={<FaSass size={50} className="text-pink-600" />}
      />
      <div></div>
      <Line color="green" />
      <div></div>
      <div></div>
      <Skill_Icon
        title="NextJs"
        icon={
          <TbBrandNextjs size={50} className="text-black dark:text-white" />
        }
      />
    </div>
  );
};
export default SkillTree_FrontEnd;
