import React from "react";
import MainWrapper from "../../../components/MainWrapper";
import { Link } from "react-router-dom";
import MainTitle from "../../../components/MainTitle";
import MainSubmitButton from "../../../components/buttons/MainSubmitButton";
import { useDropzone } from 'react-dropzone';

const SubmitAssignment = () => {
    const [files, setFiles] = React.useState([]);

    const onDrop = React.useCallback((acceptedFiles) => {
        setFiles(prev => [...prev, ...acceptedFiles]);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        multiple: true,
        accept: {
            'application/pdf': ['.pdf'],
            'application/msword': ['.doc', '.docx'],
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
            'application/vnd.ms-excel': ['.xls', '.xlsx'],
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
            'image/png': ['.png'],
            'image/jpeg': ['.jpg', '.jpeg']
        }
    });

    return (
        <MainWrapper logged={true}>
            <MainTitle title="Submit Assignment" buttons={[{ label: 'Back' }]} />
            <div className="min-h-screen py-4 px-2 flex flex-col items-center">
                <div className="w-full  mx-auto flex flex-col  justify-between bg-white rounded-2xl shadow-lg p-6">
                    <div className="w-full max-w-md mx-auto">
                        <div {...getRootProps()} className={`bg-[#f3f6fa] border border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center h-48 cursor-pointer mb-8 mt-4 transition ${isDragActive ? 'border-primary/60 bg-primary/10' : ''}`}>
                            <input {...getInputProps()} />
                            <svg width="56" height="56" fill="none" viewBox="0 0 56 56">
                                <rect width="56" height="56" rx="12" fill="#F3F6FA" />
                                <rect x="14" y="14" width="28" height="28" rx="6" fill="#fff" stroke="#D1D5DB" strokeWidth="2" />
                                <path d="M28 21v10M23 26h10" stroke="#A0AEC0" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            <span className="text-orange-400 font-medium mt-2 text-sm">
                                {isDragActive ? 'Drop files here...' : 'Tap or Drag & Drop to Upload'}
                            </span>
                            {files.length > 0 && (
                                <div className="mt-3 w-full flex flex-wrap gap-2 justify-center">
                                    {files.map((file, idx) => (
                                        <span key={idx} className="bg-white border border-gray-200 rounded px-2 py-1 text-xs text-gray-700 flex items-center gap-1">
                                            {file.name}
                                            <button 
                                                type="button"
                                                className="ml-1 text-red-400 hover:text-red-600 focus:outline-none"
                                                onClick={() => setFiles(files.filter((_, i) => i !== idx))}
                                                title="Remove file"
                                            >
                                                &times;
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                        <MainSubmitButton>
                            Submit
                        </MainSubmitButton>
                    </div>
                </div>
            </div>
        </MainWrapper>
    );
};

export default SubmitAssignment;
