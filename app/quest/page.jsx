"use client"

import React, { useState } from 'react';
import { navLinks, quests, missions} from '@/data';
import Link from 'next/link';
import Image from 'next/image';
import { userIcon } from '@/public/assets/images';

const Quest = () => {
    return (
        <main>
            <NavBar />
            <div className='flex flex-col items-center p-3 min-h-screen max-w-full bg-[#9CB2A4]'>
                <h1 className='font-bold mt-4'>DAILY CHECK IN</h1>
                <p>Get your daily points</p>

                <div className='flex flex-col mt-5 w-full items-center'>
                    {quests.map((quest) => (
                        <div key={quest.id}
                        className='flex w-[22rem] justify-between mb-1 bg-[#C4DACC] border rounded-xl border-[#004A50] px-5 py-5 cursor-pointer'>
                            <div className='flex justify-evenly'>
                                <Image 
                                src={quest.icon}
                                alt='user icon'
                                className='mr-4'
                                />
                                <p>{quest.task}</p>
                            </div>
                            <div>{quest.xp}</div>
                        </div>
                    ))}
                </div>


                <h1 className='font-bold mt-14'>MISSION</h1>
                <p>LEVEL-UP with your soul</p>

                <div className='flex flex-col mt-5 mb-9 w-full items-center'>
                    {missions.map((mission) => (
                        <div key={mission.id}
                        className='flex w-[22rem] justify-between mb-1 bg-[#C4DACC] border rounded-xl border-[#004A50] px-5 py-5 cursor-pointer'>
                            <div className='flex justify-evenly'>
                                <Image 
                                src={mission.icon}
                                alt='user icon'
                                className='mr-4'
                                />
                                <p>{mission.task}</p>
                            </div>
                            <div>{mission.xp}</div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Quest







const NavBar = () => {

    // Step 1: Set the first item as active by default
    const [activeIndex, setActiveIndex] = useState(navLinks[2].id);

    const handleNavClick = (id) => {
        setActiveIndex(id); // Step 2: Update activeIndex on click
    };
    return (
        <div className='sticky top-0 z-50'>
            <ul className="flex px-2 py-3 mb-1 list-none justify-center">
            {navLinks.map((nav) => (
                <Link
                key={nav.id}
                href={`/${nav.id}`}
                onClick={() => handleNavClick(nav.id)}
                className={`flex px-2 py-2 ${
                    nav.id === activeIndex
                    ? "underline font-bold"
                    : ""
                }`}
                >
                {nav.title}
                </Link>
            ))}
            </ul>
            <hr className='border-[#004A50]' />
        </div>
    )
};