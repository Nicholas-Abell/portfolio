import React from "react";

type LineProps = {
  horizontal?: boolean;
  color?: string;
  right?: boolean;
  left?: boolean;
};

const Line: React.FC<LineProps> = ({ horizontal, color, right, left }) => {
  return (
    <div className="relative w-full h-full z-[-20]">
      <div
        className={`${
          horizontal ? "border-b-2 bottom-[50%]" : "border-l-2 left-[50%]"
        } absolute top-30  z-[-20] ${color} w-full border-dotted h-[140%]`}
      ></div>
      {right && (
        <div
          className={`border-b-2 bottom-[50%] absolute top-30 border-dotted left-[50%] z-[-20] ${color} w-full h-[140%]`}
        ></div>
      )}
      {left && (
        <div
          border-dotted
          className={`border-b-2 bottom-[50%] absolute top-30 right-[50%] z-[-20] ${color} w-full h-[140%]`}
        ></div>
      )}
    </div>
  );
};
export default Line;
