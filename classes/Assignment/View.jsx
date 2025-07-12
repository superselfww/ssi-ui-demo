import React from "react";
import MainWrapper from "../../../components/MainWrapper";
import { useNavigate } from "react-router-dom";
import MainTitle from "../../../components/MainTitle";
import WordIcon from "../../../assets/images/icons/docx-file.png";
import PdfIcon from "../../../assets/images/icons/pdf.png";
import ExcelIcon from "../../../assets/images/icons/excel.png";
import MainButton from "../../../components/buttons/MainButton";
const files = [
    {
        type: "pdf",
        name: "Detail overview about the daily quiz game",
        icon: PdfIcon,
    },
    {
        type: "word",
        name: "Instructions for the daily quiz game",
        icon: WordIcon,
    },
    {
        type: "excel",
        name: "Attendance for daily quiz game",
        icon: ExcelIcon,
    },
];

const AssignmentView = () => {
    const navigate=useNavigate();

    return (
        <MainWrapper logged={true}>
            <MainTitle title="Assignments" buttons={[{ label: "Back"}]} />
            <div className="min-h-screen  py-4 px-2 flex flex-col items-center">
                <div className="w-full max-w-10xl mx-auto">
                    <div className="bg-white rounded-2xl shadow p-6">
                        <div className="font-bold text-xl text-gray-900 mb-2">Molecular Structure Part 2</div>
                        <div className="flex gap-8 mb-4  text-gray-500">
                            <div>
                                <div className="font-semibold text-gray-400">Assigned Date</div>
                                <div className="text-gray-800 font-medium">10 May, 2024</div>
                            </div>
                            <div>
                                <div className="font-semibold text-gray-400">Due Date</div>
                                <div className="text-gray-800 font-medium">15 May, 2024</div>
                            </div>
                        </div>
                        <div className="font-semibold text-gray-400 mb-1 mt-4">Description</div>
                        <div className="text-gray-700 text-sm mb-4">
                            In this assignment, you will investigate the concept of social norms and their influence on individual and group behavior. You will define key types of social norms—folkways, mores, and laws—and analyze real-life examples to understand their impact on society. Additionally, you will reflect on a social norm that has affected your own life, discussing its significance and consequences. This assignment aims to deepen your understanding of how social norms shape human interactions and societal structures.
                        </div>
                        <div className="font-semibold text-gray-400 mb-1">Files</div>
                        <div className="flex gap-3 mb-6 flex-wrap">
                            {files.map((file, i) => (
                                <div key={i} className="bg-[#f3f6fa] rounded-xl flex flex-col items-center justify-center w-28 h-28 p-2 shadow-sm">
                                    <img src={file.icon} alt={file.type} className="w-10 h-10 mb-2" />
                                    <div className="text-xs text-center text-gray-700 font-medium leading-tight">
                                        {file.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center max-w-sm mx-auto">
                            <MainButton onClick={()=>{navigate(`/classes/12/assignments/submit`)}}>
                                Submit
                            </MainButton>
                        </div>
                    </div>

                </div>
            </div>
        </MainWrapper>
    );
};

export default AssignmentView;
