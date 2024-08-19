import React, { useState, useEffect } from 'react';

const Loader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const handleLoad = () => {
        setTimeout(() => {
            setLoading(false);
        }, 3000); // Keep "Loading..." text for 3 seconds after app loads
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
            className="fixed inset-0 flex flex-col items-center justify-center z-50 animate-bgChange">
                <svg 
                className="animate-svgFill"
                width="146" height="136" viewBox="0 0 146 136" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M63.4797 0H54.4131V9.06663H63.4797V0Z" fill="#E2F8EA"/>
<path d="M72.6037 0H63.5371V9.06663H72.6037V0Z" fill="#E2F8EA"/>
<path d="M81.582 0H72.5154V9.06663H81.582V0Z" fill="#E2F8EA"/>
<path d="M90.706 0H81.6394V9.06663H90.706V0Z" fill="#E2F8EA"/>
<path d="M45.404 9.06738H36.3374V18.134H45.404V9.06738Z" fill="#E2F8EA"/>
<path d="M54.4353 9.06738H45.3687V18.134H54.4353V9.06738Z" fill="#E2F8EA"/>
<path d="M99.7639 9.06738H90.6973V18.134H99.7639V9.06738Z" fill="#E2F8EA"/>
<path d="M108.782 9.06738H99.7151V18.134H108.782V9.06738Z" fill="#E2F8EA"/>
<path d="M27.2353 18.1357H18.1687V27.2024H27.2353V18.1357Z" fill="#E2F8EA"/>
<path d="M36.2532 18.1357H27.1865V27.2024H36.2532V18.1357Z" fill="#E2F8EA"/>
<path d="M117.933 18.1357H108.866V27.2024H117.933V18.1357Z" fill="#E2F8EA"/>
<path d="M126.95 18.1357H117.884V27.2024H126.95V18.1357Z" fill="#E2F8EA"/>
<path d="M18.1775 27.2002H9.11084V36.2668H18.1775V27.2002Z" fill="#E2F8EA"/>
<path d="M136.008 27.2002H126.942V36.2668H136.008V27.2002Z" fill="#E2F8EA"/>
<path d="M18.1775 36.2656H9.11084V45.3323H18.1775V36.2656Z" fill="#E2F8EA"/>
<path d="M136.008 36.2656H126.942V45.3323H136.008V36.2656Z" fill="#E2F8EA"/>
<path d="M9.06663 45.334H0V54.4006H9.06663V45.334Z" fill="#E2F8EA"/>
<path d="M145.119 45.334H136.052V54.4006H145.119V45.334Z" fill="#E2F8EA"/>
<path d="M9.06663 54.3994H0V63.466H9.06663V54.3994Z" fill="#E2F8EA"/>
<path d="M45.404 54.3994H36.3374V63.466H45.404V54.3994Z" fill="#E2F8EA"/>
<path d="M108.782 54.3994H99.7151V63.466H108.782V54.3994Z" fill="#E2F8EA"/>
<path d="M145.119 54.3994H136.052V63.466H145.119V54.3994Z" fill="#E2F8EA"/>
<path d="M9.06663 63.4678H0V72.5344H9.06663V63.4678Z" fill="#E2F8EA"/>
<path d="M45.404 63.4678H36.3374V72.5344H45.404V63.4678Z" fill="#E2F8EA"/>
<path d="M108.782 63.4678H99.7151V72.5344H108.782V63.4678Z" fill="#E2F8EA"/>
<path d="M145.119 63.4678H136.052V72.5344H145.119V63.4678Z" fill="#E2F8EA"/>
<path d="M9.06663 72.5322H0V81.5989H9.06663V72.5322Z" fill="#E2F8EA"/>
<path d="M45.404 72.5322H36.3374V81.5989H45.404V72.5322Z" fill="#E2F8EA"/>
<path d="M108.782 72.5322H99.7151V81.5989H108.782V72.5322Z" fill="#E2F8EA"/>
<path d="M145.119 72.5322H136.052V81.5989H145.119V72.5322Z" fill="#E2F8EA"/>
<path d="M9.06663 81.5977H0V90.6643H9.06663V81.5977Z" fill="#E2F8EA"/>
<path d="M63.4797 81.5977H54.4131V90.6643H63.4797V81.5977Z" fill="#E2F8EA"/>
<path d="M90.706 81.5977H81.6394V90.6643H90.706V81.5977Z" fill="#E2F8EA"/>
<path d="M145.119 81.5977H136.052V90.6643H145.119V81.5977Z" fill="#E2F8EA"/>
<path d="M18.1775 90.667H9.11084V99.7336H18.1775V90.667Z" fill="#E2F8EA"/>
<path d="M72.6037 90.667H63.5371V99.7336H72.6037V90.667Z" fill="#E2F8EA"/>
<path d="M81.582 90.667H72.5154V99.7336H81.582V90.667Z" fill="#E2F8EA"/>
<path d="M136.008 90.667H126.942V99.7336H136.008V90.667Z" fill="#E2F8EA"/>
<path d="M18.1775 99.7334H9.11084V108.8H18.1775V99.7334Z" fill="#E2F8EA"/>
<path d="M136.008 99.7334H126.942V108.8H136.008V99.7334Z" fill="#E2F8EA"/>
<path d="M27.2353 108.8H18.1687V117.866H27.2353V108.8Z" fill="#E2F8EA"/>
<path d="M36.2532 108.8H27.1865V117.866H36.2532V108.8Z" fill="#E2F8EA"/>
<path d="M117.933 108.8H108.866V117.866H117.933V108.8Z" fill="#E2F8EA"/>
<path d="M126.95 108.8H117.884V117.866H126.95V108.8Z" fill="#E2F8EA"/>
<path d="M45.404 117.865H36.3374V126.932H45.404V117.865Z" fill="#E2F8EA"/>
<path d="M54.4353 117.865H45.3687V126.932H54.4353V117.865Z" fill="#E2F8EA"/>
<path d="M99.7507 117.865H90.6841V126.932H99.7507V117.865Z" fill="#E2F8EA"/>
<path d="M108.782 117.865H99.7151V126.932H108.782V117.865Z" fill="#E2F8EA"/>
<path d="M63.4797 126.934H54.4131V136H63.4797V126.934Z" fill="#E2F8EA"/>
<path d="M72.6037 126.934H63.5371V136H72.6037V126.934Z" fill="#E2F8EA"/>
<path d="M81.582 126.934H72.5154V136H81.582V126.934Z" fill="#E2F8EA"/>
<path d="M90.706 126.934H81.6394V136H90.706V126.934Z" fill="#E2F8EA"/>
</svg>

            </div>
        </main>
    ))
    // Return nothing when loading is false
};

export default Loader;