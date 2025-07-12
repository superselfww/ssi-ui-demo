import React, { useState } from "react";
import MainWrapper from "../../../../components/MainWrapper";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useNavigate } from "react-router-dom";
import MainTitle from "../../../../components/MainTitle";
import Avatar from "../../../../assets/images/avatar.png";
import MainSubmitButton from "../../../../components/buttons/MainSubmitButton";
const ProfileSetup = () => {
    const [weight, setWeight] = useState(47);
    const [phone, setPhone] = useState("");
    const navigator=useNavigate();
    const handleOnSubmit = (e) => {
        e.preventDefault();
        navigator('/dashboard/profile-setup/send-otp');
    }
    return (
        <MainWrapper logged={true}>
            <MainTitle title="Profile Setup" />
            <div className="min-h-screen flex flex-col items-center ">
                <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow p-0 relative">
                    <div className="max-w-md mx-auto">
                        <div className="flex flex-col items-center pt-2 pb-4">
                            <img src={Avatar} alt="avatar" className="w-20 h-20 rounded-full object-cover border-4 border-white shadow" />
                            <span className="bg-primary text-white rounded-full px-2 py-1 text-xs font-bold mt-2">12</span>
                        </div>
                        <form className="px-6 pb-8 flex flex-col gap-4" onSubmit={handleOnSubmit}>
                            <div>
                                <label className="text-xs text-gray-500 font-semibold mb-1 block">Full Name</label>
                                <input type="text" className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm bg-[#f8fafc]" placeholder="Luqman Serdar" />
                            </div>
                            <div>
                                <label className="text-xs text-gray-500 font-semibold mb-1 block">Phone Number</label>
                                <PhoneInput
                                    international
                                    defaultCountry="US"
                                    value={phone}
                                    onChange={setPhone}
                                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm bg-[#f8fafc]"
                                    inputClassName="!w-full !rounded-lg !border-none !bg-[#f8fafc] !text-sm"
                                    placeholder="Enter phone number"
                                />
                            </div>
                            <div>
                                <label className="text-xs text-gray-500 font-semibold mb-1 block">Password</label>
                                <input type="password" className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm bg-[#f8fafc]" placeholder="************" />
                            </div>
                            <div>
                                <label className="text-xs text-gray-500 font-semibold mb-1 block">Confirm Password</label>
                                <input type="password" className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm bg-[#f8fafc]" placeholder="************" />
                            </div>
                            <div>
                                <label className="text-xs text-gray-500 font-semibold mb-1 block">Weight</label>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-gray-400">25</span>
                                    <input type="range" min="25" max="100" value={weight} onChange={e => setWeight(e.target.value)} className="flex-1 accent-orange-400" />
                                    <span className="text-xs text-gray-400">100</span>
                                    <span className="ml-2 bg-red-700 text-white rounded-full px-2 py-0.5 text-xs font-bold">{weight}</span>
                                </div>
                            </div>
                            <div>
                                <label className="text-xs text-gray-500 font-semibold mb-1 block">Gender</label>
                                <select className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm bg-[#f8fafc]">
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-xs text-gray-500 font-semibold mb-1 block">Grade</label>
                                <select className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm bg-[#f8fafc]">
                                    <option>Grade 1</option>
                                    <option>Grade 2</option>
                                    <option>Grade 3</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-xs text-gray-500 font-semibold mb-1 block">Location</label>
                                <select className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm bg-[#f8fafc]">
                                    <option>New York, United States America</option>
                                    <option>London, United Kingdom</option>
                                    <option>Dubai, UAE</option>
                                </select>
                            </div>
                            <MainSubmitButton>Continue</MainSubmitButton>
                        </form>
                    </div>
                </div>
            </div>
        </MainWrapper>
    );
};

export default ProfileSetup;
