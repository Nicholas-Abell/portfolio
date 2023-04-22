'use client';
import React from 'react';
import { HiChevronDoubleUp } from 'react-icons/hi';
import profileImg from '../assets/images/profile.jpg';
import Image from 'next/image';
import IconPalette from './IconPalette';


const Contact = () => {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <p id='contact' className='text-xl tracking-widest uppercase text-red-800 dark:text-red-600'>Contact</p>
                <h2 className='py-4 dark:text-gray-400'>Get In Touch</h2>
                <div className='grid lg:grid-cols-5 gap-8'>
                    <div className='col-span-3 lg:col-span-2 shadow-xl shadow-gray-400 rounded-xl p-4 text-center'>
                        <div className='p-8 lg:p-4 h-full'>
                            <div className='w-full h-auto flex justify-center items-center'>
                                <Image src={profileImg} className='w-[50%] lg:w-full rounded-xl hover:scale-105 ease-in duration-300' alt='/' />
                            </div>
                            <div className='py-8'>
                                <h2 className='py-4 dark:text-red-600'>Nick Abell</h2>
                                <p className='dark:text-gray-400'>Front End Developer</p>
                            </div>
                            <div>
                                <p className='uppercase pt-12 text-center dark:text-gray-300'>Connect With Me</p>
                                <IconPalette />
                            </div>
                        </div>
                    </div>
                    <div id='contact' className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 dark:text-gray-400'>
                        <div className='p-4'>
                            <form action="https://formsubmit.co/darkforceyoda@gmail.com" method="POST">
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label name='name' className='uppercase text-sm py-2'>Name</label>
                                        <input type='text' className='border-2 rounded-lg p-3 flex border-gray-300 dark:border-red-900 dark:bg-gray-700 dark:text-gray-300' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Phone #</label>
                                        <input name='phone' type='text' className='border-2 rounded-lg p-3 flex border-gray-300 dark:border-red-900 dark:bg-gray-700 dark:text-gray-300' />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input name='email' type='email' className='border-2 rounded-lg p-3 flex border-gray-300 dark:border-red-900 dark:bg-gray-700 dark:text-gray-300' />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Subject</label>
                                    <input name='subject' type='text' className='border-2 rounded-lg p-3 flex border-gray-300 dark:border-red-900 dark:bg-gray-700 dark:text-gray-300' />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea name='text-area' rows='10' className='border-2 rounded-lg p-3 flex border-gray-300 dark:border-red-900 dark:bg-gray-700 dark:text-gray-300' />
                                </div>
                                {/* <input type="hidden" name="_next" value="/" /> */}
                                <input type="hidden" name="_autoresponse" value="Thank you for contacting me. I will get in touch soon." />
                                <button className='w-full my-4 p-4 hover:duration-200 ease-in text-gray-800 dark:text-gray-300 dark:hover:shadow-red-600 hover:shadow-md dark:hover:text-red-600'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center py-12'>
                    <div onClick={scrollToTop} className='neon rounded-full cursor-pointer p-3'>
                        <HiChevronDoubleUp size={30} className='m-auto ' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;