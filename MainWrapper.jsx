import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Avatar from '../assets/images/avatar.png';
import Footer from "./Footer";

const MainWrapper = (
    { children, logged = false, activeSection,hideSideBar=false, showLogo = false,useFullWidth=false }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="flex h-screen overflow-hidden">
            {(logged && !hideSideBar) && (
                <Sidebar sidebarOpen={sidebarOpen}activeSection={activeSection} setSidebarOpen={setSidebarOpen} />
            )}
            <div className="relative flex flex-col flex-1  overflow-x-hidden">
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} logged={logged} showLogo={showLogo} user={{ name: 'sasindu', avatar: Avatar }} />
                <main className={`${useFullWidth ? 'w-full min-h-screen' : 'max-w-screen-xl mx-auto w-full'}`}>
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    )
}
export default MainWrapper;