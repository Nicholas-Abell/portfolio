"use client";
import React from "react";
import Icon from "./Icon";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineHexagon, MdHexagon } from "react-icons/md";
import Link from "next/link";

type IconPaletteProps = {
  setMobileNav?: (arg: boolean) => void;
  nav?: boolean;
};

export const IconPalette_lg: React.FC<IconPaletteProps> = ({
  setMobileNav,
  nav,
}) => {
  const scrollToEmailForm = (id: string) => {
    nav ? setMobileNav!(false) : null;
    const skillsElement = document.getElementById(id);
    if (skillsElement) {
      const offset = 90;
      const yCoordinate =
        skillsElement.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: yCoordinate, behavior: "smooth" });
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div className="flex items-center justify-between max-w-[200px] m-auto py-4">
      <div className="flex flex-col justify-center scale-50 lg:scale-75 w-full">
        <div className="flex justify-center gap-16 items-center ">
          <div className="flex justify-center items-center p-0 m-0">
            <MdOutlineHexagon
              className={`z-0 dark:text-slate-800`}
              size={200}
            />
            <Link
              href="https://github.com/Nicholas-Abell"
              className="z-1 absolute"
            >
              <FaGithub className=" text-slate-700" size={80} />
            </Link>
          </div>
          <div className="flex justify-center items-center p-0 m-0">
            <MdHexagon className={`z-0 dark:text-slate-800`} size={200} />
          </div>
          <div className="flex justify-center items-center p-0 m-0">
            <MdHexagon className={`z-0 dark:text-slate-800`} size={200} />
          </div>
        </div>
        <div className="flex justify-center gap-16 items-center mt-[-7.5rem]">
          <div className="flex justify-center items-center p-0 m-0">
            <MdOutlineHexagon
              className={`z-0  dark:text-slate-800`}
              size={200}
            />
            <Link
              href="https://www.linkedin.com/in/nicholas-abell-348807192/"
              className="z-1 absolute"
            >
              <FaLinkedin className=" text-slate-700" size={80} />
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <MdOutlineHexagon
              className={`z-0  dark:text-slate-800`}
              size={200}
            />
            <div
              onClick={() => scrollToEmailForm("email")}
              className="z-1 absolute cursor-pointer"
            >
              <AiOutlineMail className=" text-slate-700" size={80} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <Icon
        reactIcon={<FaGithub size={25} />}
        url={"https://github.com/Nicholas-Abell"}
      />
      <Icon
        reactIcon={<FaLinkedin size={25} />}
        url={"https://www.linkedin.com/in/nicholas-abell-348807192/"}
      />
      <div
        onClick={() => scrollToEmailForm("email")}
        className="neon rounded-full cursor-pointer p-3"
      >
        <AiOutlineMail size={25} />
      </div> */
}
