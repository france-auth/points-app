"use client"

import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import TierModal from '@/components/TierModal';
import LoveModal from '@/components/LoveModal';
import BatteryModal from '@/components/BatteryModal';
import { batteryModal } from '@/public/assets/images';
import { love } from '@/data';
import { fullHeart, emptyHeart, halfBattery, fullBattery, emptyBattery} from '@/public/assets/images';

const HomePage = () => {

    const [filledHearts, setFilledHearts] = useState(0); // Number of filled hearts

     // This function is a placeholder that would be called when a task is completed in order to fill the hearts
    const completeTask = () => {
        setFilledHearts(prev => Math.min(prev + 1, 5)); // Increase filled hearts by 1, up to 5
    };

    // MODALS
    const [showModal, setShowModal] = useState(false); //  Tier Modal
    const [showModal2, setShowModal2] = useState(false); //  Love Modal
    const [showModal3, setShowModal3] = useState(false); //  Battery Modal

    const openModal = () => {
        setShowModal(true);
    }
    const openModal2 = () => {
        setShowModal2(true);
    }
    const openModal3 = () => {
        setShowModal3(true);
    }
    const closeModal = () => {
        setShowModal(false);
    }
    const closeModal2 = () => {
        setShowModal2(false);
    }
    const closeModal3 = () => {
        setShowModal3(false);
    }

    const userName = "AVERY"; // User Name Variable
    const userRank = "BRONZE"; // User Rank Variable
    const userPoints = "0"; // User Points Variable


    return (
        <main>
            <TierModal isOpen={showModal} isClosed={closeModal}/>
            <LoveModal isOpen2={showModal2} isClosed2={closeModal2}/>
            <BatteryModal isOpen3={showModal3} isClosed3={closeModal3}/>


            <div className="flex xs:w-screen-minus-2rem xs:p-4 flex-col w-full p-6 border-b-[1px]">
                <div className='flex justify-between w-full xs:mb-2'>
                        <h2 className="font-semibold text-right">{userName}</h2>
                    <div className='flex'>
                        <p>{`${userPoints} P`}<span className='ml-2 font-semibold'>{userRank}</span></p>
                            <div className='flex ml-3 mb-2 justify-center w-7 rounded-full bg-[#B8D2C3] cursor-pointer' 
                            onClick={openModal}>
                            <p className='font-semibold bg-[#B9D2C3] text-center'>?</p>
                        </div>
                    </div>
                </div>
                <div className='flex xr:flex-row xs:flex-col xr:items-center xs:items-start xr:justify-between w-full'>
                    <div className='flex'>
                        <h2 className="flex font-normal">LOVE
                        </h2>
                        <div className='flex xr:justify-start items-center ml-2'>
                            {love.map((love, index) => (
                                <Image key={index}
                                src={index < filledHearts ? fullHeart : emptyHeart} 
                                className='flex ml-1 items-center mt-1'/>
                            ))}
                        </div> 
                        <div className='flex xs:justify-center ml-3 justify-center w-7 cursor-pointer rounded-full bg-[#B8D2C3]'
                        onClick={openModal2}>
                            <p className='font-semibold bg-[#B9D2C3] text-center'>?</p>
                        </div>
                    </div>

                    <div className='xs:w-full xs:justify-start xr:mt-0 xs:mt-2 flex xr:w-[43%] xr:justify-between'>
                        <p className='flex xr:mr-1 xs:mr-2'>BATTERY</p>
                        <Image
                        src={batteryModal}
                        alt='battery bar'/>
                        <div className='flex  xs:justify-center xr:ml-2 xs:ml-4 justify-center w-7 cursor-pointer rounded-full bg-[#B8D2C3]'
                        onClick={openModal3}>
                            <p className='font-semibold bg-[#B9D2C3] text-center'>?</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default HomePage