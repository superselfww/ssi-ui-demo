import React, { useEffect } from 'react';
import MainButton from '../../../../../../components/buttons/MainButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const AISoundAnalysisStep = ({ value, onChange, onNext }) => {
    useEffect(() => {
        console.log(value, onChange);
    }, [value, onChange]);

    return (
        <div className="flex flex-col h-full justify-between">
            <h2 className="text-xl font-bold mb-4">AI Sound Analysis</h2>
            <p className="mb-4 text-gray-600">Please read the following phrase out loud. Your voice will be analyzed, but we do not store your voice data.</p>
            <div className="flex flex-col items-center gap-4 mb-6">
                <div className="rounded-lg bg-gray-100 p-6 text-center">
                    <span className="text-2xl font-bold text-primary">I believe in my <span className="bg-primary text-white rounded px-2">Super Self</span>, with all my heart.</span>
                </div>
                <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-orange-200" />
                </div>
            </div>
            <div className='flex justify-center mt-2 w-full max-w-sm mx-auto'>
                <MainButton onClick={onNext}>
                    Continue <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
                </MainButton>
            </div>
        </div>
    )
};

export default AISoundAnalysisStep;
