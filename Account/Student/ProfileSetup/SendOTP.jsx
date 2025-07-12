import { useState } from 'react';
import MainWrapper from '../../../../components/MainWrapper';
import PhoneInput from "react-phone-number-input";
import {useNavigate } from 'react-router-dom';
import Successimage from '../../../../assets/images/success.png';
import MainTitle from '../../../../components/MainTitle';
import MainSubmitButton from '../../../../components/buttons/MainSubmitButton';
import MainButton from '../../../../components/buttons/MainButton';
const SendOTP = () => {
    const [step, setStep] = useState('phone'); // 'phone', 'verify', 'success'
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [sentOtp, setSentOtp] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e, idx) => {
        const val = e.target.value.replace(/[^0-9]/g, '').slice(0, 1);
        const newOtp = [...otp];
        newOtp[idx] = val;
        setOtp(newOtp);
        if (val && idx < 5) {
            document.getElementById(`otp-${idx + 1}`).focus();
        }
    };

    const handleSendOTP = (e) => {
        e.preventDefault();
        // if (!/^\d{10,15}$/.test(phone)) {
        //     setError('Please enter a valid phone number.');
        //     return;
        // }
        setError('');
        const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
        setSentOtp(generatedOtp);
        setStep('verify');
    };

    const handleVerifyOTP = (e) => {
        e.preventDefault();
        setStep('success');
        setError('');
        if (otp === sentOtp) {
            setStep('success');
            setError('');
        } else {
            setError('Invalid OTP. Please try again.');
        }
    };

    return (
        <MainWrapper logged={true} activeSection="profile-setup">
            <MainTitle title="Phone Verification" buttons={[{ label: "Back" }]} />
            <div className="min-h-screen flex flex-col items-center ">
                <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow p-0 relative">
                    <div className="max-w-md mx-auto">
                        <form className="px-6 pb-8 flex flex-col gap-4 items-center" onSubmit={step === 'phone' ? handleSendOTP : handleVerifyOTP}>
                            {step === 'phone' && (
                                <>
                                    <h4 className='text-2xl text-center mt-16'>We will send you one time verification password</h4>
                                    <label className="text-xs text-gray-500 font-semibold mb-1 block">Phone Number</label>
                                    <PhoneInput
                                        international
                                        defaultCountry="US"
                                        value={phone}
                                        onChange={setPhone}
                                        className="w-full rounded-lg border border-gray-200 px-3 py-1 text-sm bg-[#f8fafc]"
                                        class="phoneInput !h-10 !w-full !border-0 !focus:border-0 !rounded-lg !border-none !bg-[#f8fafc] !text-sm"
                                        placeholder="Enter phone number"
                                    />
                                    {error && <div className="text-red-500 mb-3">{error}</div>}
                                    <MainSubmitButton className="mt-0">
                                        Send OTP
                                    </MainSubmitButton>
                                </>
                            )}
                            {step === 'verify' && (
                                <>
                                    <h4 className='text-2xl text-center mt-16'>Enter the OTP we have sent to +971***********</h4>
                                    <div className="flex gap-2 justify-center mb-4">
                                        {otp.map((digit, idx) => (
                                            <input
                                                key={idx}
                                                id={`otp-${idx}`}
                                                type="text"
                                                inputMode="numeric"
                                                maxLength={1}
                                                className="w-12 h-12 text-center text-2xl rounded-xl bg-gray-100 border-1 border-gray-200 outline-none focus:ring-2 focus:ring-orange-400"
                                                value={digit}
                                                onChange={e => handleChange(e, idx)}
                                            />
                                        ))}
                                    </div>
                                    {error && <div className="text-red-500 mb-3">{error}</div>}
                                    <MainSubmitButton className="mt-0">
                                        Verify OTP
                                    </MainSubmitButton>
                                </>
                            )}
                            {step === 'success' && (
                                <div className="text-center">
                                    <div>
                                        <img src={Successimage} alt="Success" className="w-24 h-24 mx-auto mb-4" />
                                    </div>
                                    <h2 className="text-2xl font-bold mb-4 text-green-600">Phone Verified!</h2>
                                    <p className="mb-6">Your Account has been setup successfuly.</p>
                                    <MainButton onClick={() => { navigate('/dashboard') }}>
                                        Go to Dashboard
                                    </MainButton>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </MainWrapper>
    );
};

export default SendOTP;
