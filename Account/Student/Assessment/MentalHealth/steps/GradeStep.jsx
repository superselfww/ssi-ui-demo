import React from 'react';
import MainButton from '../../../../../../components/buttons/MainButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const GradeStep = ({ value, onChange, onNext }) => (
    <div className="flex flex-col  justify-between">
        <div>
            <h2 className="text-xl font-bold mb-4">What is your Grade?</h2>
            <div className="space-y-2">
                {[
                    '1st Grade', '2nd Grade', '3rd Grade', '4th Grade', '5th Grade',
                    '6th Grade', '7th Grade', '8th Grade', '9th Grade', '10th Grade',
                    '11th Grade', '12th Grade', 'Undergraduate', 'Graduate', 'Other',
                ].map((grade) => (
                    <label key={grade} className={`flex items-center p-3 rounded-lg border cursor-pointer ${value === grade ? 'border-2 border-orange-400 bg-orange-100' : 'border-gray-200'}`}>
                        <input
                            type="radio"
                            name="grade"
                            value={grade}
                            checked={value === grade}
                            onChange={() => onChange(grade)}
                            className="accent-primary mr-3"
                        />
                        <span>{grade}</span>
                    </label>
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

export default GradeStep;
