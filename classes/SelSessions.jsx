import React, { useState } from "react";
import MainWrapper from "../../components/MainWrapper";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import MainTitle from "../../components/MainTitle";


const sessions = [
    {
        time: '08:00 AM - 09:00 AM',
        date: '25',
        month: 'Jun',
        title: 'SEL Session 1',
        subtitle: 'Story Telling',
        grade: '10th',
    },
    {
        time: '08:00 AM - 09:00 AM',
        date: '25',
        month: 'Jun',
        title: 'SEL Session 1',
        subtitle: 'Story Telling',
        grade: '10th',
    },
    {
        time: '08:00 AM - 09:00 AM',
        date: '25',
        month: 'Jun',
        title: 'SEL Session 1',
        subtitle: 'Story Telling',
        grade: '10th',
    },
    {
        time: '08:00 AM - 09:00 AM',
        date: '25',
        month: 'Jun',
        title: 'SEL Session 1',
        subtitle: 'Story Telling',
        grade: '10th',
    },
    {
        time: '08:00 AM - 09:00 AM',
        date: '25',
        month: 'Jun',
        title: 'SEL Session 1',
        subtitle: 'Story Telling',
        grade: '10th',
    },
];

const PAGE_SIZE = 3;

const SelSessions = () => {
    const [tab, setTab] = useState("upcoming");
    const [page, setPage] = useState(1);
    const [selectedDay, setSelectedDay] = useState(2); // index of active day
    const [currentMonth, setCurrentMonth] = useState({ month: 'June', year: 2025 });

    const handleTabChange = (newTab) => {
        setTab(newTab);
        setPage(1);
        const firstSession = sessions.find(s => s.status === newTab);
        if (firstSession) {
            setSelectedDay(new Date(firstSession.date));
        } else {
            setSelectedDay(new Date(2020, 4, 5));
        }
    };

    const handlePrevMonth = () => {
        setCurrentMonth({ ...currentMonth, month: 'May' });
    };

    const handleNextMonth = () => {
        setCurrentMonth({ ...currentMonth, month: 'July' });
    };

    const filteredSessions = sessions.filter(s => s.status === tab);
    const pagedSessions = filteredSessions.slice(0, page * PAGE_SIZE);
    const hasMore = filteredSessions.length > pagedSessions.length;

    const firstDayOfMonth = dayjs(`${currentMonth.month} 1, ${currentMonth.year}`);
    const daysInMonth = firstDayOfMonth.daysInMonth();
    const monthIdx = firstDayOfMonth.month();
    const daysArr = Array.from({ length: daysInMonth }, (_, i) => {
        const date = dayjs(`${currentMonth.year}-${monthIdx + 1}-${i + 1}`);
        return {
            label: date.format('ddd'),
            date: i + 1,
        };
    });

    return (
        <MainWrapper logged={true}>
            <MainTitle title="SEL Sessions" />
            <div className="min-h-screen  py-4 px-2 flex flex-col items-center">
                <div className="w-full flex gap-6 lg:flex-row flex-col">
                    <div className="w-full lg:max-w-1/2 mx-auto bg-white p-4 rounded-2xl shadow-lg mb-8 h-full">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-2xl font-semibold text-gray-900"> {currentMonth.month}</span>
                            <span className="flex items-center gap-2 text-gray-400 text-base font-medium bg-gray-100 rounded-full px-4 py-2">
                                <button onClick={handlePrevMonth} className="focus:outline-none p-1"><FontAwesomeIcon icon={faChevronLeft} className="text-[#EE9737]" /></button>
                                <FontAwesomeIcon icon={faCalendarAlt} className="text-[#EE9737]" />
                                {currentMonth.month}, {currentMonth.year}
                                <button onClick={handleNextMonth} className="focus:outline-none p-1"><FontAwesomeIcon icon={faChevronRight} className="text-[#EE9737]" /></button>
                            </span>
                        </div>
                        {/* Days Calendar Grid */}
                        <div className="grid grid-cols-7 gap-2 mb-6">
                            {daysArr.map((d, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedDay(idx)}
                                    className={`flex flex-col items-center min-w-[40px] px-2 py-2 rounded-xl transition font-medium text-lg ${selectedDay === idx ? 'bg-[#EE9737] text-white shadow' : 'bg-gray-100 text-gray-400'}`}
                                >
                                    <span className="text-base">{d.label}</span>
                                    <span className="text-2xl font-bold">{d.date}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:max-w-1/2 bg-white p-3 shadow rounded-2xl mx-auto">
                        <div>
                            {/* Tabs as Nav at the very top */}
                            <div className="w-full max-w-4xl mx-auto flex items-center justify-center gap-6 mb-6">
                                <button
                                    className={`px-4 py-2 rounded-lg font-semibold text-base transition ${tab === "upcoming" ? "bg-orange-400 text-white" : "bg-gray-100 text-gray-500"}`}
                                    onClick={() => handleTabChange("upcoming")}
                                >
                                    Upcoming
                                </button>
                                <button
                                    className={`px-4 py-2 rounded-lg font-semibold text-base transition ${tab === "completed" ? "bg-orange-400 text-white" : "bg-gray-100 text-gray-500"}`}
                                    onClick={() => handleTabChange("completed")}
                                >
                                    Completed
                                </button>
                            </div>
                        </div>
                        {/* Sessions List */}
                        <div className="flex flex-col gap-6">
                            {sessions.map((s, idx) => (
                                <div key={idx} className="flex flex-col gap-2">
                                    <span className="text-sm text-gray-400 font-semibold">{s.time}</span>
                                    <div className="flex items-center bg-gray-50 rounded-xl p-5 gap-5 shadow-sm">
                                        <div className="flex flex-col items-center justify-center bg-[#EE9737] bg-opacity-90 rounded-lg px-5 py-3 text-white font-bold text-base">
                                            <span className="text-2xl leading-none">{s.date}</span>
                                            <span className="text-sm -mt-1">{s.month}</span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-semibold text-lg text-gray-900 leading-tight">{s.title}</div>
                                            <div className="text-sm text-gray-400">{s.subtitle}</div>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="bg-gray-100 text-gray-500 text-sm font-bold rounded-lg px-4 py-2">Grade {s.grade}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {hasMore && (
                                <button
                                    className="w-full mt-2 py-2 rounded-lg bg-orange-50 text-orange-500 font-semibold hover:bg-orange-100 transition"
                                    onClick={() => setPage(p => p + 1)}
                                >
                                    See more
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </MainWrapper>
    );
};

export default SelSessions;
