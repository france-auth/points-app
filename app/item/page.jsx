"use client"

import React, { useState } from 'react';
import { aura, background, accessories, tapBoosts, chatPotions, batteryPotions } from '@/data';
import NavBar from '@/components/NavBar';
import PurchaseModal from '@/components/PurchaseModal';
import Image from 'next/image';
import Layout from '@/components/Layout';



const Item = () => {

    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const openModal = (item) => {
        setSelectedItem(item)
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
        setSelectedItem(null)
    };


    return (
        <Layout>
            <PurchaseModal show={showModal} close={closeModal} item={selectedItem}/>

            {/** CLOSET - Aura */}
            <div className='bg-[#9CB2A4] min-h-screen p-4'>
                <div className='w-full bg-[#C4DACC] flex flex-col rounded-xl p-2 border border-[#004A50]'>


                    {/** CLOSET - Aura */}
                    <h3 className='m-3 ml-6'>Closet</h3>
                    <p className='mb-2 ml-6'>Aura</p>

                    <div>
                        <div className='flex justify-around items-center '>
                            {aura.map((aura, index) => (
                                <div key={index}
                                className='flex flex-col justify-center items-center cursor-pointer'
                                onClick={() => openModal(aura)}>
                                    <Image src={aura.aura} />
                                    <p>{aura.name}</p>
                                    <p>{aura.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <hr className='flex flex-col items-center justify-center mx-auto my-4 w-[25rem] border-[#9CB2A4]'></hr>



                    {/** CLOSET - Background */}
                    <h3 className='m-3 mt-0 mb-2 ml-6'>Background</h3>

                    <div>
                        <div className='flex justify-around items-center '>
                            {background.map((bg, index) => (
                                <div key={index}
                                className='flex flex-col justify-center items-center cursor-pointer'
                                onClick={() => openModal(bg)}>
                                    <Image src={bg.bg} />
                                    <p>{bg.name}</p>
                                    <p>{bg.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <hr className='flex flex-col items-center justify-center mx-auto my-4 w-[25rem] border-[#9CB2A4]'></hr>




                    {/** BOOST - Accessories */}
                    <h3 className='m-3 mb-2 ml-6'>Boost</h3>
                    <p className='mb-2 ml-6'>Accessories</p>

                    <div>
                        <div className='flex justify-around items-center '>
                            {accessories.map((acc, index) => (
                                <div key={index}
                                className='flex flex-col justify-center items-center cursor-pointer'
                                onClick={() => openModal(acc)}
                                >
                                    <Image src={acc.acc} />
                                    <p>{acc.name}</p>
                                    <p>{acc.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <hr className='flex flex-col items-center justify-center mx-auto my-4 w-[25rem] border-[#9CB2A4]'></hr>




                    {/** BOOST - Tap Boost */}
                    <h3 className='m-3 mb-3 ml-6'>Tap Boost</h3>
                    <div>
                        <div className='flex flex-col justify-evenly items-center'>
                            {tapBoosts.map((tap, index) => (
                                <div key={index}
                                className='flex justify-between items-center w-full px-6 cursor-pointer'>
                                    <div className='flex mb-4'>
                                        <Image src={tap.img} />
                                        <div className='flex flex-col justify-center ml-4 mb-2'>
                                            <p>{tap.name}</p>
                                            <p>{tap.xp}</p>
                                        </div>
                                    </div>
                                    <p className='flex font-medium py-4 mb-4'>{tap.arrow}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <hr className='flex flex-col items-center justify-center mx-auto my-4 w-[25rem] border-[#9CB2A4]'></hr>




                    {/** BOOST - Chatting Potions */}
                    <h3 className='m-3 mb-3 mt-0 ml-6'>CHatting Potions</h3>
                    <div>
                        <div className='flex flex-col justify-evenly items-center'>
                            {chatPotions.map((chat, index) => (
                                <div key={index}
                                className='flex justify-between items-center w-full px-6 cursor-pointer'>
                                    <div className='flex mb-4'>
                                        <Image src={chat.img} />
                                        <div className='flex flex-col text-sm justify-center ml-4 mb-2'>
                                            <p>{chat.name}</p>
                                            <p>{chat.xp}</p>
                                        </div>
                                    </div>
                                    <p className='flex font-medium py-4 mb-4'>{chat.arrow}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <hr className='flex flex-col items-center justify-center mx-auto my-4 w-[25rem] border-[#9CB2A4]'></hr>




                    {/** BOOST - Battery Potions */}
                    <h3 className='m-3 mb-3 mt-0 ml-6'>Battery Potions</h3>
                    <div>
                        <div className='flex flex-col justify-evenly items-center'>
                            {batteryPotions.map((battery, index) => (
                                <div key={index}
                                className='flex justify-between items-center w-full px-6 cursor-pointer'>
                                    <div className='flex mb-4'>
                                        <Image src={battery.img} />
                                        <div className='flex flex-col text-sm justify-center ml-4 mb-2'>
                                            <p>{battery.name}</p>
                                            <p>{battery.xp}</p>
                                        </div>
                                    </div>
                                    <p className='flex font-medium py-4 mb-4'>{battery.arrow}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <hr className='flex flex-col items-center justify-center mx-auto mt-4 w-[25rem] border-[#9CB2A4]'></hr>
                </div>
            </div>
        </Layout>
    )
}

export default Item