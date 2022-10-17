import { useState } from "react";

type props = {
    title: string;
    data: Array<string>
}

const SkillItem: React.FC<props> = ({ title, data }) => {
    const [showItems, setShowItems] = useState<boolean>(false);
    return (
        <div className="w-full hover:cursor-pointer ">
            <article onClick={() => setShowItems(!showItems)}
                className="flex flex-col items-center justify-center gap-3 px-28 py-5 text-xl font-semibold text-center
              text-gray-200 transition-all duration-300 ease-in-out bg-transparent border-2 border-accent border-solid rounded-xl hover:text-white hover:border-primary ">
                <p className="w-full whitespace-nowrap ">{title}</p>
                <div>
                    {
                        showItems && data.map((item, index) => (
                            <ul key={index} className='list-disc'>
                                <li className="text-white py-1 text-left">{item}</li>
                            </ul>
                        ))
                    }
                </div>
            </article>
        </div>
    );
}

export default SkillItem
