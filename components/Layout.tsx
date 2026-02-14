
import React, { useState, useEffect } from 'react';

interface LayoutProps {
  children: React.ReactNode;
  currentType: string;
  onNavigateHome: () => void;
  onNavigateStatus: () => void;
  onTriggerTerminal: (title: string, content: string[], type?: 'INFO' | 'ALERT' | 'SYSTEM') => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentType, onNavigateHome, onNavigateStatus, onTriggerTerminal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#career' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'GITHUB', href: 'https://github.com/aadityakamble18', icon: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' },
    { name: 'LINKEDIN', href: 'https://www.linkedin.com/in/aaditya-kamble-05b159157/', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
    { name: 'INSTAGRAM', href: 'https://www.instagram.com/aaditya_k_18/', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
    { name: 'WHATSAPP', href: 'https://wa.me/918623022491', icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z' }
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    
    const targetHash = href.replace('#', '');
    if (['projects', 'research_archive', 'about', 'career'].includes(targetHash)) {
      window.location.hash = targetHash;
      return;
    }

    if (currentType !== 'home') {
      onNavigateHome();
      if (href.startsWith('#')) {
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      if (href.startsWith('#')) {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b]">
      <div className="scanline" />
      
      <nav className={`fixed top-0 left-0 w-full z-[150] transition-all duration-300 ${scrolled || currentType !== 'home' ? 'bg-[#0a0a0b]/90 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-8 md:px-16 lg:px-24 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button onClick={onNavigateHome} className="w-10 h-10 border-2 border-red-500 flex items-center justify-center hover:bg-red-500/10 transition-colors group">
              <span className="mono font-black text-red-500 text-sm group-hover:scale-110 transition-transform">AK</span>
            </button>
            <div className="hidden md:block">
              <button onClick={onNavigateHome} className="text-left">
                <p className="mono font-bold text-xl tracking-tighter text-white uppercase hover:text-red-500 transition-colors">Aaditya Kamble</p>
                <p className="mono text-[8px] text-red-500/80 uppercase tracking-widest font-bold -mt-1">Materials-Driven Performance Engineering</p>
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="mono text-[10px] text-white/50 hover:text-red-500 uppercase tracking-[0.2em] font-bold transition-colors cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            <div className="h-6 w-px bg-white/10 hidden lg:block" />
            
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 border border-white/10 rounded-sm hover:border-red-500 transition-colors group lg:hidden"
              >
                <svg className={`w-4 h-4 text-white transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[140] bg-[#0a0a0b] transition-transform duration-500 ease-in-out lg:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-32 px-12 space-y-8">
          <div className="mono text-[10px] text-red-500 mb-4 tracking-[0.4em]">INTERFACE_MOD_A_KAMBLE</div>
          {navItems.map((item, idx) => (
            <button 
              key={item.name} 
              onClick={() => handleNavClick(item.href)}
              className="flex items-end gap-6 group text-left"
            >
              <span className="mono text-[10px] text-white/20 mb-1">0{idx + 1}</span>
              <span className="text-4xl font-bold text-white group-hover:text-red-500 transition-colors uppercase tracking-tighter">
                {item.name}
              </span>
            </button>
          ))}
          <div className="mt-auto pb-12 pt-8 border-t border-white/5 flex justify-between items-center mono text-[10px] text-white/30">
            <span>SECURE_SESSION: AADITYA_KAMBLE</span>
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          </div>
        </div>
      </div>

      <main>
        {children}
      </main>

      <footer className="bg-[#0d0d0f] pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none select-none">
          <h2 className="text-[12rem] font-bold text-white mono leading-none tracking-tighter italic">APEX</h2>
        </div>
        
        <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 border-2 border-red-600 flex items-center justify-center">
                  <span className="mono font-black text-red-600 text-lg">AK</span>
                </div>
                <div>
                  <h3 className="mono font-bold text-white uppercase tracking-tighter text-xl">Aaditya Kamble</h3>
                  <p className="mono text-[8px] text-red-500 font-bold uppercase tracking-widest">Performance Engineering Interface</p>
                </div>
              </div>
              <p className="text-white/40 font-light text-sm max-w-sm leading-relaxed mb-8">
                Applying rigorous systems thinking and material science to define the next generation of high-performance electrification and control architectures.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:text-red-500 hover:border-red-500/50 transition-all rounded-sm bg-white/5 group"
                    title={social.name}
                  >
                    <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-7 grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="mono text-[10px] text-red-500 font-bold uppercase tracking-[0.2em] mb-6">Navigation</h4>
                <ul className="space-y-4">
                  {navItems.map(item => (
                    <li key={item.name}>
                      <a 
                        href={item.href} 
                        onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                        className="mono text-[10px] text-white/50 hover:text-white uppercase transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mono text-[10px] text-red-500 font-bold uppercase tracking-[0.2em] mb-6">System Nodes</h4>
                <ul className="space-y-4">
                  <li><button onClick={onNavigateStatus} className="mono text-[10px] text-white/50 hover:text-white uppercase transition-colors">Global Status</button></li>
                  <li><a href="#specs" onClick={(e) => { e.preventDefault(); window.location.hash = 'specs'; }} className="mono text-[10px] text-white/50 hover:text-white uppercase transition-colors">Diagnostics</a></li>
                  <li><button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="mono text-[10px] text-white/50 hover:text-white uppercase transition-colors">Return Top</button></li>
                </ul>
              </div>
              <div>
                <h4 className="mono text-[10px] text-red-500 font-bold uppercase tracking-[0.2em] mb-6">Protocol</h4>
                <div className="space-y-4">
                  <p className="mono text-[9px] text-white/30 uppercase leading-relaxed">
                    SECURE_ENDPOINT_v4.2.0<br />
                    ENCRYPTION: RSA_4096<br />
                    SIGNAL: STABLE
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="mono text-[8px] text-green-500/60 font-bold uppercase">Mainframe Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6 mono text-[9px] text-white/20 uppercase tracking-widest font-bold">
              <span>© 2024 AADITYA KAMBLE</span>
              <span className="hidden md:block">|</span>
              <span>BUILT FOR PERFORMANCE</span>
            </div>
            <div className="flex gap-8 mono text-[8px] text-white/20 uppercase font-bold">
              <span className="hover:text-red-500 cursor-help transition-colors">Privacy_Policy</span>
              <span className="hover:text-red-500 cursor-help transition-colors">Terms_of_Sync</span>
              <span className="hover:text-red-500 cursor-help transition-colors">Safety_Documentation</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;