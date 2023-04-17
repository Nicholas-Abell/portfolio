import React from 'react';
import Link from 'next/link';

const Icon = ({ reactIcon, url }) => {
    return (
        <Link href={url} className='dark:text-white dark:hover:text-red-600 dark:bg-black rounded-full shadow-lg shadow-gray-400 dark:hover:shadow-red-600 p-3 hover:shadow-md cursor-pointer ease-in hover:duration-200'>
            {reactIcon}
        </Link>
    )
}

export default Icon;