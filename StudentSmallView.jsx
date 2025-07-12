import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const StudentSmallView = ({ student, hoverMenu = true }) => {
    const [hoveredStudent, setHoveredStudent] = useState(null);
    return (
        <div
            className="flex flex-col items-center relative group"
            onMouseEnter={() => setHoveredStudent(student.id)}
            onMouseLeave={() => setHoveredStudent(null)}
        >
            <img src={student.img} alt={student.name} className="w-14 h-14 rounded-full object-cover cursor-pointer border border-gray-200 group-hover:border-primary transition" />
            <span className="text-xs text-gray-500 mt-1">{student.name}</span>
            {(hoveredStudent === student.id && hoverMenu) && (
                <div className="absolute z-20 left-1/2 -translate-x-1/2 top-16 bg-white border border-gray-200 shadow-lg rounded-xl p-4 min-w-[160px] flex flex-col items-center animate-fade-in">
                    <img src={student.img} alt={student.name} className="w-12 h-12 rounded-full object-cover mb-2 border-2 border-gray-200" />
                    <div className="font-semibold text-gray-800 mb-1">{student.name}</div>
                    <button className="bg-primary text-white rounded-lg p-2 flex items-center justify-center mt-1 transition">
                        Message <FontAwesomeIcon icon={faMessage} className="ml-2 mt-1" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default StudentSmallView;
