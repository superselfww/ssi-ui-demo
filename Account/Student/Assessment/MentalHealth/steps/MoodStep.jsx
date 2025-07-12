import React from 'react';
import Emojies from '../../../../../../assets/Emojies';
import MainButton from '../../../../../../components/buttons/MainButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const MoodStep = ({ value, onChange, onNext }) => {
    const moods = [
        { label: 'Stressed', value: 'stressed', icon: Emojies.stressed },
        { label: 'Neutral', value: 'neutral', icon: Emojies.natural },
        { label: 'Happy', value: 'happy', icon: Emojies.happy },
    ];

    return (
        <div className="flex flex-col h-full justify-between">
            <div>
                <h2 className="text-xl font-bold mb-4">How would you describe your mood?</h2>
                <div className="flex justify-center gap-8 mb-6">
                    {moods.map((mood) => (
                        <button
                            key={mood.value}
                            className={`flex flex-col items-center gap-2 focus:outline-none ${value === mood.value ? 'scale-110' : ''}`}
                            onClick={() => onChange(mood.value)}
                        >
                            <img src={mood.icon} alt={mood.label} className="w-16 h-16" />
                            <span className="text-lg font-semibold">{mood.label}</span>
                        </button>
                    ))}
                </div>
                {value && (
                    <div className="text-center text-lg mt-2">I feel <span className="font-bold">{moods.find(m => m.value === value)?.label}</span></div>
                )}
            </div>
            <div className='flex justify-center mt-2 w-full max-w-sm mx-auto'>
                <MainButton onClick={onNext}>
                    Continue <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
                </MainButton>
            </div>
        </div>
    );
};

export default MoodStep;
