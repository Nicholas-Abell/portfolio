import React from 'react';

const Skill = ({ icon, title }) => {
    return (
        <div className='p-6 shadow-lg dark:shadow-gray-300 dark:hover:shadow-red-600 dark:hover:text-red-600 dark:text-gray-500 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    {icon}
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>{title}</h3>
                </div>
            </div>
        </div>)
}

export default Skill