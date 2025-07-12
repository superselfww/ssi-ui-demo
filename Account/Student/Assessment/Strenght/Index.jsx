import React, { useState } from 'react';
import MainWrapper from '../../../../../components/MainWrapper';
import MainTitle from '../../../../../components/MainTitle';
import MainButton from '../../../../../components/buttons/MainButton';

const questions = [
    // Creativity
    {
        question: 'How do you approach tasks that require creative thinking?',
        options: [
            'I dive in with enthusiasm and generate many ideas',
            'I take time to brainstorm and come up with a few solid ideas',
            'I prefer to follow a structured approach and guidelines',
            'I find it challenging to think creatively',
        ],
    },
    {
        question: 'Can you describe a time when you used your creativity to solve a problem or create something new?',
        options: [
            'Created something innovative that worked perfectly',
            'Came up with a creative solution with some effort',
            'Struggled to find a creative approach but managed to solve the problem',
            'Found it challenging to come up with a creative solution',
        ],
    },
    // Leadership
    {
        question: 'How comfortable are you with taking charge in group activities or projects?',
        options: [
            'Very comfortable, I enjoy leading and guiding others',
            'Comfortable, but prefer to lead when necessary',
            'Somewhat comfortable, I prefer to support rather than lead',
            'Not comfortable, I avoid taking charge',
        ],
    },
    {
        question: 'Share an experience where you successfully led a group to achieve a goal.',
        options: [
            'Led the group successfully and achieved the goal',
            'Led the group with some challenges but reached the goal',
            "Had difficulties leading the group and didn't reach the goal",
            ",Prefer not to lead, haven't had much leadership experience",
        ],
    },
    // Empathy
    {
        question: 'How do you handle situations where someone needs emotional support?',
        options: [
            'I actively listen and provide support with empathy',
            'I listen and try to help as much as I can',
            'I find it challenging to provide emotional support',
            'I avoid situations where emotional support is needed',
        ],
    },
    {
        question: 'Can you provide an example of a time when you showed empathy towards someone?',
        options: [
            'Provided significant emotional support and helped them feel better',
            'Offered some support and comfort',
            'Struggled to provide the needed support',
            'Found it challenging to show empathy',
        ],
    },
    // Decision Making
    {
        question: 'How do you approach making important decisions?',
        options: [
            'I analyze all options thoroughly and make a confident decision',
            'I take time to weigh the pros and cons before deciding',
            'I seek advice from others before making a decision',
            'I find it difficult to make decisions',
        ],
    },
    {
        question: 'Describe a situation where you had to make a crucial decision and how you handled it.',
        options: [
            'Made a well-thought-out decision that worked perfectly',
            'Made a decision with some difficulty but it worked out',
            'Struggled to decide but eventually made a choice',
            'Found it challenging to make a decision and hesitated',
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
    [questions[0], questions[1]], // Creativity
    [questions[2], questions[3]], // Leadership
    [questions[4], questions[5]], // Empathy
    [questions[6], questions[7]], // Decision Making
];

const sectionTitles = [
    'Creativity',
    'Leadership',
    'Empathy',
    'Decision Making',
];

export default function StrenghtAssessment() {
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
            <main className="flex-1 flex flex-col items-center  min-h-screen px-3 lg:px-0">
                <MainTitle title="Know My Strengths" />
                <div className="w-full  mx-auto flex flex-col items-center   mt-8 ">
                    {/* Title Section */}

                    {/* Stepper */}
                    <div className="w-full flex justify-between items-center mb-8">
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
                                <MainButton
                                    className={`w-full py-3 rounded-full font-semibold text-white text-base transition ${(answers[step * 2] !== null && answers[step * 2 + 1] !== null) ? 'bg-primar' : 'bg-orange-200 cursor-not-allowed'}`}
                                    disabled={!(answers[step * 2] !== null && answers[step * 2 + 1] !== null)}
                                    onClick={handleNext}
                                >
                                    {step === steps.length - 1 ? 'See Result' : 'Next'}
                                </MainButton>
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
