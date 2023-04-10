import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsPersonLinesFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai';

const Main = () => {

    return (
        <div id='home' className='w-full h-screen text-center flex justify-center items-center'>
            <div className='max-w-[1240px] w-full h-full p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest pb-4 text-gray-600'>
                        Looking to Improve your Company
                    </p>
                    <h1 className='text-gray-700'>
                        I'm
                        <span className='text-red-800 px-2'>
                            Nicholas Abell
                        </span>
                    </h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate cumque ipsam animi ratione mollitia laudantium qui veritatis, quaerat libero recusandae consequuntur quibusdam voluptatum aut, unde distinctio alias. Numquam, ab voluptates.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <Link href='https://github.com/Nicholas-Abell' className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <FaGithub size={25} />
                        </Link>
                        <Link href='https://www.linkedin.com/in/nicholas-abell-348807192/' className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <FaLinkedin size={25} />
                        </Link>
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

export default Main