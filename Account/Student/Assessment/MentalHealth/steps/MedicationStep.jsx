import React from 'react';
import MainButton from '../../../../../../components/buttons/MainButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const MedicationStep = ({ value, onChange, onNext }) => {
    const options = [
        { label: 'Prescribed medications', value: 'prescribed', icon: '💊' },
        { label: 'Over-the-counter supplements', value: 'supplements', icon: '🧃' },
        { label: ",I'm not taking any", value: 'none', icon: '🚫' },
        { label: 'Prefer not to say', value: 'preferNot', icon: '❓' },
    ];
    return (
        <div className="flex flex-col h-full justify-between">
            <h2 className="text-xl font-bold mb-4">Are you currently taking any medications or supplements?</h2>
            <div className='w-full max-w-md mx-auto'>
                <div className="grid grid-cols-2 gap-3 mb-4">
                    {options.map(opt => (
                        <button
                            key={opt.value}
                            className={`flex flex-col items-center gap-2 p-4 rounded-lg border font-semibold ${value === opt.value ? 'border-2 border-orange-400 bg-orange-100' : 'border-gray-200'}`}
                            onClick={() => onChange(opt.value)}
                        >
                            <span className="text-2xl">{opt.icon}</span>
                            <span>{opt.label}</span>
                        </button>
                    ))}
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

export default MedicationStep;
