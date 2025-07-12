import React, { useState } from 'react';
import Emojies from '../../../../../../assets/Emojies';
import MainButton from '../../../../../../components/buttons/MainButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const SleepQualityStep = ({ value, onChange, onNext }) => {
    const options = [
        { label: 'Excellent', value: 5, icon: Emojies.excited, desc: '7-9 hours' },
        { label: 'Good', value: 4, icon: Emojies.natural, desc: '6-7 hours' },
        { label: 'Fair', value: 3, icon: Emojies.confused, desc: '5 hours' },
        { label: 'Poor', value: 2, icon: Emojies.aww, desc: '3-4 hours' },
        { label: 'Very Poor', value: 1, icon: Emojies.stressed, desc: '<3 hours' },
    ];
    const [slider, setSlider] = useState(value || 3);

    const handleSlider = (e) => {
        setSlider(Number(e.target.value));
        onChange(Number(e.target.value));
    };

    const handleOptionClick = (val) => {
        setSlider(val);
        onChange(val);
    };

    return (
        <div className="flex flex-col h-full justify-between">
            <div>
                <h2 className="text-xl font-bold mb-4">How well did you sleep last night?</h2>
                <div className="flex flex-col items-center gap-4">
                    <input
                        type="range"
                        min={1}
                        max={5}
                        value={slider}
                        onChange={handleSlider}
                        className="w-full mb-4"
                    />
                    <div className="flex flex-col gap-2 w-full">
                        {options.map(opt => (
                            <div
                                key={opt.value}
                                className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer ${slider === opt.value ? 'bg-orange-200 border border-orange-400' : ''}`}
                                onClick={() => handleOptionClick(opt.value)}
                            >
                                <img src={opt.icon} alt={opt.label} className="w-8 h-8" />
                                <span className="font-semibold">{opt.label}</span>
                                <span className="ml-auto text-xs text-gray-500">{opt.desc}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-2 w-full max-w-sm mx-auto'>
                <MainButton onClick={onNext}>
                    Continue <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
                </MainButton>
            </div>
        </div>
    );
};

export default SleepQualityStep;
