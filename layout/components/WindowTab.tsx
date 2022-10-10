const WindowTab = () => {
    return (
        <div className="w-1/2 transition-colors ease-linear shadow-md absolute top-1/3 right-48">
            <div className="w-full h-12 rounded-t-lg  bg-gray-600 flex justify-end items-center space-x-1.5 px-4">
                <span className="w-3 h-3 border-2 border-transparent dark:border-green-400 rounded-full bg-green-400 dark:bg-transparent"></span>
                <span className="w-3 h-3 border-2 border-transparent dark:border-yellow-400 rounded-full bg-yellow-400 dark:bg-transparent"></span>
                <span className="w-3 h-3 border-2 border-transparent dark:border-red-400 rounded-full bg-red-400 dark:bg-transparent "></span>
            </div>
            <div className="bg-base-2 dark:bg-gray-700 border-t-0 w-full h-1/2 rounded-b-lg"></div>
        </div>
    );
};

export default WindowTab;