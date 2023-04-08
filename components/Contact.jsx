import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsPersonLinesFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai';
import { HiChevronDoubleUp } from 'react-icons/hi';
import Link from 'next/link';

const Contact = () => {
    return (
        <div className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <p className='text-xl tracking-widest uppercase text-red-800'>Contact</p>
                <h2 className='py-4'>Get In Toucj</h2>
                <div className='grid lg:grid-cols-5 gap-8'>
                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full'>
                            <div>
                                <img className='rounded-xl hover:scale-105 ease-in duration-300' src='' alt='/' />
                            </div>
                            <div>
                                <h2 className='py-2'>Name Here</h2>
                                <p>Front End Developer</p>
                                <p className='py-4'>Availasj sdf df kfjngdf asdjflag</p>
                            </div>
                            <div>
                                <p className='uppercase pt-8'>Connect With Me</p>
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
                                <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
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