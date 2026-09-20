import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import portrait from "../assets/portrait.jpg";
import { projects } from "./projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aaditya Kamble — Portfolio" },
      {
        name: "description",
        content:
          "Personal portfolio of Aaditya Kamble. Product design, development, and creative direction.",
      },
      { property: "og:title", content: "Aaditya Kamble — Portfolio" },
      {
        property: "og:description",
        content:
          "Personal portfolio of Aaditya Kamble. Product design, development, and creative direction.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});


function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <FloatingShapes />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationExperienceSection />
        <ProjectsSection />
      </main>
    </div>
  );
}



function HeroSection() {
  return (
    <section className="relative z-10 px-6 pb-16 pt-10 md:px-12 md:pb-24 md:pt-30 lg:px-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <p className="mb-5 font-body text-sm font-semibold uppercase tracking-widest text-primary">
            AADITYA KAMBLE
          </p>
          <h1 className="font-display text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Be Educated,
            <br />

            Be Organized, &
            <br />
            Be Agitated
          </h1>

          <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
            I am a materials engineering graduate with an innate passion for automobiles and a firm belief that the pursuit of knowledge should never end. This curiosity has driven me to explore multiple STEM fields, delivering hands-on projects across machine learning, IoT, embedded systems, EV systems, and more...{" "}
            <Link
              to="/about"
              hash="overview"
              className="inline-flex items-center gap-1 font-semibold text-foreground transition-colors hover:text-primary"
            >
              Read more
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </p>

          <div className="absolute -left-8 top-1/2 hidden -translate-y-1/2 lg:block">
            <WavyLine />
          </div>
        </div>

        <div className="relative order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-primary opacity-90 float-slow" />
            <div className="absolute -right-8 -top-8 -z-10 h-24 w-24 rounded-full bg-red-muted opacity-60 float-medium" />
            <img
              src={portrait}
              alt="Aaditya Kamble"
              width={420}
              height={420}
              className="relative z-10 aspect-square w-72 rounded-[30%_70%_60%_40%/50%_40%_60%_50%] object-cover shadow-2xl md:w-80 lg:w-96"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl lg:mt-24">
        <WavyLine className="w-full text-primary opacity-60" />
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="relative z-10 px-6 py-16 md:px-12 md:py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              About This Website
            </h2>
            <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-primary">
              Skip this (Not Important)
            </p>
          </div>

          <div className="space-y-6">
            <p className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Greetings, I am Aaditya Kamble, and welcome to my personal portfolio. Whether you
              arrived via a direct link or through independent curiosity, I have endeavoured to
              consolidate a comprehensive overview of my background, technical repertoire, and
              creative undertakings within this dynamic, interactive space. Should you encounter
              any functional anomalies as you explore, please do not hesitate to report them
              through the provided communication channel.
            </p>
            <p className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              The platform is systematically arranged into dedicated sections outlining my
              personal profile, practical projects, professional experience, and extracurricular
              engagements, alongside avenues for direct correspondence. Here, you will discover
              biographical highlights refined with computational assistance, complete repositories
              hosted on GitHub with downloadable technical reports, and an account of my broader
              pursuits. As further enhancements remain underway, I trust your visit proves
              engaging, and you may even find a brief interactive diversion should the technical
              minutiae grow tedious.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

function EducationExperienceSection() {
  return (
    <section className="relative z-10 px-6 py-16 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2">
          
          {/* Education Card */}
          <div className="relative overflow-hidden rounded-2xl border border-border/40 bg-card/20 backdrop-blur-md p-8 md:p-10 shadow-lg flex flex-col justify-between transition-transform duration-500 hover:-translate-y-1">
            <div className="absolute -right-12 -top-12 -z-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
            <div>
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-display text-3xl font-bold text-foreground">Education</h3>
                <div className="h-px flex-1 bg-border/40 mx-6 hidden sm:block" />
              </div>
              
              <div className="space-y-6 mt-6">
                <div className="flex flex-col gap-1">
                  <h4 className="font-display text-xl font-semibold text-foreground">Indian Institute of Technology, Jodhpur</h4>
                  <p className="text-primary font-medium">B.Tech in Materials Engineering</p>
                  <p className="text-sm text-muted-foreground mt-1">2022 - 2026</p>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-display text-xl font-semibold text-foreground">Nirala Jr College, Nagpur</h4>
                  <p className="text-primary font-medium">XII Standard, Maharashtra State Board</p>
                  <p className="text-sm text-muted-foreground mt-1">2022</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 pt-6 border-t border-border/30">
              <Button asChild variant="outline" className="w-full sm:w-auto rounded-full bg-background/50 backdrop-blur-sm border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                <Link to="/about" hash="education" className="inline-flex items-center gap-2">
                  View Full Education <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Experience Card */}
          <div className="relative overflow-hidden rounded-2xl border border-border/40 bg-card/20 backdrop-blur-md p-8 md:p-10 shadow-lg flex flex-col justify-between transition-transform duration-500 hover:-translate-y-1">
            <div className="absolute -left-12 -bottom-12 -z-10 h-32 w-32 rounded-full bg-red-muted/10 blur-2xl" />
            <div>
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-display text-3xl font-bold text-foreground">Experience</h3>
                <div className="h-px flex-1 bg-border/40 mx-6 hidden sm:block" />
              </div>
              
              <div className="space-y-6 mt-6">
                <div className="flex flex-col gap-1">
                  <h4 className="font-display text-xl font-semibold text-foreground">Product & UI Designer</h4>
                  <p className="text-primary font-medium">ScoAll</p>
                  <p className="text-sm text-muted-foreground mt-1">Jan 2026 - Apr 2026</p>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-display text-xl font-semibold text-foreground">Coordinator</h4>
                  <p className="text-primary font-medium">Boltheads</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 pt-6 border-t border-border/30">
              <Button asChild variant="outline" className="w-full sm:w-auto rounded-full bg-background/50 backdrop-blur-sm border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                <Link to="/about" hash="experience" className="inline-flex items-center gap-2">
                  View Full Experience <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="relative z-10 px-6 py-12 md:px-12 md:py-16 lg:px-16 min-h-screen flex flex-col justify-center">
      <div className="mx-auto max-w-7xl">
        <div className="relative mb-8 inline-block">
          <div className="absolute -inset-4 -left-8 -z-10 rounded-[50%_50%_40%_60%/60%_40%_60%_40%] bg-primary opacity-90" />
          <h2 className="relative font-display text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
            Projects
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[...projects]
            .sort((a, b) => {
              const [monthA, yearA] = a.year.split("/");
              const [monthB, yearB] = b.year.split("/");
              const dateA = new Date(parseInt(yearA), parseInt(monthA) - 1);
              const dateB = new Date(parseInt(yearB), parseInt(monthB) - 1);
              return dateB.getTime() - dateA.getTime();
            })
            .slice(0, 2)
            .map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-xl"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-display text-xl font-semibold text-card-foreground">
                    {project.title}
                  </h3>
                  <span className="text-xs font-medium text-muted-foreground">{project.year}</span>
                </div>
                <p className="mb-6 text-sm text-muted-foreground">{project.description}</p>
                <Link
                  to={project.link || "#"}
                  className="inline-flex items-center gap-1 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  View Project
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            View all projects
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}


function FloatingShapes() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute left-[5%] top-[12%] h-16 w-16 rounded-[40%_60%_60%_40%/50%_50%_50%_50%] bg-primary/20 float-slow" />
      <div className="absolute right-[8%] top-[28%] h-10 w-10 rounded-full bg-red-muted/30 float-medium" />
      <div className="absolute bottom-[20%] left-[12%] h-20 w-20 rounded-[30%_70%_50%_50%/50%_40%_60%_50%] bg-primary/15 float-fast" />
      <div className="absolute bottom-[30%] right-[15%] h-14 w-14 rounded-[60%_40%_30%_70%/50%_60%_40%_50%] bg-red-muted/25 drift-x" />
      <div className="absolute left-[45%] top-[60%] h-8 w-8 rounded-full bg-primary/20 float-medium" />
    </div>
  );
}

function WavyLine({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`h-24 w-64 md:h-32 md:w-80 ${className ?? ""}`}
      aria-hidden="true"
    >
      <path
        d="M10 60 C 60 10, 100 110, 150 60 S 240 10, 290 60 S 380 110, 390 60"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
