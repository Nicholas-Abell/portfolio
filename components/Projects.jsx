import React from 'react';
import testImg from '../assets/images/movie_database.png'
import Project from './Project';


const Projects = () => {
    return (
        //work on margin
        <div className='w-full h-auto text-center flex flex-col justify-center items-center mt-24'>
            <p className='text-xl tracking-widest uppercase text-red-800'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8 px-4'>
                <Project
                    title='Movie Database'
                    img={testImg} projectURL='/'
                    info='Find Which streaming servives has your favorite movies.'
                />
                <Project
                    title='Movie Database'
                    img={testImg} projectURL='/'
                    info='Find Which streaming servives has your favorite movies.'
                />
                <Project
                    title='Movie Database'
                    img={testImg} projectURL='/'
                    info='Find Which streaming servives has your favorite movies.'
                />
            </div>
        </div>
    )
}

export default Projects