import React, { useState } from 'react';
import Logo from '../../assets/images/logo.png';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';
import MainButton from '../../components/buttons/MainButton';
import MainWrapper from '../../components/MainWrapper';

export default function VerifyOTP() {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const navigator = useNavigate();

    const handleChange = (e, idx) => {
        const val = e.target.value.replace(/[^0-9]/g, '').slice(0, 1);
        const newOtp = [...otp];
        newOtp[idx] = val;
        setOtp(newOtp);
        // Move to next input if value entered
        if (val && idx < 5) {
            document.getElementById(`otp-${idx + 1}`).focus();
        }
    };
    return (
        <>
            <MainWrapper showLogo={true} useFullWidth={true}>
                <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-100 to-yellow-100 p-4">
                    <div className="bg-white rounded-3xl shadow-lg w-full max-w-md p-8 flex flex-col items-center">
                        <h2 className="text-2xl font-bold mb-2 text-gray-800">Verify OTP</h2>
                        <p className="text-gray-500 mb-8 text-center">Enter the 6-digit OTP sent to your email.</p>
                        <form className="w-full flex flex-col gap-6 items-center">
                            <div className="flex gap-2 justify-center mb-4">
                                {otp.map((digit, idx) => (
                                    <input
                                        key={idx}
                                        id={`otp-${idx}`}
                                        type="text"
                                        inputMode="numeric"
                                        maxLength={1}
                                        className="w-12 h-12 text-center text-2xl rounded-xl bg-gray-100 border-none outline-none focus:ring-2 focus:ring-orange-400"
                                        value={digit}
                                        onChange={e => handleChange(e, idx)}
                                    />
                                ))}
                            </div>
                            <MainButton
                                isSubmitting={false}
                                onClick={() => {
                                    const otpValue = otp.join('');
                                    navigator('/forgot-password/save-new-password', { state: { otp: otpValue } });
                                }}
                            >
                                Verify OTP
                            </MainButton>
                        </form>
                    </div>
                </div>
            </MainWrapper>
        </>
    );
}
