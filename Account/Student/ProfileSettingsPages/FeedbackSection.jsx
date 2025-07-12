import React, { useState } from "react";
import MainSubmitButton from "../../../../components/buttons/MainSubmitButton";

const FEEDBACK_AREAS = [
    "Performance",
    "Bugs",
    "User Experience",
    "User Interface",
    "Crashes",
    "Loadings",
    "Support",
    "Navigation",
];

const FeedbackSection = () => {
    const [message, setMessage] = useState("");
    const [selectedAreas, setSelectedAreas] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    const toggleArea = (area) => {
        setSelectedAreas((prev) =>
            prev.includes(area)
                ? prev.filter((a) => a !== area)
                : [...prev, area]
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Here you would send feedback to your backend
    };

    if (submitted) {
        return (
            <div className="w-full max-w-md mx-auto  p-6 flex flex-col items-center">
                <div className="text-green-500 text-3xl mb-2">✓</div>
                <div className="font-bold text-lg mb-2">Thank you for your feedback!</div>
                <div className="text-gray-500 text-sm mb-4 text-center">We appreciate your input and will use it to improve our application.</div>
            </div>
        );
    }

    return (
        <>
            <div className="w-full mx-auto  rounded mb-3 hidden md:flex">
                <h2 className="text-lg font-semibold text-gray-700">Feedback</h2>
            </div>
            <form className="w-full mx-auto flex flex-col gap-6" onSubmit={handleSubmit}>
                <textarea
                    className="w-full min-h-[80px] rounded-xl border border-gray-100 bg-[#f8fafc] p-3 text-gray-700 text-sm focus:outline-none"
                    placeholder="Write your message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <div className="font-semibold text-base text-center">Which of the area needs improvement?</div>
                <div className="bg-[#f8fafc] rounded-2xl p-4 grid grid-cols-2 gap-3">
                    {FEEDBACK_AREAS.map(area => (
                        <button
                            type="button"
                            key={area}
                            className={`rounded-full border-2 px-4 py-2 font-medium text-sm transition-all ${selectedAreas.includes(area) ? 'bg-[#EE9737] text-white border-[#EE9737]' : 'bg-white text-gray-700 border-gray-300'}`}
                            onClick={() => toggleArea(area)}
                        >
                            {area}
                        </button>
                    ))}
                </div>
                <MainSubmitButton>
                    Submit Feedback
                </MainSubmitButton>
            </form>
        </>
    );
};

export default FeedbackSection;
