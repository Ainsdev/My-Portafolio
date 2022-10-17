import Image from "next/image";

interface props {
    title: string
    emisor: string
    image: string
    link: string
}

const CarouselItem: React.FC<props> = ({ title, emisor, image }) => {
    return (
        <div className="w-96 h-96 bg-transparent mx-4 hover:scale-110">
            <div className="w-96 h-10 rounded-t-lg  bg-base-2 flex justify-end items-center space-x-1.5 px-4">
                <div className="pr-20 font-light">{emisor}</div>
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            </div>
            <div className="w-96 h-64 bg-gray-700 flex justify-center items-center">
                <div className="w-3/4 h-3/4 bg-base-2 rounded-lg flex justify-center items-center">
                    <Image src={image} alt='Working on...' width='300' height='200' className="rounded-lg"/>
                </div>
            </div>
            <div className="w-96 h-10 rounded-b-lg bg-base-2 flex justify-center items-center">
                <div className="w-full h-1/2 rounded-lg text-center font-semibold">
                    <p>{title}</p>
                </div>
            </div>
        </div>
    );
};

export default CarouselItem;
