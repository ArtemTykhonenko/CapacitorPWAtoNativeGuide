import React from 'react';
import { useTranslation, Language } from '../i18n';

const LanguageButton: React.FC<{
  lang: Language;
  currentLang: Language;
  onClick: (lang: Language) => void;
}> = ({ lang, currentLang, onClick }) => (
  <button
    onClick={() => onClick(lang)}
    className={`px-3 py-1 text-sm rounded-md transition-colors ${
      currentLang === lang
        ? 'bg-sky-500 text-white font-semibold'
        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
    }`}
  >
    {lang.toUpperCase()}
  </button>
);

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useTranslation();

    return (
        <div className="absolute top-4 right-4 z-10">
            <div className="flex space-x-2">
                <LanguageButton lang="en" currentLang={language} onClick={setLanguage} />
                <LanguageButton lang="ru" currentLang={language} onClick={setLanguage} />
                <LanguageButton lang="ua" currentLang={language} onClick={setLanguage} />
            </div>
        </div>
    );
};

export default LanguageSwitcher;
