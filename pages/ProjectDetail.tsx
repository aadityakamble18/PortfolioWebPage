
import React from 'react';
import { PROJECTS } from '../constants';

interface ProjectDetailProps {
  id: string;
  onBack: () => void;
  onTriggerTerminal: (title: string, content: string[], type?: 'INFO' | 'ALERT' | 'SYSTEM') => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ id, onBack, onTriggerTerminal }) => {
  const project = PROJECTS.find(p => p.id === id);

  if (!project) return <div>Project Not Found</div>;

  const handleDownload = () => {
    onTriggerTerminal(
      `FILE_TRANSFER: ${project.id}_WHITE_PAPER`,
      [
        "INITIALIZING SECURE DOWNLOAD...",
        "VERIFYING CHECKSUM...",
        "DECRYPTING ARCHIVE_DATA (74.2 MB)",
        "TRANSFERRING VIA PACKET_MESH...",
        "0% ... 25% ... 60% ... 95% ... 100%",
        "OK: FILE_TRANSFERRED_SUCCESSFULLY",
        "NOTE: Simulated file for interface demonstration."
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
          Back to Command Center
        </button>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="mono text-red-500 text-xs font-bold px-3 py-1 border border-red-500/30 rounded-full">ID_{project.id}</span>
              <span className="mono text-white/30 text-xs uppercase">Project_Audit_Report</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-8 tracking-tighter uppercase">{project.title}</h1>
            
            <div className="space-y-12">
              <section>
                <h2 className="mono text-xs font-bold text-red-500 uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                  <div className="w-4 h-[1px] bg-red-500" />
                  01. Detailed Problem Analysis
                </h2>
                <p className="text-xl text-white/70 font-light leading-relaxed">
                  {project.problem} This required a complete rethinking of the existing sensor mesh topology and data prioritization algorithms to meet performance benchmarks.
                </p>
              </section>

              <section>
                <h2 className="mono text-xs font-bold text-red-500 uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                  <div className="w-4 h-[1px] bg-red-500" />
                  02. Technical Architecture Blueprint
                </h2>
                <div className="bg-[#111113] border border-white/5 p-8 rounded-sm mb-6">
                  <div className="mono text-[10px] text-white/30 mb-4 uppercase">System_Diagram_v2.0</div>
                  <div className="h-64 border border-dashed border-white/10 flex items-center justify-center relative overflow-hidden bg-black/40">
                    <div className="absolute inset-0 bg-grid opacity-10" />
                    <div className="z-10 text-center">
                      <div className="w-20 h-20 border-2 border-red-500/30 rounded-full animate-spin-slow mx-auto mb-4 flex items-center justify-center">
                        <div className="w-12 h-12 border-2 border-red-400/50 rounded-full animate-reverse" />
                      </div>
                      <span className="mono text-[9px] text-white/50 uppercase tracking-widest">Nodal_Mesh_Active</span>
                    </div>
                  </div>
                </div>
                <p className="text-white/60 leading-relaxed font-light">
                  {project.architecture} The implementation prioritized scalability and low-latency interaction, ensuring that the system can handle dynamic state updates without compromising on structural integrity or user experience.
                </p>
              </section>

              <section>
                <h2 className="mono text-xs font-bold text-red-500 uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                  <div className="w-4 h-[1px] bg-red-500" />
                  03. Critical Engineering Decisions
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-6 bg-[#0f0f11] border-l-2 border-red-500">
                    <h4 className="mono text-[10px] text-white/40 mb-3 uppercase">Decision_Alpha</h4>
                    <p className="text-sm text-white/70">{project.decisions}</p>
                  </div>
                  <div className="p-6 bg-[#0f0f11] border-l-2 border-red-500/30">
                    <h4 className="mono text-[10px] text-white/40 mb-3 uppercase">Safety_Verification</h4>
                    <p className="text-sm text-white/70">Integrated formal verification for all safety-critical modules to ensure high-fidelity operation and fault tolerance across diverse deployment environments.</p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <div className="bg-[#111113] border border-white/10 p-6 rounded-sm">
                <h3 className="mono text-[10px] text-white/40 mb-6 uppercase tracking-[0.2em] font-bold">System Performance Metrics</h3>
                <div className="space-y-6">
                  {project.results.map((res, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="mono text-[10px] text-white/60 uppercase">{res.metric}</span>
                        <span className="mono text-lg font-bold text-red-500">{res.value}</span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500 w-[85%]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#111113] border border-white/10 p-6 rounded-sm">
                <h3 className="mono text-[10px] text-white/40 mb-6 uppercase tracking-[0.2em] font-bold">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map(s => (
                    <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded-sm text-xs mono text-white/70">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-white/5 hover:bg-white/10 text-white mono text-xs font-bold uppercase tracking-[0.2em] rounded-sm transition-all border border-white/20 flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                    View on GitHub
                  </a>
                )}
                
                <button 
                  onClick={handleDownload}
                  className="w-full py-4 bg-red-600 hover:bg-red-500 text-white mono text-xs font-bold uppercase tracking-[0.2em] rounded-sm transition-all border border-red-400/20"
                >
                  Download Technical Paper
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;