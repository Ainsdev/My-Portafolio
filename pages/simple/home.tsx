import type { NextPage } from 'next'
import ProjectItem from '../../layout/components/simple/SimpleProject'
import SkillItem from '../../layout/components/simple/SkillItem'
import SimpleLayout from '../../layout/layouts/SimpleLayout'
import { FaReact } from 'react-icons/fa';

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
                    <div className='sm:text-xl text-lg w-3/4 text-white pt-10 font-medium sm:w-1/2 text-center '>
                        <p>Tengo 19 años y me considero un apasionado de la vida, la tecnología y el desarrollo. Me gusta crear interfaces atractivas y de fácil uso e impactar en el usuario e innovar.</p>
                    </div>
                </section>
                <section className='pt-20 flex flex-col justify-center items-center'>
                    <h1 className='font-bold sm:text-4xl text-2xl text-accent'>Skills</h1>
                    <div className='sm:flex-row flex  flex-col gap-8 pt-16'>
                        <SkillItem key={'1'} title="Front-End" data={['Javascript', 'TypeScript', 'React', 'Next', 'TDD', 'Tailwind', 'UI', 'UX']} />
                        <SkillItem key={'2'} title="Enviroment" data={['Node', 'Vercel', 'Firebase', 'SupaBase', 'Basic Postgres', 'Git', 'SEO']} />
                        <SkillItem key={'3'} title="Tools" data={['VS Code', 'Figma', 'Miro', 'Notion', 'Photoshop',]} />
                        <SkillItem key={'4'} title="Others" data={['Example', 'Example', 'Example', 'Example']} />
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
                            { name: '', icon: <FaReact className='w-8 h-8'/> },
                            { name: '', icon: <FaReact className='w-8 h-8'/> },
                            { name: '', icon: <FaReact className='w-8 h-8'/> },
                            { name: '', icon: <FaReact className='w-8 h-8'/> },
                            { name: '', icon: <FaReact className='w-8 h-8'/> },
                        ]} code={''} demo={''} />
                        <ProjectItem title='Tesla Web Sample' description={'Similar UI to tesla web'} technologies={[
                            { name: '', icon: <FaReact className='w-8 h-8'/> },
                            { name: '', icon: <FaReact className='w-8 h-8'/> },
                            { name: '', icon: <FaReact className='w-8 h-8'/> },
                            { name: '', icon: <FaReact className='w-8 h-8'/> },
                            { name: '', icon: <FaReact className='w-8 h-8'/> },
                        ]} code={''} demo={''} />
                        <ProjectItem title='Tesla Web Sample' description={'Similar UI to tesla web'} technologies={[
                            { name: '', icon: <FaReact className='w-8 h-8'/> },
                            { name: '', icon: <FaReact className='w-8 h-8'/> },
                            { name: '', icon: <FaReact className='w-8 h-8'/> },
                            { name: '', icon: <FaReact className='w-8 h-8'/> },
                            { name: '', icon: <FaReact className='w-8 h-8'/> },
                        ]} code={''} demo={''} />
                        <ProjectItem title='Tesla Web Sample' description={'Similar UI to tesla web'} technologies={[
                            { name: '', icon: <FaReact className='w-8 h-8'/> },
                            { name: '', icon: <FaReact className='w-8 h-8'/> },
                            { name: '', icon: <FaReact className='w-8 h-8'/> },
                            { name: '', icon: <FaReact className='w-8 h-8'/> },
                            { name: '', icon: <FaReact className='w-8 h-8'/> },
                        ]} code={''} demo={''} />
                        <ProjectItem title='Tesla Web Sample' description={'Similar UI to tesla web'} technologies={[
                            { name: '', icon: <FaReact className='w-8 h-8'/> },
                            { name: '', icon: <FaReact className='w-8 h-8'/> },
                            { name: '', icon: <FaReact className='w-8 h-8'/> },
                            { name: '', icon: <FaReact className='w-8 h-8'/> },
                            { name: '', icon: <FaReact className='w-8 h-8'/> },
                        ]} code={''} demo={''} />
                        <ProjectItem title='Tesla Web Sample' description={'Similar UI to tesla web'} technologies={[
                            { name: '', icon: <FaReact className='w-8 h-8'/> },
                            { name: '', icon: <FaReact className='w-8 h-8'/> },
                            { name: '', icon: <FaReact className='w-8 h-8'/> },
                            { name: '', icon: <FaReact className='w-8 h-8'/> },
                            { name: '', icon: <FaReact className='w-8 h-8'/> },
                        ]} code={''} demo={''} />
                        <ProjectItem title='Tesla Web Sample' description={'Similar UI to tesla web'} technologies={[
                            { name: '', icon: <FaReact className='w-8 h-8'/> },
                            { name: '', icon: <FaReact className='w-8 h-8'/> },
                            { name: '', icon: <FaReact className='w-8 h-8'/> },
                            { name: '', icon: <FaReact className='w-8 h-8'/> },
                            { name: '', icon: <FaReact className='w-8 h-8'/> },
                        ]} code={''} demo={''} />
                        <ProjectItem title='Tesla Web Sample' description={'Similar UI to tesla web'} technologies={[
                            { name: '', icon: <FaReact className='w-8 h-8'/> },
                            { name: '', icon: <FaReact className='w-8 h-8'/> },
                            { name: '', icon: <FaReact className='w-8 h-8'/> },
                            { name: '', icon: <FaReact className='w-8 h-8'/> },
                            { name: '', icon: <FaReact className='w-8 h-8'/> },
                        ]} code={''} demo={''} />
                        
                    </div>
                </section>
                <section className='flex flex-col justify-center items-center'>
                    <h1 className='font-bold sm:text-4xl text-2xl text-accent'>Certificates</h1>
                </section>
            </main>
        </SimpleLayout>
    )
}

export default Home
