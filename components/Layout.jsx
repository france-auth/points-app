
import NavBar from "@/components/NavBar";
import { navLinks } from "@/data";
import { useState } from "react";

export default function Layout({ children, isNavbarVisible }) {

    return (
        <div>
            <NavBar navLinks={navLinks} isVisible={isNavbarVisible}/>
            <main>{children}</main>
        </div>
    );
}
