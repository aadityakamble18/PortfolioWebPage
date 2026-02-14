
import React, { useState, useEffect } from 'react';

interface StatusPageProps {
  onBack: () => void;
}

const StatusPage: React.FC<StatusPageProps> = ({ onBack }) => {
  const [nodes, setNodes] = useState([
    { id: 'LDN-01', status: 'ONLINE', ping: '12ms', load: 14 },
    { id: 'SFO-04', status: 'ONLINE', ping: '84ms', load: 32 },
    { id: 'TKY-09', status: 'STANDBY', ping: '192ms', load: 2 },
    { id: 'BER-02', status: 'ONLINE', ping: '22ms', load: 8 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setNodes(prev => prev.map(node => ({
        ...node,
        load: Math.min(100, Math.max(0, node.load + (Math.random() * 10 - 5))),
        ping: node.status === 'ONLINE' ? `${Math.floor(Math.random() * 20 + (node.ping.includes('12') ? 10 : 80))}ms` : node.ping
      })));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
          Back to Dashboard
        </button>

        <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-8">
          <div>
            <h1 className="text-4xl font-bold text-white uppercase tracking-tighter">Global Node Status</h1>
            <p className="mono text-[10px] text-white/40 mt-2 uppercase tracking-widest">Network_Infrastructure_Overview</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            <span className="mono text-xs font-bold text-green-500 uppercase">System Integrity: 100%</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {nodes.map(node => (
            <div key={node.id} className="bg-[#111113] border border-white/10 p-6 rounded-sm glow-border">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="mono text-[10px] text-white/30 uppercase">Node_Identifier</p>
                  <h3 className="mono text-sm font-bold text-white">{node.id}</h3>
                </div>
                <span className={`mono text-[9px] px-2 py-0.5 rounded-sm font-bold ${node.status === 'ONLINE' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-white/5 text-white/40 border border-white/10'}`}>
                  {node.status}
                </span>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="mono text-[9px] text-white/30 uppercase">Latency</span>
                  <span className="mono text-xs text-white">{node.ping}</span>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="mono text-[9px] text-white/30 uppercase">Load</span>
                    <span className="mono text-xs text-white">{Math.floor(node.load)}%</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 transition-all duration-500" style={{ width: `${node.load}%` }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#0f0f11] border border-white/5 p-8 rounded-sm">
          <h3 className="mono text-xs font-bold text-white uppercase tracking-widest mb-6">Operational Continuity Log</h3>
          <div className="space-y-2 mono text-[10px]">
            <p className="text-white/40"><span className="text-red-500">[08:42:01]</span> Node LDN-01 completed batch update.</p>
            <p className="text-white/40"><span className="text-red-500">[09:15:22]</span> Redirecting traffic via BER-02 to optimize latency.</p>
            <p className="text-white/40"><span className="text-red-500">[10:02:44]</span> Heartbeat signal verified for all Tier-1 clusters.</p>
            <p className="text-green-400 font-bold animate-pulse"><span className="text-green-500">[10:15:00]</span> SYSTEM_SCAN: NO VULNERABILITIES DETECTED.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusPage;
