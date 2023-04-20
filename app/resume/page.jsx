'use client'
import React from 'react';

export default function Resume() {
    return (
        <div className="bg-gray-100 text-gray-900 pt-20 flex">
            <div className='w-[30vh] bg-blue-500 text-white py-4'>
                <div className='p-2'>
                    <h2>Nick Abell</h2>
                    <p>Front End Developer</p>
                </div>
                <div className='bg-blue-800 p-2 my-2 w-full'>
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
                            <p className='text-gray-100'>asdfasdfsf</p>
                        </li>
                        <li>
                            <h3 className='py-2 underline'>LinkedIn</h3>
                            <p className='text-gray-100'>aldfjlaskdjf.com</p>
                        </li>
                    </ul>
                </div>
                <div className='bg-blue-800 p-2 my-2 w-full'>
                    <h3 className='font-extrabold'>Skills</h3>
                </div>
                <div className='px-2 flex flex-col gap-2'>
                    <h3>Phone #</h3>
                    <h3>Phone #</h3>
                    <h3>Phone #</h3>
                    <h3>Phone #</h3>
                </div>
            </div>
            <div className="flex flex-col w-full">
                <div className='px-8 py-2'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In eos, culpa, similique, vel alias ipsum natus dolores quo sit repellendus dignissimos voluptate doloribus est fuga excepturi exercitationem quibusdam impedit ratione.
                    </p>
                </div>
                <div className='w-full mt-4 border-t-2 border-b-2 border-gray-300'>
                    <h1 className="text-3xl font-bold py-2 px-8">Experience</h1>
                </div>
                <div className='pl-8'>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Contact</h3>
                            <ul>
                                <li className="mb-2"><span className="font-semibold">Phone:</span> Your Phone Number</li>
                                <li className="mb-2"><span className="font-semibold">Email:</span> Your Email Address</li>
                                <li className="mb-2"><span className="font-semibold">Website:</span> Your Website</li>
                                <li className="mb-2"><span className="font-semibold">LinkedIn:</span> Your LinkedIn Profile</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Summary</h3>
                            <p>Your summary goes here.</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-4">Skills</h3>
                        <ul className="flex flex-wrap">
                            <li className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-full mr-2 mb-2">Skill 1</li>
                            <li className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-full mr-2 mb-2">Skill 2</li>
                            <li className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-full mr-2 mb-2">Skill 3</li>
                            <li className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-full mr-2 mb-2">Skill 4</li>
                        </ul>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-4">Experience</h3>
                        <div className="mb-4">
                            <h4 className="text-lg font-semibold">Job Title</h4>
                            <p className="text-md font-semibold">Company Name</p>
                            <p className="text-md font-semibold">Date Range</p>
                            <ul className="ml-4">
                                <li className="mb-2">Experience 1</li>
                                <li className="mb-2">Experience 2</li>
                                <li className="mb-2">Experience 3</li>
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h4 className="text-lg font-semibold">Job Title</h4>
                            <p className="text-md font-semibold">Company Name</p>
                            <p className="text-md font-semibold">Date Range</p>
                            <ul className="ml-4">
                                <li className="mb-2">Experience 1</li>
                                <li className="mb-2">Experience 2</li>
                                <li className="mb-2">Experience 3</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}