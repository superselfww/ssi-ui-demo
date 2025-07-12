import React, { useState } from 'react';
import MainButton from '../../../../../../components/buttons/MainButton';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WeightStep = ({ value, unit, onChange, onUnitChange, onNext, onSkip }) => {
    const [inputValue, setInputValue] = useState(value || 60);

    const handleSlider = (e) => {
        setInputValue(e.target.value);
        onChange(e.target.value);
    };

    return (
        <div className="flex flex-col h-full justify-between">
            <div className='w-full max-w-md mx-auto'>
                <h2 className="text-xl font-bold mb-4">What is your weight?</h2>
                <div className="flex gap-2 mb-4">
                    <button
                        className={`flex-1 py-2 rounded-lg border ${unit === 'kg' ? 'border-orange-400 border-2 bg-orange-100' : 'border-gray-200'}`}
                        onClick={() => onUnitChange('kg')}
                    >kg</button>
                    <button
                        className={`flex-1 py-2 rounded-lg border ${unit === 'lbs' ? 'border-orange-400 border-2 bg-orange-100' : 'border-gray-200'}`}
                        onClick={() => onUnitChange('lbs')}
                    >lbs</button>
                </div>
                <div className="flex flex-col items-center mb-4">
                    <span className="text-5xl font-bold text-orange-400">{inputValue} <span className="text-lg font-normal text-orange-400">{unit}</span></span>
                    <input
                        type="range"
                        min={unit === 'kg' ? 30 : 66}
                        max={unit === 'kg' ? 200 : 440}
                        value={inputValue}
                        onChange={handleSlider}
                        className="w-full mt-4"
                    />
                </div>
            </div>
            <div className='flex justify-center mt-2 w-full max-w-sm mx-auto flex-col'>
                <MainButton onClick={onNext}>
                    Continue <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
                </MainButton>
                <button onClick={onSkip} className="w-full cursor-pointer text-orange-400 py-2 rounded-lg font-semibold">Skip for now</button>
            </div>
        </div>
    );
};

export default WeightStep;
