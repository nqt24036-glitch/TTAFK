import React from 'react';
import type { Player } from '../types';
import ProgressBar from './ProgressBar';

interface LeftPanelProps {
  player: Player;
}

const LeftPanel: React.FC<LeftPanelProps> = ({ player }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4 flex flex-col space-y-4 h-full overflow-y-auto">
      <div className="flex flex-col items-center space-y-2">
        <img
          src={player.avatarUrl}
          alt="Avatar"
          className="w-24 h-24 rounded-full border-2 border-cyan-500 shadow-lg shadow-cyan-500/20"
        />
        <h2 className="text-xl font-bold text-cyan-300">{player.name}</h2>
        <p className="text-sm text-slate-400">{player.title}</p>
      </div>

      <div className="border-t border-slate-700 pt-4">
        <p className="text-sm"><span className="font-semibold text-slate-400">Cảnh giới:</span> <span className="text-amber-400">{player.level}</span></p>
        <p className="text-sm"><span className="font-semibold text-slate-400">Tông môn:</span> {player.sect}</p>
      </div>

      <div className="space-y-3">
        <ProgressBar label="Sinh lực" value={player.health} max={player.maxHealth} colorClass="bg-red-500" />
        <ProgressBar label="Linh lực" value={player.spiritPower} max={player.maxSpiritPower} colorClass="bg-blue-500" />
        <ProgressBar label="Kinh nghiệm" value={player.experience} max={player.maxExperience} colorClass="bg-green-500" />
      </div>

      <div className="border-t border-slate-700 pt-4">
        <h3 className="font-semibold text-slate-300 mb-2 text-center">Chỉ số</h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <p><span className="text-slate-400">Thể:</span> {player.stats.body}</p>
          <p><span className="text-slate-400">Linh:</span> {player.stats.spirit}</p>
          <p><span className="text-slate-400">Trí:</span> {player.stats.intellect}</p>
          <p><span className="text-slate-400">Đạo:</span> {player.stats.dao}</p>
          <p><span className="text-slate-400">Phúc duyên:</span> {player.stats.fortune}</p>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
