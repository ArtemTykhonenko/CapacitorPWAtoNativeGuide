import React from 'react';
import { ReactLogo, ViteLogo, AndroidStudioLogo, XcodeLogo } from './icons';
import { useTranslation } from '../i18n';
import Footer from './Footer';
import LanguageSwitcher from './LanguageSwitcher';

interface LandingPageProps {
    onStart: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
    const { t } = useTranslation();

    return (
        <div className="relative min-h-screen bg-slate-900 text-slate-200 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
            <LanguageSwitcher />
            <div className="w-full max-w-3xl mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500 mb-4">
                    {t('landing.title')}
                </h1>
                <p className="text-lg sm:text-xl text-slate-400 mb-12 max-w-2xl mx-auto" dangerouslySetInnerHTML={{ __html: t('landing.description') }}>
                </p>
                <button
                    onClick={onStart}
                    className="px-8 py-3 bg-indigo-600 text-white rounded-md font-semibold text-lg transition-all duration-200 hover:bg-indigo-500 hover:scale-105 transform"
                >
                    {t('landing.cta')}
                </button>

                <div className="mt-16 text-center">
                    <p className="text-sm text-slate-500 uppercase tracking-wider mb-4">{t('landing.techTitle')}</p>
                    <div className="flex justify-center items-center space-x-6">
                        <ReactLogo className="h-10 w-10 text-slate-400" />
                        <ViteLogo className="h-9 w-9 text-slate-400" />
                        <AndroidStudioLogo className="h-10 w-10 text-slate-400" />
                        <XcodeLogo className="h-10 w-10 text-slate-400" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default LandingPage;