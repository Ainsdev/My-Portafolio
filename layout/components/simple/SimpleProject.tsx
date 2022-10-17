import React from 'react';

interface tech {
    name: string;
    icon: React.ReactNode
}
interface ProjectProps {
    title: string;
    description: string;
    technologies: Array<tech>;
    code: string
    demo: string
}

const ProjectItem: React.FC<ProjectProps> = (props) => {
    return (
        <article className='flex border-accent hover:bg-accent text-white hover:text-black border hover:translate-x-2 rounded-xl h-48 gap-2 sm:h-56'>
            <div className='flex flex-col justify-center items-center w-56 py-2 sm:w-96'>
                <div>
                    <h1 className=' font-bold py-5 text-elipsis sm:text-xl'>{props.title}</h1>
                </div>
                <div className='flex justify-center gap-4 items-center w-full rounded-xl h-16 overflow-hidden overflow-x-scroll px-2 sm:overflow-hidden'>
                    {
                        props.technologies.map((tech, index) => {
                            return (
                                <div key={index} className={tech.name}>
                                    {tech.icon}
                                </div>
                            )
                        })
                    }
                </div>
                <div className='flex justify-evenly items-center gap-5 pt-5 w-full'>
                    <a href={props.code} target='_blank' rel='noreferrer' className='rounded-xl px-2 py-1 flex gap-2'>
                        <p className='underline sm:text-lg sm:font-semibold'>Code</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <polyline points="7 8 3 12 7 16"></polyline>
                            <polyline points="17 8 21 12 17 16"></polyline>
                            <line x1="14" y1="4" x2="10" y2="20"></line>
                        </svg>
                    </a>
                    <a href={props.demo} target='_blank' rel='noreferrer' className='rounded-xl px-2 py-1 flex gap-2'>
                        <p className='underline sm:text-lg sm:font-semibold'>Web</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-world-www" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M19.5 7a8.998 8.998 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4"></path>
                            <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4"></path>
                            <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4.004"></path>
                            <path d="M19.5 17a8.998 8.998 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4"></path>
                            <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4"></path>
                            <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4.004"></path>
                            <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4"></path>
                            <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4"></path>
                            <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4"></path>
                        </svg>
                    </a>
                </div>
            </div >
        </article>
    );
};

export default ProjectItem;
