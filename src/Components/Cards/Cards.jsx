import { LiaCompass } from "react-icons/lia";
import { LuCode2 } from "react-icons/lu";
import { GoLightBulb } from "react-icons/go";
import { IoChatboxOutline } from "react-icons/io5";

const Cards = () => {
    return (
        <div className="">
            <div className="grid grid-cols-4 gap-4 w-full overflow-y-auto">
                    <div className="relative cursor-pointer hover:bg-[#ebecee] bg-[#f0f4f9] w-[202px] h-52 p-4 rounded-xl text-gray-600">
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                        <LiaCompass className="absolute right-4 bottom-4 w-8 h-8 text-black bg-white rounded-full p-1" />
                    </div>
                    <div className="relative cursor-pointer hover:bg-[#ebecee] bg-[#f0f4f9] w-[202px] h-52 p-4 rounded-xl text-gray-600 ml-36 md:ml-16 lg:ml-0">
                        <p>Briefly summarize this concept: urban planning</p>
                        <GoLightBulb className="absolute right-4 bottom-4 w-8 h-8 text-black bg-white rounded-full p-1" />
                    </div>
                    <div className="relative cursor-pointer hover:bg-[#ebecee] bg-[#f0f4f9] w-[202px] h-52 p-4 rounded-xl text-gray-600 ml-72 md:ml-32 lg:ml-0">
                        <p>Brainstorm team bonding activities for our work retreat</p>
                        <IoChatboxOutline className="absolute right-4 bottom-4 w-8 h-8 text-black bg-white rounded-full p-1" />
                    </div>
                    <div className="relative cursor-pointer hover:bg-[#ebecee] bg-[#f0f4f9] w-[202px] h-52 p-4 rounded-xl text-gray-600 ml-[432px] md:ml-48 lg:ml-0">
                        <p>Tell me about React js and React native</p>
                        <LuCode2 className="absolute right-4 bottom-4 w-8 h-8 text-black bg-white rounded-full p-1" />
                    </div>
                </div>
        </div>
    );
};

export default Cards;