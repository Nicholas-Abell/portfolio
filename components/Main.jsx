'use client';
import React from 'react';
import IconPalette from './IconPalette';

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
                        A front end developer looking to make a difference on your next project.
                    </p>
                    <IconPalette />
                </div>
            </div>

        </div>
    )
}

export default Main;