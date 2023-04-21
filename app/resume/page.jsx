'use client'
import React from 'react';
import { RxDot } from 'react-icons/rx';

export default function Resume() {
    return (
        <div className="bg-gray-100 text-gray-900 pt-20 flex print-ready">
            <div className='w-[30vh] bg-blue-500 dark:bg-red-700 text-white py-4'>
                <div className='p-2'>
                    <h2>Nick Abell</h2>
                    <p>Front End Developer</p>
                </div>
                <div className='bg-blue-800 dark:bg-red-900 p-2 w-full'>
                    <h3 className='font-extrabold uppercase'>Personal Info</h3>
                </div>
                <div className='p-2 flex flex-col'>
                    <ul>
                        <li>
                            <h3 className='py-2 underline'>Phone #</h3>
                            <p className='text-gray-100'>812-498-3866</p>
                        </li>
                        <li>
                            <h3 className='py-2 underline'>Email</h3>
                            <p className='text-gray-100'>darkforceyoda@gmail.com</p>
                        </li>
                        <li>
                            <h3 className='py-2 underline'>GitHub</h3>
                            <a href='https://github.com/Nicholas-Abell' className='text-gray-100 text-sm'>https://github.com/Nicholas-Abell</a>
                        </li>
                        <li>
                            <h3 className='py-2 underline'>LinkedIn</h3>
                            <a className='text-gray-100 text-sm'>https://www.linkedin.com/in/nicholas-abell-348807192/</a>
                        </li>
                    </ul>
                </div>
                <div className='dark:bg-red-900g p-2 my-2 w-full'>
                    <h3 className='font-extrabold'>Skills</h3>
                </div>
                <div className='py-2'>
                    <h3 className='p-2 font-bold underline underline-offset-4'>Front End</h3>
                    <div className='px-4 flex flex-col gap-2 text-gray-100'>
                        <h3 className='flex items-center'><RxDot />HTML</h3>
                        <h3 className='flex items-center'><RxDot />CSS / SCSS</h3>
                        <h3 className='flex items-center'><RxDot />Javascript / Typescripy</h3>
                        <h3 className='flex items-center'><RxDot />React</h3>
                        <h3 className='flex items-center'><RxDot />Next Js</h3>
                    </div>
                </div>
                <div className='py-2'>
                    <h3 className='p-2 font-bold underline underline-offset-4'>Back End</h3>
                    <div className='px-4 flex flex-col gap-2 text-gray-100'>
                        <h3 className='flex items-center'><RxDot />Firebase</h3>
                    </div>
                </div>
                <div className='py-2'>
                    <h3 className='p-2 font-bold underline underline-offset-4'>Other</h3>
                    <div className='px-4 flex flex-col gap-2 text-gray-100'>
                        <h3 className='flex items-center'><RxDot />VBA</h3>
                        <h3 className='flex items-center'><RxDot />Google Sheets</h3>
                        <h3 className='flex items-center'><RxDot />Forklift</h3>
                        <h3 className='flex items-center'><RxDot />Swing Reach</h3>
                        <h3 className='flex items-center'><RxDot />Scissor Lift</h3>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full">
                <div className='px-8 pt-4'>
                    <p>
                        A shipping/recieving clerk with an aptitude for technical learning. Having built several websites and web based applications I would like to turn my passion into a career.
                    </p>
                </div>
                <div className='w-full mt-4 border-t-2 border-b-2 my-8 border-gray-300'>
                    <h1 className="text-3xl font-bold py-2 px-8">Experience</h1>
                </div>
                <div className='pl-8 pb-8'>
                    <div className="w-full">
                        <div className='flex gap-32'>
                            <h3 className="text-xl font-semibold mb-4">2011-<br />present</h3>
                            <div className='flex flex-col gap-8'>
                                <div>
                                    <h2>Shipping/Recieving Clerk</h2>
                                    <h3 className='text-red-700 text-2xl'>Valeo</h3>
                                </div>
                                <ul className='flex flex-col gap-4'>
                                    <li>
                                        <p>Record Data using Google Sheets, VBA, and Javascript</p>
                                    </li>
                                    <li>
                                        <p>Use Barflow and SAP to recieve millions of dollars worth of product daily</p>
                                    </li>
                                    <li>
                                        <p>Direct Semi drivers to proper location.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pl-8 pb-8'>
                    <div className="w-full">
                        <div className='flex gap-32'>
                            <h3 className="text-xl font-semibold mb-4">2022-<br />present</h3>
                            <div className='flex flex-col gap-8'>
                                <div>
                                    <h2>Web Development</h2>
                                    <h3 className='text-red-700 text-2xl'>Freelance</h3>
                                </div>
                                <ul className='flex flex-col gap-4'>
                                    <li>
                                        <p>Built a responsive website for a small local business</p>
                                    </li>
                                    <li>
                                        <p>Hosted the site on Hostinger, and purchased domain name.</p>
                                    </li>
                                    <li>
                                        <p>Made sure the site was accessible via the most popular search engines using SEO practices</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full mt-4 border-t-2 border-b-2 my-8 border-gray-300'>
                    <h1 className="text-3xl font-bold py-2 px-8">Education</h1>
                </div>
                <div className='pl-8 pb-8'>
                    <div className="w-full">
                        <div className='flex gap-32'>
                            <h3 className="text-xl font-semibold mb-4">2011-<br />present</h3>
                            <div className='flex flex-col gap-8'>
                                <div>
                                    <h2>High School Diploma</h2>
                                    <h3 className='text-red-700 text-2xl'>Jennings County High School</h3>
                                </div>
                                <ul className='flex flex-col gap-4'>
                                    <li>
                                        <p>School News Paper Editor</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}