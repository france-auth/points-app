import React from 'react';
import Image from 'next/image';
import { backIcon } from '@/public/assets/images';

const QuestMissionModal = ({ item, onClose, onClaim }) => {

    const { title, price, image, isClaimable, isClaimed } = item;

    return !item ? null : (
        <main>
            <div
                className='fixed inset-0 bg-[#C4DACC] bg-opacity-25 backdrop-brightness-50 flex justify-center items-center z-[999]'>
                <div
                className='flex flex-col bg-[#CEE4D6] rounded-3xl p-4 w-[23rem]'>
                    <div className='flex flex-col'>
                        <Image 
                        src={backIcon}
                        alt='back arrow'
                        width={50}
                        className='flex cursor-pointer'
                        onClick={onClose}/>

                        <Image 
                        src={image}  // Fixed: Use `image` from the passed `item`
                        alt='purchase item'
                        className='flex mx-auto'/>
                    </div>

                    <div className='flex flex-col items-center px-3 justify-center'>
                        <p
                        className='mb-3 mt-8 font-semibold'>
                            {title} ({price})
                        </p>
                        <p className='text-center'>
                            Increase your max petting capacity - boosts hourly recharge rate by 5s
                        </p>
                    </div>

                    {/** PURCHASE ITEM BUTTON */}
                    <button type="button"
                    onClick={onClaim}
                    disabled={!isClaimable || isClaimed}
                    className={`text-[#FFFFFF] w-full ${isClaimable && !isClaimed ? 'bg-[#004A50]' : 'bg-[#99A5A5] cursor-not-allowed'} rounded-2xl px-5 py-3 mt-4 cursor-pointer`}
                    >
                        {isClaimed ? '✓ Claimed' : 'Claim'}
                    </button>
                </div>
            </div>

        </main>
    );
};

export default QuestMissionModal;












/* import React from 'react';

const QuestMissionModal = ({ item, onClose, onClaim }) => {

    const { title, price, image, isClaimable, isClaimed } = item;

    { return !item ? null : (
        <main>


    <div
        className='fixed inset-0 bg-[#C4DACC] bg-opacity-25 backdrop-brightness-50 flex justify-center items-center z-[999]'>
            <div
            className='flex flex-col bg-[#CEE4D6] rounded-3xl p-4 w-[23rem]'>
                <div className='flex flex-col'>
                    <Image 
                    src={backIcon}
                    alt='back arrow'
                    width={50}
                    className='flex cursor-pointer'
                    onClick={onClose}/>

                    <Image 
                    src={purchase}
                    alt='purchase item'
                    className='flex mx-auto'/>
                </div>

                <div className='flex flex-col items-center px-3 justify-center'>
                        <p
                        className='mb-3 mt-8 font-semibold'>
                            {item.name} ({item.price})
                        </p>
                        <p className='text-center'>
                            Increase your max petting capacity - boosts hourly recharge rate by 5s
                        </p>
                </div>*/

                    //{/** PURCHASE ITEM BUTTON */}
                /*<button type="button"
                onClick={onClaim}
                disabled={!isClaimable || isClaimed}
                    className={`text-[#FFFFFF] w-full ${isClaimable && !isClaimed ? 'bg-[#004A50]' : 'bg-[#99A5A5] cursor-not-allowed'} rounded-2xl px-5 py-3 mt-4 cursor-pointer`}
                    >
                        {isClaimed ? '✓ Claimed' : 'Claim'}
                </button>
            </div>
        </div>

    </main>
    )};
};

export default QuestMissionModal;
 */