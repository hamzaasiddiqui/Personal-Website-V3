import React from 'react'

function ExperienceCard(props:
    {
        title: string,
        company: string,
        description: string,
        skills: string[],
    }) {
  return (
    <div className="relative block overflow-hidden max-w-2xl pb-8">
        <div className="sm:flex sm:justify-between sm:gap-4">
            <div>
                <h3 className="text-lg font-bold text-pink sm:text-xl">
                    {props.title}
                </h3>

                <p className="mt-1 text-sm font-medium text-white">{props.company}</p>
            </div>

            <div className="hidden sm:block sm:shrink-0">
            </div>
        </div>

        <div className="mt-4">
            <p className="text-base text-white">
            {props.description}
            </p>
        </div>

        <div className='mt-4 flex flex-wrap'>
            {props.skills.map((label, i) => {
                return (
                    <span key={i} className="whitespace-nowrap rounded-full bg-pink px-2.5 mr-2 mt-2 py-0.5 text-sm text-blue">
                        {label}
                    </span>
                )
            })}
        </div>
    </div>

  )
}

export default ExperienceCard