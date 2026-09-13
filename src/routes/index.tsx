import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import portrait from "../assets/portrait.jpg";
import projectOne from "../assets/project-1.jpg";
import projectTwo from "../assets/project-2.jpg";

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

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/aadityakamble" },
  { label: "GitHub", href: "https://github.com/aadityakamble" },
  { label: "Twitter", href: "https://twitter.com/aadityakamble" },
  { label: "Instagram", href: "https://instagram.com/aadityakamble" },
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <FloatingShapes />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="relative z-20 flex items-center justify-between px-6 py-6 md:px-12 lg:px-16">
      <Link
        to="/"
        className="font-display text-sm font-bold tracking-tight uppercase transition-colors hover:text-primary"
      >
        Aaditya Kamble
      </Link>
      <nav className="hidden items-center gap-8 md:flex">
        <a
          href="#projects"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Work
        </a>
        <a
          href="#projects"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Projects
        </a>
        <Link
          to="/about"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Contact
        </Link>
      </nav>
      <div className="flex items-center gap-2 md:hidden">
        <Link
          to="/about"
          className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-2 text-xs font-medium transition-colors hover:border-primary hover:text-primary"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-2 text-xs font-medium transition-colors hover:border-primary hover:text-primary"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative z-10 px-6 pb-16 pt-8 md:px-12 md:pb-24 md:pt-12 lg:px-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <p className="mb-4 font-body text-xs font-semibold uppercase tracking-widest text-primary">
            Aaditya Kamble
          </p>
          <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Craving for
            <br />
            More Hunger
            <br />
            for Invention
          </h1>

          <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
            I build thoughtful digital experiences where technical craft meets creative
            curiosity. This portfolio brings together the work, ideas, and experiments that
            continue to shape my practice.{" "}
            <Link
              to="/about"
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

function ProjectsSection() {
  const projects = [
    {
      title: "Brand Systems",
      description:
        "A visual identity and design-system exploration for a modern fintech startup.",
      image: projectOne,
      year: "2025",
    },
    {
      title: "Editorial Web",
      description:
        "An art-direction-led website built for an independent architecture studio.",
      image: projectTwo,
      year: "2024",
    },
  ];

  return (
    <section id="projects" className="relative z-10 px-6 py-16 md:px-12 md:py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="relative mb-12 inline-block">
          <div className="absolute -inset-4 -left-8 -z-10 rounded-[50%_50%_40%_60%/60%_40%_60%_40%] bg-primary opacity-90" />
          <h2 className="relative font-display text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
            Projects
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-xl"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/10">
                  <span className="font-display text-5xl font-bold text-primary-foreground/90 md:text-6xl">
                    3:2
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-display text-xl font-semibold text-card-foreground">
                    {project.title}
                  </h3>
                  <span className="text-xs font-medium text-muted-foreground">{project.year}</span>
                </div>
                <p className="mb-6 text-sm text-muted-foreground">{project.description}</p>
                 <a
                  href="#"
                   className="inline-flex items-center gap-1 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Case Study
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            View all projects
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 bg-foreground px-6 py-12 text-background md:px-12 md:py-16 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <p className="font-display text-2xl font-bold tracking-tight">Aaditya Kamble</p>
          <p className="mt-1 text-sm text-background/70">Product designer & developer</p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex flex-wrap gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-background/80 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="https://aadityakamble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-background/80 transition-colors hover:text-primary"
          >
            aadityakamble.com
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-background/10 pt-6 text-xs text-background/50">
        © {new Date().getFullYear()} Aaditya Kamble. All rights reserved.
      </div>
    </footer>
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
