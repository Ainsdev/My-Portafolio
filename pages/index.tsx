import { motion, useScroll } from 'framer-motion'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import WindowTab from '../layout/components/WindowTab'
import HomeLayout from '../layout/layouts/HomeLayout'

const Home: NextPage = () => {
  const { scrollY } = useScroll();
  const [scroll, setscroll] = useState<number>(0);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setscroll(latest)
    })
  }, [scrollY])

  return (
    <HomeLayout >
      {FirstHome(scroll)}
    </HomeLayout>
  )
}

export default Home
function FirstHome(scroll: number) {
  return <main className='w-screen h-[1920px]'>
    <section className='w-screen'>
      <div className='absolute top-40 flex w-screen overflow-hidden md:hidden'>
        <motion.h1
          initial="hidden"
          animate={{ x: scroll * -6, opacity: 1 }}
          className='text-9xl md:text-[250px]  font-bold whitespace-nowrap '>I LOVE BUILD THINGS</motion.h1>
      </div>
      <div className='absolute top-48 flex w-screen overflow-hidden'>
        <motion.h1
          initial="hidden"
          animate={{ x: scroll * 2, opacity: 1 }}
          className='text-9xl md:text-[250px]  font-bold whitespace-nowrap text-primary hidden md:flex'>I LOVE TO BUILD</motion.h1>
      </div>
      <WindowTab />
      <div className='px-20 relative z-10'>
        <motion.h1
          initial="hidden"
          animate={{ x: scroll * -2, opacity: 1 }}
          className='hidden sm:flex text-[250px] font-bold whitespace-nowrap tracking-wide absolute top-[528px] text-accent-2 z-50 '>THINGS</motion.h1>
      </div>
    </section>
  </main>
}

