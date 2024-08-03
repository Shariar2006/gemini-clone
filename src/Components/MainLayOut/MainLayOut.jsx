import profile from "../../../public/profile.jpg"
import icon from "../../../public/icon2.png"
import { VscSend } from "react-icons/vsc";
// import { MdOutlineKeyboardVoice } from "react-icons/md";
// import { LuImagePlus } from "react-icons/lu";
import "./MainLayOut.css"
import Cards from "../Cards/Cards";
import { useContext } from "react";
import { Context } from "../../context/Context";

const MainLayOut = () => {

    const {
        onSent,
        prevPrompts,
        setPrevPrompts,
        recentPrompt,
        setRecentPrompt,
        showResult,
        loading,
        resultData,
        setInput,
        input
    } = useContext(Context)

    const handlePrompt = e => {
        e.preventDefault()
        onSent()
    }

    return (
        <div className="flex-1 min-h-screen relative pt-5 pl-5 pr-5 ">
            <div className="md:flex justify-between items-center ml-60 md:ml-0">
                <h1 className="text-2xl hidden md:block text-[#4c4b4b]">Gemini</h1>
                <img src={profile} className="w-14 h-14 rounded-full" alt="profile picture" />
            </div>

            <div className="max-w-4xl mx-auto pt-5 pl-5 pr-5">
                {
                    !showResult ? <div>
                        <div className="welcomeText text-[25px] md:text-[56px]">
                            <p><span>Hello, Shariar Alam</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <Cards />
                    </div> : <div className="h-[62vh] result">

                        <div className="flex items-center gap-5 mb-10">
                            <img className="w-10 h-10 rounded-full" src={profile} alt="profile image" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="flex items-start gap-5">
                            <img className="w-10 h-10 rounded-full" src={icon} alt="gemini icon" />
                            {
                                loading ? <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                    :
                                    <p className="leading-loose" dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }
                        </div>

                    </div>
                }
                <div>
                    <form onSubmit={handlePrompt} className="relative mt-10">
                        <input onChange={(e) => setInput(e.target.value)} name="prompt" value={input} className="bg-[#F0F4F9] outline-none w-full p-5 rounded-full" type="text" placeholder="Enter a prompt here" />
                        <div className="absolute flex gap-3 text-xl -mt-11 right-5">
                            {/* <LuImagePlus /> */}
                            {/* <MdOutlineKeyboardVoice /> */}
                            <VscSend onClick={() => onSent()} className="cursor-pointer" />

                        </div>
                    </form>
                </div>
                <h1 className="text-sm text-center mt-5 text-gray-700">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps</h1>
            </div>
        </div>
    );
};

export default MainLayOut;