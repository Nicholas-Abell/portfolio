import React from "react";

type Skill_IconProps = {
  icon: any;
  title: string;
  arrowBottom?: boolean;
  arrowLeft?: boolean;
  arrowLeft_lg?: boolean;
  arrowColor?: string;
  colSpan?: number;
};

const Skill_Icon: React.FC<Skill_IconProps> = ({
  icon,
  title,
  arrowLeft,
  arrowBottom,
  colSpan,
  arrowColor,
  arrowLeft_lg,
}) => {
  return (
    <div className={`p-4 neon rounded-xl relative z-201 col-span-${colSpan}`}>
      <div className="grid grid-cols-1 gap-4 justify-center items-center z-20">
        <div className="m-auto">{icon}</div>
        <div className="flex flex-col items-center justify-center">
          <h3>{title}</h3>
        </div>
      </div>
      {arrowBottom && (
        <div
          className={`absolute top-30 left-[50%] ${arrowColor} border-l-2 w-full h-[60%]`}
        ></div>
      )}
      {arrowLeft && (
        <div
          className={`absolute top-[50%] right-[50%] ${arrowColor} border-t-2 w-full h-[60%]`}
        ></div>
      )}
      {arrowLeft_lg && (
        <div
          className={`absolute top-[50%] right-[75%] ${arrowColor} border-t-2 w-full h-[60%]`}
        ></div>
      )}
    </div>
  );
};

export default Skill_Icon;
