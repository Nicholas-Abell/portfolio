'use client';
import React, { useContext } from 'react';
import { DarkModeContext } from '@/app/layout';
import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsPersonLinesFill, BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai';

const Main = () => {

    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

    return (
        <div id='home' className='w-full h-screen text-center flex justify-center items-center'>
            <div className='relative max-w-[1240px] w-full h-full p-2 flex justify-center items-center'>
                <div className='absolute top-24 left-8'>
                    <button onClick={toggleDarkMode} className='p-2 flex justify-center items-center gap-4'>
                        {
                            isDarkMode
                                ? <BsFillMoonFill size={25} className='text-white' />
                                : <BsFillSunFill size={25} className='text-black' />
                        }
                    </button>
                </div>
                <div>
                    <p className='uppercase text-sm tracking-widest pb-4 text-gray-600'>
                        Looking to Improve your Company
                    </p>
                    <h1 className='dark:text-white text-gray-700'>
                        I'm
                        <span className='text-red-800 px-4'>
                            Nicholas Abell
                        </span>
                    </h1>
                    <p className='py-4 dark:text-gray-300 text-gray-600 max-w-[70%] m-auto'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate cumque ipsam animi ratione mollitia laudantium qui veritatis, quaerat libero recusandae consequuntur quibusdam voluptatum aut, unde distinctio alias. Numquam, ab voluptates.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <Link href='https://github.com/Nicholas-Abell' className='dark:text-white dark:bg-black rounded-full shadow-lg shadow-gray-400 p-3 hover:shadow-lg cursor-pointer'>
                            <FaGithub size={25} />
                        </Link>
                        <Link href='https://www.linkedin.com/in/nicholas-abell-348807192/' className='dark:text-white dark:bg-black rounded-full shadow-lg shadow-gray-400 p-3 hover:shadow-lg cursor-pointer'>
                            <FaLinkedin size={25} />
                        </Link>
                        <div className='dark:text-white dark:bg-black rounded-full shadow-lg shadow-gray-400 p-3 hover:shadow-lg cursor-pointer'>
                            <AiOutlineMail size={25} />
                        </div>
                        <div className='dark:text-white dark:bg-black rounded-full shadow-lg shadow-gray-400 p-3 hover:shadow-lg cursor-pointer'>
                            <BsPersonLinesFill size={25} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main