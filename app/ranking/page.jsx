"use client"

import Image from 'next/image';
import { useState } from 'react';
import {rankings, rankPageButtons } from '@/data';
import { userIcon } from '@/public/assets/images';
import Dropdown from '@/components/Dropdown';

const Ranking = () => {

     // State to track the current page
    const [currentPage, setCurrentPage] = useState(1);

    // Handle page click
    const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    };

    const userName = "MY NAME";
    const userTier = "SILVER";
    const userRank = "#243";
    const userXp = "180,203,223";
    const userPoints = "180,203,223";


    return (
        <main>
            <div className='bg-[#9CB2A4] min-h-screen p-4'>
                <div className='w-full bg-transparent flex flex-col'>
                    <div className='flex justify-center items-center'>

                        {/** USER NAME AND RANK CARD */}
                        <div
                        className='xr:flex w-full xs:flex xs:flex-wrap border text-sm border-[#004A50] px-5 py-5 rounded-xl justify-between bg-[#D8EEE0] mb-3'>
                            <div className='flex items-center'>
                                <Image
                                src={userIcon}
                                alt='user icon'
                                className='mr-3'/>
                                <p
                                className='flex justify-center items-center'>{`${userName}`}</p>
                            </div>
                            <div className='flex items center justify-center'>
                                <p className='flex items-center font-bold'>{`${userTier}`} <span className='ml-2 font-normal'>{userRank}</span></p>
                            </div>
                            <p className='flex xs:mt-2 xr:mt-0 items-center'>{`${userPoints}`}</p>
                        </div>
                    </div>

                    {/** TOP MINERS CARD */}
                    <div>
{/*                         <select
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
                        </select> */}
                        <Dropdown />
                    </div>

                    {/** RANKINGS */}
                    <div className='flex w-full justify-center'>
                        <div className='flex flex-col mt-3 w-full items-center'>
                            {rankings.map((ranking, index) => (
                                <div key={ranking.id}
                                className={`flex w-full border text-sm border-[#004A50] px-5 py-5 cursor-pointer justify-between bg-[#C4DACC]
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
                        className='flex justify-evenly items-center w-[20rem]'>
                            {rankPageButtons.map((rankPage) => (
                                <li
                                key={rankPage.page}
                                className={`flex p-3 rounded-full w-10 h-10 overflow-hidden justify-center items-center cursor-pointer
                                    ${currentPage === rankPage.page ? "bg-[#E2F8EA] border border-[#004A50]" : "bg-[#B8D2C3]"}`}
                                    onClick={() => handlePageClick(rankPage.page)}>
                                    <p>
                                        {rankPage.page}
                                    </p>
                                </li>
                        ))}</ul>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Ranking