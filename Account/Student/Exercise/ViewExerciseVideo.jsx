import React, { useEffect, useRef, useState } from 'react';
import MainWrapper from '../../../../components/MainWrapper';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireAlt } from '@fortawesome/free-solid-svg-icons';
import MainTitle from '../../../../components/MainTitle';

export default function ViewExerciseVideo() {
    // Example video data (replace with real data as needed)
    const video = {
        title: 'Full Body Warmup',
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        thumb: '/src/assets/images/movement_med.png',
        duration: '10:00',
        calories: 50,
    };

    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const navigator = useNavigate();

    const handlePlayPause = () => {
        if (!playing) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
        setPlaying(!playing);
    };

    const handleTimeUpdate = () => {
        setCurrentTime(videoRef.current.currentTime);
    };

    const handleLoadedMetadata = () => {
        setDuration(videoRef.current.duration);
    };

    const handleSeek = (e) => {
        const percent = e.target.value;
        videoRef.current.currentTime = percent * duration;
        setCurrentTime(videoRef.current.currentTime);
    };

    const formatTime = (sec) => {
        if (!sec || isNaN(sec)) return '00:00';
        const m = Math.floor(sec / 60).toString().padStart(2, '0');
        const s = Math.floor(sec % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    };

    useEffect(() => {
        setTimeout(() => {
            navigator('/exercises/0/play/0/success');
        }, [3000]);
    }, [])

    return (
        <MainWrapper logged={true}>
            <main className="flex-1 overflow-y-auto p-4 lg:py-8 lg:pt-2 min-h-screen">
                <MainTitle title={video.title} buttons={[{ label: 'Back', }]} />
                <div className="w-full max-w-10xl mx-auto bg-orange-50 rounded-2xl shadow p-6 flex flex-col items-center">
                    <div className="w-full flex flex-col md:flex-col items-center gap-6">
                        <div className="w-full max-h-[400px] flex-shrink-0 flex items-center justify-center bg-white rounded-xl overflow-hidden">
                            <video
                                ref={videoRef}
                                src={video.src}
                                poster={video.thumb}
                                className="object-cover w-full h-full"
                                onTimeUpdate={handleTimeUpdate}
                                onLoadedMetadata={handleLoadedMetadata}
                                onPause={() => setPlaying(false)}
                                onPlay={() => setPlaying(true)}
                                controls={false}
                            />
                        </div>
                        <div className="flex-1 flex flex-col gap-3 w-full">
                            <div className="font-semibold text-lg text-gray-800 mb-1 line-clamp-2">{video.title}</div>
                            <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                                <span className="bg-white rounded-full px-3 py-1 shadow flex items-center gap-1"><FontAwesomeIcon icon={faFireAlt} className="text-orange-400" /> {video.calories} kcal</span>
                                <span className="bg-white rounded-full px-3 py-1 shadow">{video.duration}</span>
                            </div>
                            {/* Player controls */}
                            <div className="flex items-center gap-4 mt-2">
                                <button
                                    className="p-3 rounded-full bg-orange-400 hover:bg-orange-500 text-white shadow transition flex items-center justify-center w-12 h-12"
                                    onClick={handlePlayPause}
                                >
                                    {playing ? (
                                        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="7" y="6" width="3" height="12" rx="1.5" fill="#fff" /><rect x="14" y="6" width="3" height="12" rx="1.5" fill="#fff" /></svg>
                                    ) : (
                                        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="#fff" /></svg>
                                    )}
                                </button>
                                <span className="text-xs text-gray-500">{formatTime(currentTime)} / {formatTime(duration)}</span>
                            </div>
                            {/* Seek bar */}
                            <input
                                type="range"
                                min={0}
                                max={1}
                                step={0.01}
                                value={duration ? currentTime / duration : 0}
                                onChange={handleSeek}
                                className="w-full accent-orange-400 h-1 mt-2"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </MainWrapper>
    );
}
