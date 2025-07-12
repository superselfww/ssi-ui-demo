import React, { useState } from 'react';
import Logo from '../../assets/images/logo.png';
import MainButton from '../../components/buttons/MainButton';
import MainWrapper from '../../components/MainWrapper';

export default function SaveNewPassword() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    return (
        <>
            <MainWrapper showLogo={true} useFullWidth={true}>
                <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-100 to-yellow-100 p-4">
                    <div className="bg-white rounded-3xl shadow-lg w-full max-w-md p-8 flex flex-col items-center">
                        <img src={Logo} alt="Super-Self Institute Logo" className="w-48 mb-6" />
                        <h2 className="text-2xl font-bold mb-2 text-gray-800">Save New Password</h2>
                        <p className="text-gray-500 mb-8 text-center">Enter your new password below.</p>
                        <form className="w-full flex flex-col gap-6">
                            <div className="relative">
                                <label className="block text-base font-medium mb-2 text-gray-900">New Password</label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-100 text-gray-900 placeholder-gray-400 outline-none border-none pr-12"
                                    placeholder="New Password"
                                    autoComplete="new-password"
                                />
                                <button
                                    type="button"
                                    className="absolute right-4 top-11 text-gray-400"
                                    tabIndex={-1}
                                    onClick={() => setShowPassword(v => !v)}
                                    aria-label="Toggle password visibility"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12s3.75-7.5 9.75-7.5 9.75 7.5 9.75 7.5-3.75 7.5-9.75 7.5S2.25 12 2.25 12z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="relative">
                                <label className="block text-base font-medium mb-2 text-gray-900">Confirm New Password</label>
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-100 text-gray-900 placeholder-gray-400 outline-none border-none pr-12"
                                    placeholder="Confirm New Password"
                                    autoComplete="new-password"
                                />
                                <button
                                    type="button"
                                    className="absolute right-4 top-11 text-gray-400"
                                    tabIndex={-1}
                                    onClick={() => setShowConfirmPassword(v => !v)}
                                    aria-label="Toggle confirm password visibility"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12s3.75-7.5 9.75-7.5 9.75 7.5 9.75 7.5-3.75 7.5-9.75 7.5S2.25 12 2.25 12z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                    </svg>
                                </button>
                            </div>
                            <MainButton
                                type="submit"
                            >
                                Save Password
                            </MainButton>
                        </form>
                    </div>
                </div>
            </MainWrapper>
        </>
    );
}
