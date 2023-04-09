import React from 'react';
import Project from './Project';

//images
import movieDatabase from '../assets/images/movie_database.png';
import smsConstruction from '../assets/images/sms_construction.png';
import wordleClone from '../assets/images/wordle_clone.jpeg';
import vacationLandingPage from '../assets/images/vacation_landing_page.png';

const Projects = () => {
    return (
        //work on margin
        <div id='projects' className='w-full h-auto text-center flex flex-col justify-center items-center mt-24'>
            <p className='text-xl tracking-widest uppercase text-red-800'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8 px-4'>
                <Project
                    title='Movie Database'
                    img={movieDatabase} projectURL='/'
                    info='Find Which streaming servive has your favorite movies.'
                />
                <Project
                    title='SMS Construction & Remodeling'
                    img={smsConstruction} projectURL='/'
                    info='A landing page that I built for a client. 
                    The page is currently hosted on Hostinger'
                />
                <Project
                    title='Vacation Landing Page'
                    img={vacationLandingPage} projectURL='/'
                    info='A landing page built with React and styled with tailwind.'
                />
                <Project
                    title='Wordle Game'
                    img={wordleClone} projectURL='/'
                    info='A clone of the popular game Wordle'
                />
            </div>
        </div>
    )
}

export default Projects