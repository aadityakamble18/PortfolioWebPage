import { createFileRoute, Link } from "@tanstack/react-router";
import { Github, FileText, Download, ArrowUpRight, Presentation } from "lucide-react";
import { useEffect } from "react";
import { ProtectedImage } from "../components/ProtectedImage";

import Figure1 from '../assets/Flight Route Navigation/figure1_network_topology.png';
import Figure2 from '../assets/Flight Route Navigation/figure2_AER_KZN.png';
import Figure3 from '../assets/Flight Route Navigation/figure3_POM_KZN.png';
import Figure4 from '../assets/Flight Route Navigation/figure4_GKA_DME.png';
import Figure5 from '../assets/Flight Route Navigation/figure5_averages.png';
import Visualization from '../assets/Flight Route Navigation/visualization.svg';
import PresentationPDF from '../assets/Flight Route Navigation/DSAIdeathon.pdf';
import ReportPDF from '../assets/Flight Route Navigation/Comparative Analysis of Shortest Path Algorithms for Air Transportation Networks.pdf';

export const Route = createFileRoute("/project/flight-navigation")({
  component: FlightNavigationProjectPage,
});

function FlightNavigationProjectPage() {
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
      <main className="relative z-10">
        <div className="px-6 pb-20 pt-10 md:px-12 md:pb-28 md:pt-20 lg:px-16">
          <div className="mx-auto max-w-4xl">
            <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-2 text-sm font-medium text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Aaditya Kamble</Link>
              <span>/</span>
              <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
              <span>/</span>
              <Link to="/project/flight-navigation" className="text-foreground hover:text-primary transition-colors">Flight Navigation</Link>
            </nav>

            {/* Title Section */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30">
              <div className="mb-4 w-full text-left">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  April 2024
                </span>
              </div>
              <h1 className="max-w-4xl font-display text-3xl font-bold leading-[1.2] tracking-tight text-foreground md:text-4xl lg:text-5xl text-center">
                Comparative Algorithmic Analysis of Shortest Path Strategies for Global Air Transportation Network Routing
              </h1>
              <p className="mt-6 text-xl text-muted-foreground text-center max-w-3xl mx-auto font-medium">
                Flight Route Navigation
              </p>

              <div className="mt-12 flex flex-col md:flex-row justify-center gap-8 md:gap-16 text-center">
                <div>
                  <p className="font-semibold">Aaditya Kamble</p>
                  <p className="text-sm text-muted-foreground">Department of Materials Engineering</p>
                  <p className="text-sm text-muted-foreground">Indian Institute of Technology Jodhpur</p>
                </div>
                <div>
                  <p className="font-semibold">Sahil</p>
                  <p className="text-sm text-muted-foreground">Department of Materials Engineering</p>
                  <p className="text-sm text-muted-foreground">Indian Institute of Technology Jodhpur</p>
                </div>
                <div>
                  <p className="font-semibold">Vishvajeeth Jadeja</p>
                  <p className="text-sm text-muted-foreground">Department of Materials Engineering</p>
                  <p className="text-sm text-muted-foreground">Indian Institute of Technology Jodhpur</p>
                </div>
                <div>
                  <p className="font-semibold">Ghanshyam</p>
                  <p className="text-sm text-muted-foreground">Department of Physics</p>
                  <p className="text-sm text-muted-foreground">Indian Institute of Technology Jodhpur</p>
                </div>
              </div>
              {/* Action Links */}
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href="https://github.com/aadityakamble18/Flight-Route-Navigetion"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-[#CC0B24] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#A8091D]"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                  <ArrowUpRight className="h-4 w-4 ml-1 opacity-80" />
                </a>
                <a
                  href={PresentationPDF}
                  download="Presentation.pdf"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium text-foreground transition-all hover:bg-accent"
                >
                  <Presentation className="h-4 w-4" />
                  Download PPT
                  <Download className="h-4 w-4 ml-1 opacity-80" />
                </a>
                <a
                  href={ReportPDF}
                  download="Report.pdf"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium text-foreground transition-all hover:bg-accent"
                >
                  <FileText className="h-4 w-4" />
                  Download Report
                  <Download className="h-4 w-4 ml-1 opacity-80" />
                </a>
              </div>
            </section>

            {/* Abstract */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">Abstract</h2>
              <p>
                Efficient route optimization within large-scale transportation graphs is a cornerstone of operational efficiency in commercial aviation. While classic graph algorithms provide theoretical guarantees for the Shortest Path Problem (SPP), their practical viability depends heavily on graph density, cost function behavior, memory hierarchies, and update frequency. This study delivers a comprehensive theoretical and empirical comparative evaluation of three foundational algorithms: Dijkstra’s, Bellman-Ford, and Floyd-Warshall.
              </p>
              <p className="mt-4">
                We construct a directed, weighted graphical representation of an international aviation network where vertices denote global airport hubs and edges model commercial flight paths. Across rigorous experimental trials assessing point-to-point queries between real-world hubs, empirical findings demonstrate that Dijkstra’s and Bellman-Ford achieve comparable latency for single-source queries (averaging 0.000071 s and 0.000077 s, respectively), while Floyd-Warshall incurs severe computational overhead (averaging 0.000285 s, a 301.41% latency increase).
              </p>
              <p className="mt-4 mb-8">
                We formalize the algebraic foundations, optimal substructure properties, and negative-weight cycle invariants of each approach, contextualizing their technical trade-offs against real-world logistical constraints, dynamic pricing architectures, and flight operations management.
              </p>

              <div className="w-full aspect-video rounded-xl overflow-hidden border border-border/50 shadow-2xl relative">
                <iframe
                  loading="lazy"
                  className="absolute top-0 left-0 w-full h-full border-none"
                  src="https://www.canva.com/design/DAGFIeqvu74/AHUl79FB5VR5YY5hW2LvHA/view?embed"
                  allowFullScreen
                  title="Navigating Airports Presentation"
                >
                </iframe>
              </div>
            </section>

            {/* Introduction */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">1. Introduction</h2>
              <p className="mb-4">
                Modern air transportation networks constitute high-dimensional, geographically distributed topologies wherein route planning directly governs fuel burn, block time, carbon output, and airspace congestion. The structural optimization of flight trajectories can be mapped to the classical Shortest Path Problem (SPP) on a directed graph <i>G = (V, E)</i>, where <i>|V| = n</i> represents the discrete set of airports and <i>|E| = m</i> represents operational air routes.
              </p>
              <p className="mb-4">
                Selecting an optimal graph search algorithm involves structural trade-offs between asymptotic time complexity, auxiliary memory consumption, and functional adaptability to dynamic cost constraints. The three seminal paradigms addressing this problem are:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Dijkstra’s Algorithm:</strong> A greedy traversal strategy designed for Single-Source Shortest Paths (SSSP) that requires non-negative edge weights.</li>
                <li><strong>Bellman-Ford Algorithm:</strong> A dynamic programming approach for SSSP capable of computing shortest paths on arbitrary edge weights and identifying reachable negative-weight cycles.</li>
                <li><strong>Floyd-Warshall Algorithm:</strong> An All-Pairs Shortest Path (APSP) framework employing dynamic programming to construct a complete metric closure across all vertex pairs simultaneously.</li>
              </ul>
              <p className="mb-8">
                While asymptotic bounds provide high-level complexity classifications, practical performance in applied network settings is subject to hardware memory hierarchies, cache efficiency, and topological sparsity. Furthermore, modern commercial airline routing involves multi-attribute objective functions—such as promotional tariff reductions, prevailing atmospheric headwinds, and carbon credit offsets—which occasionally produce non-monotonic or negative incremental costs.
              </p>

              <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="rounded-xl overflow-hidden border border-border/50 shadow-lg bg-card/50 p-2">
                  <ProtectedImage src={Figure1} alt="Network Topology" />
                  <p className="text-center text-sm text-muted-foreground mt-3 mb-1">Figure 1: Network Topology</p>
                </div>
                <div className="rounded-xl overflow-hidden border border-border/50 shadow-lg bg-card/50 p-6 flex flex-col items-center justify-center bg-white/5">
                  <ProtectedImage src={Visualization} alt="Graph Visualization" />
                  <p className="text-center text-sm text-muted-foreground mt-3 mb-1">Graph Visualization</p>
                </div>
              </div>
            </section>

            {/* Theoretical Formulations */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">2. Theoretical & Mathematical Formulations</h2>
              <p className="mb-4">
                Let <i>G = (V, E, w)</i> be a directed, weighted graph with vertex set <i>V</i>, directed edge set <i>E ⊆ V × V</i>, and a real-valued weight function <i>w : E → R</i>.
              </p>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">Dijkstra’s Algorithm (Greedy Optimization)</h3>
              <p className="mb-4">
                Dijkstra’s algorithm solves SSSP under the foundational invariant that edge weights are non-negative. The algorithm maintains a set of vertices whose final shortest-path weights have been determined and uses a priority queue to iteratively select the nearest unvisited node. The computational cost is governed by priority queue primitives, typically yielding <i>O(|V|²)</i> time with arrays or <i>O((|V| + |E|) log |V|)</i> with min-heaps.
              </p>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">The Bellman-Ford Algorithm (Edge-Iterative DP)</h3>
              <p className="mb-4">
                The Bellman-Ford algorithm resolves SSSP on arbitrary edge-weight functions by structuring path lengths as an iterative dynamic program. By iterating edge relaxations <i>|V| − 1</i> times, it guarantees optimal paths provided no negative cycles exist. A final relaxation pass detects any reachable negative-weight cycles. It has a time complexity of <i>O(|V| · |E|)</i>.
              </p>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">The Floyd-Warshall Algorithm (Vertex-Iterative DP)</h3>
              <p className="mb-4">
                The Floyd-Warshall algorithm resolves the All-Pairs Shortest Path (APSP) problem by sequentially admitting vertices into the set of permissible path waypoints via a dynamic programming state-space recurrence. This mandates three nested iterations over <i>n</i>, enforcing a rigid time complexity of <i>O(|V|³)</i> and a spatial footprint of <i>O(|V|²)</i>.
              </p>
            </section>

            {/* Experimental Setup */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">3. Empirical Methodology & Experimental Setup</h2>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">Network Graph Ingestion and Modeling</h3>
              <p className="mb-4">
                The empirical testbed was established by modeling an interconnected international airline transport network. Primary airport vertices were ingested from an inventory of global aviation hubs, extracting standard IATA identifiers. Directional flight connections were parsed from an active routes inventory, translating non-stop flights into directed edges with corresponding nautical mileages serving as positive weights. The finalized graph encompasses a sparse topological distribution typical of commercial aviation.
              </p>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">Implementation Architecture</h3>
              <p className="mb-4">
                To eliminate non-deterministic runtime perturbations, all three algorithms were compiled natively from standardized C sources:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Dijkstra’s & Bellman-Ford:</strong> Implemented on top of a dynamic array-based adjacency list.</li>
                <li><strong>Floyd-Warshall:</strong> Implemented using static contiguous 2D arrays initialized to ∞ for missing connections.</li>
              </ul>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">Benchmarking Protocol</h3>
              <p className="mb-8">
                Execution time was captured via the standard C library runtime timer, evaluating CPU clock cycles immediately before and after route derivation. Three canonical inter-hub flight paths across divergent global regions were evaluated across 5 consecutive randomized iterations to establish statistical stability (e.g., Sochi to Kazan, Port Moresby to Kazan, Goroka to Moscow).
              </p>

              <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-xl overflow-hidden border border-border/50 shadow-lg bg-card/50 p-2">
                  <ProtectedImage src={Figure2} alt="AER to KZN Route" />
                  <p className="text-center text-sm text-muted-foreground mt-3 mb-1">AER to KZN Route</p>
                </div>
                <div className="rounded-xl overflow-hidden border border-border/50 shadow-lg bg-card/50 p-2">
                  <ProtectedImage src={Figure3} alt="POM to KZN Route" />
                  <p className="text-center text-sm text-muted-foreground mt-3 mb-1">POM to KZN Route</p>
                </div>
                <div className="rounded-xl overflow-hidden border border-border/50 shadow-lg bg-card/50 p-2">
                  <ProtectedImage src={Figure4} alt="GKA to DME Route" />
                  <p className="text-center text-sm text-muted-foreground mt-3 mb-1">GKA to DME Route</p>
                </div>
              </div>
            </section>

            {/* Results & Discussion */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">4. Experimental Results & Discussion</h2>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">Aggregate Performance Comparison</h3>
              <p className="mb-6">
                Dijkstra’s algorithm recorded the lowest average computational latency at 0.000071 s. Bellman-Ford followed closely at 0.000077 s, an empirical overhead penalty of only 8.45%. Conversely, the Floyd-Warshall implementation exhibited an average execution time of 0.000285 s, marking a 301.41% increase in computational duration compared to Dijkstra’s.
              </p>

              <div className="my-10 max-w-2xl mx-auto rounded-xl overflow-hidden border border-border/50 shadow-lg bg-card/50 p-2">
                <ProtectedImage src={Figure5} alt="Average Execution Times" />
                <p className="text-center text-sm text-muted-foreground mt-3 mb-1">Average Execution Times Comparison</p>
              </div>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">Technical Efficiency and Structural Bottlenecks</h3>
              <p className="mb-4">
                The experimental results correlate tightly with theoretical complexity classifications. The primary technical bottleneck in Floyd-Warshall is its cubic iteration scheme coupled with a contiguous memory footprint, introducing CPU cache thrashing when evaluating sparse networks.
              </p>
              <p className="mb-4">
                In contrast, SSSP algorithms leverage adjacency list architectures that preserve structural sparsity (<i>|E| ≪ |V|²</i>). Because Bellman-Ford iterates solely across active edges, in sparse graphs where <i>|E| ≈ O(|V|)</i>, its effective execution bounds converge tightly with Dijkstra's array-based implementation.
              </p>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">Domain Suitability in Aviation Operations</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>On-Demand Flight Dispatch:</strong> Dijkstra’s algorithm serves as the preferred engine due to monotonic expansion guarantees and deterministic execution speeds, ideal for high-throughput passenger booking portals.</li>
                <li><strong>Dynamic Pricing & Fuel Arbitrage:</strong> When operational incentives (subsidies, fuel hedging) introduce negative edge weights, Dijkstra becomes mathematically invalid. Bellman-Ford is structurally capable of relaxing negative edges and flagging arbitrage cycles.</li>
                <li><strong>Global Network Planning:</strong> Floyd-Warshall remains an effective offline tool for strategic fleet planning, batch processing of all-pairs paths, and analyzing network resilience against hub closures.</li>
              </ul>
            </section>

            {/* Conclusion */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">5. Limitations, Future Work & Conclusion</h2>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">Future Research Directions</h3>
              <p className="mb-4">
                A key limitation is the evaluation of static edge costs. Real-world aviation systems are non-stationary and subject to weather and sector closures. Future extensions should investigate:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Heuristic Guiding (A* Algorithm):</strong> Incorporating great-circle Euclidean distance heuristics.</li>
                <li><strong>Parallel Computing Models:</strong> Implementing parallelized Floyd-Warshall utilizing SIMD vectorization and GPUs.</li>
                <li><strong>Time-Dependent Graph Topologies:</strong> Modeling edge weights as continuous functions of departure time to capture active schedules.</li>
              </ul>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">Conclusion</h3>
              <p className="mb-4">
                This study confirms that while Dijkstra’s algorithm guarantees optimal convergence on non-negative domains, Bellman-Ford remains resilient against negative cost anomalies. Empirical benchmarking confirmed that Dijkstra’s and Bellman-Ford provide near-instantaneous execution latencies, while the all-pairs Floyd-Warshall algorithm suffers a significant latency penalty due to its cubic complexity.
              </p>
              <p className="mb-4">
                These findings indicate that Dijkstra’s algorithm remains optimal for consumer-facing flight dispatch engines, Bellman-Ford serves as an essential fail-safe for subsidized or dynamic cost formulations, and Floyd-Warshall is best restricted to strategic, offline network analysis.
              </p>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}
