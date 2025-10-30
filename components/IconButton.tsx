import React from 'react';

interface IconButtonProps {
  icon: string | React.ReactNode;
  label: string;
  onClick: () => void;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, label, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center space-y-1 text-slate-400 hover:text-cyan-300 transition-colors duration-200 p-2 rounded-lg hover:bg-slate-700/50 ${className}`}
    >
      <div className="text-2xl">{icon}</div>
      <span className="text-xs font-light tracking-wider">{label}</span>
    </button>
  );
};

export default IconButton;
