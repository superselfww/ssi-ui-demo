import React, { useState } from "react";
import MainWrapper from "../../../../components/MainWrapper";
import Avatar from "../../../../assets/images/avatar.png";
import MainTitle from "../../../../components/MainTitle";
import StudentListModal from "../../../../components/modal/StudentListModal";
import { Link } from "react-router-dom";

const subjectTeachers = [
    { name: "Lula", subject: "Biology", img: Avatar },
    { name: "Ada", subject: "Biology", img: Avatar },
    { name: "Bertha", subject: "Biology", img: Avatar },
];
const selTeachers = [
    { name: "Stuart", subject: "You", img: "/src/assets/images/male.png" },
];
const students = [
    { name: "Bertha", img: Avatar },
    { name: "Robin", img: Avatar },
    { name: "Nicole", img: Avatar },
    { name: "Kerry", img: Avatar },
    { name: "Lorena", img: Avatar },
    { name: "Elias", img: Avatar },
    { name: "Damon", img: Avatar },
];

const sessions = [
    { date: "25 Jun", time: "08:00 AM - 09:00 AM", title: "SEL Session 1", desc: "Story Telling", grade: "10th" },
    { date: "25 Jun", time: "08:00 AM - 09:00 AM", title: "SEL Session 1", desc: "Story Telling", grade: "10th" },
    { date: "25 Jun", time: "08:00 AM - 09:00 AM", title: "SEL Session 1", desc: "Story Telling", grade: "10th" },
];

export default function ViewGrade() {
    const [showStudentModal, setShowStudentModal] = useState(false);
    const [tab, setTab] = useState("upcoming");
    const upcomingSessions = sessions; // Replace with real filter if needed
    const completedSessions = []; // Replace with real data

    return (
        <MainWrapper logged={true} activeSection="grades" isSelTeacher={true}>
            <MainTitle title="View Grade" buttons={[{ label: "Back" }]} />
            <div className="p-4 mb-8 min-h-screen w-full flex justify-center bg-white rounded-2xl shadow">
                <div className="w-full flex flex-col gap-10">
                    {/* Subject Teachers */}
                    <section className="border-b border-gray-100 pb-6 mb-2">
                        <div className="font-medium mb-2">Subject Teachers</div>
                        <div className="flex gap-4 mb-4 flex-wrap">
                            {subjectTeachers.map((t, i) => (
                                <div key={i} className="flex flex-col items-center bg-white rounded-xl shadow px-4 py-3 mb-2 border border-gray-100 min-w-[120px] hover:shadow-md transition relative">
                                    <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full object-cover mb-2 border-2 border-orange-200" />
                                    <span className="font-semibold text-base text-gray-800 mb-1 truncate w-full text-center">{t.name}</span>
                                    <span className="inline-block bg-orange-100 text-orange-500 text-xs font-semibold rounded-full px-3 py-1 mt-1">{t.subject}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                    {/* SEL Teachers */}
                    <section className="border-b border-gray-100 pb-6 mb-2">
                        <div className="font-medium mb-2">SEL Teachers</div>
                        <div className="flex gap-4 mb-4 flex-wrap">
                            {selTeachers.map((t, i) => (
                                <div key={i} className="flex flex-col items-center bg-white rounded-xl shadow px-4 py-3 mb-2 border border-gray-100 min-w-[120px] hover:shadow-md transition">
                                    <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full object-cover mb-2 border-2 border-orange-200" />
                                    <span className="font-semibold text-base text-gray-800 mb-1 truncate w-full text-center">{t.name}</span>
                                    <span className="inline-block bg-orange-100 text-orange-500 text-xs font-semibold rounded-full px-3 py-1 mt-1">{t.subject}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                    {/* Students */}
                    <section className="border-b border-gray-100 pb-6 mb-2">
                        <div className="flex items-center justify-between mb-2 mt-2">
                            <div className="font-medium">Students</div>
                            <button className="text-xs text-orange-400 font-medium" onClick={() => setShowStudentModal(true)}>See All</button>
                        </div>
                        <div className="flex gap-3 mb-4 overflow-x-auto pb-2 flex-1">
                            {students.map((s, i) => (
                                <div key={i} className="flex flex-col items-center min-w-[80px] relative group">
                                    <img src={s.img} alt={s.name} className="w-16 h-16 rounded-full object-cover mb-1 border-2 border-white shadow" />
                                    <Link to={`/view-child/${s.id}`} className="text-xs hover:underline text-gray-700 truncate w-16 text-center font-medium">{s.name}</Link>
                                </div>
                            ))}
                        </div>
                        <StudentListModal open={showStudentModal} onClose={() => setShowStudentModal(false)} students={students} />
                    </section>
                    {/* Sessions */}
                    <section>
                        <div className="font-medium mb-2 mt-4">Sessions</div>
                        <div className="flex gap-8 border-b border-gray-200 mb-4 text-base font-semibold">
                            <button
                                className={`pb-2 border-b-2 focus:outline-none ${tab === 'upcoming' ? 'border-orange-400 text-orange-400' : 'border-transparent text-gray-400 hover:text-orange-400'}`}
                                onClick={() => setTab('upcoming')}
                            >Upcoming</button>
                            <button
                                className={`pb-2 border-b-2 focus:outline-none ${tab === 'completed' ? 'border-orange-400 text-orange-400' : 'border-transparent text-gray-400 hover:text-orange-400'}`}
                                onClick={() => setTab('completed')}
                            >Completed</button>
                        </div>
                        <div className="flex flex-col gap-4">
                            {(tab === 'upcoming' ? upcomingSessions : completedSessions).length === 0 ? (
                                <div className="text-center text-gray-400 py-8">No {tab === 'upcoming' ? 'upcoming' : 'completed'} sessions.</div>
                            ) : (
                                (tab === 'upcoming' ? upcomingSessions : completedSessions).map((s, i) => (
                                    <div key={i} className="flex gap-4 items-center bg-[#F7F8FA] rounded-xl px-6 py-4 shadow-sm">
                                        <div className="flex flex-col items-center justify-center w-16 h-16 bg-[#FFE6CC] rounded-lg">
                                            <span className="text-lg font-bold text-orange-400 leading-none">{s.date.split(" ")[0]}</span>
                                            <span className="text-xs text-orange-400 leading-none">{s.date.split(" ")[1]}</span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-sm text-gray-400 font-medium mb-1">{s.time}</div>
                                            <div className="font-semibold text-base leading-tight mb-0.5">{s.title}</div>
                                            <div className="text-sm text-gray-400">{s.desc}</div>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="bg-gray-100 text-gray-400 text-xs rounded-lg px-3 py-1 font-semibold">Grade {s.grade}</span>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </section>
                </div>
            </div>
        </MainWrapper>
    );
}
