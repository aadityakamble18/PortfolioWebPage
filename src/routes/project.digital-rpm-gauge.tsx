import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Github, Presentation, FileText, Download, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import { ProtectedImage } from "../components/ProtectedImage";

import fig1 from "../assets/Tachometer/system-schematic.jpg";
import fig2 from "../assets/Tachometer/system-flowchart.jpg";
import fig3 from "../assets/Tachometer/dashboard-idle-1.jpg";
import fig4 from "../assets/Tachometer/dashboard-idle-2.jpg";
import fig5 from "../assets/Tachometer/ignition-distributor-min.jpg";

export const Route = createFileRoute("/project/digital-rpm-gauge")({
  component: DigitalRpmGaugePage,
});

function DigitalRpmGaugePage() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle if arrow up or down is pressed
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        const sections = Array.from(document.querySelectorAll(".paper-section"));
        
        if (sections.length === 0) return;

        // Find the index of the current section in view
        let currentIdx = -1;
        for (let i = 0; i < sections.length; i++) {
          const rect = sections[i].getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            currentIdx = i;
            break;
          }
        }
        
        if (currentIdx === -1) {
          currentIdx = 0; // fallback
        }

        if (e.key === "ArrowDown" && currentIdx < sections.length - 1) {
          sections[currentIdx + 1].scrollIntoView({ behavior: "smooth" });
        } else if (e.key === "ArrowUp") {
           const rect = sections[currentIdx].getBoundingClientRect();
           // If we're scrolled down significantly within the current section, scroll to its top
           if (rect.top < -50) {
              sections[currentIdx].scrollIntoView({ behavior: "smooth" });
           } else if (currentIdx > 0) {
              // Otherwise, go to the previous section
              sections[currentIdx - 1].scrollIntoView({ behavior: "smooth" });
           }
        }
      }
    };
    
    // Disable default scrolling with arrow keys to prevent jumping
    window.addEventListener("keydown", handleKeyDown, { passive: false });
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground scroll-smooth">
      <FloatingShapes />
      
      <main className="relative z-10">
        <div className="px-6 pb-20 pt-10 md:px-12 md:pb-28 md:pt-20 lg:px-16">
          <div className="mx-auto max-w-4xl">
            <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-2 text-sm font-medium text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Aaditya Kamble</Link>
              <span>/</span>
              <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
              <span>/</span>
              <Link to="/project/digital-rpm-gauge" className="text-foreground hover:text-primary transition-colors">Digital RPM Gauge</Link>
            </nav>
            
            {/* Slide 1: Title */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30">
              <div className="mb-4 w-full text-left">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  May 2026
                </span>
              </div>
              <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.2] tracking-tight text-foreground md:text-5xl lg:text-6xl text-center">
                A High-Resolution, Period-Based Digital Tachometer for Legacy Three-Cylinder Engines: Design and Implementation
              </h1>
              
              <div className="mt-12 flex flex-col md:flex-row justify-center gap-8 md:gap-16 text-center">
                <div>
                  <p className="font-semibold">Aaditya Kamble</p>
                  <p className="text-sm text-muted-foreground">Department of Metallurgical and Materials Engineering</p>
                  <p className="text-sm text-muted-foreground">Indian Institute of Technology, Jodhpur</p>
                </div>
              </div>

              {/* Action Links */}
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href="https://github.com/aadityakamble18/Digital-RPM-Guage"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-[#CC0B24] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#A8091D]"
                >
                  <Github className="h-4 w-4" />
                  GitHub Repository
                  <ArrowUpRight className="h-4 w-4 ml-1 opacity-80" />
                </a>
                <a
                  href="https://www.canva.com/design/DAHVhn25Vvk/bhHFDJa_2i82yl195L9CRw/view"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium text-foreground transition-all hover:bg-accent"
                >
                  <Presentation className="h-4 w-4" />
                  View Presentation
                  <ArrowUpRight className="h-4 w-4 ml-1 opacity-80" />
                </a>
                <a
                  href="/src/assets/Tachometer/main.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium text-foreground transition-all hover:bg-accent"
                >
                  <FileText className="h-4 w-4" />
                  Download Report
                  <Download className="h-4 w-4 ml-1 opacity-80" />
                </a>
              </div>
            </section>

            {/* Slide 2: Abstract */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">Abstract</h2>
              <p>
                This paper presents the design and implementation of a microcontroller-based digital tachometer optimized for legacy carbureted automotive engines, specifically targeting three-cylinder, four-stroke architectures (e.g., Maruti 800 F8B/F10D). Traditional frequency-counting tachometers suffer from severe quantization error and latency at low engine speeds due to sparse ignition-pulse generation. To overcome this, the proposed system employs a period-measurement methodology, utilizing microsecond-resolution hardware interrupts. By measuring the interval between individual ignition-coil pulses, the system guarantees high resolution across the entire operating range. To mitigate rotational jitter caused by cylinder-to-cylinder combustion variance inherent in carbureted systems, the algorithm averages exactly one complete firing cycle (three pulses) prior to speed calculation, providing a stable readout without the latency introduced by traditional rolling averages. Furthermore, the system implements a highly optimized rendering pipeline on a 128x32 I2C OLED display, utilizing partial bounding-box redraws, integer-only arithmetic, and a dynamic deadband to maintain a 10 Hz refresh rate without obstructing real-time pulse capture. The resulting instrumentation provides rapid, flicker-free telemetry tailored to the electro-mechanical constraints of legacy distributor-based ignition systems.
              </p>
            </section>

            {/* Slide 2.5: Presentation Embed */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">Presentation</h2>
              <div 
                className="relative w-full mx-auto max-w-4xl rounded-xl overflow-hidden border border-border shadow-lg"
                style={{ paddingTop: '56.25%' }}
              >
                <iframe 
                  loading="lazy" 
                  className="absolute top-0 left-0 w-full h-full border-0"
                  src="https://www.canva.com/design/DAHVhn25Vvk/bhHFDJa_2i82yl195L9CRw/view?embed" 
                  allowFullScreen
                  allow="fullscreen"
                ></iframe>
              </div>
            </section>

            {/* Slide 3: Intro & Hardware */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">Hardware Design & Architecture</h2>
              <p className="mb-8">
                The retrofitting of digital telemetry into legacy automotive platforms presents unique challenges at the intersection of embedded systems design and mechanical signal processing. In these single-coil, distributor-based systems, rotational speed must be empirically derived by intercepting high-voltage ignition pulses from the mechanical ignition distributor.
              </p>
              
              <div className="mx-auto max-w-xl w-full my-6 bg-card p-4 rounded-xl border border-border">
                <ProtectedImage src={fig5} alt="Ignition Distributor" />
                <p className="mt-4 text-xs text-center font-body text-muted-foreground">Mechanical ignition distributor architecture showing contact points, rotor, and vacuum advance mechanism.</p>
              </div>
              
              <p className="mb-4">
                To mitigate the noisy automotive electrical environment, a multi-stage galvanic isolation and signal-conditioning circuit was designed. The power-regulation stage is built around an LM2596S DC-DC buck converter to step down fluctuating accessory voltage to a stable 7.5V. The raw RPM signal is intercepted from the negative terminal of the distributor and passed through a voltage divider/current-limiting network. This attenuates the voltage to a safe level to drive the internal LED of an EL817/PC817 1-Channel optocoupler isolation module, providing absolute galvanic isolation between the noisy automotive chassis ground and the sensitive 5V logic ground of the microcontroller.
              </p>
              
              <div className="mx-auto max-w-xl w-full my-6 bg-card p-4 rounded-xl border border-border">
                <ProtectedImage src={fig1} alt="System Schematic" />
                <p className="mt-4 text-xs text-center font-body text-muted-foreground">Complete system schematic illustrating power conversion, opto-isolation, and microcontroller interfacing.</p>
              </div>
            </section>
            
            {/* Slide 4: Software */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">Software Architecture</h2>
              <p className="mb-8">
                The software logic shifts the processing paradigm from temporal frequency counting to microsecond-resolution period measurement. This dual-track execution flow between the asynchronous interrupt service routine and the synchronous foreground display loop ensures robust telemetry.
              </p>
              
              <div className="mx-auto max-w-xl w-full my-6 bg-card p-4 rounded-xl border border-border">
                <ProtectedImage src={fig2} alt="System Flowchart" />
                <p className="mt-4 text-xs text-center font-body text-muted-foreground">System flowchart detailing the asynchronous interrupt pulse capture and synchronous foreground display loop.</p>
              </div>
            </section>
            
            {/* Slide 5: Results */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">Empirical Results</h2>
              <p className="mb-8">
                Empirical in-vehicle testing was conducted to validate the galvanic isolation network and period-based measurement methodology. The exact-cycle averaging algorithm successfully decoupled the display output from inter-cylinder combustion variance. During steady-state idling, the digital readout and bar graph maintained exceptional stability, eliminating user-facing jitter entirely.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="bg-card p-4 rounded-xl border border-border">
                  <ProtectedImage src={fig3} alt="Dashboard Idle 1" />
                  <p className="mt-4 text-xs text-center font-body text-muted-foreground">Operational prototype mounted inside the vehicle cluster displaying live idle telemetry.</p>
                </div>
                <div className="bg-card p-4 rounded-xl border border-border">
                  <ProtectedImage src={fig4} alt="Dashboard Idle 2" />
                  <p className="mt-4 text-xs text-center font-body text-muted-foreground">Alternative operational view of the OLED tachometer integrated alongside factory instrument cluster elements.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

function FloatingShapes() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute left-[8%] top-[22%] h-16 w-16 rounded-[40%_60%_60%_40%/50%_50%_50%_50%] bg-primary/20 float-slow" />
      <div className="absolute right-[10%] top-[50%] h-20 w-20 rounded-[65%_35%_45%_55%/40%_55%_45%_60%] bg-red-muted/20 drift-x" />
      <div className="absolute bottom-[15%] left-[35%] h-10 w-10 rounded-full bg-primary/20 float-medium" />
    </div>
  );
}
