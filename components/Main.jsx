'use client';
import React from 'react';
import Icon from './Icon';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsPersonLinesFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai';

const Main = () => {
    return (
        <div id='home' className='w-full h-screen text-center flex justify-center items-center'>
            <div className='relative max-w-[1240px] w-full h-full p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest pb-4 text-gray-600'>
                        Looking to Improve your Company
                    </p>
                    <h1 className='dark:text-white text-gray-700'>
                        I'm
                        <span className='text-red-800 dark:text-red-600 px-4'>
                            Nicholas Abell
                        </span>
                    </h1>
                    <p className='py-4 dark:text-gray-300 text-gray-600 max-w-[70%] m-auto'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate cumque ipsam animi ratione mollitia laudantium qui veritatis, quaerat libero recusandae consequuntur quibusdam voluptatum aut, unde distinctio alias. Numquam, ab voluptates.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <Icon reactIcon={<FaGithub size={25} />} url={'https://github.com/Nicholas-Abell'} />
                        <Icon reactIcon={<FaLinkedin size={25} />} url={'https://www.linkedin.com/in/nicholas-abell-348807192/'} />
                        <Icon reactIcon={<AiOutlineMail size={25} />} url={''} />
                        <Icon reactIcon={<BsPersonLinesFill size={25} />} url={'/resume'} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main;