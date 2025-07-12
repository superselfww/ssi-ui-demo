import React, { useState } from 'react';
import MainWrapper from '../../../../../components/MainWrapper';
import MainTitle from '../../../../../components/MainTitle';

const questions = [
    {
        question: 'How comfortable are you with learning new subjects or adjusting to new learning environments?',
        options: [
            'Very comfortable, always eager to explore new topics',
            'Comfortable, but prefer sticking to familiar subjects',
            'Somewhat comfortable, may take some time to adjust',
            'Not comfortable, prefer using only basic features',
        ],
    },
    {
        question: 'Describe a situation where you had to quickly adjust to changes in your studies. How did you handle it?',
        options: [
            'Adapted quickly and found a solution',
            'Adapted eventually with some difficulty',
            'Struggled to adapt and needed help',
            'Found it challenging to adapt and gave up',
        ],
    },
    {
        question: 'Do you enjoy working on group projects or study activities with your peers?',
        options: [
            'Absolutely, love collaborating with others',
            'Generally enjoy it, but prefer individual tasks',
            'Neutral, can work well alone or in a group',
            'Prefer working alone, find group tasks challenging',
        ],
    },
    {
        question: 'Share an experience where you successfully collaborated with others to achieve a common academic goal.',
        options: [
            'Successfully collaborated and achieved the goal',
            'Collaborated with some challenges but reached the goal',
            'Had difficulties collaborating and didn’t reach the goal',
            'Prefer individual work, haven’t had much collaboration experience',
        ],
    },
    {
        question: 'How do you handle setbacks or challenges in your studies?',
        options: [
            'Quickly find solutions and move forward',
            'Take some time to overcome challenges',
            'Seek help from others to overcome challenges',
            'Get discouraged and may stop temporarily',
        ],
    },
    {
        question: 'Can you provide an example of a time when you faced difficulties with a subject or project, and how you overcame them?',
        options: [
            'Overcame difficulties with ease',
            'Overcame difficulties with some effort',
            'Overcame difficulties with help from others',
            'Didn’t overcome difficulties, struggled to proceed',
        ],
    },
    {
        question: 'Describe a situation where you had to troubleshoot and solve a problem in your studies.',
        options: [
            'Successfully troubleshooted and solved the problem',
            'Troubleshooted and solved the problem with some difficulty',
            'Had difficulty troubleshooting and needed help',
            'Couldn’t troubleshoot and solve the problem',
        ],
    },
    {
        question: 'How do you approach figuring out new subjects or solving challenging problems in your studies?',
        options: [
            'Explore and figure it out on my own',
            'Explore with some difficulty, may need help',
            'Prefer others to explain new features',
            'Avoid using new features, stick to what I know',
        ],
    },
];

const ratings = [
    { label: 'Needs Improvement', color: 'bg-red-200', value: 1 },
    { label: 'Average', color: 'bg-yellow-200', value: 2 },
    { label: 'Good', color: 'bg-green-200', value: 3 },
    { label: 'Excellent', color: 'bg-blue-200', value: 4 },
];

const steps = [
    [questions[0], questions[1]],
    [questions[2], questions[3]],
    [questions[4], questions[5]],
    [questions[6], questions[7]],
];

const sectionTitles = [
    'Learning & Adaptability',
    'Collaboration & Teamwork',
    'Resilience & Problem Solving',
    'Troubleshooting & Exploration',
];

export default function KnowMySuperPower() {
    const [step, setStep] = useState(0); // 0, 1 for question steps, 2 for result
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));

    const handleSelect = (qIdx, optIdx) => {
        const updated = [...answers];
        updated[qIdx] = optIdx;
        setAnswers(updated);
    };

    const handleNext = () => {
        if (step < steps.length - 1) {
            setStep(step + 1);
        } else {
            setStep(steps.length); // Go to result
        }
    };

    // Result calculation (simple: count of most selected index)
    let resultRating = null;
    if (step === steps.length) {
        const counts = [0, 0, 0, 0];
        answers.forEach((a) => { if (a !== null) counts[a] += 1; });
        const maxIdx = counts.indexOf(Math.max(...counts));
        resultRating = ratings[maxIdx];
    }

    return (
        <MainWrapper logged={true}>
            <MainTitle title="Know My Superpower"  />
            <main className="flex-1 flex flex-col items-center  min-h-screen p-4">
              
                <div className="w-full  mx-auto flex flex-col items-center">
                    {/* Title Section */}

                    {/* Stepper */}
                    <div className="w-full flex justify-between items-center mb-6">
                        {steps.map((_, idx) => (
                            <div key={idx} className={`w-12 h-2 rounded-full mx-1 ${step === idx ? 'bg-primary' : 'bg-orange-100'}`}></div>
                        ))}
                        <div className={`w-12 h-2 rounded-full mx-1 ${step === steps.length ? 'bg-primary' : 'bg-orange-100'}`}></div>
                    </div>
                    {/* Questions */}
                    {step < steps.length && (
                        <>
                            <h2 className="text-xl font-bold text-primary mb-4 w-full text-left">{sectionTitles[step]}</h2>
                            <div className="w-full flex flex-col gap-8 mb-8">
                                {steps[step].map((q, qIdx) => {
                                    const globalIdx = step * 2 + qIdx;
                                    return (
                                        <div key={q.question}>
                                            <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-3">{q.question}</h3>
                                            <div className="w-full flex flex-col gap-3">
                                                {q.options.map((opt, idx) => (
                                                    <label key={opt} className={`flex items-center rounded-2xl border-2 px-4 py-3 cursor-pointer transition-all ${answers[globalIdx] === idx ? 'bg-primary text-white border-orange-500 shadow' : 'bg-white border-gray-100 text-gray-900 hover:border-orange-300'}`}>
                                                        <input
                                                            type="radio"
                                                            name={`q${globalIdx}`}
                                                            checked={answers[globalIdx] === idx}
                                                            onChange={() => handleSelect(globalIdx, idx)}
                                                            className="form-radio accent-orange-500 mr-3 w-5 h-5"
                                                        />
                                                        <span className="font-medium text-base">{opt}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className='w-full flex justify-center max-w-sm'>
                                <button
                                    className={`w-full py-3 rounded-full font-semibold text-white text-base transition ${(answers[step * 2] !== null && answers[step * 2 + 1] !== null) ? 'bg-primary' : 'bg-orange-200 cursor-not-allowed'}`}
                                    disabled={!(answers[step * 2] !== null && answers[step * 2 + 1] !== null)}
                                    onClick={handleNext}
                                >
                                    {step === steps.length - 1 ? 'See Result' : 'Next'}
                                </button>
                            </div>
                        </>
                    )}
                    {/* Result Page */}
                    {step === steps.length && (
                        <div className="w-full flex flex-col items-center mt-8 max-w-sm bg-white shadow-2xl rounded-2xl p-6">
                            <div className={`rounded-full ${resultRating.color} w-24 h-24 flex items-center justify-center mb-4`}>
                                <span className="text-3xl font-bold text-gray-700">{resultRating.value}</span>
                            </div>
                            <div className="text-2xl font-bold text-center mb-2">Your Superpower Rating</div>
                            <div className="text-gray-500 text-center mb-6 text-base">{resultRating.label}</div>
                            <button className="mt-4 px-6 py-3 rounded-full bg-orange-400 hover:bg-orange-500 text-white font-semibold text-base" onClick={() => { setStep(0); setAnswers(Array(questions.length).fill(null)); }}>Try Again</button>
                        </div>
                    )}
                </div>
            </main>
        </MainWrapper>
    );
}
