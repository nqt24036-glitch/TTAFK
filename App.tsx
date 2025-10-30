import React, { useState, useEffect, useCallback, useRef } from 'react';
import LeftPanel from './components/LeftPanel';
import CenterPanel from './components/CenterPanel';
import RightPanel from './components/RightPanel';
import TopPanel from './components/TopPanel';
import BottomPanel from './components/BottomPanel';
import type { Player, LogEntry, GameEvent } from './types';
import { LogCategory } from './types';
import { INITIAL_PLAYER, REALMS } from './constants';

const App: React.FC = () => {
  const [player, setPlayer] = useState<Player>(INITIAL_PLAYER);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [currentEvent, setCurrentEvent] = useState<GameEvent>({
    text: 'Bạn tỉnh dậy trong một căn nhà tranh đơn sơ, cảm nhận được luồng linh khí mỏng manh trong không khí. Con đường tu tiên của bạn bắt đầu từ đây...\nHãy bắt đầu tu luyện để hấp thu linh khí.',
    choices: [],
  });
  
  const logIdCounter = useRef(0);

  const addLog = useCallback((message: string, category: LogCategory) => {
    setLogs(prevLogs => {
      const newLog: LogEntry = {
        id: logIdCounter.current++,
        message,
        category,
        timestamp: new Date().toLocaleTimeString('vi-VN'),
      };
      return [...prevLogs, newLog];
    });
  }, []);
  
  useEffect(() => {
    addLog('Chào mừng đến với thế giới Tu Tiên!', LogCategory.SYSTEM);
    
    const gameLoop = setInterval(() => {
        handleCultivate(true); // Passive cultivation
    }, 5000);

    return () => clearInterval(gameLoop);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCultivate = (isPassive = false) => {
    setPlayer(p => {
      const spiritGain = Math.floor(p.stats.spirit / 2 + p.stats.dao);
      const newExp = p.experience + spiritGain;
      
      if (!isPassive) {
        addLog(`Bạn tập trung tu luyện, hấp thu được ${spiritGain} điểm kinh nghiệm.`, LogCategory.CULTIVATION);
      }
      
      if (newExp >= p.maxExperience) {
        // Breakthrough
        const currentRealmIndex = REALMS.indexOf(p.level);
        const nextRealmIndex = currentRealmIndex + 1;
        if(nextRealmIndex < REALMS.length) {
            const newRealm = REALMS[nextRealmIndex];
            addLog(`ĐỘT PHÁ! Bạn đã thành công đột phá tới cảnh giới ${newRealm}!`, LogCategory.SYSTEM);
            
            const newMaxExp = Math.floor(p.maxExperience * 2.5);
            const newMaxHealth = Math.floor(p.maxHealth * 1.5);
            const newMaxSpirit = Math.floor(p.maxSpiritPower * 1.5);

            return {
                ...p,
                level: newRealm,
                experience: 0,
                maxExperience: newMaxExp,
                health: newMaxHealth,
                maxHealth: newMaxHealth,
                spiritPower: newMaxSpirit,
                maxSpiritPower: newMaxSpirit,
                stats: {
                    ...p.stats,
                    body: p.stats.body + 5,
                    spirit: p.stats.spirit + 5,
                    intellect: p.stats.intellect + 2,
                }
            };
        }
      }
      return { ...p, experience: newExp };
    });
  };

  const manualCultivate = () => {
    setCurrentEvent({
        text: "Bạn ngồi xuống, nhắm mắt lại và bắt đầu vận chuyển công pháp. Linh khí từ trời đất từ từ tụ lại, chảy vào cơ thể bạn, biến thành từng chút kinh nghiệm trên con đường tu tiên.",
        choices: [
            { text: "Dừng tu luyện", action: () => setCurrentEvent(prev => ({...prev, choices:[]})) }
        ]
    });
    handleCultivate(false);
  }

  return (
    <div 
      className="h-screen w-screen p-2 md:p-4 flex flex-col bg-cover bg-center bg-fixed" 
      style={{backgroundImage: "url('https://picsum.photos/seed/fantasyworld/1920/1080')"}}
    >
        <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"></div>
        <div className="relative flex flex-col h-full w-full">
            <TopPanel />
            <main className="flex-grow w-full py-2 md:py-4 overflow-hidden">
                <div className="h-full w-full grid grid-cols-1 md:grid-cols-4 md:grid-rows-1 gap-2 md:gap-4">
                    {/* On mobile, order is different */}
                    <div className="md:col-span-1 h-full min-h-0 order-2 md:order-1">
                        <LeftPanel player={player} />
                    </div>
                    <div className="md:col-span-2 h-full min-h-0 order-1 md:order-2">
                        <CenterPanel event={currentEvent} />
                    </div>
                    <div className="md:col-span-1 h-full min-h-0 order-3 md:order-3">
                        <RightPanel logs={logs} />
                    </div>
                </div>
            </main>
            <BottomPanel onCultivate={manualCultivate} />
        </div>
    </div>
  );
};

export default App;
