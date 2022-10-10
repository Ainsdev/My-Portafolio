import type { NextPage } from 'next'
import Head from 'next/head'
import HomeButton from '../layout/components/HomeButtons'
import WindowTab from '../layout/components/windowTab'
import HomeLayout from '../layout/layouts/HomeLayout'

const Home: NextPage = () => {
  return (
    <HomeLayout >
      <main className='w-screen h-screen'>
        <div className="w-1/2 shadow-md absolute top-1/3 right-48 ">
          <div className="w-full h-10 rounded-t-lg  bg-gray-800 flex justify-end items-center space-x-1.5 px-4">
            <span className="w-3 h-3 border-2 border-transparent dark:border-green-400 rounded-full bg-green-400 dark:bg-transparent"></span>
            <span className="w-3 h-3 border-2 border-transparent dark:border-yellow-400 rounded-full bg-yellow-400 dark:bg-transparent"></span>
            <span className="w-3 h-3 border-2 border-transparent dark:border-red-400 rounded-full bg-red-400 dark:bg-transparent "></span>
          </div>
          <div className="bg-base-2 bg-opacity-70 backdrop-blur-lg drop-shadow-lg border-t-0 h-[520px] rounded-b-lg flex justify-center items-center flex-col gap-16 relative">
            <div>
              <h1 className='text-5xl font-bold text-center pb-5'>Welcome to my Portfolio✌️</h1>
            </div>
            <HomeButton title='Minimalist' link='/' description='More Simple Portafolio' color='bg-accent'/>
            <HomeButton title='Contact Me' link='/' description='I Answer quickly :)' color='bg-primary'/>
          </div>
        </div>
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
