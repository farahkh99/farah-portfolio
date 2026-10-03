import type { Project } from "@/types/project";
import TechnologyBadge from "./TechnologyBadge";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <Link
        href={`/projects/${project.id}`}
        className="group block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-400"
    >
        <article className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-teal-400/40">
        <h3 className="text-2xl font-semibold">
            {project.title}
        </h3>

        <p className="mt-2 text-sm text-teal-400">
            {project.category}
        </p>

        <p className="mt-5 leading-7 text-slate-400">
            {project.description}
        </p>
            <div className="mt-6 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
                <TechnologyBadge
                key={technology}
                name={technology}
                />
            ))}
            </div>
        </article>
    </Link>
  );
}