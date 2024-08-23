import { navItems } from "@/data/admin-data";
import Sidebar from "@/components/AdminDashboard/Sidebar";

export default function Layout({ children }) {

    return (
        <div className="flex items-start flex-1">
            <Sidebar navItems={navItems}/>
            <main className="flex-grow p-4"
            >{children}</main>
        </div>
    );
}
