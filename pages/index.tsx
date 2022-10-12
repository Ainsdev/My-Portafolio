import { motion, useScroll } from 'framer-motion'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import HomeButton from '../layout/components/HomeButtons'
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
      <main className='w-screen h-screen'>
        <section className='w-screen'>
          <div className='absolute top-40 flex w-screen overflow-hidden'>
            <motion.h1
              initial="hidden"
              animate={{ x: scroll * -6, opacity: 1 }}
              className='text-9xl md:text-[250px] 2xl:text-[350px] font-bold whitespace-nowrap sm:hidden'>I LOVE BUILD THINGS</motion.h1>
          </div>
            <WindowTab />
          {/* <div className='px-20 '><h1 className='text-[250px] font-bold whitespace-nowrap tracking-wide'>THINGS</h1></div> */}
        </section>
      </main>
      <main className='w-screen h-screen'>
        <div className="w-1/2 transition-colors ease-linear shadow-md absolute ">
          <div className="w-full h-12 rounded-t-lg  bg-base-2 flex justify-end items-center space-x-1.5 px-4">
            <span className="w-3 h-3 border-2 border-transparent dark:border-green-400 rounded-full bg-green-400 dark:bg-transparent"></span>
            <span className="w-3 h-3 border-2 border-transparent dark:border-yellow-400 rounded-full bg-yellow-400 dark:bg-transparent"></span>
            <span className="w-3 h-3 border-2 border-transparent dark:border-red-400 rounded-full bg-red-400 dark:bg-transparent "></span>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 border-t-0 w-full h-96 rounded-b-lg"></div>
        </div>
      </main>
    </HomeLayout>
  )
}

export default Home
