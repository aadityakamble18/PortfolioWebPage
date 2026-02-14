
import React from 'react';
import { CAPABILITIES } from '../constants';

const Capabilities: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a0b] relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl mb-16">
          <span className="mono text-red-500 text-sm font-bold uppercase tracking-widest">Capabilities</span>
          <h2 className="text-4xl font-bold text-white mt-2">TECHNICAL ARCHITECTURE DOMAINS</h2>
          <p className="text-white/40 mt-4 leading-relaxed max-w-xl">
            A comprehensive overview of system competencies developed through multi-discipline motorsport R&D and high-performance product engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 overflow-hidden rounded-sm">
          {CAPABILITIES.map((cap) => (
            <div key={cap.category} className="bg-[#0f0f11] p-8 group hover:bg-[#141418] transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-6 bg-red-600" />
                <h3 className="mono text-xs font-bold text-white uppercase tracking-wider">{cap.category}</h3>
              </div>
              <ul className="space-y-4">
                {cap.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-red-500/30 group-hover:bg-red-500 transition-colors" />
                    <span className="text-sm text-white/60 group-hover:text-white transition-colors font-light uppercase tracking-tight">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="mono text-[8px] text-red-500">SYS_LVL: EXPERT</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
