import { createFileRoute, Link } from "@tanstack/react-router";
import { Github, FileText, Download, ArrowUpRight, Presentation } from "lucide-react";
import { useEffect } from "react";

import img1 from "../assets/Marketingf campaign optimization/Screenshot 2026-09-17 173610.png";
import img2 from "../assets/Marketingf campaign optimization/Screenshot 2026-09-17 173626.png";
import img3 from "../assets/Marketingf campaign optimization/Screenshot 2026-09-17 173645.png";

export const Route = createFileRoute("/project/marketing-optimization")({
  component: MarketingOptimizationProjectPage,
});

function MarketingOptimizationProjectPage() {
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
              <Link to="/project/marketing-optimization" className="text-foreground hover:text-primary transition-colors">Marketing Optimization</Link>
            </nav>

            {/* Title Section */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30">
              <div className="mb-4 w-full text-left">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  November 2025
                </span>
              </div>
              <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.2] tracking-tight text-foreground md:text-5xl lg:text-6xl text-center">
                A Predictive Framework for Marketing Campaign Optimization: Integrating Linear Regression and Linear Programming Algorithms
              </h1>

              <div className="mt-12 flex flex-col justify-center gap-4 text-center">
                <div>
                  <p className="font-semibold">Aaditya Kamble, Sanvidhan Khillare, Heramb Gavankar</p>
                  <p className="text-sm text-muted-foreground">Indian Institute of Technology, Jodhpur</p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href="https://github.com/aadityakamble18/Marketing-Campaign-Optimization-using-LP"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-[#CC0B24] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#A8091D]"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                  <ArrowUpRight className="h-4 w-4 ml-1 opacity-80" />
                </a>
                <a
                  href="https://www.canva.com/design/DAHVXFwvvkE/bx2qUFtpUO9A4sUX1ekGRw/view"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium text-foreground transition-all hover:bg-accent"
                >
                  <Presentation className="h-4 w-4" />
                  View Presentation
                  <ArrowUpRight className="h-4 w-4 ml-1 opacity-80" />
                </a>
                <a
                  href="/src/assets/Marketingf campaign optimization/main.pdf"
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

            {/* Abstract */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">Abstract</h2>
              <p>
                The consumer goods industry allocates substantial capital toward multi-channel marketing campaigns, yet a significant proportion of this investment fails to generate an optimal return on investment (ROI) due to heuristic, intuition-based budget allocation. This paper develops a hybrid predictive-prescriptive analytical framework for optimizing marketing trade promotions and cross-channel budget distribution. Multiple linear regression is used to quantify the marginal impact of three advertising channels (Television, Radio, and Newspaper) on sales, and the resulting coefficients are embedded as objective-function parameters inside a bounded Linear Programming (LP) model solved via the dual-simplex and interior-point methods implemented in the HiGHS solver.
              </p>
              <p className="mt-4">
                We derive the model in full mathematical detail — the normal equations and Gauss–Markov justification for the regression stage, the standard-form conversion, complementary slackness, and the dual (shadow-price) interpretation of the LP stage — and we benchmark the resulting allocation against comparable predictive-prescriptive, robust-optimization, and reinforcement-learning frameworks reported in the recent operations-research and computational-advertising literature.
              </p>
              <p className="mt-4">
                Applied to the classical 200-market advertising dataset, the regression model explains 92.84% of out-of-sample variance in sales (RMSE = 1.5062), and the LP stage recommends funneling 80% of a simulated $1,000,000 budget into the high-elasticity Radio channel, yielding a projected total sales contribution of 91,233.20 units. We further extend the model with a concave, logarithmic diminishing-returns objective and a Hill-type saturation formulation drawn from the marketing-mix-modeling literature, and we discuss the conditions under which the linear model's corner-point solutions become unreliable. The paper closes with a quantitative sensitivity analysis, a complexity comparison of simplex versus interior-point solvers, and managerial implications for capital-efficient trade-promotion planning.
              </p>
            </section>

            {/* Presentation Embed */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">Presentation</h2>
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border shadow-md">
                <iframe
                  loading="lazy"
                  style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0 }}
                  src="https://www.canva.com/design/DAHVXFwvvkE/bx2qUFtpUO9A4sUX1ekGRw/view?embed"
                  allowFullScreen
                  allow="fullscreen">
                </iframe>
              </div>

            </section>

            {/* 1. Introduction */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">1. Introduction</h2>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">A. Background and Industry Context</h3>
              <p className="mb-4">
                In the highly competitive consumer goods industry, brand equity and market share are heavily contingent upon effective marketing execution and strategic trade promotions. Firms invest substantial sums into diverse marketing channels to capture consumer attention across an increasingly fragmented media landscape, yet capital efficiency in this spending remains a persistent operational weak point. A growing body of operations-research literature has responded by formalizing budget allocation as a constrained optimization problem rather than a matter of managerial intuition. Linear programming, in particular, has long been recognized as a natural fit for media-selection and budget-allocation problems because the decision (how much to spend per channel) is continuous, the aggregate spend is bounded by a fixed budget, and channel-level bounds can encode strategic diversification requirements.
              </p>

              <div className="my-8 flex justify-center">
                <img src={img1} alt="Marketing Optimization Overview" className="rounded-xl border border-border/50 shadow-sm max-w-full h-auto" />
              </div>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">B. The Problem of Intuition-Based Allocation</h3>
              <p className="mb-4">
                A primary driver of marketing-spend inefficiency is reliance on heuristic decision rules—allocating budget by historical precedent or executive judgment—rather than empirically estimated response functions. Sedlářová Nehézová et al. note that the limited availability of structured mathematical decision-support tools in digital marketing is itself a barrier to adoption, and they show that even when linear programming is used, point estimates of conversion cost are frequently unreliable enough to justify a robust (interval- or fuzzy-set-based) reformulation of the budget-allocation LP rather than a deterministic one. This motivates treating the present deterministic model as a baseline layer onto which robustness and non-linearity can later be added, a trajectory we discuss explicitly in the discussion.
              </p>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">C. Proposed Methodology and Contributions</h3>
              <p className="mb-4">
                This paper couples a predictive stage (multiple linear regression) with a prescriptive stage (bounded linear programming), and contributes the following beyond a standard applied case study:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>A complete derivation of the regression stage from the normal equations through the Gauss–Markov theorem, together with a multicollinearity (variance inflation factor) diagnostic that is frequently omitted from applied marketing-analytics papers;</li>
                <li>A full standard-form conversion of the LP, an explicit statement and proof of the complementary-slackness conditions used to compute the shadow price of the budget constraint, and a worked comparison of the dual-simplex and primal-dual interior-point algorithms actually used by the solver;</li>
                <li>A literature-grounded extension of the model to a concave (logarithmic) and a Hill-saturation objective function, situating the linear model relative to the marketing-mix-modeling (MMM) literature on adstock and saturation;</li>
                <li>A comparative discussion against five recent budget-allocation frameworks spanning robust LP, Bayesian optimization, cross-channel optimal transport, ensemble deep reinforcement learning, and reinforcement learning with differential evolution.</li>
              </ul>
            </section>

            {/* 2. Related Work */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">2. Related Work</h2>
              <p className="mb-4">Budget allocation across advertising channels has been studied along at least four largely separate methodological lines:</p>

              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Classical constrained optimization.</strong> Deterministic LP formulations for media selection are a long-standing application area, and closely related worked examples allocate a fixed digital budget across channels by treating regression- or survey-derived ROI coefficients as the LP's objective coefficients.</li>
                <li><strong>Robust and stochastic extensions.</strong> Because point-estimated coefficients carry sampling uncertainty, robust optimization approaches formulate online-marketing budget allocation with conversion-cost coefficients represented as fuzzy intervals rather than fixed numbers.</li>
                <li><strong>Sequential and bandit-style allocation.</strong> Bayesian optimization outperforms semi-bandit feedback methods when the channel response function must be learned online rather than estimated once from historical data.</li>
                <li><strong>Learning-based and cross-channel coordination methods.</strong> At a larger scale, cross-channel coordination has been addressed with optimal-transport-based iterative algorithms, ensemble deep reinforcement learning over simplex-constrained action spaces, and reinforcement learning augmented with differential-evolution mutation operators. These methods relax linearity and static-coefficient assumptions at the cost of requiring substantially more data and compute.</li>
              </ul>
            </section>

            {/* 3. Methods */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">3. Methods</h2>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">A. Data</h3>
              <p className="mb-4">
                The empirical data used to fit the predictive stage is the classical cross-sectional advertising dataset of 200 market observations recording expenditure on Television, Radio, and Newspaper together with resulting sales. The dataset was partitioned 85%/15% into training and held-out test subsets to obtain an honest out-of-sample estimate of predictive accuracy, following standard practice for small-n regression validation.
              </p>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">B. Multiple Linear Regression: Derivation</h3>
              <p className="mb-4">
                The predictive stage models sales y as a linear function of channel spend plus Gaussian noise. By the Gauss–Markov theorem, the OLS estimator is the Best Linear Unbiased Estimator (BLUE). A multicollinearity diagnostic confirmed that variance inflation factors (VIF) for all channels were near 1, indicating negligible collinearity. Thus, the OLS coefficients can be interpreted as approximately isolated marginal effects, supporting their direct use as LP objective coefficients.
              </p>

              <div className="my-8 flex justify-center">
                <img src={img2} alt="Linear Regression and LP Formulation" className="rounded-xl border border-border/50 shadow-sm max-w-full h-auto" />
              </div>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">C. Linear Programming Formulation</h3>
              <p className="mb-4">
                Given the fitted coefficients, the prescriptive stage solves for maximum total sales subject to an aggregate budget constraint and channel-level bounds. The lower bound enforces channel diversification, and the upper bound caps concentration risk in any single medium. Because the objective is linear, its maximum is attained at an extreme point (vertex) of the polytope feasible region.
              </p>
              <p className="mb-4">
                The model is converted to standard form and solved utilizing the dual-simplex method or primal-dual interior-point methods provided by the HiGHS solver, establishing an optimal vertex based on constant marginal returns.
              </p>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">D. Duality and Sensitivity Analysis</h3>
              <p className="mb-4">
                Applying Karush–Kuhn–Tucker complementary-slackness conditions reveals that whichever channel is not pinned to an upper or lower bound at the optimum absorbs the marginal budget. Consequently, its regression coefficient represents the shadow price of the budget constraint—valid over the range for which the current optimal basis remains optimal.
              </p>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">E. Nonlinear Extension: Diminishing Returns</h3>
              <p className="mb-4">
                The linear objective implicitly assumes constant marginal returns to spend. Empirically, advertising response is well documented to saturate. We explore the extension of the model to concave response curves, such as logarithmic functions (constant elasticity of diminishing returns) and Hill saturation curves, common in the marketing-mix-modeling literature.
              </p>
            </section>

            {/* 4. Results */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">4. Results</h2>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">A. Regression Diagnostics</h3>
              <p className="mb-4">
                The regression model achieved an out-of-sample R² of 0.9284 (92.84% of test-set sales variance explained) and an RMSE of 1.5062. Radio exhibited nearly double the marginal efficiency of TV and over 40 times the marginal efficiency of Newspaper. This ranking (Radio &gt; TV &gt;&gt; Newspaper) corroborates the choice to let the LP stage drive Newspaper toward its lower diversification bound.
              </p>

              <div className="my-8 flex justify-center">
                <img src={img3} alt="Results and Optimal Allocation" className="rounded-xl border border-border/50 shadow-sm max-w-full h-auto" />
              </div>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">B. Optimal Budget Allocation</h3>
              <p className="mb-4">
                Solving for a simulated budget of $1,000,000, the LP prescribes:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Radio:</strong> $800,000 (80.0%, at upper bound)</li>
                <li><strong>TV:</strong> $150,000 (15.0%, basic interior)</li>
                <li><strong>Newspaper:</strong> $50,000 (5.0%, at lower bound)</li>
              </ul>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">C. Projected Sales Impact</h3>
              <p className="mb-4">
                The prescribed allocation projects total sales of 91,233.20 units. Radio contributes 91.0% of the total, TV contributes 8.9%, and Newspaper contributes a marginal 0.1% plus the constant intercept. This quantifies how much of the projected outcome is attributable to reallocating capital toward the empirically higher-elasticity channel.
              </p>
            </section>

            {/* 5. Discussion */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">5. Discussion & Implications</h2>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">A. Managerial Implications and the Equimarginal Principle</h3>
              <p className="mb-4">
                The dual result formalizes the equimarginal principle: optimal budget allocation equalizes marginal, not average, ROI across channels. In the linear model, this manifests as a corner-point solution because marginal ROI is constant. Thus, the optimizer pushes every channel to a bound except the single channel whose coefficient exactly matches the shadow price.
              </p>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">B. When the Linear Approximation Breaks Down</h3>
              <p className="mb-4">
                The linear model overstates marginal returns once a channel approaches audience saturation. Practically, the 80% Radio allocation recommended should be treated as a first-pass reallocation signal—directionally correct but potentially subject to saturation effects at the scale of an $800,000 budget.
              </p>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">C. Comparison with Learning-Based Alternatives</h3>
              <p className="mb-4">
                While reinforcement-learning and Bayesian-optimization approaches relax the linearity assumption, they come at a substantially higher implementation cost. For an organization with stable, well-estimated channel elasticities and a genuinely linear-in-the-relevant-range budget decision, the LP+regression pipeline remains an attractive, low-cost baseline.
              </p>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">D. Limitations</h3>
              <p className="mb-4">
                The deterministic treatment ignores estimation uncertainty, which could be addressed through a robust reformulation. Moreover, the linear objective's corner-point solutions should not be extrapolated far beyond the range of the training data. Finally, the model is static and cross-sectional, not capturing the lagged influence of past spend (adstock effects) standard in modern MMM practice.
              </p>
            </section>

            {/* 6. Conclusion */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">6. Conclusion</h2>
              <p className="mb-4">
                This paper presented a fully derived predictive-prescriptive pipeline for marketing budget optimization, combining OLS regression with a bounded linear program. Applied to a 200-market dataset, the framework explains 92.84% of variance and prescribes reallocating a simulated $1,000,000 budget heavily toward Radio, projecting over 91,000 sales units and a marginal budget value of $0.05394 in sales per additional advertising dollar. This establishes an interpretable, low-cost baseline whose recommendations should be nuanced by diminishing-returns considerations in real-world deployment.
              </p>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}
