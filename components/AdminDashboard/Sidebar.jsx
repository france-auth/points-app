"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
//import { backArrow, rightArrow } from "@/public/assets/admin-images";

const Sidebar = ({ navItems }) => {
  const [activePath, setActivePath] = useState("");
  //const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActivePath(window.location.pathname);
    }
  }, []);

  if (!navItems || !Array.isArray(navItems)) {
    return null; // or return a fallback UI
  }

  return (
    <div className="flex sticky top-0 h-screen">
      <ul className="bg-white  flex flex-col xs:px-3 sm:pl-8 sm:pr-0 xs:py-6 xx:py-10 justify-start ">
        {navItems.map((nav) => (
          <Link
            key={nav.id}
            href={nav.path} // Corrected invocation
            className={`flex items-center xs:px-3 xs:text-[15px] xx:text-base rounded-xl xx:px-4 sm:px-5 py-3 my-2 justify-start ${
              activePath === nav.path ? "bg-[#004A50] text-white" : ""
            }`}
          >
            {activePath === nav.path ? (
              <Image
                src={nav.icon2}
                alt={`${nav.title}`}
                className=" sm:mr-2"
                height='xs:16px xx:18px xr:20px'
                width='xs:16px xx:18px xr:20px' // Specify height and width for the image
              />
            ) : (
              <Image
                src={nav.icon}
                alt={`${nav.title}`}
                className=" sm:mr-2"
                height='xs:16px xx:18px xr:20px'
                width='xs:16px xx:18px xr:20px' // Specify height and width for the image
              />
            )}
            <p
              className={`${
                activePath === nav.path
                  ? "text-white font-semibold"
                  : ""
              } hidden sm:flex`} // Conditionally render based on screen size
            >
              {nav.title}
            </p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;





/* "use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Sidebar = ({ navItems }) => {
    

    const [activePath, setActivePath] = useState("");
    const [isClicked, setIsClicked] = useState("");

    const handleClick = () => {
      setIsClicked(true);
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
        setActivePath(window.location.pathname);
        }
    }, []);

    // Check if navItems is defined and is an array before mapping
    if (!navItems || !Array.isArray(navItems)) {
        return null; // or return a fallback UI
    }

    return (
        <div className='flex sticky h-screen'>
            <ul className="bg-white flex flex-col xs:pl-5 xx:pl-8 xs:py-6 xx:py-10 justify-start">
            {navItems.map((nav) => (
                <Link
                key={nav.id}
                href={nav.path}
                onClick={() => handleClick()}
                className={`flex xs:px-3 xs:text-[15px] xx:text-base rounded-xl xx:px-5 py-3 my-2 justify-start ${
                    activePath === nav.path
                    ? "bg-[#004A50] text-white"
                    : ""
                }`}>
                    {activePath === nav.path ? (
                      <Image 
                      src={nav.icon2}
                      alt={`${nav.title}`}
                      className='mr-2'/>
                    ) : (
                      <Image 
                    src={nav.icon}
                    alt={`${nav.title}`}
                    className='mr-2'/>
                  )}
                  <p
                  className={` ${
                    activePath === nav.path
                    ? "bg-[#004A50] text-white font-semibold sm:flex" 
                    : ""
                }`}>{nav.title}</p>
                </Link>
            ))}
            </ul>
        </div>
    )
}

export default Sidebar */