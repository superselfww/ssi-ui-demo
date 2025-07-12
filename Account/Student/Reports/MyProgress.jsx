import React from 'react';
import MainWrapper from '../../../../components/MainWrapper';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const progressData = [
    {
        title: 'Health',
        color: 'bg-orange-100',
        items: [
            { label: 'Mental Health', value: 21, improved: true },
            { label: 'Mood', value: 21, improved: true },
            { label: 'Stress Relief', value: -19, improved: false },
            { label: 'Sleep', value: 21, improved: true },
        ],
    },
    {
        title: 'Social Engagement',
        color: 'bg-blue-50',
        items: [
            { label: 'Chats', value: -21, improved: false },
            { label: 'Teacher', value: 21, improved: true },
            { label: 'Community', value: 21, improved: true },
        ],
    },
    {
        title: 'Assignments',
        color: 'bg-pink-100',
        items: [
            { label: 'Completion', value: 21, improved: true },
            { label: 'Response', value: -12, improved: false },
            { label: 'Performance', value: 21, improved: true },
        ],
    },
    {
        title: 'Exercises',
        color: 'bg-yellow-50',
        items: [
            { label: 'Games', value: 21, improved: true },
            { label: 'Body Exercises', value: 21, improved: true },
            { label: 'Yoga', value: 21, improved: true },
        ],
    },
    {
        title: 'Quiz',
        color: 'bg-purple-100',
        items: [
            { label: 'Completion', value: 21, improved: true },
            { label: 'Response', value: -12, improved: false },
            { label: 'Performance', value: 21, improved: true },
        ],
    },
    {
        title: 'Social Emotional Learning',
        color: 'bg-green-50',
        items: [
            { label: 'Emotional Regulations', value: 18, improved: true },
            { label: 'Peer Relationship', value: -12, improved: false },
        ],
    },
];

const overallPerformance = {
    improvements: 45,
    declined: 20,
};


function ProgressBar({ value, improved }) {
    return (
        <div className="w-full h-2.5 flex items-center">
            <div className="w-full" style={{ height: '20px' }}>
                <Bar
                    data={{
                        labels: [''],
                        datasets: [
                            {
                                data: [value],
                                backgroundColor: improved ? '#4ade80' : '#ef4444',
                                borderRadius: 8,
                                barPercentage: 1.0,
                                categoryPercentage: 1.0,
                                minBarLength: 2,
                            },
                        ],
                    }}
                    options={{
                        indexAxis: 'y',
                        plugins: { legend: { display: false }, tooltip: { enabled: false } },
                        scales: {
                            x: {
                                min: -100,
                                max: 100,
                                display: false,
                            },
                            y: { display: false },
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                    }}
                    height={20}
                />
            </div>
        </div>
    );
}

function ProgressCard({ title, items }) {
    return (
        <div className={`rounded-2xl p-4 bg-white shadow flex-1 min-w-[220px]`}>
            <div className="font-bold text-lg mb-2 text-black/80">{title}</div>
            {items.map((item) => (
                <div key={item.label} className="mb-2">
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-black/80">{item.label}</span>
                        <span className={`font-semibold ${item.improved ? 'text-green-500' : 'text-red-500'}`}>{item.value > 0 ? `+${item.value}%` : `${item.value}%`}</span>
                    </div>
                    <ProgressBar value={item.value} improved={item.improved} />
                    <div className={`text-xs mt-1 ${item.improved ? 'text-green-500' : 'text-red-500'}`}>{item.improved ? `${item.value > 0 ? '+' : ''}${item.value}% improved` : `${item.value}% Decreased`}</div>
                </div>
            ))}
        </div>
    );
}

function OverallPerformanceCard() {
    const data = {
        labels: ['Improvements', 'Declined', 'Remaining'],
        datasets: [
            {
                data: [overallPerformance.improvements, overallPerformance.declined, 100 - overallPerformance.improvements - overallPerformance.declined],
                backgroundColor: ['#4ade80', '#ef4444', '#f3f3f3'],
                borderWidth: 0,
            },
        ],
    };
    const options = {
        cutout: '70%',
        plugins: {
            legend: { display: true },
            tooltip: { enabled: false },
        },
    };
    return (
        <div className="rounded-2xl p-4 bg-white shadow flex flex-col w-full">
            <div className="font-bold text-lg mb-2 text-black/80">Overall Performance</div>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center">
                    <div className="text-sm font-semibold mb-3">Improvements vs Declined</div>
                    <div className="w-full h-auto max-w-sm relative flex items-center justify-center">
                        <Doughnut data={data} options={options} />
                        <span className="absolute inset-0 flex flex-col items-center justify-center font-bold text-lg">
                            <span className="text-green-500">{overallPerformance.improvements}%</span>
                            <span className="text-xs text-red-500">{overallPerformance.declined}%</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function MyProgress() {
    const [sort, setSort] = React.useState('newest');
    const sortOptions = [
        { value: 'newest', label: 'Newest' },
        { value: 'oldest', label: 'Oldest' },
        { value: 'highest', label: 'Highest Improvement' },
        { value: 'lowest', label: 'Lowest Improvement' },
    ];

    return (
        <MainWrapper logged={true}>
            <div className="w-full mx-auto mb-3">
                <div className="  px-3 py-2 flex justify-between">
                    <h1 className="text-lg md:text-2xl font-bold mb-0">My Progress</h1>
                    <div className="flex items-center gap-2">
                        <label htmlFor="sort" className="text-xs md:text-sm font-medium md:text-gray-600">Sort by:</label>
                        <select
                            id="sort"
                            value={sort}
                            onChange={e => setSort(e.target.value)}
                            className="rounded-md border border-gray-200 px-2 py-1 text-xs md:text-sm focus:outline-none focus:ring-2 bg-white focus:ring-orange-300"
                        >
                            {sortOptions.map(opt => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <main className="flex-1 overflow-y-auto p-4 lg:py-8 lg:pt-2 lg:px-0">
                <div className="max-w-8xl mx-auto py-2 md:py-10 px-4 lg:px-2 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ProgressCard {...progressData[0]} />
                        <ProgressCard {...progressData[1]} />
                        <ProgressCard {...progressData[2]} />
                        <ProgressCard {...progressData[3]} />
                        <ProgressCard {...progressData[4]} />
                        <OverallPerformanceCard />
                        <ProgressCard {...progressData[5]} />
                    </div>
                </div>
            </main>
        </MainWrapper>
    );
}
