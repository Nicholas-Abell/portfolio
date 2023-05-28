import Image from "next/image";
import React from "react";
import Skill from "../../components/Skill";
//react-icons
import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
//images
import SMSImage from "../../assets/images/sms_construction.png";

export default function SMSConstruction() {
  return (
    <div className="w-full overflow-hidden pt-20">
      <div className="w-screen h-[50vh] relative text-gray-300">
        <div className="absolute top-0 left-0 w-full h-[50vh] z-10 from-black bg-gradient-to-r" />
        <Image
          src={SMSImage}
          className="absolute z-1 top-0 object-top lg:object-center object-cover"
          fill
          style={{ objectFit: "cover" }}
          alt="/Movie Database"
        />
        <div className="absolute text-white dark:text-gray-300 pl-8 z-40 top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h2 className="py-2">
            SMS <br /> Construction & Remodeling
          </h2>
          <h3>React Js | Tailwind | Hostinger</h3>
        </div>
      </div>
      <div className="mx-auto max-w-[1240px] grid md:grid-cols-5 gap-8 p-8 dark:text-gray-300">
        <div className="col-span-4">
          <p className="text-xl tracking-widest uppercase text-red-800 dark:text-red-500">
            Project
          </p>
          <h2 className="dark:text-gray-400">Overview</h2>
          <p className="py-8 dark:text-gray-300">
            A landing page I built for a client. A local handyman site I made
            using react and tailwind. Currently hosted on Hostinger. I learned a
            lot about SEO and google analytics making this project.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://smsconstructionandremodeling.com/"
              className="flex justify-center items-center gap-2 p-2 shadow-lg hover:shadow-xl shadow-gray-400 rounded-xl uppercase neon"
            >
              <CgWebsite size={25} className="w-full h-full" />
              <h3>Live</h3>
            </a>
            <a
              href="https://github.com/Nicholas-Abell/handy_man"
              className="flex justify-center items-center gap-2 p-2 shadow-lg hover:shadow-xl shadow-gray-400 rounded-xl uppercase neon"
            >
              <AiFillGithub size={25} className="w-full h-full" />
              <h3>GITHUB</h3>
            </a>
          </div>
        </div>
        <div className="col-span-5 lg:col-span-1 shadow-xl shadow-gray-400 rounded-xl px-4 py-12 neon">
          <p className="mb-4 uppercase tracking-widest font-bold lg:tracking-normal text-red-800 dark:text-red-500 text-center">
            Technologies
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 text-black dark:text-gray-300">
            <Skill icon={<FaReact size={25} />} title="React" />
            <Skill icon={<SiTailwindcss size={25} />} title="Tailwind" />
          </div>
        </div>
      </div>
    </div>
  );
}
