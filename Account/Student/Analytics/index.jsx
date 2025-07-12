import React, { useState } from 'react';
import MainWrapper from '../../../../components/MainWrapper';
import Emojies from '../../../../assets/Emojies';
import { Bar, Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);


const RANGE_OPTIONS = [
    { label: 'Weekly', value: 'weekly' },
    { label: 'Monthly', value: 'monthly' },
    { label: 'Yearly', value: 'yearly' },
];

const getChartData = (data) => {
    // For demo, just use the same data for all ranges
    return {
        labels: data.map(d => d.date),
        datasets: [
            {
                label: 'Positive',
                data: data.map(d => d.positive),
                backgroundColor: '#4ade80',
                borderRadius: 4,
            },
            {
                label: 'Negative',
                data: data.map(d => d.negative),
                backgroundColor: '#f87171',
                borderRadius: 4,
            },
        ],
    };
};

const getScoreChartData = (scoreHistory) => {
    return {
        labels: scoreHistory.map(s => s.date),
        datasets: [
            {
                label: 'Score',
                data: scoreHistory.map(s => s.score),
                backgroundColor: '#fbbf24',
                borderRadius: 8,
            },
        ],
    };
};

const Analytics = () => {
    const [range, setRange] = useState('monthly');
    const [moodRange, setMoodRange] = useState('week');

    // Dummy data for demonstration
    const mentalScoreData = [
        { date: 'Nov 01', positive: 8, negative: 2 },
        { date: 'Nov 02', positive: 7, negative: 3 },
        { date: 'Nov 03', positive: 6, negative: 4 },
        { date: 'Nov 04', positive: 9, negative: 1 },
        { date: 'Nov 05', positive: 5, negative: 5 },
        { date: 'Nov 06', positive: 8, negative: 2 },
        { date: 'Nov 07', positive: 7, negative: 3 },
    ];
   const moods = [
        { label: 'Stressed', emoji: Emojies.stressed },
        { label: 'Confused', emoji: Emojies.confused },
        { label: 'Aww', emoji: Emojies.aww },
        { label: 'Peaceful', emoji: Emojies.peaceful },
        { label: 'Happy', emoji: Emojies.excited },
    ];

    const metrics = [
        { label: 'Health', value: 80, color: 'bg-green-100', ring: 'border-green-400' },
        { label: 'Mood', value: 60, color: 'bg-orange-100', ring: 'border-orange-400' },
        { label: 'Stress', value: 62, color: 'bg-purple-100', ring: 'border-purple-400' },
    ];
    const scoreHistory = [
        { date: 'Nov 01', label: 'Anxious', note: 'Do 20m Breathing', score: 65 },
        { date: 'Nov 02', label: 'Very Happy', note: 'No Recommendations', score: 95 },
        { date: 'Nov 03', label: 'Neutral', note: 'Keep Up', score: 68 },
        { date: 'Nov 04', label: 'Confused', note: 'Read Books', score: 40 },
    ];

    const chartData = getChartData(mentalScoreData, range);
    const scoreChartData = getScoreChartData(scoreHistory);

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: { display: true, text: "This Week's Mood", color: '#fb923c', font: { size: 18, weight: 'bold' } },
        },
        scales: {
            y: {
                min: 0,
                max: 4,
                ticks: {
                    callback: (value) => {
                        const mood = moods[value];
                        return mood ? mood.label : '';
                    },
                    color: '#fb923c',
                    font: { size: 14 },
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
        <MainWrapper logged={true}>
            <div className="max-w-5xl mx-auto py-4 md:px-0 px-4">
                {/* Mental Score Chart */}
                <div className="mb-6">
                    <div className="bg-white rounded-2xl shadow p-5">
                        <div className="font-semibold mb-2">Mental Score</div>
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                            <div>
                                <span className="mr-2"><span className="inline-block w-3 h-3 bg-green-400 rounded-full mr-1" />Positive</span>
                                <span><span className="inline-block w-3 h-3 bg-red-400 rounded-full mr-1" />Negative</span>
                            </div>
                            <select
                                className="border rounded px-2 py-1 text-xs bg-white"
                                value={range}
                                onChange={e => setRange(e.target.value)}
                            >
                                {RANGE_OPTIONS.map(opt => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                        </div>
                        <Bar
                            data={chartData}
                            options={{
                                responsive: true,
                                plugins: { legend: { display: true, position: 'top' } },
                                scales: {
                                    y: { beginAtZero: true, max: 10, grid: { color: '#f3f4f6' } },
                                    x: { grid: { display: false } },
                                },
                            }}
                            height={120}
                        />
                    </div>
                </div>

                {/* Mood History */}
                <div className="mb-6">
                    <div className="bg-white rounded-2xl shadow p-5">
                        <div className="flex items-center justify-between mb-2">
                            <div className="font-semibold">Mood History</div>
                            <select
                                className="border rounded px-2 py-1 text-xs bg-white"
                                value={moodRange}
                                onChange={e => setMoodRange(e.target.value)}
                            >
                                <option value="week">This Week</option>
                                <option value="lastWeek">Last Week</option>
                                <option value="month">This Month</option>
                                <option value="lastMonth">Last Month</option>
                            </select>
                        </div>
                        <Line data={chartData} options={chartOptions} height={120} />
                    </div>
                </div>

                {/* Mental Health Metrics */}
                <div className="mb-6">
                    <div className="bg-white rounded-2xl shadow p-5 grid grid-cols-1 md:grid-cols-3 gap-3">
                        {metrics.map((m, i) => (
                            <div key={i} className={`rounded-xl p-3 flex flex-col items-center ${m.color}`}>
                                <div className={`w-16 h-16 rounded-full border-8 ${m.ring} flex items-center justify-center mb-2 bg-white`}>
                                    <span className="text-xl font-bold">{m.value}</span>
                                </div>
                                <div className="text-xs text-gray-600 text-center">{m.label} Score</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Score History Chart */}
                <div className="mb-4">
                    <div className="bg-white rounded-2xl shadow p-5">
                        <div className="mb-2 font-semibold">Score History</div>
                        <Bar
                            data={scoreChartData}
                            options={{
                                responsive: true,
                                plugins: { legend: { display: false } },
                                scales: {
                                    y: { beginAtZero: true, max: 100, grid: { color: '#f3f4f6' } },
                                    x: { grid: { display: false } },
                                },
                            }}
                            height={100}
                        />
                    </div>
                </div>

                {/* Score History List */}
                <div className="flex flex-col gap-3">
                    <div className="bg-white rounded-2xl shadow p-5">
                        {scoreHistory.map((s, i) => (
                            <div key={i} className="flex items-center justify-between bg-gray-50 rounded-lg p-3 mb-2 last:mb-0">
                                <div>
                                    <div className="text-xs text-gray-400">{s.date}</div>
                                    <div className="font-semibold text-sm">{s.label}</div>
                                    <div className="text-xs text-gray-400">{s.note}</div>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center font-bold text-orange-500 text-lg">
                                    {s.score}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </MainWrapper>
    );
};

export default Analytics;
