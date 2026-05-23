import { motion } from "motion/react";

const statements = [
  "I think clearly before I act.",
  "I test with purpose, not just process.",
  "I build systems that save time and reduce risk.",
  "I care about quality because quality protects trust.",
];

export function Strength() {
  return (
    <section className="relative py-32 px-6 lg:px-10 border-t border-border overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/5 blur-[140px]" />
      </div>
      <div className="relative max-w-5xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="h-px w-12 bg-gold" />
          <span className="text-xs uppercase tracking-[0.3em] text-gold/80">Presence</span>
          <span className="h-px w-12 bg-gold" />
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-foreground"
        >
          Calm under pressure. <br />
          Precise in execution. <br />
          <span className="gold-text-gradient italic">Strong in ownership.</span>
        </motion.h2>

        <div className="mt-20 grid sm:grid-cols-2 gap-px bg-border max-w-3xl mx-auto">
          {statements.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="bg-background p-8 text-left"
            >
              <div className="text-gold text-xs font-mono mb-3">— {String(i + 1).padStart(2, "0")}</div>
              <p className="text-lg text-foreground/90 leading-snug">{s}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
