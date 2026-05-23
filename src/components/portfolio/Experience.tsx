import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";

const roles = [
  {
    period: "Present",
    title: "Automation Quality Assurance Officer",
    company: "Banking & Fintech",
    points: [
      "Designed and maintained scalable automation frameworks across web and mobile platforms.",
      "Increased regression coverage and cut manual testing effort by significant margins.",
      "Integrated automated suites into CI/CD pipelines for continuous quality feedback.",
      "Partnered with developers and product owners to embed quality earlier in the lifecycle.",
    ],
  },
  {
    period: "Prior",
    title: "System Tester & Automation Tester",
    company: "Enterprise Software",
    points: [
      "Built end-to-end test strategies for complex transactional systems.",
      "Authored reusable automation libraries that accelerated team velocity.",
      "Led defect triage and root-cause analysis across cross-functional teams.",
      "Owned reporting frameworks that made quality measurable to stakeholders.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6 lg:px-10 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="Experience" title="Built where quality is measured." />

        <div className="relative">
          <div className="absolute left-0 md:left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-gold/60 via-border to-transparent" />
          <div className="space-y-20">
            {roles.map((role, i) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="grid md:grid-cols-4 gap-8 relative pl-8 md:pl-0"
              >
                <div className="absolute left-0 md:left-1/4 -translate-x-1/2 top-2 w-3 h-3 rounded-full bg-gold ring-4 ring-background" />
                <div className="md:pr-12 md:text-right">
                  <div className="text-xs uppercase tracking-[0.25em] text-gold/80 mb-2">{role.period}</div>
                  <div className="text-sm text-muted-foreground">{role.company}</div>
                </div>
                <div className="md:col-span-3 md:pl-12">
                  <h3 className="font-display text-3xl text-foreground mb-5">{role.title}</h3>
                  <ul className="space-y-3">
                    {role.points.map((p) => (
                      <li key={p} className="flex gap-4 text-foreground/80 leading-relaxed">
                        <span className="text-gold mt-2 shrink-0">—</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
