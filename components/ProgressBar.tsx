
import React from 'react';

interface ProgressBarProps {
    current: number;
    total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
    const percentage = (current / total) * 100;

    return (
        <div>
            <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-slate-400">Прогресс</span>
                <span className="text-sm font-medium text-slate-400">{current} из {total}</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2.5">
                <div 
                    className="bg-gradient-to-r from-sky-500 to-indigo-500 h-2.5 rounded-full transition-all duration-500 ease-out" 
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;
