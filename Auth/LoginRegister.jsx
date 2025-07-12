import React, { useState } from 'react'
import Logo from '../../assets/images/logo.png';

import { Link, useNavigate } from 'react-router-dom';
import { setPageMeta } from '../../utils/setPageMeta';
import MainSubmitButton from '../../components/buttons/MainSubmitButton';
import MainWrapper from '../../components/MainWrapper';
import API from '../../services/Api';
import { storeLoginResponse } from '../../utils/auth';


export default function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    setPageMeta({ title: 'Login' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        setSuccess(false);
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');
        if (!email || !password) {
            setError('Please fill in all fields');
            setLoading(false);
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            setLoading(false);
            return;
        }
        let res = await API.auth(email, password);
        if (res?.status != 1) {
            setError(res?.message || 'Login failed. Please try again.');
            setLoading(false);
            return;
        }
        storeLoginResponse(res);
        setSuccess('Login successful!');
        setLoading(false);

        setTimeout(() => {
            navigate('/dashboard');
        }, 1000);
    }

    return (
        <>
            <MainWrapper showLogo={true} useFullWidth={true}>
                <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-100 to-yellow-100 p-4">
                    <div className="bg-white rounded-3xl shadow-lg w-full max-w-md p-8 flex flex-col items-center">
                        <img
                            src={Logo}
                            alt="Super-Self Institute Logo"
                            className="w-48 mb-6"
                        />
                        <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Welcome Back!</h2>
                        <p className="text-gray-600 mb-6 text-center">Log in to your Super-Self Institute account to continue your journey.</p>
                        <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
                            <div>
                                {error && (
                                    <div className="mb-4">
                                        <div className="flex items-center bg-red-100 border border-red-200 text-red-700 px-4 py-3 rounded relative" role="alert">
                                            {error}
                                        </div>
                                    </div>
                                )}
                                {success && (
                                    <div className="mb-4">
                                        <div className="flex items-center bg-green-100 border border-green-200 text-green-700 px-4 py-3 rounded relative" role="alert">
                                            {success}
                                        </div>
                                    </div>
                                )}
                                <label className="block text-md font-medium mb-2 text-gray-900">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    className="w-full px-4 py-2.5 rounded-xl bg-gray-100 text-gray-500 placeholder-gray-400 outline-none border-none"
                                    placeholder="Email address"
                                    autoComplete="email"
                                />
                            </div>
                            <div className="relative">
                                <label className="block text-md font-medium mb-2 text-gray-900">Password</label>
                                <input
                                    name="password"
                                    required
                                    type={showPassword ? 'text' : 'password'}
                                    className="w-full px-4 py-2.5 rounded-xl bg-gray-100 text-gray-900 placeholder-gray-400 outline-none border-none pr-12"
                                    placeholder="Password"
                                    autoComplete="current-password"
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
                                <Link to="/forgot-password" className="absolute right-4 top-2 text-sm text-primary font-medium cursor-pointer select-none">
                                    Forgot Password?
                                </Link>
                            </div>
                            <MainSubmitButton isSubmitting={loading}>
                                Login
                            </MainSubmitButton>
                        </form>
                        <div className="w-full text-center mt-6">
                            <span className="text-gray-600">Don't have an account? </span>
                            <Link to="/start" className="text-primary font-semibold hover:underline">Register</Link>
                        </div>
                    </div>
                </div>
            </MainWrapper>
        </>
    )
}
