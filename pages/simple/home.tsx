import type { NextPage } from 'next'
import ProjectItem from '../../layout/components/simple/SimpleProject'
import SkillItem from '../../layout/components/simple/SkillItem'
import SimpleLayout from '../../layout/layouts/SimpleLayout'
import { FaReact } from 'react-icons/fa';
import Carousel from '../../layout/components/simple/Carousel';
import Link from 'next/link';

const Home: NextPage = () => {

    return (
        <SimpleLayout >
            <main className='w-screen h-screen flex-col flex justify-start items-center'>
                <section className='text-center sm:pt-24 pt-36'>
                    <div className="flex flex-col justify-center items-center bg-cover bg-clip-text bg-center uppercase text-transparent text-4xl sm:text-7xl font-extrabold tracking-wide antialiased" style={{ backgroundImage: "url(https://media.giphy.com/media/26ufiHpFsdYFZsGBi/giphy.gif)" }}>
                        GUILAD PERERA
                    </div>
                    <h3 className='font-semibold text-lg sm:text-2xl pt-5'>( Commited Web Developer )</h3>
                </section>
                <section className='pt-20 flex flex-col justify-center items-center'>
                    <h1 className='font-bold sm:text-4xl text-2xl text-accent'>About Me</h1>
                    <p className='text-white font-medium underline sm:text-lg pt-2'>See More...</p>
                    <div className='sm:text-xl text-lg w-3/4 text-white pt-10 font-medium sm:w-[40%] text-center '>
                        <p>Tengo 19 años, me encanta solucionar problemas con tecnologia. Yo creo que no hay nada mas importante que ser entusiasta, por eso me gusta impactar en el usuario con resultados innovadores y creativos.</p>
                    </div>
                </section>
                <section className='pt-20 flex justify-center items-center'>
                    <button className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-primary transition duration-300 ease-out border-2 border-primary rounded-full shadow-md group">
                        <Link href='/contact'><span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primary group-hover:translate-x-0 ease">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span></Link>
                        <span className="absolute flex items-center justify-center w-full h-full text-primarytransition-all duration-300 transform group-hover:translate-x-full ease">Contactame</span>
                        <span className="relative invisible">Contactame</span>
                    </button>
                </section>
                <section className='pt-20 flex flex-col justify-center items-center'>
                    <h1 className='font-bold sm:text-4xl text-2xl text-accent'>Skills</h1>
                    <div className='sm:flex-row flex  flex-col gap-8 pt-16'>
                        <SkillItem key={'1'} title="Front-End" data={['Javascript', 'TypeScript', 'React', 'Next Js', 'Tailwind', 'Library Components', 'SASS', 'CSS']} />
                        <SkillItem key={'2'} title="Development" data={['Node', 'Vercel', 'Firebase', 'SupaBase', 'Basic Postgres', 'Git','Jest','SEO']} />
                        <SkillItem key={'3'} title="Tools" data={['VS Code', 'Figma', 'Miro', 'Photoshop','Debugging tools','Agile Methods']} />
                        <SkillItem key={'4'} title="Working On" data={['Solidity', 'Docker', 'ether.js', 'web3.js','hardhat','express','docker']} />
                    </div>
                </section>
                <div className='flex gap-2 pt-24'>
                    <q className='sm:text-2xl text-lg text-primary font-semibold'>Stay Hungry, Stay Foolish.</q>
                    <p className='sm:text-2xl text-lg text-primary font-bold'>Steve Jobs</p>
                </div>
                <section className='pt-20 flex flex-col justify-center items-center'>
                    <h1 className='font-bold sm:text-4xl text-2xl text-accent'>Projects</h1>
                    <div className='flex-row flex gap-8  w-screen overflow-hidden py-16 overflow-x-auto px-5 sm:px-20 sm:overflow-visible sm:overflow-x-hidden sm:flex-wrap sm:justify-center sm:items-center'>
                        <ProjectItem title='Tesla Web Sample' description={'Similar UI to tesla web'} technologies={[
                            { name: '', icon: <FaReact className='w-8 h-8' /> },
                            { name: '', icon: <FaReact className='w-8 h-8' /> },
                            { name: '', icon: <FaReact className='w-8 h-8' /> },
                            { name: '', icon: <FaReact className='w-8 h-8' /> },
                            { name: '', icon: <FaReact className='w-8 h-8' /> },
                        ]} code={''} demo={''} />
                        <ProjectItem title='Tesla Web Sample' description={'Similar UI to tesla web'} technologies={[
                            { name: '', icon: <FaReact className='w-8 h-8' /> },
                            { name: '', icon: <FaReact className='w-8 h-8' /> },
                            { name: '', icon: <FaReact className='w-8 h-8' /> },
                            { name: '', icon: <FaReact className='w-8 h-8' /> },
                            { name: '', icon: <FaReact className='w-8 h-8' /> },
                        ]} code={''} demo={''} />
                        <ProjectItem title='Tesla Web Sample' description={'Similar UI to tesla web'} technologies={[
                            { name: '', icon: <FaReact className='w-8 h-8' /> },
                            { name: '', icon: <FaReact className='w-8 h-8' /> },
                            { name: '', icon: <FaReact className='w-8 h-8' /> },
                            { name: '', icon: <FaReact className='w-8 h-8' /> },
                            { name: '', icon: <FaReact className='w-8 h-8' /> },
                        ]} code={''} demo={''} />
                        <ProjectItem title='Tesla Web Sample' description={'Similar UI to tesla web'} technologies={[
                            { name: '', icon: <FaReact className='w-8 h-8' /> },
                            { name: '', icon: <FaReact className='w-8 h-8' /> },
                            { name: '', icon: <FaReact className='w-8 h-8' /> },
                            { name: '', icon: <FaReact className='w-8 h-8' /> },
                            { name: '', icon: <FaReact className='w-8 h-8' /> },
                        ]} code={''} demo={''} />
                        <ProjectItem title='Tesla Web Sample' description={'Similar UI to tesla web'} technologies={[
                            { name: '', icon: <FaReact className='w-8 h-8' /> },
                            { name: '', icon: <FaReact className='w-8 h-8' /> },
                            { name: '', icon: <FaReact className='w-8 h-8' /> },
                            { name: '', icon: <FaReact className='w-8 h-8' /> },
                            { name: '', icon: <FaReact className='w-8 h-8' /> },
                        ]} code={''} demo={''} />
                        <ProjectItem title='Tesla Web Sample' description={'Similar UI to tesla web'} technologies={[
                            { name: '', icon: <FaReact className='w-8 h-8' /> },
                            { name: '', icon: <FaReact className='w-8 h-8' /> },
                            { name: '', icon: <FaReact className='w-8 h-8' /> },
                            { name: '', icon: <FaReact className='w-8 h-8' /> },
                            { name: '', icon: <FaReact className='w-8 h-8' /> },
                        ]} code={''} demo={''} />
                        <ProjectItem title='Tesla Web Sample' description={'Similar UI to tesla web'} technologies={[
                            { name: '', icon: <FaReact className='w-8 h-8' /> },
                            { name: '', icon: <FaReact className='w-8 h-8' /> },
                            { name: '', icon: <FaReact className='w-8 h-8' /> },
                            { name: '', icon: <FaReact className='w-8 h-8' /> },
                            { name: '', icon: <FaReact className='w-8 h-8' /> },
                        ]} code={''} demo={''} />
                        <ProjectItem title='Tesla Web Sample' description={'Similar UI to tesla web'} technologies={[
                            { name: '', icon: <FaReact className='w-8 h-8' /> },
                            { name: '', icon: <FaReact className='w-8 h-8' /> },
                            { name: '', icon: <FaReact className='w-8 h-8' /> },
                            { name: '', icon: <FaReact className='w-8 h-8' /> },
                            { name: '', icon: <FaReact className='w-8 h-8' /> },
                        ]} code={''} demo={''} />

                    </div>
                </section>
                <section className='flex flex-col justify-center items-center py-20'>
                    <h1 className='font-bold sm:text-4xl text-2xl text-accent'>Certificates</h1>
                    <p className='sm:visible invisible'>(Shift + wheel)</p>
                    <div className='w-screen py-5 overflow-hidden'>
                        <Carousel />
                    </div>
                </section>
            </main>
        </SimpleLayout>
    )
}

export default Home
