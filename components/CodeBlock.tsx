
import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from './icons';

interface CodeBlockProps {
    code: string;
    language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <div className="bg-slate-950 rounded-lg my-4 relative group">
            <div className="flex justify-between items-center px-4 py-2 bg-slate-800 rounded-t-lg border-b border-slate-700">
                <span className="text-xs font-semibold text-slate-400 uppercase">{language}</span>
                <button
                    onClick={handleCopy}
                    className="flex items-center text-xs text-slate-400 hover:text-white transition-colors duration-200"
                >
                    {isCopied ? (
                        <>
                            <CheckIcon className="h-4 w-4 mr-1 text-green-400" />
                            <span>Скопировано!</span>
                        </>
                    ) : (
                        <>
                           <ClipboardIcon className="h-4 w-4 mr-1" />
                           <span>Копировать</span>
                        </>
                    )}
                </button>
            </div>
            <pre className="p-4 overflow-x-auto">
                <code className={`language-${language} text-sm text-slate-300`}>
                    {code}
                </code>
            </pre>
        </div>
    );
};

export default CodeBlock;
