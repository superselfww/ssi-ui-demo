
import PdfIcon from '../../../assets/images/icons/pdf.png';
import MainWrapper from '../../../components/MainWrapper';
import MainTitle from '../../../components/MainTitle';

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

const EmotionalDevelopmentReports = () => {
    return (
        <MainWrapper logged={true} activeSection="reports" isParent={true}>
            <MainTitle title="Emotional Development Reports" buttons={[{label:"Back"}]} />
            <div className="min-h-screen  flex flex-col items-center py-2">
                <div className="w-full  mx-auto px-2">
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

export default EmotionalDevelopmentReports;
