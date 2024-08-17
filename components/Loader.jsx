import React, { useState, useEffect } from 'react';
import { loaderIcon } from '@/public/assets/images';
import Image from 'next/image';

const Loader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const handleLoad = () => {
        setTimeout(() => {
            setLoading(false);
        }, 2000); // Keep "Loading..." text for 2 seconds after app loads
    };

    // Listen for the window's load event
    if (document.readyState === 'complete') {
        handleLoad();
    } else {
        window.addEventListener('load', handleLoad);
    }

        return () => {
        window.removeEventListener('load', handleLoad);
        };
    }, []);

    return (!loading ? null : (
        <main>
            <div
            className="fixed inset-0 flex flex-col items-center justify-center bg-[#C4DACC] z-50">
                <Image
                src={loaderIcon}
                className=''/>
                <h1 className="text-[#OO4A50] mt-10 text-xl font-semibold ">
                    Loading...</h1>
            </div>
        </main>
    ))
    // Return nothing when loading is false
};

export default Loader;