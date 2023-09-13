import React from "react";
import { BsGit } from "react-icons/bs";
import Skill_Icon from "./Skill_Icon";

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
  );
};
export default SkillTree_BackEnd;
