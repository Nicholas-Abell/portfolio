import Image from 'next/image';
import React from 'react';
import wordleImage from '../../assets/images/wordle_clone.jpeg'
import { RiRadioButtonFill } from 'react-icons/ri';

export default function SMSConstruction() {
    return (
        <div className='w-full overflow-hidden'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] z-10 bg-black/60' />
                <Image src={wordleImage} className='absolute z-1' layout="fill" objectFit="cover" objectPosition="center" alt='/Movie Database' />
                <div className='absolute text-white pl-8 z-40 top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h2 className='py-2'>Wordle Game</h2>
                    <h3>React Js</h3>
                </div>
            </div>
            <div className='mx-auto max-w-[1240px] grid md:grid-cols-5 gap-8 p-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p className='py-4'>A clone of the popular game wordle.
                        <br />Guess a five letter word.
                        <br />Red: incorrect letter
                        <br />Yellow: correct letter wrong space
                        <br />Green: correct letter and space </p>
                    <div className='flex items-center'>
                        <button className='px-8 py-2 mt-4 mr-8 flex justify-center items-center gap-4'>
                            <a href='https://nicholas-abell.github.io/wordle_clone/'>Live</a>
                        </button>
                        <button className='px-8 py-2 mt-4 mr-8 flex justify-center items-center gap-4'>
                            <a href='https://github.com/Nicholas-Abell/wordle_clone'>Github</a>
                        </button>
                    </div>
                </div>
                <div className=' col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl px-4 py-12 flex flex-col justify-between items-center'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div>
                        <p className='text-gray-600 py-2 flex items-center gap-4'>
                            <RiRadioButtonFill /> React
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}