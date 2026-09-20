import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import xiiCert from "../assets/XII/XI.jpeg";
import { ProtectedImage } from "../components/ProtectedImage";

export const Route = createFileRoute("/education/nirala-college")({
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
              <Link to="/education/nirala-college" className="text-foreground hover:text-primary transition-colors">XII Standard</Link>
            </nav>
            
            <p className="mb-5 font-body text-sm font-semibold uppercase tracking-widest text-primary">
              XII Standard, Maharashtra State Board
            </p>
            <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Nirala Jr College, Nagpur
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              2022
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
              <p>The COVID-19 lockdown defined the majority of my 11th and 12th-grade years, shifting my entirely reality to a virtual environment. While the sudden isolation and inability to leave the house were initially challenging, this unusual period of stillness ultimately became a catalyst for profound personal and intellectual growth.</p>
              <p>Seeking an escape from the monotony, I immersed myself in diverse genres of literature and film, which cultivated a deep appreciation for storytelling. This creative momentum naturally transitioned into hands-on artistic exploration. I dedicated time to mastering varied techniques, ranging from stippling, typography, and abstract painting to traditional art forms like Madhubani.</p>
              <p>Beyond the arts, I utilized this uninterrupted time to independently investigate advanced scientific and engineering principles. I thoroughly explored subjects such as semiconductor physics, electronics, combustion cycles, and fracture propagation. Ultimately, while the pandemic restricted my physical world, it provided an invaluable opportunity to broaden my intellectual horizons and discover lifelong passions I may not have found otherwise.</p>
            </div>
          </div>
        </section>

        <section className="border-t border-border px-6 py-16 md:px-12 md:py-24 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Academics</p>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Courses Taken</h2>
              <div className="mt-6 space-y-1 text-sm font-medium text-muted-foreground">
                <p>Seat No: <span className="text-foreground">N020920</span></p>
                <p>Batch: <span className="text-foreground">March 2022</span></p>
              </div>
            </div>
            <div className="text-base leading-relaxed text-muted-foreground md:text-lg">
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="font-medium text-foreground w-12 shrink-0">01</span>
                  <span>ENGLISH</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-medium text-foreground w-12 shrink-0">40</span>
                  <span>MATHEMATICS & STATISTICS</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-medium text-foreground w-12 shrink-0">54</span>
                  <span>PHYSICS</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-medium text-foreground w-12 shrink-0">55</span>
                  <span>CHEMISTRY</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-medium text-foreground w-12 shrink-0">D9</span>
                  <span>COMPUTER SCIENCE</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-medium text-foreground w-12 shrink-0">31</span>
                  <span>ENV. EDU. & WATER SECURITY</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-medium text-foreground w-12 shrink-0">30</span>
                  <span>HEALTH & PHYSICAL EDUCATION</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-border px-6 py-16 md:px-12 md:py-24 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Media</p>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Certificates & Photos</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ProtectedImage src={xiiCert} alt="XII Standard Certificate" />
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
