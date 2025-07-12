import React, { useEffect } from "react";
import MainWrapper from "../../../../components/MainWrapper";
import { Link, useNavigate } from "react-router-dom";
import MainTitle from "../../../../components/MainTitle";
import { getData } from "../../../../utils/Storage";
import { faChalkboardTeacher, faUser, faUserGraduate, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const grades = [
    { grade: "9th", students: 41 },
    { grade: "9th", students: 41 },
    { grade: "9th", students: 41 },
    { grade: "9th", students: 41 },
];

export default function GradeIndex() {
    const [userData, setUserData] = React.useState(getData("user"));
    const navigate=useNavigate();
    useEffect(() => {
        setUserData(getData("user"));
    }, []);
    return (
        <MainWrapper logged={true} activeSection="grades" isSelTeacher={true}>
            <MainTitle title="Grades" buttons={[{label:"Weekly Evaluation", onClick: () => {navigate('/evaluation-history')},icon:' ' ,className:'bg-primary text-white'}]} />
            <div className="p-4  min-h-screen flex flex-col items-center">
                <div className="w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {grades.map((g, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl px-7 py-6 flex flex-col gap-4 w-full hover:shadow-lg transition border border-gray-200"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <span className="inline-block bg-orange-100 text-orange-500 rounded-lg px-3 py-1 font-bold text-lg">{g.grade}</span>
                                <span className="ml-auto text-xs text-gray-400">{g.students} students</span>
                            </div>
                            <div className="grid grid-cols-2 gap-3 mb-2">
                                <div className="flex items-center gap-2 bg-orange-50 rounded-lg px-3 py-2">
                                    <FontAwesomeIcon icon={faChalkboardTeacher} className="text-orange-400 text-lg" />
                                    <span className="font-semibold text-gray-700 text-sm">{g.teachers}</span>
                                    <span className="text-xs text-gray-500 ml-1">Teachers</span>
                                </div>
                                <div className="flex items-center gap-2 bg-blue-50 rounded-lg px-3 py-2">
                                    <FontAwesomeIcon icon={faUsers} className="text-blue-400 text-lg" />
                                    <span className="font-semibold text-gray-700 text-sm">{g.students}</span>
                                    <span className="text-xs text-gray-500 ml-1">Students</span>
                                </div>
                                <div className="flex items-center gap-2 bg-green-50 rounded-lg px-3 py-2">
                                    <FontAwesomeIcon icon={faUserGraduate} className="text-green-400 text-lg" />
                                    <span className="font-semibold text-gray-700 text-sm">{g.classes}</span>
                                    <span className="text-xs text-gray-500 ml-1">Classes</span>
                                </div>
                                <div className="flex items-center gap-2 bg-purple-50 rounded-lg px-3 py-2">
                                    <FontAwesomeIcon icon={faUser} className="text-purple-400 text-lg" />
                                    <span className="font-semibold text-gray-700 text-sm">{g.selTeachers}</span>
                                    <span className="text-xs text-gray-500 ml-1">SEL Teachers</span>
                                </div>
                            </div>
                            <div className="flex gap-3 mt-2">
                                <Link
                                    to={`/grades/${g.grade}`}
                                    className="text-center flex-1 border border-orange-400 text-orange-400 rounded-full py-2 font-medium transition hover:bg-orange-50"
                                >
                                    View
                                </Link>
                                {userData?.role === 4 && (
                                    <Link
                                        to={`/school/grades/${g.grade}/edit`}
                                        className="flex-1 bg-primary text-white rounded-full py-2 font-medium transition hover:bg-blue-600 text-center"
                                    >
                                        Edit
                                    </Link>
                                )}
                                {userData?.role === 3 && (
                                    <Link
                                        to={`/grades/${g.grade}/calendar`}
                                        className="flex-1 text-center bg-orange-400 text-white rounded-full py-2 font-medium transition hover:bg-orange-500"
                                    >
                                        Schedule Session
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </MainWrapper>
    );
}
