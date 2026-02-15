
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Capabilities from './components/Capabilities';
import Experience from './components/Experience';
import Research from './components/Research';
import Contact from './components/Contact';
import ProjectDetail from './pages/ProjectDetail';
import SpecsPage from './pages/SpecsPage';
import ResearchDetail from './pages/ResearchDetail';
import StatusPage from './pages/StatusPage';
import ProjectsArchive from './pages/ProjectsArchive';
import ResearchArchive from './pages/ResearchArchive';
import AboutPage from './pages/AboutPage';
import TerminalModal from './components/TerminalModal';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const steps = [
    "Initializing Core Systems...",
    "Syncing Sensor Mesh...",
    "Loading Control Modules...",
    "Calibrating Telemetry...",
    "System Ready."
  ];

  useEffect(() => {
    if (step < steps.length) {
      const timer = setTimeout(() => setStep(s => s + 1), 600);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(onComplete, 800);
      return () => clearTimeout(timer);
    }
  }, [step, onComplete, steps.length]);

  return (
    <div className="fixed inset-0 z-[100] bg-[#0a0a0b] flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <div className="mb-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border-2 border-red-500 flex items-center justify-center">
              <div className="w-4 h-4 bg-red-500 animate-pulse" />
            </div>
            <h2 className="mono font-bold text-white tracking-widest uppercase">A. Kamble Control</h2>
          </div>
          <span className="mono text-xs text-red-500">{Math.round((step / steps.length) * 100)}%</span>
        </div>

        <div className="h-1 bg-white/5 w-full mb-6 rounded-full overflow-hidden">
          <div
            className="h-full bg-red-500 transition-all duration-500 ease-out"
            style={{ width: `${(step / steps.length) * 100}%` }}
          />
        </div>

        <div className="space-y-2">
          {steps.map((text, i) => (
            <div key={i} className={`mono text-[10px] flex items-center gap-3 transition-opacity duration-300 ${i <= step ? 'opacity-100' : 'opacity-0'}`}>
              <span className={i < step ? 'text-green-500' : i === step ? 'text-red-500' : 'text-white/20'}>
                {i < step ? '[OK]' : i === step ? '[..]' : '[  ]'}
              </span>
              <span className={i === step ? 'text-white' : 'text-white/40'}>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = useState<{ type: 'home' | 'project' | 'specs' | 'research' | 'status' | 'projects_archive' | 'research_archive' | 'about', id?: string }>({ type: 'home' });
  const [terminal, setTerminal] = useState<{ isOpen: boolean, title: string, content: string[], type?: 'INFO' | 'ALERT' | 'SYSTEM' }>({
    isOpen: false,
    title: '',
    content: [],
    type: 'INFO'
  });

  useEffect(() => {
    const handleRouteChange = () => {
      const hash = window.location.hash.replace('#', '');
      const path = window.location.pathname.replace('/', '');

      const route = hash || path;

      if (route.startsWith('project/')) {
        setView({ type: 'project', id: route.split('/')[1] });
      } else if (route.startsWith('research/')) {
        setView({ type: 'research', id: route.split('/')[1] });
      } else if (route === 'specs') {
        setView({ type: 'specs' });
      } else if (route === 'status') {
        setView({ type: 'status' });
      } else if (route === 'projects') {
        setView({ type: 'projects_archive' });
      } else if (route === 'research_archive') {
        setView({ type: 'research_archive' });
      } else if (route === 'about') {
        setView({ type: 'about' });
      } else if (route === 'career') {
        setView({ type: 'home' });
        setTimeout(() => {
          const el = document.getElementById('career');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        setView({ type: 'home' });
      }

      if (route !== 'career') window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleRouteChange);
    window.addEventListener('popstate', handleRouteChange);
    handleRouteChange();
    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const navigate = (newView: typeof view) => {
    let hash = '';
    if (newView.type === 'project') hash = `project/${newView.id}`;
    else if (newView.type === 'research') hash = `research/${newView.id}`;
    else if (newView.type === 'specs') hash = 'specs';
    else if (newView.type === 'status') hash = 'status';
    else if (newView.type === 'projects_archive') hash = 'projects';
    else if (newView.type === 'research_archive') hash = 'research_archive';
    else if (newView.type === 'about') hash = 'about';
    window.location.hash = hash;
  };

  const openTerminal = (title: string, content: string[], type: 'INFO' | 'ALERT' | 'SYSTEM' = 'INFO') => {
    setTerminal({ isOpen: true, title, content, type });
  };

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <>
      <Layout
        currentType={view.type}
        onNavigateHome={() => navigate({ type: 'home' })}
        onNavigateStatus={() => navigate({ type: 'status' })}
        onTriggerTerminal={openTerminal}
      >
        {view.type === 'home' && (
          <>
            <Hero onOpenSpecs={() => navigate({ type: 'specs' })} />
            <Projects onOpenProject={(id) => navigate({ type: 'project', id })} onNavigateAll={() => navigate({ type: 'projects_archive' })} />
            <Capabilities />
            <Experience />
            <Research onOpenResearch={(id) => navigate({ type: 'research', id })} onNavigateAll={() => navigate({ type: 'research_archive' })} />
            <Contact />
          </>
        )}
        {view.type === 'project' && <ProjectDetail id={view.id!} onBack={() => navigate({ type: 'home' })} onTriggerTerminal={openTerminal} />}
        {view.type === 'specs' && <SpecsPage onBack={() => navigate({ type: 'home' })} />}
        {view.type === 'research' && <ResearchDetail id={view.id!} onBack={() => navigate({ type: 'research_archive' })} onTriggerTerminal={openTerminal} />}
        {view.type === 'status' && <StatusPage onBack={() => navigate({ type: 'home' })} />}
        {view.type === 'projects_archive' && <ProjectsArchive onBack={() => navigate({ type: 'home' })} onOpenProject={(id) => navigate({ type: 'project', id })} />}
        {view.type === 'research_archive' && <ResearchArchive onBack={() => navigate({ type: 'home' })} onOpenResearch={(id) => navigate({ type: 'research', id })} />}
        {view.type === 'about' && <AboutPage onBack={() => navigate({ type: 'home' })} />}

        <TerminalModal
          isOpen={terminal.isOpen}
          onClose={() => setTerminal(t => ({ ...t, isOpen: false }))}
          title={terminal.title}
          content={terminal.content}
          type={terminal.type}
        />
      </Layout>
    </>
  );
};

export default App;