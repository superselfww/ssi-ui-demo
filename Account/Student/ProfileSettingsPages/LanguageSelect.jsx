import React, { useState } from "react";

const suggested = ["English", "Arabic", "Urdu"];
const languages = [
    "Mandarin",
    "Russian",
    "Korean",
    "Spanish",
    "Bengali",
    "Indonesia",
    "Russian",
    "French",
];

const LanguageSelect = ({ value, onChange }) => {
    const [selected, setSelected] = useState(value || "English");

    const handleSelect = (lang) => {
        setSelected(lang);
        if (onChange) onChange(lang);
    };

    const renderRadio = (lang) => (
        <button
            key={lang}
            type="button"
            className="w-full flex items-center justify-between py-2 px-1 focus:outline-none"
            onClick={() => handleSelect(lang)}
        >
            <span className="text-gray-700 text-base">{lang}</span>
            <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selected === lang ? 'border-orange-400' : 'border-gray-300'}`}>
                {selected === lang && <span className="w-3 h-3 bg-orange-400 rounded-full block" />}
            </span>
        </button>
    );

    return (
        <>
            <div className="w-full mx-auto  rounded mb-3 hidden md:flex">
                <h2 className="text-lg font-semibold text-gray-700">Languages</h2>
            </div>
            <div className="w-full  mx-auto  py-4 divide-y divide-gray-200">
                <div className="mb-2">
                    <div className="font-semibold text-sm text-gray-900 mb-1">Suggested</div>
                    {suggested.map(renderRadio)}
                </div>
                <div className="mt-4">
                    <div className="font-semibold text-sm text-gray-900 mb-1">Languages</div>
                    {languages.map(renderRadio)}
                </div>
            </div>
        </>
    );
};

export default LanguageSelect;
