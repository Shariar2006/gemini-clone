/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = ({ children }) => {

    const [input, setInput] = useState("")
    const [recentPrompt, setRecentPrompt] = useState("")
    const [prevPrompts, setPrevPrompts] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setloading] = useState(false)
    const [resultData, setResultData] = useState("")

    const onSent = async (prompt) => {
        setResultData("")
        setloading(true)
        setShowResult(true)
        setRecentPrompt(input)
        const response = await run(input)
        let responseArray = response.split("**");
        let newResponse;
        for (let i = 0; i < responseArray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newResponse += responseArray[i];
            }else{
                newResponse += "<b>"+responseArray[i]+"</b>";
            }
        }
        let newResponse2 = newResponse.split("*").join('</br>');
        setResultData(newResponse2)
        setloading(false)
        setInput("")
    }

    const contextValue = {
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
    }

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider