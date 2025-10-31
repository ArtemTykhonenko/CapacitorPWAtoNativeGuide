import React from 'react';
import { SuccessIcon } from './icons';
import { useTranslation } from '../i18n';
import Footer from './Footer';
import LanguageSwitcher from './LanguageSwitcher';

interface SuccessScreenProps {
    onRestart: () => void;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({ onRestart }) => {
    const { t } = useTranslation();
    return (
        <div className="relative min-h-screen bg-slate-900 text-slate-200 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
            <LanguageSwitcher />
            <div className="w-full max-w-md mx-auto text-center bg-slate-800/50 border border-slate-700 rounded-xl p-8 shadow-2xl">
                <div className="flex justify-center text-green-400 mb-6">
                    <SuccessIcon className="h-20 w-20" />
                </div>
                <h1 className="text-3xl font-bold text-slate-100 mb-2">
                    {t('success.title')}
                </h1>
                <p className="text-slate-400 mb-8">
                    {t('success.description')}
                </p>
                <button
                    onClick={onRestart}
                    className="px-8 py-3 bg-indigo-600 text-white rounded-md font-semibold text-lg transition-all duration-200 hover:bg-indigo-500 w-full"
                >
                    {t('success.cta')}
                </button>
            </div>
            <Footer />
        </div>
    );
};

export default SuccessScreen;