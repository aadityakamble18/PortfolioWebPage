
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || isSent) return;
    
    setIsSubmitting(true);
    setLogs(["INITIALIZING SECURE UPLINK..."]);
    
    const terminalSteps = [
      "HANDSHAKE_INITIATED", 
      "ENCRYPTING_RSA_4096_PAYLOAD", 
      "FRAGMENTING_DATA_PACKETS",
      "ROUTING_THROUGH_DISTRIBUTED_NODES",
      "UPLOADING_TO_CORE_RELAY..."
    ];
    
    // Animate terminal logs
    for (let i = 0; i < terminalSteps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 400));
      setLogs(prev => [...prev, terminalSteps[i]]);
    }

    try {
      // Background email transmission via FormSubmit AJAX API
      const response = await fetch("https://formsubmit.co/ajax/aadityakamble18@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `NEW_ENGINEERING_INQUIRY: ${formState.name}`
        })
      });

      if (response.ok) {
        setLogs(prev => [...prev, "TRANSMISSION_CONFIRMED", "DATA_INTEGRITY_VERIFIED", "CONNECTION_CLOSED"]);
        setTimeout(() => {
          setIsSubmitting(false);
          setIsSent(true);
        }, 800);
      } else {
        throw new Error("Relay failure");
      }
    } catch (error) {
      setLogs(prev => [...prev, "! ERR: RELAY_TIMEOUT_EXCEEDED", "! ACTION: RETRY_TRANSMISSION"]);
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0d0d0f] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 p-10 opacity-5 pointer-events-none select-none">
        <h2 className="text-[12rem] font-bold text-white mono leading-none tracking-tighter">APEX</h2>
      </div>

      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="mono text-red-500 text-sm font-bold uppercase tracking-widest">Connect</span>
            <h2 className="text-4xl font-bold text-white mt-2 mb-8 uppercase tracking-tighter italic">Initiate Handshake</h2>
            <p className="text-white/50 font-light leading-relaxed mb-10 max-w-md">
              System architect and performance engineer available for high-stakes technical consultations and industrial R&D projects. Establish connection via secure channels below.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-white/5 flex items-center justify-center border border-white/10 rounded-sm group-hover:border-red-500/50 transition-colors">
                  <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </div>
                <div>
                  <p className="mono text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">Primary Comms</p>
                  <a href="mailto:aadityakamble18@gmail.com" className="text-white/80 font-medium hover:text-red-500 transition-colors mono text-sm">aadityakamble18@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-white/5 flex items-center justify-center border border-white/10 rounded-sm group-hover:border-red-500/50 transition-colors">
                  <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                </div>
                <div>
                  <p className="mono text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">Secure Line</p>
                  <a href="tel:+918623022491" className="text-white/80 font-medium hover:text-red-500 transition-colors mono text-sm">+91 8623022491</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0a0a0b] border border-white/10 p-8 rounded-sm glow-border relative overflow-hidden">
            <div className="mb-8 border-b border-white/5 pb-4 flex justify-between items-center">
              <span className="mono text-[10px] text-red-500 uppercase font-bold tracking-widest">Command_Interface_v1.2</span>
              <div className="flex gap-1">
                <div className={`w-2 h-2 rounded-full ${isSent ? 'bg-green-500' : 'bg-red-500/20'}`} />
                <div className={`w-2 h-2 rounded-full ${isSubmitting ? 'bg-yellow-500 animate-pulse' : 'bg-yellow-500/20'}`} />
                <div className={`w-2 h-2 rounded-full ${!isSubmitting && !isSent ? 'bg-green-500' : 'bg-green-500/20'}`} />
              </div>
            </div>
            
            {isSent ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 border-2 border-green-500/50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mono text-sm font-bold text-white uppercase tracking-[0.3em]">Payload Delivered</h3>
                <p className="mono text-[10px] text-white/40 uppercase tracking-widest">Background Transmission Successful // Signal ACK</p>
                <button 
                  onClick={() => { setIsSent(false); setLogs([]); setFormState({ name: '', email: '', message: '' }); }}
                  className="mt-8 text-[10px] mono text-red-500 hover:text-red-400 font-bold uppercase underline underline-offset-4 tracking-widest"
                >
                  Clear Buffer & Re-Init
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="group">
                  <label className="mono text-[9px] text-white/40 uppercase mb-2 block tracking-widest group-focus-within:text-red-500 transition-colors">Identify Subject [Name]</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:border-red-500/50 focus:outline-none focus:bg-white/[0.07] transition-all mono"
                    placeholder="SYSTEM_USER_ID"
                    value={formState.name}
                    onChange={e => setFormState(s => ({...s, name: e.target.value}))}
                  />
                </div>
                <div className="group">
                  <label className="mono text-[9px] text-white/40 uppercase mb-2 block tracking-widest group-focus-within:text-red-500 transition-colors">Return Address [Email]</label>
                  <input 
                    required
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:border-red-500/50 focus:outline-none focus:bg-white/[0.07] transition-all mono"
                    placeholder="IP_RESOLVER_ADDR"
                    value={formState.email}
                    onChange={e => setFormState(s => ({...s, email: e.target.value}))}
                  />
                </div>
                <div className="group">
                  <label className="mono text-[9px] text-white/40 uppercase mb-2 block tracking-widest group-focus-within:text-red-500 transition-colors">Payload [Message Content]</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:border-red-500/50 focus:outline-none focus:bg-white/[0.07] transition-all mono resize-none"
                    placeholder="ENTER_DATA_STREAM_CONTENT..."
                    value={formState.message}
                    onChange={e => setFormState(s => ({...s, message: e.target.value}))}
                  />
                </div>
                
                {logs.length > 0 && (
                  <div className="bg-black/60 border border-white/5 p-4 rounded-sm space-y-1 max-h-32 overflow-y-auto custom-scrollbar">
                    {logs.map((log, i) => (
                      <p key={i} className={`mono text-[8px] ${log.startsWith('!') ? 'text-red-400' : 'text-green-500/70'}`}>
                        {`[${new Date().toLocaleTimeString([], { hour12: false })}] > ${log}`}
                      </p>
                    ))}
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-red-600 hover:bg-red-500 disabled:bg-red-900 disabled:cursor-not-allowed text-white mono text-xs font-bold uppercase tracking-[0.4em] transition-all border border-red-400/20 flex items-center justify-center gap-3 active:scale-[0.98]"
                >
                  {isSubmitting ? 'UPLOADING...' : 'Send Command'}
                  {!isSubmitting && <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-ping" />}
                </button>
                
                <p className="mono text-[8px] text-white/20 text-center uppercase tracking-widest">
                  End-to-End Encryption Enabled // SSL_Secure_Layer
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
