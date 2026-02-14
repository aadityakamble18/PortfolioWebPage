
import React from 'react';

interface AboutPageProps {
  onBack: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onBack }) => {
  return (
    <div className="pt-32 pb-24 bg-[#0a0a0b] min-h-screen relative">
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        <button 
          onClick={onBack}
          className="mono text-[10px] text-red-500 hover:text-white transition-colors mb-12 flex items-center gap-2 uppercase tracking-widest font-bold"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Return to Hub
        </button>

        {/* Section 1: Hero Identity Block */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-red-600" />
            <span className="mono text-red-500 text-[10px] font-bold uppercase tracking-[0.4em]">Identity_Verified</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 uppercase tracking-tighter italic">
            About the Engineer
          </h1>
          <p className="mono text-red-500 text-lg md:text-xl font-bold uppercase tracking-widest mb-10">
            Materials-Driven Performance Engineering
          </p>
          <div className="max-w-3xl border-l-2 border-white/10 pl-8 py-2">
            <p className="text-xl text-white/80 font-light leading-relaxed mb-4">
              Materials Engineering graduate with a specialized focus on the intersection of EV systems, embedded control architectures, and high-performance system optimization.
            </p>
            <p className="text-xl text-white/80 font-light leading-relaxed">
              Applying a rigorous systems-level engineering mindset to solve complex architectural challenges, ensuring structural integrity and control precision at every performance stage.
            </p>
          </div>
        </section>

        {/* Section 2: Engineering Philosophy */}
        <section className="mb-24 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-bold text-white uppercase tracking-tighter sticky top-32">
              Engineering <br /> Philosophy
              <div className="w-16 h-1 bg-red-600 mt-4" />
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-12">
            <div className="p-8 bg-[#111113] border border-white/5 rounded-sm relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-600/50 group-hover:bg-red-600 transition-colors" />
              <h3 className="mono text-xs font-bold text-red-500 uppercase tracking-widest mb-4">Systems Thinking & Integration</h3>
              <p className="text-white/60 font-light leading-relaxed text-lg">
                Engineering excellence is rarely achieved in isolation. I advocate for a systems-first approach where hardware, control logic, and telemetry data are developed as a unified entity. By understanding the dependencies between subsystems, we eliminate performance bottlenecks and ensure architectural resilience under high-stress operational conditions.
              </p>
            </div>
            <div className="p-8 bg-[#111113] border border-white/5 rounded-sm relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-600/50 group-hover:bg-red-600 transition-colors" />
              <h3 className="mono text-xs font-bold text-red-500 uppercase tracking-widest mb-4">The Material Foundation</h3>
              <p className="text-white/60 font-light leading-relaxed text-lg">
                Materials are the foundational layer of any performance system. Whether optimizing a chassis for high static loads or managing the thermal conductivity of a battery pack, performance is fundamentally limited by material properties. My approach integrates material science with structural validation and simulation to push performance limits while maintaining rigorous safety factors.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Technical Focus Areas */}
        <section className="mb-24">
          <h2 className="mono text-xs font-bold text-white uppercase tracking-[0.4em] mb-12 text-center">Core Engineering Domains</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "EV Systems & Electrification", 
                points: ["Powertrain integration", "BMS control logic", "Regenerative braking optimization"] 
              },
              { 
                title: "Embedded Control", 
                points: ["Real-time sensor fusion", "PID/Kalman filter implementation", "C++/RTOS development"] 
              },
              { 
                title: "Simulation & Modeling", 
                points: ["Physics-informed ML (PINNs)", "MATLAB/Simulink modeling", "3D CFD combustion analysis"] 
              },
              { 
                title: "Materials & Structural", 
                points: ["FEA/Topology optimization", "Cryogenic stress analysis", "Aluminum metallurgy (6061-T6)"] 
              },
              { 
                title: "Data-Driven Engineering", 
                points: ["Graph theory algorithms", "Linear programming (ILP)", "Telemetry-based performance audits"] 
              }
            ].map((domain, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-sm hover:border-red-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <div className="mono text-[10px] text-red-500 font-bold">0{i+1}</div>
                  <h4 className="mono text-xs font-bold text-white uppercase tracking-wider">{domain.title}</h4>
                </div>
                <ul className="space-y-3">
                  {domain.points.map((p, pi) => (
                    <li key={pi} className="flex items-center gap-3 text-[11px] text-white/50 mono uppercase">
                      <div className="w-1 h-1 bg-red-500" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: System Evolution */}
        <section className="mb-24">
          <div className="bg-[#111113] border border-white/10 p-10 rounded-sm">
            <h2 className="mono text-xs font-bold text-red-500 uppercase tracking-widest mb-12 flex items-center gap-3">
              <div className="w-4 h-px bg-red-500" />
              System Evolution Log
            </h2>
            <div className="space-y-0 relative">
              <div className="absolute left-[3px] top-0 w-px h-full bg-white/10" />
              {[
                { era: "2020-2022", event: "Materials Science & Metallurgy Foundation" },
                { era: "2022-2023", event: "High-Performance Vehicle Subsystem Prototyping" },
                { era: "2023-2024", event: "Embedded Architecture & Control Logic Specialization" },
                { era: "2024-Present", event: "Systems Coordination & Simulation Engineering" }
              ].map((log, i) => (
                <div key={i} className="flex gap-8 pb-10 last:pb-0 group">
                  <div className="relative z-10 w-2 h-2 rounded-full bg-white/20 mt-1.5 group-hover:bg-red-500 transition-colors" />
                  <div>
                    <span className="mono text-[10px] text-red-500 font-bold tracking-widest">{log.era}</span>
                    <p className="text-white font-bold uppercase tracking-tight text-lg mt-1">{log.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Competency Matrix */}
        <section className="mb-24">
          <h2 className="mono text-xs font-bold text-white uppercase tracking-[0.4em] mb-12">Technical Competency Matrix</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/10 border border-white/10 rounded-sm overflow-hidden">
            {[
              { cat: "Programming", skills: ["C++", "Python", "Embedded C", "SQL"] },
              { cat: "Simulation", skills: ["MATLAB", "Simulink", "ANSYS", "DeepXDE"] },
              { cat: "Embedded", skills: ["Arduino", "CAN Bus", "RTOS", "Sensor Fusion"] },
              { cat: "Analysis", skills: ["FEA", "CFD", "Topology Opt", "MOKE"] },
              { cat: "Modeling", skills: ["SolidWorks", "AutoCAD", "Figma", "LaTeX"] }
            ].map((group, i) => (
              <div key={i} className="bg-[#0a0a0b] p-6">
                <h4 className="mono text-[10px] text-red-500 font-bold uppercase mb-4 tracking-widest">{group.cat}</h4>
                <ul className="space-y-2">
                  {group.skills.map((s, si) => (
                    <li key={si} className="text-xs text-white/50 mono">{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Closing Statement */}
        <section className="text-center max-w-2xl mx-auto border-t border-white/10 pt-16">
          <p className="text-xl text-white/80 font-light leading-relaxed mb-4 italic">
            "My focus remains on the development of intelligent performance systems where materials, hardware, and data converge to define the next generation of electrification."
          </p>
          <div className="mono text-[10px] text-red-500 font-bold uppercase tracking-[0.3em]">
            SYSTEMS_FIRST // PERFORMANCE_DRIVEN
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
