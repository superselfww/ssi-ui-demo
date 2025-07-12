import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMessage } from '@fortawesome/free-solid-svg-icons';
import SideBarLinks from '../models/SideBarLinks.json';
import Logo from '../assets/images/logo.png';

export default function Header({ logged = false, sidebarOpen, setSidebarOpen, user, showLogo = true, showLogoOnMobile = true }) {

    return (
        <header className="sticky top-0 bg-white shadow-sm py-4 px-6 flex items-center justify-between z-30">
            <div className="px-0 sm:px-6 lg:px-8 flex mx-auto items-center justify-between w-full max-w-screen-xl">
                <div className="flex lg:hidden">
                    <button
                        className="text-slate-500 hover:text-slate-600 lg:hidden"
                        aria-controls="sidebar"
                        aria-expanded={sidebarOpen}
                        onClick={(e) => {
                            e.stopPropagation();
                            setSidebarOpen(!sidebarOpen);
                        }}
                    >
                        <span className="sr-only">Open sidebar</span>
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <rect x="4" y="5" width="16" height="2" />
                            <rect x="4" y="11" width="16" height="2" />
                            <rect x="4" y="17" width="16" height="2" />
                        </svg>
                    </button>
                </div>
                <Link to="/" className={`${showLogo ? 'flex items-center' : 'hidden'}`}>
                    <img src={Logo} alt="Super-Self Institute Logo" className="h-10 w-auto" />
                </Link>
                {!showLogo && (
                    <div>
                        {showLogoOnMobile && (
                            <Link to="/" className="flex items-center lg:hidden">
                                <img src={Logo} alt="Super-Self Institute Logo" className="h-10 w-auto" />
                            </Link>
                        )}
                    </div>
                )}
                <div className="flex items-center space-x-3">
                    {logged && user && (
                        <div className="flex items-center gap-4 ml-0 md:ml-6">
                            <Link to="/chat" className="relative text-gray-600 hover:text-orange-300 hidden lg:block">
                                <FontAwesomeIcon icon={faMessage} size="lg" />
                                {/* Unseen count badge */}
                                {/* {user.unseenChats > 0 && ( */}
                                    <span className="absolute -top-1 -right-1 min-w-[18px] h-5 px-1 bg-primary text-white text-xs rounded-full flex items-center justify-center border-2 border-white">{user.unseenChats ?? 2}</span>
                                {/* )} */}
                            </Link>
                            <button className="relative text-gray-600 hover:text-orange-300 hidden lg:block">
                                <FontAwesomeIcon icon={faBell} className="text-xl" />
                                <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full border-2 border-white"></span>
                            </button>
                            <Link to={'/dashboard'} className="flex items-center gap-2">
                                <img src={user.avatar} alt="Avatar" className="w-8 h-8 rounded-full border-2 border-orange-200" />
                                <span className="font-semibold text-gray-700 text-sm hidden lg:block">{user.name}</span>
                            </Link>
                        </div>
                    )}
                    {!logged && (
                        <>
                            <Link to="/start" className="text-white bg-primary font-semibold px-4 py-2 rounded hidden lg:block">Register</Link>
                            <Link to="/" className=" text-primary text-primary-hover font-semibold px-4 py-2 rounded hidden lg:block">Login</Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    )
    // return (
    //     <header className="w-full bg-white shadow-sm py-4 px-6 flex items-center justify-between relative">
    //         <div className="flex items-center gap-2">
    //             <Link to="/">
    //                 <img src="/src/assets/images/logo.png" alt="Super-Self Institute Logo" className="h-10 w-auto" />
    //             </Link>
    //         </div>
    //         {/* Desktop Nav */}
    //         <nav className="hidden md:flex items-center gap-4">
    //             <Link to="/" className="text-gray-700 font-medium hover:text-orange-500 transition-colors">Home</Link>
    //             {!logged && (
    //                 <>
    //                     <Link to="/profile-setup" className="text-gray-700 font-medium hover:text-orange-500 transition-colors">Profile Setup</Link>
    //                     <Link to="/login" className="text-gray-700 font-medium hover:text-orange-500 transition-colors">Sign In</Link>
    //                 </>
    //             )}
    //             {logged && user && (
    //                 <div className="flex items-center gap-4 ml-6">
    //                     <button className="relative text-gray-600 hover:text-orange-500">
    //                         <FontAwesomeIcon icon={faBell} className="text-xl" />
    //                         <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full border-2 border-white"></span>
    //                     </button>
    //                     <div className="flex items-center gap-2">
    //                         <img src={user.avatar} alt="Avatar" className="w-8 h-8 rounded-full border-2 border-orange-200" />
    //                         <span className="font-semibold text-gray-700 text-sm">{user.name}</span>
    //                     </div>
    //                 </div>
    //             )}
    //         </nav>
    //         {/* Mobile Nav Toggle */}
    //         <div className='md:hidden flex items-center'>
    //             {logged && user && (
    //                 <button className="text-gray-700 focus:outline-none mr-2" onClick={() => setMenuOpen(!menuOpen)}>
    //                     <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
    //                 </button>
    //             )}
    //             {!logged && (
    //                 <Link to="/login" className="text-orange-500 font-semibold px-4 py-2 rounded">Login</Link>
    //             )}
    //         </div>
    //         {/* Mobile Sidebar Drawer */}
    //         {menuOpen && logged && user && (
    //             <div className="fixed inset-0 z-50 flex">
    //                 {/* Overlay */}
    //                 <div className="fixed inset-0 bg-black bg-opacity-30" onClick={() => setMenuOpen(false)}></div>
    //                 {/* Sidebar */}
    //                 <aside className="relative w-64 bg-gradient-to-b from-orange-100 to-orange-300 shadow-xl flex flex-col py-8 px-4 h-full animate-slide-in-left z-50">
    //                     <div className="flex flex-col items-center mb-8">
    //                         <img src={user.avatar} alt="Avatar" className="w-16 h-16 rounded-full mb-2 border-4 border-orange-300 shadow" />
    //                         <div className="text-base font-bold text-gray-800">{user.name}</div>
    //                     </div>
    //                     <nav className="flex flex-col gap-4 mt-2 text-sm font-medium overflow-y-auto">
    //                         {SideBarLinks.map(section => (
    //                             <div key={section.section} className="mb-2">
    //                                 <div className="uppercase text-orange-600 text-xs font-bold mb-2 pl-2 tracking-wider">{section.section}</div>
    //                                 <div className="flex flex-col gap-1">
    //                                     {section.items.map(item => (
    //                                         <Link
    //                                             key={item.label}
    //                                             to={item.href}
    //                                             className={`flex items-center gap-2 px-3 py-2 rounded-lg transition group ${activeSidebar === item.href ? 'bg-orange-200 text-orange-700 font-bold' : 'text-gray-700 hover:text-orange-500 hover:bg-orange-100'}`}
    //                                             onClick={() => setMenuOpen(false)}
    //                                         >
    //                                             <span className={`text-lg ${item.color}`}>{item.icon}</span>
    //                                             <span className="text-sm font-medium">{item.label}</span>
    //                                         </Link>
    //                                     ))}
    //                                 </div>
    //                             </div>
    //                         ))}
    //                     </nav>
    //                 </aside>
    //             </div>
    //         )}
    //         {/* Desktop Sidebar (always visible if logged in, no avatar/username) */}
    //         {logged && user && (
    //             <aside className="hidden md:flex flex-col w-64 bg-gradient-to-b from-orange-100 to-orange-300 shadow-xl py-8 px-4 h-screen fixed left-0 top-0 z-20 mt-16">
    //                 <nav className="flex flex-col gap-4 mt-2 text-sm font-medium overflow-y-auto">
    //                     {SideBarLinks.map(section => (
    //                         <div key={section.section} className="mb-2">
    //                             <div className="uppercase text-orange-600 text-xs font-bold mb-2 pl-2 tracking-wider">{section.section}</div>
    //                             <div className="flex flex-col gap-1">
    //                                 {section.items.map(item => (
    //                                     <Link
    //                                         key={item.label}
    //                                         to={item.href}
    //                                         className={`flex items-center gap-2 px-3 py-2 rounded-lg transition group ${activeSidebar === item.href ? 'bg-orange-200 text-orange-700 font-bold' : 'text-gray-700 hover:text-orange-500 hover:bg-orange-100'}`}
    //                                     >
    //                                         <span className={`text-lg ${item.color}`}>{item.icon}</span>
    //                                         <span className="text-sm font-medium">{item.label}</span>
    //                                     </Link>
    //                                 ))}
    //                             </div>
    //                         </div>
    //                     ))}
    //                 </nav>
    //             </aside>
    //         )}
    //     </header>
    // )
}
