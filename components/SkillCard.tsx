import React from 'react'
import { FaPython, FaGitAlt, FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaNodeJs, FaAws, FaDocker, FaGithub, FaLinux, FaFigma } from 'react-icons/fa'
import { SiCplusplus, SiTailwindcss, SiMysql, SiOracle, SiFlask, SiDjango, SiFirebase, SiTerraform, SiAdobeillustrator, SiAdobephotoshop } from "react-icons/si"
import { BiLogoTypescript, BiLogoJavascript, BiLogoPostgresql } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";

function SkillCard() {
  return (
    <div className='flex flex-col'>
        <div className='flex flex-row mb-6'>
            <div className='text-lg font-bold  sm:text-xl mr-2 text-pink'>
                Core Tools:
            </div>
            <SiCplusplus className='text-white hover:text-pink mr-2' fontSize="34px" />
            <FaPython className='text-white hover:text-pink mr-2' fontSize="34px" />
            <BiLogoJavascript className='text-white hover:text-pink mr-2' fontSize="38px" />
            <BiLogoTypescript className='text-white hover:text-pink mr-2' fontSize="38px" />
            <FaGitAlt className='text-white hover:text-pink mr-2' fontSize="34px" />
        </div>
        <div className='flex flex-row mb-6'>
            <div className='text-lg font-bold  sm:text-xl mr-2 text-pink'>
                Frontend:
            </div>
            <FaHtml5 className='text-white hover:text-pink mr-2' fontSize="34px" />
            <FaCss3Alt className='text-white hover:text-pink mr-2' fontSize="34px" />
            <FaReact className='text-white hover:text-pink mr-2' fontSize="34px" />
            <TbBrandNextjs className='text-white hover:text-pink mr-2' fontSize="34px" />
            <FaBootstrap className='text-white hover:text-pink mr-2' fontSize="34px" />
            <SiTailwindcss className='text-white hover:text-pink mr-2' fontSize="34px" />
        </div>
        <div className='flex flex-row mb-6'>
            <div className='text-lg font-bold  sm:text-xl mr-2 text-pink'>
                Backend:
            </div>
            <FaNodeJs className='text-white hover:text-pink mr-2' fontSize="34px" />
            <SiFlask className='text-white hover:text-pink mr-2' fontSize="34px" />
            <SiDjango className='text-white hover:text-pink mr-2' fontSize="34px" />
            <BiLogoPostgresql className='text-white hover:text-pink mr-2' fontSize="34px" />
            <SiMysql className='text-white hover:text-pink mr-2' fontSize="34px" />
            <SiOracle className='text-white hover:text-pink mr-2' fontSize="34px" />
            <SiFirebase className='text-white hover:text-pink mr-2' fontSize="34px" />
        </div>
        <div className='flex flex-row'>
            <div className='text-lg font-bold  sm:text-xl mr-2 text-pink'>
                Other Tools:
            </div>
            <FaGithub className='text-white hover:text-pink mr-2' fontSize="34px" />
            <FaAws className='text-white hover:text-pink mr-2' fontSize="34px" />
            <FaDocker className='text-white hover:text-pink mr-2' fontSize="34px" />
            <SiTerraform className='text-white hover:text-pink mr-2' fontSize="34px" />
            <FaLinux className='text-white hover:text-pink mr-2' fontSize="34px" />
            <FaFigma className='text-white hover:text-pink mr-2' fontSize="34px" />
            <SiAdobeillustrator className='text-white hover:text-pink mr-2' fontSize="34px" />
            <SiAdobephotoshop className='text-white hover:text-pink mr-2' fontSize="34px" />
        </div>
    </div>
  )
}

export default SkillCard