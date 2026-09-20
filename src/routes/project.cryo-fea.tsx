import { createFileRoute, Link } from "@tanstack/react-router";
import { Github, Presentation, FileText, Download, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import { ProtectedImage } from "../components/ProtectedImage";

export const Route = createFileRoute("/project/cryo-fea")({
  component: CryoFeaProjectPage,
});

function CryoFeaProjectPage() {
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

        if (currentIdx === -1) {
          currentIdx = 0;
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
      <FloatingShapes />

      <main className="relative z-10">
        <div className="px-6 pb-20 pt-10 md:px-12 md:pb-28 md:pt-20 lg:px-16">
          <div className="mx-auto max-w-4xl">
            <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-2 text-sm font-medium text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Aaditya Kamble</Link>
              <span>/</span>
              <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
              <span>/</span>
              <Link to="/project/cryo-fea" className="text-foreground hover:text-primary transition-colors">Cryogenic Hydrogen Storage</Link>
            </nav>

            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30">
              <div className="mb-4 w-full text-left">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  December 2023
                </span>
              </div>
              <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.2] tracking-tight text-foreground md:text-5xl lg:text-6xl text-center">
                Comparative Finite Element Analysis of Cryogenic Liquid Hydrogen Storage Vessels Under High-Pressure Conditions
              </h1>

              <div className="mt-12 flex flex-col md:flex-row justify-center gap-8 md:gap-16 text-center">
                <div>
                  <p className="font-semibold">Aaditya Kamble</p>
                  <p className="text-sm text-muted-foreground">Department of Metallurgical & Materials Engineering Engineering</p>
                  <p className="text-sm text-muted-foreground">IIT Jodhpur</p>
                </div>
                <div>
                  <p className="font-semibold">Sahil</p>
                  <p className="text-sm text-muted-foreground">Department of Metallurgical & Materials Engineering Engineering</p>
                  <p className="text-sm text-muted-foreground">IIT Jodhpur</p>
                </div>
                <div>
                  <p className="font-semibold">Vishwjeetsinh Jadeja</p>
                  <p className="text-sm text-muted-foreground">Department of Metallurgical & Materials Engineering Engineering</p>
                  <p className="text-sm text-muted-foreground">IIT Jodhpur</p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href="https://github.com/aadityakamble18/Liquid-Hydrogen-Storage-Analysis"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-[#CC0B24] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#A8091D]"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                  <ArrowUpRight className="h-4 w-4 ml-1 opacity-80" />
                </a>
                <a
                  href="https://www.canva.com/design/DAFy-I6sZhg/gVvkz40SeUjcatW3idHklA/view"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium text-foreground transition-all hover:bg-accent"
                >
                  <Presentation className="h-4 w-4" />
                  View Presentation
                  <ArrowUpRight className="h-4 w-4 ml-1 opacity-80" />
                </a>
                <a
                  href="/src/assets/Liquid hydrogen/h2.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium text-foreground transition-all hover:bg-accent"
                >
                  <FileText className="h-4 w-4" />
                  View Report
                  <Download className="h-4 w-4 ml-1 opacity-80" />
                </a>
              </div>
            </section>

            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <p>
                <strong>Abstract—</strong>Safe, efficient, lightweight storage of liquid hydrogen remains a central bottleneck for aerospace propulsion and hydrogen-based energy systems. Hydrogen is the lightest and most abundant element in the universe, and in its liquid state it offers one of the highest specific-impulse energy sources available to chemical rocket propulsion. Because hydrogen must be cooled to roughly -252.87&deg;C to liquefy, storage vessels experience a combination of severe thermal contraction and high internal pressurization that few structural materials tolerate simultaneously.
              </p>
              <p className="mt-4">
                This work presents a comparative finite element analysis (FEA) of a large-scale cryogenic liquid hydrogen tank aimed at identifying a practical balance between rigidity, yield strength, and mass. Using Ansys 2023 R1, a thick-walled cylindrical pressure vessel (length 8270 mm, diameter 2300 mm, wall thickness 39 mm) was modeled under an internal pressure of 35 MPa and an environment temperature of -250&deg;C. Four candidate materials were evaluated: structural steel, AL7075-T6 aluminum alloy, Ti-6Al-4V titanium alloy, and magnesium.
              </p>
              <p className="mt-4">
                Structural steel produced the smallest total deformation (0.23365 m) of the four candidates, but at an estimated wall mass of roughly 18 tonnes for this geometry it is impractical for flight hardware. AL7075-T6 combined a moderate deformation (0.65446 m) with an estimated wall mass of only about 6.4 tonnes, making it the most balanced candidate in this comparison. Ti-6Al-4V, despite its high nominal tensile strength, showed 11.537 m of deformation, indicating that the assumed 39 mm wall thickness is geometrically inadequate for this alloy at the simulated load. These results, together with a review of cryogenic metallurgy literature, are used to argue that AL7075-T6 is the more defensible baseline material for this geometry, while also identifying where the simulation's linear-elastic assumptions likely overstate real deformation and where the analysis should be extended before any design conclusion is treated as final.
              </p>
              <p className="mt-4 text-sm italic text-center">
                Index Terms—liquid hydrogen, cryogenic storage, finite element analysis, hoop stress, aerospace materials, pressure vessels
              </p>
            </section>

            {/* Presentation Embed */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">Presentation</h2>
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border shadow-md">
                <iframe
                  loading="lazy"
                  style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0 }}
                  src="https://www.canva.com/design/DAFy-I6sZhg/gVvkz40SeUjcatW3idHklA/view?embed"
                  allowFullScreen
                  allow="fullscreen">
                </iframe>
              </div>
            </section>

            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">I. INTRODUCTION</h2>
              <p className="mb-4">
                The push toward deep-space exploration and low-emission terrestrial energy has renewed interest in hydrogen as both a propellant and a fuel. In its liquid state, hydrogen provides an exceptionally high energy-to-mass ratio, and when paired with liquid oxygen it yields the highest specific impulse of any propellant combination in common operational use.
              </p>
              <p className="mb-4">
                Reaching the volumetric energy density needed for such applications requires cryogenic liquefaction. At standard atmospheric pressure hydrogen is a gas; converting it to a liquid means cooling it from roughly 300 K to its boiling point near -252.87&deg;C, a process that is itself energy-intensive. Liquid hydrogen also has an unusually low critical temperature of 33 K, below which no liquid phase can exist regardless of pressure, so storage systems must either remain open to venting or be pressurized closed vessels engineered to hold the fluid well below that threshold. Handling, transport, and storage of LH2 therefore demand both strict safety protocols and structurally robust, well-insulated tankage.
              </p>
              <p className="mb-4">
                The central design difficulty is that a cryogenic tank must resist two compounding effects at once: thermal contraction and, in some alloys, embrittlement from the extreme cold, plus severe internal pressurization from the stored fluid. A viable material has to withstand these combined multi-axial stresses without brittle fracture while adding as little mass as possible, since every extra kilogram of tank structure is a kilogram of payload the vehicle cannot carry.
              </p>
              <p className="mb-4">
                To probe this trade-off directly, this study runs a comparative structural simulation of a representative large-scale LH2 tank in Ansys, subjecting the same geometry to an internal pressure of 35 MPa at -250&deg;C and comparing the structural response of four materials: structural steel, AL7075-T6, Ti-6Al-4V, and magnesium. Where earlier single-material cryotank studies optimize one alloy in isolation, this comparison is intended to make the trade-offs between candidate material families explicit for a single fixed geometry.
              </p>
            </section>

            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">II. THEORETICAL FRAMEWORK AND LITERATURE REVIEW</h2>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">A. Mechanics of Thick-Walled Pressure Vessels</h3>
              <p className="mb-4">
                The structural response of a cryogenic tank wall is governed by classical thick-walled cylinder theory. Under internal pressure, the wall carries three principal stresses: hoop (circumferential) stress, longitudinal stress, and radial stress.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Hoop stress</strong> acts perpendicular to both the radius and the cylinder axis and tends to split the wall along a diametric plane.</li>
                <li><strong>Longitudinal stress</strong> acts along the cylinder axis, resisting the pressure load trying to pull the vessel apart end-to-end.</li>
                <li><strong>Radial stress</strong> is coplanar with, but perpendicular to, the axis of symmetry; it equals the negative of the gauge pressure at the bore and falls to zero at the outer surface.</li>
              </ul>
              <p className="mb-4">
                For a cylinder subjected only to internal pressure, Lam&eacute;'s equations give the hoop stress <i>&sigma;<sub>h</sub></i> and radial pressure <i>P<sub>r</sub></i> at radius <i>r</i> as:
              </p>
              <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm mb-4 text-center">
                &sigma;<sub>h</sub> = &beta;/r&sup2; + &alpha;
                <br /><br />
                P<sub>r</sub> = -&alpha; + &beta;/r&sup2;
              </div>
              <p className="mb-4">
                where &alpha; and &beta; are constants fixed by the boundary conditions. With no external pressure (<i>P<sub>o</sub></i> = 0), substituting the constants gives the closed-form hoop and radial stress distributions across the wall:
              </p>
              <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm mb-4 text-center">
                &sigma;<sub>h</sub> = [ P<sub>i</sub> R<sub>i</sub>&sup2; (1 + R<sub>o</sub>&sup2;/r&sup2;) ] / [ R<sub>o</sub>&sup2; - R<sub>i</sub>&sup2; ]
                <br /><br />
                &sigma;<sub>r</sub> = [ P<sub>i</sub> R<sub>i</sub>&sup2; (1 - R<sub>o</sub>&sup2;/r&sup2;) ] / [ R<sub>o</sub>&sup2; - R<sub>i</sub>&sup2; ]
              </div>
              <p className="mb-4">
                These closed-form expressions were used only as a sanity check against the Ansys solution near the bore; the reported results throughout the paper come from the FEA solver, not from the analytical formulas.
              </p>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">B. Cryogenic Metallurgy and DBTT</h3>
              <p className="mb-4">
                Body-centered cubic (BCC) metals, including plain carbon and low-alloy structural steels, exhibit a ductile-to-brittle transition temperature (DBTT): below this threshold the material loses its capacity for plastic deformation and fails by brittle fracture rather than yielding. Face-centered cubic (FCC) metals&mdash;aluminum and its alloys among them&mdash;generally do not show this transition; their strength typically <em>increases</em> as temperature drops toward cryogenic ranges, which is why aluminum alloys have historically dominated cryogenic tankage. Titanium alloys sit in an intermediate position, where standard-grade material can lose fracture toughness at cryogenic temperatures, and extra-low-interstitial (ELI) grades are generally required for cryogenic and hydrogen service.
              </p>
            </section>

            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">III. METHODOLOGY</h2>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">A. Geometrical Modeling and Boundary Conditions</h3>
              <p className="mb-4">
                The FEA was performed in Ansys 2023 R1. A 3D CAD model of a thick-walled cylindrical pressure vessel was built with an overall length of 8270 mm, a diameter of 2300 mm, and a wall thickness of 39 mm.
              </p>
              <p className="mb-4">
                An internal pressure of 35 MPa was applied uniformly to the inner wall to represent a fully pressurized tank, and the environment temperature was set to -250&deg;C. A single fixed support was applied at the mouth of the vessel to approximate a typical manifold/mounting interface used in launch-vehicle tankage.
              </p>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">B. Material Selection</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Structural steel (baseline):</strong> density 7850 kg/m&sup3;, Young's modulus 2.07&times;10&sup1;&sup1; Pa, Poisson's ratio 0.3.</li>
                <li><strong>AL7075-T6:</strong> aerospace-grade aluminum alloy, density 2.8 g/cc, ultimate tensile strength 572 MPa, yield strength 503 MPa.</li>
                <li><strong>Ti-6Al-4V:</strong> titanium alloy, density 4.43&times;10&sup3; kg/m&sup3;, ultimate tensile strength 950 MPa.</li>
                <li><strong>Magnesium:</strong> density 1.77&times;10&sup6; kg/m&sup3;, Young's modulus 45,000 N/mm&sup2;.</li>
              </ul>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">C. Mesh and Solver Notes</h3>
              <p className="mb-4">
                All four cases used the same geometry, mesh topology, and boundary conditions, with only the material card changed between runs. Ansys' default solver settings and linear-elastic material behavior were used throughout; no explicit plasticity model or large-deformation switch was carried out.
              </p>
            </section>

            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">IV. RESULTS</h2>
              <p className="mb-4">
                The table below summarizes the peak total deformation, strain energy, equivalent (von Mises) stress, and equivalent elastic strain returned by the solver for each material under the 35 MPa internal load.
              </p>

              <div className="overflow-x-auto mb-8 bg-muted/20 rounded-xl border border-border p-4">
                <table className="min-w-full text-left text-sm whitespace-nowrap text-foreground">
                  <thead className="uppercase tracking-wider border-b border-border/50">
                    <tr>
                      <th className="px-4 py-3">Material</th>
                      <th className="px-4 py-3">Max Def. (m)</th>
                      <th className="px-4 py-3">Max Energy (J)</th>
                      <th className="px-4 py-3">Max Stress (Pa)</th>
                      <th className="px-4 py-3">Max Strain</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/30">
                    <tr>
                      <td className="px-4 py-3 font-medium">Struct. Steel</td>
                      <td className="px-4 py-3">0.23365</td>
                      <td className="px-4 py-3">7934.5</td>
                      <td className="px-4 py-3">7.1931e9</td>
                      <td className="px-4 py-3">0.035969</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">AL7075-T6</td>
                      <td className="px-4 py-3">0.65446</td>
                      <td className="px-4 py-3">22333.0</td>
                      <td className="px-4 py-3">7.3332e9</td>
                      <td className="px-4 py-3">0.104770</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Magnesium</td>
                      <td className="px-4 py-3">1.07490</td>
                      <td className="px-4 py-3">36782.0</td>
                      <td className="px-4 py-3">7.4261e9</td>
                      <td className="px-4 py-3">0.176830</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Ti-6Al-4V</td>
                      <td className="px-4 py-3">11.53700</td>
                      <td className="px-4 py-3">5.6862e5</td>
                      <td className="px-4 py-3">4.2923e9</td>
                      <td className="px-4 py-3">0.040141</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">A. Estimated Wall Mass</h3>
              <p className="mb-4">
                Treating the vessel as a simple cylindrical shell with the fixed 39 mm wall thickness gives a wall material volume of approximately 2.29 m&sup3;. Multiplying by each material's density gives a first-order wall mass estimate:
              </p>

              <div className="overflow-x-auto mb-8 bg-muted/20 rounded-xl border border-border p-4 max-w-sm mx-auto">
                <table className="min-w-full text-left text-sm whitespace-nowrap text-foreground">
                  <thead className="uppercase tracking-wider border-b border-border/50">
                    <tr>
                      <th className="px-4 py-3">Material</th>
                      <th className="px-4 py-3">Estimated Wall Mass (kg)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/30">
                    <tr>
                      <td className="px-4 py-3 font-medium">Structural Steel</td>
                      <td className="px-4 py-3">&asymp; 17,980</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Ti-6Al-4V</td>
                      <td className="px-4 py-3">&asymp; 10,150</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">AL7075-T6</td>
                      <td className="px-4 py-3">&asymp; 6,415</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Magnesium</td>
                      <td className="px-4 py-3">&asymp; 4,055</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">B. Results Breakdown</h3>
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <strong>Baseline Rigid Response: Structural Steel</strong><br />
                  Steel gave the most mechanically stable response, with the smallest deformation (0.23365 m) and the lowest strain energy (7934.5 J), consistent with a near-linear stress accumulation.
                </li>
                <li>
                  <strong>Aerospace Equilibrium: AL7075-T6</strong><br />
                  AL7075-T6 reached a peak deformation of 0.65446 m and a strain energy of 22,333 J. The equivalent elastic strain (0.10477) stayed in a range consistent with distributed load-carrying, and it does so at roughly a third of steel's estimated mass.
                </li>
                <li>
                  <strong>Lightweight Instability: Magnesium</strong><br />
                  Magnesium recorded the highest equivalent stress of the four materials, 7.4261e9 Pa, along with 1.0749 m of deformation. The non-linear character is consistent with rapid internal yielding.
                </li>
                <li>
                  <strong>Catastrophic Yielding: Ti-6Al-4V</strong><br />
                  Despite its 950 MPa ultimate tensile strength, Ti-6Al-4V showed by far the largest deformation of the study (11.537 m). Its equivalent stress was counterintuitively the lowest, consistent with the wall losing its ability to carry load once geometry-dominated deformation set in.
                </li>
              </ul>
            </section>

            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">V. DISCUSSION & CONCLUSION</h2>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">A. The Structural Steel DBTT Limitation</h3>
              <p className="mb-4">
                Steel's rigid response looks attractive in isolation, but BCC steels undergo a ductile-to-brittle transition around -40&deg;C. At -250&deg;C, hardware of this composition would be expected to fail by brittle fracture well before reaching the elastic limits implied by the FEA. Moreover, the ~18-tonne estimated wall mass is disqualifying for payload-constrained launch applications.
              </p>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">B. Titanium: Geometric Underdesign</h3>
              <p className="mb-4">
                The most instructive result is that Ti-6Al-4V produced the worst deformation by an order of magnitude. This is more of a geometric problem than a metallurgical one. The combination of low equivalent stress and enormous deformation is the signature of a wall that is too thin to resist ovalization and bending. This indicates that wall thickness needs to vary by material to form a fair comparison.
              </p>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">C. Aluminum as a Practical Baseline</h3>
              <p className="mb-4">
                AL7075-T6's moderate deformation, controlled strain energy, and roughly a third of steel's estimated wall mass make it the most balanced of the four candidates. This is broadly consistent with the historical preference for FCC aluminum alloys in cryogenic tankage (e.g., Space Shuttle external tank, Space Launch System) due to their strength retention at cryogenic temperatures.
              </p>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">D. Limitations of the Present Model</h3>
              <p className="mb-4">
                Several simplifications constrain how far these results should be generalized:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Linear-elastic material behavior (does not predict yielding/rupture accurately).</li>
                <li>No geometric nonlinearity (large-deflection effects).</li>
                <li>Fixed wall thickness across materials penalizes materials requiring a higher thickness-to-diameter ratio.</li>
                <li>Single fixed support concentrates reaction stresses unnaturally.</li>
                <li>No thermal-structural coupling detail (transient fill/chill-down stresses ignored).</li>
              </ul>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">E. Future Scope</h3>
              <p className="mb-4">
                The clearest next step is a parametric thickness sweep for Ti-6Al-4V and magnesium, coupled with a nonlinear (large-deflection, elastic-plastic) re-run. A transient thermal-structural analysis of the fill sequence would capture stresses this static model cannot. Finally, composite and composite-overwrapped pressure vessel (COPV) architectures represent a materially different design path worth comparing directly against monolithic-wall designs.
              </p>
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
