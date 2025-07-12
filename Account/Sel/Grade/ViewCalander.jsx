import React, { useState } from "react";
import MainWrapper from "../../../../components/MainWrapper";
import dayjs from "dayjs";
import MainTitle from "../../../../components/MainTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import MainButton from "../../../../components/buttons/MainButton";

const sessions = [
    {
        date: "25 Jun",
        time: "08:00 AM - 09:00 AM",
        title: "SEL Session 1",
        desc: "Story Telling",
        grade: "10th",
        students: 35,
    },
    {
        date: "25 Jun",
        time: "10:00 AM - 11:00 AM",
        title: "SEL Session 1",
        desc: "Story Telling",
        grade: "10th",
        students: 35,
    },
];

const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function getMonthMatrix(year, month) {
    const firstDay = dayjs(`${year}-${month + 1}-01`);
    const startDay = firstDay.day();
    const daysInMonth = firstDay.daysInMonth();
    let matrix = [];
    let day = 1 - startDay;
    for (let i = 0; i < 6; i++) {
        let week = [];
        for (let j = 0; j < 7; j++, day++) {
            if (day > 0 && day <= daysInMonth) {
                week.push(day);
            } else {
                week.push(null);
            }
        }
        matrix.push(week);
    }
    return matrix;
}

const grades = ["10th", "9th", "8th", "7th"];
const times = [
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
];

function ScheduleModal({ open, onClose }) {
    const [grade, setGrade] = useState("10th");
    const [sessionName, setSessionName] = useState("");
    const [topic, setTopic] = useState("");
    const [date, setDate] = useState("2023-12-23");
    const [time, setTime] = useState("04:00 PM");

    if (!open) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={onClose}></div>
            <div className="fixed inset-0 z-50 flex items-center justify-center ">
                <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl relative">
                    <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl">&times;</button>
                    <div className="flex flex-col gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Grade</label>
                            <select value={grade} onChange={e => setGrade(e.target.value)} className="w-full rounded-lg border border-gray-200 bg-[#F7F8FA] px-3 py-2">
                                {grades.map(g => <option key={g}>{g}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Session Name</label>
                            <input value={sessionName} onChange={e => setSessionName(e.target.value)} className="w-full rounded-lg border border-gray-200 bg-[#F7F8FA] px-3 py-2" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Topic</label>
                            <input value={topic} onChange={e => setTopic(e.target.value)} className="w-full rounded-lg border border-gray-200 bg-[#F7F8FA] px-3 py-2" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Scheduling Date</label>
                            <input type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full rounded-lg border border-gray-200 bg-[#F7F8FA] px-3 py-2" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Scheduling Time</label>
                            <div className="grid grid-cols-3 gap-2 mt-1">
                                {times.map(t => (
                                    <button
                                        key={t}
                                        type="button"
                                        onClick={() => setTime(t)}
                                        className={`rounded-lg px-2 py-2 text-sm font-semibold border transition ${time === t
                                                ? "bg-orange-400 text-white border-orange-400"
                                                : "bg-[#F7F8FA] text-gray-500 border-transparent hover:border-orange-200"
                                            }`}
                                    >
                                        {t}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <MainButton className="w-full mt-4">Schedule Now</MainButton>
                    </div>
                </div>
            </div>
        </>
    );
}

function RescheduleModal({ open, onClose }) {
    const [reason, setReason] = useState("");
    const [date, setDate] = useState("2023-12-23");
    const [time, setTime] = useState("04:00 PM");

    if (!open) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={onClose}></div>
            <div className="fixed inset-0 z-50 flex items-center justify-center ">
                <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl relative">
                    <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl">&times;</button>
                    <div className="flex flex-col gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Reason of Rescheduling</label>
                            <textarea value={reason} onChange={e => setReason(e.target.value)} rows={3} className="w-full rounded-lg border border-gray-200 bg-[#F7F8FA] px-3 py-2 resize-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Rescheduling Date</label>
                            <input type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full rounded-lg border border-gray-200 bg-[#F7F8FA] px-3 py-2" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Rescheduling Time</label>
                            <div className="grid grid-cols-3 gap-2 mt-1">
                                {times.map(t => (
                                    <button
                                        key={t}
                                        type="button"
                                        onClick={() => setTime(t)}
                                        className={`rounded-lg px-2 py-2 text-sm font-semibold border transition ${time === t
                                            ? "bg-orange-400 text-white border-orange-400"
                                            : "bg-[#F7F8FA] text-gray-500 border-transparent hover:border-orange-200"
                                        }`}
                                    >
                                        {t}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <button className="w-full mt-4 bg-orange-400 text-white rounded-full py-3 font-semibold text-lg transition hover:bg-orange-500">Confirm</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default function ViewCalendar() {
    const [current, setCurrent] = useState(dayjs("2020-05-01"));
    const [showModal, setShowModal] = useState(false);
    const [showRescheduleModal, setShowRescheduleModal] = useState(false);
    const matrix = getMonthMatrix(current.year(), current.month()); 

    const handlePrev = () => setCurrent(current.subtract(1, "month"));
    const handleNext = () => setCurrent(current.add(1, "month"));

    return (
        <MainWrapper logged={true} activeSection="grades" isSelTeacher={true}>
            <MainTitle title={`Schedule for ${grades[0]}`} buttons={[{ label: "Back" },{ label : "Add Schedule",icon:<FontAwesomeIcon icon={faPlusCircle} />,className:'bg-primary text-white',onClick:() => setShowModal(true)}]} />
            <div className="p-4 min-h-screen w-full ">
                <div className="w-full flex flex-col gap-6 bg-white shadow rounded-2xl p-6">
                    {/* Calendar Header */}
                    <div className="flex items-center justify-between mb-2 mt-2">
                        <div className="text-2xl font-bold">{current.format("MMMM YYYY")}</div>
                        <div className="flex gap-2">
                            <button onClick={handlePrev} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
                                <span className="text-xl">&#8592;</span>
                            </button>
                            <button onClick={handleNext} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
                                <span className="text-xl">&#8594;</span>
                            </button>
                        </div>
                    </div>
                    {/* Calendar Grid */}
                    <div className="bg-[#F7F8FA] rounded-xl p-4">
                        <div className="grid grid-cols-7 text-center text-xs font-semibold text-gray-400 mb-2">
                            {weekDays.map((d) => (
                                <div key={d}>{d}</div>
                            ))}
                        </div>
                        <div className="grid grid-cols-7 gap-1">
                            {matrix.flat().map((day, idx) => {
                                // Example: highlight some days
                                const highlight = [8, 9, 10, 21, 22, 24, 5].includes(day);
                                return (
                                    <div
                                        key={idx}
                                        className={`w-9 h-9 md:h-14 md:w-14 flex items-center justify-center rounded-lg text-sm font-semibold ${highlight
                                            ? "bg-orange-400 text-white"
                                            : day
                                                ? "text-gray-900 hover:bg-orange-50 cursor-pointer"
                                                : "text-gray-300"
                                            }`}
                                    >
                                        {day || ""}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <div className="font-medium mb-2 mt-4">Sessions</div>
                        {sessions.map((s, i) => (
                            <div key={i} className="bg-[#F7F8FA] rounded-xl px-6 py-4 mb-4 shadow-sm">
                                <div className="flex items-center gap-4">
                                    <div className="flex flex-col items-center justify-center w-14 h-14 bg-[#FFE6CC] rounded-lg">
                                        <span className="text-lg font-bold text-orange-400 leading-none">{s.date.split(" ")[0]}</span>
                                        <span className="text-xs text-orange-400 leading-none">{s.date.split(" ")[1]}</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-xs text-gray-400 font-medium mb-1">{s.time}</div>
                                        <div className="font-semibold text-base leading-tight mb-0.5">{s.title}</div>
                                        <div className="text-xs text-gray-400">{s.desc}</div>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="bg-gray-100 text-gray-400 text-xs rounded-lg px-3 py-1 font-semibold">Grade {s.grade}</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <div className="text-xs text-gray-400">No. of Students</div>
                                    <div className="font-bold text-base">{s.students}</div>
                                </div>
                                <div className="flex flex-col gap-2 md:flex-row md:gap-4 md:justify-end mt-4">
                                    <button onClick={()=>{setShowModal(true)}} className="w-full md:w-auto border border-orange-400 text-orange-400 rounded-full py-2 px-6 font-medium transition hover:bg-orange-50 order-1 md:order-2">
                                        View
                                    </button>
                                    <button
                                        className="w-full md:w-auto bg-orange-400 text-white rounded-full py-2 px-6 font-medium transition hover:bg-orange-500 order-2 md:order-1"
                                        onClick={() => setShowRescheduleModal(true)}
                                    >
                                        Re-Schedule
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <ScheduleModal open={showModal} onClose={() => setShowModal(false)} />
                    <RescheduleModal open={showRescheduleModal} onClose={() => setShowRescheduleModal(false)} />
                </div>
            </div>
        </MainWrapper>
    );
}
