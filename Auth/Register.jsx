import React, { useState } from 'react'
import MainWrapper from '../../components/MainWrapper';
import { setPageMeta } from '../../utils/setPageMeta';
import MainSubmitButton from '../../components/buttons/MainSubmitButton';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const navigate=useNavigate();
    const [registerForm, setRegisterForm] = useState({
        name: '',
        email: '',
        dob: '',
        password: '',
        confirmPassword: '',
        isAdult: true,
        acceptTerms: true,
    })

    setPageMeta({ title: 'Register' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate('/setup');
    }

    return (
        <>
            <MainWrapper showLogo={true} useFullWidth={true}>
                <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-100 to-yellow-100 p-4">
                    <div className="bg-white rounded-3xl shadow-lg w-full max-w-md p-8 flex flex-col items-center">
                        <h2 className="text-2xl font-bold text-primary mb-4 text-center">Create Your Account</h2>
                        {/* <p className="text-gray-600 mb-6 text-center">Register to join the Super-Self Institute community.</p> */}
                        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
                            <div>
                                <label className="block text-md font-medium mb-2 text-gray-900">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2.5 rounded-xl bg-gray-100 text-gray-500 placeholder-gray-400 outline-none border-none"
                                    placeholder="Your full name"
                                    autoComplete="name"
                                />
                            </div>
                            <div>
                                <label className="block text-md font-medium mb-2 text-gray-900">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2.5 rounded-xl bg-gray-100 text-gray-500 placeholder-gray-400 outline-none border-none"
                                    placeholder="Email Address"
                                    autoComplete="email"
                                />
                            </div>
                            <div className="relative">
                                <label className="block text-md font-medium mb-2 text-gray-900">Birthday</label>
                                <input
                                    type="date"
                                    className="w-full px-4 py-2.5 rounded-xl bg-gray-100 text-gray-500 placeholder-gray-400 outline-none border-none "
                                    autoComplete="bday"
                                />
                            </div>
                            <div className="relative">
                                <label className="block text-md font-medium mb-2 text-gray-900">Password</label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className="w-full px-4 py-2.5 rounded-xl bg-gray-100 text-gray-900 placeholder-gray-400 outline-none border-none pr-12"
                                    placeholder="Password"
                                    autoComplete="new-password"
                                />
                                <button
                                    type="button"
                                    className="absolute right-4 top-11 text-gray-400"
                                    tabIndex={-1}
                                    onClick={() => setShowPassword((v) => !v)}
                                    aria-label="Toggle password visibility"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12s3.75-7.5 9.75-7.5 9.75 7.5 9.75 7.5-3.75 7.5-9.75 7.5S2.25 12 2.25 12z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="relative">
                                <label className="block text-md font-medium mb-2 text-gray-900">Confirm Password</label>
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    className="w-full px-4 py-2.5 rounded-xl bg-gray-100 text-gray-900 placeholder-gray-400 outline-none border-none pr-12"
                                    placeholder="Confirm Password"
                                    autoComplete="new-password"
                                />
                                <button
                                    type="button"
                                    className="absolute right-4 top-11 text-gray-400"
                                    tabIndex={-1}
                                    onClick={() => setShowConfirmPassword((v) => !v)}
                                    aria-label="Toggle confirm password visibility"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12s3.75-7.5 9.75-7.5 9.75 7.5 9.75 7.5-3.75 7.5-9.75 7.5S2.25 12 2.25 12z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex flex-col gap-3 mt-2">
                                <label className="flex items-center gap-3 text-sm  text-black cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={registerForm.isAdult}
                                        onChange={e => setRegisterForm(f => ({ ...f, isAdult: e.target.checked }))}
                                        className="accent-black w-4 h-4 rounded-full border-gray-300 focus:ring-2 focus:ring-orange-400"
                                    />
                                    I am 18 years old or older.
                                </label>
                                <label className="flex items-center gap-3 text-sm  text-black cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={registerForm.acceptTerms}
                                        onChange={e => setRegisterForm(f => ({ ...f, acceptTerms: e.target.checked }))}
                                        className="accent-black w-4 h-4 rounded-full border-gray-300 focus:ring-2 focus:ring-orange-400"
                                    />
                                    I accept the terms and privacy policy.
                                </label>
                            </div>
                            <MainSubmitButton>
                                Register
                            </MainSubmitButton>
                        </form>
                    </div>
                </div>
            </MainWrapper>
        </>
    )
}
