import React, { useState } from 'react';
import avatarImg from '../../assets/images/avatar.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUpload, faEllipsisV, faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import gameBg from '../../assets/images/games.png'; 
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { Dialog } from '@headlessui/react';

const posts = [
    {
        user: { name: 'Melisa Thomas', avatar: avatarImg },
        type: 'Birthday',
        text: 'Is Celebrating! her 18th Birthday',
        image: 'https://joinsuperself.com/wp-content/uploads/2025/06/e3ef494c2fe-1-scaled-1-1024x610.png',
        likes: 12,
        replies: 8,
    },
];

export default function CommunityView() {
    const [tab, setTab] = useState('All posts');
    const [postInput, setPostInput] = useState('');
    const [postImage, setPostImage] = useState(null);
    const [showReport, setShowReport] = useState(false);
    const [reportReason, setReportReason] = useState('Spam');
    const [reportDetails, setReportDetails] = useState('');
    const reportOptions = [
        'Spam',
        'Inappropriate Content',
        'Harassment or Bullying',
        'Other',
    ];

    // Confirm actions with SweetAlert
    const handleClear = () => {
        Swal.fire({
            title: 'Clear Chat?',
            text: 'Are you sure you want to clear all chat history? This cannot be undone.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, clear it',
            cancelButtonText: 'Cancel',
            customClass: { popup: 'rounded-2xl' },
        }).then((result) => {
            if (result.isConfirmed) {
                // Clear chat logic here
                Swal.fire('Cleared!', 'Chat history has been cleared.', 'success');
            }
        });
    };
    const handleLeave = () => {
        Swal.fire({
            title: 'Leave Community?',
            text: 'Are you sure you want to leave this community?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, leave',
            cancelButtonText: 'Cancel',
            customClass: { popup: 'rounded-2xl' },
        }).then((result) => {
            if (result.isConfirmed) {
                // Leave community logic here
                Swal.fire('Left!', 'You have left the community.', 'success');
            }
        });
    };

    const handleReport = () => {
        setShowReport(true);
    };

    const handleReportSubmit = (e) => {
        e.preventDefault();
        setShowReport(false);
        Swal.fire({
            title: 'Report Submitted',
            text: 'Thank you for helping us keep the community safe. Our moderators will review your report.',
            icon: 'success',
            customClass: { popup: 'rounded-2xl' },
        });
        setReportReason('Spam');
        setReportDetails('');
    };

    return (
        <div className="w-full bg-white shadow relative flex flex-col rounded-2xl overflow-hidden">
            {/* Community Banner */}
            <div className="relative w-full h-48">
                <img src={gameBg} alt="Community Banner" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-b-2xl" />
                <div className="absolute bottom-4 left-6 flex items-center gap-3">
                    <div className="bg-white/80 rounded-full px-4 py-2 flex items-center gap-2 shadow">
                        <FontAwesomeIcon icon={faUsers} className="text-primary" />
                        <span className="text-gray-800 font-bold">2.3k</span>
                        <span className="text-xs text-gray-500">Members</span>
                    </div>
                </div>
            </div>
            <div className="px-4 pt-4 flex-1 min-h-0 overflow-y-auto">
                <div className="font-bold text-2xl mb-1">General Magic</div>
                <div className="text-gray-400 text-base mb-4">Lorem ipsum dolor sit amet, consectetur</div>
                {/* Tabs */}
                <div className="flex gap-2 mb-6">
                    {['All posts', 'Trending', 'Photos'].map((t) => (
                        <button key={t} className={`px-5 py-2 rounded-full font-semibold text-base transition-all duration-150 ${tab === t ? 'bg-primary text-white shadow' : 'bg-gray-100 text-gray-700 hover:bg-orange-50'}`} onClick={() => setTab(t)}>{t}</button>
                    ))}
                </div>
                {/* Post input modern card */}
                <div className="flex items-start gap-3 mb-8 bg-gray-50 rounded-2xl p-4 shadow-sm">
                    <img src={avatarImg} alt="Me" className="w-12 h-12 rounded-full object-cover border-2 border-orange-200" />
                    <div className="flex-1">
                        <input
                            type="text"
                            className="w-full px-4 py-3 rounded-full bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-200 text-base shadow-sm"
                            placeholder="What's on your mind?"
                            value={postInput}
                            onChange={e => setPostInput(e.target.value)}
                        />
                        {postImage && (
                            <div className="mt-3 flex items-center gap-2">
                                <img src={postImage} alt="preview" className="w-24 h-24 object-cover rounded-xl border" />
                                <button onClick={() => setPostImage(null)} className="text-gray-400 text-2xl hover:text-red-400">&times;</button>
                            </div>
                        )}
                    </div>
                    <label className="flex items-center cursor-pointer ml-2">
                        <input type="file" accept="image/*" className="hidden" onChange={e => {
                            const file = e.target.files[0];
                            if (file) {
                                const reader = new FileReader();
                                reader.onload = ev => setPostImage(ev.target.result);
                                reader.readAsDataURL(file);
                            }
                        }} />
                        <span className="bg-primary text-white px-4 py-2 rounded-xl font-semibold flex items-center gap-2 shadow hover:bg-orange-500 transition">
                            <FontAwesomeIcon icon={faUpload} /> Upload
                        </span>
                    </label>
                </div>
                {/* Highlights modern feed */}
                <div className="font-bold text-lg mb-3">Highlights</div>
                <div className="flex flex-col gap-6">
                    {posts.map((p, i) => (
                        <div key={i} className="bg-white rounded-2xl shadow-md p-4 flex flex-col gap-2">
                            <div className="flex items-center gap-3 mb-1">
                                <img src={p.user.avatar} alt={p.user.name} className="w-10 h-10 rounded-full object-cover border-2 border-orange-200" />
                                <div className="font-semibold text-base">{p.user.name}</div>
                                <span className="ml-2 text-xs bg-orange-100 text-orange-500 rounded-full px-3 py-1 font-semibold">{p.type}</span>
                                <button className="ml-auto text-gray-400 hover:text-orange-400">
                                    <FontAwesomeIcon icon={faEllipsisV} />
                                </button>
                            </div>
                            <div className="text-base mb-1"><span className="font-bold">{p.type === 'Birthday' ? '🎉' : ''} {p.type}!</span> {p.text}</div>
                            {p.image && <img src={p.image} alt="post" className="w-full rounded-xl object-cover mb-2 max-h-72" />}
                            <div className="flex gap-6 text-gray-400 text-base mb-2">
                                <button className="flex items-center gap-1 hover:text-red-400 transition"><FontAwesomeIcon icon={faHeart} /> {p.likes} Likes</button>
                                <button className="flex items-center gap-1 hover:text-orange-400 transition"><FontAwesomeIcon icon={faComment} /> {p.replies} Replies</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Fixed bottom menu inside the main element, not body */}
            <div className="w-full bg-white z-40 flex flex-col divide-y divide-gray-100 rounded-b-2xl mt-auto shadow">
                <button className="w-full text-left px-4 py-3 text-gray-500 hover:bg-gray-50" onClick={handleClear}>Clear chat</button>
                <button className="w-full text-left px-4 py-3 text-red-500 hover:bg-gray-50" onClick={handleLeave}>Leave Community</button>
                <button className="w-full text-left px-4 py-3 text-red-600 font-bold hover:bg-gray-50" onClick={() => handleReport(true)}>Report Community</button>
            </div>
            {/* Report Community Modal */}
            <Dialog open={showReport} onClose={() => setShowReport(false)} className="fixed z-50 inset-0 overflow-y-auto">
                <div className="flex items-center justify-center min-h-screen px-4">
                    <Dialog.Overlay className="fixed inset-0 bg-black/30" />
                    <div className="relative bg-white rounded-2xl shadow-xl max-w-md w-full mx-auto p-6 z-50">
                        <Dialog.Title className="text-xl font-bold mb-2 text-red-600">Report Community</Dialog.Title>
                        <div className="mb-4 text-gray-600">Please select a reason and provide details if needed.</div>
                        <div className="flex flex-col gap-2 mb-4">
                            {reportOptions.map(option => (
                                <label key={option} className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="reportReason"
                                        value={option}
                                        checked={reportReason === option}
                                        onChange={() => setReportReason(option)}
                                        className="accent-red-500"
                                    />
                                    <span>{option}</span>
                                </label>
                            ))}
                        </div>
                        <textarea
                            className="w-full border border-gray-200 rounded-xl p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-red-200 min-h-[80px]"
                            placeholder="Additional details (optional)"
                            value={reportDetails}
                            onChange={e => setReportDetails(e.target.value)}
                        />
                        <div className="flex justify-end gap-2">
                            <button
                                className="px-4 py-2 rounded-lg bg-gray-100 text-gray-600 font-semibold hover:bg-gray-200"
                                onClick={() => setShowReport(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-4 py-2 rounded-lg bg-red-600 text-white font-bold hover:bg-red-700"
                                onClick={() => {
                                    handleReportSubmit();
                                    setShowReport(false);
                                    Swal.fire('Reported!', 'Thank you for reporting. Our team will review this community.', 'success');
                                    setReportReason('Spam');
                                    setReportDetails('');
                                }}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}
