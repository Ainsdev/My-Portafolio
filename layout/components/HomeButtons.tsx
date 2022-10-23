import Link from 'next/link';
import React from 'react';

interface HomeButtonProps {
    title: string;
    description: string;
    link: string;
    color: string;
}

const HomeButton: React.FC<HomeButtonProps> = ({ title, description, link,color }) => {
    const style = 'rounded-full absolute inset-0 w-full h-full transition duration-300 ease-out transform  bg-red-300 group-hover:-translate-x-2 group-hover:-translate-y-2 cursor-none' + ' ' + color;
    return (
        <div className='relative z-50'>
            <a href={link} className="relative sm:px-16 py-5 font-bold text-black group px-10 ">
                <span className={style}></span>
                <span className="absolute inset-0 w-full h-full border-4 border-white rounded-full"></span>
                <span className="relative font-bold sm:text-lg text-md">{title}</span>
            </a>
            <p className='pt-5 text-center font-extralight text-sm'>
                {description}
            </p>
        </div>
    );
};

export default HomeButton;
