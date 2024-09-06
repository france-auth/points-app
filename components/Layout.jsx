import NavBar from "@/components/NavBar";
import { navLinks } from "@/data"; // Example data file
import { useState } from "react";

// Import your components here
import Item from "@/app/item/page";
import Invite from "@/app/invite/page";
import Ranking from "@/app/ranking/page";
import Quest from "@/app/quest/page";
import Message from "@/components/Message"; // Add Message component if needed

export default function Layout({ children, isNavbarVisible }) {
  const [activeComponent, setActiveComponent] = useState("message"); // Default component

  // Function to render the selected component
    const renderComponent = () => {
        switch (activeComponent) {
        case "message":
            return null; // Add the Message component if it's needed
        case "item":
            return <Item />;
        case "quest":
            return <Quest />;
        case "ranking":
            return <Ranking />;
        case "invite":
            return <Invite />;
        default:
        return null;
    }
    };

  // Function to handle navbar item click
    const handleNavItemClick = (title) => {
        setActiveComponent(title.toLowerCase()); // Set the active component based on the title
    };

    return (
        <div>
            <NavBar
                navLinks={navLinks}
                isVisible={isNavbarVisible}
                activeComponent={activeComponent}
                onNavItemClick={handleNavItemClick} // Pass handler to NavBar
            />
        <main>
            {renderComponent()}
            {activeComponent === "message" && children}
        </main>
        </div>
    );
}




/* 
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
 */