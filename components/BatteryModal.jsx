import React from 'react'
import { backIcon } from '@/public/assets/images'
import { batteryModal } from '@/public/assets/images'
import Image from 'next/image'

const BatteryModal = ({isOpen3, isClosed3}) => {
    
    return (!isOpen3 ? null : (
        <div
        className='fixed inset-0 bg-[#C4DACC] bg-opacity-25 backdrop-brightness-50 flex justify-center items-center z-[999]'>
            <div
            className='flex flex-col bg-[#CEE4D6] rounded-3xl p-4 w-[23rem]'>
                <div className='flex'>
                    <Image 
                    src={backIcon}
                    alt='back arrow'
                    width={40}
                    className='flex cursor-pointer'
                    onClick={isClosed3}/>
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