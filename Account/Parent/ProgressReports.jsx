import MainWrapper from '../../../components/MainWrapper';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip } from 'chart.js';
import MainTitle from '../../../components/MainTitle';
Chart.register(ArcElement, Tooltip);

const progressData = [
    {
        title: 'Health',
        color: 'bg-[#FBE9E6]',
        items: [
            { label: 'Mental Health', value: 21, status: 'improved', color: '#21C97A' },
            { label: 'Mood', value: 21, status: 'improved', color: '#21C97A' },
            { label: 'Stress Relief', value: -19, status: 'decreased', color: '#F44336' },
            { label: 'Sleep', value: 21, status: 'improved', color: '#21C97A' },
        ],
    },
    {
        title: 'Social Engagement',
        color: 'bg-[#E6F3FB]',
        items: [
            { label: 'Chats', value: -21, status: 'decreased', color: '#F44336' },
            { label: 'Teacher', value: 21, status: 'improved', color: '#21C97A' },
            { label: 'Community', value: 21, status: 'improved', color: '#21C97A' },
        ],
    },
    {
        title: 'Assignments',
        color: 'bg-[#FBE9E6]',
        items: [
            { label: 'Completion', value: 21, status: 'improved', color: '#21C97A' },
            { label: 'Response', value: -12, status: 'decreased', color: '#F44336' },
            { label: 'Performance', value: 21, status: 'improved', color: '#21C97A' },
        ],
    },
    {
        title: 'Exercises',
        color: 'bg-[#FFF9E6]',
        items: [
            { label: 'Games', value: 21, status: 'improved', color: '#21C97A' },
            { label: 'Body Exercises', value: 21, status: 'improved', color: '#21C97A' },
            { label: 'Yoga', value: 21, status: 'improved', color: '#21C97A' },
        ],
    },
    {
        title: 'Quiz',
        color: 'bg-[#E6E9FB]',
        items: [
            { label: 'Completion', value: 21, status: 'improved', color: '#21C97A' },
            { label: 'Response', value: -12, status: 'decreased', color: '#F44336' },
            { label: 'Performance', value: 21, status: 'improved', color: '#21C97A' },
        ],
    },
    {
        title: 'Academic Performance',
        color: 'bg-[#E6FBE9]',
        items: [
            { label: 'Grades', value: 18, status: 'improved', color: '#21C97A' },
            { label: 'Class Participation', value: 15, status: 'improved', color: '#21C97A' },
            { label: 'Homework Quality', value: -12, status: 'decreased', color: '#F44336' },
        ],
    },
    {
        title: 'Social Emotional Learning',
        color: 'bg-[#E6FBE9]',
        items: [
            { label: 'Emotional Regulations', value: 18, status: 'improved', color: '#21C97A' },
            { label: 'Peer Relationship', value: -12, status: 'decreased', color: '#F44336' },
        ],
    },
];

const overallPerformance = {
    improvements: 45,
    decline: 20,
};

function ProgressBar({ value, color }) {
    const percent = Math.abs(value);
    return (
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
                className="h-2 rounded-full transition-all"
                style={{ width: `${percent}%`, background: color }}
            ></div>
        </div>
    );
}

const ProgressReports = () => {
    return (
        <MainWrapper logged={true} activeSection="reports" isParent={true}>
            <MainTitle title="Progress Reports" buttons={[{label:"Back"}]} />
            <div className="min-h-screenflex flex-col items-center py-2">
                <div className="w-full px-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {progressData.map((section) => (
                            <div key={section.title} className={`rounded-2xl p-4 bg-white flex-1 min-w-[220px]`}>
                                <div className="font-bold text-base mb-2 text-gray-800">{section.title}</div>
                                <div className="flex flex-col gap-2">
                                    {section.items.map((item) => (
                                        <div key={item.label} className="mb-1">
                                            <div className="flex items-center justify-between text-xs font-semibold mb-1">
                                                <span className="text-gray-700">{item.label}</span>
                                                <span className={item.value < 0 ? 'text-[#F44336]' : 'text-[#21C97A]'}>
                                                    {item.value > 0 ? `+${item.value}% Improved` : `${item.value}% Decreased`}
                                                </span>
                                            </div>
                                            <ProgressBar value={item.value} color={item.color} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                        {/* Overall Performance Card */}
                        <div className="rounded-2xl p-4 bg-white flex flex-col items-center min-w-[220px]">
                            <div className="font-bold text-base mb-2 text-gray-800">Overall Performance</div>
                            <div className="flex flex-col gap-4 w-full">
                                <div className="flex items-center gap-2">
                                    <div className="w-30 h-30">
                                        <Doughnut
                                            data={{
                                                datasets: [
                                                    {
                                                        data: [overallPerformance.improvements, 100 - overallPerformance.improvements],
                                                        backgroundColor: ['#21C97A', '#E5E7EB'],
                                                        borderWidth: 0,
                                                        cutout: '70%',
                                                    },
                                                ],
                                            }}
                                            options={{ plugins: { tooltip: { enabled: false } }, cutout: '70%' }}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-700 font-semibold">Improvements</span>
                                        <span className="text-lg font-bold text-[#21C97A]">{overallPerformance.improvements}%</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-16 h-16">
                                        <Doughnut
                                            data={{
                                                datasets: [
                                                    {
                                                        data: [overallPerformance.decline, 100 - overallPerformance.decline],
                                                        backgroundColor: ['#F44336', '#E5E7EB'],
                                                        borderWidth: 0,
                                                        cutout: '70%',
                                                    },
                                                ],
                                            }}
                                            options={{ plugins: { tooltip: { enabled: false } }, cutout: '70%' }}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-700 font-semibold">Decline</span>
                                        <span className="text-lg font-bold text-[#F44336]">{overallPerformance.decline}%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainWrapper>
    );
};

export default ProgressReports;
