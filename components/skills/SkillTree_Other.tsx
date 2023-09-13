import React from "react";
import { BsGit } from "react-icons/bs";
import Skill_Icon from "./Skill_Icon";

type SkillTree_OtherProps = {
  skillsSelected: string;
};

const SkillTree_Other: React.FC<SkillTree_OtherProps> = ({
  skillsSelected,
}) => {
  return (
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
  );
};
export default SkillTree_Other;
