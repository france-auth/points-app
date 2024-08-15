// components/LoadingIndicator.js
import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingIndicator() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoading = () => {
      if (document.readyState === "complete") {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }
    };

    document.onreadystatechange = handleLoading;

    // Clean up event listener on unmount
    return () => {
      document.onreadystatechange = null;
    };
  }, []);

  return (
    <>
      {loading ? (
        <div className="bg-black">
          <Image  src="" alt="" />
        </div>
      ) : (
        <div className="visible">
          <h2 className="text-lg font-semibold">
            Hi Im Francis!
          </h2>
          <h3 className="text-md mt-4">Page Loaded successfully.</h3>
          <Image
            src="https://www.tutorialspoint.com/static/images/logo-color-footer.png"
            alt="image"
            className=""
          />
        </div>
      )}
    </>
  );
}