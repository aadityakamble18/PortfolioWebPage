import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import portrait from "../assets/portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Aaditya Kamble — Portfolio" },
      {
        name: "description",
        content: "Learn about Aaditya Kamble, his background, technical work, and creative pursuits.",
      },
      { property: "og:title", content: "About Aaditya Kamble — Portfolio" },
      {
        property: "og:description",
        content: "Learn about Aaditya Kamble, his background, technical work, and creative pursuits.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/aadityakamble" },
  { label: "GitHub", href: "https://github.com/aadityakamble" },
  { label: "Twitter", href: "https://twitter.com/aadityakamble" },
  { label: "Instagram", href: "https://instagram.com/aadityakamble" },
];

function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <FloatingShapes />
      <header className="relative z-20 flex items-center justify-between px-6 py-6 md:px-12 lg:px-16">
        <Link
          to="/"
          className="font-display text-sm font-bold uppercase transition-colors hover:text-primary"
        >
          Aaditya Kamble
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Home
          </Link>
          <a
            href="mailto:aaditya@example.com"
            className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-primary sm:block"
          >
            Contact
          </a>
        </nav>
      </header>

      <main className="relative z-10">
        <section className="px-6 pb-20 pt-10 md:px-12 md:pb-28 md:pt-20 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-primary">
                About / Aaditya Kamble
              </p>
              <h1 className="max-w-4xl font-display text-5xl font-bold leading-[0.95] md:text-7xl lg:text-8xl">
                Curious by nature.
                <br />
                Precise by practice.
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                I am building a living record of my technical work, creative explorations, and the
                experiences that continue to shape how I think and make.
              </p>
            </div>
            <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:ml-auto">
              <div className="absolute -inset-4 -z-10 rounded-[42%_58%_65%_35%/45%_40%_60%_55%] bg-primary float-slow" />
              <img
                src={portrait}
                alt="Portrait of Aaditya Kamble"
                width={420}
                height={420}
                className="aspect-square w-full rounded-[32%_68%_58%_42%/48%_42%_58%_52%] object-cover"
              />
            </div>
          </div>
        </section>

        <section className="border-y border-border px-6 py-16 md:px-12 md:py-24 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Profile</p>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">The longer version</h2>
            </div>
            <div className="space-y-7 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Greetings, I am Aaditya Kamble, and welcome to my personal portfolio. Whether you
                arrived via a direct link or through independent curiosity, I have endeavoured to
                consolidate a comprehensive overview of my background, technical repertoire, and
                creative undertakings within this dynamic, interactive space.
              </p>
              <p>
                The platform is arranged into dedicated areas for my personal profile, practical
                projects, professional experience, extracurricular engagements, and direct
                correspondence. You will find biographical highlights, complete GitHub repositories
                with downloadable technical reports, and an account of my broader pursuits.
              </p>
              <p>
                Further enhancements remain underway. If you encounter a functional anomaly while
                exploring, please report it through the communication channel below.
              </p>
              <Button asChild>
                <a href="mailto:aaditya@example.com">
                  <Mail className="h-4 w-4" />
                  Get in touch
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 bg-foreground px-6 py-12 text-background md:px-12 md:py-16 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="font-display text-2xl font-bold">Aaditya Kamble</p>
            <p className="mt-1 text-sm text-background/70">Product designer &amp; developer</p>
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
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
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