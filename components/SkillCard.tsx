import React from 'react'
import { FaPython, FaGitAlt, FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaNodeJs, FaAws, FaDocker, FaGithub, FaLinux, FaFigma } from 'react-icons/fa'
import { SiCplusplus, SiTailwindcss, SiMysql, SiOracle, SiFlask, SiDjango, SiFirebase, SiTerraform, SiAdobeillustrator, SiAdobephotoshop, SiExpress, SiMongodb, SiRedux } from "react-icons/si"
import { BiLogoTypescript, BiLogoJavascript, BiLogoPostgresql } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";

function SkillCard() {
  return (
    <div className='text-white max-w-2xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-2'>
            <div className='font-semibold'>Core Tools</div>
            <div className='md:col-span-4 w-screen'>
                <div className='inline-block group'>
                    <div className='flex items-center bg-white rounded-md p-1 mr-2 transition-all duration-300'>
                        <SiCplusplus className='text-blue' fontSize="34px" />
                        <div className='flex-0 overflow-hidden transition-all duration-300 max-w-0 group-hover:max-w-xs'>
                            <span className='text-blue ml-2 whitespace-nowrap font-bold'>C++</span>
                        </div>
                    </div>
                </div>
                <div className='inline-block group'>
                    <div className='flex items-center bg-white rounded-md p-1 mr-2 transition-all duration-300'>
                        <FaPython className='text-blue' fontSize="34px" />
                        <div className='flex-0 overflow-hidden transition-all duration-300 max-w-0 group-hover:max-w-xs'>
                            <span className='text-blue ml-2 whitespace-nowrap font-bold'>Python</span>
                        </div>
                    </div>
                </div>
                <div className='inline-block group'>
                    <div className='flex items-center bg-white rounded-md p-1 mr-2 transition-all duration-300'>
                        <BiLogoJavascript className='text-blue' fontSize="35px" />
                        <div className='flex-0 overflow-hidden transition-all duration-300 max-w-0 group-hover:max-w-xs'>
                            <span className='text-blue ml-2 whitespace-nowrap font-bold'>JavaScript</span>
                        </div>
                    </div>
                </div>
                <div className='inline-block group'>
                    <div className='flex items-center bg-white rounded-md p-1 mr-2 transition-all duration-300'>
                        <BiLogoTypescript className='text-blue' fontSize="35px" />
                        <div className='flex-0 overflow-hidden transition-all duration-300 max-w-0 group-hover:max-w-xs'>
                            <span className='text-blue ml-2 whitespace-nowrap font-bold'>TypeScript</span>
                        </div>
                    </div>
                </div>
                <div className='inline-block group'>
                    <div className='flex items-center bg-white rounded-md p-1 mr-2 transition-all duration-300'>
                        <FaGitAlt className='text-blue' fontSize="34px" />
                        <div className='flex-0 overflow-hidden transition-all duration-300 max-w-0 group-hover:max-w-xs'>
                            <span className='text-blue ml-2 whitespace-nowrap font-bold'>Git</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='font-semibold'>Front End</div>
            <div className='md:col-span-4 w-screen'>
                <div className='inline-block group'>
                    <div className='flex items-center bg-white rounded-md p-1 mr-2 transition-all duration-300'>
                        <FaHtml5 className='text-blue' fontSize="34px" />
                        <div className='flex-0 overflow-hidden transition-all duration-300 max-w-0 group-hover:max-w-xs'>
                            <span className='text-blue ml-2 whitespace-nowrap font-bold'>HTML</span>
                        </div>
                    </div>
                </div>
                <div className='inline-block group'>
                    <div className='flex items-center bg-white rounded-md p-1 mr-2 transition-all duration-300'>
                        <FaCss3Alt className='text-blue' fontSize="34px" />
                        <div className='flex-0 overflow-hidden transition-all duration-300 max-w-0 group-hover:max-w-xs'>
                            <span className='text-blue ml-2 whitespace-nowrap font-bold'>CSS</span>
                        </div>
                    </div>
                </div>
                <div className='inline-block group'>
                    <div className='flex items-center bg-white rounded-md p-1 mr-2 transition-all duration-300'>
                        <FaReact className='text-blue' fontSize="34px" />
                        <div className='flex-0 overflow-hidden transition-all duration-300 max-w-0 group-hover:max-w-xs'>
                            <span className='text-blue ml-2 whitespace-nowrap font-bold'>React</span>
                        </div>
                    </div>
                </div>
                <div className='inline-block group'>
                    <div className='flex items-center bg-white rounded-md p-1 mr-2 transition-all duration-300'>
                        <SiRedux className='text-blue' fontSize="34px" />
                        <div className='flex-0 overflow-hidden transition-all duration-300 max-w-0 group-hover:max-w-xs'>
                            <span className='text-blue ml-2 whitespace-nowrap font-bold'>Redux</span>
                        </div>
                    </div>
                </div>
                <div className='inline-block group'>
                    <div className='flex items-center bg-white rounded-md p-1 mr-2 transition-all duration-300'>
                        <TbBrandNextjs className='text-blue' fontSize="34px" />
                        <div className='flex-0 overflow-hidden transition-all duration-300 max-w-0 group-hover:max-w-xs'>
                            <span className='text-blue ml-2 whitespace-nowrap font-bold'>Next</span>
                        </div>
                    </div>
                </div>
                <div className='inline-block group'>
                    <div className='flex items-center bg-white rounded-md p-1 mr-2 transition-all duration-300'>
                        <SiTailwindcss className='text-blue' fontSize="34px" />
                        <div className='flex-0 overflow-hidden transition-all duration-300 max-w-0 group-hover:max-w-xs'>
                            <span className='text-blue ml-2 whitespace-nowrap font-bold'>Tailwindcss</span>
                        </div>
                    </div>
                </div>
                <div className='inline-block group'>
                    <div className='flex items-center bg-white rounded-md p-1 mr-2 transition-all duration-300'>
                        <FaBootstrap className='text-blue' fontSize="34px" />
                        <div className='flex-0 overflow-hidden transition-all duration-300 max-w-0 group-hover:max-w-xs'>
                            <span className='text-blue ml-2 whitespace-nowrap font-bold'>Bootstrap</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='font-semibold'>Back End</div>
            <div className='md:col-span-4 w-screen'>
                <div className='inline-block group'>
                    <div className='flex items-center bg-white rounded-md p-1 mr-2 transition-all duration-300'>
                        <FaNodeJs className='text-blue' fontSize="34px" />
                        <div className='flex-0 overflow-hidden transition-all duration-300 max-w-0 group-hover:max-w-xs'>
                            <span className='text-blue ml-2 whitespace-nowrap font-bold'>Node</span>
                        </div>
                    </div>
                </div>
                <div className='inline-block group'>
                    <div className='flex items-center bg-white rounded-md p-1 mr-2 transition-all duration-300'>
                        <SiExpress className='text-blue' fontSize="34px" />
                        <div className='flex-0 overflow-hidden transition-all duration-300 max-w-0 group-hover:max-w-xs'>
                            <span className='text-blue ml-2 whitespace-nowrap font-bold'>Express</span>
                        </div>
                    </div>
                </div>
                <div className='inline-block group'>
                    <div className='flex items-center bg-white rounded-md p-1 mr-2 transition-all duration-300'>
                        <SiFlask className='text-blue' fontSize="34px" />
                        <div className='flex-0 overflow-hidden transition-all duration-300 max-w-0 group-hover:max-w-xs'>
                            <span className='text-blue ml-2 whitespace-nowrap font-bold'>Flask</span>
                        </div>
                    </div>
                </div>
                <div className='inline-block group'>
                    <div className='flex items-center bg-white rounded-md p-1 mr-2 transition-all duration-300'>
                        <SiDjango className='text-blue' fontSize="34px" />
                        <div className='flex-0 overflow-hidden transition-all duration-300 max-w-0 group-hover:max-w-xs'>
                            <span className='text-blue ml-2 whitespace-nowrap font-bold'>Django</span>
                        </div>
                    </div>
                </div>
                <div className='inline-block group'>
                    <div className='flex items-center bg-white rounded-md p-1 mr-2 transition-all duration-300'>
                        <SiMongodb className='text-blue' fontSize="34px" />
                        <div className='flex-0 overflow-hidden transition-all duration-300 max-w-0 group-hover:max-w-xs'>
                            <span className='text-blue ml-2 whitespace-nowrap font-bold'>MongoDB</span>
                        </div>
                    </div>
                </div>
                <div className='inline-block group'>
                    <div className='flex items-center bg-white rounded-md p-1 mr-2 transition-all duration-300'>
                        <BiLogoPostgresql className='text-blue' fontSize="34px" />
                        <div className='flex-0 overflow-hidden transition-all duration-300 max-w-0 group-hover:max-w-xs'>
                            <span className='text-blue ml-2 whitespace-nowrap font-bold'>PostgreSQL</span>
                        </div>
                    </div>
                </div>
                <div className='inline-block group'>
                    <div className='flex items-center bg-white rounded-md p-1 mr-2 transition-all duration-300'>
                        <SiMysql className='text-blue' fontSize="34px" />
                        <div className='flex-0 overflow-hidden transition-all duration-300 max-w-0 group-hover:max-w-xs'>
                            <span className='text-blue ml-2 whitespace-nowrap font-bold'>MySQL</span>
                        </div>
                    </div>
                </div>
                <div className='inline-block group'>
                    <div className='flex items-center bg-white rounded-md p-1 mr-2 transition-all duration-300'>
                        <SiOracle className='text-blue' fontSize="34px" />
                        <div className='flex-0 overflow-hidden transition-all duration-300 max-w-0 group-hover:max-w-xs'>
                            <span className='text-blue ml-2 whitespace-nowrap font-bold'>OracleDB</span>
                        </div>
                    </div>
                </div>
                <div className='inline-block group'>
                    <div className='flex items-center bg-white rounded-md p-1 mr-2 transition-all duration-300'>
                        <SiFirebase className='text-blue' fontSize="34px" />
                        <div className='flex-0 overflow-hidden transition-all duration-300 max-w-0 group-hover:max-w-xs'>
                            <span className='text-blue ml-2 whitespace-nowrap font-bold'>Firebase</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='font-semibold'>Other Tools</div>
            <div className='md:col-span-4 w-screen'>
                <div className='inline-block group'>
                    <div className='flex items-center bg-white rounded-md p-1 mr-2 transition-all duration-300'>
                        <FaGithub className='text-blue' fontSize="34px" />
                        <div className='flex-0 overflow-hidden transition-all duration-300 max-w-0 group-hover:max-w-xs'>
                            <span className='text-blue ml-2 whitespace-nowrap font-bold'>GitHub</span>
                        </div>
                    </div>
                </div>
                <div className='inline-block group'>
                    <div className='flex items-center bg-white rounded-md p-1 mr-2 transition-all duration-300'>
                        <FaAws className='text-blue' fontSize="34px" />
                        <div className='flex-0 overflow-hidden transition-all duration-300 max-w-0 group-hover:max-w-xs'>
                            <span className='text-blue ml-2 whitespace-nowrap font-bold'>AWS</span>
                        </div>
                    </div>
                </div>
                <div className='inline-block group'>
                    <div className='flex items-center bg-white rounded-md p-1 mr-2 transition-all duration-300'>
                        <FaDocker className='text-blue' fontSize="34px" />
                        <div className='flex-0 overflow-hidden transition-all duration-300 max-w-0 group-hover:max-w-xs'>
                            <span className='text-blue ml-2 whitespace-nowrap font-bold'>Docker</span>
                        </div>
                    </div>
                </div>
                <div className='inline-block group'>
                    <div className='flex items-center bg-white rounded-md p-1 mr-2 transition-all duration-300'>
                        <SiTerraform className='text-blue' fontSize="34px" />
                        <div className='flex-0 overflow-hidden transition-all duration-300 max-w-0 group-hover:max-w-xs'>
                            <span className='text-blue ml-2 whitespace-nowrap font-bold'>Terraform</span>
                        </div>
                    </div>
                </div>
                <div className='inline-block group'>
                    <div className='flex items-center bg-white rounded-md p-1 mr-2 transition-all duration-300'>
                        <FaLinux className='text-blue' fontSize="34px" />
                        <div className='flex-0 overflow-hidden transition-all duration-300 max-w-0 group-hover:max-w-xs'>
                            <span className='text-blue ml-2 whitespace-nowrap font-bold'>Linux</span>
                        </div>
                    </div>
                </div>
                <div className='inline-block group'>
                    <div className='flex items-center bg-white rounded-md p-1 mr-2 transition-all duration-300'>
                        <FaFigma className='text-blue' fontSize="34px" />
                        <div className='flex-0 overflow-hidden transition-all duration-300 max-w-0 group-hover:max-w-xs'>
                            <span className='text-blue ml-2 whitespace-nowrap font-bold'>Figma</span>
                        </div>
                    </div>
                </div>
                <div className='inline-block group'>
                    <div className='flex items-center bg-white rounded-md p-1 mr-2 transition-all duration-300'>
                        <SiAdobephotoshop className='text-blue' fontSize="34px" />
                        <div className='flex-0 overflow-hidden transition-all duration-300 max-w-0 group-hover:max-w-xs'>
                            <span className='text-blue ml-2 whitespace-nowrap font-bold'>Photoshop</span>
                        </div>
                    </div>
                </div>
                <div className='inline-block group'>
                    <div className='flex items-center bg-white rounded-md p-1 mr-2 transition-all duration-300'>
                        <SiAdobeillustrator className='text-blue' fontSize="34px" />
                        <div className='flex-0 overflow-hidden transition-all duration-300 max-w-0 group-hover:max-w-xs'>
                            <span className='text-blue ml-2 whitespace-nowrap font-bold'>Illustrator</span>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default SkillCard