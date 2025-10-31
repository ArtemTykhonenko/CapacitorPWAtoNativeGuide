import React from 'react';

interface LandingPageProps {
    onStart: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
            <div className="w-full max-w-3xl mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500 mb-4">
                    PWA в Нативное Приложение
                </h1>
                <p className="text-lg sm:text-xl text-slate-400 mb-12 max-w-xl mx-auto">
                    Интерактивное пошаговое руководство по "обертке" вашего веб-приложения в нативную оболочку с помощью Capacitor.
                </p>
                <button
                    onClick={onStart}
                    className="px-8 py-3 bg-indigo-600 text-white rounded-md font-semibold text-lg transition-all duration-200 hover:bg-indigo-500 hover:scale-105 transform"
                >
                    Начать
                </button>
            </div>
        </div>
    );
};

export default LandingPage;