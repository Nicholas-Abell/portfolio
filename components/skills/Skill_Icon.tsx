import React from "react";

type Skill_IconProps = {
  icon: any;
  title: string;
};

const Skill_Icon: React.FC<Skill_IconProps> = ({ icon, title }) => {
  return (
    <div className="p-4 neon rounded-xl">
      <div className="grid grid-cols-1 gap-4 justify-center items-center">
        <div className="m-auto">{icon}</div>
        <div className="flex flex-col items-center justify-center">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Skill_Icon;
