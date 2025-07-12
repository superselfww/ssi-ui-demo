import React, { useRef, useState } from 'react';
import MainWrapper from '../../../../components/MainWrapper';
import { useNavigate } from 'react-router-dom';

const FaceRecognition = () => {
    const videoRef = useRef(null);
    const [streaming, setStreaming] = useState(false);
    const [error, setError] = useState(null);
    const [progress, setProgress] = useState(0);
    const [progressInterval, setProgressInterval] = useState(null);
    const navigator = useNavigate();

    // Start webcam
    const startCamera = async () => {
        setError(null);
        if (!streaming) {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                videoRef.current.srcObject = stream;
                setStreaming(true);
                // Start progress bar animation
                setProgress(0);
                let progress = 0;
                const interval = setInterval(() => {
                    progress += 2;
                    setProgress(progress);
                    if (progress >= 100) {
                        clearInterval(interval);
                        setProgress(100);
                    }
                }, 30);
                setProgressInterval(interval);
            } catch {
                setError('Could not access camera. Please check your device permissions.');
            }
        }
    };

    // Stop webcam
    const stopCamera = () => {
        setError(null);
        if (videoRef.current && videoRef.current.srcObject) {
            videoRef.current.srcObject.getTracks().forEach(track => track.stop());
            videoRef.current.srcObject = null;
            setStreaming(false);
        }
        setProgress(0);
        let s = false;
        if (s) {
            startCamera()
        }
        if (progressInterval) clearInterval(progressInterval);
    };

    return (
        <MainWrapper logged={true}>
            <div className="flex flex-1 overflow-hidden min-h-screen">
                <main className="flex-1 overflow-y-auto p-4 lg:py-8 lg:pt-2 ">
                    <div className="w-full mx-auto mb-8">
                        <div className="bg-white md:bg-[#EE9737] shadow rounded-xl md:p-6 px-3 py-2">
                            <h1 className="text-lg md:text-2xl font-bold md:text-white mb-0">Face Recognition</h1>
                        </div>
                    </div>
                    <div className="max-w-xl mx-auto py-10 px-4">
                        <div className="bg-orange-50 rounded-xl shadow p-6 flex flex-col gap-8">
                            <div>
                                <h2 className="text-lg font-semibold mb-2 text-center">Move your face in the middle of square</h2>
                                <p className="text-sm text-gray-600 text-center mb-4">For best results, ensure your face is well-lit and fully visible in the camera. Remove hats or glasses, look straight ahead, and avoid strong backlighting. Click "Start Camera" to begin the scan, then follow any on-screen instructions until the scan is complete.</p>
                                <div className="flex flex-col items-center gap-4">
                                    <div className="rounded-full overflow-hidden border-4 border-orange-200 shadow-lg w-70 md:w-100 h-70 md:h-100 flex items-center justify-center bg-gray-100">
                                        <video ref={videoRef} autoPlay playsInline width={160} height={160} className="object-cover w-full h-full" />
                                    </div>
                                    {/* Scan Progress Bar */}
                                    <div className="w-full max-w-xs mx-auto">
                                        <div className="h-3 bg-orange-100 rounded-full overflow-hidden mt-2">
                                            <div
                                                className="h-full bg-orange-400 transition-all duration-300"
                                                style={{ width: `${progress}%` }}
                                            ></div>
                                        </div>
                                        {streaming && progress < 100 && (
                                            <div className="text-xs text-gray-500 text-center mt-1">Scanning... {progress}%</div>
                                        )}
                                        {streaming && progress === 100 && (
                                            <div className="text-xs text-green-600 text-center mt-1 font-semibold">Scan Complete!</div>
                                        )}
                                    </div>
                                    <div className="flex gap-2">
                                        {!streaming ? (
                                            <button onClick={() => { navigator('/emotional-recognition/view-result') }} className="px-4 py-2 bg-orange-500 text-white rounded shadow hover:bg-orange-600">Start Camera</button>
                                        ) : (
                                            <button onClick={stopCamera} className="px-4 py-2 bg-gray-300 text-gray-700 rounded shadow hover:bg-gray-400">Stop Camera</button>
                                        )}
                                    </div>
                                    {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </MainWrapper>
    );
};

export default FaceRecognition;
