import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.id === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-slate-100">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/#work"
          className="text-sm text-teal-400 hover:text-teal-300"
        >
          ← Back to Projects
        </Link>

        <p className="mt-12 text-sm font-medium text-teal-400">
          {project.category}
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          {project.title}
        </h1>

        <p className="mt-8 text-lg leading-8 text-slate-400">
          {project.description}
        </p>
      </div>
    </main>
  );
}