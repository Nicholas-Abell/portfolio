"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsPersonLinesFill, BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

const Navbar = () => {
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
        <div className={shadow ? `w-full fixed h-20 shadow-xl dark:shadow-gray-400 z-[100] bg-[#ECF0F3] dark:bg-black dark:hover:shadow-red-600` : `w-full fixed h-20 z-[100] bg-[#ECF0F3] dark:bg-black`}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <h2 onClick={() => handleNavClick(0, 0)} className='dark:text-gray-300 cursor-pointer'>Nick A</h2>
                <ul className='hidden md:flex dark:text-gray-100'>
                    <li onClick={() => handleNavClick('about')} className='ml-10 uppercase hover:border-b border-black cursor-pointer'>About Me</li>
                    <li onClick={() => handleNavClick('skills')} className='ml-10 uppercase hover:border-b border-black cursor-pointer'>Skills</li>
                    <li onClick={() => handleNavClick('projects')} className='ml-10 uppercase hover:border-b border-black cursor-pointer'>Projects</li>
                    <li onClick={() => handleNavClick('contact')} className='ml-10 uppercase hover:border-b border-black cursor-pointer'>Contact</li>
                </ul>
                <div onClick={handleMobileNav} className='md:hidden'>
                    <AiOutlineMenu size={25} className='cursor-pointer dark:text-white' />
                </div>
            </div>
            <div className={mobileNav ? 'md:hidden fixed left-0 top-0 bg-black/70 h-screen w-full' : 'hidden'}>
                <div className={mobileNav
                    ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md-[45%] h-screen dark:bg-black bg-white p-10 ease-in duration-500'
                    : 'fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md-[45%] h-screen bg-white p-10 ease-in duration-500'}>
                    <div className='w-full flex justify-between items-center p-4 border-b-2 border-gray-400'>
                        <h1 className='dark:text-gray-100 text-black'>Nick A</h1>
                        <div onClick={handleMobileNav} className='rounded-full background-gray-300 p-3 border-black border shadow-lg shadow-gray-400 cursor-pointer dark:text-white'>
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div>
                        <ul className='flex flex-col w-full gap-12 mt-8 dark:text-white'>
                            <Link onClick={() => handleNavClick('about')} href='/#about'><li className='ml-10 uppercase hover:border-b border-black'>About Me</li></Link>
                            <Link onClick={() => handleNavClick('skills')} href='/#skills'><li className='ml-10 uppercase hover:border-b border-black'>Skills</li></Link>
                            <Link onClick={() => handleNavClick('projects')} href='/#projects'><li className='ml-10 uppercase hover:border-b border-black'>Projects</li></Link>
                            <Link onClick={() => handleNavClick('contact')} href='/#contact'><li className='ml-10 uppercase hover:border-b border-black'>Contact</li></Link>
                        </ul>
                    </div>
                    <div className='pt-40'>
                        <p>Let's Connect</p>
                    </div>
                    <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                        <Link href='https://github.com/Nicholas-Abell' className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer dark:text-white dark:hover:shadow-red-600'>
                            <FaGithub size={25} />
                        </Link>
                        <Link href='https://www.linkedin.com/in/nicholas-abell-348807192/' className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer dark:text-white dark:hover:shadow-red-600'>
                            <FaLinkedin size={25} />
                        </Link>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer dark:text-white dark:hover:shadow-red-600'>
                            <AiOutlineMail size={25} />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer dark:text-white dark:hover:shadow-red-600'>
                            <BsPersonLinesFill size={25} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

