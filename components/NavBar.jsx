"use client"

import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { navLinks } from '@/data'


const NavBar = ({ navLinks }) => {
    

    const [activePath, setActivePath] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
        setActivePath(window.location.pathname);
        }
    }, []);

    // Check if navItems is defined and is an array before mapping
    if (!navLinks || !Array.isArray(navLinks)) {
        return null; // or return a fallback UI
    }

    return (
        <div>
            <ul className="flex px-2 py-3 mb-4 list-none justify-center">
            {navLinks.map((nav) => (
                <Link
                key={nav.id}
                href={nav.path}
                className={`flex px-2 py-2 ${
                    activePath === nav.path
                    ? "underline font-bold"
                    : ""
                }`}>
                    {nav.title}
                </Link>
            ))}
            </ul>
            <hr className='border-[#004A50]' />
        </div>
    )
}

export default NavBar