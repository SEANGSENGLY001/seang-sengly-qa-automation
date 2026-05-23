import { useEffect, useState } from "react";
import { Home, User, Briefcase, FolderKanban, Mail } from "lucide-react";

const items = [
  { href: "#top", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#experience", label: "Work", icon: Briefcase },
  { href: "#projects", label: "Projects", icon: FolderKanban },
  { href: "#contact", label: "Contact", icon: Mail },
];

export function MobileNav() {
  const [active, setActive] = useState("#top");

  useEffect(() => {
    const ids = items.map((i) => i.href.slice(1));
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight / 3;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive("#" + current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="md:hidden fixed bottom-0 inset-x-0 z-50 pb-[env(safe-area-inset-bottom)]"
      aria-label="Mobile navigation"
    >
      <div className="mx-3 mb-3 rounded-2xl border border-border bg-background/85 backdrop-blur-2xl shadow-[0_-8px_40px_-12px_rgba(0,0,0,0.6)]">
        <ul className="flex items-stretch justify-between px-2 py-2">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.href;
            return (
              <li key={item.href} className="flex-1">
                <a
                  href={item.href}
                  className="relative flex flex-col items-center justify-center gap-1 py-1.5 px-1 rounded-xl transition-colors"
                >
                  <span
                    className={`flex items-center justify-center h-9 w-9 rounded-xl transition-all ${
                      isActive
                        ? "bg-gold/15 text-gold"
                        : "text-muted-foreground"
                    }`}
                  >
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                  </span>
                  <span
                    className={`text-[10px] tracking-[0.15em] uppercase transition-colors ${
                      isActive ? "text-gold" : "text-muted-foreground/80"
                    }`}
                  >
                    {item.label}
                  </span>
                  {isActive && (
                    <span className="absolute -top-0.5 left-1/2 -translate-x-1/2 h-0.5 w-6 rounded-full bg-gold" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
