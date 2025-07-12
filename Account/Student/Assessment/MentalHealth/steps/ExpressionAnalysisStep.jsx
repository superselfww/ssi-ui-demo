import { faChevronRight, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import MainButton from '../../../../../../components/buttons/MainButton';

const ExpressionAnalysisStep = ({ value, onChange, onNext }) => {
    const [text, setText] = useState(value || '');
    const maxLength = 250;
    return (
        <div className="flex flex-col h-full justify-between">
            <div>
                <h2 className="text-xl font-bold mb-4">Expression Analysis</h2>
                <p className="mb-2 text-gray-600">Write down anything that's on your mind. Tap into your Super Self.</p>
                <div className="bg-gray-100 rounded-lg p-4 mb-2 w-full">
                    <textarea
                        className="w-full bg-transparent outline-none resize-none text-lg min-h-[80px]"
                        maxLength={maxLength}
                        value={text}
                        onChange={e => { setText(e.target.value); onChange(e.target.value); }}
                        placeholder="If you feel sad or upset, it's important to talk to someone you trust."
                    />
                    <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
                        <span>{text.length}/{maxLength}</span>

                    </div>

                </div>
                <div className='mt-2 flex justify-center'>
                    <button className="text-white bg-orange-400 hover:bg-orange-500 py-2 rounded-lg px-2" type="button"><FontAwesomeIcon icon={faMicrophone} /> Use voice instead</button>
                </div>
            </div>
            <div className='flex justify-center mt-2 w-full max-w-sm mx-auto'>
                <MainButton onClick={onNext}>
                    Continue <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
                </MainButton>
            </div>
        </div>
    );
};

export default ExpressionAnalysisStep;
