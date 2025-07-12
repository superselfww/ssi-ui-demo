import React from 'react';
import MainButton from '../../../../../../components/buttons/MainButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const AgeStep = ({ value, onChange, onNext }) => (
    <div className="flex flex-col h-full justify-between">
        <div className='w-full max-w-md mx-auto'>
            <h2 className="text-xl font-bold mb-4">What is your age?</h2>
            <input
                type="number"
                min="1"
                max="120"
                value={value || ''}
                onChange={e => onChange(e.target.value)}
                placeholder="Enter your age"
                className="w-full p-3 border border-gray-200 rounded-lg text-lg"
            />
        </div>
        <div className='flex justify-center mt-2 w-full max-w-sm mx-auto'>
            <MainButton onClick={onNext}>
                Continue <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
            </MainButton>
        </div>
    </div>
);

export default AgeStep;
