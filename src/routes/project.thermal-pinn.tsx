import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Github, Presentation, FileText, Download, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import { ProtectedImage } from "../components/ProtectedImage";

import fig1 from "../assets/PINN_Project/figure_1.png";
import fig2 from "../assets/PINN_Project/figure_2.png";
import fig3 from "../assets/PINN_Project/figure_3.png";
import fig4 from "../assets/PINN_Project/figure_4.png";
import fig5 from "../assets/PINN_Project/figure_5.png";
import fig6 from "../assets/PINN_Project/figure_6.png";
import fig7 from "../assets/PINN_Project/figure_7.png";

export const Route = createFileRoute("/project/thermal-pinn")({
  component: ThermalPinnProjectPage,
});

function ThermalPinnProjectPage() {
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
          // If the top of the section is near the top of the viewport or above it
          // We consider it the current section if it occupies the top of the screen
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
              <Link to="/project/thermal-pinn" className="text-foreground hover:text-primary transition-colors">Thermal PINNs</Link>
            </nav>
            
            {/* Slide 1: Title */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30">
              <div className="mb-4 w-full text-left">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  April 2025
                </span>
              </div>
              <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.2] tracking-tight text-foreground md:text-5xl lg:text-6xl text-center">
                Estimating Thermal Properties via the Inverse Method using Physics-Informed Neural Networks
              </h1>
              
              <div className="mt-12 flex flex-col md:flex-row justify-center gap-8 md:gap-16 text-center">
                <div>
                  <p className="font-semibold">Aaditya Kamble</p>
                  <p className="text-sm text-muted-foreground">Department of Materials Engineering</p>
                  <p className="text-sm text-muted-foreground">Indian Institute of Technology (IIT) Jodhpur</p>
                </div>
                <div>
                  <p className="font-semibold">Suraj Chothe</p>
                  <p className="text-sm text-muted-foreground">Department of Civil and Infrastructure Engineering</p>
                  <p className="text-sm text-muted-foreground">Indian Institute of Technology (IIT) Jodhpur</p>
                </div>
              </div>

              {/* Action Links */}
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

            {/* Slide 2: Abstract */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <p>
                <strong>Abstract—</strong>Determining the specific heat capacity and thermal conductivity of materials traditionally requires isolated physical experiments and complex numerical modeling. This paper presents an inverse problem approach to estimate these fundamental thermal properties using Physics-Informed Neural Networks (PINNs). By embedding the 1-Dimensional transient heat equation directly into the loss function of a deep feedforward neural network via the DeepXDE framework, we leverage observable spatial-temporal temperature data to back-calculate unknown material constants. The proposed architecture dynamically maps normalized depth and time inputs to temperature outputs, simultaneously minimizing observational data discrepancy and physical residual errors. The model, trained over 25,000 iterations using the Adam optimization algorithm, successfully converges to the target parameter values, achieving a highly accurate L2 relative error of 2.5%. This work demonstrates the robustness and viability of PINNs as a mesh-free, computationally efficient tool for material property discovery and digital twin modeling in heat transfer applications.
              </p>
              <p className="mt-4 text-sm italic text-center">
                Index Terms—Physics-Informed Neural Networks, Deep Learning, Inverse Problem, Heat Conduction Equation, Material Properties, DeepXDE
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
                  src="https://www.canva.com/design/DAGkc_SRKaM/vaZ9vXN68PH2sZsVD3PE1A/view?embed" 
                  allowFullScreen
                  allow="fullscreen"
                ></iframe>
              </div>
            </section>

            {/* Slide 3: Intro */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">I. Introduction</h2>
              <p className="mb-4">
                The characterization of material properties is a foundational pillar of materials engineering. In standard forward thermal problems, variables such as thermal conductivity (<span className="italic">k</span>) and specific heat capacity (<span className="italic">C<sub>p</sub></span>) are predefined constants utilized to simulate temperature distributions across spatial domains and time intervals. However, in real-world diagnostic applications and novel material development, these thermodynamic parameters are often unknown. Instead, engineers are provided with observational data—typically temperature gradients captured via thermal sensors—and must work backward to identify the systemic causes. This paradigm is known as an Inverse Heat Conduction Problem (IHCP) [1].
              </p>
              <p className="mb-4">
                Traditional computational methodologies for solving inverse partial differential equations (PDEs), such as Finite Element Analysis (FEA) and Finite Difference Methods (FDM), rely heavily on spatial discretization and rigid mesh generation. While highly established, these techniques suffer from the "curse of dimensionality," high computational overhead, and extreme sensitivity to noisy boundary data [2].
              </p>
              <p className="mb-4">
                Recently, Physics-Informed Neural Networks (PINNs) have emerged as a disruptive, mesh-free alternative [3]. Unlike pure data-driven machine learning models that act as "black boxes," PINNs incorporate the governing physical laws directly into the neural network's training optimization process. By treating the unknown parameters as learnable weights alongside the network's hidden layers, PINNs can simultaneously approximate the PDE solution and isolate the system's material constants.
              </p>
              <p>
                This study investigates the efficacy of PINNs in solving the inverse 1D transient heat conduction problem using physical experimental data. Utilizing the DeepXDE framework [4], we demonstrate that a deep feedforward neural network can accurately retrieve <span className="italic">k</span> and <span className="italic">C<sub>p</sub></span> from raw spatial-temporal temperature data obtained from a multi-layered testbed.
              </p>
            </section>

            {/* Slide 4: Lit Review 1 */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">II. Literature Review</h2>
              <p className="mb-4">
                The estimation of thermal properties through Inverse Heat Conduction Problems (IHCP) is a classic challenge in thermodynamics, historically addressed using deterministic numerical techniques. Traditional optimization approaches, such as the Levenberg-Marquardt algorithm, the Conjugate Gradient method, and the Kalman filter, have been widely employed to iteratively adjust unknown parameters until the simulated temperature field aligns with experimental sensor data [5]. While mathematically robust, these methods are notoriously ill-posed. They exhibit extreme sensitivity to noisy boundary data—a common artifact of real-world thermal sensors—and require computationally expensive remeshing of the spatial domain when applied to complex or evolving geometries [6].
              </p>
              <p className="mb-4">
                The advent of deep learning introduced pure data-driven surrogate models capable of bypassing traditional Finite Element Analysis (FEA) entirely. Neural networks can map spatial-temporal inputs directly to temperature outputs at a fraction of the inference time required by FEA. However, standard neural networks act as "black boxes"; they often struggle to extrapolate beyond their immediate training distribution and lack inherent adherence to foundational physical laws, rendering them unreliable for critical materials engineering applications where energy conservation is strictly required [7].
              </p>
              <p className="mb-4">
                The introduction of Physics-Informed Neural Networks (PINNs) by Raissi et al. [3] effectively bridged the gap between pure data-driven deep learning and fundamental physics. By embedding the governing partial differential equations (PDEs) directly into the neural network's loss function, PINNs enforce physical constraints during the optimization process. This is achieved using automatic differentiation [11], which calculates exact derivatives at machine precision without the truncation errors inherent in numerical finite differences.
              </p>
            </section>
            
            {/* Slide 5: Lit Review 2 */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <p className="mb-4">
                In the thermal domain, recent studies have increasingly leveraged PINNs. Cai et al. [8] demonstrated the use of PINNs for predicting unknown velocity and temperature fields, showcasing remarkable robustness to noisy boundary data. Furthermore, PINNs have been successfully applied to parameter estimation in complex multiphysics systems, proving their viability in handling ill-posed inverse problems [10].
              </p>
              <p className="mb-4">
                Despite these advancements, a significant portion of existing PINN literature relies on synthetic, mathematically generated datasets or heavily pre-smoothed boundary conditions. This study addresses that gap by applying the PINN methodology, facilitated by the DeepXDE framework [4], directly to raw, experimental sensor data obtained from a physical multi-layered testbed. This provides a highly practical, robust methodology for the in-situ characterization of material properties without the need for extensive data sanitization or computational mesh generation.
              </p>
              <p className="mb-4">
                Experimentally, determining the thermal diffusivity and conductivity of advanced materials, such as ceramics, traditionally requires highly controlled, isolated laboratory procedures like the laser flash method [12]. These methods are often destructive or require precise sample preparation, making in-situ measurements nearly impossible.
              </p>
              <p>
                Computationally, when utilizing heat as a tracer to estimate physical fluxes, traditional inverse models (such as VFLUX or 1DTEMPRO) exhibit significant limitations. These conventional methods often struggle with insensitivity, displaying delays and inaccuracies when faced with high-frequency thermal variations or sharp transitional gradients [13]. Recent implementations of PINNs in dynamic environments have demonstrated remarkable resilience to these high-frequency fluctuations, successfully quantifying exchange fluxes where traditional optimization methods fail. Our methodology extends this capability by extracting intrinsic material properties directly from dynamic observational data without the need for isolated laboratory testing.
              </p>
            </section>

            {/* Slide 6: Theoretical Background 1 */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">III. Theoretical Background</h2>
              
              <h3 className="font-semibold text-foreground mb-3 italic">A. Derivation of the 1D Transient Heat Equation</h3>
              <p className="mb-4">
                The physical system investigated in this study is governed by the transient heat conduction equation, derived from the principle of conservation of energy and Fourier's Law of heat conduction.
              </p>
              <p className="mb-4">
                Consider a control volume within a solid medium. The conservation of thermal energy states that the net rate of heat conduction into the volume equals the rate of change of thermal energy stored within the volume. Fourier's Law for one-dimensional heat conduction in the <span className="italic">x</span>-direction is given by:
              </p>
              <div className="flex justify-center my-6">
                <span className="text-xl italic">q<sub>x</sub> = -k (∂T / ∂x)</span>
                <span className="ml-auto text-sm font-body">(1)</span>
              </div>
              <p className="mb-4">
                where <span className="italic">q<sub>x</sub></span> is the local heat flux (W/m²), <span className="italic">k</span> is the thermal conductivity (W/m·K), and <span className="italic">∂T/∂x</span> is the temperature gradient.
              </p>
              <p className="mb-4">
                Applying the energy conservation principle to a differential control element of thickness <span className="italic">dx</span>, and assuming no internal heat generation, the net heat transfer rate is equated to the rate of energy storage:
              </p>
              <div className="flex justify-center my-6">
                <span className="text-xl italic">- (∂q<sub>x</sub> / ∂x) = ρ C<sub>p</sub> (∂T / ∂t)</span>
                <span className="ml-auto text-sm font-body">(2)</span>
              </div>
              <p className="mb-4">
                where <span className="italic">ρ</span> is the material density (kg/m³) and <span className="italic">C<sub>p</sub></span> is the specific heat capacity (J/kg·K). Substituting Fourier's Law yields the governing 1D transient heat equation:
              </p>
              <div className="flex justify-center my-6">
                <span className="text-xl italic">ρ C<sub>p</sub> (∂T / ∂t) = ∂/∂x (k ∂T/∂x)</span>
                <span className="ml-auto text-sm font-body">(3)</span>
              </div>
              <p>
                In this inverse problem formulation, the temperature field <span className="italic">T(x, t)</span> is partially known from experimental observations, while <span className="italic">k</span> and <span className="italic">C<sub>p</sub></span> are treated as continuous variables optimized by the neural network.
              </p>
            </section>

            {/* Slide 7: Theoretical Background 2 */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h3 className="font-semibold text-foreground mb-3 italic">B. Physics-Informed Neural Networks (PINNs)</h3>
              <p className="mb-4">
                A standard Feedforward Neural Network (FNN) maps inputs to outputs through successive affine transformations and non-linear activations. Let <span className="italic">N(x, t; θ)</span> denote the neural network parameterized by weights and biases <span className="italic">θ</span>. The output approximates the temperature field: <span className="italic">T̂(x, t) = N(x, t; θ)</span>.
              </p>
              <p className="mb-4">
                To construct a PINN, we define a physical residual <span className="italic">f(x, t)</span> utilizing automatic differentiation [11]. Applying this to Eq. 3, the PDE residual is formulated as:
              </p>
              <div className="flex justify-center my-6">
                <span className="text-xl italic">f(x, t) := ρ C<sub>p</sub> (∂T̂ / ∂t) - k (∂²T̂ / ∂x²)</span>
                <span className="ml-auto text-sm font-body">(4)</span>
              </div>
            </section>

            {/* Slide 8: Methodology 1 */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">IV. Methodology</h2>
              
              <h3 className="font-semibold text-foreground mb-3 italic">A. Experimental Setup and Data Acquisition</h3>
              <p className="mb-4">
                To generate the real-world dataset required for the inverse PINN model, an experimental apparatus was constructed. The setup consisted of a thermally insulated rectangular box containing distinct material layers. A controlled heat source was applied consistently to one side of the box (the boundary at <span className="italic">x = 0</span>), simulating a 1D heat flux propagating through the medium.
              </p>
              <p className="mb-8">
                To capture the transient thermal response, precision heat sensors were embedded at varying depth levels <span className="italic">(x<sub>0</sub>, x<sub>1</sub>, ..., x<sub>n</sub>)</span> within the material layers. As the thermal wave penetrated the box, temperature readings were recorded across the time domain. As illustrated in Fig. 1, the exploratory data analysis highlights the transient thermal response of the material. Sensors closer to the heat source exhibit rapid, high-amplitude temperature spikes, whereas deeper sensors capture a significantly delayed, attenuated thermal wave due to the material's internal thermal resistance.
              </p>
              
              <div className="mx-auto max-w-xl w-full my-6 bg-card p-4 rounded-xl border border-border">
                <ProtectedImage src={fig1} alt="Exploratory data analysis of Temperature vs Time" />
                <p className="mt-4 text-xs text-center font-body text-muted-foreground">Fig. 1. Exploratory data analysis showing Temperature versus Time at various sensor depths. The thermal gradients clearly depict the physical heating curve.</p>
              </div>
            </section>

            {/* Slide 9: Methodology 2 */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <p className="mb-8">
                This physical attenuation is further conceptualized in Fig. 2, where the 3D surface plot demonstrates the continuous spatial-temporal thermal gradient. This three-dimensional manifold visually represents the explicit ground-truth mapping that the neural network must reconstruct to satisfy the data loss boundary conditions.
              </p>

              <div className="mx-auto max-w-xl w-full my-6 bg-card p-4 rounded-xl border border-border">
                <ProtectedImage src={fig2} alt="3D surface projection of experimental data" />
                <p className="mt-4 text-xs text-center font-body text-muted-foreground">Fig. 2. A 3D surface projection of the experimental data mapping depth and time to the observed temperature profiles. This continuous, non-linear surface serves as the ground truth <span className="italic">L<sub>data</sub></span> target.</p>
              </div>
            </section>

            {/* Slide 10: Methodology 3 */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h3 className="font-semibold text-foreground mb-3 italic">B. Domain Definition and Data Normalization</h3>
              <p className="mb-4">
                Neural networks are susceptible to vanishing gradients when trained on unscaled datasets. The raw dataset contained temporal values up to 20,000 seconds and temperatures exceeding 900°C. To ensure optimal convergence, the spatial domain <span className="italic">x ∈ [0, 0.125] m</span>, the temporal domain <span className="italic">t ∈ [0, 20000] s</span>, and the corresponding temperatures were normalized using Min-Max scaling to a <span className="italic">[0, 1]</span> operational range. Consequently, the initial estimation for specific heat capacity required proportional scaling:
              </p>
              <div className="flex justify-center my-6">
                <span className="text-xl italic">C<sub>p,scaled</sub> = 5000 × (L² / T<sub>time</sub>)</span>
                <span className="ml-auto text-sm font-body">(5)</span>
              </div>
              <p>
                where <span className="italic">L</span> is the spatial range and <span className="italic">T<sub>time</sub></span> is the maximum temporal duration.
              </p>
            </section>

            {/* Slide 11: Methodology 4 */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h3 className="font-semibold text-foreground mb-3 italic">C. Network Architecture and DeepXDE Setup</h3>
              <p className="mb-4">
                The deep learning model was constructed using the DeepXDE library with a TensorFlow backend. The selected architecture was a deep FNN comprising an input layer of 2 nodes (spatial and temporal coordinates), five hidden layers with configurations of [8, 16, 16, 8, 4] neurons, and a single-node output layer representing the predicted temperature.
              </p>
              <p className="mb-4">
                The hyperbolic tangent (<code className="bg-muted px-1 py-0.5 rounded text-sm text-foreground">tanh</code>) activation function was applied uniformly across all hidden layers to capture the continuous non-linearities of the thermal gradients. Network weights were initialized utilizing the Glorot normal distribution.
              </p>
              <p className="mb-4">
                Following the architectural guidelines for inverse diffusion problems within the DeepXDE framework, the unknown physical parameters (<span className="italic">C<sub>p</sub></span> and <span className="italic">k</span>) are instantiated as global trainable variables (<code className="bg-muted px-1 py-0.5 rounded text-sm text-foreground">dde.Variable</code>). To allow the network to discover these parameters, the algorithm requires extra information injected at specific training points. We utilize a <code className="bg-muted px-1 py-0.5 rounded text-sm text-foreground">PointSetBC</code> to anchor the neural network to the real-world sensor data.
              </p>
              <p className="mb-8">
                As depicted in the architectural flowchart in Fig. 3, the spatial and temporal coordinates feed through the dense hidden layers to output a predicted temperature. This output is then routed through an automatic differentiation block to calculate the Jacobian and Hessian matrices, which directly compute the physics loss. By comparing the spatial-temporal coordinates of the observational anchors with the network's predicted output, the optimizer simultaneously adjusts the internal network weights and the external thermodynamic variables to minimize the composite PDE residual.
              </p>
            </section>

            {/* Slide 12: Methodology 5 - Arch Image */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <div className="mx-auto max-w-xl w-full my-6 bg-card p-4 rounded-xl border border-border">
                <ProtectedImage src={fig3} alt="Architectural overview of PINN" />
                <p className="mt-4 text-xs text-center font-body text-muted-foreground">Fig. 3. Architectural overview of the Physics-Informed Neural Network implemented via DeepXDE. The diagram details the integration of the standard feedforward pipeline with the automatic differentiation module to formulate the composite loss function.</p>
              </div>
            </section>

            {/* Slide 13: Methodology 6 - Computation */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h3 className="font-semibold text-foreground mb-3 italic">D. Computational Framework and Environment</h3>
              <p className="mb-8">
                The computational execution of the PINN model was conducted within the Google Colaboratory (Colab) environment, leveraging cloud-based GPU hardware acceleration to expedite the training regimen. The architecture was implemented using the DeepXDE library configured with a TensorFlow backend. This specific software stack is highly optimized for Physics-Informed Neural Networks; the compilation phase utilizes TensorFlow's static computational graphs to accelerate the automatic differentiation pipeline. By calculating the exact derivatives on the GPU—specifically the Jacobian for the temporal gradient (<span className="italic">∂T/∂t</span>) and the Hessian for the second-order spatial gradient (<span className="italic">∂²T/∂x²</span>)—the computational overhead of evaluating the PDE residual across thousands of Latin Hypercube sampled collocation points is drastically minimized. This hardware-accelerated environment enabled the Adam optimizer to efficiently execute the 25,000 iterations required for simultaneous parameter estimation and loss convergence.
              </p>

              <h3 className="font-semibold text-foreground mb-3 italic">E. Loss Function Formulation</h3>
              <p className="mb-4">
                The total loss (<span className="italic">L<sub>total</sub></span>) optimized during training is the unweighted sum of the data discrepancy and the physics residual:
              </p>
              <div className="flex justify-center my-6">
                <span className="text-xl italic">L<sub>total</sub> = L<sub>data</sub> + L<sub>physics</sub></span>
                <span className="ml-auto text-sm font-body">(6)</span>
              </div>
              <p className="mb-4">
                The data loss enforces the network's adherence to the observable sensor data across <span className="italic">N<sub>u</sub></span> points:
              </p>
              <div className="flex justify-center my-6">
                <span className="text-xl italic">L<sub>data</sub> = (1 / N<sub>u</sub>) ∑ | T̂(x<sub>i</sub>, t<sub>i</sub>) - T<sub>true</sub>(x<sub>i</sub>, t<sub>i</sub>) |²</span>
                <span className="ml-auto text-sm font-body">(7)</span>
              </div>
              <p className="mb-4">
                The physics loss enforces the thermodynamic laws at <span className="italic">N<sub>f</sub></span> collocation points sampled via Latin Hypercube Sampling:
              </p>
              <div className="flex justify-center my-6">
                <span className="text-xl italic">L<sub>physics</sub> = (1 / N<sub>f</sub>) ∑ | f(x<sub>j</sub>, t<sub>j</sub>) |²</span>
                <span className="ml-auto text-sm font-body">(8)</span>
              </div>
            </section>

            {/* Slide 14: Experimental Training */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">V. Experimental Training and Optimization</h2>
              <p className="mb-4">
                The inverse parameters, <span className="italic">C<sub>p</sub></span> and <span className="italic">k</span>, were instantiated as external trainable variables (<code className="bg-muted px-1 py-0.5 rounded text-sm text-foreground">dde.Variable</code>) within the computational graph, initialized at 0.0125 and 0.8 respectively.
              </p>
              <p>
                The model was compiled using the Adaptive Moment Estimation (Adam) optimizer with an initial learning rate of 0.01. The training regimen was executed for a total of 25,000 iterations. A custom callback mechanism (<code className="bg-muted px-1 py-0.5 rounded text-sm text-foreground">VariableValue</code>) logged the dynamic adjustments of <span className="italic">C<sub>p</sub></span> and <span className="italic">k</span> at intervals of 1,000 iterations to track convergence.
              </p>
            </section>

            {/* Slide 15: Results 1 */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">VI. Results and Discussion</h2>
              
              <h3 className="font-semibold text-foreground mb-3 italic">A. Training Dynamics and Loss Convergence</h3>
              <p className="mb-4">
                The PINN model was trained over a pre-defined regimen of 25,000 iterations utilizing the Adam optimization algorithm. During the initial training phase (iterations 0 to 5,000), the total loss (<span className="italic">L<sub>total</sub></span>) exhibited a rapid, steep descent. This phase was characterized by the neural network establishing the foundational, macro-level mapping between the normalized spatial-temporal inputs and the temperature outputs to satisfy the data loss (<span className="italic">L<sub>data</sub></span>).
              </p>
              <p className="mb-8">
                Fig. 4 explicitly illustrates this dynamic behavior. The steep initial drop of the total loss curve corresponds to the network rapidly memorizing the empirical sensor points. The subsequent, more gradual decline extending towards iteration 25,000 represents the optimizer encountering stiffer gradients; here, it fine-tunes the internal weights to satisfy the stringent second-order derivatives of the governing heat equation (<span className="italic">L<sub>physics</sub></span>). By iteration 20,000, both the data discrepancy and the PDE residual errors plateaued, indicating that the model had successfully converged on a physically consistent approximation of the thermal system.
              </p>

              <div className="mx-auto max-w-xl w-full my-6 bg-card p-4 rounded-xl border border-border">
                <ProtectedImage src={fig4} alt="Training history depicting total loss convergence" />
                <p className="mt-4 text-xs text-center font-body text-muted-foreground">Fig. 4. Training history depicting the convergence of the total loss. The steep initial descent indicates rapid fitting to the data boundary conditions, while the trailing stabilization highlights the minimization of the physics PDE residual.</p>
              </div>
            </section>

            {/* Slide 16: Results 2 */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h3 className="font-semibold text-foreground mb-3 italic">B. Parameter Estimation and Stability</h3>
              <p className="mb-4">
                The primary objective of the inverse problem was the successful recovery of the specific heat capacity (<span className="italic">C<sub>p</sub></span>) and thermal conductivity (<span className="italic">k</span>). These parameters, instantiated as external trainable variables, were tracked using a <code className="bg-muted px-1 py-0.5 rounded text-sm text-foreground">VariableValue</code> callback.
              </p>
              <p className="mb-4">
                Fig. 5 provides a visual history of this optimization process. Early iterations demonstrated sharp, significant volatility in the parameter estimations. These initial oscillations reflect the Adam optimizer's broad search through the parameter space as the network attempts to balance the competing gradients of the loss function. However, as the network's predictive accuracy improved, these oscillations dampened, leading to a stable asymptotic convergence that mathematically validates the discovered material properties.
              </p>
              <p className="mb-8">
                At iteration 27,183, the estimated scaled specific heat capacity converged to <span className="italic">C<sub>p,scaled</sub> ≈ 0.0206</span>. Applying the inverse of the domain scaling formula yielded a final absolute <span className="italic">C<sub>p</sub></span> value of 26,368.00 J/kg·K. Concurrently, the thermal conductivity <span className="italic">k</span> demonstrated high optimization stability, smoothly converging to a final value of 0.80 W/m·K.
              </p>

              <div className="mx-auto max-w-xl w-full my-6 bg-card p-4 rounded-xl border border-border">
                <ProtectedImage src={fig5} alt="Convergence history of estimated thermal parameters" />
                <p className="mt-4 text-xs text-center font-body text-muted-foreground">Fig. 5. Convergence history of the estimated thermal parameters. The initial sharp oscillations reflect the optimizer's state space search, which eventually dampens into a stable convergence as physical constraints are met.</p>
              </div>
            </section>

            {/* Slide 17: Results 3 */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h3 className="font-semibold text-foreground mb-3 italic">C. Temperature Field Reconstruction and Error Analysis</h3>
              <p className="mb-4">
                The fidelity of the PINN's predictive capabilities was quantitatively evaluated by calculating the <span className="italic">L²</span> relative error metric between the final approximated temperature field and the ground truth experimental sensor data. The model achieved an impressive <span className="italic">L²</span> relative error of 0.0250, or exactly 2.5%.
              </p>
              <p className="mb-8">
                Fig. 6 directly compares the model's final continuous approximation against the experimental data. The tight alignment visually confirms the low 2.5% error margin. The predicted temperature distribution flawlessly mirrors the actual thermal gradients across both extreme depth variations and late temporal stages. By producing a smooth surface devoid of jagged numerical artifacts, the PINN successfully reconstructed the non-linear thermal wave propagation without accumulating the discretization errors that traditionally plague late-stage temporal simulations in standard FEA methodologies.
              </p>

              <div className="mx-auto max-w-xl w-full my-6 bg-card p-4 rounded-xl border border-border">
                <ProtectedImage src={fig6} alt="Comparison of final predicted temperature field against actual data" />
                <p className="mt-4 text-xs text-center font-body text-muted-foreground">Fig. 6. Comparison of the final PINN-predicted temperature field against the actual experimental sensor data. The seamless overlap visually validates the highly accurate spatial-temporal reconstruction.</p>
              </div>
            </section>

            {/* Slide 18: Results 4 */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h3 className="font-semibold text-foreground mb-3 italic">D. Individual Sensor Analysis</h3>
              <p className="mb-4">
                To rigorously validate the model's localized accuracy across the full spatial domain, the predicted thermal responses were plotted directly against the raw sensor readings at specific individual depths. Fig. 7 breaks down this performance across six distinct spatial nodes.
              </p>
              <p className="mb-8">
                At shallower depths closer to the heat source (e.g., tpch103 and tpch108), the model accurately tracks the sharp, rapid initial temperature rise. Conversely, at deeper sensor locations (e.g., tpch122 and tpch125), the network flawlessly replicates the significantly delayed and flattened thermal response. This comprehensive alignment proves that the single set of learned, global physical parameters (<span className="italic">C<sub>p</sub></span> and <span className="italic">k</span>) holds true across the entire physical volume of the testbed, confirming the thermodynamic integrity of the inverse solution.
              </p>

              <div className="mx-auto max-w-xl w-full my-6 bg-card p-4 rounded-xl border border-border">
                <ProtectedImage src={fig7} alt="Detailed comparison at individual depths" />
                <p className="mt-4 text-xs text-center font-body text-muted-foreground">Fig. 7. Detailed comparison of the PINN-predicted thermal response versus raw sensor readings at six specific individual depths. The model accurately captures the unique temporal lag and peak attenuation at both shallow (top row) and deep (bottom row) sensor nodes.</p>
              </div>
            </section>

            {/* Slide 19: Results 5 */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h3 className="font-semibold text-foreground mb-3 italic">E. Ablation Studies: The Role of Activation Functions</h3>
              <p className="mb-4">
                To empirically validate the architectural choices of the network, an ablation study was conducted focusing on the activation functions. The hyperbolic tangent (<code className="bg-muted px-1 py-0.5 rounded text-sm text-foreground">tanh</code>) function was originally selected due to its infinitely differentiable nature—a strict requirement for computing the second-order PDE residuals via automatic differentiation.
              </p>
              <p>
                When the network architecture was modified to utilize the Rectified Linear Unit (<code className="bg-muted px-1 py-0.5 rounded text-sm text-foreground">ReLU</code>) activation function, the model failed to converge on the correct physical parameters. Because the second derivative of a <code className="bg-muted px-1 py-0.5 rounded text-sm text-foreground">ReLU</code> function is zero almost everywhere across its domain, the physical loss component (<span className="italic">L<sub>physics</sub></span>) effectively vanished. Consequently, the network could not properly backpropagate the spatial gradients of the heat equation, resulting in a model that acted purely as a generic curve-fitter rather than a physics-informed solver. This ablation confirms the absolute necessity of smooth, continuous activation functions in PINN architectures dealing with second-order or higher PDEs.
              </p>
            </section>

            {/* Slide 20: Conclusion */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">VII. Conclusion</h2>
              <p className="mb-4">
                This research successfully demonstrates and validates the application of Physics-Informed Neural Networks (PINNs) for solving inverse thermodynamic problems, specifically the estimation of unknown material properties from observable thermal data. By directly integrating the 1D transient heat conduction equation into the loss function of a deep feedforward neural network via the DeepXDE framework, we established a rigorous, mesh-free methodology that effectively bridges experimental observation with fundamental thermodynamic laws.
              </p>
              <p className="mb-4">
                The proposed architecture successfully decoupled and predicted the specific heat capacity (<span className="italic">C<sub>p</sub></span>) and thermal conductivity (<span className="italic">k</span>) of the testbed material using raw sensor data. The model achieved parameter convergence with remarkable accuracy, yielding an <span className="italic">L²</span> relative error of just 2.5% across the entire spatial-temporal domain. Furthermore, ablation studies underscored the critical importance of activation function selection, confirming that infinitely differentiable functions like <code className="bg-muted px-1 py-0.5 rounded text-sm text-foreground">tanh</code> are mandatory for the successful backpropagation of second-order physical residuals.
              </p>
              <p>
                The implications of this study are significant for the field of materials engineering. By eliminating the need for rigid spatial discretization and computationally heavy mesh generation, PINNs offer a highly scalable and cost-effective alternative to traditional Finite Element Analysis for inverse characterizations. Future work will focus on expanding this methodology beyond 1-Dimensional assumptions to accommodate 2D and 3D geometries within anisotropic and heterogeneous materials. Additionally, further research will systematically investigate the network's resilience to artificially injected sensor noise, simulating severe sensor degradation to establish the ultimate boundary limits of PINN robustness in harsh industrial environments.
              </p>
            </section>

            {/* Slide 21: Acknowledgment */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">Acknowledgment</h2>
              <p className="text-center">
                The authors express their gratitude to Dr. Sudipto Mukhopadhyay for his technical guidance and advice. The authors also acknowledge the open-source community behind DeepXDE and TensorFlow.
              </p>
            </section>

            {/* Slide 22: References */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">References</h2>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>O. M. Alifanov, <span className="italic">Inverse Heat Transfer Problems</span>. Springer Science & Business Media, 2011.</li>
                <li>J. V. Beck, B. Blackwell, and C. R. St. Clair Jr, <span className="italic">Inverse Heat Conduction: Ill-Posed Problems</span>. Wiley-Interscience, 1985.</li>
                <li>M. Raissi, P. Perdikaris, and G. E. Karniadakis, "Physics-informed neural networks: A deep learning framework for solving forward and inverse problems involving nonlinear partial differential equations," <span className="italic">Journal of Computational Physics</span>, vol. 378, pp. 686–707, 2019.</li>
                <li>L. Lu, X. Meng, Z. Mao, and G. E. Karniadakis, "DeepXDE: A deep learning library for solving differential equations," <span className="italic">SIAM Review</span>, vol. 63, no. 1, pp. 208–228, 2021.</li>
                <li>M. N. Ozisik and H. R. Orlande, <span className="italic">Inverse Heat Transfer: Fundamentals and Applications</span>. Taylor & Francis, 2000.</li>
                <li>Y. Jarny, M. N. Ozisik, and J. P. Bardon, "A general optimization method using adjoint equation for solving multidimensional inverse heat conduction," <span className="italic">International Journal of Heat and Mass Transfer</span>, vol. 34, no. 11, pp. 2911–2919, 1991.</li>
                <li>G. E. Karniadakis, I. G. Kevrekidis, L. Lu, P. Perdikaris, S. Wang, and L. Yang, "Physics-informed machine learning," <span className="italic">Nature Reviews Physics</span>, vol. 3, no. 6, pp. 422–440, 2021.</li>
                <li>S. Cai, Z. Wang, S. Wang, P. Perdikaris, and G. E. Karniadakis, "Physics informed neural networks for heat transfer problems," <span className="italic">Journal of Heat Transfer</span>, vol. 143, no. 6, 2021.</li>
                <li>F. Sahli Costabal, Y. Yang, P. Perdikaris, D. E. Hurtado, and E. Kuhl, "Physics-informed neural networks for cardiac activation mapping," <span className="italic">Frontiers in Physics</span>, vol. 8, p. 42, 2020.</li>
                <li>Q. He, D. Barajas-Solano, G. Tartakovsky, and A. M. Tartakovsky, "Physics-informed neural networks for multiphysics data assimilation with application to subsurface transport," <span className="italic">Advances in Water Resources</span>, vol. 141, 103610, 2020.</li>
                <li>A. G. Baydin, B. A. Pearlmutter, A. A. Radul, and J. M. Siskind, "Automatic differentiation in machine learning: a survey," <span className="italic">Journal of Machine Learning Research</span>, vol. 18, pp. 1–43, 2018.</li>
                <li><span className="italic">Method Used to Measure the Thermal Diffusivity of Ceramic Materials</span>, Journal of the American Ceramic Society, DOI: 10.1111/j.1551-2916.2004.00973.x.</li>
                <li>S. Frei et al., "PINN HEAT WRR: Physics-Informed Neural Network for the inverse estimation of submarine groundwater discharge by using heat as a tracer," GitHub Repository, 2024.</li>
                <li>L. Lu, "Inverse problem for the diffusion equation," DeepXDE Documentation, Release 1.15.0.</li>
              </ol>
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
