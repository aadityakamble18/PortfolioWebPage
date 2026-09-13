import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";

import portrait from "../assets/portrait.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Aaditya Kamble — Portfolio" },
      {
        name: "description",
        content: "Get in touch with Aaditya Kamble for collaborations, opportunities, or just to say hello.",
      },
      { property: "og:title", content: "Contact Aaditya Kamble — Portfolio" },
      {
        property: "og:description",
        content: "Get in touch with Aaditya Kamble for collaborations, opportunities, or just to say hello.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/aadityakamble" },
  { label: "GitHub", href: "https://github.com/aadityakamble" },
  { label: "Twitter", href: "https://twitter.com/aadityakamble" },
  { label: "Instagram", href: "https://instagram.com/aadityakamble" },
];

function ContactPage() {
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
          <Link
            to="/about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            About
          </Link>
        </nav>
      </header>

      <main className="relative z-10">
        <section className="px-6 pb-20 pt-10 md:px-12 md:pb-28 md:pt-20 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-primary">
                Contact / Aaditya Kamble
              </p>
              <h1 className="max-w-4xl font-display text-5xl font-bold leading-[0.95] md:text-7xl lg:text-8xl">
                Let&apos;s make
                <br />
                something together.
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Open to collaborations, freelance projects, and conversations about design,
                development, or anything in between.
              </p>
              <a
                href="mailto:aaditya@example.com"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Mail className="h-4 w-4" />
                aaditya@example.com
              </a>
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
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Elsewhere</p>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Find me online</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-lg border border-border p-4 transition-colors hover:border-primary hover:text-primary"
                >
                  <span className="font-medium">{link.label}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
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
      <div className="absolute left-[8%] top-[22%] h-16 w-16 rounded-[40%_60%_60%_40%/50%_50%_50%_50%] bg-primary/20 float-slow" />
      <div className="absolute right-[10%] top-[50%] h-20 w-20 rounded-[65%_35%_45%_55%/40%_55%_45%_60%] bg-red-muted/20 drift-x" />
      <div className="absolute bottom-[15%] left-[35%] h-10 w-10 rounded-full bg-primary/20 float-medium" />
    </div>
  );
}
