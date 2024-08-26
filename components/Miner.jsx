import React, { useState } from 'react';
import { miner } from '@/public/assets/images';
import Image from 'next/image';

const Miner = () => {
    const [animations, setAnimations] = useState([]);

    const handleClick = (event) => {
        const newAnimation = {
            id: Date.now(),
            x: event.clientX,
            y: event.clientY,
        };

        // Add the new animation to the array
        setAnimations(prevAnimations => [...prevAnimations, newAnimation]);

        // Remove the animation after 3 seconds to allow it to complete
        setTimeout(() => {
            setAnimations(prevAnimations => 
                prevAnimations.filter(animation => animation.id !== newAnimation.id)
            );
        }, 3000);
    };

    return (
        <div className='flex w-full justify-center items-center bg-[#9CB2A4] border-y-[1px] border-[#004A50] p-7'
        style={{  backgroundColor: '#9CB2A4' }}>
            <div
                    onClick={handleClick} 
                    style={{position: "relative"}}
                    className='flex bg-[#C4DACC] justify-center items-center w-[12.5rem] h-[14.5rem] rounded-3xl my-2 border-[1px] border-[#004A50] cursor-pointer'>
                    <Image 
                        src={miner}
                        alt='miner image'
                    />
                </div>
            {animations.map(({ id, x, y }) => (
                <div
                    key={id}
                    className="absolute animate-fly-up-fade"
                    style={{ top: y, left: x, transform: 'translate(-50%, -50%)', position: 'absolute' }}
                >
                    <div className="border-[1px] border-[#004A50] bg-[#B8D2C3] text-xl font-bold rounded-3xl">
                        <p className='px-3 py-1 font-bold'>+ 4P</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Miner;



/* import React, { useState } from 'react';
import Image from 'next/image';
import { miner } from '@/public/assets/images';
import { createPortal } from "react-dom";
import Layout from '@/components/Layout';

const Miner = ({ displayText, handleMinerClick }) => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);
    const [animations, setAnimations] = useState([]);

    const handleClick = (event) => {
        if (displayText === "TAP THE FACE") {
            const newAnimation = {
                id: Date.now(),
                x: event.clientX,
                y: event.clientY,
            };

            // Add the new animation to the array
            setAnimations(prevAnimations => [...prevAnimations, newAnimation]);

            handleMinerClick();
            setIsNavbarVisible(true);

            // Remove the animation after 3 seconds to allow it to complete
            setTimeout(() => {
                setAnimations(prevAnimations => 
                    prevAnimations.filter(animation => animation.id !== newAnimation.id)
                );
            }, 3000); // Ensure this matches the CSS animation duration
        }
    };

    return (
        <>
            <div className='flex w-full justify-center items-center bg-[#9CB2A4] border-y-[1px] border-[#004A50] p-7 relative'>
                <div 
                    onClick={handleClick} 
                    style={{position: "relative"}}
                    className='flex bg-[#C4DACC] justify-center items-center w-[12.5rem] h-[14.5rem] rounded-3xl my-2 border-[1px] border-[#004A50] cursor-pointer'>
                    <Image 
                        src={miner}
                        alt='miner image'
                    />

                {/* Render all active animations *//*}
                    {animations.map(({ id, x, y }) => (
                        <div
                            key={id}
                            className="absolute animate-fly-up-fade"
                            style={{ top: y, left: x, transform: 'translate(-50%, -50%)', position: "absolute"}}
                        >
                            <div className="z-[999px] border-[1px] border-[#004A50] bg-[#B8D2C3] text-xl font-bold rounded-3xl">
                                <p className='z-[999px] px-3 py-1 font-bold'>+ 4P</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Layout isNavbarVisible={isNavbarVisible}/>
        </>
    );
}

export default Miner;
 */