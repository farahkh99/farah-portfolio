
import Link from "next/link";

import AnimatedBackground from "@/components/AnimatedBackground";
import ArchitectureFlow from "./ArchitectureFlow";
import ProjectCaseStudy from "./ProjectCaseStudy";
import TechnologyBadge from "./TechnologyBadge";

import type { Project } from "@/types/project";

interface ProjectDetailsProps {
  project: Project;
}

export default function ProjectDetails({
  project,
}: ProjectDetailsProps) {
  return (
    <main className="relative min-h-screen bg-background px-6 py-24 text-foreground">
      <AnimatedBackground />

      <div className="relative z-10 mx-auto max-w-4xl">
        <Link
          href="/#work"
          className="text-sm text-accent transition-colors hover:text-accent-hover"
        >
          ← Back to Projects
        </Link>

        <p className="mt-12 text-sm font-medium text-accent">
          {project.category}
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          {project.title}
        </h1>

        <p className="mt-8 text-lg leading-8 text-slate-400">
          {project.description}
        </p>

        {/* Technologies */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold">
            Technologies & Integrations
          </h2>

          <div className="mt-6 flex flex-wrap gap-4">
            {project.technologies.map((technology) => (
              <TechnologyBadge
                key={technology}
                name={technology}
              />
            ))}
          </div>
        </section>

        {/* Engineering case study */}
        {project.caseStudy && (
          <ProjectCaseStudy
            caseStudy={project.caseStudy}
          />
        )}

        {/* Architecture diagram */}
        {project.architecture && (
          <ArchitectureFlow
            steps={project.architecture}
          />
        )}
      </div>
    </main>
  );
}
