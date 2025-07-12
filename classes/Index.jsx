import React, { useEffect, useState } from "react";
import MainWrapper from "../../components/MainWrapper";
import { Link } from "react-router-dom";
import MainTitle from "../../components/MainTitle";

const classesData = [
    {
        id: 1,
        subject: "Chemistry",
        teacher: "Tuat Charles",
        assignments: 2,
        quizzes: 1,
    },
    {
        id: 2,
        subject: "Biology",
        teacher: "Tuat Charles",
        assignments: 2,
        quizzes: 1,
    },
    {
        id: 3,
        subject: "Physics",
        teacher: "Tuat Charles",
        assignments: 2,
        quizzes: 1,
    },
    {
        id: 4,
        subject: "English",
        teacher: "Tuat Charles",
        assignments: 2,
        quizzes: 1,
    },
];


const Classes = () => {
    const [subject, setSubject] = useState("All");
    const filtered = subject === "All" ? classesData : classesData.filter(c => c.subject === subject);

    useEffect(() => {
        let f=false;
        if(f === true){
            setSubject("All");
        }
    },[]);

    return (
        <MainWrapper logged={true}>
            <MainTitle title="My Classes" />
            <div className="min-h-screen py-6 px-2 flex flex-col items-center">
                <div className="w-full max-w-7xl mx-auto">
                    <div className="flex flex-col md:grid md:grid-cols-3 gap-6 w-full">
                        {filtered.map(cls => (
                            <div
                                key={cls.id}
                                className="relative bg-gradient-to-br from-white via-slate-50 to-slate-100 rounded-2xl shadow-xl  p-6 flex flex-col gap-4 w-full transition-transform   group"
                            >
                                {/* Subject Icon/Avatar */}
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold shadow-sm">
                                        {cls.subject.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="text-lg font-bold text-primary group-hover:text-primary/80 transition">{cls.subject}</div>
                                        <div className="text-xs text-gray-500">{cls.teacher}</div>
                                    </div>
                                </div>
                                {/* Badges Row */}
                                <div className="flex gap-2 mb-2">
                                    <span className="inline-flex items-center gap-1 bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 17v-2a4 4 0 0 1 8 0v2"/><circle cx="12" cy="7" r="4"/><rect x="2" y="17" width="20" height="5" rx="2"/></svg>
                                        {cls.assignments} Assignments
                                    </span>
                                    <span className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 17v-1a4 4 0 0 0-8 0v1"/><circle cx="12" cy="7" r="4"/></svg>
                                        {cls.quizzes} Quizzes
                                    </span>
                                </div>
                                {/* Details Table */}
                                <div className="grid grid-cols-2 gap-y-1 text-sm text-gray-600">
                                    <span>Subject</span>
                                    <span className="font-bold text-right text-gray-900">{cls.subject}</span>
                                    <span>Teacher</span>
                                    <span className="font-bold text-right text-gray-900">{cls.teacher}</span>
                                    <span>Assignments</span>
                                    <span className="font-bold text-right text-primary">{cls.assignments.toString().padStart(2, '0')}</span>
                                    <span>Quizzes</span>
                                    <span className="font-bold text-right text-yellow-700">{cls.quizzes.toString().padStart(2, '0')}</span>
                                </div>
                                {/* View Class Button */}
                                <Link
                                    to={`/classes/${cls.id}`}
                                    className="mt-2 text-center w-full bg-primary hover:bg-primary/90 text-white font-semibold rounded-full py-2 text-lg shadow transition-all focus:outline-none focus:ring-2 focus:ring-primary/50"
                                >
                                    View Class
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </MainWrapper>
    );
};

export default Classes;
