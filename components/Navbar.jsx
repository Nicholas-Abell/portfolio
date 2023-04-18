"use client";
import React, { useState, useEffect } from 'react';
import Icon from './Icon';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedin, FaGithub, FaHome } from 'react-icons/fa';
import { BsPersonLinesFill, BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
    const [mobileNav, setMobileNav] = useState(false);
    const [shadow, setShadow] = useState(false);

    const handleMobileNav = () => {
        setMobileNav(!mobileNav);
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else setShadow(false)
        }
        window.addEventListener('scroll', handleShadow)
    }, [])

    const handleNavClick = (id) => {
        if (window.location.pathname !== '/') {
            window.location.href = '/';
        }
        else if (id) {
            const skillsElement = document.getElementById(id);
            const offset = 90;
            const yCoordinate = skillsElement.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: yCoordinate, behavior: 'smooth' })
        } else { window.scrollTo(0, 0); }

        setMobileNav(false);
    }

    return (
        <div className={shadow ? `w-full fixed h-20 shadow-xl dark:shadow-gray-400 z-[100] bg-[#ECF0F3] dark:bg-black dark:hover:shadow-red-600 hover:duration-200 ease-in` : `w-full fixed h-20 z-[100] bg-[#ECF0F3] dark:bg-black`}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <div className='flex items-center justify-center gap-4'>
                    <button onClick={() => handleNavClick(0, 0)} className='flex justify-center items-center gap-2 p-2 neon'>
                        <FaHome size={25} className='w-full h-full' />
                        <h3>Home</h3>
                    </button>

                    <button onClick={toggleDarkMode} className='flex justify-center items-center gap-2 p-2 hover:text-[#1251ff] dark:text-gray-300 dark:hover:shadow-red-600 hover:shadow-md hover:shadow-[#8a2be2] dark:hover:text-red-600 ease-in duration-200'>
                        {
                            isDarkMode
                                ? <BsFillMoonFill size={25} className='w-full h-full' />
                                : <BsFillSunFill size={25} className='w-full h-full' />
                        }
                        <h3>Theme</h3>
                    </button>
                </div>
                <ul className='hidden md:flex dark:text-gray-100'>
                    <li onClick={() => handleNavClick('about')} className='ml-10 uppercase dark:hover:red-600 dark:hover:text-red-600 cursor-pointer'>About Me</li>
                    <li onClick={() => handleNavClick('skills')} className='ml-10 uppercase dark:hover:red-600 dark:hover:text-red-600 cursor-pointer'>Skills</li>
                    <li onClick={() => handleNavClick('projects')} className='ml-10 uppercase dark:hover:red-600 dark:hover:text-red-600 cursor-pointer'>Projects</li>
                    <li onClick={() => handleNavClick('contact')} className='ml-10 uppercase dark:hover:red-600 dark:hover:text-red-600 cursor-pointer'>Contact</li>
                </ul>
                <div onClick={handleMobileNav} className='md:hidden'>
                    <AiOutlineMenu size={25} className='cursor-pointer dark:text-white dark:hover:text-red-600 ease-in duration-200' />
                </div>
            </div>
            <div className={mobileNav ? 'md:hidden fixed left-0 top-0 bg-black/70 h-screen w-full' : 'hidden'}>
                <div className={mobileNav
                    ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md-[45%] h-screen dark:bg-black bg-white p-10 ease-in duration-500'
                    : 'fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md-[45%] h-screen bg-white p-10 ease-in duration-500'}>
                    <div className='w-full flex justify-between items-center p-4 border-b-2 border-gray-400'>
                        <h1 className='dark:text-gray-100 text-black'>Nick A</h1>
                        <div onClick={handleMobileNav} className='neon p-3 rounded-full cursor-pointer'>
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div>
                        <ul className='flex flex-col w-full gap-12 mt-8 dark:text-white'>
                            <Link onClick={() => handleNavClick('about')} href='/#about'><li className='ml-10 uppercase dark:hover:red-600 dark:hover:text-red-600 cursor-pointer'>About Me</li></Link>
                            <Link onClick={() => handleNavClick('skills')} href='/#skills'><li className='ml-10 uppercase dark:hover:red-600 dark:hover:text-red-600 cursor-pointer'>Skills</li></Link>
                            <Link onClick={() => handleNavClick('projects')} href='/#projects'><li className='ml-10 uppercase dark:hover:red-600 dark:hover:text-red-600 cursor-pointer'>Projects</li></Link>
                            <Link onClick={() => handleNavClick('contact')} href='/#contact'><li className='ml-10 uppercase dark:hover:red-600 dark:hover:text-red-600 cursor-pointer'>Contact</li></Link>
                        </ul>
                    </div>
                    <div className='pt-40'>
                        <p>Let's Connect</p>
                    </div>
                    <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                        <Icon reactIcon={<FaGithub size={25} />} url={'https://github.com/Nicholas-Abell'} />
                        <Icon reactIcon={<FaLinkedin size={25} />} url={'https://www.linkedin.com/in/nicholas-abell-348807192/'} />
                        <Icon reactIcon={<AiOutlineMail size={25} />} url={''} />
                        <Icon reactIcon={<BsPersonLinesFill size={25} />} url={''} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar

