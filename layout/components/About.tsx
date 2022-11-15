import React, { SetStateAction } from 'react';

function About(setCursorProps: { (value: SetStateAction<string>): void; (arg0: string): void }) {
    return <section className='w-screen h-96 flex justify-evenly mt-20'>
        <article className='w-full h-full px-20' onMouseEnter={() => setCursorProps("sText")}
            onMouseLeave={() => setCursorProps('default')}>
            <h3 className='text-4xl font-bold flex align-middle py-5 justify-start items-center'>I am <h1 className='px-2 text-6xl text-primary font-bold'>Guilad</h1>from<p className='px-2'>Chile</p></h3>
            <p>I love solving problems with technology, thats why
                Im an enthusiast of impact the user with
                creative & innovate solutions.</p>
        </article>
        <article className='w-full h-full  relative overflow-hidden' style={{
            clipPath: 'polygon(0 2%, 100% 0, 100% 100%, 12% 100%)'
        }}>
            <div className='text-9xl flex left-0 animate-marquee-infinite'>
                <h1 className='font-bold pl-48'>Creative</h1>
                <h1 className='font-bold pl-20'>Innovative</h1>
                <h1 className='font-bold pl-52'>Commited</h1>
                <h1 className='font-bold pl-48'>Hunger</h1>
                <h1 className='font-bold pl-20'>Innovative</h1>
                <h1 className='font-bold pl-52'>Commited</h1>
                <h1 className='font-bold pl-48'>Creative</h1>
                <h1 className='font-bold pl-20'>Innovative</h1>
                <h1 className='font-bold pl-52'>Commited</h1>
            </div>
            <div className='text-8xl flex left-0 animate-marquee-infinite mt-10'>
                <h1 className='font-bold pl-20'>Enthusiastic</h1>
                <h1 className='font-bold pl-10'>Commited</h1>
                <h1 className='font-bold pl-20'>Passionate</h1>
                <h1 className='font-bold pl-20'>Optimistic</h1>
                <h1 className='font-bold pl-10'>VIEW</h1>
                <h1 className='font-bold pl-20'>Passionate</h1>
                <h1 className='font-bold pl-20'>Enthusiastic</h1>
                <h1 className='font-bold pl-10'>Innovative</h1>
                <h1 className='font-bold pl-20'>Passionate</h1>
                <h1 className='font-bold pl-20'>Enthusiastic</h1>
                <h1 className='font-bold pl-10'>Innovative</h1>
                <h1 className='font-bold pl-20'>Passionate</h1>
            </div>
        </article>
    </section>
}

export default About;
