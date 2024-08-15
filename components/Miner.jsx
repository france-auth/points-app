"use client"

import React from 'react';
import Image from 'next/image';
import { miner } from '@/public/assets/images';
import { useState } from "react";
import { createPortal } from "react-dom";


const Miner = () => {
    
    const [isAnimating, setIsAnimating] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleClick = (event) => {
        setPosition({ x: event.clientX, y: event.clientY });
        setIsAnimating(true);

        setTimeout(() => {
            setIsAnimating(false)
        }, 500);   // Animation duration (2 seconds)
};

    return (
        <div className='flex w-full justify-center items-center bg-[#9CB2A4] border-y-[1px] border-[#004A50] p-7'>
            <div className='flex bg-[#C4DACC] justify-center items-center w-[12.5rem] h-[14.5rem] rounded-3xl border-[1px] border-[#004A50] cursor-pointer' onClick={handleClick}>
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
                    <div className="border-[1px] border-[#004A50] bg-[#B8D2C3]text-xl font-bold rounded-3xl"><p className='px-3 py-1 font-bold'>+ 4P</p></div>
                </div>,
                document.body
            )}
        </div>
    )
}

export default Miner

/*  #B8D2C3  
9CB2A4  */