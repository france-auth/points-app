import React, { useState, useEffect } from "react";
import Miner from "@/components/Miner";
import Link from "next/link";

const Message = () => {
    const [inputValue, setInputValue] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [placeholderVisible, setPlaceholderVisible] = useState(true);
    const [displayText, setDisplayText] = useState(""); // For managing "..." and "TAP THE FACE"
    const [isChatRemaining, setIsChatRemaining] = useState(true);

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
    };

    return (
        <>
            <Miner handleMinerClick={handleMinerClick} hasSubmitted={hasSubmitted} displayText={displayText} />
            <div className="p-3 w-full bg-[#C4DACC] flex flex-col justify-center items-center">
                {/* User's Message */}
                <div className="w-full px-3 py-2 xs:text-sm flex flex-col items-end mt-0">
                    <p className="bg-[#F5F5F5] w-[80%] text-xs text-right rounded-xl px-3 py-2">
                        What's the latest in the crypto world today?
                    </p>
                    <p className="text-[.6rem] mr-2 mt-1">Sat 5:09AM</p>
                </div>

                {/* Bot's Message */}
                <div className="w-full px-3 py-2 flex flex-col xs:text-sm items-start">
                    <p className="bg-[#F5F5F5] w-[80%] min-w-min text-xs text-left rounded-xl px-4 py-2">
                        It's the talk of the town! $ATRM is all about revolutionizing
                        digital interactions with AI. Gonna be HUGE!
                    </p>
                    <p className="text-[.6rem] ml-2 mt-1">
                        Sat 5:10AM <span className="ml-2">+500P</span>
                    </p>
                </div>

                {/* INPUT Form */}
                <form
                    onSubmit={handleSubmit}
                    className="flex justify-end xs:w-screen-minus-3rem mb-1 w-full relative"
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
                        className={`w-full mb-0 mt-3 xs:placeholder:text-xs xs:px-2 text-sm xs:font-normal font-medium px-5 py-3 rounded-lg border outline[.5px] ${
                            !isChatRemaining
                                ? "bg-[#004A50]"
                                : isSubmitting
                                ? "bg-[#8FA3A4]"
                                : "bg-white"
                        }`}
                    />

                    {!isChatRemaining ? (
                        <div
                            className="absolute left-0 right-0 text-start text-white overflow-y-hidden top-[58%] transform -translate-y-1/2 "
                        >
                            <p className="text-white text-sm ml-3">
                                Chat recharge in 8h 12m 22s
                            </p>
                            <Link href={`/item`}
                            className="xs:mr-1 absolute right-2 mr-3 top-[60%] transform -translate-y-1/2 cursor-pointer text-white text-sm">
                                BUY ITEM
                            </Link>
                        </div>
                    ) : (
                        (isSubmitting || displayText) && (
                            <div
                                className="absolute left-0 right-0 text-center text-white font-extrabold top-[56%] transform -translate-y-1/2"
                                style={{ pointerEvents: "none" }}
                            >
                                {displayText}
                            </div>
                        )
                    )}

                    {!isSubmitting && !displayText && isChatRemaining && (
                        <button
                            type="submit"
                            className={`font-bold xs:mr-1 absolute right-2 mr-3 mt-[6px] top-1/2 transform -translate-y-1/2 cursor-pointer ${inputValue ? "" : "text-[#8FA3A4]"}`}
                        >
                            SEND
                        </button>
                    )}
                </form>
            </div>
        </>
    );
};

export default Message;



{/*isSubmitting || displayText ? (
                        <div
                            className="absolute left-0 right-0 text-center text-white font-extrabold top-[56%] transform -translate-y-1/2"
                            style={{ pointerEvents: "none" }}
                        >
                            {displayText}
                        </div>
                    ) : (
                        <button
                            type="submit"
                            className={`font-bold xs:mr-1 absolute right-2 mr-3 mt-[6px] top-1/2 transform -translate-y-1/2 cursor-pointer text-white" ${
                                inputValue ? "text-white" : ""
                            }`}
                        >
                            SEND
                        </button>
                    )  */}