import PdfIcon from '../../../assets/images/icons/pdf.png';
import MainWrapper from '../../../components/MainWrapper';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip } from 'chart.js';
import MainTitle from '../../../components/MainTitle';

Chart.register(ArcElement, Tooltip);

const skills = [
    { label: 'Communication', value: 55, color: '#2196F3' },
    { label: 'Task Completion', value: 81, color: '#43A047' },
    { label: 'Social', value: 48, color: '#E53935' },
    { label: 'Problem Solving', value: 66, color: '#2196F3' },
    { label: 'Management', value: 35, color: '#E53935' },
    { label: 'Decision Making', value: 41, color: '#E53935' },
];

const reportsData = [
    {
        label: 'This month',
        items: [
            {
                title: 'Detail overview about the daily quiz game',
                pages: '02 page',
            },
            {
                title: 'Social engagement report for Ahmed Khan',
                pages: '02 page',
            },
        ],
    },
    {
        label: 'Last month',
        items: [
            {
                title: 'Detail overview about the daily quiz game',
                pages: '02 page',
            },
            {
                title: 'Detail overview about the daily quiz game',
                pages: '02 page',
            },
        ],
    },
    {
        label: 'Aug, 2023',
        items: [
            {
                title: 'Detail overview about the daily quiz game',
                pages: '02 page',
            },
            {
                title: 'Detail overview about the daily quiz game',
                pages: '02 page',
            },
        ],
    },
];

function SkillChart({ value, color }) {
    const data = {
        datasets: [
            {
                data: [value, 100 - value],
                backgroundColor: [color, '#E5E7EB'],
                borderWidth: 0,
                cutout: '70%'
            }
        ]
    };
    const options = {
        plugins: {
            tooltip: { enabled: false }
        },
        cutout: '70%'
    };
    return (
        <div className="relative w-16 h-16 lg:w-30 lg:h-30 flex items-center justify-center">
            <Doughnut data={data} options={options} width={64} height={64} />
            <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-800">
                {value}%
            </div>
        </div>
    );
}

const SkillAcquisitionReports = () => {
    return (
        <MainWrapper logged={true} activeSection="reports" isParent={true}>
            <MainTitle title="Skill Acquisition Reports" buttons={[{label:"Back"}]} />
            <div className="min-h-screen flex flex-col items-center py-2">
                <div className="w-full px-2 ">
                    <div className="font-semibold text-base text-gray-800 mb-2">Skills</div>
                    <div className="grid grid-cols-2 gap-4  rounded-2xl p-4 mb-4">
                        {skills.map((s) => (
                            <div key={s.label} className="flex flex-col items-center bg-white rounded-xl p-2 shadow-sm">
                                <SkillChart value={s.value} color={s.color} />
                                <div className="text-xs font-semibold text-gray-700 mt-2 text-center">{s.label}</div>
                            </div>
                        ))}
                    </div>
                    {/* Reports */}
                    <div className="font-semibold text-base text-gray-800 mb-2 mt-6">Reports</div>
                    <div className="flex flex-col gap-2">
                        {reportsData.map((section) => (
                            <div key={section.label}>
                                <div className="text-xs text-gray-400 font-semibold mb-2 mt-4 first:mt-0">{section.label}</div>
                                <div className="flex flex-col gap-3">
                                    {section.items.map((item, i) => (
                                        <div key={i} className="flex items-center bg-[#FAFAFA] rounded-xl shadow-sm p-3 gap-3">
                                            <img src={PdfIcon} alt="PDF" className="w-10 h-12 object-contain" />
                                            <div className="flex flex-col flex-1">
                                                <div className="font-semibold text-sm text-gray-900 leading-tight mb-1">{item.title}</div>
                                                <div className="text-xs text-gray-400">{item.pages}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </MainWrapper>
    );
};

export default SkillAcquisitionReports;
