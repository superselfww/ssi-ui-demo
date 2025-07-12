import React, { useState } from "react";
import SupportImage from '../../../../assets/images/support.png';

const LiveChatSection = () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { from: "bot", text: "Hi! How can we help you today?" },
    ]);
    const [input, setInput] = useState("");

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        setMessages((msgs) => [...msgs, { from: "user", text: input }]);
        setInput("");
        setTimeout(() => {
            setMessages((msgs) => [...msgs, { from: "bot", text: "Thank you for your message. Our team will reply soon!" }]);
        }, 1000);
    };

    if (open) {
        return (
            <div className="w-full p-4 flex flex-col h-[500px]">
                <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-lg">Live Chat</div>
                    <button className="text-gray-400" onClick={() => setOpen(false)}>&#10005;</button>
                </div>
                <div className="flex-1 overflow-y-auto mb-2 px-1">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`mb-2 flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                            <div className={`px-4 py-2 rounded-xl text-sm max-w-[80%] ${msg.from === "user" ? "bg-[#EE9737] text-white" : "bg-gray-100 text-gray-800"}`}>{msg.text}</div>
                        </div>
                    ))}
                </div>
                <form className="flex gap-2" onSubmit={handleSend}>
                    <input
                        className="flex-1 rounded-full border border-gray-200 px-3 py-2 text-sm bg-[#f8fafc] focus:outline-none"
                        placeholder="Type your message..."
                        value={input}
                        onChange={e => setInput(e.target.value)}
                    />
                    <button type="submit" className="bg-primary text-white px-5 py-2 rounded-full font-semibold">Send</button>
                </form>
            </div>
        );
    }

    return (
        <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center min-h-[80vh]">
            <img src={SupportImage} alt="Live Chat" className="w-48 mx-auto mb-6" />
            <div className="text-center mb-2 font-bold text-lg">We are here to help you with our application</div>
            <div className="text-center text-gray-500 mb-8 text-sm">Feel free to ask anything, we aim to help you within minutes</div>
            <button className="w-full py-3 bg-primary text-white font-semibold rounded-full transition text-lg" onClick={() => setOpen(true)}>
                Live Chat
            </button>
        </div>
    );
};

export default LiveChatSection;
