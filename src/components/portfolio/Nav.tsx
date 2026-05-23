import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-background/80 backdrop-blur-xl border-b border-border"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="text-gold font-display text-xl tracking-wider">S.S</span>
          <span className="hidden sm:block h-4 w-px bg-border" />
          <span className="hidden sm:block text-xs uppercase tracking-[0.25em] text-muted-foreground">
            QA Automation
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-gold transition-colors tracking-wide relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <a
          href="https://www.linkedin.com/in/seang-sengly-120a4a254"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.preventDefault();
            window.open("https://www.linkedin.com/in/seang-sengly-120a4a254", "_blank", "noopener,noreferrer");
          }}
          className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold border border-gold/40 px-4 py-2 hover:bg-gold hover:text-primary-foreground transition-all"
        >
          CV
        </a>
      </div>
    </header>
  );
}
