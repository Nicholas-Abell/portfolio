"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsPersonLinesFill } from 'react-icons/bs'

const Navbar = () => {
    const [mobileNav, setMobileNav] = useState(false);

    const handleMobileNav = () => {
        setMobileNav(!mobileNav);
    }

    return (
        <div className='w-full fixed h-20 shadow-xl z-50'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <h1>Nick A</h1>
                <ul className='hidden md:flex'>
                    <Link href='/'><li className='ml-10 uppercase hover:border-b border-black'>About Me</li></Link>
                    <Link href='/'><li className='ml-10 uppercase hover:border-b border-black'>About Me</li></Link>
                    <Link href='/'><li className='ml-10 uppercase hover:border-b border-black'>About Me</li></Link>
                    <Link href='/'><li className='ml-10 uppercase hover:border-b border-black'>About Me</li></Link>
                </ul>
                <div onClick={handleMobileNav} className='md:hidden'>
                    <AiOutlineMenu size={25} className='cursor-pointer' />
                </div>
            </div>
            <div className={mobileNav ? 'fixed left-0 top-0 bg-black/70 h-screen w-full' : 'hidden'}>
                <div className={mobileNav
                    ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md-[45%] h-screen bg-white p-10 ease-in duration-500'
                    : 'fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md-[45%] h-screen bg-white p-10 ease-in duration-500'}>
                    <div className='w-full flex justify-between items-center p-4 border-b-2 border-gray-400'>
                        <h1>Nick A</h1>
                        <div onClick={handleMobileNav} className='rounded-full background-gray-300 p-3 border-black border shadow-lg shadow-gray-400 cursor-pointer'>
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div>
                        <ul className='flex flex-col w-full gap-12 mt-8'>
                            <Link href='/'><li className='ml-10 uppercase hover:border-b border-black'>About Me</li></Link>
                            <Link href='/'><li className='ml-10 uppercase hover:border-b border-black'>About Me</li></Link>
                            <Link href='/'><li className='ml-10 uppercase hover:border-b border-black'>About Me</li></Link>
                            <Link href='/'><li className='ml-10 uppercase hover:border-b border-black'>About Me</li></Link>
                        </ul>
                    </div>
                    <div className='pt-40'>
                        <p>Let's Connect</p>
                    </div>
                    <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <FaLinkedin size={25} />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <FaGithub size={25} />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineMail size={25} />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <BsPersonLinesFill size={25} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar