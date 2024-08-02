import profile from "../../../public/profile.jpg"
import { VscSend } from "react-icons/vsc";
// import { MdOutlineKeyboardVoice } from "react-icons/md";
// import { LuImagePlus } from "react-icons/lu";
import "./MainLayOut.css"
import Cards from "../Cards/Cards";

const MainLayOut = () => {
    return (
        <div className="flex-1 min-h-screen relative pt-5 pl-5 pr-5 ">
            <div className="md:flex justify-between items-center ml-60 md:ml-0">
                <h1 className="text-2xl hidden md:block text-[#4c4b4b]">Gemini</h1>
                <img src={profile} className="w-14 h-14 rounded-full" alt="profile picture" />
            </div>

            <div className="max-w-4xl mx-auto pt-5 pl-5 pr-5">
                <div className="welcomeText text-[25px] md:text-[56px]">
                    <p><span>Hello, Shariar Alam</span></p>
                    <p>How can I help you today?</p>
                </div>
                <Cards/>
                <div>
                    <div className="relative mt-10">
                        <input className="bg-[#F0F4F9] outline-none w-full p-5 rounded-full" type="text" placeholder="Enter a prompt here" />
                        <div className="absolute flex gap-3 text-xl -mt-11 right-5">
                            {/* <LuImagePlus /> */}
                            {/* <MdOutlineKeyboardVoice /> */}
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