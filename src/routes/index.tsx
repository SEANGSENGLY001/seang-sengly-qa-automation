import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Strength } from "@/components/portfolio/Strength";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Seang Sengly — QA Automation Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Seang Sengly, a QA Automation Engineer building reliable digital products through smart testing, automation, and disciplined execution.",
      },
      { property: "og:title", content: "Seang Sengly — QA Automation Engineer" },
      {
        property: "og:description",
        content:
          "Automation frameworks, test strategy, and engineering quality that helps teams ship with confidence.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Strength />
      <Contact />
    </main>
  );
}
