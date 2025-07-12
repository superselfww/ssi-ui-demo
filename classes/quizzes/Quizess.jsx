import React, { useState } from "react";
import MainWrapper from "../../../components/MainWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import WinImage from "../../../assets/images/win.png";
const quizData = {
    title: "Fantasy Quiz #156",
    questions: [
        {
            question: "What is the atomic number of carbon?",
            options: ["5", "6", "7", "8"],
            correct: 2,
        },
        // Add more questions as needed
    ],
    total: 5,
};

const Quizess = () => {
    const [step, setStep] = useState(0); // 0: question, 1: answer, 2: result
    const [selected, setSelected] = useState(null);
    const [score] = useState(120);
    const [correct] = useState(4);

    const q = quizData.questions[0];

    return (
        <MainWrapper logged={true}>
            <div className="min-h-screen  flex flex-col items-center ">
                <div className="w-full max-w-2xl mt-10 mx-auto bg-white rounded-2xl shadow p-0 relative">
                    {/* Header */}
                    <div className="flex items-center justify-between px-6 pt-6 pb-2">
                        <div className="font-semibold text-center w-full text-gray-900 text-base">{quizData.title}</div>
                        <Link to={`/classes/12/quizzes/start`} className="absolute right-4 top-6 text-gray-400 hover:text-gray-700">
                            <FontAwesomeIcon icon={faTimes} size="lg" />
                        </Link>
                    </div>
                    {/* Progress */}
                    {step < 2 && (
                        <div className="flex items-center gap-2 px-6 mb-2">
                            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-2 bg-primary rounded-full" style={{ width: "20%" }}></div>
                            </div>
                            <span className="text-xs text-gray-400">1/5</span>
                        </div>
                    )}
                    {/* Question */}
                    {step === 0 && (
                        <div className="px-6 pb-6">
                            <div className="font-semibold text-base text-[#1A1A2C] mb-4 mt-2">{q.question}</div>
                            <div className="flex flex-col gap-3">
                                {q.options.map((opt, i) => (
                                    <button
                                        key={i}
                                        className={`flex items-center gap-3 w-full rounded-xl px-4 py-3 text-left text-base font-medium border-none transition-all
                      bg-[#f6f7fa] text-gray-900
                      ${selected === i ? 'ring-2 ring-orange-300' : ''}`}
                                        onClick={() => setSelected(i)}
                                    >
                                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#f6e7d7] text-base font-bold text-[#d49a4a]">
                                            {String.fromCharCode(65 + i)}
                                        </span>
                                        {opt}
                                    </button>
                                ))}
                            </div>
                            <button
                                className={`w-full mt-8 py-2 rounded-full text-lg font-semibold transition ${selected === null ? 'bg-gray-300 text-white' : 'bg-primary text-white hover:bg-primary/80'}`}
                                disabled={selected === null}
                                onClick={() => setStep(1)}
                            >
                                Continue
                            </button>
                        </div>
                    )}
                    {/* Answer Review */}
                    {step === 1 && (
                        <div className="px-6 pb-6">
                            <div className="font-semibold text-base text-[#1A1A2C] mb-4 mt-2">{q.question}</div>
                            <div className="flex flex-col gap-3">
                                {q.options.map((opt, i) => (
                                    <div
                                        key={i}
                                        className={`flex items-center gap-3 w-full rounded-xl px-4 py-3 text-left text-base font-medium border-none transition-all
                      ${i === q.correct ? 'bg-green-100 text-gray-900' : 'bg-[#f6f7fa] text-gray-900'}
                      ${selected === i && i !== q.correct ? 'ring-2 ring-orange-300' : ''}`}
                                    >
                                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#f6e7d7] text-base font-bold text-[#d49a4a]">
                                            {String.fromCharCode(65 + i)}
                                        </span>
                                        {opt}
                                        {i === q.correct && (
                                            <FontAwesomeIcon icon={faCheckCircle} className="ml-auto text-green-500 text-xl" />
                                        )}
                                    </div>
                                ))}
                            </div>
                            <button
                                className="w-full mt-8 py-2 rounded-full text-lg font-semibold bg-primary text-white"
                                onClick={() => setStep(2)}
                            >
                                Continue
                            </button>
                        </div>
                    )}
                    {/* Result */}
                    {step === 2 && (
                        <div className="flex flex-col items-center justify-center px-6 pb-8 pt-4">
                            <img src={WinImage} alt="result" className="w-24 h-24 mb-2" />
                            <div className="font-bold text-lg text-[#1A1A2C] mb-2 text-center">Results of Fantasy Quiz #156</div>
                            <div className="bg-[#f6f7fa] rounded-xl w-full p-4 flex flex-col gap-3 mb-6">
                                <div className="flex items-center gap-2">
                                    <span className="bg-white rounded-full p-2"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="#F59E42" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 15h-2v-2h2v2Zm0-4h-2V7h2v6Z" /></svg></span>
                                    <span className="text-gray-700 font-semibold text-base">SCORE GAINED</span>
                                    <span className="ml-auto text-primary font-bold text-lg">{score}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="bg-white rounded-full p-2"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="#F59E42" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1 15-4-4 1.41-1.41L11 13.17l4.59-4.59L17 10l-6 6Z" /></svg></span>
                                    <span className="text-gray-700 font-semibold text-base">CORRECT PREDICTIONS</span>
                                    <span className="ml-auto text-primary font-bold text-lg">{correct}</span>
                                </div>
                            </div>
                            <button
                                className="w-full py-2 rounded-full text-lg font-semibold bg-primary text-white hover:bg-orange-500"
                                onClick={() => { setStep(0); setSelected(null); }}
                            >
                                Ok
                            </button>
                        </div>
                    )}
                </div>   
            </div>
        </MainWrapper>
    );
};

export default Quizess;
