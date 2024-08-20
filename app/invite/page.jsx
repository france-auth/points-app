"use client"

import React, { useState } from 'react';
import { invites} from '@/data';
import Image from 'next/image';
import InviteModal from '@/components/InviteModal';
import Layout from '@/components/Layout';

const Invite = () => {

    
    const [showModal, setShowModal] = useState(false);
    const [copied, setCopied] = useState(false);

    // To keep track if the user has no referrals or at least one referral
    const hasReferrals = invites.length > 0;

    const x = invites.length; // Number of referrals
    const referralCode = 'XMDNAS'; // Replace with dynamic code later


    const handleCopyCode = () => {
        navigator.clipboard.writeText(referralCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500); // Reset after 1.5 seconds
    };

    const openModal = () => {
        setShowModal(true);
    }
    const closeModal = () => {
        setShowModal(false);
    }


    {return !hasReferrals ? (
            <Layout>
                <InviteModal 
                isOpen={showModal} 
                isClosed={closeModal}
                onCopy={handleCopyCode}
                copied={copied}
                referralCode={referralCode}/>
                <div className='flex flex-col bg-[#9CB2A4]  min-h-full p-3'>
                    <div className='flex flex-col items-center p-3 py-9 w-full bg-[#C4DACC] rounded-xl'>
                        {/* INVITES */}
                        <p className='font-semibold text-lg mt-3'>Invite Your Frens</p>
                        <h1 className='font-semibold text-4xl my-5 overflow-hidden'>{referralCode}</h1>
                        <p className='font-semibold underline mb-5'>Invite to EARN!</p>
    
                        {/* SHARE BUTTON */}
                        <button type="button"
                        className='text-[#FFFFFF] w-full bg-[#004A50] rounded-2xl px-5 py-3 my-3 cursor-pointer'
                        onClick={openModal}
                        >SHARE CODE TO FRENS</button>
                    </div>
                </div>
            </Layout>
        ) : (
                <Layout>
                    <InviteModal 
                    isOpen={showModal} 
                    isClosed={closeModal}
                    onCopy={handleCopyCode}
                    copied={copied}
                    referralCode={referralCode}/>
                    <div className='flex flex-col bg-[#9CB2A4]  min-h-full p-3'>
                        <div className='flex flex-col items-center p-3 pt-9 w-full bg-[#CEE4D6] rounded-xl'>
                            {/* INVITES */}
                            <h1 className='font-semibold text-4xl mt-5 mb-4 overflow-hidden'>{x} Frens</h1>
                            <p className='font-semibold underline mb-5'>Invite to EARN!</p>
        
                            {/* SHARE BUTTON */}
                            <button type="button"
                            className='text-[#FFFFFF] w-full bg-[#004A50] rounded-2xl px-5 py-3 mt-5 mb-4 cursor-pointer'
                            onClick={openModal}
                            >SHARE CODE TO FRENS</button>
                            
                            <div className='flex w-full justify-start mb-2'>
                                <p className='flex mt-6 font-semibold text-base'>Frens List</p>
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
}

export default Invite