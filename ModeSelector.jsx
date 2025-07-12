import { useState } from "react";
import Emojies from "../../assets/Emojies";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ModeSelector = ({ currentValue = 2 }) => {
    const [mood, setMood] = useState(currentValue);

    const moods = [
        { emoji: Emojies.stressed, label: "Stressed" },
        { emoji: Emojies.confused, label: "Confused" },
        { emoji: Emojies.angry, label: "Angry" },
        { emoji: Emojies.aww, label: "Sad" },
        { emoji: Emojies.peaceful, label: "Peaceful" },
        { emoji: Emojies.excited, label: "Happy" },
    ];

    const handleMoodChange = (i) => {
        setMood(i);
        toast.success(`Mood changed to ${moods[i].label}!`, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "colored",
        });
    };

    return (
        <div className="bg-primary rounded-2xl px-4 py-6 mb-8 flex flex-col items-center shadow-lg">
            <ToastContainer />
            <h2 className="text-xl lg:text-2xl font-bold text-white mb-4 text-center">How is your mood today?</h2>
            <div className="flex justify-center gap-2 lg:gap-4 mb-4 w-full flex-wrap">
                {moods.map((m, i) => (
                    <button
                        key={m.label}
                        className="flex flex-col items-center focus:outline-none group"
                        onClick={() => handleMoodChange(i)}
                    >
                        <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center mb-1 transition-all duration-200 ${mood === i ? 'bg-orange-200 scale-110 shadow-lg' : 'bg-orange-300 opacity-80'}`}>
                            <span className="text-3xl">
                                <img src={m.emoji} alt={m.label} className="w-8 h-8" />
                            </span>
                        </div>
                        <span className={`text-xs font-semibold ${mood === i ? 'text-white' : 'text-orange-100'} transition`}>{m.label}</span>
                    </button>
                ))}
            </div>
            {/* Mood Slider (functional, with range input) */}
            <div className="w-full max-w-xs mx-auto mt-1">
                <div className="relative h-6 flex items-center">
                    {/* Track */}
                    <div className="w-full h-2 rounded-full bg-orange-900" />
                    {/* Slider Thumb (draggable) */}
                    <input
                        type="range"
                        min={0}
                        max={moods.length - 1}
                        value={mood}
                        onChange={e => handleMoodChange(Number(e.target.value))}
                        className="absolute w-full h-6 opacity-0 cursor-pointer top-0 left-0 z-10"
                        style={{ WebkitAppearance: 'none', appearance: 'none' }}
                        aria-label="Mood slider"
                    />
                    <div
                        className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
                        style={{ left: `calc(${mood * (100 / (moods.length - 1))}% - 0.75rem)` }}
                    >
                        <div className="w-6 h-6 rounded-full border-2 border-orange-200 bg-orange-400 shadow-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModeSelector;