import React, { useState } from "react";
import MainWrapper from "../../../components/MainWrapper";
import MainTitle from "../../../components/MainTitle";
import Pdf from '../../../assets/images/icons/pdf.png';
import Word from '../../../assets/images/icons/docx-file.png';
import { Link } from "react-router-dom";

const assignment = {
    title: "Molecular Structure Part 2",
    assignedDate: "May 6, 2024",
    dueDate: "May 14, 2024",
    description: `In this assignment, you will delve into the intriguing world of molecular chains. Molecular chains are a sequence of molecules bonded together, forming a structure that can influence various chemical reactions and properties. Your task is to understand the formation, structure, and reaction mechanisms of these molecular chains.`,
    files: [
        { type: "pdf", name: "Assignment.pdf", icon: Pdf },
        { type: "word", name: "Instructions.docx", icon: Word },
        { type: "word", name: "Template.docx", icon: Word },
    ],
    notes: `Please make sure to thoroughly review all provided materials and complete the experiment carefully. Understanding molecular chains is crucial for your future studies in chemistry. If you have any questions or need further clarification, feel free to reach out during office hours or post your queries in the class chat.`
};

const submissions = [
    // Today
    { name: "Luke Domont", img: "https://randomuser.me/api/portraits/men/1.jpg", date: "Submitted 10 May, 2024 12:56 am" },
    { name: "Andre Funk", img: "https://randomuser.me/api/portraits/men/2.jpg", date: "Submitted 10 May, 2024 12:56 am" },
    { name: "Wanda McKenzie", img: "https://randomuser.me/api/portraits/women/3.jpg", date: "Submitted 10 May, 2024 12:56 am" },
    { name: "Owen Russel", img: "https://randomuser.me/api/portraits/men/4.jpg", date: "Submitted 10 May, 2024 12:56 am" },
    // Yesterday
    { name: "Alberto Rodriguez", img: "https://randomuser.me/api/portraits/men/5.jpg", date: "Submitted 9 May, 2024 12:56 am" },
    { name: "Jason Yunat", img: "https://randomuser.me/api/portraits/men/6.jpg", date: "Submitted 9 May, 2024 12:56 am" },
    { name: "Camille Wiegand-Zemlak", img: "https://randomuser.me/api/portraits/women/7.jpg", date: "Submitted 9 May, 2024 12:56 am" },
    { name: "Wilbert Fadel", img: "https://randomuser.me/api/portraits/men/8.jpg", date: "Submitted 9 May, 2024 12:56 am" },
];

export default function SubmittedAssignmentViewOnClass() {
    const [tab, setTab] = useState("details");
    return (
        <MainWrapper logged={true}>
            <MainTitle title="Assignment Details" buttons={[{ label: "Back"}]} />
            <div className="mx-auto w-full min-h-screen ">
                <div className="flex w-full max-w-md mb-8 ">
                    <button
                        className={`flex-1 py-2 text-lg font-semibold transition border-b-2 ${tab === "details" ? "border-orange-400  text-orange-500" : "border-transparent  text-gray-500"}`}
                        onClick={() => setTab("details")}
                    >
                        Details
                    </button>
                    <button
                        className={`flex-1 py-2text-lg font-semibold transition border-b-2 ${tab === "submissions" ? "border-orange-400  text-orange-500" : "border-transparent  text-gray-500"}`}
                        onClick={() => setTab("submissions")}
                    >
                        Submissions
                    </button>
                </div>
                {tab === "details" && (
                    <div className="p-6 bg-white rounded-2xl shadowmt-8 overflow-hidden mt-2">
                        <div className="text-xl font-bold mb-1">{assignment.title}</div>
                        <div className="flex gap-4 text-xs text-gray-400 mb-4">
                            <span>Assigned: {assignment.assignedDate}</span>
                            <span>Due: {assignment.dueDate}</span>
                        </div>
                        <div className="mb-4">
                            <div className="font-semibold mb-1">Description</div>
                            <div className="text-gray-700 text-base leading-relaxed">{assignment.description}</div>
                        </div>
                        <div className="mb-4">
                            <div className="font-semibold mb-1">Files</div>
                            <div className="flex gap-4 mt-2">
                                {assignment.files.map((f, i) => (
                                    <div key={i} className="flex flex-col items-center gap-2 bg-gray-50 rounded-xl p-4 w-24 shadow border border-gray-100">
                                        <img src={f.icon} alt={f.name} className="w-10 h-10 object-contain" />
                                        <div className="text-xs text-gray-700 font-semibold truncate w-full text-center">{f.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mb-2">
                            <div className="font-semibold mb-1">Notes</div>
                            <div className="bg-gray-100 rounded-xl p-4 text-gray-700 text-sm leading-relaxed">
                                {assignment.notes}
                            </div>
                        </div>
                    </div>
                )}
                {tab === "submissions" && (
                    <div className="p-6">
                        {/* Today */}
                        <div className="mb-4">
                            <div className="text-sm text-gray-400 font-semibold mb-2">Today</div>
                            {submissions.slice(0,4).map((s, i) => (
                                <Link to={`/home/class/:id/assignment/:id/submitted/:id`} key={i} className="flex items-center gap-3 mb-3 bg-white rounded-xl shadow-sm px-3 py-2">
                                    <img src={s.img} alt={s.name} className="w-10 h-10 rounded-full object-cover border-2 border-gray-200" />
                                    <div className="flex-1 min-w-0">
                                        <div className="font-semibold text-base text-gray-800 truncate">{s.name}</div>
                                        <div className="text-xs text-gray-400 truncate">{s.date}</div>
                                    </div>
                                    <button className="bg-orange-100 text-orange-500 rounded-full px-4 py-1 font-semibold text-sm hover:bg-orange-200 transition">View</button>
                                </Link>
                            ))}
                        </div>
                        {/* Yesterday */}
                        <div>
                            <div className="text-sm text-gray-400 font-semibold mb-2">Yesterday May 9, 2024</div>
                            {submissions.slice(4).map((s, i) => (
                                <div key={i} className="flex items-center gap-3 mb-3 bg-white rounded-xl shadow-sm px-3 py-2">
                                    <img src={s.img} alt={s.name} className="w-10 h-10 rounded-full object-cover border-2 border-gray-200" />
                                    <div className="flex-1 min-w-0">
                                        <div className="font-semibold text-base text-gray-800 truncate">{s.name}</div>
                                        <div className="text-xs text-gray-400 truncate">{s.date}</div>
                                    </div>
                                    <button className="bg-orange-100 text-orange-500 rounded-full px-4 py-1 font-semibold text-sm hover:bg-orange-200 transition">View</button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </MainWrapper>
    );
}
