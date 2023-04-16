import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiFirebase } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import Skill from './Skill';

const Skills = () => {
    return (
        <div className='w-full py-12 p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p id='skills' className='text-xl tracking-widest uppercase text-red-800 dark:text-red-500'>Skills</p>
                <h2 className='text-black dark:text-gray-400'>What I Can Do</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12'>
                    <Skill title='HTML' icon={<FaHtml5 size={50} className='text-[#E44D26]' />} />
                    <Skill title='CSS' icon={<FaCss3Alt size={50} className='text-blue-500' />} />
                    <Skill title='Javascript' icon={<SiJavascript size={50} className='text-yellow-500' />} />
                    <Skill title='React Js' icon={<FaReact size={50} className='text-blue-400' />} />
                    <Skill title='Next Js' icon={<TbBrandNextjs size={50} className='dark:text-gray-300' />} />
                    <Skill title='Tailwind CSS' icon={<SiTailwindcss size={50} className='text-[#0F7F7F]' />} />
                    <Skill title='Bootstrap' icon={<FaBootstrap size={50} className='text-purple-600' />} />
                    <Skill title='Firebase' icon={<SiFirebase size={50} className='text-orange-600' />} />
                </div>
            </div>

        </div>
    )
}

export default Skills