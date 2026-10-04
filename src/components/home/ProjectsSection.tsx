
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
        A selection of my professional engineering
        experience and personal development work.
        Employer-owned projects are described at a
        high level without publishing proprietary
        source code or internal materials.
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
