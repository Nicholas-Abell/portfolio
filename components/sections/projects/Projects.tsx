import React from "react";
import { Everdell, Reddit, ThistleandThorns, MovieDatabase } from "./Project_Cards";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full h-auto text-center grid grid-cols-1 grid-rows-1 lg:grid-cols-2 xl:grid-cols-3 xl:px-12 gap-4 justify-center items-center mt-24 p-4 overflow-hidden"
    >
      <MovieDatabase />
      <Reddit />
      <ThistleandThorns />
      <Everdell />
    </div>
  );
};

export default Projects;
