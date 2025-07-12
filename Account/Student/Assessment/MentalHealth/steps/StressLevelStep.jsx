import React, { useState } from 'react';
import MainButton from '../../../../../../components/buttons/MainButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const StressLevelStep = ({ value, onChange, onNext }) => {
    const [level, setLevel] = useState(value || 3);
    const handleChange = (val) => {
        setLevel(val);
        onChange(val);
    };
    return (
        <div className="flex flex-col h-full justify-between">
            <div>
                <h2 className="text-xl font-bold mb-4">On a scale from 1 to 5, how stressed are you right now?</h2>
                <div className="flex flex-col items-center gap-6">
                    <span className="text-7xl font-bold text-primary">{level}</span>
                    <div className="flex gap-4">
                        {[1, 2, 3, 4, 5].map(num => (
                            <button
                                key={num}
                                className={`w-10 h-10 rounded-full border font-bold text-lg ${level === num ? 'border-2 border-orange-400 bg-rang-100' : 'border-gray-200'}`}
                                onClick={() => handleChange(num)}
                            >{num}</button>
                        ))}
                    </div>
                    <div className="text-xs text-gray-500 mt-2">1 = Not stressed, 5 = Extremely stressed</div>
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

export default StressLevelStep;
