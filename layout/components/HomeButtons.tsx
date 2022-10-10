import Link from 'next/link';
import React from 'react';

interface HomeButtonProps {
    title: string;
    description: string;
    link: string;
    color: string;
}

const HomeButton: React.FC<HomeButtonProps> = ({ title, description, link,color }) => {
    const style = 'rounded-full absolute inset-0 w-full h-full transition duration-300 ease-out transform  bg-red-300 group-hover:-translate-x-2 group-hover:-translate-y-2' + ' ' + color;
    return (
        <div className='relative'>
            <a href={link} className="relative px-12 py-4 font-bold text-black group">
                <span className={style}></span>
                <span className="absolute inset-0 w-full h-full border-4 border-white rounded-full"></span>
                <span className="relative font-bold text-lg">{title}</span>
            </a>
            <p className='pt-5 text-center font-extralight text-sm'>
                {description}
            </p>
        </div>
    );
};

export default HomeButton;
