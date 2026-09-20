import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import boltheadsImg from "../assets/Boltheads/boltheads.jpeg";
import { ProtectedImage } from "../components/ProtectedImage";

export const Route = createFileRoute("/experience/boltheads")({
  component: BoltheadsExperiencePage,
});

function BoltheadsExperiencePage() {
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
              <Link to="/experience/boltheads" className="text-foreground hover:text-primary transition-colors">Boltheads</Link>
            </nav>
            
            <p className="mb-5 font-body text-sm font-semibold uppercase tracking-widest text-primary">
              Coordinator
            </p>
            <div className="flex items-center gap-6">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-background overflow-hidden border border-border">
                <img src="https://media.licdn.com/dms/image/v2/D560BAQEsFRUFYkzDpg/company-logo_200_200/B56Za0Kv8XGgAI-/0/1746779439678/automobiles_iitj_logo?e=1790812800&v=beta&t=B4SeDQFeK5_mai2LOCJWyWO8Y1MuJexrPKl02Dd6BKw" alt="Boltheads Logo" className="h-full w-full object-cover" />
              </div>
              <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl">
                Boltheads
              </h1>
            </div>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Sep 2024 - Sep 2025 · 1 yr 1 mo
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
                <li>Spearheaded the revival of IIT Jodhpur's automotive society after a 1.5-year dormant period post-pandemic.</li>
                <li>Formulated a sustainable operational plan and secured multidisciplinary Faculty Advisors across different departments.</li>
                <li>Rebranded the society by designing and finalizing multiple official club logos with institute approval.</li>
                <li>Conducted an introductory orientation session and interviewed applicants to recruit a team of 9 core members and 3 coordinators.</li>
                <li>Secured critical administrative approvals to gain access to institute workshops and fabrication equipment with zero initial budget.</li>
                <li>Directed mechanical and electrical diagnostics and repairs on a non-functional BAJA vehicle, resolving steering and motor faults to unlock institutional funding.</li>
                <li>Organized regular technical training sessions covering automotive subsystems, safe workshop machinery, cutting, and welding to prep the upcoming BAJA team.</li>
                <li>Supervised hands-on student mini-projects spanning CAD design, manufacturing, and IoT to build cross-functional engineering competency.</li>
                <li>Negotiated and secured an external industry collaboration project for the club.</li>
                <li>Founded and executed "Ignition Camp," an intensive summer program teaching CAD and simulation tools to interested students.</li>
                <li>Managed cross-functional operations, team leadership, risk mitigation, and conflict resolution throughout the tenure.</li>
                <li>Transitioned into an advisory and mentorship role to guide succeeding student coordinators and maintain long-term club continuity.</li>
              </ul>
              
              <div className="pt-6">
                <h3 className="font-display text-2xl font-bold text-foreground">The Revival Story</h3>
              </div>
              <p>
                Boltheads is the automotive society of IIT Jodhpur. While the name carried great potential, the reality when I arrived at the institute was quite different. I was eager to get involved, but to my surprise, there was no active leadership to run the club. Emerging from the post-pandemic period, the society had remained largely dormant for about a year and a half. During that time, I watched from the sidelines as several attempts to revive it fell short for various reasons. I decided that once I became eligible, I would take on the initiative myself. I began looking for peers who shared that ambition, eventually partnering with a friend who was fully on board.
              </p>
              <p>
                Together, we drafted a comprehensive revival plan and approached a professor we believed would make an ideal Faculty Advisor. After testing our commitment and vetting our proposed strategy, the advisor agreed to support us. We then established a detailed operational plan to ensure the club would remain sustainable and avoid future dormancy. I designed several new branding options before finalizing an approved logo, and we brought in additional faculty advisors across multiple disciplines to strengthen institutional support.
              </p>
              <p>
                Our next priority was building an engaged student base. We organized an introductory orientation that saw high turnout and interest. Following that momentum, we initiated a structured recruitment drive, interviewing applicants to assemble a dedicated team of nine members, three coordinators, and society heads.
              </p>
              <p>
                Then came the real operational challenge.
              </p>
              <p>
                Because the club had been inactive for years, we were operating with zero budget and minimal resources until the next academic budget cycle. Our team worked relentlessly to secure necessary administrative permissions to access institute workshops and tools to repair our legacy BAJA vehicle. This step was critical: our future budget allocations hinged directly on proving we could restore the vehicle to working order.
              </p>
              <p>
                We began with a systematic diagnostic process. The primary issues were straightforward—the steering system was non-functional, and the motor was dead. Simultaneously, I needed to train and assemble a competitive team to prepare for the upcoming BAJA season. To bridge the technical gap, I organized regular theoretical sessions covering automotive subsystems, alongside practical workshop training that taught students how to safely operate fabrication tools like welders and cutters. These sessions helped identify our most dedicated participants. To deepen hands-on competence, we launched small mini-projects led by core members and executed by new recruits across domains such as CAD design, IoT, and manufacturing.
              </p>
              <p>
                Despite numerous logistical hurdles, our structured approach paid off. We maintained transparent reporting with our Faculty Advisors at every milestone, secured all required approvals, and established an industry collaboration project. To carry this momentum into the break, I conceptualized and launched "Ignition Camp"—an intensive summer training program focused on CAD and simulation skills, which was met with overwhelming student participation.
              </p>
              <p>
                Serving as coordinator carried significant responsibility, as any operational failure ultimately rested on me. However, the reverse was equally true: I made it a priority to ensure our team celebrated every technical win and milestone together. Through this journey, I gained practical expertise in team leadership, budget navigation, conflict resolution, and project lifecycle management. Following a fulfilling tenure, I transitioned into a mentor role, guiding incoming coordinators to ensure the long-term vitality of Boltheads.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-border px-6 py-16 md:px-12 md:py-24 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Media</p>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Photos</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProtectedImage src={boltheadsImg} alt="Boltheads" />
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
