import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss } from 'react-icons/si';
import Skill from './Skill';

const Skills = () => {
    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-red-800'>Skills</p>
                <h2>What I Can Do</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <Skill title='HTML' icon={<FaHtml5 size={50} />} />
                    <Skill title='CSS' icon={<FaCss3Alt size={50} />} />
                    <Skill title='Javascript' icon={<SiJavascript size={50} />} />
                    <Skill title='React Js' icon={<FaReact size={50} />} />
                    <Skill title='Tailwind CSS' icon={<SiTailwindcss size={50} />} />
                    <Skill title='Tailwind CSS' icon={<FaBootstrap size={50} />} />
                </div>
            </div>

        </div>
    )
}

export default Skills