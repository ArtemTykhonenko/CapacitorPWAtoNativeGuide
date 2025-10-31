import React, { useState, useMemo } from 'react';
import { STEPS, Step as StepType } from './constants/steps';
import CodeBlock from './components/CodeBlock';
import ProgressBar from './components/ProgressBar';
import PlatformSelector from './components/PlatformSelector';
import LandingPage from './components/LandingPage';
import SuccessScreen from './components/SuccessScreen';

type View = 'landing' | 'selector' | 'guide' | 'success';

const App: React.FC = () => {
    const [view, setView] = useState<View>('landing');
    const [platform, setPlatform] = useState<'android' | 'ios' | null>(null);
    const [currentStep, setCurrentStep] = useState(0);

    const filteredSteps = useMemo(() => {
        if (!platform) return [];
        return STEPS.filter(step => !step.platform || step.platform === platform);
    }, [platform]);

    const handleStart = () => {
        setView('selector');
    };

    const handleRestart = () => {
        setPlatform(null);
        setCurrentStep(0);
        setView('landing');
    };

    const handlePlatformSelect = (selectedPlatform: 'android' | 'ios') => {
        setPlatform(selectedPlatform);
        setCurrentStep(0);
        setView('guide');
    };

    const handleNext = () => {
        if (currentStep < filteredSteps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setView('success');
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };
    
    if (view === 'landing') {
        return <LandingPage onStart={handleStart} />;
    }
    
    if (view === 'selector') {
        return <PlatformSelector onSelect={handlePlatformSelect} />;
    }

    if (view === 'success') {
        return <SuccessScreen onRestart={handleRestart} />;
    }

    const activeStep: StepType = filteredSteps[currentStep];

    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
            <div className="w-full max-w-4xl mx-auto">
                <header className="text-center mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">
                        PWA в Нативное Приложение с Capacitor
                    </h1>
                    <p className="mt-2 text-slate-400">Платформа: <span className="font-semibold capitalize text-sky-400">{platform}</span></p>
                </header>

                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl shadow-2xl shadow-slate-950/50 overflow-hidden">
                    <div className="p-6 sm:p-8">
                        <ProgressBar current={currentStep + 1} total={filteredSteps.length} />
                        
                        <div className="mt-6 min-h-[200px] flex flex-col justify-center">
                            <h2 className="text-2xl font-semibold text-sky-300 mb-4">{activeStep.title}</h2>
                            <div className="space-y-4 text-slate-300">
                                {activeStep.content.map((item, index) => {
                                    switch (item.type) {
                                        case 'paragraph':
                                            return <p key={index} dangerouslySetInnerHTML={{ __html: item.content as string }}></p>;
                                        case 'code':
                                            return <CodeBlock key={index} code={item.content as string} language={item.language || 'bash'} />;
                                        default:
                                            return null;
                                    }
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-900/50 border-t border-slate-700 px-6 py-4 flex justify-between items-center">
                        <button
                            onClick={handlePrev}
                            disabled={currentStep === 0}
                            className="px-6 py-2 bg-slate-700 text-slate-300 rounded-md font-semibold transition-all duration-200 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Назад
                        </button>
                        <button
                            onClick={handleNext}
                            className="px-6 py-2 bg-indigo-600 text-white rounded-md font-semibold transition-all duration-200 hover:bg-indigo-500 disabled:opacity-50 disabled:bg-slate-600 disabled:cursor-not-allowed"
                        >
                            {currentStep === filteredSteps.length - 1 ? 'Завершить' : 'Далее'}
                        </button>
                    </div>
                </div>

                 <footer className="text-center mt-4">
                    <button onClick={handleRestart} className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                        Вернуться к выбору платформы
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default App;