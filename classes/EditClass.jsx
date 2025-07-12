import React, { useState } from "react";
import MainWrapper from "../../components/MainWrapper";
import MainTitle from "../../components/MainTitle";
import { useNavigate } from "react-router-dom";
import MainButton from "../../components/buttons/MainButton";
const grades = ["10th", "9th", "8th", "7th", "6th", "5th"];
const subjects = ["Mathematics", "Chemistry", "Physics", "Biology"];

function TeacherModal({ open, onClose, onSelect }) {
    const teachers = [
        { name: "Lula Robins", subject: "Chemistry" },
        { name: "Pauline Blick", subject: "Physics" },
        { name: "Marcos Nienow", subject: "Mathematics" },
    ];
    if (!open) return null;
    return (
        <>
            <div className="fixed inset-0 bg-black opacity-40 z-40" onClick={onClose}></div>
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl relative">
                    <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl">&times;</button>
                    <div className="font-bold text-lg mb-4">Assign Teacher</div>
                    <div className="flex flex-col gap-3">
                        {teachers.map((t, i) => (
                            <button key={i} onClick={() => { onSelect(t.name); onClose(); }} className="flex flex-col items-start p-3 rounded-lg hover:bg-orange-50 transition border border-gray-100">
                                <span className="font-semibold text-gray-900">{t.name}</span>
                                <span className="text-xs text-gray-400">{t.subject}</span>
                            </button>
                        ))}
                        <button onClick={() => { onSelect("Invited Teacher"); onClose(); }} className="mt-2 w-full bg-orange-400 text-white rounded-full py-2 font-semibold hover:bg-orange-500 transition">Invite New Teacher</button>
                    </div>
                </div>
            </div>
        </>
    );
}

function DurationModal({ open, onClose, onSelect }) {
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    if (!open) return null;
    return (
        <>
            <div className="fixed inset-0 bg-black opacity-40 z-40" onClick={onClose}></div>
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl relative">
                    <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl">&times;</button>
                    <div className="font-bold text-lg mb-4">Set Duration</div>
                    <div className="flex flex-col gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Start Date</label>
                            <input type="month" value={start} onChange={e => setStart(e.target.value)} className="w-full rounded-lg border border-gray-200 bg-[#F7F8FA] px-3 py-2" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">End Date</label>
                            <input type="month" value={end} onChange={e => setEnd(e.target.value)} className="w-full rounded-lg border border-gray-200 bg-[#F7F8FA] px-3 py-2" />
                        </div>
                        <button
                            className="w-full mt-2 bg-orange-400 text-white rounded-full py-3 font-semibold text-lg transition hover:bg-orange-500"
                            onClick={() => { onSelect(`${start && end ? `${formatMonth(start)} - ${formatMonth(end)}` : ""}`); onClose(); }}
                        >
                            Set Duration
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

function formatMonth(val) {
    if (!val) return "";
    const [year, month] = val.split("-");
    const date = new Date(year, month - 1);
    return date.toLocaleString("default", { month: "short", year: "numeric" });
}

export default function EditClass() {
    const navigate = useNavigate();
    // Example initial data (replace with real data/fetch)
    const [grade, setGrade] = useState("10th");
    const [subject, setSubject] = useState("Mathematics");
    const [teacher, setTeacher] = useState("");
    const [duration, setDuration] = useState("");
    const [curriculum] = useState("");
    const [showTeacherModal, setShowTeacherModal] = useState(false);
    const [showDurationModal, setShowDurationModal] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(teacher);
    };
    return (
        <MainWrapper logged={true}>
            <MainTitle title="Edit Class" buttons={[{ label: "Back", onClick: () => navigate(-1) }]} />
            <div className="p-4 min-h-screen w-full ">
                <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow flex flex-col gap-6 mt-8">
                    <div>
                        <label className="block text-sm font-medium mb-2">Grade</label>
                        <select
                            className="w-full rounded-xl border-none bg-[#F7F8FA] px-4 py-3 text-base appearance-none focus:outline-none"
                            value={grade}
                            onChange={e => setGrade(e.target.value)}
                        >
                            {grades.map(g => <option key={g}>{g}</option>)}
                        </select>
                    </div>
                    {/* Subject */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Subject</label>
                        <select
                            className="w-full rounded-xl border-none bg-[#F7F8FA] px-4 py-3 text-base appearance-none focus:outline-none"
                            value={subject}
                            onChange={e => setSubject(e.target.value)}
                        >
                            {subjects.map(s => <option key={s}>{s}</option>)}
                        </select>
                    </div>
                    {/* Duration */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Duration</label>
                        <button
                            className="w-full flex items-center justify-between rounded-xl bg-[#F7F8FA] px-4 py-3 text-base text-left"
                            type="button"
                            onClick={() => setShowDurationModal(true)}
                        >
                            <span className={duration ? "text-black" : "text-gray-400"}>{duration || "Set Duration"}</span>
                            <span className="text-gray-400 text-xl">&#128197;</span>
                        </button>
                    </div>
                    {/* Curriculum */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Curriculum</label>
                        <button
                            onClick={() => { navigate('/school/class/create-curriculum') }}
                            className="w-full flex items-center justify-between rounded-xl bg-[#F7F8FA] px-4 py-3 text-base text-left"
                            type="button"
                        >
                            <span className={curriculum ? "text-black" : "text-gray-400"}>{curriculum || "Create curriculum"}</span>
                            <span className="text-gray-400 text-xl">&gt;</span>
                        </button>
                    </div>
                    {/* Media/Docs upload can be added here if needed */}
                    <MainButton
                        type="submit"
                        className="bg-orange-500 text-white font-semibold rounded-full py-3 mt-4 hover:bg-orange-600 transition disabled:opacity-60"
                    >
                        {"Save Changes"}
                    </MainButton>
                    <TeacherModal open={showTeacherModal} onClose={() => setShowTeacherModal(false)} onSelect={setTeacher} />
                    <DurationModal open={showDurationModal} onClose={() => setShowDurationModal(false)} onSelect={setDuration} />
                </form>
            </div>
        </MainWrapper>
    );
}
