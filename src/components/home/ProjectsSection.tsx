
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export default function ProjectsSection() {
  return (
    <section
      id="work"
      className="scroll-mt-24 border-t border-white/10 py-24"
    >
      <p className="text-sm font-semibold tracking-widest text-accent">
        ENGINEERING WORK
      </p>

      <h2 className="mt-4 text-4xl font-bold">
        Selected Work
      </h2>

      <p className="mt-5 max-w-2xl leading-7 text-slate-400">
        Engineering case studies covering production business
        systems, backend development, device integrations,
        and database-driven applications. Employer-owned
        source code and customer details remain private.
      </p>

      <div className="mt-12 grid gap-6 md:auto-rows-fr md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}
