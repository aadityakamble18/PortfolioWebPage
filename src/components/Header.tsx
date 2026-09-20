import { Link } from "@tanstack/react-router";

export function Header() {
  const activeProps = {
    className: "text-foreground underline decoration-red-500 decoration-2 underline-offset-4",
  };

  return (
    <header className="relative z-20 flex items-center justify-between px-6 py-6 md:px-12 lg:px-16 bg-background">
      <Link
        to="/"
        className="font-display text-sm font-bold tracking-tight uppercase transition-colors hover:text-primary"
        activeProps={activeProps}
        activeOptions={{ exact: true }}
      >
        Aaditya Kamble
      </Link>
      <nav className="hidden items-center gap-8 md:flex">
        <Link
          to="/projects"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          activeProps={activeProps}
        >
          Projects
        </Link>
        <Link
          to="/about"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          activeProps={activeProps}
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          activeProps={activeProps}
        >
          Contact
        </Link>
      </nav>
      <div className="flex items-center gap-2 md:hidden">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-2 text-xs font-medium transition-colors hover:border-primary hover:text-primary"
          activeProps={activeProps}
        >
          Projects
        </Link>
        <Link
          to="/about"
          className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-2 text-xs font-medium transition-colors hover:border-primary hover:text-primary"
          activeProps={activeProps}
        >
          About
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-2 text-xs font-medium transition-colors hover:border-primary hover:text-primary"
          activeProps={activeProps}
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
