"use client"

import React from 'react'
import Layout from '@/components/Layout';

const Message = () => {
    const x = 6; // Number of messages left
    const y = 6; // Max number of messages

    return (
        <Layout>
            <div className='p-3 w-full flex flex-col justify-center items-center min-h-96'>

                {/* User's Message */}
                <div className='w-full px-3 py-2 flex flex-col items-end mt-0'>
                    <p className='bg-[#F5F5F5] w-[80%] text-xs text-right rounded-xl px-3 py-2 min-w-min'>What's the latest crypto world today?</p>
                    <p className='text-[.6rem] mr-2 mt-1'>Sat 5:09AM</p>
                </div>

                {/* Bot's Message */}
                <div className='w-full px-3 py-2 flex flex-col items-start'>
                    <p className='bg-[#F5F5F5] w-[80%] min-w-min text-xs text-left rounded-xl px-4 py-2'>It's the talk of the town! $ATRM is all about revolutionizing digital interactions with AI. Gonna be HUGE!</p>
                    <p className='text-[.6rem] ml-2 mt-1'>Sat 5:10AM  <span className='ml-2'>+500P</span></p>
                </div>

                {/** INPUT Form */}
                <form className='flex w-full relative'>
                    <input type="text" 
                        placeholder={`Chat with your Clone ${x}/${y}`}
                        name="message" id=""
                        className='w-full mb-0 mt-3 placeholder-[#367378] text-sm font-medium px-5 py-3 rounded-lg border focus:ring focus:ring-[#367378]'
                    />

                    <button type="submit"
                    className='font-bold absolute right-2 mr-3 mt-[6px] top-1/2 transform -translate-y-1/2 cursor-pointer'>SEND</button>
                </form>
            </div>
        </Layout>
    )
}

export default Message