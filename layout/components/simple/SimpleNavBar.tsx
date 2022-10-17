import Link from "next/link";

const SimpleNavBar = () => {
    return (
        <nav className='sticky top-0 right-0 z-50 w-full h-full'>

            <div className='bg-accent-2 absolute left-0 z-40 px-8 py-3 rounded-br-3xl text-center text-black hover:translate-x-3 ease-in-out transition-transform cursor-pointer'>
                <Link href='/' className='font-semibold w-full underline text-lg'><h1 className='font-semibold underline w-full text-lg'>Amazing Portfolio</h1></Link>
            </div>
            <Link href='/contact'>
                <div className='animate-pulse hover:animate-none bg-primary absolute left-0 z-10 px-8 py-3 rounded-br-3xl text-center text-black top-12 hover:translate-x-3 ease-in-out transition-transform cursor-pointer'>
                    <h1 className='font-bold w-full text-xl'>Contact</h1>
                </div>
            </Link>
            <div className=' bg-accent rounded-t-3xl hidden sm:flex absolute right-0 top-[500px] z-40 px-8 py-3 text-center text-black hover:translate-y-3 translate-x-24 ease-in-out transition-transform cursor-pointer -rotate-90'>
                <Link href='/' className='font-semibold w-full text-lg'><h1 className=' w-full text-lg font-bold'>Check my last project</h1></Link>
            </div>
        </nav>
    );
};

export default SimpleNavBar;