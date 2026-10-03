import Link from "next/link";
import type { Project } from "@/types/project";
import TechnologyBadge from "./TechnologyBadge";
import {
  MonitorSmartphone,
  Factory,
  Fingerprint,
  FileText,
  FolderKanban,
  type LucideIcon,
} from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

const projectIcons: Record<string, LucideIcon> = {
  "ctc-cashier": MonitorSmartphone,
  dibsy: Factory,
  timegate: Fingerprint,
  "ctc-invoice": FileText,
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const ProjectIcon = projectIcons[project.id] ?? FolderKanban;
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group block h-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-400"
    >
      <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-teal-400/40 motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:-translate-y-1">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-400/10 text-teal-400 transition-colors group-hover:bg-teal-400/20">
            <ProjectIcon
              aria-hidden="true"
              className="h-6 w-6"
              strokeWidth={1.8}
            />
          </div>

          <div className="min-w-0">
            <h3 className="text-2xl font-semibold">{project.title}</h3>

            <p className="mt-1 text-sm text-teal-400">{project.category}</p>
          </div>
        </div>

        <p className="mt-5 mb-6 leading-7 text-slate-400">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap content-start gap-3 border-t border-white/10 pt-6">
          {project.technologies.map((technology) => (
            <TechnologyBadge key={technology} name={technology} />
          ))}
        </div>
      </article>
    </Link>
  );
}
