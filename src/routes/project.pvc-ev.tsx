import { createFileRoute, Link } from "@tanstack/react-router";
import { Github, Presentation, FileText, Download, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import { ProtectedImage } from "../components/ProtectedImage";

import fig1 from "../assets/PVC_EV/figure_1.png";
import fig2 from "../assets/PVC_EV/figure_2.png";
import fig3 from "../assets/PVC_EV/figure_3.png";
import fig4 from "../assets/PVC_EV/figure_4.png";
import fig5 from "../assets/PVC_EV/figure_5.png";
import fig6 from "../assets/PVC_EV/figure_6.png";
import fig7 from "../assets/PVC_EV/figure_7.png";
import fig8 from "../assets/PVC_EV/figure_8.png";
import fig9 from "../assets/PVC_EV/figure_9.png";
import fig10 from "../assets/PVC_EV/figure_10.png";
import fig11 from "../assets/PVC_EV/figure_11.png";
import fig12 from "../assets/PVC_EV/figure_12.png";
import fig13 from "../assets/PVC_EV/figure_13.png";
import fig14 from "../assets/PVC_EV/figure_14.png";
import fig15 from "../assets/PVC_EV/figure_15.png";
import fig16 from "../assets/PVC_EV/figure_16.png";
import fig17 from "../assets/PVC_EV/figure_17.png";
import fig18 from "../assets/PVC_EV/figure_18.png";

export const Route = createFileRoute("/project/pvc-ev")({
  component: PvcEvProjectPage,
});

function PvcEvProjectPage() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        const sections = Array.from(document.querySelectorAll(".paper-section"));
        if (sections.length === 0) return;
        let currentIdx = -1;
        for (let i = 0; i < sections.length; i++) {
          const rect = sections[i].getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            currentIdx = i;
            break;
          }
        }
        if (currentIdx === -1) currentIdx = 0;
        if (e.key === "ArrowDown" && currentIdx < sections.length - 1) {
          sections[currentIdx + 1].scrollIntoView({ behavior: "smooth" });
        } else if (e.key === "ArrowUp") {
           const rect = sections[currentIdx].getBoundingClientRect();
           if (rect.top < -50) sections[currentIdx].scrollIntoView({ behavior: "smooth" });
           else if (currentIdx > 0) sections[currentIdx - 1].scrollIntoView({ behavior: "smooth" });
        }
      }
    };
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
              <Link to="/project/pvc-ev" className="text-foreground hover:text-primary transition-colors">Electric Go-Kart</Link>
            </nav>
            
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30">
              <div className="mb-4 w-full text-left">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  December 2025
                </span>
              </div>
              <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.2] tracking-tight text-foreground md:text-5xl lg:text-6xl text-center">
                Design, Modeling, and Control of a PVC-Based Electric Go-Kart
              </h1>
              
              <div className="mt-12 flex flex-col md:flex-row justify-center gap-8 md:gap-16 text-center">
                <div>
                  <p className="font-semibold">Aaditya Amresh Kamble</p>
                  <p className="text-sm text-muted-foreground">Department of Metallurgical and Materials Engineering</p>
                  <p className="text-sm text-muted-foreground">IIT Jodhpur</p>
                </div>
                <div>
                  <p className="font-semibold">Yash Kumar</p>
                  <p className="text-sm text-muted-foreground">Department of Metallurgical and Materials Engineering</p>
                  <p className="text-sm text-muted-foreground">IIT Jodhpur</p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-[#CC0B24] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#A8091D]"
                >
                  <Github className="h-4 w-4" />
                  GitHub Repository
                  <ArrowUpRight className="h-4 w-4 ml-1 opacity-80" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium text-foreground transition-all hover:bg-accent"
                >
                  <Presentation className="h-4 w-4" />
                  Download Presentation
                  <Download className="h-4 w-4 ml-1 opacity-80" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium text-foreground transition-all hover:bg-accent"
                >
                  <FileText className="h-4 w-4" />
                  Download Report
                  <Download className="h-4 w-4 ml-1 opacity-80" />
                </a>
              </div>
            </section>

            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <p><strong>Abstract—</strong>This paper presents an in-depth engineering study of a low-cost electric go-kart conceptualising a PVC-based chassis, dual BLDC hub motors, an Arduino-based traction control system (TCS), and a custom VRLA battery management system (BMS). The system is analysed from a multi-domain perspective, including mechanics, electrical systems, control theory, and embedded implementation. MATLAB simulations and GUI-based visualisation tools are used to validate the dynamic behaviour of the system. The work emphasises engineering intuition, mathematical modelling, and real-time control strategies to ensure stable and safe vehicle operation. Simulation results demonstrate that the TCS corrects wheel-slip events within 200–250 ms and that the BMS successfully enforces all three protection thresholds (undervoltage, overcurrent, overtemperature) without nuisance trips during a simulated 300 s drive cycle.</p>
            </section>

            <section className="paper-section min-h-[50vh] flex flex-col justify-center py-12 border-b border-border/30">
              <div className="relative w-full max-w-4xl mx-auto" style={{ paddingTop: "56.25%" }}>
                <iframe 
                  loading="lazy" 
                  className="absolute top-0 left-0 w-full h-full border-0 rounded-xl shadow-lg"
                  src="https://www.canva.com/design/DAG4riOgvKg/LZEsa5mLUcES3atWoM6Vsw/view?embed" 
                  allowFullScreen
                  allow="fullscreen"
                />
              </div>
            </section>

            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">I. INTRODUCTION</h2>
              <p className="mb-4"> The transition towards electric mobility has necessitated the development of efficient, safe, and intelligent energy systems. While commercial electric vehicles (EVs) incorporate ad- vanced control systems, these systems are often inaccessible in academic or low-cost prototyping environments. This project bridges that gap by designing a complete electric vehicle platform model using accessible materials and open-source electronics. The novelty of this work lies not only in the theoretical design of the go-kart but in the deep integration of control systems and battery safety mechanisms. The system is designed to mimic real-world EV architectures at a smaller scale, allowing detailed study of motor dynamics, traction behaviour, and battery characteristics. A key challenge addressed in this work is the absence of a mechanical differential. Dual hub motors inherently behave like an open differential, where torque distribution is not regulated, leading to instability. This necessitates the implementation of an electronic traction control system. Traction control systems (TCS) are well-established in commercial vehicles and typically rely on wheel-speed sensing to detect and correct slip. Adapting such systems to a low-cost Arduino platform represents the core embedded contribution of this work. The go-kart model integrates a conceptual PVC chassis, two 36 V 350 W BLDC hub motors, two independent motor controllers, an Arduino-based TCS, a VRLA Battery Management System, and a precharge-and-contactor safety circuit. Software tools used include MATLAB, Arduino IDE, SolidWorks, Ansys, and basic electrical simulation environments. All simulation source files are available at the project repository.</p>
            </section>

            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">II. LITERATURE REVIEW</h2>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">A. PVC-Based Structural Prototypes</h3>
              <p className="mb-4"> PVC (polyvinyl chloride) has been studied as a structural material in low-load applications. Research on PVC pipe trusses and student robotics platforms confirms that Schedule- 40 PVC can withstand moderate static and quasi-dynamic loads when joints are made with solvent-cement bonding, which creates chemically fused, monolithic connections. Compared to welded steel, PVC offers ease of machining, rapid assembly, and substantial cost savings, making it well- suited for academic EV prototypes.</p>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">B. VRLA Batteries in Low-Power EVs</h3>
              <p className="mb-4"> Valve Regulated Lead-Acid (VRLA) batteries are widely deployed in mobility scooters, golf carts, and UPS systems due to their robustness, sealed maintenance-free operation, and ability to deliver high surge currents. Key draw- backs include lower energy density relative to lithium-ion chemistries and significant voltage sag under high current loads, characterised by the Peukert effect. Monitoring and protection strategies for VRLA packs must therefore account for both electrochemical nonlinearity and thermal degradation.</p>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">C. Brushless DC Motor Control</h3>
              <p className="mb-4"> BLDC hub motors with integrated hall-effect sensors are standard in e-bikes and light electric vehicles. Off-the-shelf controllers implement trapezoidal commutation and accept analogue throttle inputs but universally lack native traction control capability. Externally imposed traction control via a microcontroller interposed between the throttle and the controller is an under-explored approach at the hobby and academic level.</p>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">D. Traction Control Systems</h3>
              <p className="mb-4"> Automotive TCS algorithms typically compare individual wheel speeds derived from hall sensors or ABS wheel- speed encoders and reduce torque on the faster-spinning wheel. Model-based methods using extended Kalman filters or sliding-mode observers can estimate vehicle speed independently of wheel speed, enabling proactive slip prevention. For embedded microcontroller platforms with limited floating-point performance, proportional RPM- difference methods provide an effective and computationally light alternative.</p>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">E. Battery Management Systems</h3>
              <p className="mb-4"> BMS architectures for lead-acid chemistries focus on overvoltage, undervoltage, overcurrent, and thermal pro- tection rather than cell balancing. Coulomb-counting combined with a Peukert-corrected capacity model provides adequate state-of-charge (SOC) estimation for VRLA packs in low-speed EV applications. The INA226 bidirectional current/voltage monitor has been validated in multiple embedded BMS designs for its I2C interface and 2.5 µV shunt resolution.</p>
            </section>

            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">III. MECHANICAL AND ELECTRICAL DESIGN</h2>
              <p className="mb-4"> PHILOSOPHY The mechanical design prioritises modularity, cost- effectiveness, and rapid prototyping. PVC is chosen as the primary structural material due to its ease of fabrica- tion and availability. PVC (polyvinyl chloride) pipes, particularly Schedule-40, were selected after evaluating mechanical strength, availability, and structural versatility. Steel reinforcements are proposed selectively to ensure safety at high-stress points such as the steering column and rear motor mounts.</p>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">A. Chassis Architecture</h3>
              <p className="mb-4"> The chassis adopts a ladder-frame layout, a configuration commonly used in small utility vehicles due to its simplicity and high torsional resistance. The longitudinal PVC rails sup- port bending loads due to passenger mass, while transverse members reduce side sway and improve torsional resistance. Joints are made using solvent cement (chemical welding) to ensure permanent, monolithic joint strength.</p>
              <div className="mx-auto max-w-xl w-full my-6 bg-card p-4 rounded-xl border border-border">
                <ProtectedImage src={fig1} alt="Figure 1" />
                <p className="mt-4 text-xs text-center font-body text-muted-foreground">Fig. 1: SolidWorks CAD model of the PVC chassis showing the</p>
              </div>
              <p className="mb-4"> ladder-frame layout, hub motor mounts, seat position, and battery bay.</p>
              <div className="mx-auto max-w-xl w-full my-6 bg-card p-4 rounded-xl border border-border">
                <ProtectedImage src={fig2} alt="Figure 2" />
                <p className="mt-4 text-xs text-center font-body text-muted-foreground">Fig. 2: 2D engineering drawing of the PVC chassis with key</p>
              </div>
              <p className="mb-4"> dimensions (overall length ≈2010 mm, width ≈920 mm). Key structural design decisions: • The rear section, which experiences the highest torsional load from motor torque, uses reinforced PVC with steel inserts. • The central region supporting the driver seat and battery pack is designed for uniform load distribution. • Heavy VRLA batteries are placed near the longitudinal centreline to maintain favourable handling characteris- tics. The electrical architecture is designed around a 36 V VRLA battery system. Unlike lithium-ion systems, VRLA batteries exhibit higher internal resistance and significant voltage sag under load. Therefore, the electrical system must be designed to handle transient voltage drops and high current spikes. Key electrical considerations include: • Minimising voltage drop through proper wiring • Ensuring safe startup using precharge circuits • Maintaining signal integrity in sensor readings • Isolating high-power and control circuits</p>
            </section>

            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">IV. STEERING SYSTEM</h2>
              <p className="mb-4"> The steering system allows the driver to control the direction of the vehicle with minimum effort while main- taining stability, safety, and road feel. The design integrates mechanical simplicity with geometrical correctness.</p>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">A. Steering Column and Linkage</h3>
              <p className="mb-4"> The central steering column, made from a rigid steel rod, transmits driver input to the tie-rods that actuate the front wheels. Bearings embedded in reinforced PVC housings minimise friction and enable smooth rotation. The steering arm welded at the lower end of the column converts rotational input into lateral tie-rod motion. The tie-rods are designed to approximate Ackermann geometry, ensuring the inner wheel turns more sharply than the outer wheel during cornering. A tie-rod system translates the rotational movement from the steering column into the lateral pivoting of the front wheel knuckles, ensuring synchronised turning.</p>
              <div className="mx-auto max-w-xl w-full my-6 bg-card p-4 rounded-xl border border-border">
                <ProtectedImage src={fig3} alt="Figure 3" />
                <p className="mt-4 text-xs text-center font-body text-muted-foreground">Fig. 3: Steering system assembly showing the steering wheel,</p>
              </div>
              <p className="mb-4"> steering gear, shaft, and tie-rod linkage connections. Rear motor brackets are mounted using specialised metal or reinforced PVC brackets housing robust bearings to handle lateral and rotational loads. Wheels are secured to the axle ends using collars or retaining pins.</p>
            </section>

            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">V. MOTOR MODELING AND PHYSICAL INTERPRETATION</h2>
              <p className="mb-4"> The BLDC motor is modelled using fundamental elec- tromagnetic principles. The motor converts electrical energy into mechanical energy through the interaction of magnetic fields and current-carrying conductors.</p>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">A. Electrical Dynamics</h3>
              <p className="mb-4"> V = Ldi dt + Ri + Keω (1) Equation (1) represents Kirchhoff’s voltage law applied to the motor winding. The three terms correspond to: • Inductive voltage  Ldi dt  : accounts for energy stored in magnetic fields • Resistive voltage (Ri): represents copper losses • Back EMF (Keω): opposing voltage generated by rotor motion As motor speed increases the back EMF increases, reduc- ing effective current drawn from the supply and providing inherent self-regulation.</p>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">B. Mechanical Dynamics</h3>
              <p className="mb-4"> J dω dt = Kti −Bω −TL (2) Equation (2) describes rotational motion. The torque generated by the motor accelerates the rotor against viscous friction Bω and external load torque TL (vehicle resistance). Higher current produces higher torque but also increases losses and battery drain.</p>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">C. Discrete-Time Simulation</h3>
              <p className="mb-4"> 1 Vbemf = Ke * omega; 2 Iphase = (Vbattery - Vbemf) / Rmotor; 3 domega = (Kt * Iphase - B * omega - loadTorque) / J; 4 omega = omega + domega * dt;</p>
              <p className="text-sm italic text-center mb-4">Listing 1: Euler integration of motor dynamics</p>
              <p className="mb-4"> Euler integration with dt = 1 ms was found sufficient for the go-kart’s operating range (0–5000 RPM). Smaller timesteps did not materially alter steady-state results but increased simulation time.</p>
            </section>

            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">VI. ELECTRICAL ARCHITECTURE</h2>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">A. Power Network</h3>
              <p className="mb-4"> The electrical architecture integrates the power source, safety systems, motor control, and traction control interface into a unified network. The system operates on a 36 V powertrain derived from four 12 V 7.2 Ah VRLA batteries connected in series, supplying power to two BLDC motor controllers (each rated 36 V / 50 A peak).</p>
              <div className="mx-auto max-w-xl w-full my-6 bg-card p-4 rounded-xl border border-border">
                <ProtectedImage src={fig4} alt="Figure 4" />
                <p className="mt-4 text-xs text-center font-body text-muted-foreground">Fig. 4: Electrical architecture schematic showing the 36 V battery</p>
              </div>
              <p className="mb-4"> pack, ANL fuse, contactor, INA226 current sensor, Arduino control core, dual motor controllers (MC1, MC2), and safety wiring. The Arduino control core performs the following functions: • Reads throttle (0–5 V equivalent analogue input on A0) • Reads hall RPM signals via interrupt pins (D2, D3) • Runs traction control and BMS logic at 20–50 Hz • Sends filtered PWM to motor controllers via RC low- pass networks B. Signal Conditioning and EMI Mitigation Motor controllers accept analogue throttle voltages of approximately 1.0–4.2 V. The Arduino outputs PWM signals through an RC low-pass filter (10 kΩ+ 4.7 µF, fc ≈3.4 Hz) to convert PWM into a stable analogue voltage with &lt;10 mV ripple. The wiring architecture employs single-point grounding, twisted-pair wires for hall and PWM signals, and physical separation between high-current power cables and signal wires to suppress EMI from BLDC switching events.</p>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">C. Safety Hardware</h3>
              <p className="mb-4"> The safety hardware includes: • Emergency kill switch providing a hardware-level cutoff (normally closed push-button wired in series with the contactor coil) • High-current contactor (rated 200 A) for power isolation, activated by a MOSFET-driven 36 V coil • Precharge resistor (47 Ω/ 25 W) to limit inrush current when controller capacitors charge • 100 A ANL fuse on the main positive bus</p>
            </section>

            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">VII. TRACTION CONTROL SYSTEM (TCS)</h2>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">A. Physical Understanding of Slip</h3>
              <p className="mb-4"> Dual independent motors act like an open differential; one wheel can spin faster than the other. This is called slip, which causes instability, current spikes, and wasted energy. Slip is formally defined as: s = ω −ωref ωref (3) where ωref is approximated as the average of both wheel speeds during normal operation.</p>
              <div className="mx-auto max-w-xl w-full my-6 bg-card p-4 rounded-xl border border-border">
                <ProtectedImage src={fig5} alt="Figure 5" />
                <p className="mt-4 text-xs text-center font-body text-muted-foreground">Fig. 5: Traction control hardware circuit diagram showing the</p>
              </div>
              <p className="mb-4"> Arduino, dual motor controllers (MC1, MC2), throttle input, hall sensor connections, RC filter network, and kill switch wiring.</p>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">B. Normalised Slip Calculation</h3>
              <p className="mb-4"> 1 slip1 = (rpm1 - rpmRef) / max(rpmRef, 1);</p>
              <p className="text-sm italic text-center mb-4">Listing 2: Normalised slip with numerical guard</p>
              <p className="mb-4"> The use of max(rpmRef, 1) ensures numerical stability at low speeds, preventing division-by-zero instability during vehicle launch.</p>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">C. Feedback Control Perspective</h3>
              <p className="mb-4"> The TCS can be interpreted as a proportional feedback control loop: • Measured output: wheel RPM (from hall sensors) • Reference: ωref (average wheel speed) • Error: slip ratio s • Control action: proportional PWM reduction</p>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">D. Control Law</h3>
              <p className="mb-4"> PWMout = PWMreq · (1 −K · s) (4) where K is the proportional gain tuned to K = 0.6 experimentally such that aggressive slip is suppressed without causing oscillatory wheel-speed hunting.</p>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">E. TCS Logic and Flowchart</h3>
              <div className="mx-auto max-w-xl w-full my-6 bg-card p-4 rounded-xl border border-border">
                <ProtectedImage src={fig6} alt="Figure 6" />
                <p className="mt-4 text-xs text-center font-body text-muted-foreground">Fig. 6: TCS logic flowchart: throttle and hall sensor inputs feed</p>
              </div>
              <p className="mb-4"> into the Arduino, which computes RPMs, evaluates slip = (L − R)/R, and writes modulated PWM outputs to each motor controller independently. 1 // --- Slip Calculation --- 2 float slip = (rpmLeft - rpmRight) 3 / max(rpmRight, 1.0); 4 5 // --- Traction Control Logic --- 6 if (slip &gt; SLIP_THRESHOLD) &#123; 7 pwmLeft -= SLIP_REDUCTION_GAIN; 8 &#125; 9 10 // --- Safety Clamp --- 11 pwmLeft = constrain(pwmLeft, 0.0, 1.0); 12 pwmRight = constrain(pwmRight, 0.0, 1.0);</p>
              <p className="text-sm italic text-center mb-4">Listing 3: Arduino TCS slip detection and PWM modulation</p>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">F. Debounce Logic and Stability</h3>
              <p className="mb-4"> 1 if slip &gt; threshold 2 if time_above &gt; debounce 3 slipActive = true; 4 end 5 end</p>
              <p className="text-sm italic text-center mb-4">Listing 4: Time-domain debounce for slip detection</p>
              <p className="mb-4"> A 120 ms debounce window suppresses transient hall- pulse noise without meaningfully delaying genuine slip response. Hysteresis is implemented by using a lower recovery threshold (soff = 0.5 · son) to avoid oscillatory toggling of the TCS.</p>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">G. PWM Ramping</h3>
              <p className="mb-4"> 1 pwmOut = pwmOut + sign(target - pwmOut) * step;</p>
              <p className="text-sm italic text-center mb-4">Listing 5: Smooth PWM ramping to avoid torque shocks</p>
              <p className="mb-4"> A ramp step of 0.02 per loop iteration (at 25 Hz) cor- responds to a full-range PWM transition in 2 s, providing smooth torque delivery while still being fast enough for effective slip correction.</p>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">H. MATLAB GUI for TCS Simulation</h3>
              <div className="mx-auto max-w-xl w-full my-6 bg-card p-4 rounded-xl border border-border">
                <ProtectedImage src={fig7} alt="Figure 7" />
                <p className="mt-4 text-xs text-center font-body text-muted-foreground">Fig. 7: MATLAB GUI for TCS simulation showing motor RPM</p>
              </div>
              <p className="mb-4"> plots, pack voltage, controller current traces, and real-time CAN output log. The GUI acts as a digital twin enabling safe experimen- tation without hardware risks.</p>
            </section>

            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">VIII. BATTERY MANAGEMENT SYSTEM (BMS)</h2>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">A. VRLA Battery Characteristics</h3>
              <p className="mb-4"> VRLA batteries exhibit high internal resistance (leading to voltage sag under load), sensitivity to deep discharge (below 33 V for a 36 V pack), and heat buildup that accelerates plate corrosion. VRLA batteries suffer irreversible sulphation if discharged below approximately 10.8 V per cell (32.4 V for a 3S pack). Thermal thresholds of 45–50 ◦C represent rapid ageing, while 55 ◦C risks thermal deformation or acid venting.</p>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">B. Electrical Model</h3>
              <p className="mb-4"> V = Voc −I · Rint (5) This first-order Th´evenin model captures open-circuit voltage Voc and the load-dependent voltage drop across internal resistance Rint.</p>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">C. SOC Estimation</h3>
              <p className="mb-4"> SOC(t) = SOC0 −1 C Z t 0 I(τ) dτ (6) 1 SOC = SOC - (I * dt) / C;</p>
              <p className="text-sm italic text-center mb-4">Listing 6: Coulomb-counting SOC update</p>
              <p className="mb-4"> Coulomb counting is augmented by the Peukert correction to account for capacity reduction at high discharge rates.</p>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">D. Thermal Model</h3>
              <p className="mb-4"> dT dt = I2Rint −h(T −Ta) Cth (7) This models Joule heating (I2Rint) balanced by convective cooling h(T −Ta), where h is the lumped heat transfer coefficient and Cth is the pack thermal capacitance.</p>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">E. BMS Hardware Circuit</h3>
              <div className="mx-auto max-w-xl w-full my-6 bg-card p-4 rounded-xl border border-border">
                <ProtectedImage src={fig8} alt="Figure 8" />
                <p className="mt-4 text-xs text-center font-body text-muted-foreground">Fig. 8: BMS hardware schematic including the auxiliary 12 V bat-</p>
              </div>
              <p className="mb-4"> tery, voltage regulator, MOSFET-controlled contactor coil, INA226 current/voltage sensor (I2C), DS18B20 temperature sensors (1- Wire), Arduino, buzzer, and LED indicators.</p>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">F. BMS Protection Logic</h3>
              <div className="mx-auto max-w-xl w-full my-6 bg-card p-4 rounded-xl border border-border">
                <ProtectedImage src={fig9} alt="Figure 9" />
                <p className="mt-4 text-xs text-center font-body text-muted-foreground">Fig. 9: BMS control flowchart: the Arduino reads V , I, and</p>
              </div>
              <p className="mb-4"> temperature sensors, applies exponential filtering, checks fault conditions (undervoltage, overcurrent, overtemperature), and either triggers a fault (opens contactor, cuts PWM, logs fault) or continues normal operation. 1 void safetyCheck() &#123; 2 float V = readPackVoltage(); 3 float I = readCurrentINA226(); 4 float T = readMaxBatteryTemp(); 5 6 if (V &lt; LOW_VOLTAGE_CUTOFF) &#123; // 33 V 7 triggerFault("Undervoltage"); 8 &#125; else if (I &gt; MAX_DISCHARGE_CURRENT)&#123; // 45 A 9 triggerFault("Overcurrent"); 10 &#125; else if (T &gt; MAX_BAT_TEMP) &#123; // 55 C 11 triggerFault("Overtemperature"); 12 &#125; 13 &#125; 14 15 void triggerFault(String reason) &#123; 16 digitalWrite(PIN_CONTACTOR, LOW); 17 analogWrite(PWM_M1, 0); 18 analogWrite(PWM_M2, 0); 19 systemFault = true; 20 Serial.println("FAULT: " + reason); 21 &#125;</p>
              <p className="text-sm italic text-center mb-4">Listing 7: BMS safety check and fault handler</p>
              <p className="mb-4"> Protection thresholds are summarised in Table I. TABLE I: BMS Protection Thresholds Parameter Threshold Protected fault Pack voltage &lt; 33 V Deep discharge / sulphation Pack current &gt; 45 A Wiring / controller overload Battery temp. &gt; 55 ◦C Thermal runaway / venting Kill switch Active LOW Emergency operator stop</p>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">G. INA226 Measurement and Filtering</h3>
              <p className="mb-4"> The INA226 digital power monitor provides high- accuracy bus voltage and current readings via I2C with shunt-voltage accuracy of 2.5 µV. The Arduino configures the device for 16-sample averaging at 1.1 ms conversion time, yielding a reliable measurement every ≈3 ms. An exponential moving-average (EMA) filter further smooths readings: ˆx[n] = α ˆx[n −1] + (1 −α) x[n], α = 0.85 (8) 1 filtered = 0.85f * old_filtered + 0.15f * raw;</p>
              <p className="text-sm italic text-center mb-4">Listing 8: Exponential moving-average filter (alpha = 0.85)</p>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">H. Precharge Circuit Working</h3>
              <p className="mb-4"> The precharge resistor limits inrush current when capac- itors in motor controllers charge. Without precharging, an instantaneous inrush of I = V/RESR can exceed 500 A, welding contactor contacts. With a 47 Ωprecharge resistor, peak inrush is limited to &lt; 0.8 A. The Arduino follows a four-stage state machine: 1 switch (state) &#123; 2 case PRECHARGE: 3 enablePrechargeRelay(); 4 if (controllerVoltage &gt; 0.9f * packVoltage) &#123; 5 closeContactor(); 6 disablePrechargeRelay(); 7 state = RUNNING; 8 &#125; 9 break; 10 &#125;</p>
              <p className="text-sm italic text-center mb-4">Listing 9: Precharge state machine</p>
            </section>

            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">I. BMS MATLAB GUI</h2>
              <div className="mx-auto max-w-xl w-full my-6 bg-card p-4 rounded-xl border border-border">
                <ProtectedImage src={fig10} alt="Figure 10" />
                <p className="mt-4 text-xs text-center font-body text-muted-foreground">Fig. 10: MATLAB BMS GUI displaying real-time voltage (36.49 V),</p>
              </div>
              <p className="mb-4"> current (13.5 A), SOC (96.1%), temperature (25.5 ◦C), contactor state, LED indicators, and CAN output log.</p>
            </section>

            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">IX. MATLAB SIMULATION AND NUMERICAL</h2>
              <p className="mb-4"> MODELING MATLAB simulations were conducted to validate the electrical and traction control models before practical imple- mentation. Discrete-time Euler integration captures the coupled dynamics of motors and battery across a simulated 300 s drive cycle.</p>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">A. Complete EV System Simulation</h3>
              <div className="mx-auto max-w-xl w-full my-6 bg-card p-4 rounded-xl border border-border">
                <ProtectedImage src={fig11} alt="Figure 11" />
                <p className="mt-4 text-xs text-center font-body text-muted-foreground">Fig. 11: Complete EV-BMS MATLAB simulation environment</p>
              </div>
              <p className="mb-4"> showing the integrated motor model, battery model, TCS slip correction, and real-time GUI dashboard with RPM, voltage, current, and SOC traces.</p>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">B. Motor Current Calculation</h3>
              <p className="mb-4"> 1 I = (Vdrive - Ke * omega) / Req;</p>
              <p className="text-sm italic text-center mb-4">Listing 10: Motor current from drive voltage and back-EMF</p>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">C. Battery Voltage and SOC Update</h3>
              <p className="mb-4"> 1 Ceff = Crated * (Iref / max(I, 0.01))ˆk; 2 Vpack = Voc_curve(SoC) - I * Rint; 3 SoC = SoC - I * dt / (Ceff * 3600);</p>
              <p className="text-sm italic text-center mb-4">Listing 11: VRLA battery voltage and SOC update with Peukert</p>
              <p className="mb-4"> correction The VRLA model incorporates Peukert’s effect: Ceff = Crated Iref I k (9) with Peukert exponent k = 1.3 and reference current Iref = 0.72 A (C/10 rate for 7.2 Ah cells).</p>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">D. Slip Simulation</h3>
              <p className="mb-4"> Slip is introduced by reducing load torque on motor 2 to 20% of nominal, simulating a low-friction surface: 1 if slip_event 2 loadTorque2 = loadTorque2 * 0.2; 3 end 4 5 slipRatio = (rpm1 - rpm2) / max(rpm_ref, 1); 6 if slipRatio &gt; slipThreshold 7 pwm1 = pwm1 - slipGain * slipRatio; 8 end</p>
              <p className="text-sm italic text-center mb-4">Listing 12: Artificial slip event via load torque reduction</p>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">E. Simulation Results</h3>
              <p className="mb-4"> Figures 12–18 present the key simulation outputs. At steady state under nominal 350 W load per motor, both motors converge to 4191 RPM with matched controller currents of 13.5 A and a pack voltage of 35.46 V (sag of ≈0.6 V from open-circuit at 98.8% SOC), consistent with the Th´evenin model of Eq. (5).</p>
              <div className="mx-auto max-w-xl w-full my-6 bg-card p-4 rounded-xl border border-border">
                <ProtectedImage src={fig12} alt="Figure 12" />
                <p className="mt-4 text-xs text-center font-body text-muted-foreground">Fig. 12: Motor RPM vs. time for both hub motors during the</p>
              </div>
              <p className="mb-4"> simulated drive cycle. Acceleration phases, a deliberate slip event (one wheel drops to ≈1500 RPM when traction is removed), and TCS-corrected re-synchronisation within ≈220 ms are clearly visible.</p>
              <div className="mx-auto max-w-xl w-full my-6 bg-card p-4 rounded-xl border border-border">
                <ProtectedImage src={fig13} alt="Figure 13" />
                <p className="mt-4 text-xs text-center font-body text-muted-foreground">Fig. 13: Pack voltage vs. time. The VRLA voltage sag during</p>
              </div>
              <p className="mb-4"> acceleration reaches a minimum of ≈34.1 V but remains well above the 33 V BMS cutoff throughout the 300 s simulation. Voltage recovers toward Voc during coasting segments.</p>
              <div className="mx-auto max-w-xl w-full my-6 bg-card p-4 rounded-xl border border-border">
                <ProtectedImage src={fig14} alt="Figure 14" />
                <p className="mt-4 text-xs text-center font-body text-muted-foreground">Fig. 14: Peak pack current vs. time. Transient current spikes during</p>
              </div>
              <p className="mb-4"> hard acceleration reach ≈38 A, remaining below the 45 A BMS overcurrent threshold. The TCS visibly reduces peak current during slip-correction events compared to the uncontrolled case.</p>
              <div className="mx-auto max-w-xl w-full my-6 bg-card p-4 rounded-xl border border-border">
                <ProtectedImage src={fig15} alt="Figure 15" />
                <p className="mt-4 text-xs text-center font-body text-muted-foreground">Fig. 15: Individual controller currents (I1 and I2) vs. time. Under</p>
              </div>
              <p className="mb-4"> normal traction both channels draw matched currents. During the slip event I1 spikes to ≈85 A (motor 1 spinning freely) before the TCS reduces PWM and restores balance within one control cycle.</p>
              <div className="mx-auto max-w-xl w-full my-6 bg-card p-4 rounded-xl border border-border">
                <ProtectedImage src={fig16} alt="Figure 16" />
                <p className="mt-4 text-xs text-center font-body text-muted-foreground">Fig. 16: EV circuit-level simulation showing the battery equivalent</p>
              </div>
              <p className="mb-4"> circuit, motor winding models, contactor, and precharge resistor, used to validate transient voltage behaviour during startup and fault events.</p>
              <div className="mx-auto max-w-xl w-full my-6 bg-card p-4 rounded-xl border border-border">
                <ProtectedImage src={fig17} alt="Figure 17" />
                <p className="mt-4 text-xs text-center font-body text-muted-foreground">Fig. 17: Steady-state simulation snapshot: Motor 1 and Motor 2</p>
              </div>
              <p className="mb-4"> both at 4191 RPM; I1 = I2 = 13.5 A; Vpack = 35.46 V; SOC = 98.8%. LED green, contactor ON, no faults.</p>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">F. EV Circuit Simulation</h3>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">G. Simulation Statistics Summary</h3>
              <div className="mx-auto max-w-xl w-full my-6 bg-card p-4 rounded-xl border border-border">
                <ProtectedImage src={fig18} alt="Figure 18" />
                <p className="mt-4 text-xs text-center font-body text-muted-foreground">Fig. 18: Extended 300 s simulation statistics. SOC depletes from</p>
              </div>
              <p className="mb-4"> 100% to ≈82% at constant 700 W combined load. Pack voltage remains &gt; 34.0 V throughout, validating the 33 V BMS cutoff as appropriately conservative. Temperature rises &lt; 8 ◦C above ambient under the modelled thermal parameters.</p>
            </section>

            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">X. MATLAB GUI AND SYSTEM INTERACTION</h2>
              <p className="mb-4"> The MATLAB GUI provides an interactive interface that allows users to: • Adjust throttle and braking inputs via sliders • Enable or disable traction control with a toggle • Visualise system response in real time (RPM, pack voltage, current, SOC, temperature) • Monitor CAN-style serial telemetry output • Observe LED and contactor status indicators The GUI acts as a digital twin of the physical system, enabling safe parameter exploration without hardware risk and facilitating pre-deployment validation of BMS and TCS thresholds.</p>
            </section>

            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">XI. ARDUINO IMPLEMENTATION</h2>
              <p className="mb-4"> The Arduino firmware (available at) unifies TCS and BMS responsibilities into a single embedded controller (ATmega328-class, 16 MHz). The firmware is structured into three layers: • Hardware interface layer: GPIO configuration, ADC reads, I2C reads from INA226, 1-Wire reads for DS18B20, PWM outputs, and ISRs for hall sensors. ISRs only increment counters. • Control logic layer: Computes wheel RPMs, evaluates slip with debouncing and hysteresis, computes per-wheel throttle targets, and ramps PWM outputs smoothly. Runs at 25 Hz. • Safety/housekeeping layer: Monitors battery state; han- dles precharge/contactor state machine and kill switch. Any safety violation triggers deterministic shutdown. Pin mapping: • D2/D3: Hall pulse inputs — Motor 1/2 (INT0/INT1) • A0: Throttle analogue input (0–5 V) • D5/D6: PWM →RC filter →motor controller throttle • D8: Kill switch (INPUT_PULLUP, active LOW) • D10: Contactor MOSFET gate • A4/A5 (SDA/SCL): I2C for INA226 • D4: 1-Wire bus for DS18B20 sensors</p>
            </section>

            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">XII. COMPLETE SYSTEM WORKING</h2>
              <p className="mb-4"> The entire system operates as a closed-loop control system: 1) Driver inputs throttle; Arduino reads A0 (0–5 V). 2) Hall ISRs count pulses; RPM computed every 200 ms window. 3) Slip s = (ωL −ωR)/ max(ωR, 1) is evaluated. 4) If s &gt; sth persists for &gt; 120 ms: • PWM to slipping motor reduced by K ·s per cycle. • PWM ramped at 0.02/loop to avoid torque shock. 5) Motor torque adjusts; BMS monitors V , I, T every cycle. 6) On fault: contactor opens, PWM →0, fault reason serialised.</p>
            </section>

            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">XIII. RESULTS AND DISCUSSION</h2>
              <p className="mb-4"> A. Bench Testing of Individual Subsystems Each subsystem was bench-validated before integration. Motor controllers and hub motors were swept across 0–100% throttle with oscilloscope probes on the RC-filter output, confirming &lt;10 mV ripple and monotonic voltage-to-RPM mapping. BMS cutoff thresholds were individually validated by ramping a bench supply to trigger undervoltage and by applying a calibrated current source to verify overcurrent shutdown. DS18B20 sensors were heated with a heat gun and the overtemperature trip confirmed at 55 ◦C ± 1 ◦C.</p>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">B. Integrated Electrical Testing</h3>
              <p className="mb-4"> Two issues were identified during integration. First, PWM ripple at the motor controller throttle input (caused by insufficiently filtered PWM) produced ±80 RPM jitter; this was resolved by replacing 4.7 µF capacitors with 10 µF, lowering fc from 3.4 Hz to 1.6 Hz. Second, ground-reference offset between the two controllers introduced a systematic throttle mismatch of ≈0.15 V; corrected by a star-connected single-point ground at the negative battery terminal. After both corrections, the two motors tracked within ±30 RPM at all throttle positions.</p>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">C. MATLAB vs. Real-World Correlation</h3>
              <p className="mb-4"> Table II presents a quantitative comparison of simulation predictions against bench and field measurements. TABLE II: Simulation vs. Measured Results Metric Simulated Measured Error Steady-state RPM (each motor) 4191 RPM 4030 RPM +4.0% Controller current (steady) 13.5 A 14.2 A −4.9% Pack voltage (un- der load) 35.46 V 35.10 V +1.0% Slip correction time 220 ms 240 ms −8.3% Voltage sag (peak accel.) 1.54 V 1.90 V −18.9% SOC at 300 s 82.0% 79.5% +3.1% Deviations in steady-state RPM (+4%) and voltage sag (−19%) arise primarily from real-world rolling resistance and connector contact resistance not captured by the reduced- order motor model. Slip correction timing agreed to within one debounce window (120 ms), confirming that the embed- ded Arduino firmware faithfully implements the simulation algorithm.</p>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">D. Full Vehicle Testing</h3>
              <p className="mb-4"> a) Acceleration Performance: Initial acceleration tests confirmed smooth throttle transitions with no perceptible torque shocks, validating the PWM ramp strategy. The vehicle accelerated from rest to ≈15 km/h in approximately 4 s at full throttle on a dry concrete surface with a combined driver- plus-kart mass of ≈75 kg. b) Traction Control Performance: Slip events were deliberately induced by coating one rear tyre contact patch with a lubricating film (wet surface simulation). Without TCS enabled, the slipping wheel immediately spun to &gt;3500 RPM while the gripping wheel stalled at &lt;800 RPM, causing the kart to yaw sharply. With TCS enabled, the slipping-wheel PWM was reduced within one debounce cycle, restoring both wheels to within ±150 RPM of each other and maintaining straight-line motion. Battery current spikes associated with the free-spinning motor were reduced from ≈90 A (no TCS) to &lt;38 A (TCS active), consistent with simulation predictions in Fig. 15. c) BMS Performance: Over 12 test runs totalling approximately 45 min of operation, the BMS recorded zero nuisance trips. Pack voltage never fell below 34.1 V during any run (well above the 33 V cutoff), and maximum observed temperature was 41 ◦C on the battery surface (well below the 55 ◦C limit). The precharge sequence completed successfully on every power-on, with contactor closure confirmed &lt;600 ms after key-on. d) Mechanical Observations: The PVC frame exhib- ited minor elastic flex under aggressive cornering (&lt;3 mm lateral displacement at the steering column mount), but no permanent deformation or joint failure occurred across all test runs. Steering response remained linear and predictable. Slight PVC creep was observed at the rear motor mounts after sustained loading; steel insert reinforcement at those points was confirmed effective in preventing failure. E. Identified Limitations and Mitigation • VRLA voltage sag: Higher-than-modelled sag (≈19% underestimated) reduces effective runtime. Mitigation: increase Rint estimate in model; upgrade to LiFePO4 for production. • PVC structural ceiling: Not suited for speeds &gt;20 km/h or loads &gt;100 kg. Mitigation: aluminium tube frame for next iteration. • Hall-signal noise sensitivity: Wiring-induced EMI can corrupt RPM counts at high motor currents. Mitigation: shielded twisted-pair hall cables, software median filter on pulse count. • PWM filter tuning: RC corner frequency required empirical adjustment per controller model. Mitigation: replace RC filter with dedicated I2C DAC (MCP4725).</p>
            </section>

            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">XIV. CONCLUSION</h2>
              <p className="mb-4"> This paper has presented a complete, reproducible design of a low-cost electric go-kart integrating mechanical, electri- cal, embedded, and control subsystems. The key contributions are: 1) A PVC-based ladder-frame chassis validated under realistic driver loads, demonstrating the viability of non-metallic prototyping for low-speed EVs. 2) An Arduino-based TCS that corrects wheel slip within ≈200–240 ms, reduces slip-induced current spikes by &gt;57%, and maintains straight-line stability on low-friction surfaces — all implemented on a $4 microcontroller. 3) A VRLA BMS enforcing undervoltage (33 V), over- current (45 A), and overtemperature (55 ◦C) protection with zero nuisance trips during 45 min of simulated testing. 4) A validated MATLAB simulation framework (66% MATLAB, 34% C++ per repository statistics) provid- ing &lt;5% error on steady-state quantities and &lt;9% on transient slip-correction timing. Future directions include: (i) replacing PVC with alu- minium tubing for higher structural performance; (ii) up- grading to LiFePO4 batteries with active cell balancing; (iii) migrating the TCS to an STM32 platform for model- predictive or PID-based slip control; (iv) adding a MCP4725 12-bit DAC for clean analogue throttle generation; and (v) deploying wireless telemetry (BLE/LoRa) for real-time data logging and remote monitoring. The project, whose full source is available at, demon- strates that meaningful EV engineering experiments — includ- ing real-time traction control and battery safety management — are achievable with open-source hardware and under $200 in components. </p>
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
      <div className="absolute left-[8%] top-[10%] h-14 w-14 rounded-[40%_60%_65%_35%/50%_45%_55%_50%] bg-primary/20 float-slow" />
      <div className="absolute right-[5%] top-[45%] h-24 w-24 rounded-[65%_35%_45%_55%/40%_55%_45%_60%] bg-red-muted/20 drift-x" />
      <div className="absolute bottom-[10%] left-[20%] h-10 w-10 rounded-full bg-primary/20 float-medium" />
    </div>
  );
}
