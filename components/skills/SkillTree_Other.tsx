import React from "react";
import { BsGit, BsUnity, BsFillBootstrapFill } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { SiSquarespace, SiCsharp, SiChakraui } from "react-icons/si";
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
      } grid-cols-3 w-full gap-12 p-4 lg:grid`}
    >
      <Skill_Icon
        title="Git"
        icon={<BsGit size={50} className="text-orange-600" />}
        arrowBottom
        arrowColor="border-orange-400"
      />
      <div></div>
      <Skill_Icon
        title="C#"
        icon={<SiCsharp size={50} className="text-black" />}
        arrowBottom
        arrowColor="border-purple-600"
      />
      <Skill_Icon
        title="GitHub"
        icon={<AiOutlineGithub size={50} className="text-black" />}
        arrowLeft
      />
      <div></div>
      <Skill_Icon
        title="Unity"
        icon={<BsUnity size={50} className="text-black" />}
      />
      <div></div>
      <Skill_Icon
        title="SquareSpace"
        icon={<SiSquarespace size={50} className="text-black" />}
      />
      <div></div>
      <Skill_Icon
        title="Bootstrap"
        icon={<BsFillBootstrapFill size={50} className="text-blue-600" />}
      />
      <div></div>
      <Skill_Icon
        title="ChakraUI"
        icon={<SiChakraui size={50} className="text-teal-400" />}
      />
    </div>
  );
};
export default SkillTree_Other;
