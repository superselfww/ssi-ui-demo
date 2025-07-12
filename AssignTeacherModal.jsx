import { Dialog, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import avatar from "../../assets/images/avatar.png";
import MainButton from "../buttons/MainButton";

// Example teachers (replace with real data)
const teachers = [
    { name: "Armando Batz", subject: "Biology", email: "armando@school.edu", img: avatar },
    { name: "Pauline Blick", subject: "Chemistry", email: "pauline@school.edu", img: avatar },
    { name: "Marcos Nienow", subject: "Mathematics", email: "marcos@school.edu", img: avatar },
    { name: "Lori Barrows", subject: "Physics", email: "lori@school.edu", img: avatar },
];

const AssignTeacherModal = ({ open, onClose, onAssign }) => {
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState(null);
    const filtered = teachers.filter(t => t.name.toLowerCase().includes(search.toLowerCase()) || t.subject.toLowerCase().includes(search.toLowerCase()));
    return (
        <Dialog open={open} onClose={onClose} className="fixed z-50 inset-0 flex items-center justify-center">
            <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
            <div className="relative bg-white rounded-2xl shadow-xl p-6 max-w-lg w-full mx-auto">
                <DialogTitle className="text-lg font-bold mb-4">Assign Teacher</DialogTitle>
                <input
                    type="text"
                    className="w-full px-4 py-2 mb-4 rounded-full bg-gray-100 focus:outline-none"
                    placeholder="Search teachers by name or subject..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <div className="max-h-80 overflow-y-auto flex flex-col gap-3 mb-4">
                    {filtered.length === 0 && <div className="text-center text-gray-400">No teachers found.</div>}
                    {filtered.map((t, i) => (
                        <div
                            key={i}
                            className={`flex items-center gap-4 p-3 rounded-xl border cursor-pointer transition ${selected === i ? 'border-orange-400 bg-orange-50' : 'border-gray-100 bg-white'} hover:border-orange-300`}
                            onClick={() => setSelected(i)}
                        >
                            <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-orange-100" />
                            <div className="flex-1 min-w-0">
                                <div className="font-semibold text-base text-gray-800 truncate">{t.name}</div>
                                <div className="text-xs text-gray-500 truncate">{t.subject}</div>
                                <div className="text-xs text-gray-400 truncate">{t.email}</div>
                            </div>
                            <input type="radio" checked={selected === i} readOnly className="accent-orange-400" />
                        </div>
                    ))}
                </div>
                <MainButton
                    disabled={selected === null}
                    onClick={() => { if (selected !== null) { onAssign(filtered[selected]); onClose(); } }}
                >
                    Assign
                </MainButton>
                <button onClick={onClose} className="mt-3 w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition">Cancel</button>
            </div>
        </Dialog>
    );
};

export default AssignTeacherModal;
