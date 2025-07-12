import React, { useState } from "react";
import MainWrapper from "../../../components/MainWrapper";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faFile } from "@fortawesome/free-solid-svg-icons";
import MainTitle from "../../../components/MainTitle";

const assignments = [
    {
        title: "Molecular Chain Reaction",
        desc: "Lorem ipsum dolor sit amet consectetur. Amet tortor eu erat dapibus cursus nisl diam. Morbi vel.",
        due: "Overdue",
        dueColor: "bg-red-500",
        date: "12 Dec 2023 | 12:00 am",
        status: "ongoing",
        progress: 100,
    },
    {
        title: "Purple Chemical Reaction",
        desc: "Lorem ipsum dolor sit amet consectetur. Amet tortor eu erat dapibus cursus nisl diam. Morbi vel.",
        due: "12 Dec 2023 | 12:00 am",
        dueColor: "bg-orange-400",
        status: "ongoing",
        progress: 60,
    },
    {
        title: "Molecular Chain Reaction",
        desc: "Lorem ipsum dolor sit amet consectetur. Amet tortor eu erat dapibus cursus nisl diam. Morbi vel.",
        due: "12 Dec 2023 | 12:00 am",
        dueColor: "bg-orange-400",
        status: "ongoing",
        progress: 80,
    },
];

const AssignmentIndex = () => {
    const [tab, setTab] = useState("ongoing");
    return (
        <MainWrapper logged={true}>
            <MainTitle title="Assignments" buttons={[{ label: "Back"}]} />
            <div className="min-h-screen py-4 px-2 flex flex-col items-center">
                <div className="w-full">
                    <div className="flex border-b border-gray-200 mb-8 max-w-md">
                        <button
                            className={`flex-1 text-center py-2 cursor-pointer font-semibold text-base transition-colors ${tab === "ongoing" ? "text-orange-400 border-b-2 border-orange-400" : "border-transparent  text-gray-500"}`}
                            onClick={() => setTab("ongoing")}
                        >
                            On Going
                        </button>
                        <button
                            className={`flex-1 text-center py-2 cursor-pointer font-semibold text-base transition-colors ${tab === "completed" ? "text-orange-400 border-b-2 border-orange-400" : "border-transparent  text-gray-500"}`}
                            onClick={() => setTab("completed")}
                        >
                            Completed
                        </button>
                    </div>
                    <div className="flex flex-col gap-4 mt-2">
                        {assignments
                            .filter((a) => (tab === "ongoing" ? a.status !== "completed" : a.status === "completed"))
                            .map((a, i) => (
                                <Link to={`/classes/${i}/assignments/${i}`} key={i} className="bg-white rounded-2xl p-4 shadow-sm">
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

export default AssignmentIndex;
