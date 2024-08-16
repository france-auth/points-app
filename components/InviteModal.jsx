import React from 'react'
import { backIcon } from '@/public/assets/images'
import Image from 'next/image'
import { inviteRewards } from '@/data'

const InviteModal = ({isOpen, isClosed}) => {
    
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

                    <p
                    className='flex justify-center font-semibold mt-4 ml-11 mx-auto'>
                        Invitation Rewards:
                    </p>
                </div>

                <ul className='px-2 list-disc'>
                    {inviteRewards.map((reward) => (
                        <li
                        key={reward.id}
                        className='my-3 flex justify-center'>
                            {reward.invite}
                        </li>
                    ))}
                </ul>

                    {/** COPY INVITE LINK BUTTON */}
                <button type="button"
                    className='text-[#FFFFFF] w-full hover:bg-[#02363b] bg-[#004A50] rounded-2xl px-5 py-3 mt-4 cursor-pointer'
                    >COPY INVITE CODE
                </button>
            </div>
        </div>
    ))
}

export default InviteModal