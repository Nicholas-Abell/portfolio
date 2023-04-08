import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Project = ({ title, projectURL, img, info }) => {
    return (
        <div className='relative flex justify-center items-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-red-800 to-red-500'>
            <Image src={img} atl='/' className='rounded-xl group-hover:opacity-10' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl font-bold tracking-wider text-center'>{title}</h3>
                <p className='pb-4 pt-2 text-white text-center'>{info}</p>
                <Link href={projectURL}>
                    <p>Github</p>
                </Link>
            </div>
        </div>)
}

export default Project;