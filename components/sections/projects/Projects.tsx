import React from "react";
import Project from "./Project";

//images
import movieDatabase from "../../../public/assets/images/movie_database.png";
import smsConstruction from "../../../public/assets/images/sms_construction.png";
import wordleClone from "../../../public/assets/images/wordle_clone.jpeg";
import everdell from "../../../public/assets/images/everdell_1.jpg";
import reddit from "../../../public/assets/images/reddit_emblem.png";
import thistlethorns from "../../../public/assets/images/Thistle&Thorns.png";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full h-auto text-center flex flex-col justify-center items-center mt-24 p-4 overflow-hidden"
    >
      <div className="bg-blue-400 w-full flex flex-col justify-center items-center gap-4 py-8 relative overflow-hidden">
        <div className="absolute bg-yellow-400 p-8 w-full top-0 -left-80 -rotate-45 text-center">
          <p>FOR ADVANCED</p>
        </div>

        <h2>Project 1</h2>
        <p>Lone Hero and Expert Adventurer</p>
        <div className="flex flex-col w-[50%] justify-center items-cente border-t-2 border-b-2 border-white">
          <h3>Blade of Vengeance</h3>
          <p>Nick A</p>
        </div>
        <div className="bg-gray-200 border-black rounded-lg w-[80%] p-32 test"></div>
        <div className="flex flex-col w-[80%] justify-center items-cente border-t-2 border-b-2 border-white">
          <p>Nick A</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
