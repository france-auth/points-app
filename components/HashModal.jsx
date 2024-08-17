import React from 'react';
import Image from 'next/image';
import { backIcon, hashtags } from '@/public/assets/images';



const HashModal = ({isOpen, isClosed}) => {

    return (!isOpen ? null : (
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
                    onClick={isClosed}/>
                </div>

                <div className='flex justify-between mt-3 mb-1 items-center'>
                    <p
                    className='flex ml-3 my-3 font-medium'>
                        Characteristics
                    </p>
                </div>

                <Image
                src={hashtags}
                alt='hashtags'
                className='w-[17rem] mb-3 px-2'/>

                <div className='mx-3 text-[14.5px]'>
                        <p
                        className='my-3 flex justify-center'>
                            Chat with your clone and shape it's personality!
                        </p>

                        <p className='mb-2'>
                            Starting with a few traits, your interactions create a unique Soul just for you , with it's character growing through AI-generated keywords.
                        </p>
                </div>
            </div>
        </div>
    ))
}

export default HashModal