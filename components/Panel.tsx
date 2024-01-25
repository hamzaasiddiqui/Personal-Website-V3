import React from 'react'

function Panel() {
  return (
    <div className='h-screen bg-blue w-2/5 flex flex-col items-center justify-center m-0 p-0 fixed float-left'>
        <div className='font-titleFont'>
            <div>
                
            </div>
            <div className='flex flex-col text-pink text-5xl items-center justify-center'>
                <div>HAMZA SIDDIQUI</div>
                <div className='text-xl text-white'>computer engineering undergrad</div>
                <div className='text-xl text-white'>with a passion for web and software engineering</div>
            </div>
        </div>

        <div className='font-bodyFont text-white flex flex-col my-24'>
            <div>About</div>
            <div>Experiences</div>
            <div>Projects</div>
            <div>Resume</div>
        </div>

        <div className='font-bodyFont flex flex-row'>
            <div>Linkedin</div>
            <div>GitHub</div>
            <div>Resume</div>
            <div>Email</div>
        </div>
    </div>
  )
}

export default Panel