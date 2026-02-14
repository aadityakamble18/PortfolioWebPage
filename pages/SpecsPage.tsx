
import React, { useState, useEffect } from 'react';

interface SpecsPageProps {
  onBack: () => void;
}

const SpecsPage: React.FC<SpecsPageProps> = ({ onBack }) => {
  const [telemetry, setTelemetry] = useState({ 
    visitors: 0 
  });

  const [nagpurTemp, setNagpurTemp] = useState<number | null>(null);
  const [globalPop, setGlobalPop] = useState<number>(8161903000);

  const [uptime, setUptime] = useState({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // VISITOR COUNTER
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch('https://api.counterapi.dev/v1/aaditya_kamble_portfolio/global_hits/get');
        if (response.ok) {
          const data = await response.json();
          setTelemetry(prev => ({ ...prev, visitors: data.count }));
        }
      } catch (err) {
        const stored = localStorage.getItem('ak_visitor_fallback') || "14284";
        setTelemetry(prev => ({ ...prev, visitors: parseInt(stored) }));
      }
    };

    // NAGPUR WEATHER
    const fetchNagpurWeather = async () => {
      try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=21.1458&longitude=79.0882&current_weather=true');
        if (response.ok) {
          const data = await response.json();
          setNagpurTemp(data.current_weather.temperature);
        }
      } catch (err) {
        setNagpurTemp(32);
      }
    };

    fetchVisitorCount();
    fetchNagpurWeather();

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

    // GLOBAL POPULATION COUNTER
    const basePop = 8100000000;
    const baseTime = new Date('2024-01-01T00:00:00Z').getTime();
    const growthPerSec = 2.31481;
    const updatePop = () => {
      const elapsedSecs = (Date.now() - baseTime) / 1000;
      setGlobalPop(Math.floor(basePop + (elapsedSecs * growthPerSec)));
    };
    updatePop();
    const popInterval = setInterval(updatePop, 500);

    return () => {
      clearInterval(uptimeInterval);
      clearInterval(popInterval);
    };
  }, []);

  return (
    <div className="pt-32 pb-24 bg-[#0a0a0b] min-h-screen">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-8 gap-6">
          <div>
            <button 
              onClick={onBack}
              className="mono text-[10px] text-red-500 hover:text-white transition-colors mb-4 flex items-center gap-2 uppercase tracking-widest font-bold"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Exit Diagnostic Mode
            </button>
            <h1 className="text-4xl font-bold text-white uppercase tracking-tighter italic">System Diagnostic Center</h1>
          </div>
          <div className="mono text-[10px] text-white/30 text-right">
            <p>REF_ID: 0x9942_SPEC_CORE</p>
            <p>LOCAL_TIME: {new Date().toLocaleTimeString()}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-[#111113] border border-white/10 p-8 rounded-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 mono text-[8px] text-red-500/40 uppercase">Live_Diagnostic_Stream</div>
              <h3 className="mono text-xs font-bold text-white uppercase tracking-widest mb-8 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                Structural Telemetry & Global Indices
              </h3>
              
              <div className="grid grid-cols-3 gap-6 mb-10">
                <div className="bg-black/40 border border-white/5 p-4 rounded-sm text-center">
                  <p className="mono text-[9px] text-white/40 mb-2 uppercase tracking-tighter">Global_Population</p>
                  <p className="mono text-xl font-bold text-white">{globalPop.toLocaleString()}</p>
                  <div className="w-full h-1 bg-white/5 mt-3 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 animate-pulse" style={{ width: '100%' }} />
                  </div>
                </div>
                <div className="bg-black/40 border border-white/5 p-4 rounded-sm text-center">
                  <p className="mono text-[9px] text-white/40 mb-2 uppercase tracking-tighter">Visitor_Index</p>
                  <p className="mono text-2xl font-bold text-white">{telemetry.visitors.toLocaleString()}</p>
                  <div className="w-full h-1 bg-white/5 mt-3 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 transition-all duration-1000" style={{ width: `${Math.min(100, (telemetry.visitors / 20000) * 100)}%` }} />
                  </div>
                </div>
                <div className="bg-black/40 border border-white/5 p-4 rounded-sm text-center">
                  <p className="mono text-[9px] text-white/40 mb-2 uppercase tracking-tighter">Nagpur_Ambient</p>
                  <p className="mono text-2xl font-bold text-white">{nagpurTemp !== null ? `${nagpurTemp}°C` : '--'}</p>
                  <div className="w-full h-1 bg-white/5 mt-3 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 transition-all duration-1000" style={{ width: nagpurTemp ? `${(nagpurTemp / 50) * 100}%` : '0%' }} />
                  </div>
                </div>
              </div>

              <div className="h-48 flex items-end gap-1 px-4">
                {[...Array(60)].map((_, i) => (
                  <div 
                    key={i} 
                    className="flex-grow bg-red-600/20 border-t border-red-500/50 rounded-t-sm transition-all duration-500"
                    style={{ height: `${Math.random() * 85 + 5}%` }}
                  />
                ))}
              </div>
            </div>

            <div className="bg-[#111113] border border-white/10 p-8 rounded-sm">
              <div className="flex justify-between items-center mb-8">
                <h3 className="mono text-xs font-bold text-white uppercase tracking-widest flex items-center gap-3">
                  <div className="w-4 h-[1px] bg-red-500" />
                  Primary System Uptime (Structural Age)
                </h3>
                <span className="mono text-[9px] text-red-500 font-bold uppercase">Source: 18-FEB-2004_22:04_IST</span>
              </div>
              
              <div className="grid grid-cols-5 gap-4">
                {[
                  { label: 'Years', val: uptime.years },
                  { label: 'Days', val: uptime.days },
                  { label: 'Hours', val: uptime.hours },
                  { label: 'Minutes', val: uptime.minutes },
                  { label: 'Seconds', val: uptime.seconds, pulse: true }
                ].map((unit, i) => (
                  <div key={i} className="text-center p-4 bg-black/20 border border-white/5 rounded-sm">
                    <p className="mono text-[32px] md:text-4xl font-black text-white leading-none mb-2">
                      <span className={unit.pulse ? 'text-red-500 animate-pulse' : ''}>
                        {unit.val.toString().padStart(i === 0 ? 1 : i === 1 ? 3 : 2, '0')}
                      </span>
                    </p>
                    <p className="mono text-[9px] text-white/30 uppercase tracking-widest font-bold">{unit.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#111113] border border-white/10 p-6 rounded-sm">
                <h3 className="mono text-[10px] text-white/40 mb-6 uppercase tracking-widest font-bold">Environment Specs</h3>
                <ul className="space-y-4 mono text-[11px]">
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-white/40 uppercase">Architecture</span>
                    <span className="text-white">{navigator.platform || 'X64_BIN'}</span>
                  </li>
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-white/40 uppercase">Logical Cores</span>
                    <span className="text-white">{navigator.hardwareConcurrency || 8}</span>
                  </li>
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-white/40 uppercase">Protocol</span>
                    <span className="text-white">HTTP/3 (QUIC)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#111113] border border-white/10 p-6 rounded-sm">
                <h3 className="mono text-[10px] text-white/40 mb-6 uppercase tracking-widest font-bold">Interface Components</h3>
                <ul className="space-y-4 mono text-[11px]">
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-white/40 uppercase">Framework</span>
                    <span className="text-white">React 19 (ES)</span>
                  </li>
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-white/40 uppercase">Styling</span>
                    <span className="text-white">Tailwind_v3.4</span>
                  </li>
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-white/40 uppercase">UI_State</span>
                    <span className="text-white">Telemetry_v4.2</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-[#0f0f11] border border-red-500/20 p-6 rounded-sm">
              <h3 className="mono text-[10px] text-red-500 mb-6 uppercase tracking-widest font-bold">Diagnostic Log Stream</h3>
              <div className="space-y-3 mono text-[9px] leading-tight">
                <p className="text-white/40 flex gap-3"><span className="text-red-500">[INFO]</span> Initializing system_dashboard...</p>
                <p className="text-white/40 flex gap-3"><span className="text-red-500">[INFO]</span> Connecting to remote sensor mesh...</p>
                <p className="text-white/40 flex gap-3"><span className="text-red-500">[INFO]</span> Uptime counter synchronized.</p>
                <p className="text-white/40 flex gap-3"><span className="text-green-500">[OK]</span> Visitor Index confirmed: {telemetry.visitors.toLocaleString()}</p>
                <p className="text-white/40 flex gap-3"><span className="text-blue-500">[DATA]</span> Global Population Relay Active</p>
                <p className="text-yellow-500 flex gap-3 animate-pulse"><span className="text-yellow-500">[WARN]</span> High throughput detected in CLUSTER_B.</p>
              </div>
            </div>

            <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-sm">
              <h4 className="mono text-[10px] text-red-500 font-bold uppercase mb-4 tracking-widest italic">! Critical System Note</h4>
              <p className="mono text-[10px] text-white/60 leading-relaxed uppercase">
                Environmental metrics for session tracking are fetched live. Global population is an estimated real-time relay based on net growth coefficients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecsPage;
