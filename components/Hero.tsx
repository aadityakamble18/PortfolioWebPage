
import React, { useState, useEffect } from 'react';

interface HeroProps {
  onOpenSpecs: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenSpecs }) => {
  const [telemetry, setTelemetry] = useState({ 
    pwr: 0, 
    visitors: 0 
  });

  const [globalPop, setGlobalPop] = useState<number>(8161903000);

  const [uptime, setUptime] = useState({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // REAL VISITOR COUNTER
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch('https://api.counterapi.dev/v1/aaditya_kamble_portfolio/global_hits/up');
        if (response.ok) {
          const data = await response.json();
          setTelemetry(prev => ({ ...prev, visitors: data.count }));
        } else {
          const stored = localStorage.getItem('ak_visitor_fallback') || "14284";
          const newVal = parseInt(stored) + 1;
          setTelemetry(prev => ({ ...prev, visitors: newVal }));
          localStorage.setItem('ak_visitor_fallback', newVal.toString());
        }
      } catch (err) {
        const stored = localStorage.getItem('ak_visitor_fallback') || "14284";
        setTelemetry(prev => ({ ...prev, visitors: parseInt(stored) }));
      }
    };

    fetchVisitorCount();

    // LIVE AGE / UPTIME
    const startTime = new Date('2004-02-18T22:04:00+05:30').getTime();
    const updateUptime = () => {
      const now = Date.now();
      const diff = now - startTime;
      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      setUptime({
        years: Math.floor(days / 365.25),
        days: Math.floor(days % 365.25),
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60
      });
    };
    const uptimeInterval = setInterval(updateUptime, 1000);

    // GLOBAL POPULATION COUNTER (Linear Estimation)
    const basePop = 8100000000;
    const baseTime = new Date('2024-01-01T00:00:00Z').getTime();
    const growthPerSec = 2.31481;

    const updatePop = () => {
      const elapsedSecs = (Date.now() - baseTime) / 1000;
      setGlobalPop(Math.floor(basePop + (elapsedSecs * growthPerSec)));
    };
    updatePop();
    const popInterval = setInterval(updatePop, 500);

    // PERFORMANCE JITTER
    const jitterInterval = setInterval(() => {
      setTelemetry(prev => ({
        ...prev,
        pwr: Math.floor(88 + Math.random() * 10),
      }));
    }, 1500);

    return () => {
      clearInterval(uptimeInterval);
      clearInterval(jitterInterval);
      clearInterval(popInterval);
    };
  }, []);

  const handleInit = () => {
    document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
  };

  const infoPanelItems = [
    { label: 'System Uptime', val: `${uptime.years}Y ${uptime.days}D ${uptime.hours}H` },
    { label: 'Core Count', val: `${navigator.hardwareConcurrency || 8} Logical Cores` },
    { label: 'Visitor Index', val: telemetry.visitors > 0 ? telemetry.visitors.toLocaleString() : 'SYNCING...' },
    { label: 'System Status', val: 'Operational' }
  ];

  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="mono text-[10px] text-red-400 font-bold uppercase tracking-wider">Aaditya Kamble // Performance_Link_Active</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter uppercase italic">
              ENGINEERING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">AT THE CORE</span> <br />
              <span className="text-3xl md:text-5xl block mt-2 font-bold opacity-90">PERFORMANCE BY DESIGN</span>
              <span className="mono text-sm md:text-lg text-red-500 block mt-4 font-bold tracking-[0.2em] not-italic">CONTROLLED BY SYSTEMS</span>
            </h1>
            
            <p className="mono text-[10px] md:text-xs text-white/50 mb-8 tracking-[0.3em] uppercase border-l-2 border-red-600 pl-4 py-1">
              EV Systems | Embedded Control | Simulation & Modeling | System Architecture
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-2xl">
              {infoPanelItems.map(item => (
                <div key={item.label} className="border border-white/10 bg-white/5 p-3 rounded-sm group hover:border-red-500/40 transition-colors">
                  <p className="mono text-[8px] text-white/30 uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="mono text-[10px] font-bold text-white uppercase leading-tight">{item.val}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handleInit}
                className="px-8 py-3 bg-red-600 hover:bg-red-500 text-white rounded-sm font-bold transition-all flex items-center gap-2 group border border-red-400/20 shadow-[0_0_20px_rgba(239,68,68,0.2)]"
              >
                <span className="uppercase tracking-widest text-sm">Initialize Interface</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button 
                onClick={onOpenSpecs}
                className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white rounded-sm font-bold transition-all border border-white/10"
              >
                <span className="uppercase tracking-widest text-sm">System Specs</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative cursor-pointer group" onClick={onOpenSpecs}>
              <div className="absolute -inset-10 bg-red-500/10 blur-[100px] rounded-full group-hover:bg-red-500/20 transition-all" />
              <div className="relative border border-white/10 bg-[#0f0f11] p-6 rounded-sm glow-border group-hover:border-red-500/50 transition-all">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-sm bg-red-600/20 border border-red-500/50 flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-red-500" />
                    </div>
                    <div>
                      <p className="mono text-[10px] text-white/40 uppercase">Device_Identity</p>
                      <p className="mono text-xs font-bold text-white uppercase">Client_Node_v4.2</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="mono text-[10px] text-red-500 font-bold tracking-widest">LIVE_FEED</span>
                    <span className="mono text-[8px] text-white/30 uppercase tracking-tighter">Diagnostic_Stream</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-sm">
                    <p className="mono text-[9px] text-white/40 mb-2 uppercase tracking-widest font-bold">Structural_Uptime_Log</p>
                    <div className="flex justify-between items-baseline gap-2">
                      <div className="flex flex-col">
                        <span className="mono text-2xl font-black text-white">{uptime.years}</span>
                        <span className="mono text-[8px] text-red-500 font-bold uppercase tracking-tighter">Years</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="mono text-2xl font-black text-white">{uptime.days.toString().padStart(3, '0')}</span>
                        <span className="mono text-[8px] text-red-500 font-bold uppercase tracking-tighter">Days</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="mono text-2xl font-black text-white">{uptime.hours.toString().padStart(2, '0')}</span>
                        <span className="mono text-[8px] text-red-500 font-bold uppercase tracking-tighter">Hours</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="mono text-2xl font-black text-white">{uptime.minutes.toString().padStart(2, '0')}</span>
                        <span className="mono text-[8px] text-red-500 font-bold uppercase tracking-tighter">Mins</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="mono text-2xl font-black text-red-500 animate-pulse">{uptime.seconds.toString().padStart(2, '0')}</span>
                        <span className="mono text-[8px] text-red-500 font-bold uppercase tracking-tighter">Secs</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center col-span-2">
                      <p className="mono text-[9px] text-white/40 mb-1 uppercase tracking-tighter">Global_Population</p>
                      <p className="mono text-xl font-bold text-white">{globalPop.toLocaleString()}</p>
                      <div className="w-full h-1 bg-white/5 mt-2 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500 animate-pulse" style={{ width: '100%' }} />
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="mono text-[9px] text-white/40 mb-1 uppercase tracking-tighter">Visitor_Index</p>
                      <p className="mono text-lg font-bold text-white">{telemetry.visitors > 0 ? telemetry.visitors.toLocaleString() : '...'}</p>
                      <div className="w-full h-1 bg-white/5 mt-2 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500 transition-all duration-1000" style={{ width: `${Math.min(100, (telemetry.visitors / 1000) * 100)}%` }} />
                      </div>
                    </div>
                  </div>

                  <div className="h-24 bg-black/40 border border-white/5 rounded-sm p-4 relative overflow-hidden flex items-end gap-1">
                    {[...Array(24)].map((_, i) => (
                      <div 
                        key={i} 
                        className="flex-grow bg-red-500/30 rounded-t-sm transition-all duration-700 ease-in-out"
                        style={{ height: `${Math.random() * 80 + 10}%` }}
                      />
                    ))}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  <div className="flex justify-between items-center text-[9px] mono text-white/30 uppercase tracking-widest font-bold">
                    <span>ARCH: {navigator.platform.split(' ')[0] || 'X64_BIN'}</span>
                    <span className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
                      Signal: Nom
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
