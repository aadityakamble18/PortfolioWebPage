import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Search, SlidersHorizontal, Presentation as PresentationIcon, Eye } from "lucide-react";
import { useState, useMemo } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import nexorbitalThumbnail from "../assets/NexOrbital/nexorbital_rocket_flight.png";
import projectTwo from "../assets/project-2.jpg";
import fig2 from "../assets/Thumbnails/Heat Equation.png";
import pvcFig1 from "../assets/Thumbnails/Electric PVC Go-Kart.png";
import cryoThumbnail from "../assets/Thumbnails/Liquid Hydrogen.png";
import epdThumbnail from "../assets/Explore Page Discoverability/thumbnail.jpg";
import dieselSimulationThumbnail from "../assets/Diesel engine simulation/engine_geometry.png";
import flightNavigationThumbnail from "../assets/Thumbnails/FlightRoute Navigation.png";
import marketingThumbnail from "../assets/Marketingf campaign optimization/Screenshot 2026-09-17 173610.png";
import tachometerThumbnail from "../assets/Tachometer/dashboard-idle-1.jpg";
import presentation1Thumbnail from "../assets/Thumbnails/GiantMagnetoresistance.png";
import presentation2Thumbnail from "../assets/Thumbnails/CCI_Presentation.png";
import presentation3Thumbnail from "../assets/Thumbnails/Graphene Synthesys.png";
import presentation4Thumbnail from "../assets/Thumbnails/Indium Phosphate Solar Cell.png";
import presentation5Thumbnail from "../assets/Thumbnails/NMR.png";
import presentation6Thumbnail from "../assets/Thumbnails/Sol Gel Synthesis of BaTio3.png";
import presentation7Thumbnail from "../assets/Thumbnails/Transformation of water into ice .png";
import presentation8Thumbnail from "../assets/Thumbnails/Piezoelectric_Materials.png";
import presentation9Thumbnail from "../assets/Thumbnails/Case Study on Corrosion of marine Structures.png";
import presentation10Thumbnail from "../assets/Thumbnails/SAND_Batteries.png";
import presentation11Thumbnail from "../assets/Thumbnails/Polyacrylonitrile.png";
import presentation12Thumbnail from "../assets/Thumbnails/Eutectoid Transformation of Cu-Zn Alloy system.png";
import { Link } from "@tanstack/react-router";

type ProjectsSearch = {
  tab?: "projects" | "presentations";
};

export const Route = createFileRoute("/projects")({
  validateSearch: (search: Record<string, unknown>): ProjectsSearch => {
    return {
      tab: search.tab === "presentations" ? "presentations" : "projects",
    };
  },
  head: () => ({
    meta: [
      { title: "Projects — Aaditya Kamble" },
      {
        name: "description",
        content: "Explore the projects and case studies by Aaditya Kamble.",
      },
      { property: "og:title", content: "Projects — Aaditya Kamble" },
      {
        property: "og:description",
        content: "Explore the projects and case studies by Aaditya Kamble.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

export const projects = [
  {
    title: "Digital RPM Gauge for Legacy Engines",
    description:
      "A High-Resolution, Period-Based Digital Tachometer for Legacy Three-Cylinder Engines: Design and Implementation.",
    image: tachometerThumbnail,
    year: "05/2026",
    link: "/project/digital-rpm-gauge",
    subject: "Electronics",
    topic: "Embedded Systems",
  },
  {
    title: "Electric PVC Go-Kart",
    description:
      "Design, Modeling, and Control of a PVC-Based Electric Go-Kart with Embedded Traction Control and VRLA Battery Management System.",
    image: pvcFig1,
    year: "12/2025",
    link: "/project/pvc-ev",
    subject: "Automotive",
    topic: "Electric Vehicles",
  },
  {
    title: "Marketing Campaign Optimization Using LP",
    description:
      "A Predictive Framework for Marketing Campaign Optimization: Integrating Linear Regression and Linear Programming Algorithms.",
    image: marketingThumbnail,
    year: "11/2025",
    link: "/project/marketing-optimization",
    subject: "Data Science",
    topic: "Optimization",
  },
  {
    title: "Solving Heat Equation Using PINNs",
    description:
      "Estimating Thermal Properties via Physics-Informed Neural Networks. An inverse problem approach to characterize thermal properties from sensor data using DeepXDE.",
    image: fig2,
    year: "04/2025",
    link: "/project/thermal-pinn",
    subject: "Machine Learning",
    topic: "Physics",
  },
  {
    title: "NexOrbital: Model Roketry Launch Platform",
    description:
      "Design and sizing of the NexOrbital launch platform, developed for the IN-SPACE Model Rocketry India Student Competition (2024-2025) to support a 14 kg, transition-based rocket.",
    image: nexorbitalThumbnail,
    year: "12/2024",
    link: "/project/nexorbital",
    subject: "Aerospace",
    topic: "Mechanical Design",
  },
  {
    title: "Diesel Engine Simulation with diesel-biodiesel blends in ANSYS Forte",
    description:
      "Investigation of Diesel Biodiesel Surrogate Fuel Combustion and Emission Characteristics Using ANSYS Forte.",
    image: dieselSimulationThumbnail,
    year: "04/2024",
    link: "/project/diesel-simulation",
    subject: "Automotive",
    topic: "Simulation",
  },
  {
    title: "Flight Route Navigation using Graphs Algorithems",
    description:
      "Modeling airport networks and optimizing flight paths using C implementations of Dijkstra's, Bellman-Ford, and Floyd-Warshall graph algorithms.",
    image: flightNavigationThumbnail,
    year: "04/2024",
    link: "/project/flight-navigation",
    subject: "Computer Science",
    topic: "Algorithms",
  },
  {
    title: "Material Analysis of Cryogenic Liquid Hydrogen Storage Vessels using FEA",
    description:
      "Comparative Finite Element Analysis of Cryogenic Liquid Hydrogen Storage Vessels Under High-Pressure Conditions.",
    image: cryoThumbnail,
    year: "12/2023",
    link: "/project/cryo-fea",
    subject: "Materials Science",
    topic: "FEA",
  },
  {
    title: "Instagram Content Discoverability using Machine Learning",
    description:
      "Analysis of factors influencing content discoverability on Instagram using Machine Learning (Random Forest and Decision Trees) for enhanced engagement and visibility.",
    image: epdThumbnail,
    year: "11/2023",
    link: "/project/explore-page",
    subject: "Data Science",
    topic: "Machine Learning",
  },
  {
    title: "Biometric Smart Luggage",
    description:
      "A proactive anti-theft solution utilizing biometric authentication to lock the telescopic handle of a smart suitcase, complete with dual-power architecture and automated mass production strategy.",
    image: projectTwo,
    year: "06/2023",
    link: "/project/smart-luggage",
    subject: "Electronics",
    topic: "IoT & Product Design",
  },
];

const presentations = [
  {
    slug: "giant-magneto-resistance",
    title: "Giant Magneto Resistance",
    description: "An overview of Giant Magneto Resistance and its applications.",
    year: "04/2026",
    event: "Presentation",
    link: "https://www.canva.com/design/DAHFhLy4y3o/6-5gBqDb_GF9flSPnV0iEg/view",
    slides: "https://www.canva.com/design/DAHFhLy4y3o/6-5gBqDb_GF9flSPnV0iEg/view",
    image: presentation1Thumbnail,
    tags: ["Physics", "Magnetism"],
    subject: "Physics",
    topic: "Magnetism",
  },
  {
    slug: "climate-change-impact",
    title: "Climate Change & Impact",
    description: "Analyzing the global effects of climate change and mitigation strategies.",
    year: "04/2026",
    event: "Presentation",
    link: "https://www.canva.com/design/DAHGQhdH0Yo/I6i0dbdZkrRgtvYy9fnYsQ/view",
    slides: "https://www.canva.com/design/DAHGQhdH0Yo/I6i0dbdZkrRgtvYy9fnYsQ/view",
    image: presentation2Thumbnail,
    tags: ["Environment", "Climate"],
    subject: "Environment",
    topic: "Climate",
  },
  {
    slug: "graphene-synthesys",
    title: "Graphene Synthesys",
    description: "Exploring methods and innovations in Graphene synthesis.",
    year: "11/2025",
    event: "Presentation",
    link: "https://www.canva.com/design/DAG3KIRGw-0/57uXOs5OGDOwODwfURfclA/view",
    slides: "https://www.canva.com/design/DAG3KIRGw-0/57uXOs5OGDOwODwfURfclA/view",
    image: presentation3Thumbnail,
    tags: ["Materials", "Nanotech"],
    subject: "Materials Science",
    topic: "Nanotech",
  },
  {
    slug: "indium-phosphate-solar-cell",
    title: "Indium Phosphate Solar Cell",
    description: "An overview of Indium Phosphate solar cell materials and devices.",
    year: "11/2025",
    event: "Presentation",
    link: "https://www.canva.com/design/DAG3_D4HRcY/v7T73Masurawf948QHFITA/view",
    slides: "https://www.canva.com/design/DAG3_D4HRcY/v7T73Masurawf948QHFITA/view",
    image: presentation4Thumbnail,
    tags: ["Solar", "Materials", "Energy"],
    subject: "Renewable Energy",
    topic: "Solar Cells",
  },
  {
    slug: "nuclear-magnetic-resonance",
    title: "Nuclear Magnetic Resonance",
    description: "An overview of Nuclear Magnetic Resonance techniques and applications.",
    year: "10/2025",
    event: "Presentation",
    link: "https://www.canva.com/design/DAGicftxiUE/1pJpTbqIEjtd8e_0ChiakA/view",
    slides: "https://www.canva.com/design/DAGicftxiUE/1pJpTbqIEjtd8e_0ChiakA/view",
    image: presentation5Thumbnail,
    tags: ["Physics", "Chemistry"],
    subject: "Physics",
    topic: "Spectroscopy",
  },
  {
    slug: "sol-gel-synthesys-of-batio3",
    title: "Sol Gel Synthesys Of BaTiO3",
    description: "An overview of Sol Gel synthesis methods for BaTiO3.",
    year: "03/2025",
    event: "Presentation",
    link: "https://www.canva.com/design/DAGi0ezDM2I/Q9ckhoC9LYBmBr_Dme5Hfg/view",
    slides: "https://www.canva.com/design/DAGi0ezDM2I/Q9ckhoC9LYBmBr_Dme5Hfg/view",
    image: presentation6Thumbnail,
    tags: ["Materials", "Synthesis"],
    subject: "Materials Science",
    topic: "Synthesis",
  },
  {
    slug: "transformation-of-water-into-ice",
    title: "Transformation of water into ice",
    description: "Phase transition and thermodynamic properties of water freezing.",
    year: "03/2024",
    event: "Presentation",
    link: "https://www.canva.com/design/DAHVvPsGYL0/NO_FdbP-l0rVdG15o4IrIg/view",
    slides: "https://www.canva.com/design/DAHVvPsGYL0/NO_FdbP-l0rVdG15o4IrIg/view",
    image: presentation7Thumbnail,
    tags: ["Thermodynamics", "Physics"],
    subject: "Physics",
    topic: "Thermodynamics",
  },
  {
    slug: "piezoelectric-materials",
    title: "PiezoElectric Materials",
    description: "An overview of Piezoelectric materials and their applications.",
    year: "09/2024",
    event: "Presentation",
    link: "https://www.canva.com/design/DAHVvUCuqWE/UlG0joczjQwrl8S8VN8qrA/view",
    slides: "https://www.canva.com/design/DAHVvUCuqWE/UlG0joczjQwrl8S8VN8qrA/view",
    image: presentation8Thumbnail,
    tags: ["Materials", "Physics"],
    subject: "Physics",
    topic: "Materials Science",
  },
  {
    slug: "case-study-corrosion-marine-structures",
    title: "Case Study on Corrosion of marine Structures",
    description: "An analysis of corrosion processes in marine environments and their mitigation.",
    year: "04/2024",
    event: "Presentation",
    link: "https://www.canva.com/design/DAHVveBXFAI/05UYJIMCybLH2FFmzuuQIg/view",
    slides: "https://www.canva.com/design/DAHVveBXFAI/05UYJIMCybLH2FFmzuuQIg/view",
    image: presentation9Thumbnail,
    tags: ["Materials", "Corrosion", "Engineering"],
    subject: "Materials Science",
    topic: "Corrosion",
  },
  {
    slug: "sand-batteries",
    title: "Sand Batteries",
    description: "Exploring thermal energy storage using sand battery technology.",
    year: "04/2024",
    event: "Presentation",
    link: "https://www.canva.com/design/DAHVveJUXC0/DckumDdCyvk8j7q3jqewSw/view",
    slides: "https://www.canva.com/design/DAHVveJUXC0/DckumDdCyvk8j7q3jqewSw/view",
    image: presentation10Thumbnail,
    tags: ["Energy", "Sustainability", "Technology"],
    subject: "Renewable Energy",
    topic: "Energy Storage",
  },
  {
    slug: "polyacrylonitrile",
    title: "Polyacrylonitrile",
    description: "An overview of Polyacrylonitrile polymers and applications.",
    year: "09/2025",
    event: "Presentation",
    link: "https://www.canva.com/design/DAHVveJUXC0/DckumDdCyvk8j7q3jqewSw/view",
    slides: "https://www.canva.com/design/DAHVveJUXC0/DckumDdCyvk8j7q3jqewSw/view",
    image: presentation11Thumbnail,
    tags: ["Polymers", "Materials"],
    subject: "Materials Science",
    topic: "Polymers",
  },
  {
    slug: "eutectoid-transformation-cu-zn",
    title: "Eutectoid Transformation of Cu-Zn Alloy System",
    description: "Phase transformations and microstructural evolution in Copper-Zinc alloys.",
    year: "03/2025",
    event: "Presentation",
    link: "https://www.canva.com/design/DAHGqLDD70k/0quVtqiM5oXAPBTIUbrukw/view",
    slides: "https://www.canva.com/design/DAHGqLDD70k/0quVtqiM5oXAPBTIUbrukw/view",
    image: presentation12Thumbnail,
    tags: ["Metallurgy", "Alloys", "Phase Transformations"],
    subject: "Materials Science",
    topic: "Metallurgy",
  }
];

function PresentationCard({ talk }: { talk: typeof presentations[0] }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <article
          className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-2xl"
        >
      {/* Presentation image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={talk.image}
          alt={`First slide of ${talk.title}`}
          width={1536}
          height={960}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Hover gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Event badge */}
        <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
          <PresentationIcon className="h-3.5 w-3.5" />
          {talk.event}
        </span>

        {/* Year badge */}
        <span className="absolute right-4 top-4 rounded-full bg-foreground/80 px-2.5 py-1 text-xs font-medium text-background backdrop-blur-sm">
          {talk.year}
        </span>
      </div>

      {/* Card content */}
      <div className="flex flex-1 flex-col p-5 md:p-6">
        {/* Accent line */}
        <div className="h-1 w-8 rounded-full bg-primary transition-all duration-300 group-hover:w-12" />

        {/* Title */}
        <h2 className="mt-3 font-sans text-xl font-semibold leading-tight text-card-foreground transition-colors group-hover:text-primary">
          {talk.title}
        </h2>

        {/* Description */}
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {talk.description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {talk.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground transition-colors group-hover:border-primary/40"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View */}
        <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
          <a
            href={talk.slides}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-600 relative z-10"
          >
            Open Presentation
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Deck
          </span>
        </div>
      </div>
      </article>
    </DialogTrigger>
    
    <DialogContent className="max-w-5xl h-[85vh] w-[95vw] flex flex-col p-6 sm:p-8">
      <DialogHeader>
        <DialogTitle className="text-2xl font-display">{talk.title}</DialogTitle>
        <DialogDescription className="text-base mt-2">{talk.description}</DialogDescription>
      </DialogHeader>
      <div className="mt-4 flex-1 overflow-hidden rounded-lg border border-border bg-muted relative">
        <iframe
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full border-none"
          src={`${talk.slides}?embed`}
          allowFullScreen
          allow="fullscreen"
          title={talk.title}
        />
      </div>
    </DialogContent>
  </Dialog>
  );
}

function ProjectsPage() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const activeTab = search.tab || "projects";

  const setActiveTab = (tab: "projects" | "presentations") => {
    navigate({ search: { tab }, replace: true });
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [filterSubject, setFilterSubject] = useState("All");
  const [filterTopic, setFilterTopic] = useState("All");

  const subjects = useMemo(() => ["All", ...Array.from(new Set([...projects, ...presentations].map(p => p.subject).filter(Boolean)))], []);
  const topics = useMemo(() => ["All", ...Array.from(new Set([...projects, ...presentations].map(p => p.topic).filter(Boolean)))], []);

  const filteredProjects = useMemo(() => {
    let result = projects.filter(
      (project) =>
        (project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
         project.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (filterSubject === "All" || project.subject === filterSubject) &&
        (filterTopic === "All" || project.topic === filterTopic)
    );

    result.sort((a, b) => {
      if (sortBy === "newest" || sortBy === "oldest") {
        const [monthA, yearA] = a.year.split("/");
        const [monthB, yearB] = b.year.split("/");
        const dateA = new Date(parseInt(yearA), parseInt(monthA) - 1).getTime();
        const dateB = new Date(parseInt(yearB), parseInt(monthB) - 1).getTime();
        return sortBy === "newest" ? dateB - dateA : dateA - dateB;
      } else if (sortBy === "a-z") {
        return a.title.localeCompare(b.title);
      } else if (sortBy === "z-a") {
        return b.title.localeCompare(a.title);
      }
      return 0;
    });

    return result;
  }, [searchQuery, sortBy, filterSubject, filterTopic]);

  const filteredPresentations = useMemo(() => {
    let result = presentations.filter(
      (presentation) =>
        (presentation.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
         presentation.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (filterSubject === "All" || presentation.subject === filterSubject) &&
        (filterTopic === "All" || presentation.topic === filterTopic)
    );

    result.sort((a, b) => {
      if (sortBy === "newest" || sortBy === "oldest") {
        const [monthA, yearA] = a.year.split("/");
        const [monthB, yearB] = b.year.split("/");
        const dateA = new Date(parseInt(yearA), parseInt(monthA) - 1).getTime();
        const dateB = new Date(parseInt(yearB), parseInt(monthB) - 1).getTime();
        return sortBy === "newest" ? dateB - dateA : dateA - dateB;
      } else if (sortBy === "a-z") {
        return a.title.localeCompare(b.title);
      } else if (sortBy === "z-a") {
        return b.title.localeCompare(a.title);
      }
      return 0;
    });

    return result;
  }, [searchQuery, sortBy, filterSubject, filterTopic]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <FloatingShapes />
      <main className="relative z-10">
        <section className="px-6 pb-20 pt-10 md:px-12 md:pb-28 md:pt-20 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 md:mb-16">
              <p className="mb-5 font-body text-sm font-semibold uppercase tracking-widest text-primary">
                AADITYA KAMBLE / PROJECTS
              </p>
              <h1 className="max-w-4xl font-display text-5xl font-bold leading-[0.95] tracking-tight text-foreground md:text-6xl lg:text-7xl">
                Projects
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                A collection of projects exploring visual identity, editorial design, and digital experiences.
              </p>

              <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center">
                <div className="relative flex-1 max-w-md">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <Search className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="block w-full rounded-full border border-border bg-background py-3 pl-12 pr-4 text-sm font-medium text-foreground transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                
                <div className="flex flex-wrap items-center gap-3">
                  <Select value={filterSubject} onValueChange={setFilterSubject}>
                    <SelectTrigger className="w-[160px] rounded-full">
                      <SelectValue placeholder="Subject" />
                    </SelectTrigger>
                    <SelectContent>
                      {subjects.map((s) => (
                        <SelectItem key={s} value={s}>{s === "All" ? "All Subjects" : s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={filterTopic} onValueChange={setFilterTopic}>
                    <SelectTrigger className="w-[160px] rounded-full">
                      <SelectValue placeholder="Topic" />
                    </SelectTrigger>
                    <SelectContent>
                      {topics.map((t) => (
                        <SelectItem key={t} value={t}>{t === "All" ? "All Topics" : t}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[160px] rounded-full">
                      <div className="flex items-center gap-2">
                        <SlidersHorizontal className="w-4 h-4" />
                        <SelectValue placeholder="Sort by" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="oldest">Oldest First</SelectItem>
                      <SelectItem value="a-z">Title (A-Z)</SelectItem>
                      <SelectItem value="z-a">Title (Z-A)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-12 flex items-center gap-8 border-b border-border pb-4">
                <button
                  onClick={() => setActiveTab("projects")}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeTab === "projects"
                      ? "text-foreground underline decoration-red-500 decoration-2 underline-offset-8"
                      : "text-muted-foreground"
                  }`}
                >
                  Projects
                </button>
                <button
                  onClick={() => setActiveTab("presentations")}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeTab === "presentations"
                      ? "text-foreground underline decoration-red-500 decoration-2 underline-offset-8"
                      : "text-muted-foreground"
                  }`}
                >
                  Presentations
                </button>
              </div>
            </div>

            {activeTab === "projects" ? (
              <div className="grid gap-12 md:gap-16 lg:gap-24">
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project, index) => (
                    <article
                      key={project.title}
                      className={`group relative grid items-center gap-8 md:grid-cols-2 ${index % 2 !== 0 ? "md:grid-cols-[1fr_1.2fr]" : "md:grid-cols-[1.2fr_1fr]"
                        }`}
                    >
                    <div
                      className={`relative overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-xl ${index % 2 !== 0 ? "md:order-2" : ""
                        }`}
                    >
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted sm:aspect-[16/9] md:aspect-[4/3] lg:aspect-[3/2]">
                        <img
                          src={project.image}
                          alt={project.title}
                          width={1024}
                          height={768}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    <div className={`p-4 md:p-8 ${index % 2 !== 0 ? "md:order-1" : ""}`}>
                      <div className="mb-4 flex flex-wrap items-center gap-2 justify-between">
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                          {project.year}
                        </span>
                        <div className="flex gap-2">
                          <Badge variant="outline" className="text-xs text-muted-foreground">{project.subject}</Badge>
                          <Badge variant="secondary" className="text-xs">{project.topic}</Badge>
                        </div>
                      </div>
                      <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
                        {project.title}
                      </h2>
                      <p className="mb-8 text-base leading-relaxed text-muted-foreground md:text-lg">
                        {project.description}
                      </p>
                      <Link
                        to={project.link || "#"}
                        className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                      >
                        View Project
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                ))
              ) : (
                <div className="py-12 text-center text-muted-foreground">
                  <p>No projects found matching "{searchQuery}".</p>
                </div>
              )}
            </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredPresentations.length > 0 ? (
                  filteredPresentations.map((presentation) => (
                    <PresentationCard key={presentation.slug} talk={presentation} />
                  ))
                ) : (
                  <div className="col-span-full py-12 text-center text-muted-foreground">
                    <p>No presentations found matching "{searchQuery}".</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

function FloatingShapes() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute left-[8%] top-[22%] h-16 w-16 rounded-[40%_60%_60%_40%/50%_50%_50%_50%] bg-primary/20 float-slow" />
      <div className="absolute right-[10%] top-[50%] h-20 w-20 rounded-[65%_35%_45%_55%/40%_55%_45%_60%] bg-red-muted/20 drift-x" />
      <div className="absolute bottom-[15%] left-[35%] h-10 w-10 rounded-full bg-primary/20 float-medium" />
    </div>
  );
}
