import React from 'react'

function ProjectCard(props:
    {
        title: string,
        description: string,
        link: string,
    }) {
  return (
    <a href={props.link} className="relative block overflow-hidden max-w-2xl pt-2 pb-2 pl-2 mb-4 hover:bg-pink hover:delay-300 transition ease-in-out rounded-lg" target='_blank'>
        <div className="sm:flex sm:justify-between sm:gap-4">
            <div>
                <h3 className="text-lg font-bold text-white sm:text-xl">
                    {props.title}
                </h3>
            </div>

            <div className="hidden sm:block sm:shrink-0">
            </div>
        </div>

        <div className="mt-3">
            <p className="text-sm text-gray-300">
            {props.description}
            </p>
        </div>
    </a>
  )
}

export default ProjectCard