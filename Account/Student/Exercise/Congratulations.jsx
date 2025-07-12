import React, { useState } from 'react';
import MainWrapper from '../../../../components/MainWrapper';
import Emojies from '../../../../assets/Emojies.jsx';
import MainTitle from '../../../../components/MainTitle.jsx';

export default function Congratulations() {
    const [selected, setSelected] = useState(null);
    const emojiList = [
        { label: 'Sad', icon: Emojies.confused },
        { label: 'Sick', icon: Emojies.natural },
        { label: 'Neutral', icon: Emojies.confused },
        { label: 'Happy', icon: Emojies.happy },
        { label: 'Amazed', icon: Emojies.amazed },
    ];

    return (
        <MainWrapper logged={true}>
            <MainTitle title="Finished" buttons={[{ label: 'Back', }]} />
            <main className="flex-1 flex flex-col items-center  min-h-screen ">
                
                <div className="w-full max-w-md mx-auto flex flex-col items-center bg-white p-4 rounded-2xl shadow-lg mt-8">
                    {/* Green check icon */}
                    <div className="relative flex flex-col items-center mb-8 mt-2">
                        <div className="rounded-full bg-green-400 w-24 h-24 flex items-center justify-center mx-auto mb-2 relative">
                            <svg width="56" height="56" fill="none" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="12" fill="#22D36B" />
                                <path d="M8 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {/* Dots */}
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-2 h-2 bg-green-300 rounded-full"></div>
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2 h-2 bg-green-300 rounded-full"></div>
                            <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-2 h-2 bg-green-300 rounded-full"></div>
                            <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-2 h-2 bg-green-300 rounded-full"></div>
                            <div className="absolute top-2 left-6 w-1.5 h-1.5 bg-green-200 rounded-full"></div>
                            <div className="absolute bottom-2 right-6 w-1.5 h-1.5 bg-green-200 rounded-full"></div>
                        </div>
                    </div>
                    <div className="text-2xl font-bold text-center mb-2">Congratulations</div>
                    <div className="text-gray-500 text-center mb-8 text-base">You have completed your Exercise</div>
                    <div className="w-full bg-gray-100 rounded-xl p-6 flex flex-col items-center">
                        <div className="text-base font-semibold text-gray-700 mb-4">How do you feel about this exercise?</div>
                        <div className="flex flex-row justify-center gap-4">
                            {emojiList.map((e, idx) => (
                                <button
                                    key={e.label}
                                    className={`transition-all rounded-full border-2 ${selected === idx ? 'border-orange-400 scale-110' : 'border-transparent'} bg-white p-1`}
                                    onClick={() => setSelected(idx)}
                                >
                                    <img src={e.icon} />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </MainWrapper>
    );
}
