const NavBar = () => {
    return (
        <nav className='sticky top-0 right-0 z-10 w-full h-full'>
            <div className='bg-primary absolute right-0 z-40 p-6 w-72 rounded-b-3xl text-center flex gap-3'>
                <p>==</p>
                <h1 className='font-semibold w-full'>Guilad | Web Developer</h1>
            </div>
            <div className='bg-accent-2 absolute h-36 right-0 w-20 p-4 rounded-3xl flex justify-center items-end'>
                <svg width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <g id="Lager_94" data-name="Lager 94" transform="translate(0)">
                        <path id="Path_70" data-name="Path 70" d="M12.516,4.509A12,12,0,0,0,22.3,19.881,12.317,12.317,0,0,0,24,20a11.984,11.984,0,0,0,3.49-.514,12.1,12.1,0,0,1-9.963,8.421A12.679,12.679,0,0,1,16,28,12,12,0,0,1,12.516,4.509M16,0a16.5,16.5,0,0,0-2.212.15A16,16,0,0,0,16,32a16.526,16.526,0,0,0,2.01-.123A16.04,16.04,0,0,0,31.85,18.212,16.516,16.516,0,0,0,32,15.944,1.957,1.957,0,0,0,30,14a2.046,2.046,0,0,0-1.23.413A7.942,7.942,0,0,1,24,16a8.35,8.35,0,0,1-1.15-.08,7.995,7.995,0,0,1-5.264-12.7A2.064,2.064,0,0,0,16.056,0Z" fill="#040505" />
                    </g>
                </svg>
            </div>
        </nav>
    );
};

export default NavBar;