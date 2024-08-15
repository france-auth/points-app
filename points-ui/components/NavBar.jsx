"use client"

import { navLinks } from '@/data'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'


const NavBar = () => {

    // Step 1: Set the first item as active by default
    const [activeIndex, setActiveIndex] = useState(navLinks[0].id);

    const handleNavClick = (id) => {
        setActiveIndex(id); // Step 2: Update activeIndex on click
    };
    return (
        <div>
            <ul className="flex px-2 py-3 mb-4 list-none justify-center">
            {navLinks.map((nav) => (
                <Link
                key={nav.id}
                href={`/${nav.id}`}
                onClick={() => handleNavClick(nav.id)}
                className={`flex px-2 py-2 ${
                    nav.id === activeIndex
                    ? "underline font-bold"
                    : ""
                }`}
                >
                {nav.title}
                </Link>
            ))}
            </ul>
        </div>
    )
}

export default NavBar