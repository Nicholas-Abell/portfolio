import React from "react";
import { BsGit } from "react-icons/bs";
import Skill_Icon from "./Skill_Icon";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb, SiPrisma, SiFirebase } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import Line from "./Line";

type SkillTree_BackEndProps = {
  skillsSelected: string;
};

const SkillTree_BackEnd: React.FC<SkillTree_BackEndProps> = ({
  skillsSelected,
}) => {
  return (
    <div
      className={`${
        skillsSelected === "back-end" ? "grid" : "hidden"
      } grid-cols-3 w-full gap-12 p-4 lg:grid`}
    >
      <div></div>
      <Skill_Icon
        title="NodeJS"
        icon={<FaNodeJs size={50} className="text-green-600" />}
        arrowBottom
        arrowColor="border-green-400"
      />
      <div></div>
      <div></div>
      <Skill_Icon
        title="Express"
        icon={<SiExpress size={50} className="text-orange-600" />}
        arrowBottom
        arrowColor="border-green-400"
      />
      <div></div>
      <div></div>
      <Line color="border-green-400" right />
      <Skill_Icon
        title="Prisma"
        icon={<SiPrisma size={50} className="text-gray-400" />}
        arrowColor="border-green-400"
      />
      <Skill_Icon
        title="MySQL"
        icon={<GrMysql size={50} className="text-blue-600" />}
      />
      <Skill_Icon
        title="MongoDB"
        icon={<SiMongodb size={50} className="text-green-600" />}
      />
      <Skill_Icon
        title="Firebase"
        icon={<SiFirebase size={50} className="text-orange-400" />}
      />
    </div>
  );
};
export default SkillTree_BackEnd;
