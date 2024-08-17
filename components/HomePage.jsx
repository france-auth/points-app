"use client"

import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import TierModal from '@/components/TierModal';
import LoveModal from '@/components/LoveModal';
import BatteryModal from '@/components/BatteryModal';
import { batteryModal } from '@/public/assets/images';
import { love } from '@/data';

const HomePage = () => {

    
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
    return (
        <main>
            <TierModal isOpen={showModal} isClosed={closeModal}/>
            <LoveModal isOpen2={showModal2} isClosed2={closeModal2}/>
            <BatteryModal isOpen3={showModal3} isClosed3={closeModal3}/>


            <div className="flex flex-col w-full p-6 border-b-[1px]">
                <div className='flex justify-between w-full'>
                        <h2 className="font-semibold text-right">AVERY</h2>
                    <div className='flex'>
                        <p>194, 200 P <span className='font-semibold'>GOLD</span></p>
                            <div className='flex ml-3 mb-2 justify-center w-7 rounded-full bg-[#B8D2C3] cursor-pointer' 
                            onClick={openModal}>
                            <p className='font-semibold bg-[#B9D2C3] text-center'>?</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between w-full'>
                    <div className='flex'>
                        <h2 className="flex font-normal text-right">LOVE
                        </h2>
                        <div className='flex items-center ml-2'>
                            {love.map((love) => (
                                <Image key={love.id}
                                src={love.img} 
                                className='flex mx-1 items-center mt-1'/>
                            ))}
                        </div> 
                        <div className='flex ml-3 justify-center w-7 cursor-pointer rounded-full bg-[#B8D2C3]'
                        onClick={openModal2}>
                            <p className='font-semibold bg-[#B9D2C3] text-center'>?</p>
                        </div>
                    </div>

                    <div className=' flex w-[43%] justify-between'>
                        <p>BATTERY</p>
                        <Image
                        src={batteryModal}
                        alt='battery bar'/>
                        <div className='flex justify-center w-7 cursor-pointer rounded-full bg-[#B8D2C3]'
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