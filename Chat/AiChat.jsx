import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import MainWrapper from "../../components/MainWrapper";

const infoCards = [
    {
        text: "Remembers what user said earlier in the chat box",
    },
    {
        text: "Allows user to provide follow-up corrections with AI",
    },
    {
        text:
            "Share your mental health or mood you are feeling right now and the AI will give you suggestions based on your chat",
    },
];

const sampleChats = [
    { role: "user", text: "Hi, I feel anxious today." },
    { role: "ai", text: "I'm here to help! Can you tell me more about what's making you feel anxious?" },
    { role: "user", text: "I have a big test coming up and I'm worried I won't do well." },
    { role: "ai", text: "It's normal to feel nervous before a test. Would you like some tips on managing stress or improving your study routine?" },
];

const AiChat = () => {
    const [input, setInput] = useState("");

    return (
        <MainWrapper logged={true}>
            <div className="flex flex-col min-h-screen relative">
                {/* Main content */}
                <div className="flex-1 flex flex-col items-center justify-start pt-8 px-2 sm:pt-12 sm:px-4">
                    <div className="flex flex-col w-full max-w-2xl sm:max-w-4xl md:max-w-5xl lg:max-w-7xl h-full bg-white min-h-[70vh] sm:min-h-[80vh] rounded-xl shadow mx-auto relative">
                        <h1 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 mt-6 sm:mt-8">
                            AI ChatBot
                        </h1>
                        <div className="flex flex-col gap-3 sm:gap-4 w-full px-0 mb-3 sm:mb-4 items-center">
                            {infoCards.map((card, idx) => (
                                <div
                                    key={idx}
                                    className="rounded-xl w-full max-w-xs sm:max-w-md bg-gray-100 text-gray-400 text-center px-3 sm:px-4 py-4 sm:py-5 text-xs sm:text-base shadow-sm"
                                >
                                    {card.text}
                                </div>
                            ))}
                        </div>
                        {/* Chat area */}
                        <div className="flex-1 w-full max-w-xs sm:max-w-md mx-auto overflow-y-auto mb-3 sm:mb-4 px-1" style={{ minHeight: '180px', maxHeight: '320px' }}>
                            {sampleChats.map((msg, idx) => (
                                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} mb-2`}>
                                    <div className={`inline-block px-4 py-2 rounded-2xl shadow text-sm sm:text-base ${msg.role === 'user' ? 'bg-primary text-white rounded-br-md' : 'bg-gray-100 text-gray-700 rounded-bl-md'}`}
                                        style={{ maxWidth: '80%' }}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Chat input at the bottom of the chat wrapper */}
                        <div className="mt-auto w-full">
                            <div className="bg-gray-50 border-t border-gray-200 px-1 sm:px-2 py-2 sm:py-3 flex items-center justify-center rounded-b-xl">
                                <div className="flex w-full items-center bg-white rounded-full shadow px-2 sm:px-3 py-1.5 sm:py-2 max-w-xs sm:max-w-md mx-auto">
                                    <input
                                        type="text"
                                        className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 px-1 sm:px-2 text-xs sm:text-sm"
                                        placeholder="I am feeling very stressed now, what should I do to make me feel better"
                                        value={input}
                                        onChange={e => setInput(e.target.value)}
                                    />
                                    <button
                                        className="ml-1 sm:ml-2 bg-primary text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-colors duration-150"
                                        aria-label="Send"
                                    >
                                        <FontAwesomeIcon icon={faPaperPlane} size="lg" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainWrapper>
    );
};

export default AiChat;
