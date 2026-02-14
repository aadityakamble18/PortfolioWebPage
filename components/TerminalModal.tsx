
import React from 'react';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string[];
  type?: 'INFO' | 'ALERT' | 'SYSTEM';
}

const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose, title, content, type = 'INFO' }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-[#0f0f11] border border-red-500/30 rounded-sm glow-border overflow-hidden">
        <div className="flex items-center justify-between p-3 border-b border-white/10 bg-white/5">
          <div className="flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full ${type === 'ALERT' ? 'bg-red-500 animate-pulse' : 'bg-red-500'}`} />
            <h3 className="mono text-[10px] font-bold tracking-widest text-white/80 uppercase">{title}</h3>
          </div>
          <button onClick={onClose} className="mono text-[10px] text-white/40 hover:text-white transition-colors uppercase">
            [Close_ESC]
          </button>
        </div>
        
        <div className="p-6 mono text-[11px] leading-relaxed space-y-2">
          {content.map((line, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-white/20 select-none">{(i + 1).toString().padStart(2, '0')}</span>
              <span className={line.startsWith('!') ? 'text-red-400' : 'text-white/70'}>{line}</span>
            </div>
          ))}
        </div>
        
        <div className="p-3 border-t border-white/5 bg-black/40 flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-1 bg-red-600 hover:bg-red-500 text-white mono text-[10px] font-bold uppercase tracking-widest transition-all"
          >
            Acknowledge
          </button>
        </div>
      </div>
    </div>
  );
};

export default TerminalModal;
