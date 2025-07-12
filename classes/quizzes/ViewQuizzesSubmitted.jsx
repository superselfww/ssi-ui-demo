import React from "react";
import MainWrapper from "../../../components/MainWrapper";
import MainTitle from "../../../components/MainTitle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';


const quiz = {
    title: "Photosynthesis Quiz",
    submitted: "10 May, 2024 12:56 am",
    student: {
        name: "Luke Damant",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        notes: "I enjoyed this quiz and learned more about plant biology!"
    },
    questions: [
        {
            question: "What is the main purpose of photosynthesis?",
            answer: "To convert solar energy into chemical energy.",
            correct: true
        },
        {
            question: "Which organelle is responsible for photosynthesis?",
            answer: "Chloroplast.",
            correct: true
        },
        {
            question: "What are the main products of photosynthesis?",
            answer: "Glucose and oxygen.",
            correct: false
        },
        {
            question: "What pigment absorbs sunlight for photosynthesis?",
            answer: "Chlorophyll.",
            correct: true
        }
    ]
};

export default function ViewQuizzesSubmitted() {
    return (
        <MainWrapper logged={true}>
            <MainTitle title="Quiz Submission Details" buttons={[{ label: "Back" }]} />
            <div className="min-h-screen">
                <div className="mx-auto w-full  bg-white rounded-2xl shadow p-0 mt-8 overflow-hidden">
                    <div className="p-6">
                        {/* Student Info */}
                        <div className="flex items-center gap-4 mb-6">
                            <img src={quiz.student.avatar} alt={quiz.student.name} className="w-16 h-16 rounded-full object-cover border-2 border-orange-100" />
                            <div>
                                <div className="font-semibold text-lg text-gray-900">{quiz.student.name}</div>
                                <div className="text-xs text-gray-500 mt-1">Submitted: {quiz.submitted}</div>
                            </div>
                        </div>
                        {/* Questions & Answers */}
                        <div className="mb-8">
                            <div className="font-semibold mb-2 text-gray-800">Answers</div>
                            <div className="flex flex-col gap-4">
                                {quiz.questions.map((q, i) => (
                                    <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-100 flex items-center gap-3">
                                        <div className="flex-1">
                                            <div className="font-medium text-gray-700 mb-1">Q{i + 1}: {q.question}</div>
                                            <div className="text-orange-500 font-semibold">{q.answer}</div>
                                        </div>
                                        {q.correct ? (
                                            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-2xl" title="Correct" />
                                        ) : (
                                            <FontAwesomeIcon icon={faTimesCircle} className="text-red-500 text-2xl" title="Incorrect" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Student Notes */}
                        <div className="mb-4">
                            <div className="font-semibold mb-1 text-gray-800">Student Notes</div>
                            <div className="bg-gray-100 rounded-xl p-4 text-gray-700 text-sm leading-relaxed">
                                {quiz.student.notes || 'No notes provided by the student.'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainWrapper>
    );
}
