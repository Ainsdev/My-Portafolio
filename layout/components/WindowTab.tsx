import HomeButton from './HomeButtons';
const WindowTab = () => {
    return (
        <div className="sm:w-[60%] absolute top-1/3 sm:right-16 opacity-95 hover:opacity-100
        w-[90%] right-0">
            <div className="w-full h-10 rounded-t-lg  bg-gray-800 flex justify-end items-center space-x-1.5 px-4">
                <span className="w-3 h-3 border-2 border-transparent dark:border-green-400 rounded-full bg-green-400 dark:bg-transparent"></span>
                <span className="w-3 h-3 border-2 border-transparent dark:border-yellow-400 rounded-full bg-yellow-400 dark:bg-transparent"></span>
                <span className="w-3 h-3 border-2 border-transparent dark:border-red-400 rounded-full bg-red-400 dark:bg-transparent "></span>
            </div>
            <div className="bg-base-2  backdrop-blur-lg drop-shadow-lg border-t-0 sm:h-[520px] h-96 rounded-b-lg flex justify-center items-center flex-col gap-20 relative">
                <div>
                    <h1 className='sm:text-5xl font-bold text-center sm:pb-5 text-2xl'>Welcome to my Portfolio✌️</h1>
                </div>
                <HomeButton title='Minimalist' link='/' description='More Simple Portafolio' color='bg-accent' />
                <HomeButton title='Contact Me' link='/' description='I Answer quickly :)' color='bg-primary' />
                <div className='absolute bottom-0 right-0 w-28 h-8 bg-blue-300 rounded-tl-xl flex justify-center items-center gap-3 '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </div>
            </div>
        </div>
    );
};

export default WindowTab;