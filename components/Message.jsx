import React, { useState, useEffect } from "react";
import Miner from "@/components/Miner";
import Link from "next/link";
import Layout from "./Layout";

const Message = () => {
    const [inputValue, setInputValue] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [placeholderVisible, setPlaceholderVisible] = useState(true);
    const [displayText, setDisplayText] = useState(""); // For managing "..." and "TAP THE FACE"
    const [isChatRemaining, setIsChatRemaining] = useState(true);
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);

    const chatRemaining = 6; // Set this to the actual dynamic value
    const maxChat = 6;
    const placeHolder1 = "Write your name down for Soul";
    const placeHolder2 = `Chat with your Clone ${chatRemaining}/${maxChat}`;

    useEffect(() => {
        if (chatRemaining === 0) {
            setIsChatRemaining(false);
            setPlaceholderVisible(false);
        }
    }, [chatRemaining]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setPlaceholderVisible(false);
        setInputValue("");
        setDisplayText("..."); // Show "..." immediately

        // Transition to "TAP THE FACE" after 3 seconds
        setTimeout(() => {
            setDisplayText("TAP THE FACE");
        }, 3000);
    };

    const handleMinerClick = () => {
        // Reset input to its normal state after miner is clicked
        setDisplayText(""); // Clear the "TAP THE FACE" text
        setIsSubmitting(false); // Allow new input
        setHasSubmitted(true); // Allow new input
        setPlaceholderVisible(true); // Show placeholder again
        setIsNavbarVisible(true);
    };

    return (
        <main>
            <Miner handleMinerClick={handleMinerClick} hasSubmitted={hasSubmitted} displayText={displayText} />
            <Layout isNavbarVisible={isNavbarVisible} >
                <div className="p-3 px-4 w-full bg-[#C4DACC] flex flex-col justify-between items-center h-[42.5vh] max-h-[45vh]">
                    {/* Messages Container */}
                    <div className="flex-1 w-full hide-scrollbar overflow-y-auto p-3 space-y-4">
                        {/* User's Message */}
                        <div className="w-full flex flex-col items-end">
                            <p className="bg-[#F5F5F5] w-full text-xs text-right rounded-xl px-3 py-2">
                                What's the latest in the crypto world today?
                            </p>
                            <p className="text-[.6rem] mr-2 mt-1">Sat 5:09AM</p>
                        </div>

                        {/* Bot's Message */}
                        <div className="w-full flex flex-col items-start">
                            <p className="bg-[#F5F5F5] w-[80%] text-xs text-left rounded-xl px-4 py-2">
                                It's the talk of the town! $ATRM is all about revolutionizing
                                digital interactions with AI. Gonna be HUGE!
                            </p>
                            <p className="text-[.6rem] ml-2 mt-1">
                                Sat 5:10AM <span className="ml-2">+500P</span>
                            </p>
                        </div>
                    </div>

                    {/* Input Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="flex justify-end w-full relative pb-3"
                    >
                        <input
                            type="text"
                            placeholder={
                                placeholderVisible && !hasSubmitted
                                    ? placeHolder1
                                    : placeholderVisible && hasSubmitted
                                    ? placeHolder2
                                    : ``
                            }
                            value={inputValue}
                            onChange={handleInputChange}
                            required
                            disabled={!isChatRemaining || isSubmitting || displayText === "TAP THE FACE"}
                            className={`w-full mb-0 mt-3 xs:placeholder:text-xs placeholder:pl-2 xs:px-2 text-sm xs:font-normal font-medium px-5 py-3 rounded-xl border-[.5px] ${
                                !isChatRemaining
                                    ? "bg-[#004A50]"
                                    : isSubmitting
                                    ? "bg-[#8FA3A4]"
                                    : "bg-white"
                            } ${
                                inputValue 
                                ? "border-[#004A50] " 
                                : "border-[#8FA3A4]"
                            } focus:outline-none focus:ring-1 focus:ring-[#004A50] focus:ring-opacity-100`}
                        />

                        {!isChatRemaining ? (
                            <div
                                className="absolute left-0 right-0 text-start text-white overflow-y-hidden top-1/2 transform -translate-y-1/2"
                            >
                                <p className="text-white text-sm ml-3">
                                    Chat recharge in 8h 12m 22s
                                </p>
                                <Link href={`/item`}
                                className="xs:mr-1 absolute right-2 mr-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-white text-sm">
                                    BUY ITEM
                                </Link>
                            </div>
                        ) : (
                            (isSubmitting || displayText) && (
                                <div
                                    className={`absolute left-0 right-0 text-center text-white font-extrabold transform -translate-y-1/2 
                                        ${displayText === "..." 
                                            ? "top-[45%]" 
                                            : "top-1/2"
                                        }`}
                                    style={{ pointerEvents: "none" }}
                                >
                                    {displayText}
                                </div>
                            )
                        )}

                        {!isSubmitting && !displayText && isChatRemaining && (
                            <button
                                type="submit"
                                className={`font-bold xs:mr-1 absolute right-2 mr-4 top-1/2 transform -translate-y-1/2 cursor-pointer ${inputValue ? "" : "text-[#8FA3A4]"}`}
                            >
                                SEND
                            </button>
                        )}
                    </form>
                </div>
            </Layout>
        </main>
    );
};

export default Message;
