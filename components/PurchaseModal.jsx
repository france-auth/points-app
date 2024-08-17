import React from 'react'
import { backIcon, purchase } from '@/public/assets/images'
import Image from 'next/image'

const PurchaseModal = ({show, close, item}) => {
    
    return (!show ? null : (
        <div
        className='fixed inset-0 bg-[#C4DACC] bg-opacity-25 backdrop-brightness-50 flex justify-center items-center z-[999]'>
            <div
            className='flex flex-col bg-[#CEE4D6] rounded-3xl p-4 w-[23rem]'>
                <div className='flex flex-col'>
                    <Image 
                    src={backIcon}
                    alt='back arrow'
                    width={40}
                    className='flex cursor-pointer'
                    onClick={close}/>

                    <Image 
                    src={purchase}
                    alt='purchase item'
                    className='flex mx-auto'
                    onClick={close}/>
                </div>

                <div className='flex flex-col items-center px-3 justify-center'>
                        <p
                        className='mb-3 mt-8 font-semibold'>
                            {item.name} ({item.price})
                        </p>
                        <p className='text-center'>
                            Increase your max petting capacity - boosts hourly recharge rate by 5s
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