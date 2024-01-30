"use client"
import React, { RefObject } from 'react'
import { resume, github, linkedin, email, instagram } from '@/public/content'
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa'

interface PanelProps {
    aboutRef: RefObject<HTMLDivElement>;
    experienceRef: RefObject<HTMLDivElement>;
    projectsRef: RefObject<HTMLDivElement>;
    skillsRef: RefObject<HTMLDivElement>;
}

function Panel(props: PanelProps) {
    const scrollToExperience = () => {
        props.experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToProjects = () => {
        props.projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToAbout = () => {
        props.aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToSkills = () => {
        props.skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    
        <div className='hidden md:flex lg:flex h-screen w-2/5 flex-col items-center justify-center m-0 p-0 pl-14 pt-10 fixed float-left'>
            <div className='font-titleFont pt-4'>
                <div className='flex flex-col text-pink text-5xl items-center justify-center'>
                    <div>HAMZA SIDDIQUI</div>
                    <div className='text-xl text-white'>computer engineering undergrad</div>
                    <div className='text-xl text-white'>with a passion for web and software engineering</div>
                </div>
            </div>

            <div className='font-bodyFont font-medium text-lg text-white flex flex-col center my-24'>
                <button className='w-24 group hover:text-pink' onClick={scrollToAbout}>
                    About
                    <div className='w-0 h-1 bg-pink transition-all duration-300 ease-in-out group-hover:w-full' />
                </button>
                <button className='w-24 group hover:text-pink' onClick={scrollToExperience}>
                    Experience
                    <div className='w-0 h-1 bg-pink transition-all duration-300 ease-in-out group-hover:w-full' />
                </button>
                <button className='w-24 group hover:text-pink' onClick={scrollToProjects}>
                    Projects
                    <div className='w-0 h-1 bg-pink transition-all duration-300 ease-in-out group-hover:w-full' />
                </button>
                <button className='w-24 group hover:text-pink' onClick={scrollToSkills}>
                    Skills
                    <div className='w-0 h-1 bg-pink transition-all duration-300 ease-in-out group-hover:w-full' />
                </button>
                <a className='w-24 group text-center hover:text-pink' href={resume.link} target='_blank'>
                    Resume
                    <div className='w-0 h-1 bg-pink transition-all duration-300 ease-in-out group-hover:w-full' />
                </a>
            </div>

            <div className='font-bodyFont flex flex-row'>
                <a className='mr-3' href={linkedin.link} target="_blank">
                    <FaLinkedin className='text-white hover:text-pink' fontSize="28px" />
                </a>
                <a className='mr-3' href={github.link} target="_blank">
                    <FaGithub className='text-white hover:text-pink' fontSize="28px" />
                </a>
                <a className='mr-3' href={email.link} target="_blank">
                    <FaEnvelope className='text-white hover:text-pink' fontSize="28px" />
                </a> 
                <a className='mr-3' href={instagram.link} target="_blank">
                    <FaInstagram className='text-white hover:text-pink' fontSize="28px" />
                </a> 
            </div>
        </div>

  )
}

export default Panel