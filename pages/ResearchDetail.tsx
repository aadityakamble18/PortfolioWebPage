
import React from 'react';
import { RESEARCH } from '../constants';

interface ResearchDetailProps {
  id: string;
  onBack: () => void;
  onTriggerTerminal: (title: string, content: string[], type?: 'INFO' | 'ALERT' | 'SYSTEM') => void;
}

const ResearchDetail: React.FC<ResearchDetailProps> = ({ id, onBack, onTriggerTerminal }) => {
  const item = RESEARCH.find(r => r.id === id);

  if (!item) return <div className="p-24 text-white mono">Research Not Found</div>;

  const handleDownload = () => {
    onTriggerTerminal(
      `FILE_TRANSFER: ${item.id}_${item.type === 'RESEARCH' ? 'WHITE_PAPER' : 'PRESENTATION'}`,
      [
        "INITIALIZING SECURE DOWNLOAD...",
        "VERIFYING CHECKSUM...",
        "DECRYPTING ARCHIVE_DATA...",
        "TRANSFERRING VIA PACKET_MESH...",
        "0% ... 45% ... 80% ... 100%",
        "OK: FILE_TRANSFERRED_SUCCESSFULLY"
      ],
      'SYSTEM'
    );
  };

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
          Back to Research Archive
        </button>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className={`px-3 py-1 mono text-[10px] font-bold rounded-sm border ${item.status === 'ACTIVE' ? 'bg-green-500/10 text-green-400 border-green-500/30' : 'bg-orange-500/10 text-orange-400 border-orange-500/30'}`}>
              {item.status}
            </span>
            <span className="px-3 py-1 bg-red-500/10 border border-red-500/20 text-red-500 mono text-[10px] font-bold rounded-sm uppercase">
              {item.type}
            </span>
            <span className="mono text-white/30 text-[10px] uppercase">{item.domain} // ID_{item.id}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 uppercase tracking-tight leading-tight border-b border-white/10 pb-12">
            {item.title}
          </h1>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-16">
              <section>
                <h2 className="mono text-xs font-bold text-red-500 uppercase tracking-widest mb-6 flex items-center gap-3">
                  <div className="w-4 h-px bg-red-500" />
                  Abstract
                </h2>
                <p className="text-xl text-white/80 font-light leading-relaxed">
                  {item.summary}
                </p>
              </section>

              <section>
                <h2 className="mono text-xs font-bold text-red-500 uppercase tracking-widest mb-6 flex items-center gap-3">
                  <div className="w-4 h-px bg-red-500" />
                  Key Objectives
                </h2>
                <ul className="space-y-4">
                  {item.objectives.map((obj, i) => (
                    <li key={i} className="flex gap-4 p-5 bg-white/5 rounded-sm border border-white/5 group hover:border-red-500/30 transition-colors">
                      <span className="mono text-red-500 font-bold">OBJ_{i+1}</span>
                      <span className="text-white/70 font-light">{obj}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="mono text-xs font-bold text-red-500 uppercase tracking-widest mb-6 flex items-center gap-3">
                  <div className="w-4 h-px bg-red-500" />
                  Tools & Methodology
                </h2>
                <div className="p-8 bg-[#111113] border border-white/10 rounded-sm">
                  <div className="mb-6">
                    <p className="text-white/70 font-light leading-relaxed mb-8">
                      {item.methodology}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tools.map(tool => (
                        <span key={tool} className="px-3 py-1 bg-white/5 border border-white/10 rounded-sm text-[10px] mono text-white/50 uppercase">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="lg:col-span-4 space-y-8">
              {item.data && (
                <div className="bg-[#111113] border border-white/10 p-6 rounded-sm">
                  <h4 className="mono text-[10px] text-white/40 mb-6 uppercase tracking-widest font-bold">Performance Data</h4>
                  <div className="space-y-6">
                    {item.data.map(d => (
                      <div key={d.label}>
                        <p className="mono text-[9px] text-white/30 mb-1 uppercase">{d.label}</p>
                        <p className="mono text-lg font-bold text-red-500">{d.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-[#111113] border border-white/10 p-6 rounded-sm">
                <h4 className="mono text-[10px] text-white/40 mb-6 uppercase tracking-widest font-bold">Collaborators</h4>
                <div className="space-y-3 mono text-[10px] text-white/60 uppercase">
                  {item.collaborators.map(c => (
                    <p key={c} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-red-500/50" />
                      {c}
                    </p>
                  ))}
                </div>
              </div>

              <button 
                onClick={handleDownload}
                className="w-full py-4 bg-red-600 hover:bg-red-500 text-white mono text-xs font-bold uppercase tracking-[0.2em] rounded-sm transition-all border border-red-400/20"
              >
                {item.type === 'RESEARCH' ? 'Download Technical Paper' : 'Download Presentation PDF'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchDetail;
