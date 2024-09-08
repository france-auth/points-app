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
        <main className='w-full flex items-center  px-3 pr-4'>
            <HashModal isOpen={showModal} isClosed={closeModal} />
            <div className='max-w-full overflow-x-auto hide-scrollbar'>
            <ul
            className='flex py-3 cursor-pointer list-none min-w-full'
            onClick={openModal}>
            {hashs.map((x, id) => (
            <li key={x.id}
            className='mx-2 text-sm px-3 py-2 rounded-2xl bg-[#B8D2C3]'>
                <p>{x.hash}</p>
            </li>
            ))}
        </ul>
            </div>
        </main>
    )
}

export default HashTags

