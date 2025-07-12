import React from 'react';
import Male from '../../../../../../assets/images/male.png';
import Female from '../../../../../../assets/images/female.png';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import MainButton from '../../../../../../components/buttons/MainButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const GenderStep = ({ value, onChange, onNext }) => (
    <div className="flex flex-col h-full justify-between">
        <div className='max-w-xl w-full mx-auto'>
            <h2 className="text-xl font-bold mb-4">What is your Gender?</h2>
            <div className="flex gap-4 mb-4">
                <button
                    className={`flex-1 p-4 rounded-lg border flex flex-col items-center cursor-pointer ${value === 'Male' ? 'border-orange-400 bg-orange-100 border-2 ' : 'border-gray-200'}`}
                    onClick={() => onChange('Male')}
                >
                    <img src={Male} alt="Male" className="w-16 h-16 mb-2" />
                    Male
                </button>
                <button
                    className={`flex-1 p-4 rounded-lg border flex flex-col items-center cursor-pointer ${value === 'Female' ? 'border-orange-400 bg-orange-100 border-2' : 'border-gray-200'}`}
                    onClick={() => onChange('Female')}
                >
                    <img src={Female} alt="Female" className="w-16 h-16 mb-2" />
                    Female
                </button>
            </div>
            <button
                className={`w-full py-2 rounded-lg border ${value === 'Prefer not to say' ? 'border-orange-400 bg-orange-100 border-2' : 'border-gray-200'}`}
                onClick={() => onChange('Prefer not to say')}
            >
                Prefer not to say
            </button>
        </div>
        <div className='flex justify-center mt-2 w-full max-w-sm mx-auto'>
            <MainButton onClick={onNext}>
                Continue <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
            </MainButton>
        </div>
    </div>
);

export default GenderStep;
