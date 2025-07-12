import React from 'react';
import MainButton from '../../../../../../components/buttons/MainButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const HealthGoalStep = ({ value, onChange, onNext }) => (
    <div className="flex flex-col h-full justify-between">
        <div>
            <h2 className="text-xl font-bold mb-4">What's your health goal today?</h2>
            <div className="space-y-3">
                {[
                    'I want to reduce stress',
                    'I want to try AI Therapy',
                    'I want to cope with trauma',
                    'I want to become a better person',
                    'Just exploring the app!',
                ].map((goal) => (
                    <label key={goal} className={`flex items-center p-3 rounded-lg border cursor-pointer ${value === goal ? 'border-primary bg-primary/10' : 'border-gray-200'}`}>
                        <input
                            type="radio"
                            name="healthGoal"
                            value={goal}
                            checked={value === goal}
                            onChange={() => onChange(goal)}
                            className="accent-primary mr-3"
                        />
                        <span>{goal}</span>
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

export default HealthGoalStep;
