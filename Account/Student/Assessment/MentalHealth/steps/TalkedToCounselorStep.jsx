import React from 'react';
import confused from '../../../../../../assets/images/confused.png';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MainButton from '../../../../../../components/buttons/MainButton';

const TalkedToCounselorStep = ({ value, onChange, onNext }) => (
    <div className="flex flex-col h-full justify-between">
        <h2 className="text-xl font-bold mb-4">Have you ever talked to a counselor, therapist, or doctor about your feelings?</h2>
        <div className='w-full max-w-md mx-auto'>
            <div className="flex flex-col items-center mb-6">
                <img src={confused} alt="counselor" className="w-32 h-32 mb-4" />
                <div className="flex gap-4 w-full">
                    <button
                        className={`flex-1 py-3 rounded-lg border font-semibold ${value === 'No' ? 'border-2 border-orange-400 bg-orange-100' : 'border-gray-200'}`}
                        onClick={() => onChange('No')}
                    >No</button>
                    <button
                        className={`flex-1 py-3 rounded-lg border font-semibold ${value === 'Yes' ? 'border-2 border-orange-400 bg-orange-100' : 'border-gray-200'}`}
                        onClick={() => onChange('Yes')}
                    >Yes</button>
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

export default TalkedToCounselorStep;
