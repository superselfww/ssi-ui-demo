import React from 'react';
import MainWrapper from '../../../../components/MainWrapper';

const ViewFaceScanReport = () => {
    return (
        <MainWrapper logged={true}>
            <div className="overflow-hidden min-h-screen">
                <div className="w-full mx-auto mb-8 p-4 lg:py-8 lg:pt-2">
                    <div className="bg-white md:bg-[#EE9737] shadow rounded-xl md:p-6 px-3 py-2">
                        <h1 className="text-lg md:text-2xl font-bold md:text-white mb-0">Face Recognition</h1>
                    </div>
                </div>
                <main className="flex-1 overflow-y-auto p-4 flex flex-col items-center justify-center">
                    <div className="w-full max-w-4xl mx-auto bg-orange-50 rounded-xl shadow flex flex-col items-center gap-6 p-6">
                        <h1 className="text-xl font-bold text-center text-orange-700 mb-2">Face Scan Report</h1>
                        {/* Avatar */}
                        <div className="flex flex-col items-center gap-2 mt-4">
                            <div className="rounded-full border-4 border-orange-200 shadow-lg w-24 h-24 overflow-hidden flex items-center justify-center bg-gray-100">
                                <img src={import.meta.env.BASE_URL + 'src/assets/images/avatar.png'} alt="User avatar" className="object-cover w-full h-full" />
                            </div>
                        </div>
                        {/* Status Icon */}
                        <div className="absolute right-8 top-8">
                            <div className="rounded-full bg-green-700 w-8 h-8 flex items-center justify-center shadow">
                                <span className="text-white font-bold text-lg">C</span>
                            </div>
                        </div>
                        {/* Stress & Mood */}
                        <div className="flex w-full justify-between items-center gap-4 mt-2">
                            {/* Stress Level */}
                            <div className="flex flex-col items-center flex-1">
                                <div className="relative w-20 h-20">
                                    <svg className="w-full h-full" viewBox="0 0 80 80">
                                        <circle cx="40" cy="40" r="32" stroke="#F87171" strokeWidth="8" fill="none" strokeDasharray="201" strokeDashoffset="72" />
                                        <circle cx="40" cy="40" r="32" stroke="#F3F4F6" strokeWidth="8" fill="none" />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-2xl font-bold text-red-400">64%</span>
                                    </div>
                                </div>
                                <div className="text-xs font-semibold text-gray-600 mt-2">STRESS LEVEL</div>
                            </div>
                            {/* State of Mind */}
                            <div className="flex flex-col items-center flex-1">
                                <div className="w-20 h-20 flex items-center justify-center">
                                    <svg width="64" height="64" viewBox="0 0 64 64">
                                        <circle cx="32" cy="32" r="30" stroke="#3B82F6" strokeWidth="4" fill="none" />
                                        <path d="M20 44 Q32 34 44 44" stroke="#3B82F6" strokeWidth="3" fill="none" />
                                        <circle cx="24" cy="28" r="2.5" fill="#3B82F6" />
                                        <circle cx="40" cy="28" r="2.5" fill="#3B82F6" />
                                    </svg>
                                </div>
                                <div className="text-xs font-semibold text-gray-600 mt-2">STATE OF MIND</div>
                            </div>
                        </div>
                        {/* Voice Frequency Graph */}
                        <div className="w-full flex flex-col items-center mt-2">
                            <svg width="100%" height="40" viewBox="0 0 200 40">
                                <polyline points="0,30 10,20 20,25 30,15 40,18 50,22 60,12 70,20 80,18 90,25 100,15 110,20 120,18 130,25 140,15 150,20 160,18 170,25 180,15 190,20 200,18" fill="none" stroke="#F87171" strokeWidth="2" />
                            </svg>
                            <div className="text-xs text-gray-500 text-center mt-1">Voice Frequency</div>
                        </div>

                        {/* Improve Mood Button */}
                        <button className="w-full md:w-sm mt-6 py-3 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-full shadow text-base">Improve my Mood</button>
                    </div>
                </main>
            </div>
        </MainWrapper>
    );
};

export default ViewFaceScanReport;
