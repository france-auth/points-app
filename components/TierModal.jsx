import React from 'react';
import { useState, useEffect} from 'react';
import { backIcon } from '@/public/assets/images'
import Image from 'next/image'

const TierModal = ({isOpen, isClosed}) => {

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
        className='fixed xs:p-3 xr:p-7 inset-0 bg-[#C4DACC] bg-opacity-25 backdrop-brightness-50 flex justify-center items-center z-[999]'>
            <div
            className={`flex flex-col bg-[#CEE4D6] rounded-3xl p-4 w-full
            ${isClosing ? 'modal-animate-out' : 'modal-animate-in'}`}>
                <div className='flex'>
                    <Image 
                    src={backIcon}
                    alt='back arrow'
                    width={42} height={42}
                    className='flex cursor-pointer'
                    onClick={handleClose}/>
                </div>

                <div className='flex justify-between mt-3 mb-1 items-center'>
                    <p
                    className='flex ml-3'>
                        TIER
                    </p>
                    <p
                    className='flex mr-3'>
                        194,200 P <span className='font-semibold ml-2'>GOLD</span>
                    </p>
                </div>

                <div className='mx-3 text-[14.5px]'>
                        <p
                        className='my-3 flex justify-center'>
                            Tiers are given based on accumulated points relative to all participants.
                        </p>
                        <ul className='px-3 list-disc'>
                            <li>Points accumulates through interactions with Clones</li>
                            <li>Higher tiers allow more conversations with Clones</li>
                        </ul>

                        <p className='my-3'>Tier Breakdown:</p>
                        <ul className='px-3 list-disc mb-3'>
                            <li>Bronze: 100-70% of participants</li>
                            <li>Silver: 70-40%</li>
                            <li>Gold: 40-25%</li>
                            <li>Platinum: 25-10%</li>
                            <li>Diamond: Top 10%</li>
                        </ul>

                        <p className='mb-2'>Check out your rank in the 'RANKING' tab</p>
                </div>
            </div>
        </div>
    ))
}

export default TierModal