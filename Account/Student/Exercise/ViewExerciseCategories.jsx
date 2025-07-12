import React, { useState } from 'react';
import MainWrapper from '../../../../components/MainWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFireAlt, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import MainTitle from '../../../../components/MainTitle';
import { Link } from 'react-router-dom';

const videoList = [
    {
        title: 'Full Body Warmup',
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        thumb: '/src/assets/images/movement_med.png',
        duration: '10:00',
        calories: 50,
    },
    {
        title: 'Cardio Blast',
        src: 'https://www.w3schools.com/html/movie.mp4',
        thumb: '/src/assets/images/zen_med.png',
        duration: '15:00',
        calories: 120,
    },
    {
        title: 'Stretch & Relax',
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        thumb: '/src/assets/images/mindful_med.png',
        duration: '8:30',
        calories: 30,
    },
];

export default function ViewExerciseCategories() {
    const [playingIdx, setPlayingIdx] = useState(null);

    return (
        <MainWrapper logged={true}>
            <main className="flex-1 overflow-y-auto p-4 lg:py-8 lg:pt-2 min-h-screen">
                <MainTitle title="Exercise Videos" buttons={[{ label: 'Back', }]} />
                <div className="w-full max-w-10xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {videoList.map((video, idx) => (
                        <Link to={`/exercises/${idx}/play/${idx}`}
                            key={video.title}
                            className="bg-white rounded-2xl shadow group transition flex flex-col overflow-hidden hover:shadow-xl border border-transparent hover:border-orange-300"
                        >
                            {/* Thumbnail */}
                            <div className="relative w-full aspect-video bg-gray-100 flex items-center justify-center overflow-hidden">
                                <img
                                    src={video.thumb}
                                    alt={video.title}
                                    className="object-cover w-full h-full transition group-hover:scale-105 duration-200"
                                />
                                <button
                                    className="absolute bottom-3 right-3 p-3 rounded-full bg-orange-400 hover:bg-orange-500 text-white shadow transition flex items-center justify-center w-12 h-12 z-10"
                                    onClick={e => { e.stopPropagation(); setPlayingIdx(idx === playingIdx ? null : idx); }}
                                >
                                    {playingIdx === idx ? <FontAwesomeIcon icon={faPause} size={20} /> : <FontAwesomeIcon icon={faPlay} size={20} />}
                                </button>
                            </div>
                            {/* Details */}
                            <div className="flex-1 flex flex-col justify-between px-6 py-4 w-full">
                                <div className="font-semibold text-lg text-gray-800 mb-1 line-clamp-2">{video.title}</div>
                                <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                                    <span className="bg-white rounded-full px-3 py-1 shadow flex items-center gap-1"><FontAwesomeIcon icon={faFireAlt} className="text-orange-400" /> {video.calories} kcal</span>
                                    <span className="bg-white rounded-full px-3 py-1 shadow">{video.duration}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
        </MainWrapper>
    );
}
