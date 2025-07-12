import React from 'react';
import Avatar from '../../../assets/images/avatar.png';
import MainWrapper from '../../../components/MainWrapper';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { isLoggedIn } from '../../../utils/auth';
import Emojies from '../../../assets/Emojies';
import { Link } from 'react-router-dom';
import DashboardItems from '../../../components/dashboard/DashboardItems';
import ModeSelector from '../../../components/mods/ModeSelector';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function StudentDashboard({ user }) {

    const moods = [
         { icon: Emojies.happy, label: "Happy" },
        { icon: Emojies.peaceful, label: "Peaceful" },
        { icon: Emojies.angry, label: "Angry" },
        { icon: Emojies.aww, label: "Sad" },
        { icon: Emojies.confused, label: "Confused" },
        { icon: Emojies.stressed, label: "Stressed" },
    ];

    const weekLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const weekMoodData = [2, 1, 3, 2, 4, 1, 2];
    const moodColors = ['#fbbf24', '#fb923c', '#f87171', '#a3e635', '#38bdf8', '#38bdf8'];
    const chartData = {
        labels: weekLabels,
        datasets: [
            {
                label: 'Mood',
                data: weekMoodData,
                fill: false,
                borderColor: '#fb923c',
                backgroundColor: '#fb923c',
                tension: 0.4,
                pointBackgroundColor: weekMoodData.map(i => moodColors[i] || '#fb923c'),
                pointRadius: 6,
            },
        ],
    };
    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: { display: true, text: "This Week's Mood", color: '#fb923c', font: { size: 18, weight: 'bold' } },
        },
        scales: {
            y: {
                min: 0,
                max: 5,
                ticks: {
                    callback: (value) => {
                        const mood = moods[value];
                        return mood ? mood.label : '';
                    },
                    color: '#fb923c',
                    font: { size: 12 },
                },
                grid: { color: '#fde68a' },
            },
            x: {
                grid: { display: false },
                ticks: { color: '#fb923c', font: { size: 14 } },
            },
        },
    };

    return (
        <MainWrapper logged={isLoggedIn()} activeSection="dashboard">
            <div className="flex flex-1 overflow-hidden">
                {/* Main Content */}
                <main className="flex-1 overflow-y-auto py-4 px-4 lg:px-0">
                    {/* User Info */}
                    <div className="flex flex-col lg:flex-row items-center gap-4 mb-6 bg-white rounded-2xl shadow p-4">
                        <img src={Avatar} alt="Avatar" className="w-16 h-16 rounded-full border-2 border-orange-200" />
                        <div className="flex-1 text-center lg:text-left">
                            <div className="text-lg font-bold text-gray-800">{user.name}</div>
                            <div className="text-xs text-gray-500">{user.email}</div>
                            <div className="text-xs text-primary font-semibold mt-1">{user.roleName ?? 'Student'}</div>
                        </div>
                        <Link to="/update-profile" className="px-5 py-2 rounded-full bg-primary text-white font-semibold shadow hover:bg-orange-500 transition text-sm">Update Profile</Link>
                    </div>

                    <div className="mb-6 p-4 rounded-xl bg-yellow-50 border border-yellow-200 text-yellow-800 flex items-center gap-3 shadow-sm">
                        <svg className="w-6 h-6 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span className="flex-1 text-sm sm:text-base">Please complete your profile for the best experience. <Link to="/dashboard/profile-setup" className="underline text-primary font-semibold ml-1">Set up now</Link></span>
                    </div>

                    {/* Mood Chart */}
                    <div className="bg-white rounded-2xl shadow p-4 mb-8">
                        <Line data={chartData} options={chartOptions} height={120} />
                    </div>

                    {/* Mood Selector */}
                    <ModeSelector currentValue={2} />
                    <DashboardItems />
                </main>
            </div>
        </MainWrapper>
    );
}
