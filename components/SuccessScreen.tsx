import React from 'react';
import { SuccessIcon } from './icons';

interface SuccessScreenProps {
    onRestart: () => void;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({ onRestart }) => {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
            <div className="w-full max-w-md mx-auto text-center bg-slate-800/50 border border-slate-700 rounded-xl p-8 shadow-2xl">
                <div className="flex justify-center text-green-400 mb-6">
                    <SuccessIcon className="h-20 w-20" />
                </div>
                <h1 className="text-3xl font-bold text-slate-100 mb-2">
                    Успех!
                </h1>
                <p className="text-slate-400 mb-8">
                    Вы завершили руководство. Ваше приложение готово к финальным шагам и публикации!
                </p>
                <button
                    onClick={onRestart}
                    className="px-8 py-3 bg-indigo-600 text-white rounded-md font-semibold text-lg transition-all duration-200 hover:bg-indigo-500 w-full"
                >
                    Начать заново
                </button>
            </div>
        </div>
    );
};

export default SuccessScreen;