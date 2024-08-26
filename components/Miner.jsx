import React from 'react';
import Image from 'next/image';
import { miner } from '@/public/assets/images';
import { useState } from "react";
import { createPortal } from "react-dom";
import Layout from '@/components/Layout';

const Miner = ({ displayText, handleMinerClick }) => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleClick = (event) => {
        if (displayText === "TAP THE FACE") {
            setPosition({ x: event.clientX, y: event.clientY });
            setIsAnimating(true);
            setTimeout(() => {
                setIsAnimating(false);
            }, 3000);   // Animation duration (3 seconds)
            handleMinerClick();
            setIsNavbarVisible(true);  // Only show navbar when "TAP THE FACE" is displayed
        }
    };

    return (
        <>
            <div
            className='flex w-full justify-center items-center bg-[#9CB2A4] border-y-[1px] border-[#004A50] p-7'>
                <div onClick={handleClick} 
                className='flex bg-[#C4DACC] justify-center items-center w-[12.5rem] h-[14.5rem] rounded-3xl my-2 border-[1px] border-[#004A50] cursor-pointer'>
                    <Image 
                    src={miner}
                    alt='miner image'/>
                </div>

                {isAnimating &&
                createPortal(
                    <div
                    className="absolute animate-fly-up-fade"
                    style={{ top: position.y, left: position.x }}
                    >
                        <div className="border-[1px] border-[#004A50] bg-[#B8D2C3] text-xl font-bold rounded-3xl"><p className='px-3 py-1 font-bold'>+ 4P</p></div>
                    </div>,
                    document.body
                )}
            </div>
            <Layout isNavbarVisible={isNavbarVisible}/>
        </>
    );
}

export default Miner;
