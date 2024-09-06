import { hashs } from '@/data'
import React, { useState } from 'react'
import HashModal from '@/components/HashModal';
const HashTags = () => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    }
    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <main className='w-full flex justify-center items-center overflow-x-auto hide-scrollbar'>
            <HashModal isOpen={showModal} isClosed={closeModal} />
            <ul
            className='flex py-3 justify-between cursor-pointer min-w-full list-none px-3'
            onClick={openModal}>
            {hashs.map((x) => (
            <li key={x.id}
            className= 'mx-2 text-sm px-3 py-2 rounded-2xl bg-[#B8D2C3]'>
                <p>{x.hash}</p>
            </li>
            ))}
        </ul>
        </main>
    )
}

export default HashTags

