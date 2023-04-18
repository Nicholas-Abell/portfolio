'use client';
import Image from 'next/image';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { RiRadioButtonFill } from 'react-icons/ri';
import MovieDatabaseImg from '../../assets/images/movie_database.png';

export default function MovieDatabase() {
    return (
        <div className='w-full overflow-hidden pt-20'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] z-10 bg-black/60' />
                <Image src={MovieDatabaseImg} className='absolute z-1' layout="fill" objectFit="cover" objectPosition="center" alt='/Movie Database' />
                <div className='absolute text-white dark:text-gray-300 pl-8 z-40 top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h2 className='py-2'>Movie Database</h2>
                    <h3>React Js | Tailwind | Firebase</h3>
                </div>
            </div>
            <div className='mx-auto max-w-[1240px] grid md:grid-cols-5 gap-8 p-8 dark:text-gray-300'>
                <div className='col-span-4'>
                    <p className='text-red-600 dark:text-red-400'>Project</p>
                    <h2 className='dark:text-gray-400'>Overview</h2>
                    <p className='py-4 dark:text-gray-300'>Curious about new and upcoming moves? Looking for a classic and wonder which streaming service to watch it on?
                        This website solves these issues in a single website. Inspired by Netflix's design. This uses the IMDB database
                        api for up to date movie information and the Youtube api for trailers.</p>
                    <div className='flex items-center gap-4'>
                        <button href='https://movie-database-4bf43.web.app/' className='flex justify-center items-center gap-2 p-2 neon'>
                            <AiFillGithub size={25} className='w-full h-full' />
                            <h3>Live</h3>
                        </button>
                        <button className='flex justify-center items-center gap-2 p-2 neon'>
                            <AiFillGithub size={25} className='w-full h-full' />
                            <h3>GITHUB</h3>
                        </button>
                    </div>
                </div>
                <div className=' col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl px-4 py-12 flex flex-col justify-between items-center neon'>
                    <p className='text-center font-bold py-2'>Technologies</p>
                    <div>
                        <p className='text-gray-600 py-2 flex items-center gap-4'>
                            <RiRadioButtonFill /> React
                        </p>
                        <p className='text-gray-600 py-2 flex items-center gap-4'>
                            <RiRadioButtonFill /> Tailwind
                        </p>
                        <p className='text-gray-600 py-2 flex items-center gap-4'>
                            <RiRadioButtonFill /> Firebase
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
