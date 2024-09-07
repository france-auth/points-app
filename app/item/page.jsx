"use client"

import React, { useState } from 'react';
import { backgrounds, headgears, facewears, tapBoosts, chatRechargePotions } from '@/data';
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
        <main>
            <PurchaseModal show={showModal} close={closeModal} item={selectedItem}/>

            {/** BACKGROUNDS */}
            <div className='bg-[#9CB2A4] text-sm p-4 pb-0'>
                <div className='w-full bg-[#C4DACC] flex flex-col rounded-xl p-2 border border-[#004A50]'>


                    {/** BACKGROUNDS */}
                    <h3 className='m-3 mb-4 ml-6 '>Gift Shop</h3>
                    <p className='mb-4 ml-6'>background</p>

                    <div>
                        <div className='flex justify-around items-center '>
                            {backgrounds.map((bg, index) => (
                                <div key={index}
                                className='flex flex-col justify-center items-center cursor-pointer'
                                onClick={() => openModal(bg)}>
                                    <Image src={bg.img} alt='background img' />
                                    <p>{bg.name}</p>
                                    <p>{bg.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <hr className='flex flex-col items-center justify-center mx-auto my-4 w-full border-[#9CB2A4]'></hr>



                    {/**  HEADGEARS */}
                    <p className='m-2 ml-6'>Headgear</p>

                    <div>
                        <div className='flex justify-around items-center'>
                            {headgears.map((hg, index) => (
                                <div key={index}
                                className='flex flex-col items-center cursor-pointer'
                                onClick={() => openModal(hg)}>
                                    <Image src={hg.img} alt='headgear ing' 
                                    height={80}/>
                                    <div className='flex-col justify-center text-center'>
                                        <p>{hg.name}</p>
                                        <p>{hg.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <hr className='flex flex-col items-center justify-center mx-auto my-4 w-full border-[#9CB2A4]'></hr>




                    {/** FACEWEARS */}
                    <p className='m-2 ml-6'>Faceware</p>
                    <div>
                        <div className='flex justify-around items-center mb-5'>
                            {facewears.map((fw, index) => (
                                <div key={index}
                                className='flex flex-col justify-center items-center cursor-pointer'
                                onClick={() => openModal(fw)}
                                >
                                    <Image src={fw.img} alt='facewear img' />
                                    <p>{fw.name}</p>
                                    <p>{fw.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            
            {/** BOOSTS */}
            <div className='bg-[#9CB2A4] text-sm p-4'>
                <div className='w-full bg-[#C4DACC] flex flex-col rounded-xl p-2 border border-[#004A50]'>

                    {/** BOOST - Chatting Potions */}
                    <h3 className='m-3 mb-3 ml-6'>Boost</h3>
                    <p className='m-2 ml-6'>Chat Recharge Potion</p>
                    <div>
                        <div 
                        className='flex flex-col justify-evenly items-center'>
                            {chatRechargePotions.map((crp, index) => (
                                <div key={index}
                                className='flex justify-between items-center w-full px-6 cursor-pointer'
                                onClick={() => openModal(crp)}
                                >
                                    <div className='flex mb-4'>
                                        <Image src={crp.img} alt='chat recharge potion'/>
                                        <div className='flex flex-col justify-center ml-4 mb-2'>
                                            <p>{crp.name}</p>
                                            <p>{crp.price}</p>
                                        </div>
                                    </div>
                                    <p className='flex font-medium py-4 mb-4'>{crp.arrow}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <hr className='flex flex-col items-center justify-center mx-auto my-4 w-full border-[#9CB2A4]'></hr>




                    {/** BOOST - Tap Boosts */}
                    <h3 className='m-2 ml-6'>Tap Boost</h3>
                    <div>
                        <div className='flex flex-col justify-evenly items-center'>
                            {tapBoosts.map((tap, index) => (
                                <div key={index}
                                className='flex justify-between items-center w-full px-6 cursor-pointer'
                                onClick={() => openModal(tap)}
                                >
                                    <div className='flex mb-4'>
                                        <Image src={tap.img} alt='tap boost img' />
                                        <div className='flex flex-col text-sm justify-center ml-4 mb-2'>
                                            <p>{tap.name}</p>
                                            <p>{tap.price}</p>
                                        </div>
                                    </div>
                                    <p className='flex font-medium py-4 mb-4'>{tap.arrow}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Item