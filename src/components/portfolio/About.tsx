import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section id="about" className="relative py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionHeader eyebrow="About" title="Quality is a discipline, not a checkbox." />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="lg:col-span-7 space-y-6 text-lg text-foreground/85 leading-relaxed lg:pt-24"
        >
          <p>
            I'm a QA Automation Engineer who treats software quality as engineering work —
            measurable, repeatable, and owned. My background spans system testing, automation
            framework design, and quality strategy across web, mobile, and API layers.
          </p>
          <p className="text-muted-foreground">
            What drives me is the discipline behind it. Writing tests that actually catch what
            matters. Building frameworks teams want to use. Turning slow, painful release cycles
            into something teams can trust. I care about precision, ownership, and the quiet
            confidence that comes from systems built to hold up under pressure.
          </p>
          <div className="pt-6 grid grid-cols-2 gap-6 border-t border-border">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-gold/80 mb-2">Focus</div>
              <div className="text-foreground">Automation · Strategy · Reliability</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-gold/80 mb-2">Based in</div>
              <div className="text-foreground">Phnom Penh, Cambodia</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
