// components/Layout.js
import Navbar from "@/";
import { useState } from "react";
import { useEffect } from "react";

export default function Layout({ children, initialActiveId }) {
    const [activeId, setActiveId] = useState(initialActiveId);

    const handleNavClick = (path, id) => {
        setActiveId(id);
        window.location.href = path; // Navigate to the path manually
    };

    useEffect(() => {
        setActiveId(initialActiveId);
    }, [initialActiveId]);

    return (
        <div>
        <Navbar activeId={activeId} onNavClick={handleNavClick} />
        <main className="p-6">{children}</main>
        </div>
    );
}
