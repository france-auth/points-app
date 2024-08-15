import React from 'react'

const HomePage = () => {
    return (
        <div className="flex flex-col w-full p-5 border-b-[1px]">
            <div className='flex justify-between w-full'>
                    <h2 className="font-semibold text-right">AVERY</h2>
                <div className='flex'>
                <p>194, 200 P <span className='font-semibold'>GOLD</span></p>
                <p className='font-bold ml-3'>?</p>
                </div>
            </div>
            <div className='flex justify-between w-full'>
                    <h2 className="font-normal text-right">LOVE
                        <span className='ml-2'>?</span> 
                        <span>?</span> 
                        <span>?</span> 
                        <span>?</span>
                        <span>?</span>
                </h2>
                <div className='flex'>
                <p>BATTERY</p>
                <p className='font-bold ml-3'>?</p>
                </div>
            </div>
        </div>
    )
}

export default HomePage