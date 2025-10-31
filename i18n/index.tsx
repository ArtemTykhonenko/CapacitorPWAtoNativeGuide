import React, { createContext, useContext, useState, useMemo, ReactNode } from 'react';
import { translations, Step, StepContent } from './locales';

export type Language = 'en' | 'ru' | 'ua';

export { Step, StepContent };

type Translations = typeof translations.ru;

interface LanguageContextType {
    language: Language;
    setLanguage: (language: Language) => void;
    t: (key: string, replacements?: Record<string, string | number>) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>(() => {
        const storedLang = localStorage.getItem('language');
        return (storedLang && ['en', 'ru', 'ua'].includes(storedLang))
            ? storedLang as Language
            : 'en'; // Default to English
    });

    const setLanguage = (lang: Language) => {
        localStorage.setItem('language', lang);
        setLanguageState(lang);
    };
    
    const t = (key: string, replacements?: Record<string, string | number>): any => {
        const keys = key.split('.');
        let result: any = translations[language];
        for (const k of keys) {
            result = result?.[k];
            if (result === undefined) {
                console.warn(`Translation key not found: ${key}`);
                return key;
            }
        }

        if (typeof result === 'string' && replacements) {
            return Object.entries(replacements).reduce((acc, [placeholder, value]) => {
                return acc.replace(`{${placeholder}}`, String(value));
            }, result);
        }

        return result;
    };


    const value = useMemo(() => ({ language, setLanguage, t }), [language]);

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useTranslation = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useTranslation must be used within a LanguageProvider');
    }
    return context;
};