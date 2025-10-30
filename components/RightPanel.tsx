import React, { useState, useRef, useEffect } from 'react';
import type { LogEntry } from '../types';
import { LogCategory } from '../types';
import { LOG_CATEGORIES } from '../constants';

interface RightPanelProps {
  logs: LogEntry[];
}

const RightPanel: React.FC<RightPanelProps> = ({ logs }) => {
  const [filter, setFilter] = useState<LogCategory | 'Tất cả'>('Tất cả');
  const logContainerRef = useRef<HTMLDivElement>(null);

  const filteredLogs = logs.filter(log => filter === 'Tất cả' || log.category === filter);
  
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [filteredLogs]);

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4 flex flex-col h-full">
      <h3 className="text-lg font-bold text-center mb-2 text-slate-300">Nhật ký Tu tiên</h3>
      <div className="flex flex-wrap justify-center gap-2 mb-3 border-b border-slate-700 pb-3">
        <button 
          onClick={() => setFilter('Tất cả')}
          className={`px-3 py-1 text-xs rounded-full transition-colors ${filter === 'Tất cả' ? 'bg-cyan-500 text-slate-900' : 'bg-slate-700 hover:bg-slate-600'}`}>
          Tất cả
        </button>
        {LOG_CATEGORIES.map(cat => (
          <button 
            key={cat} 
            onClick={() => setFilter(cat)}
            className={`px-3 py-1 text-xs rounded-full transition-colors ${filter === cat ? 'bg-cyan-500 text-slate-900' : 'bg-slate-700 hover:bg-slate-600'}`}>
            {cat}
          </button>
        ))}
      </div>
      <div ref={logContainerRef} className="flex-grow overflow-y-auto pr-2 space-y-2 text-sm">
        {filteredLogs.slice(-100).map(log => (
          <div key={log.id} className="text-slate-400">
            <span className="text-slate-500 mr-2">[{log.timestamp}]</span>
            <span className={log.category === LogCategory.SYSTEM ? 'text-amber-400' : ''}>{log.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightPanel;
