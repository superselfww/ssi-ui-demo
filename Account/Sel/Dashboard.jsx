import React, { useState } from 'react';
import MainWrapper from '../../../components/MainWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import dayjs from 'dayjs';

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

export default function SelDashboard() {
    const [selectedDay, setSelectedDay] = useState(2); // index of active day
    const [currentMonth, setCurrentMonth] = useState({ month: 'June', year: 2023 });

    const handlePrevMonth = () => {
        // Simple month navigation logic (not handling year wrap for brevity)
        setCurrentMonth({ ...currentMonth, month: 'May' });
    };
    const handleNextMonth = () => {
        setCurrentMonth({ ...currentMonth, month: 'July' });
    };

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
        <MainWrapper logged={true} activeSection="sel">
            <div className="min-h-screen flex flex-col items-center py-10 px-4">
                {/* Welcome Message */}
                <div className="w-full  mx-auto mb-8">
                    <div className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="text-2xl font-bold text-gray-900 mb-2 md:mb-0">Welcome back, Teacher!</div>
                        <div className="text-gray-500 text-base">Here's your SEL sessions and schedule for this week.</div>
                    </div>
                </div>
                {/* Weekly Student Evaluation Banner */}
                {/* <div className="w-full max-w-3xl mx-auto mb-6">
                    <button className="w-full bg-[#EE9737] text-white font-semibold rounded-full py-4 text-lg shadow mb-2">Weekly Student Evaluation</button>
                </div> */}
                {/* Sessions Section */}
                <div className="w-full bg-white rounded-2xl shadow p-6  mx-auto">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-semibold text-gray-900">Sessions</span>
                        <span className="flex items-center gap-2 text-gray-400 text-base font-medium bg-gray-100 rounded-full px-4 py-2">
                            <button onClick={handlePrevMonth} className="focus:outline-none p-1"><FontAwesomeIcon icon={faChevronLeft} className="text-[#EE9737]" /></button>
                            <FontAwesomeIcon icon={faCalendarAlt} className="text-[#EE9737]" />
                            {currentMonth.month}, {currentMonth.year}
                            <button onClick={handleNextMonth} className="focus:outline-none p-1"><FontAwesomeIcon icon={faChevronRight} className="text-[#EE9737]" /></button>
                        </span>
                    </div>
                    {/* Days Row */}
                    <div className="flex overflow-x-auto gap-2 mb-6 scrollbar-hide">
                        {daysArr.map((d, idx) => (
                            <button
                                key={idx}
                                onClick={() => setSelectedDay(idx)}
                                className={`flex flex-col items-center min-w-[56px] px-4 py-2 rounded-xl transition font-medium text-lg ${selectedDay === idx ? 'bg-[#EE9737] text-white shadow' : 'bg-gray-100 text-gray-400'}`}
                            >
                                <span className="text-base">{d.label}</span>
                                <span className="text-2xl font-bold">{d.date}</span>
                            </button>
                        ))}
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
                    </div>
                </div>
            </div>
        </MainWrapper>
    );
}
