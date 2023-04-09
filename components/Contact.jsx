import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsPersonLinesFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai';
import { HiChevronDoubleUp } from 'react-icons/hi';
import Link from 'next/link';
import profileImg from '../assets/images/profile.jpg';
import Image from 'next/image';


const Contact = () => {
    return (
        <div className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <p id='contact' className='text-xl tracking-widest uppercase text-red-800'>Contact</p>
                <h2 className='py-4'>Get In Touch</h2>
                <div className='grid lg:grid-cols-5 gap-8'>
                    <div className='col-span-3 lg:col-span-2 shadow-xl shadow-gray-400 rounded-xl p-4 text-center'>
                        <div className='p-8 lg:p-4 h-full'>
                            <div className='w-full h-auto'>
                                <Image src={profileImg} className='w-full rounded-xl hover:scale-105 ease-in duration-300' alt='/' />
                            </div>
                            <div className='py-8'>
                                <h2 className='py-4'>Nick Abell</h2>
                                <p>Front End Developer</p>
                            </div>
                            <div>
                                <p className='uppercase pt-12 text-center'>Connect With Me</p>
                                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                        <FaGithub size={25} />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                        <FaLinkedin size={25} />
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
                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                        <div className='p-4'>
                            <form>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name</label>
                                        <input type='text' className='border-2 rounded-lg p-3 flex border-gray-300' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Phone #</label>
                                        <input type='text' className='border-2 rounded-lg p-3 flex border-gray-300' />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input type='email' className='border-2 rounded-lg p-3 flex border-gray-300' />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Subject</label>
                                    <input type='text' className='border-2 rounded-lg p-3 flex border-gray-300' />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea rows='10' className='border-2 rounded-lg p-3 flex border-gray-300' />
                                </div>
                                <button className='w-full p-4 text-gray-800 mt-4'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center py-12'>
                    <Link href='/'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <HiChevronDoubleUp size={30} className='m-auto text-red-800' />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact;