import React, { useEffect, useState } from "react";
import MainWrapper from "../../components/MainWrapper";
import NotificationSettings from "./Student/ProfileSettingsPages/NotificationSettings";
import LanguageSelect from "./Student/ProfileSettingsPages/LanguageSelect";
import PaymentMethods from "./Student/ProfileSettingsPages/PaymentMethods";
import PrivacyPolicy from "./Student/ProfileSettingsPages/PrivacyPolicy";
import LiveChatSection from "./Student/ProfileSettingsPages/LiveChatSection";
import FeedbackSection from "./Student/ProfileSettingsPages/FeedbackSection";
import SubscriptionSection from "./Student/ProfileSettingsPages/SubscriptionSection";
import InviteFriendsSection from "./Student/ProfileSettingsPages/InviteFriendsSection";
import Swal from "sweetalert2";
import MainSubmitButton from "../../components/buttons/MainSubmitButton";
import { setPageMeta } from "../../utils/setPageMeta";
import { clearStorage, getData } from "../../utils/Storage";
import API from "../../services/Api";
import Avatar from "../../assets/images/avatar.png";
import EditProfileDetails from "./Student/ProfileSettingsPages/EditProfileDetails";
import EditSchoolProfile from "./School/EditSchoolProfile";
const ProfileSettings = () => {

    setPageMeta({
        title: 'Profile Settings',
        description: 'Manage your profile settings and preferences.',
    });

    const user = {
        name: "Joy Welch",
        email: "Joy49@gmail.com",
        avatar: Avatar,
        phone: "+92 312 12 34 567",
        gender: "Male",
        birthday: "2001-05-10",
        role: "Cadet",
        superPower: "Cadet",
        superPowers: [
            { label: "Cadet", value: 1 },
            { label: "Wisdom Guru", value: 2 },
            { label: "Titan", value: 3 },
        ],
        superPowerLevel: 1,
    };


    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("Edit Profile");
    const [userData, setUserData] = useState(user);

    useEffect(() => {
        setUserData(getData('user') || user);
    }, []);

    // Menu sections
    const menuSections = [
        { label: "Edit Profile" },
        { label: "Invite Friends" },
        // { label: "My Interests" },
        { label: "Notifications" },
        { label: "Language" },
        { label: "Subscription" },
        { label: "Payment Methods" },
        { label: "Privacy Policy" },
        { label: "Help" },
        { label: "Feedback" },
        { label: "Logout", danger: true },
    ];

    // Handlers

    const handleLogout = () => {
        Swal.fire({
            title: 'Are you sure you want to logout?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#EE9737',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, logout',
            cancelButtonText: 'Cancel',
        }).then(async (result) => {
            if (result.isConfirmed) {
                await API.Logout();
                clearStorage();
                window.location.href = '/';
            }
        });
    };

    return (
        <MainWrapper logged={true} activeSection="profile-settings">
            {sidebarOpen && (
                <div className="fixed inset-0 z-40 bg-black opacity-50 md:hidden" onClick={() => setSidebarOpen(false)} />
            )}
            <div className="min-h-screen flex flex-col items-center py-0  md:py-4 md:px-2 ">
                <div className="w-full  md:flex md:gap-8 md:items-start">
                    <div className="md:hidden w-full flex items-center justify-between  md:bg-[#EE9737] bg-white px-3">
                        <span className="font-bold text-lg text-[#EE9737]">
                            {activeSection}
                        </span>
                        <span className="w-10" />
                        <button
                            className="p-2 rounded-full bg-white text-[#EE9737]"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <svg
                                width="28"
                                height="28"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`md:w-1/3 md:sticky md:top-24 mb-2 md:mb-0 ${sidebarOpen
                            ? "fixed inset-0 z-50  flex"
                            : ""
                            }`}
                        style={sidebarOpen ? { left: 0, top: 0 } : {}}
                    >
                        {/* Drawer for mobile */}
                        {sidebarOpen && (
                            <div className="w-64 bg-white rounded-r-2xl shadow-lg h-full flex flex-col divide-y divide-gray-200 animate-slide-in-left transition-transform duration-300 transform translate-x-0" style={{ animation: 'slideInLeft 0.3s' }}>
                                <style>{`
                                    @keyframes slideInLeft {
                                        0% { transform: translateX(-100%); }
                                        100% { transform: translateX(0); }
                                    }
                                    .animate-slide-in-left {
                                        animation: slideInLeft 0.3s cubic-bezier(0.4,0,0.2,1);
                                    }
                                `}</style>
                                <div className="flex items-center justify-between px-4 py-4 border-b">
                                    <span className="font-bold text-lg text-[#EE9737] ">Menu</span>
                                    <button
                                        onClick={() => setSidebarOpen(false)}
                                        className="text-gray-400 p-2"
                                    >
                                        <svg
                                            width="24"
                                            height="24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                {menuSections.map((item) => {
                                    return (
                                        <div
                                            key={item.label}
                                            className={`flex items-center justify-between px-4 py-4 cursor-pointer hover:bg-gray-50 ${item.danger ? 'text-red-500' : 'text-gray-700'} ${activeSection === item.label ? 'bg-[#FFF7ED] font-bold text-[#EE9737]' : ''}`}
                                            onClick={() => {
                                                if (item.label === 'Logout') {
                                                    handleLogout();
                                                } else {
                                                    setActiveSection(item.label);
                                                    setSidebarOpen(false);
                                                }
                                            }}
                                        >
                                            <span className="text-sm font-medium">{item.label}</span>
                                            {item.label !== "Logout" && (
                                                <span className="text-gray-400">&gt;</span>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                        {/* Desktop sidebar */}
                        <div className={`${sidebarOpen ? 'hidden' : activeSection === "Edit Profile" ? 'md:block' : 'hidden md:block'}`}>
                            <div className="mb-4">
                                <div className="bg-[#EE9737] rounded-b-3xl p-6 flex flex-col items-center relative md:rounded-3xl md:items-center md:p-8 md:mb-6">
                                    <img
                                        src={user.avatar}
                                        alt="avatar"
                                        className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover border-4 border-white shadow-md md:mb-0 mb-2"
                                    />
                                    <div className="text-center md:text-center md:ml-0 flex-1">
                                        <div className="text-white font-bold text-lg md:text-2xl leading-tight">
                                            {userData.name}
                                        </div>
                                        <div className="text-white text-xs md:text-sm opacity-90">
                                            {userData.email}
                                        </div>
                                        {userData?.role === 4 && (
                                            <div className="text-white text-xs md:text-sm opacity-80 mt-1">
                                                {userData.address ?? '205 Adele Pine, Schmelerport 89722-7605'}
                                            </div>
                                        )}
                                        <div className="text-white text-xs md:text-sm opacity-80 mt-1">
                                            {userData.roleName}
                                        </div>
                                        {userData.role === 1 && (
                                            <button className="mt-2 text-white underline text-xs md:text-sm font-semibold">
                                                Create Avatar
                                            </button>
                                        )}
                                    </div>
                                </div>
                                {userData.role === 1 && (
                                    <div className="bg-white rounded-xl shadow p-4 mt-4 mb-2">
                                        <div className="text-xs text-gray-500 font-semibold mb-2">
                                            Your Super-Power
                                        </div>
                                        <div className="flex items-center justify-between mb-2">
                                            {user?.superPowers.map((sp) => (
                                                <div
                                                    key={sp.label}
                                                    className={`text-sm font-semibold ${user.superPowerLevel === sp.value
                                                        ? "text-[#EE9737]"
                                                        : "text-gray-400"
                                                        }`}
                                                >
                                                    {sp.label}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                            <div
                                                className="h-2 bg-[#EE9737] rounded-full transition-all"
                                                style={{
                                                    width: `${(user.superPowerLevel - 1) * 50}%`,
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="bg-white rounded-2xl shadow divide-y divide-gray-200 hidden md:block">
                                {menuSections.map((item) => (
                                    <div
                                        key={item.label}
                                        className={`flex items-center justify-between px-4 py-4 cursor-pointer hover:bg-gray-50 ${item.danger
                                            ? "text-red-500"
                                            : "text-gray-700"
                                            } ${activeSection === item.label
                                                ? "bg-[#FFF7ED] font-bold text-[#EE9737]"
                                                : ""
                                            }`}
                                        onClick={() => {
                                            if (item.label === 'Logout') {
                                                handleLogout();
                                            } else {
                                                setActiveSection(item.label);
                                            }
                                        }}
                                    >
                                        <span className="text-sm font-medium">
                                            {item.label}
                                        </span>
                                        {item.label !== "Logout" && (
                                            <span className="text-gray-400">&gt;</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Right: Section Content */}
                    <div className="md:w-2/3 bg-white rounded-2xl shadow p-6 flex flex-col items-center">
                        {activeSection === "Edit Profile" && (
                            <>
                                {userData?.role === 1 && (
                                    <EditProfileDetails />
                                )}
                                {userData?.role === 4 && (
                                    <EditSchoolProfile />
                                )}
                            </>
                        )}
                        {activeSection === "Notifications" && (
                            <NotificationSettings />
                        )}
                        {activeSection === "Language" && (
                            <LanguageSelect />
                        )}
                        {activeSection === "Payment Methods" && (
                            <PaymentMethods />
                        )}
                        {activeSection === "Privacy Policy" && (
                            <PrivacyPolicy />
                        )}
                        {activeSection === "Help" && (
                            <LiveChatSection />
                        )}
                        {activeSection === "Feedback" && (
                            <FeedbackSection />
                        )}
                        {activeSection === "Subscription" && (
                            <SubscriptionSection />
                        )}
                        {activeSection === "Invite Friends" && (
                            <InviteFriendsSection />
                        )}
                        {/* You can add more sections here for other menu items if needed */}
                    </div>
                </div>
            </div>
        </MainWrapper>
    );
};

export default ProfileSettings;
