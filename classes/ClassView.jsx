import React, { useEffect, useState } from "react";
import MainWrapper from "../../components/MainWrapper";
import avatar from "../../assets/images/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faMessage, faTimes, faDownload, faEllipsisV, faUserPlus, faTrash, faClone } from "@fortawesome/free-solid-svg-icons";
import Pdf from '../../assets/images/icons/pdf.png';
import Word from '../../assets/images/icons/docx-file.png';
import { Link } from "react-router-dom";
import MainTitle from "../../components/MainTitle";
import StudentSmallView from "../../components/StudentSmallView";
import { getData } from "../../utils/Storage";
import Swal from "sweetalert2";
import AssignTeacherModal from "../../components/modal/AssignTeacherModal";
import StudentListModal from "../../components/modal/StudentListModal";
import AddStudentModal from "../../components/modal/AddStudentModal";

const students = [
    { name: "Bertha", img: avatar },
    { name: "Robin", img: avatar },
    { name: "Nicole", img: avatar },
    { name: "Kerry", img: avatar },
    { name: "Lorene", img: avatar },
    { name: "Eliza", img: avatar },
    { name: "Damon", img: avatar },
];

const mediaFiles = [
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
];

const docFiles = [
    { type: "pdf", name: "Chapter1.pdf", icon: Pdf },
    { type: "word", name: "Notes.docx", icon: Word },
    { type: "pdf", name: "Chapter2.pdf", icon: Pdf },
    { type: "word", name: "Summary.docx", icon: Word },
];

const ClassView = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [userData, setUserData] = useState(null);
    const [actionDropdown, setActionDropdown] = useState(false);
    const [assignModalOpen, setAssignModalOpen] = useState(false);
    const [showStudentModal, setShowStudentModal] = useState(false);
    const [showAddStudentModal, setShowAddStudentModal] = useState(false);
    const [studentList, setStudentList] = useState(students);

    useEffect(() => {
        setUserData(getData("user"));
    }, []);
    const openLightbox = (idx) => {
        setLightboxIndex(idx);
        setLightboxOpen(true);
    };
    const closeLightbox = () => setLightboxOpen(false);
    const nextImage = () => setLightboxIndex((lightboxIndex + 1) % mediaFiles.length);
    const prevImage = () => setLightboxIndex((lightboxIndex - 1 + mediaFiles.length) % mediaFiles.length);

    // Action handlers
    const handleAssignTeacher = () => setAssignModalOpen(true);
    const handleAssign = (teacher) => {
        Swal.fire('Assigned!', `${teacher.name} has been assigned to this class.`, 'success');
        // TODO: Assign teacher logic
    };
    const handleDuplicate = () => Swal.fire('Duplicate', 'Duplicate class action goes here.', 'info');
    const handleRemove = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: `Remove this class? This action cannot be undone!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#aaa',
            confirmButtonText: 'Yes, remove',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Removed!', `Class has been removed.`, 'success');
            }
        });
    };
    const handleAddStudents = (newStudents) => {
        // Merge new students, avoiding duplicates by name
        setStudentList(prev => {
            const names = prev.map(s => s.name);
            return [...prev, ...newStudents.filter(ns => !names.includes(ns.name))];
        });
    };
    const handleRemoveStudent = (student) => {
        Swal.fire({
            title: 'Remove Student?',
            text: `Remove ${student.name} from this class? This action cannot be undone!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#aaa',
            confirmButtonText: 'Yes, remove',
        }).then((result) => {
            if (result.isConfirmed) {
                setStudentList(prev => prev.filter(s => s.name !== student.name));
                Swal.fire('Removed!', `${student.name} has been removed.`, 'success');
            }
        });
    };

    return (
        <MainWrapper logged={true}>
            <MainTitle title="Class - Sample Class Name" buttons={[{ label: "Back" }]} />
            <div className="min-h-screen py-4 px-2 flex flex-col items-center">
                <div className="w-full mx-auto">
                    <div className="bg-white rounded-3xl shadow p-8 flex flex-col gap-6  relative transition-shadow duration-300">
                        {/* Subject Labels */}
                        {/* Class Title and Actions Row */}
                        <div className="flex flex-row sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                            <div className="flex-1 min-w-0">
                                <div className="text-2xl font-extrabold text-primary mb-1">Chemistry</div>
                                {/* <div className="flex flex-wrap gap-2">
                                    {['Chemistry', 'Biology', 'Physics', 'English'].map((subj) => (
                                        <span key={subj} className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-semibold">{subj}</span>
                                    ))}
                                </div> */}
                            </div>

                            {/* Actions: Desktop (role 4) */}
                            {userData?.role === 4 && (
                                <div className="hidden sm:flex gap-2">
                                    <Link to="/school/class/:id/edit" className="bg-primary text-white px-3 py-1 rounded-full font-semibold flex items-center gap-1 text-xs hover:bg-blue-600 transition">
                                        <FontAwesomeIcon icon={faClone} /> Edit
                                    </Link>
                                    <button className="bg-primary text-white px-3 py-1 rounded-full font-semibold flex items-center gap-1 text-xs hover:bg-blue-200" onClick={handleAssignTeacher}>
                                        <FontAwesomeIcon icon={faUserPlus} /> Assign
                                    </button>
                                    <button className="bg-primary text-white px-3 py-1 rounded-full font-semibold flex items-center gap-1 text-xs hover:bg-gray-200" onClick={handleDuplicate}>
                                        <FontAwesomeIcon icon={faClone} /> Duplicate
                                    </button>
                                    <button className="bg-red-100 text-red-600 px-3 py-1 rounded-full font-semibold flex items-center gap-1 text-xs hover:bg-red-200" onClick={handleRemove}>
                                        <FontAwesomeIcon icon={faTrash} /> Remove
                                    </button>
                                </div>
                            )}

                            {/* Actions Dropdown for role 4 on mobile */}
                            {userData?.role === 4 && (
                                <div className="sm:hidden relative">
                                    <button className="text-gray-400 hover:text-gray-600 p-2 rounded-full" onClick={() => setActionDropdown(v => !v)}>
                                        <FontAwesomeIcon icon={faEllipsisV} />
                                    </button>
                                    {actionDropdown && (
                                        <div className="absolute right-0 mt-2 w-44 bg-white border rounded-xl shadow z-20 flex flex-col text-left animate-fade-in">
                                            <button className="px-4 py-3 text-sm hover:bg-gray-50 text-gray-900 text-left flex items-center gap-2" onClick={handleAssignTeacher}><FontAwesomeIcon icon={faUserPlus} /> Assign Teacher</button>
                                            <button className="px-4 py-3 text-sm hover:bg-gray-50 text-gray-900 text-left flex items-center gap-2" onClick={handleDuplicate}><FontAwesomeIcon icon={faClone} /> Duplicate</button>
                                            <hr className="my-1" />
                                            <button className="px-4 py-3 text-sm hover:bg-red-50 text-red-500 text-left font-semibold flex items-center gap-2" onClick={handleRemove}><FontAwesomeIcon icon={faTrash} /> Remove</button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                        {/* Subject Title and Details */}
                        <div className="grid grid-cols-2 gap-y-2 text-base max-w-sm mb-2">
                            <span className="text-gray-500">Duration</span>
                            <span className="font-bold text-right">10 May 2020 - 15 May 2022</span>
                            <span className="text-gray-500">Chapters</span>
                            <span className="font-bold text-right">08</span>
                        </div>
                        {/* Description */}
                        <div>
                            <div className="font-semibold text-lg mb-1">Description</div>
                            <div className="text-gray-600 mb-2 text-base leading-relaxed">
                                A typical chemistry chapter might cover the topic of Atomic Structure, delving into the fundamental building blocks of matter.
                            </div>
                        </div>
                        {/* Teacher Card */}
                        <div>
                            <div className="font-semibold text-lg mb-1">Teacher</div>
                            <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-4 w-fit mb-2 shadow-md">
                                <img src={avatar} alt="Virgil Cartwright" className="w-14 h-14 rounded-full object-cover border-2 border-gray-200" />
                                <div>
                                    <div className="font-semibold leading-tight text-lg text-primary">Virgil Cartwright</div>
                                    <div className="text-xs text-gray-400">Biology</div>
                                </div>
                                <button className="ml-4 bg-primary/10 text-primary rounded-lg p-3 flex items-center justify-center hover:bg-primary/20 transition">
                                    <FontAwesomeIcon icon={faMessage} className="text-xl" />
                                </button>
                            </div>
                        </div>
                        {/* Students Avatars */}
                        <div>
                            <div className="font-semibold text-lg mb-1 flex items-center justify-between">
                                Students
                                <div className="flex gap-2">
                                    <button className="text-xs px-2 py-1 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full flex items-center gap-1 transition" onClick={() => setShowAddStudentModal(true)}>
                                        <FontAwesomeIcon icon={faUserPlus} /> Add
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 mb-2 relative flex-wrap">
                                {studentList.map((s, i) => (
                                    <div key={i} className="relative group flex flex-col items-center">
                                        <StudentSmallView student={s} />
                                        <button
                                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs opacity-80 hover:opacity-100 transition z-10"
                                            title="Remove student"
                                            onClick={() => handleRemoveStudent(s)}
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))}
                                <div className="text-xs text-primary font-medium cursor-pointer flex items-end mt-8 ml-2 hover:underline" onClick={() => setShowStudentModal(true)}>
                                    See All
                                </div>
                            </div>
                            <StudentListModal open={showStudentModal} onClose={() => setShowStudentModal(false)} students={studentList} />
                            <AddStudentModal open={showAddStudentModal} onClose={() => setShowAddStudentModal(false)} onAdd={handleAddStudents} />
                        </div>
                        {/* Links */}
                        <div>
                            <div className="font-semibold text-lg mb-1">Links</div>
                            <div className="flex flex-col gap-2 mb-2">
                                <a href="#" className="bg-gray-100 rounded px-3 py-2 text-blue-600 underline font-medium hover:bg-orange-300 transition">http://www.google/mathematicsstudylinks.com</a>
                                <a href="#" className="bg-gray-100 rounded px-3 py-2 text-blue-600 underline font-medium hover:bg-orange-300 transition">http://www.google/mathematicsstudylinks.com</a>
                            </div>
                        </div>
                        {/* Files Section */}
                        <div>
                            <div className="font-semibold text-lg mb-1">Files</div>
                            <div className="text-gray-400 mb-1 mt-2 font-semibold">Media</div>
                            <div className="flex gap-3 mb-4 flex-wrap">
                                {mediaFiles.map((img, i) => (
                                    <img
                                        key={i}
                                        src={img}
                                        alt="media"
                                        className="w-28 h-20 rounded-xl object-cover shadow-md border border-gray-200 cursor-pointer transition-transform hover:scale-105"
                                        onClick={() => openLightbox(i)}
                                    />
                                ))}
                            </div>
                            {lightboxOpen && (
                                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
                                    <button onClick={closeLightbox} className="absolute top-6 right-8 text-white text-3xl font-bold bg-black/30 rounded-full px-3 py-1 hover:bg-black/60 transition"><FontAwesomeIcon icon={faTimes} /></button>
                                    <button onClick={prevImage} className="absolute left-8 top-1/2 -translate-y-1/2 text-white text-4xl bg-black/30 rounded-full px-3 py-1 hover:bg-black/60 transition"><FontAwesomeIcon icon={faChevronLeft} /></button>
                                    <img src={mediaFiles[lightboxIndex]} alt="media large" className="max-h-[80vh] max-w-[90vw] rounded-2xl shadow-2xl border-4 border-white" />
                                    <a
                                        href={mediaFiles[lightboxIndex]}
                                        download
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute bottom-10 right-10 text-white text-2xl bg-black/30 rounded-full p-3 shadow hover:bg-black/60 transition"
                                        title="Download image"
                                    >
                                        <FontAwesomeIcon icon={faDownload} />
                                    </a>
                                    <button onClick={nextImage} className="absolute right-8 top-1/2 -translate-y-1/2 text-white text-4xl bg-black/30 rounded-full px-3 py-1 hover:bg-black/60 transition"><FontAwesomeIcon icon={faChevronRight} /></button>
                                </div>
                            )}
                            <div className="text-gray-400 mb-1 mt-2 font-semibold">Documents</div>
                            <div className="flex gap-3 flex-wrap">
                                {docFiles.map((doc, i) => (
                                    <div key={i} className="bg-primary/5 rounded-xl flex flex-col items-center justify-center w-32 h-32 shadow-md border border-gray-200 p-3">
                                        <img src={doc.icon} alt={doc.type} className="w-10 h-10" />
                                        <span className="text-xs text-gray-700 mt-2 font-medium text-center break-all">{doc.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Assignments & Quizzes Buttons */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <Link to="/classes/12/assignments" className="w-full bg-gray-600 text-white font-semibold rounded-xl py-3 text-lg transition flex items-center justify-between px-6 shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/30">
                                Assignments <span className="text-xl">&gt;</span>
                            </Link>
                            <Link to="/classes/12/quizzes" className="w-full bg-gray-600 text-white font-semibold rounded-xl py-3 text-lg transition flex items-center justify-between px-6 shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300/50">
                                Quizzes <span className="text-xl">&gt;</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <AssignTeacherModal open={assignModalOpen} onClose={() => setAssignModalOpen(false)} onAssign={handleAssign} />
        </MainWrapper>
    );
};

export default ClassView;
