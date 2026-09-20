import { Link, useMatchRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export function Header() {
  const matchRoute = useMatchRoute();

  const navLinks = [
    { to: "/projects", label: "Projects" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const isHomeActive = matchRoute({ to: "/", fuzzy: false });

  return (
    <header className="relative z-20 flex items-center justify-between px-6 py-6 md:px-12 lg:px-16 bg-background">
      <Link
        to="/"
        className={`font-display text-sm font-bold tracking-tight uppercase transition-colors hover:text-primary relative ${
          isHomeActive ? "text-foreground" : "text-muted-foreground"
        }`}
      >
        Aaditya Kamble
        {isHomeActive && (
          <motion.div
            layoutId="header-underline"
            className="absolute left-0 right-0 -bottom-1 h-[2px] bg-red-500"
            initial={false}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
      </Link>
      
      <nav className="hidden items-center gap-8 md:flex">
        {navLinks.map((link) => {
          const isActive = matchRoute({ to: link.to, fuzzy: true });
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`relative text-sm font-medium transition-colors hover:text-primary ${
                isActive ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {link.label}
              {isActive && (
                <motion.div
                  layoutId="header-underline"
                  className="absolute left-0 right-0 -bottom-1 h-[2px] bg-red-500"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center gap-2 md:hidden">
        {navLinks.map((link) => {
          const isActive = matchRoute({ to: link.to, fuzzy: true });
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`inline-flex items-center gap-1 rounded-full border px-3 py-2 text-xs font-medium transition-colors hover:border-primary hover:text-primary ${
                isActive ? "border-red-500 text-foreground" : "border-border text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
