import React from 'react';
gitimport Image from 'next/image';


const About = () => {
    return (
        <div id='about' className='w-full p-2 flex items-center py-10'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <h1 className='py-4 uppercase text-xl tracking-widest dark:text-red-600'>About Me</h1>
                    <p className='text-gray-700 dark:text-gray-300 py-2'>
                        A software developer looking to expand his resume. I make mobile responsive websites primarily using react js and tailwind css, but am always excited to learn new frameworks or tech stacks.
                        I have excelled in my current work place for eleven years and am looking to switch to software development full time.
                    </p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 dark:hover:shadow-red-600 rounded-xl flex items-center justify-center p-12 md:p-4 md:hover:scale-105 duration-300 neon'>
                    <Image src={profileTwo} className='rounded-xl' />
                </div>
            </div>
        </div>
    )
}

export default About