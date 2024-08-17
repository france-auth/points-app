
import NavBar from "@/components/NavBar";
import { navLinks } from "@/data";

export default function Layout({ children }) {

    return (
        <div>
        <NavBar navLinks={navLinks}/>
        <main>{children}</main>
    </div>
    );
}
