import React from "react";
import Project from "./Project";

//images
import movieDatabase from "../../public/assets/images/movie_database.png";
import smsConstruction from "../../public/assets/images/sms_construction.png";
import wordleClone from "../../public/assets/images/wordle_clone.jpeg";
import everdell from "../../public/assets/images/everdell_1.jpg";
import reddit from "../../public/assets/images/reddit_emblem.png";
import thistlethorns from "../../public/assets/images/Thistle&Thorns.png";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full h-auto text-center flex flex-col justify-center items-center mt-24"
    >
      <p className="text-xl tracking-widest uppercase text-red-800 dark:text-red-600">
        Projects
      </p>
      <h2 className="py-4 dark:text-gray-400">What I've Built</h2>
      <div className="grid md:grid-cols-2 gap-8 px-4">
        <Project
          title="Reddit Clone"
          img={reddit}
          projectURL="/reddit"
          info="Clone of the app Reddit"
        />
        <Project
          title="Movie Database"
          img={movieDatabase}
          projectURL="/moviedatabase"
          info="Find Which streaming servive has your favorite movies."
        />
        <Project
          title="SMS Construction"
          img={smsConstruction}
          projectURL="/smsconstruction"
          info="A landing page that I built for a client. 
                    The page is currently hosted on Hostinger"
        />
        <Project
          title="Thistle & Thorns Tattoos"
          img={thistlethorns}
          projectURL="/thistleandthorns"
          info="Coming Soon. Landing page for a local Tattoo shop. Made using Squarespace."
        />
        <Project
          title="Wordle Game"
          img={wordleClone}
          projectURL="/wordle"
          info="A clone of the popular game Wordle"
        />
        <Project
          title="Everdell Point Calculator"
          img={everdell}
          projectURL="/everdell"
          info="companion app for the board game"
        />
      </div>
      {/* <p className='text-xl mt-24 tracking-widest uppercase text-red-800 dark:text-red-600'>Coming Soon</p>
            <h2 className='py-4 dark:text-gray-400'>My Current Project</h2>
            <div className='grid md:grid-cols-4 px-4'>
                <Project
                    className='col-span-2 row-span-2 col-start-2'
                    title='Reddit Clone'
                    img={reddit} projectURL='/reddit'
                    info=''
                />
            </div> */}
    </div>
  );
};

export default Projects;
