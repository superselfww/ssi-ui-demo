import React, { useEffect, useState, useRef } from 'react';
import MainWrapper from '../../components/MainWrapper';
import avatarImg from '../../assets/images/avatar.png';
import peacefulImg from '../../assets/images/games.png';
import excitedImg from '../../assets/images/games.png';
import happyImg from '../../assets/images/games.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faPlusCircle, faMicrophone, faStopCircle, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import CommunityView from './CommunityView';
import { getData } from '../../utils/Storage';

const generalChats = [
    {
        name: 'Azeela Sheikh',
        message: 'Hope everything go well with this assignment',
        avatar: avatarImg,
        unread: true,
        online: true,
    },
    {
        name: 'Ahmed Meerani',
        message: 'I am doing great with my emotional stage.',
        avatar: avatarImg,
        unread: false,
        online: false,
    },
    {
        name: 'Haselwood',
        message: 'I bet it was Alex’s mistake.',
        avatar: avatarImg,
        unread: true,
        online: true,
    },
    {
        name: 'Williamson',
        message: 'I have been there multiple times but could not....',
        avatar: avatarImg,
        unread: false,
        online: false,
    },
    {
        name: 'Alex Buttler',
        message: 'Hey Bro! How are you????',
        avatar: avatarImg,
        unread: false,
        online: true,
    },
    {
        name: 'Williamson',
        message: 'I have been there multiple times but could not....',
        avatar: avatarImg,
        unread: false,
        online: false,
    },
];

const communities = [
    {
        title: 'Emotional Support Community',
        desc: 'A Safe Space to Share, Connect, and Find Emotional Strength Together',
        image: peacefulImg,
        members: 29,
    },
    {
        title: 'LGBTQ+ - In the World',
        desc: 'A Safe Space to Share, Connect, and Find Emotional Strength Together',
        image: excitedImg,
        members: 23,
    },
    {
        title: 'Health Care Community',
        desc: 'Your Go-To Hub for Health Tips, Expert Advice, and Wellness Support',
        image: happyImg,
        members: 25,
    },
];

const ChatBox = ({ contact, onBack }) => {
    const [messages, setMessages] = useState([
        { fromMe: false, text: contact.message, date: '2025-06-09 09:00' },
        { fromMe: true, text: 'Hi! How are you?', date: '2025-06-09 09:01' },
        { fromMe: false, text: 'I am good, thanks for asking!', date: '2025-06-09 09:02' },
    ]);
    const [input, setInput] = useState('');
    const [file, setFile] = useState(null);
    const [search, setSearch] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [recording, setRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [audioChunks, setAudioChunks] = useState([]);
    const [playingIndex, setPlayingIndex] = useState(null);
    const [audioRefs, setAudioRefs] = useState([]);
    const [audioProgress, setAudioProgress] = useState({}); // { [index]: percent }
    const waveformRefs = useRef([]);

    useEffect(() => {
        setAudioRefs((refs) =>
            Array(messages.length)
                .fill()
                .map((_, i) => refs[i] || React.createRef())
        );
    }, [messages.length]);

    const handleSend = () => {
        if (input.trim() || file) {
            setMessages([
                ...messages,
                { fromMe: true, text: input, file, date: new Date().toLocaleString() },
            ]);
            setInput('');
            setFile(null);
        }
    };

    const filteredMessages = showSearch && search
        ? messages.filter(m => (m.text && m.text.toLowerCase().includes(search.toLowerCase())))
        : messages;

    const handleStartRecording = async () => {
        if (!navigator.mediaDevices) {
            alert('Audio recording not supported in this browser.');
            return;
        }
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const recorder = new window.MediaRecorder(stream);
            setMediaRecorder(recorder);
            setAudioChunks([]);
            recorder.ondataavailable = (e) => {
                if (e.data.size > 0) setAudioChunks((prev) => [...prev, e.data]);
            };
            recorder.onstop = () => {
                const blob = new Blob(audioChunks, { type: 'audio/webm' });
                setMessages([
                    ...messages,
                    { fromMe: true, audio: blob, date: new Date().toLocaleString() },
                ]);
                setAudioChunks([]);
            };
            recorder.start();
            setRecording(true);
        } catch (err) {
            alert('Could not start recording: ' + err.message);
        }
    };

    const handleStopRecording = () => {
        if (mediaRecorder) {
            mediaRecorder.stop();
            setRecording(false);
        }
    };

    const handlePlayAudio = (i) => {
        if (audioRefs[i]?.current) {
            if (playingIndex === i) {
                audioRefs[i].current.pause();
                setPlayingIndex(null);
            } else {
                if (playingIndex !== null && audioRefs[playingIndex]?.current) {
                    audioRefs[playingIndex].current.pause();
                    audioRefs[playingIndex].current.currentTime = 0;
                }
                audioRefs[i].current.play();
                setPlayingIndex(i);
            }
        }
    };

    // Replace drawWaveform with real waveform rendering using Web Audio API
    const drawWaveform = (audioBlob, canvas) => {
        if (!canvas || !audioBlob) return;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const reader = new FileReader();
        reader.onload = function(ev) {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            audioContext.decodeAudioData(ev.target.result, (buffer) => {
                const rawData = buffer.getChannelData(0);
                const samples = canvas.width;
                const blockSize = Math.floor(rawData.length / samples);
                const filteredData = [];
                for (let i = 0; i < samples; i++) {
                    let sum = 0;
                    for (let j = 0; j < blockSize; j++) {
                        sum += Math.abs(rawData[i * blockSize + j]);
                    }
                    filteredData.push(sum / blockSize);
                }
                ctx.strokeStyle = '#fff';
                ctx.lineWidth = 2;
                ctx.beginPath();
                for (let x = 0; x < samples; x++) {
                    const y = 20 + filteredData[x] * 18;
                    if (x === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.stroke();
            });
        };
        reader.readAsArrayBuffer(audioBlob);
    };

    return (
        <div className="flex flex-col h-full w-full bg-white rounded-lg shadow-lg">
            <div className="flex items-center gap-3 border-b px-4 py-3 relative">
                <button onClick={onBack} className="lg:hidden mr-2 text-gray-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <div className="relative">
                    <img src={contact.avatar} alt={contact.name} className="w-10 h-10 rounded-full object-cover" />
                    {contact.online && <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full" />}
                </div>
                <div className="flex-1 min-w-0">
                    <div className="font-semibold text-base truncate">{contact.name}</div>
                    <div className="text-xs text-gray-400">{contact.online ? 'Online' : 'Offline'}</div>
                </div>
                <button onClick={() => setShowSearch(s => !s)} className="px-2 py-1 rounded hover:bg-gray-100 text-gray-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
                </button>
                <div className="relative">
                    <button onClick={() => setDropdownOpen(v => !v)} className="px-2 py-1 rounded hover:bg-gray-100 text-gray-500">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="1.5" /><circle cx="19.5" cy="12" r="1.5" /><circle cx="4.5" cy="12" r="1.5" /></svg>
                    </button>
                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow z-10">
                            <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm" onClick={() => { setDropdownOpen(false); alert('Block user'); }}>Block</button>
                            <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm" onClick={() => { setDropdownOpen(false); alert('Report user'); }}>Report</button>
                        </div>
                    )}
                </div>
            </div>
            {showSearch && (
                <div className="flex items-center border-b px-4 py-2 bg-gray-50 gap-2">
                    <input
                        type="text"
                        className="flex-1 px-4 py-2 rounded-full bg-gray-100 focus:outline-none"
                        placeholder="Search in chat..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        autoFocus
                    />
                </div>
            )}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2 bg-gray-50">
                {filteredMessages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.fromMe ? 'justify-end' : 'justify-start'}`}>
                        <div className={`px-4 py-2 rounded-2xl max-w-xs ${msg.fromMe ? 'bg-orange-400 text-white' : 'bg-gray-200 text-gray-800'}`}>
                            {msg.audio ? (
                                <div className="flex items-center gap-2 w-full min-w-[180px]">
                                    <button
                                        className="focus:outline-none"
                                        onClick={() => handlePlayAudio(i)}
                                        aria-label={playingIndex === i ? 'Pause' : 'Play'}
                                    >
                                        <FontAwesomeIcon icon={playingIndex === i ? faPause : faPlay} className="text-lg" />
                                    </button>
                                    <canvas
                                        ref={el => {
                                            waveformRefs.current[i] = el;
                                            if (el && msg.audio) drawWaveform(msg.audio, el);
                                        }}
                                        width={80}
                                        height={40}
                                        className="mx-2 rounded bg-white/20"
                                    />
                                    <audio
                                        ref={audioRefs[i]}
                                        src={URL.createObjectURL(msg.audio)}
                                        onEnded={() => setPlayingIndex(null)}
                                        onPause={() => setPlayingIndex(null)}
                                        onTimeUpdate={e => {
                                            setAudioProgress(p => ({ ...p, [i]: (e.target.currentTime / e.target.duration) * 100 }));
                                        }}
                                        style={{ display: 'none' }}
                                    />
                                    <div className="flex-1 h-2 bg-white/30 rounded-full overflow-hidden mx-2 min-w-[60px]">
                                        <div
                                            className="h-2 bg-white rounded-full transition-all"
                                            style={{ width: `${audioProgress[i] || 0}%` }}
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div>{msg.text}</div>
                            )}
                            {msg.file && (
                                <div className="mt-2">
                                    <a href={URL.createObjectURL(msg.file)} download={msg.file.name} className="text-xs text-blue-600 underline">{msg.file.name}</a>
                                </div>
                            )}
                            <div className="text-xs text-gray-300 mt-1 text-right">{msg.date}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center border-t px-4 py-3 bg-white gap-2">
                <label className="cursor-pointer flex items-center">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.586-6.586a2 2 0 10-2.828-2.828z" /></svg>
                    <input type="file" className="hidden" onChange={e => setFile(e.target.files[0])} />
                </label>
                <button
                    onClick={recording ? handleStopRecording : handleStartRecording}
                    className={`flex items-center justify-center w-10 h-10 rounded-full ${recording ? 'bg-red-500 animate-pulse' : 'bg-gray-100 hover:bg-orange-100'} text-gray-700 focus:outline-none`}
                    title={recording ? 'Stop Recording' : 'Record Voice Message'}
                >
                    <FontAwesomeIcon icon={recording ? faStopCircle : faMicrophone} className={recording ? 'text-white' : 'text-orange-500'} />
                </button>
                <input
                    type="text"
                    className="flex-1 px-4 py-2 rounded-full bg-gray-100 focus:outline-none"
                    placeholder="Type a message..."
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSend()}
                />
                <button onClick={handleSend} className="ml-2 bg-orange-500 text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2">
                    <FontAwesomeIcon icon={faPaperPlane} className="text-white" />
                    Send
                </button>
            </div>
        </div>
    );
};

const ChatWelcome = () => (
    <div className="flex flex-col flex-1 min-h-0 h-full items-center justify-center bg-white rounded-lg shadow-lg text-center p-8">
        <div className="text-3xl mb-2">💬</div>
        <div className="font-bold text-xl mb-2">Welcome to Super-Self Chat</div>
        <div className="text-gray-500 mb-4">Select a contact to start chatting. You can send messages and attach files.</div>
    </div>
);

const CommunityChatBox = ({ community, onBack, onShowCommunityView }) => {
    // Example post and replies (replace with real data as needed)
    const post = {
        user: {
            name: 'Melisa Thomas',
            avatar: avatarImg,
        },
        text: "Celebrating! her 18th Birthday",
        image: 'https://images.unsplash.com/photo-1738680815806-a2f7350b558d?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        date: 'Thursday 24, 2022',
    };
    const [replies, setReplies] = useState([
        { name: 'Astor', text: 'OoOo, Partyyyyyyy!!!!!' },
        { name: 'Astor', text: 'HBD Cutie' },
        { name: 'Khalab', text: 'HBD Dear and when is the party' },
    ]);
    const [input, setInput] = useState('');
    const [showInsertPost, setShowInsertPost] = useState(false);
    const [selectedPostType, setSelectedPostType] = useState('Birthday');
    const [myPost, setMyPost] = useState(null);
    const [myPostImage, setMyPostImage] = useState(null);
    const [myPostDesc, setMyPostDesc] = useState('');
    const postTypeOptions = ['Birthday', 'Anniversary', 'Achievement', 'Other'];

    const handleSend = () => {
        if (input.trim()) {
            setReplies([...replies, { name: 'Me', text: input }]);
            setInput('');
        }
    };

    return (
        <div className="flex flex-col h-full w-full bg-white rounded-lg shadow-lg">
            {/* Post Header */}
            <div className="flex items-center gap-3 px-4 pt-4 pb-2">
                <button onClick={onBack} className="lg:hidden mr-2 text-gray-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <img src={community.image} alt={community.title} className="w-10 h-10 rounded-full object-cover" />
                <button onClick={onShowCommunityView} className="font-semibold text-base truncate flex items-center gap-2 text-left hover:underline focus:outline-none">
                    <img src={post.user.avatar} alt={post.user.name} className="w-6 h-6 rounded-full object-cover" />
                    <span>{community.title}</span>
                </button>
                <div className="flex-1 min-w-0" />
                <button className="px-2 py-1 rounded hover:bg-gray-100 text-gray-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="1.5" /><circle cx="19.5" cy="12" r="1.5" /><circle cx="4.5" cy="12" r="1.5" /></svg>
                </button>
            </div>
            {/* Post Content */}
            <div className='overflow-y-auto'>
                <div className="px-4 pb-2">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <img src={avatarImg} alt="Me" className="w-10 h-10 rounded-full object-cover" />
                            <div>
                                <div className="font-semibold">Luqman Sardar</div>
                            </div>
                        </div>
                        <div className="font-semibold mb-1">{post.text}</div>
                        <img src={post.image} alt="post" className="w-full rounded-xl object-cover mb-2 max-w-[200px]" />
                    </div>
                    <div className="flex gap-4 text-gray-400 text-sm mb-2">
                        <button className="flex items-center gap-1 hover:text-orange-500"><FontAwesomeIcon icon={["far", "thumbs-up"]} className="text-base" /> Like</button>
                        <button className="flex items-center gap-1 hover:text-orange-500"><FontAwesomeIcon icon={["far", "comment"]} className="text-base" /> Reply now</button>
                    </div>
                    <div className='flex justify-center'>
                        <button className="border border-orange-400 text-orange-400 rounded-lg px-6 py-2 font-semibold mb-2 hover:bg-orange-50 transition">Wish Melisa</button>
                    </div>
                    {/* Show my post as a card if exists */}
                    {myPost && (
                        <div className="bg-white rounded-xl shadow p-4 mb-4 mt-2">
                            <div className="flex items-center gap-3 mb-2">
                                <img src={avatarImg} alt="Me" className="w-10 h-10 rounded-full object-cover" />
                                <div>
                                    <div className="font-semibold">Luqman Sardar</div>
                                    <div className="text-xs text-gray-400 mb-1">{selectedPostType}</div>
                                </div>
                            </div>
                            {myPostImage && (
                                <div className="relative mb-2 w-32 h-24">
                                    <img src={myPostImage} alt="post" className="w-full h-full object-cover rounded-lg" />
                                </div>
                            )}
                            <div className="bg-gray-50 rounded-lg px-4 py-2 min-h-[60px] text-gray-700 whitespace-pre-line">{myPostDesc}</div>
                        </div>
                    )}
                </div>
                {/* Replies */}
                <div className="flex-1  px-4 pb-2 space-y-2">
                    {replies.map((msg, i) => (
                        <div key={i} className="flex items-start gap-2">
                            <img src={avatarImg} alt={msg.name} className="w-7 h-7 rounded-full object-cover mt-1" />
                            <div>
                                <div className="text-xs text-gray-400 mb-1">{msg.name}</div>
                                <div className="bg-gray-100 rounded-2xl px-4 py-2 text-gray-800 inline-block mb-1 max-w-xs">{msg.text}</div>
                            </div>
                        </div>
                    ))}
                    <div className="text-xs text-gray-300 mt-2">Today, 10 am</div>
                </div>
            </div>
            {/* Insert Post Toggle & Message Input */}
            <div className="flex items-center border-t px-4 py-3 bg-white gap-2 relative">
                <button onClick={() => setShowInsertPost(v => !v)} className="bg-gray-100 text-gray-500 px-3 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-orange-50 transition" title="Insert Post">
                    <FontAwesomeIcon icon={faPlusCircle} />
                </button>
                {showInsertPost && (
                    <div className="absolute left-1/2 top-[-420px] -translate-x-1/2 w-[95vw] max-w-md bg-white border rounded-xl shadow-lg p-6 z-20 flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <img src={avatarImg} alt="Me" className="w-12 h-12 rounded-full object-cover" />
                            <div className="font-semibold text-lg">Luqman Sardar</div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Celebration</label>
                            <select value={selectedPostType} onChange={e => setSelectedPostType(e.target.value)} className="w-full rounded-lg bg-gray-100 px-3 py-2">
                                {postTypeOptions.map(type => <option key={type} value={type}>{type}</option>)}
                            </select>
                        </div>
                        <div className="flex items-center gap-3">
                            {myPostImage && (
                                <div className="relative w-20 h-20">
                                    <img src={myPostImage} alt="post" className="w-full h-full object-cover rounded-lg" />
                                    <button onClick={() => setMyPostImage(null)} className="absolute -top-2 -right-2 bg-white border border-gray-300 rounded-full w-6 h-6 flex items-center justify-center text-gray-500 shadow"><span>&times;</span></button>
                                </div>
                            )}
                            <label className="flex flex-col items-center justify-center w-20 h-20 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                                <input type="file" accept="image/*" className="hidden" onChange={e => {
                                    const file = e.target.files[0];
                                    if (file) {
                                        const reader = new FileReader();
                                        reader.onload = ev => setMyPostImage(ev.target.result);
                                        reader.readAsDataURL(file);
                                    }
                                }} />
                                <span className="text-2xl text-gray-400">+</span>
                            </label>
                        </div>
                        <textarea
                            className="w-full min-h-[100px] rounded-lg bg-gray-100 px-3 py-2 resize-none"
                            placeholder="Write Description"
                            value={myPostDesc}
                            onChange={e => setMyPostDesc(e.target.value)}
                        />
                        <button className="w-full bg-orange-500 text-white rounded-full py-3 font-semibold text-lg mt-2" onClick={() => {
                            setMyPost('1'); // just a flag to show the card
                            setShowInsertPost(false);
                        }}>Post</button>
                    </div>
                )}
                <input
                    type="text"
                    className="flex-1 px-4 py-2 rounded-full bg-gray-100 focus:outline-none"
                    placeholder="Type a message..."
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSend()}
                    disabled={showInsertPost}
                />
                <button onClick={handleSend} className="ml-2 bg-orange-500 text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2" disabled={showInsertPost}>
                    <FontAwesomeIcon icon={faPaperPlane} className="text-white" />
                </button>
            </div>
        </div>
    );
};

const Chat = () => {
    const [tab, setTab] = useState('general');
    const [search, setSearch] = useState('');
    const [selectedContact, setSelectedContact] = useState(null);
    const [selectedCommunity, setSelectedCommunity] = useState(null);
    const [showCommunityView, setShowCommunityView] = useState(false);
    const [mobileShowBox, setMobileShowBox] = useState(false);
    const [userData, setUserData] = useState(getData('user'));
    const [tabs, setTabs] = useState([{ name: 'General', value: 'general' },{ name: 'Community', value: 'community' }]);

    useEffect(() => {
        if(userData?.role === 5){
            setTabs([{ name: 'Childs', value: 'childs'},{name:"Teachers" , value: 'teachers'}]);
            setTab('childs');
        }
        if(userData?.role === 9){
            setUserData(null);
        }
    },[userData]);

    // Reset selectedContact when switching tabs
    const handleTab = (newTab) => {
        setTab(newTab);
        setSelectedContact(null);
        setSelectedCommunity(null);
        setMobileShowBox(false);
    };

    // Mobile: show chat box when contact/community selected
    const handleContactSelect = (chat) => {
        setSelectedContact(chat);
        setSelectedCommunity(null);
        setMobileShowBox(true);
    };
    const handleCommunitySelect = (community) => {
        setSelectedCommunity(community);
        setSelectedContact(null);
        setMobileShowBox(true);
    };
    const handleBack = () => {
        setSelectedContact(null);
        setSelectedCommunity(null);
        setMobileShowBox(false);
    };

    return (
        <MainWrapper logged={true}>
            <div className="w-full  mx-auto py-4 flex flex-col md:px-3 lg:flex-row gap-4 flex-1 min-h-screen relative">
                <div className='w-full flex flex-col lg:flex-row gap-4  relative h-full lg:h-[800px]' >
                    <div className={`bg-white rounded-lg  min-h-[600px] shadow-lg h-full flex-1 lg:max-w-xs ${mobileShowBox ? 'fixed inset-0 z-50 bg-white transition-transform duration-300 translate-x-[-100vw] lg:static lg:translate-x-0' : 'transition-transform duration-300 translate-x-0'}`}> {/* Slide out on mobile */}
                        <div className="flex  mb-2 ">
                            {tabs.map((t, i) => (
                                <button
                                    key={i}
                                    data={t?.value}
                                    className={`flex-1 py-2 font-semibold ${tab === t.value ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}
                                    onClick={() => handleTab(t.value)}
                                >
                                    {t.name}
                                </button>
                            ))}
                        </div>
                        <div className="mb-2 px-3">
                            <input
                                type="text"
                                className="w-full px-4 py-2 rounded-full bg-gray-100 focus:outline-none"
                                placeholder={tab === 'teachers' ? 'Search for teachers' : tab === 'general' ? 'Search for chat' : tab === 'childs' ? 'Search for childs' : 'Search for community'}
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                            />
                        </div>
                        {(tab === 'general' || tab === 'childs' || tab === 'teachers') ? (
                            <div className="flex flex-col gap-2 overflow-y-auto px-3 pb-3" style={{ maxHeight: 'calc(80vh - 120px)' }}>
                                {generalChats.filter(c => c.name.toLowerCase().includes(search.toLowerCase()) || c.message.toLowerCase().includes(search.toLowerCase())).map((chat, i) => (
                                    <button key={i} onClick={() => handleContactSelect(chat)} className="flex items-center gap-3 w-full bg-white rounded-lg px-3 py-2 shadow-sm hover:bg-orange-50 transition">
                                        <div className="relative">
                                            <img src={chat.avatar} alt={chat.name} className="w-10 h-10 rounded-full object-cover" />
                                            {chat.online && <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full" />}
                                        </div>
                                        <div className="flex-1 min-w-0 text-left">
                                            <div className="font-semibold text-sm truncate">{chat.name}</div>
                                            <div className="text-xs text-gray-500 truncate">{chat.message}</div>
                                        </div>
                                        {chat.unread && <span className="w-5 h-5 flex items-center justify-center bg-primary text-white text-xs rounded-full">1</span>}
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <CommunityList communities={communities} search={search} onSelect={handleCommunitySelect} />
                        )}
                    </div>
                    {/* Chat Box or CommunityView */}
                    <div className={`flex-1 h-full w-full  min-h-[600px] relative flex ${mobileShowBox ? 'fixed inset-0 z-50 bg-white transition-transform duration-300 translate-x-0 lg:static lg:translate-x-0' : 'transition-transform duration-300 translate-x-[100vw] lg:translate-x-0'}`}> {/* Slide in on mobile, now flex */}
                        {showCommunityView ? (
                            <CommunityView />
                        ) : selectedContact ? (
                            <ChatBox contact={selectedContact} onBack={handleBack} />
                        ) : selectedCommunity ? (
                            <CommunityChatBox community={selectedCommunity} onBack={handleBack} onShowCommunityView={() => setShowCommunityView(true)} />
                        ) : (
                            <div className="hidden lg:flex flex-1 min-h-0"><ChatWelcome /></div> // Hide welcome on mobile, stretch on desktop
                        )}
                    </div>
                </div>
            </div>
        </MainWrapper>
    );
};

const CommunityList = ({ communities, search, onSelect }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto px-3 pb-3" style={{ maxHeight: 'calc(80vh - 120px)' }}>
        {communities.filter(c => c.title.toLowerCase().includes(search.toLowerCase())).map((com, i) => (
            <button key={i} onClick={() => onSelect(com)} className="bg-white rounded-xl shadow-sm flex flex-col overflow-hidden hover:bg-orange-50 transition">
                <img src={com.image} alt={com.title} className="w-full h-28 object-cover" />
                <div className="flex-1 flex flex-col p-3">
                    <div className="font-semibold text-base mb-1 line-clamp-2">{com.title}</div>
                    <div className="text-xs text-gray-500 mb-1 line-clamp-2">{com.desc}</div>
                    <div className="text-xs text-gray-400 mt-auto">{com.members} members</div>
                </div>
            </button>
        ))}
    </div>
);

export default Chat;
