import React from 'react';
import MainButton from '../../../../../../components/buttons/MainButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const CompilingDataStep = ({ onNext }) => (
    <div className="flex flex-col h-full justify-center items-center">
        <div className="w-20 h-20 mb-6 flex items-center justify-center">
            <svg className="animate-spin" width="64" height="64" viewBox="0 0 64 64">
                <circle cx="32" cy="32" r="28" stroke="#F59E42" strokeWidth="8" fill="none" strokeDasharray="44 88" />
            </svg>
        </div>
        <div className="text-lg font-semibold mb-2">Compiling Data</div>
        <div className="text-gray-500 text-center">Please wait... we're calculating data based on your assessment</div>
        <div className='flex justify-center mt-2 w-full max-w-sm mx-auto'>
            <MainButton onClick={onNext}>
                Continue <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
            </MainButton>
        </div>
    </div>
);

export default CompilingDataStep;
