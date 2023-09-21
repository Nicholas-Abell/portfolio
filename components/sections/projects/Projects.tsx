"use client";
import React, { useState } from "react";
import {
  Everdell,
  Reddit,
  ThistleandThorns,
  MovieDatabase,
} from "./Project_Cards";

const Projects = () => {
  const [more, setMore] = useState(false);

  return (
    <div className="w-full h-auto text-center" id="projects">
      <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 xl:grid-cols-3 xl:px-12 gap-4 justify-center items-center mt-24 p-4 overflow-hidden">
        <MovieDatabase />
        <ThistleandThorns />
        <Reddit />
        <Everdell />
        {more && (
          <>
            <MovieDatabase />
            <ThistleandThorns />
            <Reddit />
            <Everdell />
          </>
        )}
      </div>
      <button
        onClick={() => setMore(true)}
        className={`bg-red-600 w-[80%] py-2 rounded-lg text-white font-bold ${
          more ? "hidden" : "block"
        }`}
      >
        MORE
      </button>
    </div>
  );
};

export default Projects;
