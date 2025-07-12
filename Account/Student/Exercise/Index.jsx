import React from 'react';
import MainWrapper from '../../../../components/MainWrapper';
import ZenMed from '../../../../assets/images/zen_med.png';
import MovementMed from '../../../../assets/images/movement_med.png';
import MindfulMed from '../../../../assets/images/mindful_med.png';
import { Link } from 'react-router-dom';
import MainTitle from '../../../../components/MainTitle';

const exerciseCategories = [
    {
        title: 'Zen Exercises',
        img: ZenMed,
        count: 8,
        minutes: 60,
        watched: 5,
    },
    {
        title: 'Movement Exercises',
        img: MovementMed,
        count: 6,
        minutes: 45,
        watched: 2,
    },
    {
        title: 'Mindfulness',
        img: MindfulMed,
        count: 10,
        minutes: 80,
        watched: 7,
    },
];

export default function ExerciseIndex() {
    return (
        <MainWrapper logged={true}>
            <main className="flex-1 overflow-y-auto p-4 lg:py-8 lg:pt-2 min-h-screen">
                <MainTitle title="Exercises" buttons={[{ label: 'Back', }]} />
                <div className="w-full max-w-10xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    {exerciseCategories.map((cat) => {
                        const percent = Math.round((cat.watched / cat.count) * 100);
                        return (
                            <Link to={`/exercises/${cat.title}`} key={cat.title} className="bg-white rounded-2xl shadow p-5 flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <img src={cat.img} alt={cat.title} className="w-20 h-20 object-contain rounded-xl bg-white shadow" />
                                    <div>
                                        <div className="text-lg font-bold text-gray-800 mb-1">{cat.title}</div>
                                        <div className="text-sm text-gray-500">{cat.count} Exercises &bull; {cat.minutes} min</div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1 mt-2">
                                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                                        <span>{cat.watched} completed</span>
                                        <span>{cat.count} total</span>
                                    </div>
                                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-primary transition-all duration-300"
                                            style={{ width: `${percent}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </main>
        </MainWrapper>
    );
}
