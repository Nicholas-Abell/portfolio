import Image from 'next/image';
import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';

export default function SMSConstruction() {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
                <Image className='absolute z-1' layout='fill' alt='/' />
                <div className='absolute text-white z-40 top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h2 className='py-2'>SMS Construction & Remodeling</h2>
                    <h3>React Js | Tailwind | Firebase</h3>
                </div>
            </div>
            <div className='mx-auto max-w-[1240px] m-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt cupiditate repudiandae aliquam praesentium in facere, sed tenetur asperiores quis! Impedit sequi, nostrum aperiam nulla iusto sunt! Dolorum possimus quasi explicabo.</p>
                    <button className='px-8 py-2 mt-4 mr-8'>Live</button>
                    <button className='px-8 py-2 mt-4'>Github</button>
                </div>
                <div className=' col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <p className='text-center font-bold pb-2'>Tecnologies</p>
                    <div className=''>
                        <p className='text-gray-600 py-2 flex justify-center items-center gap-4'>
                            <RiRadioButtonFill /> React
                        </p>
                        <p className='text-gray-600 py-2 flex justify-center items-center gap-4'>
                            <RiRadioButtonFill /> React
                        </p>
                        <p className='text-gray-600 py-2 flex justify-center items-center gap-4'>
                            <RiRadioButtonFill /> React
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
