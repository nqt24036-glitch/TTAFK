import React, { useState, useEffect, useRef } from 'react';
import type { GameEvent } from '../types';

interface CenterPanelProps {
  event: GameEvent;
}

const useTypewriter = (text: string, speed = 30) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        setDisplayText(''); // Reset on new text
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                setDisplayText(prevText => prevText + text.charAt(i));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, speed);

        return () => {
            clearInterval(typingInterval);
        };
    }, [text, speed]);

    return displayText;
};

const CenterPanel: React.FC<CenterPanelProps> = ({ event }) => {
  const displayedText = useTypewriter(event.text);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [displayedText]);

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 flex flex-col justify-between h-full">
      <div ref={contentRef} className="text-lg leading-relaxed text-slate-300 prose prose-invert max-w-none flex-grow overflow-y-auto mb-4 pr-2">
        <p style={{ whiteSpace: 'pre-wrap' }}>{displayedText}</p>
      </div>
      <div className="flex-shrink-0 flex justify-center space-x-4">
        {event.choices.map((choice, index) => (
          <button
            key={index}
            onClick={choice.action}
            className="px-6 py-2 bg-slate-700 border border-slate-600 rounded-md text-cyan-300 hover:bg-cyan-500 hover:text-slate-900 font-semibold transition-all duration-200 shadow-md hover:shadow-cyan-500/30"
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CenterPanel;
