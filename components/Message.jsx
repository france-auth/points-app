"use client";

import React, { useState } from "react";
import Layout from "@/components/Layout";

const Message = () => {
    const [inputValue, setInputValue] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [placeholderVisible, setPlaceholderVisible] = useState(true);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setPlaceholderVisible(false);
        setInputValue("");

        // Simulate sending the message to the backend
        setTimeout(() => {
        setIsSubmitting(false);
        setPlaceholderVisible(true);
        }, 3000);
    };

    return (
    <main>
        <Layout />
        <div className="p-3 w-full bg-[#C4DACC] flex flex-col justify-center items-center h-[25rem]">
            {/* User's Message */}
            <div className="w-full px-3 py-2 xs:text-sm flex flex-col items-end mt-0">
            <p className="bg-[#F5F5F5] w-[80%] text-xs text-right rounded-xl px-3 py-2">
            What's the latest crypto world today?
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
                placeholderVisible ? `Chat with your Clone 6/6` : ""
                }
                value={inputValue}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className={`w-full mb-0 mt-3 text-white xs:placeholder:text-xs xs:px-2 text-sm xs:font-normal font-medium px-5 py-3 rounded-lg border focus:ring focus:ring-[#367378] ${
                inputValue && !isSubmitting ? "bg-[#004a50]" : ""
                }`}
            />
            {isSubmitting ? (
                <div
                className="absolute left-0 right-0 text-center text-white font-extrabold top-1/2 transform -translate-y-1/2"
                style={{ pointerEvents: "none" }}>
                        ...
            </div>
            ) : (
            <button   button
                type="submit"
                className={`font-bold xs:mr-1 absolute right-2 mr-3 mt-[6px] top-1/2 transform -translate-y-1/2 cursor-pointer text-white" ${inputValue ? 'text-white' : ''}`}
                >
                SEND
                </button>
            )}
            </form>
        </div>
    </main>
    );
};

export default Message;