'use client'
import React from 'react';

export default function Resume() {
    return (
        <div className="bg-gray-100 text-gray-900">
            <div className="container mx-auto px-4 py-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-2">Your Name</h1>
                    <h2 className="text-lg font-semibold">Job Title</h2>
                </div>
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
    )
}