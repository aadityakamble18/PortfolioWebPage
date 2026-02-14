
import React from 'react';
import { RESEARCH } from '../constants';
import TelemetryCard from './TelemetryCard';

interface ResearchProps {
  onOpenResearch: (id: string) => void;
  onNavigateAll?: () => void;
}

const Research: React.FC<ResearchProps> = ({ onOpenResearch, onNavigateAll }) => {
  const featuredResearch = RESEARCH.filter(r => r.type === 'RESEARCH').slice(0, 3);
  const featuredPresentations = RESEARCH.filter(r => r.type === 'PRESENTATION').slice(0, 2);
  const allFeatured = [...featuredResearch, ...featuredPresentations];

  return (
    <section className="py-24 bg-[#0a0a0b]">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex items-center gap-4 mb-16">
          <div className="flex-grow h-px bg-gradient-to-r from-transparent via-white/10 to-white/10" />
          <h2 className="mono text-sm font-bold text-red-500 uppercase tracking-[0.4em] whitespace-nowrap px-4">Research & Innovation</h2>
          <div className="flex-grow h-px bg-gradient-to-l from-transparent via-white/10 to-white/10" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {allFeatured.map((item) => (
            <TelemetryCard 
              key={item.id} 
              title={item.title} 
              id={item.id}
              footer={
                <div className="w-full flex justify-between items-center text-[10px] mono">
                  <span className="text-white/30">DOMAIN: {item.domain}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-white/30">STATUS:</span>
                    <span className={`px-2 py-0.5 rounded-sm ${item.status === 'ACTIVE' ? 'bg-green-500/10 text-green-400' : item.status === 'PEER_REVIEW' ? 'bg-blue-500/10 text-blue-400' : 'bg-orange-500/10 text-orange-400'}`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              }
            >
              <div className="flex justify-between items-start mb-4">
                <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-white/40 mono text-[8px] uppercase font-bold rounded-sm">
                  {item.type}
                </span>
              </div>
              <p className="text-sm text-white/60 leading-relaxed font-light line-clamp-2">
                {item.summary}
              </p>
              <button 
                onClick={() => onOpenResearch(item.id)}
                className="mt-4 text-xs mono text-red-500 font-bold uppercase tracking-wider flex items-center gap-2 hover:translate-x-1 transition-transform"
              >
                Inspect Technical Documentation
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </TelemetryCard>
          ))}
        </div>

        {onNavigateAll && (
          <div className="flex justify-center mt-12">
            <button 
              onClick={onNavigateAll}
              className="group relative inline-flex items-center gap-2 mono text-xs font-bold text-red-500 uppercase tracking-widest transition-all duration-300"
            >
              <span className="relative">
                View All Research & Presentations
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-red-500 transition-all duration-300 group-hover:w-full" />
              </span>
              <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Research;
