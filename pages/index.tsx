import { motion, useScroll } from 'framer-motion'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import WindowTab from '../layout/components/WindowTab'
import HomeLayout from '../layout/layouts/HomeLayout'

const Home: NextPage = () => {
  const { scrollY } = useScroll();
  const [scroll, setscroll] = useState<number>(0);
  useEffect(() => {
    scrollY.onChange((latest) => {
      if (latest < 950) {
        setscroll(latest)
      }
    });
  }, [scrollY])
  // custom cursor
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
  })
  const [cursorProps, setCursorProps] = useState('default')

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setCursor({
        x: e.clientX,
        y: e.clientY,
      })
    }
    window.addEventListener('mousemove', mouseMove)
    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])
  const variants = {
    default: {
      x: cursor.x - 24,
      y: cursor.y - 24,
      zIndex: 999,
      backgroundColor: '#fff',
    },
    hovered: {
      x: cursor.x - 24,
      y: cursor.y - 24,
      zIndex: 30,
    },
    text: {
      backgroundColor: '#fff',
      x: cursor.x - 24,
      y: cursor.y - 24,
      zIndex: 99,
      width: 120,
      height: 120,
      mixBlendMode: 'difference',
    }
  }
  return (
    <HomeLayout >
      <main className='w-screen h-[1920px] flex flex-col scroll-smooth cursor-none'>
        <motion.div
          variants={variants as any}
          animate={cursorProps}
          className='w-12 h-12 rounded-full top-0 left-0 fixed pointer-events-none invisible sm:visible'></motion.div>
        <section className='w-screen'>
          <div className='absolute top-40 flex w-screen overflow-hidden md:hidden'>
            <motion.h1
              initial="hidden"
              animate={{ x: scroll * -6, opacity: 1 }}
              className='text-9xl md:text-[220px]  font-bold whitespace-nowrap '>I LOVE BUILD THINGS</motion.h1>
          </div>
          <div className='absolute top-48 flex w-screen overflow-hidden' onMouseEnter={() => setCursorProps("text")}
            onMouseLeave={() => setCursorProps('default')}>
            <motion.h1
              initial="hidden"
              animate={{ x: scroll * 1.6, opacity: 1 }}
              transition={{
                x: { type: "spring", stiffness: 100 },
                delay: 0.01,
              }}
              className='text-9xl md:text-[220px]  font-bold whitespace-nowrap text-primary hidden md:flex'>I LOVE BUILD</motion.h1>
          </div>
          <div onMouseEnter={() => setCursorProps("hovered")} onMouseLeave={() => setCursorProps('default')} >
            <WindowTab />
          </div>
          <div className='px-20 relative z-40' onMouseEnter={() => setCursorProps("text")}
            onMouseLeave={() => setCursorProps('default')}>
            <motion.h1
              initial="hidden"
              animate={{ x: scroll * -1.6, opacity: 1 }}
              transition={{
                x: { type: "spring", stiffness: 100 },
                delay: 0.01,
              }}
              className='hidden md:flex text-[220px] font-bold whitespace-nowrap tracking-wide absolute top-[528px] text-accent-2'>THINGS</motion.h1>
          </div>
        </section>
        <div className='absolute bottom-5 left-1/2 animate-bounce'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
        <section>
          <div></div>
        </section>
      </main>
    </HomeLayout>
  )
}

export default Home

