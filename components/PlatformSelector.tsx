import React from 'react';
import { AndroidIcon, AppleIcon } from './icons';

interface PlatformSelectorProps {
    onSelect: (platform: 'android' | 'ios') => void;
}

const PlatformCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    description: string;
    onClick: () => void;
}> = ({ icon, title, description, onClick }) => (
    <div
        onClick={onClick}
        className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center cursor-pointer transition-all duration-200 hover:border-sky-500 hover:scale-105 hover:bg-slate-800"
    >
        <div className="flex justify-center items-center text-sky-400 mb-4">
            {icon}
        </div>
        <h2 className="text-xl font-semibold text-slate-100">{title}</h2>
        <p className="mt-2 text-slate-400 text-sm">{description}</p>
    </div>
);

const PlatformSelector: React.FC<PlatformSelectorProps> = ({ onSelect }) => {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
            <div className="w-full max-w-2xl mx-auto text-center">
                <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500 mb-2">
                    Выберите Платформу
                </h1>
                <p className="text-lg text-slate-400 mb-12">Для какой платформы вы создаете приложение?</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <PlatformCard
                        icon={<AndroidIcon className="h-12 w-12" />}
                        title="Android"
                        description="Сборка нативного приложения для Android."
                        onClick={() => onSelect('android')}
                    />
                    <PlatformCard
                        icon={<AppleIcon className="h-12 w-12" />}
                        title="iOS"
                        description="Сборка нативного приложения для iOS."
                        onClick={() => onSelect('ios')}
                    />
                </div>
            </div>
        </div>
    );
};

export default PlatformSelector;