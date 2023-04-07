import React from 'react'

const About = () => {
    return (
        <div className='w-full md:h-screen p-2 flex items-center py-10'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <h1 className='py-4 uppercase text-xl tracking-widest'>About Me</h1>
                    <p className='text-gray-700 py-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis aperiam voluptate laborum! Magni nobis perferendis voluptate veritatis soluta provident suscipit voluptas ipsam ea doloribus consequatur, ipsa incidunt dolorum illo minus!</p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 duration-300'>
                    <img className='rounded-xl' />
                </div>
            </div>
        </div>
    )
}

export default About