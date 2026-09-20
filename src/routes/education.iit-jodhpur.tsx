import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import degreeCert from "../assets/Btech/Degreecertificate.jpg";
import boltheadsImg from "../assets/Btech/boltheads.jpeg";
import { ProtectedImage } from "../components/ProtectedImage";

export const Route = createFileRoute("/education/iit-jodhpur")({
  component: EducationPage,
});

const coursework = [
  {
    semester: "Semester I",
    courses: [
      "MEP1010 — Engineering Visualization",
      "BBL1020 — Introduction to Bioengineering Theory",
      "CSL1010 — Introduction to Computer Science",
      "MAL1010 — Mathematics I",
      "OSN1010 / OSN1040 — Social Connect & Responsibilities I & II",
      "EEL1010 — Introduction to Electrical Engineering",
      "HSN1010 / HSN1020 — Communication Skill I & II",
      "BBP1010 — Introduction to Bioengineering Lab",
      "OSN1020 / OSN1050 — Performing Arts I & II",
      "OAE1010 — Engineering Design I",
    ]
  },
  {
    semester: "Semester II",
    courses: [
      "MAL1020 — Mathematics II",
      "PHP1010 — Physics Laboratory",
      "OAE1020 — Engineering Design II",
      "CYP1010 — Chemistry Laboratory",
      "MEP1020 — Engineering Realization",
      "PHL1010 — Electromagnetics and Optics",
      "MEL1010 — Engineering Mechanics",
      "CYL1010 — Chemistry",
    ]
  },
  {
    semester: "Semester III",
    courses: [
      "MEL2010 — Mechanics of Solids",
      "MTN2010 — Introduction to Profession",
      "MEL2020 — Thermodynamics",
      "MAL2020 — Scientific Computations",
      "PHL2070 — Introductory Condensed Matter Physics",
      "CSL2010 — Introduction to Machine Learning",
      "MTN1010 — Design Practical Experience",
    ]
  },
  {
    semester: "Semester IV",
    courses: [
      "MTL2040 — Materials at Equilibrium",
      "CHL2023 — Polymers",
      "MTL2015 — Physical Metallurgy",
      "MTL2016 — Corrosion",
      "CSL2020 — Data Structures and Algorithms",
      "EEL2010 — Signals and Systems",
      "MTL2020 — Materials for Energy Conversion & Storage",
      "HSL2060 — Postcolonial Fiction",
    ]
  },
  {
    semester: "Semester V",
    courses: [
      "LAN3010 / LAN3020 — Professional Ethics I & II",
      "MTL3010 — Electronic Materials",
      "MTP3020 — Physical Metallurgy Lab",
      "MTP3050 — Materials Characterization Lab",
      "LAL3110 — Urban Sociology",
      "MTP3010 — Electronic Materials Lab",
      "MTP3030 — Energy Materials Lab",
      "MTL3030 — Phase Transformations",
      "MTL3040 — Materials Characterization",
      "MTL3020 — Mechanical Behavior of Materials",
    ]
  },
  {
    semester: "Semester VI",
    courses: [
      "MTL3080 — Iron and Steel Making",
      "MTL3070 — Extraction of Non Ferrous Metals",
      "MTL4320 — Magnetism and Magnetic Materials",
      "MTP3060 — Materials Processing and Manufacturing Lab",
      "MTL3050 — Computational Modelling of Materials",
      "MTL3090 — Smart Materials",
      "MTL3060 — Materials Processing and Manufacturing",
      "MTP3040 — Computational Modelling of Materials Lab",
    ]
  },
  {
    semester: "Semester VII",
    courses: [
      "LAL6080 — Principles of Macroeconomics",
      "MTL7550 — Advanced Semiconductor Materials & Device Applications",
      "MTL4350 — Polymeric Materials and Processing",
      "CIL4010 — Environmental Science",
      "MTD4010 — B Tech Project",
      "MTL7760 — Solar Cell Materials and Devices",
      "AIL6110 — Decision Sciences Applications",
    ]
  },
  {
    semester: "Semester VIII",
    courses: [
      "LAL4680 — Introduction to Indian Philosophy",
      "MSL71490 — Design Thinking",
      "MTL4340 — Synthesis and Processing of Semiconductors & 2D Materials",
      "CIL7390 — Climate Change and Impact",
      "MTL7490 — Processing and Engineering Applications of Magnetic Materials",
      "LAL4350 — Gandhian Thought",
    ]
  }
];

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
              <Link to="/education/iit-jodhpur" className="text-foreground hover:text-primary transition-colors">BTech</Link>
            </nav>

            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="relative order-2 lg:order-1">
                <p className="mb-5 font-body text-sm font-semibold uppercase tracking-widest text-primary">
                  B.Tech in Materials Engineering
                </p>
                <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl">
                  Indian Institute of Technology, Jodhpur
                </h1>
                <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  2022 - 2026
                </p>
              </div>

              <div className="relative order-1 flex justify-center lg:order-2 lg:justify-end">
                <div className="relative">
                  <div className="absolute -inset-4 -z-10 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-primary opacity-90 float-slow" />
                  <div className="absolute -right-8 -top-8 -z-10 h-24 w-24 rounded-full bg-red-muted opacity-60 float-medium" />
                  <img
                    src="https://events.iitj.ac.in/convo/2A9A1202.JPG"
                    alt="IIT Jodhpur Campus"
                    className="relative z-10 aspect-[3/2] w-full max-w-md rounded-[30%_70%_60%_40%/50%_40%_60%_50%] object-cover shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border px-6 py-16 md:px-12 md:py-24 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Overview</p>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">About this Degree</h2>
            </div>
            <div className="space-y-7 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                I completed my Bachelor of Technology in Materials Engineering from the Department of Metallurgical and Materials Engineering at IIT Jodhpur. Throughout my undergraduate tenure, I made a deliberate effort to look beyond the immediate confines of my core discipline, actively branching into mechanical engineering, electronics, and computer science through interdisciplinary projects that bridged empirical materials testing with cross-domain implementation.
              </p>
              <p>
                This broader exploration ran alongside a rigorous immersion in core materials science. Through comprehensive coursework and intensive laboratory engagements, I developed hands-on proficiency with pivotal analytical and characterisation techniques—including SEM, TEM, XRD, and UTM—alongside relevant simulation tools. My foundational training encompassed the metallurgy of iron and steel, the extraction and processing of ferrous and non-ferrous metals, fracture mechanics, creep mechanisms, and fatigue failure. Driven by a growing curiosity around energy and solid-state systems, I naturally gravitated toward battery materials, semiconductor synthesis, and functional electronic media, deliberately aligning my advanced electives with electronic materials.
              </p>
              <p>
                Beyond the purely analytical sphere, my academic outlook was significantly shaped by coursework in Design Thinking, which fundamentally refined my approach to problem-solving and user-centric ideation. Concurrently, exploratory electives across economics, sociology, philosophy, psychology, and cultural studies offered valuable perspective on the broader societal implications of technology. This multifaceted growth was nurtured by exceptional professors whose dedication made every lecture genuinely engaging, and the journey was enriched just as deeply by lifelong friendships, collaborative camaraderie, and countless unforgettable moments along the way.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-border px-6 py-16 md:px-12 md:py-24 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Academics</p>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Key Coursework</h2>
              <div className="mt-6 space-y-1 text-sm font-medium text-muted-foreground">
                <p>Roll No: <span className="text-foreground">B22MT024</span></p>
                <p>Email: <a href="mailto:b22mt024@alumni.iitj.ac.in" className="text-foreground hover:text-primary transition-colors">b22mt024@alumni.iitj.ac.in</a></p>
              </div>
            </div>
            <div className="grid gap-12 sm:grid-cols-2">
              {coursework.map((term) => (
                <div key={term.semester} className="space-y-4">
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {term.semester}
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground md:text-base">
                    {term.courses.map((course) => (
                      <li key={course} className="flex gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50" />
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border px-6 py-16 md:px-12 md:py-24 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Media</p>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Certificates & Photos</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProtectedImage src={degreeCert} alt="BTech Degree Certificate" />
              <ProtectedImage src="https://events.iitj.ac.in/convo/2A9A1202.JPG" alt="BTech Degree Certificate" />
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
