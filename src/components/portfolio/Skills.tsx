import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";

const groups = [
  {
    title: "Testing Disciplines",
    items: ["Automation Testing", "Web & Mobile Testing", "API Testing", "Performance Testing", "CI/CD Integration"],
  },
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Java", "Groovy"],
  },
  {
    title: "Tools & Frameworks",
    items: ["Playwright", "Cypress", "Selenium", "Katalon Studio", "Postman", "JMeter", "Appium"],
  },
  {
    title: "Version Control",
    items: ["Git", "GitHub", "GitLab", "Bitbucket"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 lg:px-10 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Capabilities"
          title="A toolkit refined through practice."
          description="The systems, languages, and tools I reach for when building quality into the engineering process."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {groups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: gi * 0.08 }}
              className="bg-background p-8 group hover:bg-surface transition-colors duration-500"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs font-mono text-gold">0{gi + 1}</span>
                <span className="h-px w-6 bg-gold/40" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-6">{group.title}</h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted-foreground flex items-center gap-3 group-hover:text-foreground transition-colors"
                  >
                    <span className="h-px w-3 bg-gold/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
