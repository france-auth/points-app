"use client"

import React from 'react';
import {quests, missions} from '@/data';
import Image from 'next/image';
import Layout from '@/components/Layout';

const Quest = () => {
    return (
        <Layout>
            <div className='flex flex-col items-center p-3 min-h-screen max-w-full bg-[#9CB2A4]'>
                <h1 className='font-bold mt-4'>DAILY CHECK IN</h1>
                <p>Get your daily points</p>

                <div className='flex flex-col mt-5 w-full items-center'>
                    {quests.map((quest) => (
                        <div key={quest.id}
                        className='flex w-[23.5rem] text-sm justify-between mb-1 bg-[#C4DACC] border rounded-xl border-[#004A50] px-5 py-5 cursor-pointer'>
                            <div className='flex justify-evenly'>
                                <Image 
                                src={quest.icon}
                                alt='user icon'
                                className='mr-3'
                                />
                                <p>{quest.task}</p>
                            </div>
                            <div className='flex items-center'>{quest.xp}</div>
                        </div>
                    ))}
                </div>


                <h1 className='font-bold mt-14'>MISSION</h1>
                <p>LEVEL-UP with your soul</p>

                <div className='flex flex-col mt-5 mb-1 w-full items-center'>
                    {missions.map((mission) => (
                        <div key={mission.id}
                            className='flex w-[23.5rem] text-sm justify-between mb-1 bg-[#C4DACC] border rounded-xl border-[#004A50] px-5 py-5 cursor-pointer'>
                            <div className='flex justify-evenly'>
                                <Image 
                                    src={mission.icon}
                                    alt='user icon'
                                    className='mr-3'
                                />
                                <p>{mission.task}</p>
                            </div>
                            <div className='flex items-center'>{mission.xp}</div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default Quest