import React from 'react';
import { useState, useEffect } from 'react';
import { backIcon } from '@/public/assets/images'
import Image from 'next/image'
import { inviteRewards } from '@/data'

const InviteModal = ({isOpen, isClosed, referralCode, onCopy, copied}) => {

    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (!isOpen) {
            setIsClosing(false);
        }
    }, [isOpen]);

  // Handle close with animation
    const handleClose = () => {
        setIsClosing(true); // Trigger the closing animation
        setTimeout(() => {
        isClosed(); // Call the parent close function after the animation is done
        setIsClosing(false);
        }, 300); // Match the timeout with the animation duration (0.3s or 300ms)
    };

    

    return (!isOpen ? null : (
        <div
        className='fixed inset-0 xs:p-3 xx:p-6 xr:p-7 bg-[#C4DACC] bg-opacity-25 backdrop-brightness-50 flex justify-center items-center z-[999]'>
            <div
            className={`flex flex-col bg-[#CEE4D6] rounded-3xl p-4  w-full
            ${isClosing ? 'modal-animate-out' : 'modal-animate-in'}`}>
                <div className='flex flex-col'>
                    <Image 
                    src={backIcon}
                    width={42} height={42}
                    alt='back arrow'
                    className=' cursor-pointer'
                    onClick={handleClose}/>

                    <p
                    className='flex xs:text-sm xx:text-base justify-center font-semibold mt-3 mb-4 mx-auto'>
                        Invitation Rewards:
                    </p>
                </div>

                <ul className='px-4'>
                    {inviteRewards.map((reward) => (
                        <li
                        key={reward.id}
                        className=' xs:my-1 xx:text-sm xx:my-2 xs:text-[13px] justify-center'>
                            {reward.invite}
                        </li>
                    ))}
                </ul>

                    {/** COPY INVITE LINK BUTTON 367378 */}
                {!copied ? (
                    <button 
                    type="button"
                    onClick={onCopy}
                    className='text-[#FFFFFF] w-full bg-[#004A50] rounded-2xl px-5 py-3 mt-4 cursor-pointer transition'
                        >COPY INVITE CODE
                    </button>
                ) : (
                    <button 
                    type="button"
                    onClick={onCopy}
                    className='text-[#FFFFFF] w-full bg-[#367378] rounded-2xl px-5 py-3 mt-4 cursor-pointer'
                        >COPIED: {referralCode}
                    </button>
                )}
            </div>
        </div>
    ))
}

export default InviteModal