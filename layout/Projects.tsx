import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';

const Projects = ({name:[]}) => {
    return (
       <section className='w-screen p-20'>
            <div className="w-56 h-56 bg-red-600 rounded-full">
                {/* <Image src='/../public/fcc.jpeg' alt='Working on...' width='300' height='300' className="rounded-lg" /> */}
            </div>
       </section>
    );
};

export default Projects;