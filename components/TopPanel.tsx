import React from 'react';
import IconButton from './IconButton';

const TopPanel: React.FC = () => {
    const showPlaceholder = (feature: string) => {
        alert(`${feature} feature is not yet implemented.`);
    };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700 w-full px-4 py-1">
      <div className="flex items-center justify-end space-x-2">
        <IconButton icon="⚙️" label="Cài đặt" onClick={() => showPlaceholder('Settings')} />
        <IconButton icon="💬" label="Chat" onClick={() => showPlaceholder('Chat')} />
        <IconButton icon="🧾" label="BXH" onClick={() => showPlaceholder('Leaderboard')} />
        <IconButton icon="🎯" label="Thành tựu" onClick={() => showPlaceholder('Achievements')} />
        <IconButton icon="💰" label="Cửa hàng" onClick={() => showPlaceholder('Shop')} />
        <IconButton icon="💌" label="Thư" onClick={() => showPlaceholder('Mail')} />
      </div>
    </div>
  );
};

export default TopPanel;
