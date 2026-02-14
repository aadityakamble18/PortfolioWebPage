
import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="career" className="py-24 bg-[#0d0d0f]">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="mono text-red-500 text-sm font-bold uppercase tracking-widest">Career Telemetry</span>
            <h2 className="text-4xl font-bold text-white mt-2 uppercase tracking-tight">System Progression Log</h2>
          </div>
          <div className="mono text-[10px] text-white/40 space-y-1 text-right">
            <p>LAST_SYNC: 2024.12.01</p>
            <p>DB_CONNECT: ESTABLISHED</p>
          </div>
        </div>

        <div className="space-y-4">
          {EXPERIENCE.map((exp, idx) => (
            <div 
              key={exp.id} 
              className="relative border border-white/10 bg-[#111113] p-8 group hover:border-red-500/40 transition-all rounded-sm"
            >
              {/* Timeline Indicator */}
              <div className="absolute top-0 left-0 w-1 h-full bg-white/5 group-hover:bg-red-600 transition-colors" />
              
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-3">
                  <p className="mono text-xs text-red-500 font-bold mb-1 uppercase">{exp.period}</p>
                  <p className="mono text-[10px] text-white/30 uppercase">Session_{idx + 1}</p>
                </div>
                
                <div className="md:col-span-5">
                  <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">{exp.role}</h3>
                  <p className="mono text-xs text-white/50 mb-4 font-bold">{exp.company}</p>
                  <p className="text-sm text-white/60 font-light leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <div className="md:col-span-4">
                  <div className="bg-black/20 p-6 rounded-sm border border-white/5">
                    <h4 className="mono text-[10px] text-white/40 mb-4 uppercase font-bold tracking-widest">Key Milestones</h4>
                    <ul className="space-y-3">
                      {exp.milestones.map((ms, i) => (
                        <li key={i} className="flex gap-3 text-xs text-white/70">
                          <span className="mono text-red-500 font-bold">{i+1}.</span>
                          <span className="font-light">{ms}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;