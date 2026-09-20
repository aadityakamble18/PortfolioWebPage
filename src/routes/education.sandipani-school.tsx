import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import xCert from "../assets/X/X.jpeg";
import skillCert from "../assets/X/SkillCert.jpg";
import sagImg from "../assets/X/sag.jpeg";
import { ProtectedImage } from "../components/ProtectedImage";

export const Route = createFileRoute("/education/sandipani-school")({
  component: EducationPage,
});

function EducationPage() {
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
              <Link to="/about" hash="education" className="hover:text-primary transition-colors">Education</Link>
              <span>/</span>
              <Link to="/education/sandipani-school" className="text-foreground hover:text-primary transition-colors">X Standard</Link>
            </nav>

            <p className="mb-5 font-body text-sm font-semibold uppercase tracking-widest text-primary">
              X Standard, CBSE
            </p>
            <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Sandipani High School, Nagpur
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              2020
            </p>
          </div>
        </section>

        <section className="border-t border-border px-6 py-16 md:px-12 md:py-24 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Overview</p>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">My Experience</h2>
            </div>
            <div className="space-y-7 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>This is the school where I spent my whole childhood. It's where I made great friends, built so many memories, and really shaped how I see the world. I learned a lot in my classes and was involved in plenty of extracurricular activities, too.</p>

              <p>I still remember hosting the Teachers' Day program—it was a huge hit! I was lucky to have so many amazing teachers there who inspired me and really motivated me for the future.</p>
            </div>
          </div>
        </section>

        <section className="border-t border-border px-6 py-16 md:px-12 md:py-24 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Academics</p>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Courses Taken</h2>
              <div className="mt-6 space-y-1 text-sm font-medium text-muted-foreground">
                <p>Roll No: <span className="text-foreground">15133672</span></p>
              </div>
            </div>
            <div className="text-base leading-relaxed text-muted-foreground md:text-lg">
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="font-medium text-foreground w-12 shrink-0">184</span>
                  <span>ENGLISH LNG & LIT.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-medium text-foreground w-12 shrink-0">009</span>
                  <span>MARATHI</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-medium text-foreground w-12 shrink-0">041</span>
                  <span>MATHEMATICS STANDARD</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-medium text-foreground w-12 shrink-0">086</span>
                  <span>SCIENCE - THEORY</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-medium text-foreground w-12 shrink-0">087</span>
                  <span>SOCIAL SCIENCE</span>
                </li>
                <li className="flex gap-3 mt-4 pt-4 border-t border-border">
                  <span className="font-medium text-foreground w-12 shrink-0">402</span>
                  <div>
                    <p>INFORMATION TECHNOLOGY</p>
                    <p className="text-sm text-primary">Additional Subject</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-border px-6 py-16 md:px-12 md:py-24 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Media</p>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Certificates </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProtectedImage src={xCert} alt="X Standard Certificate" />
              <ProtectedImage src={skillCert} alt="IT Skill Certificate" />
              <ProtectedImage src={sagImg} alt="SAG Certificate" />
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
