import React from 'react';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MainWrapper from '../../../../components/MainWrapper';
import MainTitle from '../../../../components/MainTitle';

// Dummy PDF data for demonstration
const pdfs = [
    {
        name: 'Emotional Report - May 2025',
        pages: 12,
        date: new Date('2025-05-15'),
        url: '/pdfs/emotional-report-may.pdf',
    },
    {
        name: 'Emotional Report - April 2025',
        pages: 10,
        date: new Date('2025-04-20'),
        url: '/pdfs/emotional-report-april.pdf',
    },
    {
        name: 'Emotional Report - March 2025',
        pages: 8,
        date: new Date('2025-03-10'),
        url: '/pdfs/emotional-report-march.pdf',
    },
    {
        name: 'Emotional Report - February 2025',
        pages: 9,
        date: new Date('2025-02-18'),
        url: '/pdfs/emotional-report-feb.pdf',
    },
    {
        name: 'Emotional Report - January 2025',
        pages: 7,
        date: new Date('2025-01-25'),
        url: '/pdfs/emotional-report-jan.pdf',
    },
];

const now = new Date();
const thisMonth = now.getMonth();
const thisYear = now.getFullYear();
const lastMonth = thisMonth === 0 ? 11 : thisMonth - 1;
const lastMonthYear = thisMonth === 0 ? thisYear - 1 : thisYear;
const threeMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 2, 1);

const filterByMonth = (month, year) =>
    pdfs.filter(pdf => pdf.date.getMonth() === month && pdf.date.getFullYear() === year);
const filterByLast3Months = () =>
    pdfs.filter(pdf => pdf.date >= threeMonthsAgo && (pdf.date.getMonth() !== thisMonth && pdf.date.getMonth() !== lastMonth));

export default function EmotionalDevelopmentReport() {
    const thisMonthPdfs = pdfs;
    const lastMonthPdfs = filterByMonth(lastMonth, lastMonthYear).slice(0, 2);
    const last3MonthPdfs = filterByLast3Months().slice(0, 2);

    const renderSection = (title, pdfList) => (
        <div className="mb-8">
            <h2 className="text-sm font-bold text-gray-600 mb-4">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pdfList.length === 0 && <div className="text-gray-400 italic">No reports found.</div>}
                {pdfList.map(pdf => (
                    <a
                        key={pdf.name}
                        href={pdf.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 bg-white rounded-xl shadow p-4 hover:bg-orange-50 transition border border-gray-100"
                    >
                        <FontAwesomeIcon icon={faFilePdf} className="text-4xl text-orange-500" />
                        <div>
                            <div className="font-semibold text-gray-800">{pdf.name}</div>
                            <div className="text-sm text-gray-500">{pdf.pages} pages</div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );

    return (
        <MainWrapper logged={true}>
            <MainTitle title="Emotional Development Reports" />
            <div className="flex flex-1 overflow-hidden">
                <main className="flex-1 overflow-y-auto p-4 lg:py-8 lg:pt-2 lg:px-0">
                    <div className="max-w-8xl mx-auto py-2 md:py-10 px-4 lg:px-2 w-full">
                        {renderSection('This Month', thisMonthPdfs)}
                        {renderSection('Last Month', lastMonthPdfs)}
                        {renderSection('Last 3 Months', last3MonthPdfs)}
                    </div>
                </main>
            </div>
        </MainWrapper>
    );
}
