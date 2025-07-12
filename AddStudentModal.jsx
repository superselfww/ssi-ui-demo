import { Dialog, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import avatar from "../../assets/images/avatar.png";
import MainButton from "../buttons/MainButton";

// Example students (replace with real data)
const allStudents = [
    { name: "Bertha", email: "bertha@student.com", img: avatar },
    { name: "Robin", email: "robin@student.com", img: avatar },
    { name: "Nicole", email: "nicole@student.com", img: avatar },
    { name: "Kerry", email: "kerry@student.com", img: avatar },
];

const AddStudentModal = ({ open, onClose, onAdd }) => {
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState([]);
    const filtered = allStudents.filter(s => s.name.toLowerCase().includes(search.toLowerCase()) || s.email.toLowerCase().includes(search.toLowerCase()));
    const toggleSelect = idx => setSelected(sel => sel.includes(idx) ? sel.filter(i => i !== idx) : [...sel, idx]);
    return (
        <Dialog open={open} onClose={onClose} className="fixed z-50 inset-0 flex items-center justify-center">
            <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
            <div className="relative bg-white rounded-2xl shadow-xl p-6 max-w-lg w-full mx-auto">
                <DialogTitle className="text-lg font-bold mb-4">Add Student</DialogTitle>
                <input
                    type="text"
                    className="w-full px-4 py-2 mb-4 rounded-full bg-gray-100 focus:outline-none"
                    placeholder="Search students by name or email..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <div className="max-h-80 overflow-y-auto flex flex-col gap-3 mb-4">
                    {filtered.length === 0 && <div className="text-center text-gray-400">No students found.</div>}
                    {filtered.map((s, i) => (
                        <div
                            key={i}
                            className={`flex items-center gap-4 p-3 rounded-xl border cursor-pointer transition ${selected.includes(i) ? 'border-orange-400 bg-orange-50' : 'border-gray-100 bg-white'} hover:border-orange-300`}
                            onClick={() => toggleSelect(i)}
                        >
                            <img src={s.img} alt={s.name} className="w-12 h-12 rounded-full object-cover border-2 border-orange-100" />
                            <div className="flex-1 min-w-0">
                                <div className="font-semibold text-base text-gray-800 truncate">{s.name}</div>
                                <div className="text-xs text-gray-400 truncate">{s.email}</div>
                            </div>
                            <input type="checkbox" checked={selected.includes(i)} readOnly className="accent-orange-400" />
                        </div>
                    ))}
                </div>
                <MainButton
                    className="w-full bg-orange-500 text-white rounded-full py-3 font-semibold text-lg mt-2 disabled:opacity-50"
                    disabled={selected.length === 0}
                    onClick={() => { if (selected.length > 0) { onAdd(selected.map(i => filtered[i])); onClose(); } }}
                >
                    Add Selected
                </MainButton>
                <button onClick={onClose} className="mt-3 w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition">Cancel</button>
            </div>
        </Dialog>
    );
};

export default AddStudentModal;
