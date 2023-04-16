import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Project = ({ title, projectURL, img, info }) => {
    return (
        <Link href={projectURL}>
            <div className='relative flex justify-center items-center h-auto w-full shadow-xl shadow-gray-400 dark:hover:shadow-red-600 rounded-xl p-4 group hover:bg-gradient-to-r from-red-800 to-red-500 dark:from-slate-600 dark:to-slate-500'>
                <Image src={img} atl='/' className='rounded-xl group-hover:opacity-10' />
                <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h3 className='text-2xl font-bold tracking-wider text-center dark:text-red-500'>{title}</h3>
                    <p className='pb-4 pt-2 text-white text-center'>{info}</p>
                </div>
            </div>
        </Link>

    )
}

export default Project;