"use client";
import React, { useState } from "react";
import {
  Everdell,
  Reddit,
  ThistleandThorns,
  MovieDatabase,
  Wordle,
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
            <Wordle />
          </>
        )}
      </div>
      <button
        onClick={() => setMore(true)}
        className={`bg-gray-600 w-[80%] mx-auto py-2 rounded-lg text-white font-bold hover:bg-slate-500/60 ease-in duration-200 ${
          more ? "hidden" : "block"
        }`}
      >
        MORE
      </button>
    </div>
  );
};

export default Projects;
