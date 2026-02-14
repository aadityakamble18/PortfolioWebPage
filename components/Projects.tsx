
import React from 'react';
import { PROJECTS } from '../constants';
import TelemetryCard from './TelemetryCard';

interface ProjectsProps {
  onOpenProject: (id: string) => void;
  onNavigateAll?: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onOpenProject, onNavigateAll }) => {
  // Show only first 4 on homepage
  const featuredProjects = PROJECTS.slice(0, 4);

  return (
    <section id="programs" className="py-24 bg-[#0d0d0f]">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex items-end justify-between mb-12 pb-6 border-b border-white/10">
          <div>
            <span className="mono text-red-500 text-sm font-bold uppercase tracking-widest">Active Modules</span>
            <h2 className="text-4xl font-bold text-white mt-2">FEATURED ENGINEERING PROGRAMS</h2>
          </div>
          <div className="hidden md:block text-right">
            <p className="mono text-[10px] text-white/40">QUERY_RESULTS: {PROJECTS.length}</p>
            <p className="mono text-[10px] text-white/40 uppercase">Filter: High Performance</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <TelemetryCard key={project.id} title={project.title} id={project.id} className="h-full">
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="flex-grow">
                    <h4 className="mono text-[10px] text-red-500 mb-2 uppercase font-bold tracking-tighter">[01] Problem Statement</h4>
                    <p className="text-sm text-white/70 leading-relaxed font-light line-clamp-2">{project.problem}</p>
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
                      {project.stack.slice(0, 3).map(s => (
                        <span key={s} className="mono text-[9px] px-2 py-0.5 bg-white/5 border border-white/10 text-white/40 uppercase">
                          {s}
                        </span>
                      ))}
                      {project.stack.length > 3 && <span className="mono text-[9px] text-white/20">+{project.stack.length - 3}</span>}
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
                  className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white mono text-[10px] font-bold uppercase tracking-widest transition-all mt-4"
                >
                  Inspect Full Report
                </button>
              </div>
            </TelemetryCard>
          ))}
        </div>

        {onNavigateAll && (
          <div className="flex justify-end">
            <button 
              onClick={onNavigateAll}
              className="group relative inline-flex items-center gap-2 mono text-xs font-bold text-red-500 uppercase tracking-widest transition-all duration-300"
            >
              <span className="relative">
                View All Projects
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

export default Projects;
