import { createFileRoute, Link } from "@tanstack/react-router";
import { Github, Presentation, FileText, Download, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import { ProtectedImage } from "../components/ProtectedImage";

import fig1 from "../assets/Diesel engine simulation/engine_geometry.png";
import fig2 from "../assets/Diesel engine simulation/mesh.png";
import fig3 from "../assets/Diesel engine simulation/pressure.png";
import fig4 from "../assets/Diesel engine simulation/temperature.png";
import fig5 from "../assets/Diesel engine simulation/co.png";
import fig6 from "../assets/Diesel engine simulation/uhc.png";
import fig7 from "../assets/Diesel engine simulation/no2.png";
import fig8 from "../assets/Diesel engine simulation/chemistry.png";
import fig9 from "../assets/Diesel engine simulation/species.png";

export const Route = createFileRoute("/project/diesel-simulation")({
  component: DieselSimulationProjectPage,
});

function DieselSimulationProjectPage() {
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
              <Link to="/project/diesel-simulation" className="text-foreground hover:text-primary transition-colors">Diesel Engine Simulation</Link>
            </nav>

            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30">
              <div className="mb-4 w-full text-left">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  April 2024
                </span>
              </div>
              <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.2] tracking-tight text-foreground md:text-5xl lg:text-6xl text-center">
                Computational Analysis of Diesel-Biodiesel Blends in a Compression Ignition Engine Using ANSYS Forte
              </h1>

              <div className="mt-12 flex flex-col md:flex-row justify-center gap-8 md:gap-16 text-center">
                <div>
                  <p className="font-semibold">Aaditya Kamble</p>
                  <p className="text-sm text-muted-foreground">Department of Metallurgical and Materials Engineering</p>
                  <p className="text-sm text-muted-foreground">Indian Institute of Technology Jodhpur</p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href="/src/assets/Diesel engine simulation/Computational Analysis of Diesel_Biodiesel Blends in a Compression Ignition Engine Using ANSYS Forte.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-[#CC0B24] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#A8091D]"
                >
                  <FileText className="h-4 w-4" />
                  View Report
                  <ArrowUpRight className="h-4 w-4 ml-1 opacity-80" />
                </a>

                <a
                  href="https://www.canva.com/design/DAHVeBnFlis/Y4P77Kq68lTRTm9_SM7T6g/view"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium text-foreground transition-all hover:bg-accent"
                >
                  <Presentation className="h-4 w-4" />
                  View Presentation
                  <ArrowUpRight className="h-4 w-4 ml-1 opacity-80" />
                </a>
              </div>
            </section>

            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <p>
                <strong>Abstract—</strong>The depletion of fossil fuels and stringent emission regulations have accelerated the search for alternative and renewable fuels for internal combustion engines. Biodiesel, derived from vegetable oils or animal fats, is a promising alternative due to its renewability and lower emission profile. This study investigates the performance, combustion, and emission characteristics of a compression ignition engine operating on diesel and diesel-biodiesel blends using ANSYS Forte. A 3D computational fluid dynamics model of a single-cylinder, 4-stroke diesel engine was developed. Simulations were performed for pure diesel (D100) and various blends of diesel with biodiesel to analyze parameters such as cylinder pressure, temperature, heat release rate, and emissions of nitrogen oxides (NOx), carbon monoxide (CO), and unburned hydrocarbons (UHC).
              </p>
            </section>

            {/* Presentation Embed */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">Presentation</h2>
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border shadow-md">
                <iframe
                  loading="lazy"
                  style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0 }}
                  src="https://www.canva.com/design/DAHVeBnFlis/Y4P77Kq68lTRTm9_SM7T6g/view?embed"
                  allowFullScreen
                  allow="fullscreen">
                </iframe>
              </div>
            </section>

            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">I. INTRODUCTION</h2>
              <p className="mb-4">
                Internal combustion (IC) engines, particularly compression ignition (CI) engines, are the backbone of the transportation and industrial sectors worldwide. The CI engine's high thermal efficiency, durability, and reliability make it the preferred choice for heavy-duty vehicles, marine propulsion, and power generation. However, the reliance on petroleum-derived diesel fuel raises significant environmental and economic concerns. The combustion of diesel fuel is a major source of air pollutants, including nitrogen oxides (NOx), particulate matter (PM), carbon monoxide (CO), and unburned hydrocarbons (UHC). These emissions contribute to smog formation, acid rain, and adverse health effects.
              </p>
              <p className="mb-4">
                Biodiesel is typically produced through the transesterification of triglycerides with an alcohol, yielding fatty acid methyl esters (FAME). The resulting fuel has properties similar to conventional diesel, allowing it to be used in existing CI engines with little to no modification, either as a pure fuel (B100) or blended with diesel (e.g., B20, a blend of 20% biodiesel and 80% diesel). Biodiesel offers several advantages: it is biodegradable, non-toxic, and contains virtually no sulfur or aromatics, which significantly reduces the emission of sulfur oxides (SOx) and PM. Furthermore, the inherent oxygen content in biodiesel promotes more complete combustion, generally leading to lower CO and UHC emissions compared to conventional diesel. However, a frequently reported drawback of biodiesel combustion is an increase in NOx emissions, attributed to the higher oxygen content and advanced injection timing often observed with its use.
              </p>
              <p className="mb-4">
                ANSYS Forte is a dedicated computational fluid dynamics (CFD) software for simulating internal combustion engines. It incorporates advanced sub-models for spray dynamics, vaporization, mixing, and detailed chemical kinetics, enabling accurate predictions of combustion phasing, heat release, and pollutant formation. Forte's ability to handle complex chemistry is particularly beneficial for analyzing alternative fuels, as it allows for the inclusion of detailed chemical reaction mechanisms that capture the unique combustion pathways of biodiesel components.
              </p>
            </section>

            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">II. METHODOLOGY</h2>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">A. Engine Geometry and Operating Conditions</h3>
              <p className="mb-4">
                The computational domain was based on a single-cylinder, 4-stroke direct-injection diesel engine. The basic engine specifications used in the simulation are outlined in Table I.
              </p>

              <div className="overflow-x-auto mb-6 bg-muted/20 rounded-xl border border-border p-4 max-w-md mx-auto">
                <table className="min-w-full text-left text-sm whitespace-nowrap text-foreground">
                  <thead className="uppercase tracking-wider border-b border-border/50">
                    <tr>
                      <th className="px-4 py-3">Parameter</th>
                      <th className="px-4 py-3">Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/30">
                    <tr>
                      <td className="px-4 py-3 font-medium">Engine Type</td>
                      <td className="px-4 py-3">4-Stroke, CI</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Bore (cm)</td>
                      <td className="px-4 py-3">13.716</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Stroke (cm)</td>
                      <td className="px-4 py-3">16.51</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Connecting Rod Length (cm)</td>
                      <td className="px-4 py-3">26.16</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Compression Ratio</td>
                      <td className="px-4 py-3">15:1</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Engine Speed (RPM)</td>
                      <td className="px-4 py-3">1500</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="my-8">
                <ProtectedImage src={fig1} alt="Engine Geometry" className="rounded-xl border border-border shadow-md" />
                <p className="text-center text-sm mt-3 italic">Fig. 1. Single-cylinder 4-stroke diesel engine geometry model.</p>
              </div>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">B. Computational Mesh</h3>
              <p className="mb-4">
                A 3D sector mesh was generated to represent a portion of the combustion chamber, taking advantage of the symmetrical nozzle hole arrangement to reduce computational time. The mesh was refined in critical regions, such as near the injector and bowl surfaces, to accurately capture spray penetration, mixing, and heat transfer.
              </p>

              <div className="my-8">
                <ProtectedImage src={fig2} alt="Computational Mesh" className="rounded-xl border border-border shadow-md" />
                <p className="text-center text-sm mt-3 italic">Fig. 2. 3D sector mesh of the combustion chamber.</p>
              </div>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">C. Physical and Chemical Models</h3>
              <p className="mb-4">
                <strong>Turbulence Modeling:</strong> The k-epsilon RNG turbulence model was employed to resolve the in-cylinder turbulent flow field, which is critical for predicting fuel-air mixing and combustion rates.
              </p>
              <p className="mb-4">
                <strong>Spray Modeling:</strong> Fuel injection and spray dynamics were modeled using a discrete droplet method (DDM). Sub-models for droplet breakup (e.g., Kelvin-Helmholtz and Rayleigh-Taylor models), collision, coalescence, and vaporization were included to accurately simulate the physical processes of the spray before ignition.
              </p>
              <p className="mb-4">
                <strong>Combustion Modeling:</strong> Combustion was modeled using detailed chemical kinetics coupled with the flow solver. The chemistry solver in ANSYS Forte calculates the reaction rates based on the local temperature, pressure, and species concentrations.
              </p>

              <div className="my-8">
                <ProtectedImage src={fig8} alt="Chemical Kinetics Setup" className="rounded-xl border border-border shadow-md" />
                <p className="text-center text-sm mt-3 italic">Fig. 3. Setting up detailed chemical kinetics in ANSYS Forte.</p>
              </div>

              <div className="my-8">
                <ProtectedImage src={fig9} alt="Species Definition" className="rounded-xl border border-border shadow-md" />
                <p className="text-center text-sm mt-3 italic">Fig. 4. Definition of fuel species and reaction mechanisms.</p>
              </div>
            </section>

            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">III. RESULTS AND DISCUSSION</h2>
              <p className="mb-4">
                The simulations were carried out to compare the performance and emission characteristics of pure diesel (D100) and various diesel-biodiesel blends. The results are discussed in terms of in-cylinder pressure, temperature, and emissions.
              </p>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">A. Cylinder Pressure</h3>
              <p className="mb-4">
                The in-cylinder pressure history is a primary indicator of combustion performance. Figure 5 shows a comparison of the cylinder pressure for different fuel blends. The peak cylinder pressure for the biodiesel blends is generally comparable to or slightly higher than that of pure diesel. This is often attributed to the advanced ignition and higher bulk modulus of biodiesel, which can lead to an earlier start of combustion and a higher pressure rise rate.
              </p>

              <div className="my-8">
                <ProtectedImage src={fig3} alt="Cylinder Pressure" className="rounded-xl border border-border shadow-md" />
                <p className="text-center text-sm mt-3 italic">Fig. 5. Comparison of in-cylinder pressure for different diesel-biodiesel blends.</p>
              </div>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">B. Cylinder Temperature</h3>
              <p className="mb-4">
                The in-cylinder temperature distribution is crucial for understanding the formation of emissions, particularly NOx. Figure 6 illustrates the mean cylinder temperature for the tested fuels. Biodiesel blends often exhibit slightly higher peak temperatures due to the oxygen present in the fuel structure, which promotes more complete combustion and higher localized temperatures in the reaction zones.
              </p>

              <div className="my-8">
                <ProtectedImage src={fig4} alt="Cylinder Temperature" className="rounded-xl border border-border shadow-md" />
                <p className="text-center text-sm mt-3 italic">Fig. 6. Mean in-cylinder temperature comparison for different blends.</p>
              </div>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">C. Emissions: Carbon Monoxide (CO)</h3>
              <p className="mb-4">
                CO emissions are a product of incomplete combustion, typically occurring in fuel-rich regions or where temperatures are too low for complete oxidation. As seen in Figure 7, the addition of biodiesel generally leads to a reduction in CO emissions. The inherent oxygen content in the biodiesel molecules enhances the oxidation process, reducing the likelihood of local fuel-rich zones that promote CO formation.
              </p>

              <div className="my-8">
                <ProtectedImage src={fig5} alt="CO Emissions" className="rounded-xl border border-border shadow-md" />
                <p className="text-center text-sm mt-3 italic">Fig. 7. Effect of biodiesel blending on Carbon Monoxide (CO) emissions.</p>
              </div>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">D. Emissions: Unburned Hydrocarbons (UHC)</h3>
              <p className="mb-4">
                Similar to CO, UHC emissions result from incomplete combustion. Figure 8 demonstrates that UHC emissions also decrease with the use of biodiesel blends. The improved oxygen availability and higher combustion temperatures facilitate the complete breakdown and oxidation of the hydrocarbon chains.
              </p>

              <div className="my-8">
                <ProtectedImage src={fig6} alt="UHC Emissions" className="rounded-xl border border-border shadow-md" />
                <p className="text-center text-sm mt-3 italic">Fig. 8. Comparison of Unburned Hydrocarbon (UHC) emissions across blends.</p>
              </div>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">E. Emissions: Nitrogen Oxides (NOx)</h3>
              <p className="mb-4">
                NOx formation is strongly dependent on the local temperature and oxygen concentration. The higher combustion temperatures and increased oxygen availability associated with biodiesel combustion typically result in higher NOx emissions compared to pure diesel. This trade-off between reduced PM/CO/UHC and increased NOx is a well-known characteristic of biodiesel and is reflected in the simulation results shown in Figure 9.
              </p>

              <div className="my-8">
                <ProtectedImage src={fig7} alt="NOx Emissions" className="rounded-xl border border-border shadow-md" />
                <p className="text-center text-sm mt-3 italic">Fig. 9. Nitrogen Oxides (NOx) emission trends for different diesel-biodiesel blends.</p>
              </div>
            </section>

            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">IV. CONCLUSION</h2>
              <p className="mb-4">
                This computational study successfully simulated the combustion and emission characteristics of a CI engine fueled with diesel-biodiesel blends using ANSYS Forte. The key findings are:
              </p>
              <ul className="list-disc pl-6 space-y-4 mb-4">
                <li>Biodiesel blends produced comparable or slightly higher peak cylinder pressures and temperatures compared to pure diesel, indicating satisfactory combustion performance.</li>
                <li>The oxygen content in biodiesel significantly improved the combustion process, leading to substantial reductions in Carbon Monoxide (CO) and Unburned Hydrocarbon (UHC) emissions.</li>
                <li>The higher localized combustion temperatures and increased oxygen availability associated with biodiesel resulted in an increase in Nitrogen Oxides (NOx) emissions, highlighting the classic NOx-particulate trade-off observed with oxygenated fuels.</li>
              </ul>
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
