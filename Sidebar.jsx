import React, { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import SidebarLinks from '../models/SideBarLinks.json';
import ParentSidebarLinks from '../models/ParentSideBarLinks.json';
import SchoolTeacherLink from '../models/SchoolTeacherSideBarLinks.json';
import RenderIconUsingId from "./dashboard/RenderIconUsingId";
import SelteacherLinks from '../models/SelTeacherSideBarLinks.json';
import SchoolLinks from '../models/SchoolSideBarLinks.json';
import Logo from "../assets/images/logo.png";
import { isLoggedIn } from "../utils/auth";
import { getData } from "../utils/Storage";
function Sidebar({ sidebarOpen, setSidebarOpen, activeSection }) {
    const [SideBarLinks,setSideBarLinks] = React.useState([]);
    const trigger = useRef(null);
    const sidebar = useRef(null);
    const [userData, setUserData] = React.useState(null);

    useEffect(() => {
        if(isLoggedIn()){
            const user = getData('user');
            setUserData(user);
        }
    },[]);

    useEffect(() => {
        if(userData){
            if(userData.role === 1) {
                setSideBarLinks(SidebarLinks);
            }
            if(userData.role === 5) {
                setSideBarLinks(ParentSidebarLinks);
            }
            if(userData.role === 2) {
                setSideBarLinks(SchoolTeacherLink);
            }
            if(userData.role === 3) {
                setSideBarLinks(SelteacherLinks);
            }
            if(userData.role === 4) {
                setSideBarLinks(SchoolLinks);
            }
        }
    },[userData]);

    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!sidebar.current || !trigger.current) return;
            if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
            setSidebarOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);

    });

    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!sidebarOpen || keyCode !== 27) return;
            setSidebarOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    return (
        <div>
            <div className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true"></div>
            <div
                id="sidebar"
                ref={sidebar}
                className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64  lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-white p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'} group`}
            >
                <div className="flex justify-center mb-2  sm:px-2">
                    <button
                        ref={trigger}
                        className="lg:hidden text-slate-500 hover:text-slate-400"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        aria-controls="sidebar"
                        aria-expanded={sidebarOpen}
                    >
                        <span className="sr-only">Close sidebar</span>
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
                        </svg>
                    </button>
                    <Link to="/">
                        <img src={Logo} alt="Super-Self Institute Logo" className="h-10 w-auto" />
                    </Link>
                </div>
                <div className="space-y-4 mt-6">
                    {SideBarLinks.map((section) => (
                        <div key={section.section} className="mb-5">
                            <div className="uppercase text-orange-600 text-xs font-bold mb-2 pl-2 tracking-wider">{section.section}</div>
                            <div className="flex flex-col gap-1 rounded-xl bg-orange-50/70 p-2 shadow-sm">
                                {section.items.map((item) => (
                                    <NavLink
                                        key={item.label}
                                        to={item.href}
                                        className={({ isActive }) =>
                                            `flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-colors duration-150 cursor-pointer group text-base ${isActive || activeSection === item.href ? 'bg-orange-200 text-orange-700 font-bold shadow' : 'text-gray-700 hover:text-orange-500 hover:bg-orange-100'}`
                                        }
                                        onClick={() => setSidebarOpen(false)}
                                    >
                                        <img src={RenderIconUsingId(item.icon)} alt={item.label} className="w-6 h-6" />
                                        <span>{item.label}</span>
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <style>{`
                    #sidebar::-webkit-scrollbar {
                        width: 8px;
                        background: transparent;
                        transition: background 0.3s;
                    }
                    #sidebar:hover::-webkit-scrollbar {
                        background: rgba(255, 186, 120, 0.15);
                        animation: fadeIn 0.3s;
                    }
                    #sidebar::-webkit-scrollbar-thumb {
                        background: rgba(255, 186, 120, 0.3);
                        border-radius: 6px;
                        transition: background 0.3s;
                    }
                    #sidebar:hover::-webkit-scrollbar-thumb {
                        background: rgba(255, 186, 120, 0.9);
                        animation: fadeIn 0.3s;
                    }
                    #sidebar:not(:hover)::-webkit-scrollbar-thumb {
                        animation: fadeOut 0.3s;
                    }
                    @keyframes fadeIn {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }
                    @keyframes fadeOut {
                        from { opacity: 1; }
                        to { opacity: 0; }
                    }
                `}</style>
            </div>
        </div>
    )
}
export default Sidebar;