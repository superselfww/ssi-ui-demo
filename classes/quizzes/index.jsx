import React, { useEffect, useState } from "react";
import MainWrapper from "../../../components/MainWrapper";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faFile } from "@fortawesome/free-solid-svg-icons";
import MainTitle from "../../../components/MainTitle";
import { getData } from "../../../utils/Storage";

const assignments = [
    {
        title: "Molecular Chain Reaction",
        desc: "Test your knowledge on the basics of sociology, including key concepts and theories. This quiz will help you solidify your understanding of the foundational elements of sociology.",
        due: "Overdue",
        dueColor: "bg-red-500",
        date: "12 Dec 2023 | 12:00 am",
        status: "overdue",
        progress: 100,
    },
    {
        title: "Techniques for Stress Reduction",
        desc: "Learn and practice various meditation techniques designed to reduce stress and improve mental well-being.",
        due: "12 Dec 2023 | 12:00 am",
        dueColor: "bg-orange-400",
        status: "ongoing",
        progress: 60,
    },
    {
        title: "Physical Health and Sociology",
        desc: "This assignment encourages you to engage in physical activities while reflecting on how society influences health behaviors.",
        due: "12 Dec 2023 | 12:00 am",
        dueColor: "bg-orange-400",
        status: "ongoing",
        progress: 80,
    },
];

const QuizzesIndex = () => {
    const [tab, setTab] = useState("ongoing");
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        setUserData(getData("user"));
    }, []);

    const renderLink = (id) => {
        if (userData?.role === 4) {
            return `/classes/:id/quizzes/view/:id`;
        } else {
            return `/classes/${id}/quizzes/start`;
        }
    }

    return (
        <MainWrapper logged={true}>
            <MainTitle title="Quizzes" buttons={[{ label: "Back" }]} />
            <div className="min-h-screen py-4 px-2 flex flex-col items-center">
                <div className="w-full">
                    <div className="flex border-b border-gray-200 mb-8">
                        <button
                            className={`flex-1 text-center py-2 max-w-[200px] cursor-pointer font-semibold text-base transition-colors ${tab === "ongoing" ? "text-orange-400 border-b-2 border-orange-400" : "text-black"}`}
                            onClick={() => setTab("ongoing")}
                        >
                            On Going
                        </button>
                        <button
                            className={`flex-1 text-center py-2 max-w-[200px] cursor-pointer font-semibold text-base transition-colors ${tab === "completed" ? "text-orange-400 border-b-2 border-orange-400" : "text-black"}`}
                            onClick={() => setTab("completed")}
                        >
                            Completed
                        </button>
                    </div>
                </div>
                <div className="w-full ">
                    <div className="flex flex-col gap-4 mt-2 w-full">
                        {assignments
                            .filter((a) => (tab === "ongoing" ? a.status !== "completed" : a.status === "completed"))
                            .map((a, i) => (
                                <Link to={renderLink(a.id)} key={i} className="bg-white rounded-2xl p-4 shadow-sm ">
                                    <div className="flex items-center justify-between mb-1">
                                        <div className="font-bold text-lg text-gray-800">{a.title}</div>
                                    </div>
                                    <div className="text-sm text-gray-500 mb-2">{a.desc}</div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="flex items-center gap-1">
                                            <span className="text-gray-500 flex items-center gap-1">
                                                <span className="text-xs font-semibold ">03</span> <FontAwesomeIcon icon={faFile} size="xs" className="rounded-lg bg-gray-100 border p-1" />
                                            </span>
                                            <span className="text-gray-500 flex items-center gap-1">
                                                <span className="text-xs font-semibold text-gray-500">01</span> <FontAwesomeIcon icon={faComment} />
                                            </span>
                                        </div>
                                        {a.status === "overdue" ? (
                                            <span className="ml-auto bg-red-500 text-white text-xs rounded px-3 py-1">Overdue</span>
                                        ) : (
                                            <span className="ml-auto bg-orange-400 text-white text-xs rounded px-3 py-1">{a.date ?? 'Date'}</span>
                                        )}
                                    </div>
                                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mt-2">
                                        <div className="h-2 bg-orange-400 rounded-full" style={{ width: `${a.progress}%` }}></div>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </MainWrapper>
    );
};

export default QuizzesIndex;
