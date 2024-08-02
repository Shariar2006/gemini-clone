import profile from "../../../public/profile.jpg"
import { LiaCompass } from "react-icons/lia";
import { LuCode2 } from "react-icons/lu";
import { GoLightBulb } from "react-icons/go";
import { IoChatboxOutline } from "react-icons/io5";
import { VscSend } from "react-icons/vsc";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { LuImagePlus } from "react-icons/lu";
import "./MainLayOut.css"

const MainLayOut = () => {
    return (
        <div className="flex-1 min-h-screen relative pt-5 pl-5 pr-5 ">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl text-[#4c4b4b]">Gemini</h1>
                <img src={profile} className="w-14 h-14 rounded-full" alt="profile picture" />
            </div>

            <div className="max-w-4xl mx-auto pt-5 pl-5 pr-5">
                <div className="welcomeText">
                    <p><span>Hello, Shariar Alam</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 overflow-y-auto">
                    <div className="relative cursor-pointer hover:bg-[#ebecee] bg-[#f0f4f9] h-52 p-4 rounded-xl text-gray-600">
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                        <LiaCompass className="absolute right-4 bottom-4 w-8 h-8 text-black bg-white rounded-full p-1" />
                    </div>
                    <div className="relative cursor-pointer hover:bg-[#ebecee] bg-[#f0f4f9] h-52 p-4 rounded-xl text-gray-600">
                        <p>Briefly summarize this concept: urban planning</p>
                        <GoLightBulb className="absolute right-4 bottom-4 w-8 h-8 text-black bg-white rounded-full p-1" />
                    </div>
                    <div className="relative cursor-pointer hover:bg-[#ebecee] bg-[#f0f4f9] h-52 p-4 rounded-xl text-gray-600">
                        <p>Brainstorm team bonding activities for our work retreat</p>
                        <IoChatboxOutline className="absolute right-4 bottom-4 w-8 h-8 text-black bg-white rounded-full p-1" />
                    </div>
                    <div className="relative cursor-pointer hover:bg-[#ebecee] bg-[#f0f4f9] h-52 p-4 rounded-xl text-gray-600">
                        <p>Tell me about React js and React native</p>
                        <LuCode2 className="absolute right-4 bottom-4 w-8 h-8 text-black bg-white rounded-full p-1" />
                    </div>
                </div>
                <div>
                    <div className="relative mt-10">
                        <input className="bg-[#F0F4F9] outline-none w-full p-5 rounded-full" type="text" placeholder="Enter a prompt here" />
                        <div className="absolute flex gap-3 text-xl -mt-11 right-5">
                            <LuImagePlus />
                            <MdOutlineKeyboardVoice />
                            <VscSend />
                        </div>
                    </div>
                </div>
                <h1 className="text-sm text-center mt-5 text-gray-700">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps</h1>
            </div>
        </div>
    );
};

export default MainLayOut;