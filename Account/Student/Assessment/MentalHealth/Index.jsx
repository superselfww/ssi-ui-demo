import React, { useState } from 'react';
import HealthGoalStep from './steps/HealthGoalStep';
import GenderStep from './steps/GenderStep';
import AgeStep from './steps/AgeStep';
import WeightStep from './steps/WeightStep';
import GradeStep from './steps/GradeStep';
import MoodStep from './steps/MoodStep';
import ImageUploadStep from './steps/ImageUploadStep';
import TalkedToCounselorStep from './steps/TalkedToCounselorStep';
import PhysicalPainStep from './steps/PhysicalPainStep';
import SleepQualityStep from './steps/SleepQualityStep';
import MedicationStep from './steps/MedicationStep';
import MentalSymptomsStep from './steps/MentalSymptomsStep';
import StressLevelStep from './steps/StressLevelStep';
import AISoundAnalysisStep from './steps/AISoundAnalysisStep';
import ExpressionAnalysisStep from './steps/ExpressionAnalysisStep';
import CompilingDataStep from './steps/CompilingDataStep';
import ScoreStep from './steps/ScoreStep';
import MainWrapper from '../../../../../components/MainWrapper';
import MainTitle from '../../../../../components/MainTitle';

const steps = [
    HealthGoalStep,
    GenderStep,
    AgeStep,
    WeightStep,
    GradeStep,
    MoodStep,
    TalkedToCounselorStep,
    PhysicalPainStep,
    SleepQualityStep,
    MedicationStep,
    MentalSymptomsStep,
    StressLevelStep,
    AISoundAnalysisStep,
    ExpressionAnalysisStep,
    CompilingDataStep,
    ScoreStep,
];

const MentalHealthAssessment = () => {
    const [step, setStep] = useState(0);
    const [form, setForm] = useState({});
    const StepComponent = steps[step];

    const handleChange = (value) => {
        setForm((prev) => ({ ...prev, [step]: value }));
    };

    const handleUnitChange = (unit) => {
        setForm((prev) => ({ ...prev, weightUnit: unit }));
    };

    const handleNext = () => {
        if (step < steps.length - 1) setStep(step + 1);
        // else show summary or submit
    };

    const handleSkip = () => {
        if (step < steps.length - 1) setStep(step + 1);
    };

    return (
        <MainWrapper logged={true}>
            <MainTitle title="Mental Health Assessment" />
            <main className="items-center  min-h-screen mb-5">
                <div className=" mx-auto  flex flex-col justify-start bg-white p-6 rounded-2xl shadow-lg">
                    <div className="mb-6 text-center">
                        <div className="text-sm text-gray-500">Step {step + 1} of {steps.length}</div>
                        <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                            <div className="h-2 bg-primary rounded-full" style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
                        </div>
                    </div>
                    <StepComponent
                        value={form[step]}
                        onChange={handleChange}
                        onNext={handleNext}
                        onUnitChange={handleUnitChange}
                        onSkip={handleSkip}
                        unit={form.weightUnit || 'kg'}
                    />
                </div>
            </main>
        </MainWrapper>
    );
};

export default MentalHealthAssessment;
