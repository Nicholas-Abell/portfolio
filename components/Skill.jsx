import React from 'react';

const Skill = ({ icon, title }) => {
    return (
        <div className='p-6 neon rounded-xl'>
            <div className='grid grid-cols-1 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    {icon}
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>{title}</h3>
                </div>
            </div>
        </div>)
}

export default Skill;