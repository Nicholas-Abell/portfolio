import React from 'react';
import Icon from './Icon';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsPersonLinesFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai';
import { HiChevronDoubleUp } from 'react-icons/hi';

const IconPalette = () => {

    const scrollToEmailForm = (id) => {
        const skillsElement = document.getElementById(id);
        const offset = 90;
        const yCoordinate = skillsElement.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: yCoordinate, behavior: 'smooth' })
    }

    return (
        <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <Icon reactIcon={<FaGithub size={25} />} url={'https://github.com/Nicholas-Abell'} />
            <Icon reactIcon={<FaLinkedin size={25} />} url={'https://www.linkedin.com/in/nicholas-abell-348807192/'} />
            <div onClick={() => scrollToEmailForm('contact')} className='neon rounded-full cursor-pointer p-3'>
                <AiOutlineMail size={25} />
            </div>
            <Icon reactIcon={<BsPersonLinesFill size={25} />} url={'/resume'} />
        </div>
    )
}

export default IconPalette;