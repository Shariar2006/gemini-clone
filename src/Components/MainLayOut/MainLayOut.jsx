import profile from "../../../public/profile.jpg"

const MainLayOut = () => {
    return (
        <div className="flex-1 min-h-screen relative p-5">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl text-[#4c4b4b]">Gemini</h1>
                <img src={profile} className="w-14 h-14 rounded-full" alt="profile picture" />
            </div>
        </div>
    );
};

export default MainLayOut;