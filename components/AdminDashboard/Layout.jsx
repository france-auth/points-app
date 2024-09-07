import { navItems } from "@/data/admin-data";
import Sidebar from "@/components/AdminDashboard/Sidebar";

export default function Layout({ children }) {

    return (
        <div className="flex h-screen top-0 flex-1 w-full">
            <Sidebar navItems={navItems}/>
            <main className="flex-grow xs:p-3 xr:p-5 sm:p-7 min-h-screen overflow-auto"
            >{children}</main>
        </div>
    );
}
