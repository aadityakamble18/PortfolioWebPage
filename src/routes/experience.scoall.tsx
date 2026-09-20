import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { ProtectedImage } from "../components/ProtectedImage";

export const Route = createFileRoute("/experience/scoall")({
  component: ScoallExperiencePage,
});

function ScoallExperiencePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <FloatingShapes />

      <main className="relative z-10">
        <section className="px-6 pb-20 pt-10 md:px-12 md:pb-28 md:pt-20 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-2 text-sm font-medium text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Aaditya Kamble</Link>
              <span>/</span>
              <Link to="/about" className="hover:text-primary transition-colors">About</Link>
              <span>/</span>
              <Link to="/about" hash="experience" className="hover:text-primary transition-colors">Experience</Link>
              <span>/</span>
              <Link to="/experience/scoall" className="text-foreground hover:text-primary transition-colors">ScoAll</Link>
            </nav>

            <p className="mb-5 font-body text-sm font-semibold uppercase tracking-widest text-primary">
              Product & UI Designer
            </p>
            <div className="flex items-center gap-6">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-background overflow-hidden border border-border">
                <img src="https://media.licdn.com/dms/image/v2/D560BAQEs3AIVfE2wQA/company-logo_100_100/B56Zy4d_H.KcAU-/0/1772621394911/scoall_logo?e=1790812800&v=beta&t=2kIPddZ4U21SFWlB_kwOi-5HOmvuPkz0OxSsleKyPbg" alt="ScoAll Logo" className="h-full w-full object-cover" />
              </div>
              <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl">
                ScoAll
              </h1>
            </div>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Jan 2026 - Apr 2026 · 4 mos
            </p>
          </div>
        </section>

        <section className="border-t border-border px-6 py-16 md:px-12 md:py-24 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Overview</p>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">My Role</h2>
            </div>
            <div className="space-y-7 text-base leading-relaxed text-muted-foreground md:text-lg">
              <ul className="list-disc pl-5 space-y-2">
                <li>Spearheaded end-to-end UI/UX and brand design for Scoall, a sports-tech startup, beginning with the creation of the official company logo.</li>
                <li>Collaborated with a cross-functional founding team comprising two software developers and two product planners to establish design and technical roadmaps.</li>
                <li>Conducted a month-long user research campaign across sports complexes, interviewing diverse athletes and coaches to gather qualitative insights and functional expectations.</li>
                <li>Synthesized field research into high-fidelity web mockups, aligning visual aesthetics with core usability requirements.</li>
                <li>Partnered closely with front-end developers to resolve responsive design constraints, adapting complex layouts and floating vector shapes for seamless cross-window scalability.</li>
                <li>Enhanced product UX by designing intuitive secondary screens, custom loading animations, dynamic stat bars, and standardized UI button states.</li>
                <li>Deployed prototypes in live environments during a National Sepak Takraw tournament, running field-testing sessions with players and coaches to evaluate product latency and feature utility.</li>
                <li>Iterated and finalized end-to-end production-ready design systems based on real-world event feedback before handing assets over for developer implementation.</li>
              </ul>

              <div className="pt-6">
                <h3 className="font-display text-2xl font-bold text-foreground">The Design Journey</h3>
              </div>

              <p>
                Scoall is a startup initiative founded by a close friend who approached me to lead the design of their web platform. Although I was initially hesitant, seeing his dedication convinced me to jump on board. I joined a core team consisting of two developers and two product planners, taking full ownership of creating an interface that was both visually striking and intuitive. Before diving into the web architecture, I established the brand's visual identity by designing the official company logo.
              </p>
              <p>
                To ensure the platform addressed real-world needs, I spent the following month conducting targeted user research. I visited sports facilities and interviewed athletes and coaches across various disciplines, presenting the concept, collecting qualitative feedback, and documenting feature expectations. After synthesizing the research data, I explored diverse design systems and settled on a clean, scalable template.
              </p>
              <p>
                When I presented the initial designs to our development team, we ran into an engineering constraint: the complex, floating geometric shapes I had incorporated did not scale cleanly across dynamic window resizing. Working through these responsive web limitations with the developers required extra iterations and extended our timeline alongside academic commitments. However, the collaborative problem-solving allowed us to achieve a final, responsive layout that earned unanimous approval across the team.
              </p>
              <p>
                From there, I expanded the platform's broader interface to optimize user flow—designing secondary pages, integrating loading animations, refining button placements, and introducing dynamic stat bars.
              </p>
              <p>
                A major breakthrough occurred when our city hosted a National Sepak Takraw championship. Leveraging local connections, we tested our prototype during live matches. This on-ground trial was invaluable: it allowed us to observe the interface under real game conditions, strip away unnecessary clutter, and pinpoint friction points. We demonstrated the prototype directly to participating athletes and coaches, documented their real-time feedback, and reworked the design specifications accordingly.
              </p>
              <p>
                Once the finalized design system was completed and documented for the development team to build into a production-ready product, I stepped back to balance other academic commitments. Working at Scoall provided rich, practical exposure to user research, responsive UI constraints, and real-world product testing, and I look forward to collaborating with the team again.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function FloatingShapes() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute left-[6%] top-[18%] h-14 w-14 rounded-[40%_60%_65%_35%/50%_45%_55%_50%] bg-primary/20 float-slow" />
      <div className="absolute right-[7%] top-[55%] h-20 w-20 rounded-[65%_35%_45%_55%/40%_55%_45%_60%] bg-red-muted/20 drift-x" />
      <div className="absolute bottom-[12%] left-[38%] h-9 w-9 rounded-full bg-primary/20 float-medium" />
    </div>
  );
}
