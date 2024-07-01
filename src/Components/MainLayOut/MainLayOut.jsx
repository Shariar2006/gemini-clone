import profile from "../../../public/profile.jpg"
import { LiaCompass } from "react-icons/lia";
import { LuCode2 } from "react-icons/lu";
import { GoLightBulb } from "react-icons/go";
import { IoChatboxOutline } from "react-icons/io5";
import "./MainLayOut.css"
const MainLayOut = () => {
    return (
        <div className="flex-1 min-h-screen relative p-5">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl text-[#4c4b4b]">Gemini</h1>
                <img src={profile} className="w-14 h-14 rounded-full" alt="profile picture" />
            </div>

            <div className="max-w-4xl mx-auto p-5">
                <div className="welcomeText">
                    <p><span>Hello, Shariar Alam</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    <div className="relative cursor-pointer hover:bg-[#ebecee] bg-[#f0f4f9] h-52 p-4 rounded-xl text-gray-600">
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                        <LiaCompass className="absolute right-4 bottom-4 w-8 h-8 text-black bg-white rounded-full p-1"/>
                    </div>
                    <div className="relative cursor-pointer hover:bg-[#ebecee] bg-[#f0f4f9] h-52 p-4 rounded-xl text-gray-600">
                        <p>Briefly summarize this concept: urban planning</p>
                        <GoLightBulb className="absolute right-4 bottom-4 w-8 h-8 text-black bg-white rounded-full p-1"/>
                    </div>
                    <div className="relative cursor-pointer hover:bg-[#ebecee] bg-[#f0f4f9] h-52 p-4 rounded-xl text-gray-600">
                        <p>Brainstorm team bonding activities for our work retreat</p>
                        <IoChatboxOutline className="absolute right-4 bottom-4 w-8 h-8 text-black bg-white rounded-full p-1"/>
                    </div>
                    <div className="relative cursor-pointer hover:bg-[#ebecee] bg-[#f0f4f9] h-52 p-4 rounded-xl text-gray-600">
                        <p>Tell me about React js and React native</p>
                        <LuCode2 className="absolute right-4 bottom-4 w-8 h-8 text-black bg-white rounded-full p-1"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainLayOut;