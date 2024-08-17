"use client"

import React, { useState } from 'react';
import { invites } from '@/data';
import Image from 'next/image';
import InviteModal from '@/components/InviteModal';
import Layout from '@/components/Layout';
import NavBar from '@/components/NavBar';

const Invite = () => {

    const x = 5; // Number of referrals

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    }
    const closeModal = () => {
        setShowModal(false);
    }


    return (
        <Layout>
            <InviteModal isOpen={showModal} isClosed={closeModal}/>
            <NavBar />
            <div className='flex flex-col bg-[#9CB2A4]  min-h-full p-3'>
                <div className='flex flex-col items-center p-3 pt-9 w-full bg-[#CEE4D6] rounded-xl'>
                    {/* INVITES */}
                    <h1 className='font-extrabold text-3xl mb-2 overflow-hidden'>{x} Frens</h1>
                    <p className='font-medium'>Invite to EARN!</p>

                    {/* SHARE BUTTON */}
                    <button type="button"
                    className='text-[#FFFFFF] w-full hover:bg-[#02363b] bg-[#004A50] rounded-2xl px-5 py-3 mt-5 cursor-pointer'
                    onClick={openModal}
                    >SHARE IT TO FRENS</button>
                    
                    <div className='flex w-full justify-start mb-2'>
                        <p className='flex mt-6 ml-11 font-semibold text-base'>Frens List</p>
                    </div>


                    <div className='flex flex-col mt-0 w-full items-center cursor-pointer'>
                    {invites.map((invite) => (
                        <div key={invite.id}
                        className='flex w-full justify-between bg-[#C4DACC] border rounded-xl px-5 py-5'>
                            <div className='flex justify-evenly text-sm'>
                                <Image 
                                src={invite.icon}
                                alt='user icon'
                                className='mr-3'
                                />
                                <div>
                                    <p>{invite.name}</p>
                                    <p>{invite.points} <span className='font-semibold '>{invite.rank}</span></p>
                                </div>
                            </div>
                            <div 
                            className='flex items-center'>{invite.earnedXp}</div>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </Layout>
    )
}

export default Invite