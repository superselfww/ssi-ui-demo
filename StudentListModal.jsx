import { Dialog, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StudentListModal = ({ open, onClose, students }) => {
    const [search, setSearch] = useState("");
    const filtered = students.filter(s => s.name.toLowerCase().includes(search.toLowerCase()));
    return (
        <Dialog open={open} onClose={onClose} className="fixed z-50 inset-0 flex items-center justify-center">
            <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
            <div className="relative bg-white rounded-2xl shadow-xl p-6 max-w-lg w-full mx-auto">
                <DialogTitle className="text-lg font-bold mb-4">All Students</DialogTitle>
                <input
                    type="text"
                    className="w-full px-4 py-2 mb-4 rounded-full bg-gray-100 focus:outline-none"
                    placeholder="Search students..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <div className="max-h-96 overflow-y-auto grid grid-cols-1 sm:grid-cols-1 gap-4">
                    {filtered.length === 0 && <div className="col-span-2 text-center text-gray-400">No students found.</div>}
                    {filtered.map((s, i) => (
                        <div key={i} className="flex items-center gap-4 bg-gray-50 rounded-xl p-4 shadow-sm">
                            <img src={s.img} alt={s.name} className="w-14 h-14 rounded-full object-cover border border-gray-200" />
                            <div className="flex-1 min-w-0">
                                <div className="font-semibold text-base truncate">{s.name}</div>
                                <div className="text-xs text-gray-500 truncate">{s.school || 'School Name'}</div>
                                <div className="text-xs text-gray-400">Grade: {s.grade || '-'}</div>
                            </div>
                            <button className="bg-primary text-white rounded-lg px-4 py-2 flex items-center gap-2 font-semibold hover:bg-orange-500 transition text-sm">
                                <FontAwesomeIcon icon={faMessage} /> Chat
                            </button>
                        </div>
                    ))}
                </div>
                <button onClick={onClose} className="mt-6 px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-orange-500 transition w-full">Close</button>
            </div>
        </Dialog>
    );
};

export default StudentListModal;
