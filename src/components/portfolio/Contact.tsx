import { motion } from "motion/react";

const links = [
  { label: "Email", value: "sengly.seang@email.com", href: "mailto:sengly.seang@email.com" },
  { label: "Phone", value: "+855 12 345 678", href: "tel:+85512345678" },
  { label: "LinkedIn", value: "linkedin.com/in/seangsengly", href: "https://linkedin.com" },
  { label: "GitHub", value: "github.com/seangsengly", href: "https://github.com" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 lg:px-10 border-t border-border">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-6"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold/80">Contact</span>
          </div>
          <h2 className="font-display text-5xl lg:text-7xl leading-[0.95] text-foreground">
            Let's build <br />
            <span className="gold-text-gradient italic">quality together.</span>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground max-w-md">
            Open to senior QA automation roles, consulting engagements, and serious conversations
            about engineering quality.
          </p>
          <a
            href="mailto:sengly.seang@email.com"
            className="mt-10 inline-flex items-center gap-3 bg-gold text-primary-foreground px-8 py-4 text-sm uppercase tracking-[0.2em] font-medium hover:bg-gold-soft transition-all"
          >
            Start a conversation →
          </a>
        </motion.div>

        <div className="lg:col-span-6 lg:pt-20">
          <div className="divide-y divide-border border-y border-border">
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group flex items-center justify-between py-6 hover:px-3 transition-all"
              >
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground group-hover:text-gold transition-colors">
                  {l.label}
                </span>
                <span className="font-display text-xl text-foreground group-hover:text-gold transition-colors flex items-center gap-3">
                  {l.value}
                  <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto mt-32 pt-10 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-3">
          <span className="text-gold font-display text-lg">S.S</span>
          <span>© 2026 Seang Sengly. Crafted with discipline.</span>
        </div>
        <div className="uppercase tracking-[0.25em]">Phnom Penh · Available worldwide</div>
      </footer>
    </section>
  );
}
