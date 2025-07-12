import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainWrapper from '../../components/MainWrapper';
import MainButton from '../../components/buttons/MainButton';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const navigator = useNavigate();
    return (
        <>
            <MainWrapper showLogo={true} useFullWidth={true}>
                <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-100 to-yellow-100 p-4">
                    <div className="bg-white rounded-3xl shadow-lg w-full max-w-md p-8 flex flex-col items-center">
                        <h2 className="text-2xl font-bold mb-2 text-gray-800">Forgot Password?</h2>
                        <p className="text-gray-500 mb-8 text-center">Enter your email address to receive an OTP.</p>
                        <div className="w-full flex flex-col gap-6">
                            <div>
                                <label className="block text-base font-medium mb-2 text-gray-900">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-xl bg-gray-100 text-gray-500 placeholder-gray-400 outline-none border-none"
                                    placeholder="Email address"
                                    autoComplete="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <MainButton
                                onClick={() => {
                                    navigator('/forgot-password/verify', { state: { email } });
                                }}
                            >
                                Send OTP
                            </MainButton>
                        </div>
                    </div>
                </div>
            </MainWrapper>
        </>
    );
}
