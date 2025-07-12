import React, { useState } from "react";

const NotificationSettings = ({ settings, onChange }) => {
    // If not controlled, use local state
    const [localSettings, setLocalSettings] = useState(
        settings || {
            push: true,
            promotions: true,
            interaction: false,
            activities: true,
            emails: false,
        }
    );

    const handleToggle = (key) => {
        const updated = { ...localSettings, [key]: !localSettings[key] };
        setLocalSettings(updated);
        if (onChange) onChange(updated);
    };

    return (
        <>
            <div className="w-full mx-auto  rounded mb-3 hidden md:flex">
                <h2 className="text-lg font-semibold text-gray-700">Notification Preferences</h2>
            </div>
            <div className="w-full  mx-auto  py-4 divide-y divide-gray-200">
                <div className="flex items-center justify-between py-4">
                    <span className="text-gray-700">Push Notifications</span>
                    <button
                        type="button"
                        className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${localSettings.push ? 'bg-green-400' : 'bg-gray-300'}`}
                        onClick={() => handleToggle('push')}
                    >
                        <span
                            className={`inline-block w-4 h-4 transform bg-white rounded-full shadow transition-transform duration-300 ${localSettings.push ? 'translate-x-5' : ''}`}
                        />
                    </button>
                </div>
                <div className="flex items-center justify-between py-4">
                    <span className="text-gray-700">Promotions</span>
                    <button
                        type="button"
                        className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${localSettings.promotions ? 'bg-green-400' : 'bg-gray-300'}`}
                        onClick={() => handleToggle('promotions')}
                    >
                        <span
                            className={`inline-block w-4 h-4 transform bg-white rounded-full shadow transition-transform duration-300 ${localSettings.promotions ? 'translate-x-5' : ''}`}
                        />
                    </button>
                </div>
                <div className="flex items-center justify-between py-4">
                    <span className="text-gray-700">Interaction message</span>
                    <button
                        type="button"
                        className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${localSettings.interaction ? 'bg-green-400' : 'bg-gray-300'}`}
                        onClick={() => handleToggle('interaction')}
                    >
                        <span
                            className={`inline-block w-4 h-4 transform bg-white rounded-full shadow transition-transform duration-300 ${localSettings.interaction ? 'translate-x-5' : ''}`}
                        />
                    </button>
                </div>
                <div className="flex items-center justify-between py-4">
                    <span className="text-gray-700">Activities</span>
                    <button
                        type="button"
                        className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${localSettings.activities ? 'bg-green-400' : 'bg-gray-300'}`}
                        onClick={() => handleToggle('activities')}
                    >
                        <span
                            className={`inline-block w-4 h-4 transform bg-white rounded-full shadow transition-transform duration-300 ${localSettings.activities ? 'translate-x-5' : ''}`}
                        />
                    </button>
                </div>
                <div className="flex items-center justify-between py-4">
                    <span className="text-gray-700">Emails</span>
                    <button
                        type="button"
                        className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${localSettings.emails ? 'bg-green-400' : 'bg-gray-300'}`}
                        onClick={() => handleToggle('emails')}
                    >
                        <span
                            className={`inline-block w-4 h-4 transform bg-white rounded-full shadow transition-transform duration-300 ${localSettings.emails ? 'translate-x-5' : ''}`}
                        />
                    </button>
                </div>
            </div>
        </>
    );
};

export default NotificationSettings;
