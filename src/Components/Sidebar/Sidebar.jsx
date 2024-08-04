import { IoMdMenu } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { IoChatboxOutline } from "react-icons/io5";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { RiHistoryFill } from "react-icons/ri";
import { MdOutlineSettings } from "react-icons/md";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";

const Sidebar = () => {

    const [expend, setExpend] = useState(false)

    const {
        onSent,
        prevPrompts,
        setRecentPrompt,
        newChat
    } = useContext(Context)

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    return (
        <div className="min-h-screen inline-flex flex-col justify-between bg-[#f0f4f9] px-5 py-4">
            <div>
                <IoMdMenu onClick={() => { setExpend(!expend) }} className="block cursor-pointer w-7 h-6 m-3" />
                <div onClick={()=>newChat()} className="flex justify-center items-center bg-[#e6e8ea] text-base rounded-full p-3 gap-5 text-[#919292] cursor-pointer my-8">
                    <GoPlus className="w-7 h-7" />
                    {expend ? <h1>New Chat</h1> : ''}
                </div>
                {expend ? <div>
                    <h1 className="font-bold mb-5">Recent</h1>
                    {
                        prevPrompts.map((item, index) => {
                            return (

                                <div onClick={()=>{loadPrompt(item)}} key={index} className="flex justify-start items-center gap-3 hover:bg-[#e6e8ea] px-3 py-2 rounded-full cursor-pointer">
                                    <IoChatboxOutline className="w-5 h-5" />
                                    <h1>{item.slice(0, 15)}...</h1>
                                </div>
                            )
                        })
                    }
                </div> : ''}
            </div>
            <div className="inline-flex flex-col">
                <a href="https://support.google.com/gemini/answer/13594961?visit_id=01719752126129-5158129070927022220&p=privacy_help&rd=1">
                    <div className="flex justify-start items-center gap-3 hover:bg-[#e6e8ea] px-3 py-2 rounded-full cursor-pointer">
                        <FaRegCircleQuestion className="w-5 h-5" />
                        {expend ? <h1>Help</h1> : ''}
                    </div>
                </a>
                <a href="https://myactivity.google.com/product/gemini?utm_source=gemini">
                    <div className="flex justify-start items-center gap-3 hover:bg-[#e6e8ea] px-3 py-2 rounded-full cursor-pointer">
                        <RiHistoryFill className="w-5 h-5" />
                        {expend ? <h1>Activity</h1> : ""}
                    </div>
                </a>
                <div className="flex justify-start items-center gap-3 hover:bg-[#e6e8ea] px-3 py-2 rounded-full cursor-pointer">
                    <MdOutlineSettings className="w-5 h-5" />
                    {expend ? <h1>Settings</h1> : ''}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;