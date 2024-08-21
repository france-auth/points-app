"use client"

import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

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
            <ul className="xs:px-1 xx:px-2 xs:w-full flex px-2 py-3 mt-1 mb-3 list-none justify-center">
            {navLinks.map((nav) => (
                <Link
                key={nav.id}
                href={nav.path}
                className={`flex xs:px-1 xs:text-[15px] xx:text-base xx:px-2 px-2 py-2 ${
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