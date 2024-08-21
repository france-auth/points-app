import React from 'react';
import { useState, useEffect } from 'react';
import { backIcon} from '@/public/assets/images'
import Image from 'next/image'

const PurchaseModal = ({show, close, item}) => {
    
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (!item) {
            setIsClosing(false);
        }
    }, [item]);

  // Handle close with animation
    const handleClose = () => {
        setIsClosing(true); // Trigger the closing animation
        setTimeout(() => {
        close(); // Call the parent close function after the animation is done
        setIsClosing(false);
        }, 300); // Match the timeout with the animation duration (0.3s or 300ms)
    };
    
    return (!show ? null : (
        <div
        className={`fixed inset-0 bg-[#C4DACC] bg-opacity-25 backdrop-brightness-50 flex justify-center items-center z-[999]
        `}>
            <div
            className={`flex flex-col bg-[#CEE4D6] rounded-3xl p-4 w-[23rem]
            ${isClosing ? 'modal-animate-out' : 'modal-animate-in'}`}>
                <div className='flex flex-col'>
                    <Image 
                    src={backIcon}
                    alt='back arrow'
                    width={50}
                    className='flex cursor-pointer'
                    onClick={handleClose}/>

                    <Image 
                    src={item.modalImg}
                    alt={`${item.img} img`}
                    className='flex mx-auto'/>
                </div>

                <div className='flex flex-col items-center px-3 justify-center'>
                        <p
                        className='mb-3 mt-8 font-semibold'>
                            {item.name} ({item.price})
                        </p>
                        <p className='text-center'>
                            {item.info}
                        </p>
                </div>

                    {/** PURCHASE ITEM BUTTON */}
                <button type="button"
                    className='text-[#FFFFFF] w-full hover:bg-[#02363b] bg-[#004A50] rounded-2xl px-5 py-3 mt-4 cursor-pointer'
                    >BUY
                </button>
            </div>
        </div>
    ))
}

export default PurchaseModal