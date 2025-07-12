import React, { useState } from 'react';
import MainWrapper from '../../components/MainWrapper';


export default function CreateCommunity() {
    const [title, setTitle] = useState('');
    const [grade, setGrade] = useState('5th');
    const [description, setDescription] = useState('');
    const [addParents, setAddParents] = useState(false);
    const [addSELTeacher, setAddSELTeacher] = useState(false);
    const [profile, setProfile] = useState(null);

    const handleProfileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setProfile(e.target.files[0]);
        }
    };

    return (
        <MainWrapper logged={true} activeSection="chat">
            <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center py-8 px-2">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 mx-auto">
                    {/* Title */}
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            placeholder="Enter Title for Community"
                            className="w-full rounded-xl bg-gray-100 border-none p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200"
                        />
                    </div>
                    {/* Grade */}
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Grade</label>
                        <select
                            value={grade}
                            onChange={e => setGrade(e.target.value)}
                            className="w-full rounded-xl bg-gray-100 border-none p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200"
                        >
                            <option value="5th">5th</option>
                            <option value="6th">6th</option>
                            <option value="7th">7th</option>
                            <option value="8th">8th</option>
                            <option value="9th">9th</option>
                        </select>
                    </div>
                    {/* Description */}
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            placeholder="Write Description"
                            className="w-full rounded-xl bg-gray-100 border-none p-3 text-sm min-h-[90px] focus:outline-none focus:ring-2 focus:ring-orange-200"
                        />
                    </div>
                    {/* Toggles */}
                    <div className="flex flex-col md:flex-row md:space-x-6 mb-5">
                        <label className="flex items-center mb-2 md:mb-0 cursor-pointer">
                            <span className="text-sm text-gray-700 mr-2">Add Parents</span>
                            <input
                                type="checkbox"
                                checked={addParents}
                                onChange={() => setAddParents(!addParents)}
                                className="toggle-checkbox"
                                style={{ accentColor: '#EE9737', width: 20, height: 20 }}
                            />
                        </label>
                        <label className="flex items-center cursor-pointer">
                            <span className="text-sm text-gray-700 mr-2">Add SEL Teacher</span>
                            <input
                                type="checkbox"
                                checked={addSELTeacher}
                                onChange={() => setAddSELTeacher(!addSELTeacher)}
                                className="toggle-checkbox"
                                style={{ accentColor: '#EE9737', width: 20, height: 20 }}
                            />
                        </label>
                    </div>
                    {/* Upload Profile */}
                    <div className="mb-7">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Upload Profile</label>
                        <label className="w-full flex items-center justify-center rounded-xl bg-gray-100 p-3 text-sm font-medium text-gray-700 hover:bg-orange-50 transition cursor-pointer border border-dashed border-gray-300">
                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleProfileChange}
                            />
                            <span className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5-5m0 0l5 5m-5-5v12" />
                                </svg>
                                {profile ? profile.name : "Upload Profile"}
                            </span>
                        </label>
                    </div>
                    {/* Create Button */}
                    <button
                        className="w-full rounded-full bg-[#EE9737] hover:bg-[#e07d1a] text-white font-semibold py-3 text-lg transition"
                    >
                        Create Community
                    </button>
                </div>
            </div>
        </MainWrapper>
    );
}