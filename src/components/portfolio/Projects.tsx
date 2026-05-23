import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";

const projects = [
  {
    n: "01",
    title: "Mobile Banking Automation",
    problem: "Manual regression for a banking app slowed releases and risked production defects.",
    tools: ["Appium", "Java", "TestNG", "Jenkins"],
    result: "Cut regression cycle from 3 days to 4 hours with 85% automated coverage.",
  },
  {
    n: "02",
    title: "Web Regression Automation",
    problem: "A growing web product needed reliable cross-browser regression at every merge.",
    tools: ["Playwright", "TypeScript", "GitHub Actions"],
    result: "Stabilized nightly suite with sub-2% flake rate across 600+ scenarios.",
  },
  {
    n: "03",
    title: "API Testing Suite",
    problem: "Backend services lacked contract-level validation across environments.",
    tools: ["Postman", "Newman", "Bitbucket Pipelines"],
    result: "Caught regressions pre-deploy and improved API reliability across releases.",
  },
  {
    n: "04",
    title: "Performance Testing Dashboard",
    problem: "Load testing existed but results weren't visible or actionable for stakeholders.",
    tools: ["JMeter", "Grafana", "InfluxDB"],
    result: "Real-time performance visibility that drove measurable latency improvements.",
  },
  {
    n: "05",
    title: "QA Reporting System",
    problem: "Quality metrics were scattered and hard to communicate to leadership.",
    tools: ["Allure", "Node.js", "GitLab CI"],
    result: "Unified reporting that turned test outcomes into a clear engineering KPI.",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 lg:px-10 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Selected Work"
          title="Projects where quality moved the needle."
          description="A focused selection of engagements where testing strategy directly changed how teams shipped."
        />

        <div className="divide-y divide-border border-y border-border">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className="group grid md:grid-cols-12 gap-6 py-10 hover:bg-surface/40 transition-colors px-2 md:px-6"
            >
              <div className="md:col-span-1 font-mono text-xs text-gold pt-2">{p.n}</div>
              <div className="md:col-span-4">
                <h3 className="font-display text-2xl lg:text-3xl text-foreground group-hover:text-gold transition-colors">
                  {p.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tools.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground border border-border px-2 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-4 text-muted-foreground leading-relaxed">{p.problem}</div>
              <div className="md:col-span-3 text-foreground/90 leading-relaxed border-l border-gold/40 pl-5">
                {p.result}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
