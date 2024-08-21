import React from 'react';
import { useState, useEffect } from 'react';
import { backIcon } from '@/public/assets/images'
import { batteryModal } from '@/public/assets/images'
import Image from 'next/image'

const BatteryModal = ({isOpen3, isClosed3}) => {
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (!isOpen3) {
            setIsClosing(false);
        }
    }, [isOpen3]);

  // Handle close with animation
    const handleClose = () => {
        setIsClosing(true); // Trigger the closing animation
        setTimeout(() => {
        isClosed3(); // Call the parent close function after the animation is done
        setIsClosing(false);
        }, 300); // Match the timeout with the animation duration (0.3s or 300ms)
    };

    
    return (!isOpen3 ? null : (
        <div
        className='fixed inset-0 xs:p-3 xr:p-7 bg-[#C4DACC] bg-opacity-25 backdrop-brightness-50 flex justify-center items-center z-[999]'>
            <div
            className={`flex flex-col bg-[#CEE4D6] rounded-3xl p-4 w-full
            ${isClosing ? 'modal-animate-out' : 'modal-animate-in'}`}>
                <div className='flex'>
                    <Image 
                    src={backIcon}
                    alt='back arrow'
                    width={40}
                    className='flex cursor-pointer'
                    onClick={handleClose}/>
                </div>

                <div className='flex justify-between mt-3 mb-1 items-center'>
                    <p
                    className='flex ml-3'>
                        BATTERY
                    </p>
                    <Image src={batteryModal} 
                    className='mr-3'/>
                </div>

                <div className='mx-3 text-[14.5px]'>
                        <p
                        className='my-3 flex justify-center'>
                            Your interactions with your Clone use up battery over time.
                        </p>

                        <p className='mb-2'>You can buy repair items with points to recharge the battery.</p>

                        <p className='mb-2'>Don't worry though - it also recharges automatically if you wait a bit!</p>
                </div>
            </div>
        </div>
    ))
}

export default BatteryModal