import React, { useState } from 'react';
import Cry from '../../../../../../assets/images/cry.png';
import MainButton from '../../../../../../components/buttons/MainButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
const MentalSymptomsStep = ({ value = [], onChange, onNext }) => {
    const symptoms = [
        'Social Withdrawal',
        'Feeling Numbness',
        'Feeling Sad',
        'Depressed',
        'Drug Abuse',
        'Angry',
        'Anxious',
        'Hopeless',
        'Overwhelmed',
        'Other',
    ];
    const [selected, setSelected] = useState(value);

    const toggleSymptom = (symptom) => {
        let updated;
        if (selected.includes(symptom)) {
            updated = selected.filter(s => s !== symptom);
        } else {
            updated = [...selected, symptom];
        }
        setSelected(updated);
        onChange(updated);
    };

    return (
        <div className="flex flex-col h-full justify-between">
            <div>
                <h2 className="text-xl font-bold mb-4">Are you experiencing any other mental health symptoms?</h2>
                <div className='flex items-center justify-center mb-8'>
                    <img src={Cry} alt="cry" className="w-50 h-50 mr-4" />
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                    {symptoms.map(symptom => (
                        <button
                            key={symptom}
                            className={`px-3 py-2 mb-2 rounded-full border text-sm ${selected.includes(symptom) ? 'border-2 border-orange-400 bg-orange-100' : 'border-gray-200'}`}
                            onClick={() => toggleSymptom(symptom)}
                            type="button"
                        >
                            {symptom}
                        </button>
                    ))}
                </div>
                <div className="text-xs text-gray-500 mt-3">Most Common: Drug Abuse, Angry, Depressed</div>
            </div>
            <div className='flex justify-center mt-2 w-full max-w-sm mx-auto'>
                <MainButton onClick={onNext}>
                    Continue <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
                </MainButton>
            </div>
        </div>
    );
};

export default MentalSymptomsStep;
