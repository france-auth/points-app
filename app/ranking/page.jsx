"use client"

import React, { useState } from 'react';
import { navLinks, rankings, rankPageButtons } from '@/data';
import { userIcon } from '@/public/assets/images'; 
import Link from 'next/link';
import Image from 'next/image';

const Ranking = () => {

    const userName = "MY NAME";
    const userRank = "180,203,223";


    return (
        <main>
            <NavBar />
            <div className='bg-[#9CB2A4] min-h-screen p-4'>
                <div className='w-full bg-transparent flex flex-col'>
                    <div className='flex justify-center items-center'>

                        {/** USER NAME AND RANK CARD */}
                        <div
                        className='flex w-[23.5rem] border text-sm border-[#004A50] px-5 py-5 rounded-xl justify-between bg-[#D8EEE0] mb-3'>
                            <div className='flex items-center'>
                                <Image
                                src={userIcon}
                                alt='user icon'
                                className='mr-3'/>
                                <p
                                className='flex justify-center items-center'>{`${userName}`}</p>
                            </div>
                            <p className='flex items-center'>{`${userRank}`}</p>
                        </div>
                    </div>
                    {/** TOP MINERS CARD */}
                    <div className='flex justify-center items-center'>
                    <div className='flex justify-between p-3 w-[23.5rem] rounded-xl border border-[#004A50] bg-[#C4DACC]'>
                        <p>TOP 100 MINERS</p>

                        <select
                        name="user-rank" id=""
                        className='outline-none bg-inherit font-semibold'>
                            <option
                            value="gold">GOLD</option>
                            <option
                            value="bronze">BRONZE</option>
                            <option
                            value="silver">SILVER</option>
                            <option
                            value="platinum">PLATINUM</option>
                            <option
                            value="diamond">DIAMOND</option>
                        </select>
                    </div>
                    </div>

                    {/** RANKINGS */}
                    <div>
                        <div className='flex flex-col mt-3 w-full items-center'>
                            {rankings.map((ranking, index) => (
                                <div key={ranking.id}
                                className={`flex w-[23.5rem] border text-sm border-[#004A50] px-5 py-5 cursor-pointer justify-between bg-[#C4DACC]
                                ${index === rankings.length - 1 ? "border-b" : 'border-b-0'}
                                ${index === rankings[0].id - 1 ? "rounded-t-xl" : ''}
                                ${index === rankings.length - 1 ? "rounded-b-xl" : ''}`}>
                                    <div 
                                    className='flex justify-evenly'>
                                        <Image 
                                        src={ranking.icon}
                                        alt='user icon'
                                        className='mr-3'
                                        />
                                        <p
                                        className='flex items-center'
                                        >{ranking.name}</p>
                                    </div>
                                    <div
                                    className='flex items-center'>{ranking.rank}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/** RANKING PAGE NAV BUTTONS */}
                    <div className='flex justify-center items-center mt-4 mb-2'>
                        <ul
                        className='flex justify-evenly items-center w-[20.5rem]'>
                            {rankPageButtons.map((rankPage, id) => (
                                <li
                                key={rankPage.page}
                                className={`flex p-3 rounded-full w-10 h-10 overflow-hidden justify-center items-center
                                ${id === rankPageButtons[0].page - 1
                                    ? "bg-[#004A50]"
                                    : "bg-[#C4DACC]" }`
                                }>
                                    <p
                                    className={`${id === rankPageButtons[0].page - 1
                                    ? "text-[#C4DACC]"
                                    : "text-[#004A50]" }`
                                    }>
                                        {rankPage.page}</p>
                                </li>
                        ))}</ul>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Ranking







const NavBar = () => {

    // Step 1: Set the first item as active by default
    const [activeIndex, setActiveIndex] = useState(navLinks[3].id);

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