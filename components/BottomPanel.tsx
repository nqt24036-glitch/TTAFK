import React from 'react';
import IconButton from './IconButton';

interface BottomPanelProps {
    onCultivate: () => void;
}

const BottomPanel: React.FC<BottomPanelProps> = ({ onCultivate }) => {
    const showPlaceholder = (feature: string) => {
        alert(`${feature} feature is not yet implemented.`);
    };
  
    return (
    <div className="bg-slate-800/50 backdrop-blur-sm border-t border-slate-700 w-full px-4 py-2">
      <div className="flex items-center justify-center space-x-4">
        <IconButton icon="🧘‍♂️" label="Tu luyện" onClick={onCultivate} />
        <IconButton icon="🗺️" label="Khám phá" onClick={() => showPlaceholder('Explore')} />
        <IconButton icon="⚔️" label="Chiến đấu" onClick={() => showPlaceholder('Combat')} />
        <IconButton icon="🔮" label="Luyện đan" onClick={() => showPlaceholder('Alchemy')} />
        <IconButton icon="💎" label="Trang bị" onClick={() => showPlaceholder('Equipment')} />
        <IconButton icon="👥" label="Đồng hành" onClick={() => showPlaceholder('Companions')} />
        <IconButton icon="🏯" label="Tông môn" onClick={() => showPlaceholder('Sect')} />
        <IconButton icon="📖" label="Nhật ký" onClick={() => showPlaceholder('Journal')} />
      </div>
    </div>
  );
};

export default BottomPanel;
