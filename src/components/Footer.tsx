import { ArrowUpRight, Linkedin, Github, Twitter, Instagram } from "lucide-react";
import versionData from "../version.json";

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aadityakamble18/", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/aadityakamble18", icon: Github },
  { label: "Twitter", href: "https://x.com/redfire_1914", icon: Twitter },
  { label: "Instagram", href: "https://www.instagram.com/aadityakamble._/", icon: Instagram },
];

export function Footer() {
  return (
    <footer className="relative z-10 bg-foreground px-6 py-12 text-background md:px-12 md:py-16 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <p className="font-display text-2xl font-bold tracking-tight">Aaditya Kamble</p>
          <p className="mt-1 text-sm text-background/70">Materials Engineer</p>
          <p className="mt-1 text-xs font-mono text-background/50">Version {Number(versionData.version).toFixed(3)}</p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex flex-wrap gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/80 transition-colors hover:text-primary"
                  title={link.label}
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{link.label}</span>
                </a>
              );
            })}
          </div>
          <a
            href="https://aadityakamble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-background/80 transition-colors hover:text-primary mt-2"
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
