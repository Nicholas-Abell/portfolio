"use client";
import React from "react";
import Icon from "./Icon";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

type IconPaletteProps = {
  setMobileNav?: (arg: boolean) => void;
  nav?: boolean;
};

const IconPalette = ({ setMobileNav, nav }: IconPaletteProps) => {
  const scrollToEmailForm = (id: string) => {
    nav ? setMobileNav(false) : null;
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

  const showResume = () => {
    nav ? setMobileNav(false) : null;
    window.location.href = "/resume";
  };

  return (
    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
      <Icon
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
      </div>
      <div
        onClick={showResume}
        className="neon rounded-full cursor-pointer p-3"
      >
        <BsPersonLinesFill size={25} />
      </div>
    </div>
  );
};

export default IconPalette;
