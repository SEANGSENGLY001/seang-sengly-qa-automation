import { motion } from "motion/react";
import profile from "@/assets/profile_circle.png";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Atmospheric glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      {/* Light streaks */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 order-2 lg:order-1"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12 bg-gold" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold/80">
              Portfolio · 2026
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] text-foreground">
            Hi, I'm <br className="hidden sm:block" />
            <span className="gold-text-gradient italic">Seang Sengly.</span>
          </h1>

          <p className="mt-8 text-xl lg:text-2xl text-foreground/85 font-light leading-snug max-w-2xl">
            QA Automation Engineer building reliable digital products through
            smart testing, automation, and disciplined execution.
          </p>

          <p className="mt-6 text-base text-muted-foreground max-w-xl leading-relaxed">
            I help teams ship faster with confidence — designing automation
            frameworks, improving test coverage, and turning quality into a
            measurable engineering advantage.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 bg-gold text-primary-foreground px-7 py-3.5 text-sm uppercase tracking-[0.2em] font-medium hover:bg-gold-soft transition-all"
            >
              View My Work
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="https://www.linkedin.com/in/seang-sengly-120a4a254"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://www.linkedin.com/in/seang-sengly-120a4a254", "_blank", "noopener,noreferrer");
              }}
              className="group inline-flex items-center gap-3 border border-border hover:border-gold text-foreground px-7 py-3.5 text-sm uppercase tracking-[0.2em] font-medium transition-all"
            >
              Download CV
              <span className="text-gold">↓</span>
            </a>
          </div>

          <div className="mt-16 flex items-center gap-8 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <div>
              <div className="text-gold font-display text-2xl normal-case tracking-normal">5+</div>
              <div className="mt-1">Years</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="text-gold font-display text-2xl normal-case tracking-normal">20+</div>
              <div className="mt-1">Projects</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="text-gold font-display text-2xl normal-case tracking-normal">∞</div>
              <div className="mt-1">Tests Run</div>
            </div>
          </div>
        </motion.div>

        {/* Right: portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="lg:col-span-5 order-1 lg:order-2 relative flex justify-center"
        >
          <div className="relative w-[280px] sm:w-[360px] lg:w-[440px] aspect-square">
            {/* Aura layers */}
            <motion.div
              animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.7, 0.5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-20 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.78 0.13 82 / 0.35) 0%, transparent 60%)",
                filter: "blur(50px)",
              }}
            />
            <div
              className="absolute -inset-6 rounded-full border border-gold/30"
              style={{ boxShadow: "0 0 80px oklch(0.78 0.13 82 / 0.2)" }}
            />
            <div className="absolute -inset-2 rounded-full border border-gold/50" />

            {/* Rotating gold ring accent */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-10 rounded-full pointer-events-none"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gold" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold/60" />
            </motion.div>

            <div className="relative w-full h-full rounded-full overflow-hidden">
              <img
                src={profile}
                alt="Seang Sengly — QA Automation Engineer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-8 w-px bg-gradient-to-b from-gold to-transparent"
        />
      </div>
    </section>
  );
}
