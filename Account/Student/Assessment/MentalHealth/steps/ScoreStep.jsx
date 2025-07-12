import React from 'react';
import MainButton from '../../../../../../components/buttons/MainButton';

const ScoreStep = ({ score, onGetBetter }) => {
    let color = 'bg-green-200', text = 'Enjoyed', emoji = '😊', desc = 'Based on your answers, you seem to be doing well. If you ever need support, remember it’s okay to ask for help!';
    if (score <= 40 && score > 20) {
        color = 'bg-orange-200'; text = 'Unhappy'; emoji = '😔'; desc = 'We suggest trying relaxing games or exercises to support your well-being and help you feel better.';
    } else if (score <= 20) {
        color = 'bg-red-200'; text = 'Feeling Low'; emoji = '😢'; desc = 'It’s perfectly normal to feel the way you do. Super-Self Institute is here to listen and support you. Let’s move forward one step at a time, and remember that there is always hope, even in the darkest moments.';
    }
    return (
        <div className="flex flex-col h-full justify-between items-center">
            <div className="w-full flex flex-col items-center">
                <h2 className="text-xl font-bold mb-4">Your Mental Health Score</h2>
                <div className={`w-40 h-40 rounded-full flex items-center justify-center mb-4 ${color} border-8 border-white shadow-lg`}>
                    <span className="text-5xl font-bold text-orange-400">{score ?? 10}</span>
                </div>
                <div className="text-2xl mb-2">{emoji} {text}</div>
                <div className="text-center text-gray-600 mb-4 max-w-xs">{desc}</div>
            </div>
            <div className='flex justify-center mt-2 w-full max-w-sm mx-auto'>
                <MainButton onClick={onGetBetter}>
                    Get me better
                </MainButton>
            </div>
        </div>
    );
};

export default ScoreStep;
