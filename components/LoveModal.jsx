import React from 'react';
import { useState, useEffect } from 'react';
import { backIcon } from '@/public/assets/images'
import Image from 'next/image'
import { heartsModal } from '@/public/assets/images'

const TierModal = ({isOpen2, isClosed2}) => {
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (!isOpen2) {
            setIsClosing(false);
        }
    }, [isOpen2]);

  // Handle close with animation
    const handleClose = () => {
        setIsClosing(true); // Trigger the closing animation
        setTimeout(() => {
        isClosed2(); // Call the parent close function after the animation is done
        setIsClosing(false);
        }, 300); // Match the timeout with the animation duration (0.3s or 300ms)
    };
    
    return (!isOpen2 ? null : (
        <div
        className='fixed inset-0 xs:p-4 xr:p-7 bg-[#C4DACC] bg-opacity-25 backdrop-brightness-50 flex justify-center items-center z-[999]'>
            <div
            className={`flex flex-col bg-[#CEE4D6] rounded-3xl p-4 w-full
            ${isClosing ? 'modal-animate-out' : 'modal-animate-in'}`}>
                <div className='flex'>
                    <Image 
                    src={backIcon}
                    width={42} height={42}
                    alt='back arrow'
                    className='flex cursor-pointer'
                    onClick={handleClose}/>
                </div>

                <div className='flex justify-between mt-3 mb-1 items-center'>
                    <p
                    className='flex ml-3'>
                        LOVE
                    </p>
                    <Image src={heartsModal} 
                    alt='heart modal img'
                    className='mr-3'/>
                </div>

                <div className='mx-3 text-[14.5px]'>
                        <p
                        className='my-3 flex justify-center'>
                            Grow your bond with your Soul by petting and chatting, and gifting items.
                        </p>

                        <p className='mb-2'>As you build affection, you'll earn more points. Who knows? Higher affection might bring some nice surprises your way!</p>
                </div>
            </div>
        </div>
    ))
}

export default TierModal