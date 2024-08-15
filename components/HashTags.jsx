import { hashs } from '@/data'
import React from 'react'

const HashTags = () => {
    return (
        <ul className='flex w-full py-3 justify-evenly'>
            {hashs.map((x) => (
            <li key={x.id}
            className= ' text-sm overflow-x-visible px-3 py-1 rounded-2xl bg-[#B8D2C3]'>
                {x.hash}
            </li>
        ))}</ul>
    )
}

export default HashTags

