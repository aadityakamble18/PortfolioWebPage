
import React from 'react';

interface TelemetryCardProps {
  title: string;
  id?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  accent?: boolean;
}

const TelemetryCard: React.FC<TelemetryCardProps> = ({ 
  title, 
  id, 
  children, 
  footer, 
  className = "",
  accent = false 
}) => {
  return (
    <div className={`relative flex flex-col bg-[#111113] border ${accent ? 'border-red-500/50' : 'border-white/10'} rounded-sm group hover:border-red-500/40 transition-colors ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className={`w-1 h-3 ${accent ? 'bg-red-500' : 'bg-white/40'}`} />
          <h3 className="mono text-[10px] font-bold tracking-widest text-white/60 uppercase">{title}</h3>
        </div>
        {id && <span className="mono text-[10px] text-white/30">{id}</span>}
      </div>

      {/* Content */}
      <div className="flex-grow p-4">
        {children}
      </div>

      {/* Footer Decoration */}
      <div className="flex justify-between p-2 border-t border-white/5">
        {footer ? footer : (
          <>
            <div className="flex gap-1">
              <div className="w-1 h-1 rounded-full bg-white/10" />
              <div className="w-1 h-1 rounded-full bg-white/10" />
              <div className="w-1 h-1 rounded-full bg-white/10" />
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-8 h-[1px] bg-white/10" />
              <div className="w-1 h-1 rounded-full bg-red-500/40 animate-pulse" />
            </div>
          </>
        )}
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-red-500/0 group-hover:border-red-500/50 transition-all duration-300" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-red-500/0 group-hover:border-red-500/50 transition-all duration-300" />
    </div>
  );
};

export default TelemetryCard;
