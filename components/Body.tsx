import React, { RefObject } from 'react'
import ExperienceCard from './ExperienceCard'
import ProjectCard from './ProjectCard'
import SkillCard from './SkillCard'
import { exp1, exp2, exp3, proj1, proj2, proj3, proj4, proj5, proj6, github, linkedin, resume } from '../public/content' 

interface BodyProps {
    aboutRef: RefObject<HTMLDivElement>;
    experienceRef: RefObject<HTMLDivElement>;
    projectsRef: RefObject<HTMLDivElement>;
    skillsRef: RefObject<HTMLDivElement>;
}

function Body(props: BodyProps) {
  return (
    <div className='font-bodyFont w-3/5 flex flex-col items-center justify-center m-0 p-0 float-right top-0' id='About'>

        <div ref={props.aboutRef} className='text-white max-w-2xl text-xl pt-24'>
            <div className='py-4'>
            Dabbling in problem-solving and coding from a young age, my career aspirations revolve
            around the growing tech industry. I enjoy programming, developing logic, and learning
            about new technology
            </div>
            <div className='py-4'>
            Pursuing a bachelor of science in computer engineering, I am a senior at GIKI &#40;Ghulam Ishaq
            Khan Institute of Engineering Sciences and Technology&#41;. As an adaptable and self-driven 
            student, I am always looking forward to benefiting organizations and further grooming 
            my technical, organizational, and interpersonal skills.
            </div>
            <div className='py-4'>
            During my free time, I like to read, draw, enjoy nature, and play soccer and badminton. 
            </div>
        </div>

        <div ref={props.experienceRef} className='text-white pt-28'>
            <ExperienceCard title={exp1.title} company={exp1.company} description={exp1.description} skills={exp1.skills} />
            <ExperienceCard title={exp2.title} company={exp2.company} description={exp2.description} skills={exp2.skills} />
            <ExperienceCard title={exp3.title} company={exp3.company} description={exp3.description} skills={exp3.skills} />
            <div className='flex font-semibold'>
                <a href={resume.link} target='_blank' className='mr-1 text-pink'>View my full resume → </a>
                <div> or </div>
                <a href={linkedin.link} target='_blank' className='ml-1 text-pink'> Visit my LinkedIn profile →</a>
            </div>
        </div>

        <div ref={props.projectsRef} className='text-white pt-28'>
            <ProjectCard title={proj1.title} description={proj1.description} link={proj1.link} />
            <ProjectCard title={proj2.title} description={proj2.description} link={proj2.link} />
            <ProjectCard title={proj3.title} description={proj3.description} link={proj3.link} />
            <ProjectCard title={proj4.title} description={proj4.description} link={proj4.link} />
            <ProjectCard title={proj5.title} description={proj5.description} link={proj5.link} />
            <ProjectCard title={proj6.title} description={proj6.description} link={proj6.link} />
            <a href={github.link} target='_blank' className='text-pink font-semibold'>Visit my GitHub profile →</a>
        </div>

        <div ref={props.skillsRef} className='text-white pt-28 w-full'>
            <div className='ml-20'>
                <SkillCard />
            </div>
        </div>

        <div className= 'pt-32 mb-8 flex flex-col items-center justify-center text-white max-w-2xl text-sm'>
            <div>
                Built with <span className='text-pink'>Next.js</span> and <span className='text-pink'>Typescript</span>. Coded in <span className='text-pink'>VS Code</span>
            </div>
            <div>
                Copyright Ⓒ Hamza Siddiqui
            </div>
        </div>

    </div>
  )
}

export default Body