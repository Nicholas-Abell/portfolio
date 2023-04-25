'use client'
import React from 'react';
import { RxDot } from 'react-icons/rx';

export default function Resume() {
    return (
        <div className="bg-gray-100 dark:bg-black text-gray-900 dark:text-gray-300 pt-20 flex print:pt-0 print:scale-70">
            <div className='w-[30vh] bg-blue-500 dark:bg-red-700 text-white dark:text-gray-300 py-4'>
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
                            <h3 className='py-2 underline'>Portfolio</h3>
                            <a href='https://nicholas-abell-mr5i.vercel.app/' className='text-gray-100 text-sm'>https://nicholas-abell-mr5i.vercel.app/</a>
                        </li>
                        <li>
                            <h3 className='py-2 underline'>Phone #</h3>
                            <p className='text-gray-100 text-sm'>812-498-3866</p>
                        </li>
                        <li>
                            <h3 className='py-2 underline'>Email</h3>
                            <p className='text-gray-100 text-xs'>darkforceyoda@gmail.com</p>
                        </li>
                        <li>
                            <h3 className='py-2 underline'>GitHub</h3>
                            <a href='https://github.com/Nicholas-Abell' className='text-gray-100 text-xs'>https://github.com/Nicholas-Abell</a>
                        </li>
                        <li>
                            <h3 className='py-2 underline'>LinkedIn</h3>
                            <a href='https://www.linkedin.com/in/nicholas-abell-348807192/' className='text-gray-100 text-xs'>https://www.linkedin.com/in/nicholas-abell-348807192/</a>
                        </li>
                    </ul>
                </div>
                <div className='bg-blue-800 dark:bg-red-900 p-2 my-2 w-full'>
                    <h3 className='font-extrabold'>Skills</h3>
                </div>
                <div className='py-2'>
                    <h3 className='p-2 font-bold underline underline-offset-4'>Front End</h3>
                    <div className='px-4 flex flex-col gap-2 text-gray-100'>
                        <h3 className='flex items-center'><RxDot />HTML</h3>
                        <h3 className='flex items-center'><RxDot />CSS / SCSS</h3>
                        <h3 className='flex items-center'><RxDot />Javascript / Typescript</h3>
                        <h3 className='flex items-center'><RxDot />React</h3>
                        <h3 className='flex items-center'><RxDot />Next Js</h3>
                        <h3 className='flex items-center'><RxDot />Tailwind CSS</h3>
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
                        A software developer looking to expand his resume. I make mobile responsive websites primarily using react js and tailwind css, but am always excited to learn new frameworks or tech stacks.
                        I have excelled in my current work place for eleven years and am looking to switch to software development full time.
                    </p>
                </div>
                <div className='w-full mt-4 border-t-2 border-b-2 my-8 border-gray-300'>
                    <h1 className="text-3xl font-bold py-2 px-8">Experience</h1>
                </div>
                <div className='pl-8 pb-8'>
                    <div className="w-full">
                        <div className='flex flex-col sm:flex-row sm:gap-6 md:gap-12 lg:gap-32 print:gap-12'>
                            <h3 className="text-xl font-semibold mb-4">2011-<br />present</h3>
                            <div className='flex flex-col gap-8'>
                                <div>
                                    <h2>Shipping/Recieving Clerk</h2>
                                    <h3 className='text-red-700 text-2xl'>Valeo</h3>
                                </div>
                                <ul className='flex flex-col gap-4'>
                                    <li className='flex items-center'>
                                        <RxDot />
                                        <p>Record Data using Google Sheets, VBA, and Javascript</p>
                                    </li>
                                    <li className='flex items-center'>
                                        <RxDot />
                                        <p>Use Barflow and SAP to recieve millions of dollars worth of product daily</p>
                                    </li>
                                    <li className='flex items-center'>
                                        <RxDot />
                                        <p>Direct semi drivers to proper location.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pl-8 pb-8'>
                    <div className="w-full">
                        <div className='flex flex-col sm:flex-row sm:gap-6 md:gap-12 lg:gap-32 print:gap-12'>
                            <h3 className="text-xl font-semibold mb-4">2022-<br />present</h3>
                            <div className='flex flex-col gap-8'>
                                <div>
                                    <h2>Web Development</h2>
                                    <h3 className='text-red-700 text-2xl'>Freelance</h3>
                                </div>
                                <ul className='flex flex-col gap-4'>
                                    <li className='flex items-center'>
                                        <RxDot />
                                        <p>Built a responsive website for a small local business</p>
                                    </li>
                                    <li className='flex items-center'>
                                        <RxDot />
                                        <p>Hosted the site on Hostinger, and purchased domain name.</p>
                                    </li>
                                    <li className='flex items-center'>
                                        <RxDot />
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
                        <div className='flex flex-col sm:flex-row sm:gap-6 md:gap-12 lg:gap-32 print:gap-12'>
                            <h3 className="text-xl font-semibold mb-4">2011-<br />present</h3>
                            <div className='flex flex-col gap-8'>
                                <div>
                                    <h2>High School Diploma</h2>
                                    <h3 className='text-red-700 text-2xl'>Jennings County High School</h3>
                                </div>
                                <ul className='flex flex-col gap-4'>
                                    <li className='flex items-center'>
                                        <RxDot />
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