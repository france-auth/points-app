import React from 'react';
import Image from 'next/image';
import { backIcon, claimFace, claimedFace, claimableFace } from '@/public/assets/images';

const QuestMissionModal = ({ item, onClose, onClaim }) => {
    const { title, price, image, isClaimable, isClaimed } = item;

    const getImageSrc = () => {
        if (isClaimed) {
            return claimedFace;
        } else if (isClaimable) {
            return claimableFace;
        } else {
            return claimFace;
        }
    };

    return (!item ? null : (
        <main>
            <div
                className='fixed inset-0 bg-[#C4DACC] bg-opacity-25 backdrop-brightness-50 flex justify-center xs:p-4 xr:p-10 items-center z-[999]'>
                <div
                className='flex flex-col bg-[#CEE4D6] rounded-3xl p-4 w-full'>
                    <div className='flex flex-col'>
                        <Image 
                        src={backIcon}
                        alt='back arrow'
                        width={50}
                        className='flex cursor-pointer'
                        onClick={onClose}/>

                        <Image 
                        src={getImageSrc()}
                        alt='purchase item'
                        className='flex mx-auto'/>
                    </div>

                    <div className='flex flex-col items-center px-3 justify-center'>
                        <p
                        className='mb-3 mt-8 font-semibold'>
                            {item.task} ({item.xp})
                        </p>
                        <p className='text-center'>
                            {item.taskDetails}
                        </p>
                    </div>

                    {/** CLAIM ITEM BUTTON */}
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
    ));
};

export default QuestMissionModal;
