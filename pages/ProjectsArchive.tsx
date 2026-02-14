
import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../constants';
import TelemetryCard from '../components/TelemetryCard';

interface ProjectsArchiveProps {
  onBack: () => void;
  onOpenProject: (id: string) => void;
}

const CATEGORIES = [
  "All",
  "EV Systems",
  "Simulation & Energy",
  "Embedded & Hardware",
  "Data & Algorithms",
  "Product & UX",
  "Leadership"
];

const ProjectsArchive: React.FC<ProjectsArchiveProps> = ({ onBack, onOpenProject }) => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return PROJECTS;
    return PROJECTS.filter(project => project.category === activeFilter);
  }, [activeFilter]);

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

        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-white/10 pb-8 gap-6">
          <div>
            <h1 className="text-4xl font-bold text-white uppercase tracking-tighter">Project Archive</h1>
            <p className="mono text-[10px] text-white/40 mt-2 uppercase tracking-widest">Complete_System_Inventory // All Modules</p>
          </div>
          <div className="mono text-[10px] text-white/30 text-left md:text-right">
            <p>QUERY: SELECT * FROM CORE_PROGRAMS WHERE CAT = '{activeFilter.toUpperCase()}'</p>
            <p>RECORDS: {filteredProjects.length} / {PROJECTS.length}</p>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-white/5 pb-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 mono text-[10px] font-bold uppercase tracking-widest transition-all rounded-sm border ${
                activeFilter === cat
                  ? 'bg-red-600 border-red-500 text-white shadow-[0_0_15px_rgba(239,68,68,0.3)]'
                  : 'bg-white/5 border-white/10 text-white/40 hover:border-red-500/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 transition-all duration-500">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div key={project.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <TelemetryCard title={project.title} id={project.id} className="h-full">
                  <div className="space-y-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-grow">
                        <h4 className="mono text-[10px] text-red-500 mb-2 uppercase font-bold tracking-tighter">[01] Problem Statement</h4>
                        <p className="text-sm text-white/70 leading-relaxed font-light line-clamp-3">{project.problem}</p>
                      </div>
                      <span className="ml-4 px-2 py-0.5 bg-red-500/10 border border-red-500/20 text-red-500 mono text-[8px] uppercase font-bold whitespace-nowrap rounded-sm">
                        {project.category}
                      </span>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="mono text-[10px] text-red-500 mb-2 uppercase font-bold tracking-tighter">[02] Architecture</h4>
                        <p className="text-xs text-white/60 leading-relaxed line-clamp-2">{project.architecture}</p>
                      </div>
                      <div>
                        <h4 className="mono text-[10px] text-red-500 mb-2 uppercase font-bold tracking-tighter">[03] Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.slice(0, 4).map(s => (
                            <span key={s} className="mono text-[9px] px-2 py-0.5 bg-white/5 border border-white/10 text-white/40 uppercase">
                              {s}
                            </span>
                          ))}
                          {project.stack.length > 4 && <span className="mono text-[9px] text-white/20">+{project.stack.length - 4}</span>}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 grid grid-cols-3 gap-2 border-t border-white/5">
                      {project.results.slice(0, 3).map((res, i) => (
                        <div key={i} className="bg-black/20 p-3 rounded-sm text-center">
                          <p className="mono text-[8px] text-white/30 uppercase mb-1">{res.metric}</p>
                          <p className="mono text-sm font-bold text-red-400">{res.value}</p>
                        </div>
                      ))}
                    </div>

                    <button 
                      onClick={() => onOpenProject(project.id)}
                      className="w-full py-3 bg-red-600/10 hover:bg-red-600/20 border border-red-500/20 text-red-500 mono text-[10px] font-bold uppercase tracking-widest transition-all mt-4"
                    >
                      Inspect Full Report
                    </button>
                  </div>
                </TelemetryCard>
              </div>
            ))
          ) : (
            <div className="lg:col-span-2 py-24 text-center border border-dashed border-white/10 rounded-sm">
              <p className="mono text-sm text-white/20 uppercase tracking-[0.2em]">No Modules Found for Specified Category</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsArchive;
