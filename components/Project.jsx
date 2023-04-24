import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Project = ({ title, projectURL, img, info }) => {
    return (
        <Link href={projectURL}>
            <div className='relative text-black flex justify-center items-center h-auto w-full shadow-xl shadow-gray-400 hover:shadow-[#8a2be2] dark:hover:shadow-red-600 ease-in hover:duration-200 rounded-xl p-4 group hover:bg-gradient-to-r from-slate-600 to-slate-200 dark:from-red-900 dark:to-orange-700'>
                <Image src={img} atl='/' className='rounded-xl group-hover:opacity-10 h-auto' />
                <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h3 className='text-2xl font-bold tracking-wider text-center'>{title}</h3>
                    <p className='pb-4 pt-2 text-white text-center'>{info}</p>
                </div>
            </div>
        </Link>

    )
}

export default Project;