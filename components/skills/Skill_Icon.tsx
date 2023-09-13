import React from "react";

type Skill_IconProps = {
  icon: any;
  title: string;
  ArrowBottom?: boolean;
};

const Skill_Icon: React.FC<Skill_IconProps> = ({
  icon,
  title,
  ArrowBottom,
}) => {
  return (
    <div className="p-4 neon rounded-xl relative">
      <div className="grid grid-cols-1 gap-4 justify-center items-center z-10">
        <div className="m-auto">{icon}</div>
        <div className="flex flex-col items-center justify-center">
          <h3>{title}</h3>
        </div>
      </div>
      {ArrowBottom && (
        <div className="absolute top-30 left-[50%] z-[-1] border-green-400 border-l-2 w-full h-[50%]"></div>
      )}
    </div>
  );
};

export default Skill_Icon;
