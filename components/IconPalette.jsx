'use client'
import React from 'react';
import Icon from './Icon';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsPersonLinesFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai';

const IconPalette = ({ setMobileNav, nav }) => {

    const scrollToEmailForm = (id) => {
        nav ? setMobileNav(false) : null
        const skillsElement = document.getElementById(id);
        if (skillsElement) {
            const offset = 90;
            const yCoordinate = skillsElement.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: yCoordinate, behavior: 'smooth' });
        } else {git 
            window.location.href = '/';
        }
    }


    return (
        <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <Icon reactIcon={<FaGithub size={25} />} url={'https://github.com/Nicholas-Abell'} />
            <Icon reactIcon={<FaLinkedin size={25} />} url={'https://www.linkedin.com/in/nicholas-abell-348807192/'} />
            <div onClick={() => scrollToEmailForm('email')} className='neon rounded-full cursor-pointer p-3'>
                <AiOutlineMail size={25} />
            </div>
            <Icon reactIcon={<BsPersonLinesFill size={25} />} url={'/resume'} />
        </div>
    )
}

export default IconPalette;