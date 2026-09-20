import { createFileRoute, Link } from "@tanstack/react-router";
import { Github, FileText, Download } from "lucide-react";
import { useEffect } from "react";
import { ProtectedImage } from "../components/ProtectedImage";

import fig1 from "../assets/NexOrbital/nexorbital_rocket_flight.png";
import fig2 from "../assets/NexOrbital/rail_housing_cross_section.png";
import fig3 from "../assets/NexOrbital/base_stand_details.png";
import fig4 from "../assets/NexOrbital/launchpad_macro_dimensions.png";
import fig5 from "../assets/NexOrbital/trapezoidal_supports_and_feet.png";

export const Route = createFileRoute("/project/nexorbital")({
  component: NexOrbitalProjectPage,
});

function NexOrbitalProjectPage() {
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
          if (rect.top < -50) {
            sections[currentIdx].scrollIntoView({ behavior: "smooth" });
          } else if (currentIdx > 0) {
            sections[currentIdx - 1].scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown, { passive: false });
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground scroll-smooth">
      <main className="relative z-10">
        <div className="px-6 pb-20 pt-10 md:px-12 md:pb-28 md:pt-20 lg:px-16">
          <div className="mx-auto max-w-4xl">
            <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-2 text-sm font-medium text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Aaditya Kamble</Link>
              <span>/</span>
              <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
              <span>/</span>
              <Link to="/project/nexorbital" className="text-foreground hover:text-primary transition-colors">NexOrbital Launch Platform</Link>
            </nav>

            {/* Slide 1: Title */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30">
              <div className="mb-4 w-full text-left">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  December 2024
                </span>
              </div>
              <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.2] tracking-tight text-foreground md:text-5xl lg:text-6xl text-center">
                Design and Sizing of the NexOrbital Launch Platform
              </h1>

              <div className="mt-12 flex flex-col justify-center gap-4 text-center">
                <div>
                  <p className="font-semibold">Aaditya Kamble (B22MT024)</p>
                  <p className="text-sm text-muted-foreground">Department of Metallurgical and Materials Engineering</p>
                  <p className="text-sm text-muted-foreground">Team NexOrbital — IN-SPACE Model Rocketry India Student Competition, 2024–2025</p>
                </div>
              </div>

              {/* Action Links */}
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href="/src/assets/NexOrbital/Design and Sizing of the NexOrbital Launch Platform.pdf"
                  target="_blank"
                  rel="noreferrer"
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
                This paper documents the design process behind the NexOrbital launch platform, developed for the IN-SPACE Model Rocketry India Student Competition (2024–2025) to support a 14 kg, transition-based rocket carrying an L-class solid motor. Rather than presenting the finished hardware and verifying it after the fact, this paper follows the design in the order the decisions were actually made: starting from the rail-departure velocity requirement, through the sizing of the guidance rail and outrigger geometry, to the final selection of steel and aluminum stock sections.
              </p>
              <p className="mt-4">
                At each stage, a governing requirement is established, a candidate configuration is evaluated against it, and the resulting margin is used to either accept the configuration or drive a revision. The final platform stands 3.4 m tall at 90°, uses a trapezoidal steel outrigger base spanning 1.5 m, and carries safety margins of at least 2.0 against every failure mode considered, with the outrigger buckling margin exceeding 50.
              </p>
              <p className="mt-4 text-sm italic text-center">
                Index Terms—Ground Support Equipment, High-Power Rocketry, NexOrbital, Design Process, Kinematics, Euler Buckling.
              </p>
            </section>

            {/* Slide 3: Intro */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">I. Introduction and Project Context</h2>
              <p className="mb-4">
                In high-power rocketry, the launch platform is not a passive fixture; it actively determines how the vehicle leaves the ground. The rail must be long enough for the rocket to reach a safe departure velocity, the base must resist the overturning moment generated by off-axis thrust and wind, and the ground contact must not settle during the ignition transient. Designing this platform therefore means working backward from these three physical requirements to a set of concrete dimensions and material choices, rather than starting from a fixed geometry and checking it afterward.
              </p>
              <p className="mb-4">
                This paper documents how I approached that design task for the NexOrbital project, as part of my Design Credit (MTN2020). I was responsible for the launchpad from first concept through to final drawings, working under one constraint that shaped every decision below: every structural member had to be selectable from commercially available stock steel and aluminum sections, since the team could not afford custom fabrication.
              </p>
              <p className="mb-4">
                The vehicle driving these requirements is a 180 cm, 14 kg transition-based rocket designed to carry a 1 kg payload to an apogee of 1 km on an L-class motor, with an 18–14 cm body transition, four main fins, and two active-roll canards. The following sections walk through the design in four stages: (1) establishing the kinematic requirement that sizes the rail, (2) sizing the outrigger structure to meet that requirement without buckling, (3) checking the resulting base geometry against overturning and wind loads and revising the footprint accordingly, and (4) sizing the ground contact and rail stiffness last, once the load path was fixed.
              </p>
              
              <div className="mx-auto max-w-xl w-full my-6 bg-card p-4 rounded-xl border border-border">
                <ProtectedImage src={fig1} alt="Figure 1" />
                <p className="mt-4 text-xs text-center font-body text-muted-foreground">Fig. 1: NexOrbital vehicle during simulated flight.</p>
              </div>
            </section>
            
            {/* Slide 4: Stage 1 */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">II. Stage 1: Establishing the Kinematic Requirement</h2>
              <p className="mb-4">
                The first design decision was not a dimension but a requirement: how fast does the vehicle need to be moving when it leaves the rail? This requirement, once fixed, drives the minimum usable rail length, which in turn constrains everything built underneath it.
              </p>
              
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">A. Setting the Departure Velocity Target</h3>
              <p className="mb-4">
                A standard design rule for passively stabilized vehicles requires the rail-exit velocity to be at least four times the design crosswind speed, so that fin-generated restoring moments dominate any wind-induced disturbance the instant the vehicle is airborne: <code>vexit, min ≥ 4 vcrosswind</code>. Taking an operational design crosswind of 4.0 m/s set the target at 16.0 m/s. This single number became the governing constraint for the rail-length decision that followed.
              </p>
              
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">B. Sizing the Rail Around the Vehicle</h3>
              <p className="mb-4">
                With the vehicle length fixed at 1.80 m and the aft guide button positioned roughly 1.20 m below the rail tip at liftoff, a candidate rail of total length 2.80 m gives an effective acceleration stroke of 1.60 m. Combined with Newton’s second law for the 14 kg vehicle on a vertical (90°) rail, the exit velocity can be evaluated across the expected thrust envelope of the motor.
              </p>
              <p className="mb-4">
                A 2.80 m candidate rail was ultimately selected as the shortest standard aluminum extrusion length that cleared the target under high-thrust motor selection. Only the High-thrust M-class cleared 16.0 m/s outright on stroke length alone. Rather than lengthen the rail further — which would have pushed the platform height and outrigger loads up — the vehicle’s active-roll canards were relied on to suppress crosswind-induced roll at the lower exit velocities of Cases A and B, making the shorter 2.80 m rail acceptable across the full thrust envelope and keeping the rest of the structure smaller.
              </p>
            </section>
            
            {/* Slide 5: Stage 2 */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">III. Stage 2: Sizing the Rail Housing and Base Stand</h2>
              <p className="mb-4">
                With the 2.80 m rail fixed, the next task was to design a housing and base that could hold it rigidly at any angle from 82° to 90°, in 2° increments, without adding unnecessary height.
              </p>
              <p className="mb-4">
                A 200 cm steel rail housing was chosen as the structural spine, pivoting on the base stand at its midpoint so that the arc mechanism could sweep the full 8° tilt range without the housing overhanging the base footprint at either extreme. The 2.80 m aluminum rail is bolted directly to this housing, so that only the housing — not the rail itself — carries the pivoting load.
              </p>

              <div className="mx-auto max-w-xl w-full my-6 bg-card p-4 rounded-xl border border-border">
                <ProtectedImage src={fig2} alt="Figure 2" />
                <p className="mt-4 text-xs text-center font-body text-muted-foreground">Fig. 2: Rail housing and aluminum guidance rail cross-section.</p>
              </div>

              <p className="mb-4">
                Underneath the housing, a 153 cm hollow steel central column was sized to bring the pivot to a working height clear of the outrigger arms, terminating in a 30 × 30 × 3 cm square base plate sized to accept the four outrigger mounts. Welded mounts at the column apex and 90 cm below it were positioned to give the rail housing a stable two-point rotational interface, rather than a single pivot that would have relied on the locking pin alone to carry bending load.
              </p>

              <div className="mx-auto max-w-xl w-full my-6 bg-card p-4 rounded-xl border border-border">
                <ProtectedImage src={fig3} alt="Figure 3" />
                <p className="mt-4 text-xs text-center font-body text-muted-foreground">Fig. 3: Base stand geometry and welded mount locations.</p>
              </div>
              <div className="mx-auto max-w-xl w-full my-6 bg-card p-4 rounded-xl border border-border">
                <ProtectedImage src={fig4} alt="Figure 4" />
                <p className="mt-4 text-xs text-center font-body text-muted-foreground">Fig. 4: Macro-scale dimensions and layout of the launch platform as designed.</p>
              </div>
            </section>
            
            {/* Slide 6: Stage 3 */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">IV. Stage 3: Designing the Outrigger Structure</h2>
              <p className="mb-4">
                The rail and column together stand 3.4 m tall, which meant the base geometry carried the full responsibility for overturning resistance. This stage is where most of the design iteration happened: footprint, arm angle, and cross-section were sized together against buckling and tip-over, rather than one after another.
              </p>
              
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">A. Choosing the Footprint</h3>
              <p className="mb-4">
                A trapezoidal, four-arm outrigger was chosen over a simple square base because it lets the arm angle and chord length be tuned independently of the central column footprint. With an arm chord of 70.00 cm, an inclination of 23.58°, and a central collar offset of 16.00 cm, the projected horizontal leg span is 64.155 cm, giving a total span between opposite foot pivots of 144.31 cm. This 144.31 cm span was the largest footprint that kept the platform within the 1.5 m transport and stowage envelope set by the team, and it became the target value used to back-derive the 23.58° arm angle once the 70 cm arm length was fixed by the same envelope constraint.
              </p>
              
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">B. Sizing the Outrigger Cross-Section Against Buckling</h3>
              <p className="mb-4">
                With the footprint set, the outrigger legs had to be sized to carry the resulting axial load without buckling. Under an extreme peak dynamic thrust of Fpeak = 2066 N, the total downward force reacted by the outrigger system is 2503.34 N. Distributing this evenly across the four legs and resolving along the 23.58° arm gives an axial compressive load per leg of Faxial ≈ 1564.6 N.
              </p>
              <p className="mb-4">
                A 30 × 20 mm rectangular steel section, 700 mm long, was selected as the smallest standard stock size available to the team. Checking this section against the Euler critical load for a pinned-pinned column (E = 200 GPa) yields a critical load of ≈ 80,568 N.
              </p>
              <p className="mb-4">
                This provided a margin of safety against buckling of ≈ 51.5. This margin was far larger than the 2–3 typically needed for a static member, which meant the 30 × 20 mm section was not chosen for its axial strength but for practical reasons: it was the smallest stock size that still gave enough bending stiffness to survive the high-frequency, high-amplitude shock of ignition without deflecting visibly.
              </p>
            </section>
            
            {/* Slide 7: Stage 4 */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">V. Stage 4: Checking and Revising the Base Against Tip-Over</h2>
              <p className="mb-4">
                With the outrigger cross-section fixed, the footprint chosen in Stage 3 was checked against the two loading conditions most likely to tip the platform: off-axis thrust at maximum rail tilt, and crosswind gusting while the platform sits unloaded on the pad.
              </p>
              
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">A. Thrust-Induced Overturning at Maximum Tilt</h3>
              <p className="mb-4">
                At the maximum permitted tilt, α = 8° from vertical, a thrust of 1278 N produces a lateral force component Fx = 177.9 N, which, acting through the rail pivot at hpivot ≈ 1.53 m, gives an overturning moment Moverturn,thrust = 272.2 N m. Against this, the 144.31 cm footprint gives a restoring moment of ≈ 1174.2 N m. This provided a margin of safety of 4.31, clearing the design target on the first iteration.
              </p>
              
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">B. Crosswind Overturning — the Governing Case</h3>
              <p className="mb-4">
                The more demanding check turned out to be the platform sitting unloaded on the pad before ignition, exposed to a full 15 m/s (54 km/h) gust. Over the platform’s projected area, Fwind ≈ 75.4 N, acting at an effective height hcp ≈ 2.0 m to give Mwind,tip = 150.8 N m.
              </p>
              <p className="mb-4">
                With no motor thrust to add restoring moment, the platform relies on dead weight alone, resulting in a static restoring moment of 328.0 N m and a margin of safety of ≈ 2.17. This 2.17 margin was the tightest of any check in the design and effectively set the lower bound on the footprint: a smaller 144.31 cm span (which would have simplified transport) was evaluated and rejected during iteration because it pushed this margin below 2.0. The footprint from Stage 3 was kept specifically because it was the smallest span that still cleared this crosswind case with a comfortable margin.
              </p>

              <div className="mx-auto max-w-xl w-full my-6 bg-card p-4 rounded-xl border border-border">
                <ProtectedImage src={fig5} alt="Figure 5" />
                <p className="mt-4 text-xs text-center font-body text-muted-foreground">Fig. 5: Trapezoidal stabilization supports and circular load-bearing feet, as sized in Stages 3–5.</p>
              </div>
            </section>
            
            {/* Slide 8: Stage 5 */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">VI. Stage 5: Sizing the Ground Contact and Rail Stiffness</h2>
              <p className="mb-4">
                With the load path fixed by the previous stages, the last design decisions were the smallest in scale but still required their own checks: how the outrigger feet transfer load into the ground, and how much the rail tip is allowed to deflect under a side load.
              </p>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">A. Selecting the Foot Diameter</h3>
              <p className="mb-4">
                The central 30 × 30 cm base plate contributes a bearing area of 0.090 m². Four circular aluminum feet were added at the end of each outrigger arm, with diameter chosen by checking candidate sizes against soil bearing capacity; a 15 cm diameter was selected, giving a total bearing area of 0.1607 m². Under the peak dynamic load, the conservative case of all load transferring to the four feet alone gives ≈ 35.42 kPa. Against a typical turf bearing capacity of ~ 150 kPa, this gives a Factor of Safety of ≈ 4.23, which confirmed 15 cm feet were large enough without needing to widen them further and add unnecessary mass to the outrigger tips.
              </p>
              
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">B. Verifying Rail Tip Stiffness</h3>
              <p className="mb-4">
                Finally, the aluminum rail’s unsupported cantilever tip, 0.85 m beyond the last housing support, was checked for lateral stiffness under a representative 25 N disturbance load. The deflection was evaluated to ≈ 4.05 mm, corresponding to an angular tip deviation of only 0.41° over the rail’s 2.80 m length. This confirmed that the one-inch aluminum extrusion selected in Stage 1 for its rail-length and mass properties was also stiff enough to hold trajectory alignment, so no separate stiffening member had to be added to the design.
              </p>
            </section>
            
            {/* Slide 9: Conclusion */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">VII. Resulting Design Summary & VIII. Conclusion</h2>
              <p className="mb-4">
                The static crosswind check in Stage 4 was the binding constraint on the final footprint; every other stage converged to a margin above 4.0 without needing a second iteration.
              </p>
              <p className="mb-4">
                This paper has followed the NexOrbital launch platform through the order it was actually designed in: a kinematic requirement first fixed the rail length, the rail length and vehicle envelope then sized the housing and base stand, the base stand’s footprint and outrigger cross-section were iterated together against buckling and tip-over, and the ground contact and rail stiffness were sized last against the loads that the earlier stages had already fixed. 
              </p>
              <p className="mb-4">
                The resulting platform — a 3.4 m tall assembly on a 144.31 cm trapezoidal steel outrigger base with a 2.80 m aluminum guidance rail — was not arrived at as a single guess later checked for safety, but built up stage by stage, with each borderline result (the shorter rail relying on active canards, the footprint held to the crosswind limit, the outrigger cross-section held above the shock-stiffness floor rather than the buckling floor) resolved by a specific, documented decision. The result satisfies every IN-SPACE competition structural and kinematic constraint for high-power atmospheric deployment.
              </p>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}
