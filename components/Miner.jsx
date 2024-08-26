import React from 'react';
import Image from 'next/image';
import { miner } from '@/public/assets/images';
import { useState } from "react";
import { createPortal } from "react-dom";
import Layout from '@/components/Layout';

const Miner = ({ displayText, handleMinerClick }) => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);
    const [animations, setAnimations] = useState([]); // Array to store multiple animations

    const handleClick = (event) => {
        if (displayText === "TAP THE FACE") {
            const newAnimation = {
                id: Date.now(), // Unique ID for each animation instance
                x: event.clientX,
                y: event.clientY,
            };
            setAnimations([...animations, newAnimation]);

            handleMinerClick();
            setIsNavbarVisible(true);  // Only show navbar when "TAP THE FACE" is displayed

            setTimeout(() => {
                setAnimations((prev) => prev.filter(animation => animation.id !== newAnimation.id));
            }, 3000);  // Remove animation after its duration (3 seconds)
        }
    };

    return (
        <>
            <div className='flex w-full justify-center items-center bg-[#9CB2A4] border-y-[1px] border-[#004A50] p-7'>
                <div 
                    onClick={handleClick} 
                    className='flex bg-[#C4DACC] justify-center items-center w-[12.5rem] h-[14.5rem] rounded-3xl my-2 border-[1px] border-[#004A50] cursor-pointer'>
                    <Image 
                        src={miner}
                        alt='miner image'
                    />
                </div>

                {animations.map(({ id, x, y }) => (
                    createPortal(
                        <div
                            key={id}
                            className="absolute animate-fly-up-fade"
                            style={{ top: y, left: x }}
                        >
                            <div className="border-[1px] border-[#004A50] bg-[#B8D2C3] text-xl font-bold rounded-3xl">
                                <p className='px-3 py-1 font-bold'>+ 4P</p>
                            </div>
                        </div>,
                        document.body
                    )
                ))}
            </div>
            <Layout isNavbarVisible={isNavbarVisible}/>
        </>
    );
}

export default Miner;
