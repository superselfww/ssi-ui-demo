import React from 'react';
import MainButton from '../../../../../../components/buttons/MainButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const PhysicalPainStep = ({ value, onChange, onNext }) => (
    <div className="flex flex-col h-full justify-between">
        <h2 className="text-xl font-bold mb-4">Are you experiencing any physical pain?</h2>
        <div className='w-full'>

            <div className="space-y-3">
                <label className={`flex items-center p-3 rounded-lg border cursor-pointer ${value === 'Yes' ? 'border-2 border-orange-400 bg-orange-100' : 'border-gray-200'}`}>
                    <input
                        type="radio"
                        name="physicalPain"
                        value="Yes"
                        checked={value === 'Yes'}
                        onChange={() => onChange('Yes')}
                        className="accent-primary mr-3"
                    />
                    Yes, I have pain in one or multiple areas
                </label>
                <label className={`flex items-center p-3 rounded-lg border cursor-pointer ${value === 'No' ? 'border-2 border-orange-400 bg-orange-100' : 'border-gray-200'}`}>
                    <input
                        type="radio"
                        name="physicalPain"
                        value="No"
                        checked={value === 'No'}
                        onChange={() => onChange('No')}
                        className="accent-primary mr-3"
                    />
                    No, I don't have any physical pain
                </label>
            </div>
        </div>
        <div className='flex justify-center mt-2 w-full max-w-sm mx-auto'>
            <MainButton onClick={onNext}>
                Continue <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
            </MainButton>
        </div>
    </div>
);

export default PhysicalPainStep;
