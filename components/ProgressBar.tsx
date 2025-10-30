import React from 'react';

interface ProgressBarProps {
  value: number;
  max: number;
  label: string;
  colorClass: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, max, label, colorClass }) => {
  const percentage = max > 0 ? (value / max) * 100 : 0;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center text-xs mb-1">
        <span className="font-bold text-slate-300">{label}</span>
        <span className="text-slate-400">{`${Math.round(value)} / ${max}`}</span>
      </div>
      <div className="w-full bg-slate-700 rounded-full h-2.5">
        <div
          className={`${colorClass} h-2.5 rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
