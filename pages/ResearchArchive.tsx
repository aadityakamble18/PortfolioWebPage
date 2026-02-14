
import React, { useState, useMemo } from 'react';
import { RESEARCH } from '../constants';
import TelemetryCard from '../components/TelemetryCard';

interface ResearchArchiveProps {
  onBack: () => void;
  onOpenResearch: (id: string) => void;
}

const ResearchArchive: React.FC<ResearchArchiveProps> = ({ onBack, onOpenResearch }) => {
  const [filter, setFilter] = useState<'ALL' | 'RESEARCH' | 'PRESENTATION'>('ALL');

  const filteredItems = useMemo(() => {
    if (filter === 'ALL') return RESEARCH;
    return RESEARCH.filter(item => item.type === filter);
  }, [filter]);

  return (
    <div className="pt-32 pb-24 bg-[#0a0a0b] min-h-screen">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <button 
          onClick={onBack}
          className="mono text-[10px] text-red-500 hover:text-white transition-colors mb-12 flex items-center gap-2 uppercase tracking-widest font-bold"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Command Center
        </button>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-white/10 pb-8 gap-6">
          <div>
            <h1 className="text-4xl font-bold text-white uppercase tracking-tighter">Research Archive</h1>
            <p className="mono text-[10px] text-white/40 mt-2 uppercase tracking-widest">Innovation_Index // Technical_White_Papers</p>
          </div>
          <div className="flex items-center gap-2">
            {(['ALL', 'RESEARCH', 'PRESENTATION'] as const).map(f => (
              <button 
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 mono text-[9px] font-bold uppercase tracking-widest border transition-all ${filter === f ? 'bg-red-600 border-red-500 text-white' : 'bg-white/5 border-white/10 text-white/40 hover:text-white'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <TelemetryCard 
                title={item.title} 
                id={item.id}
                footer={
                  <div className="w-full flex justify-between items-center text-[10px] mono">
                    <span className="text-white/30 uppercase">Domain: {item.domain}</span>
                    <span className={`px-2 py-0.5 rounded-sm ${item.status === 'ACTIVE' ? 'bg-green-500/10 text-green-400' : 'bg-orange-500/10 text-orange-400'}`}>
                      {item.status}
                    </span>
                  </div>
                }
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="px-2 py-0.5 bg-red-500/10 border border-red-500/20 text-red-500 mono text-[8px] uppercase font-bold rounded-sm">
                    {item.type}
                  </span>
                </div>
                <p className="text-sm text-white/60 leading-relaxed font-light h-20 line-clamp-3">
                  {item.summary}
                </p>
                <button 
                  onClick={() => onOpenResearch(item.id)}
                  className="mt-6 text-xs mono text-red-500 font-bold uppercase tracking-wider flex items-center gap-2 hover:translate-x-1 transition-transform"
                >
                  Read Abstract →
                </button>
              </TelemetryCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchArchive;
