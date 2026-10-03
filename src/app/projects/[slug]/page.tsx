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
        {project.caseStudy && (
  <section className="mt-16 border-t border-white/10 pt-10">
    <h2 className="text-3xl font-bold">
      Engineering Case Study
    </h2>

    <div className="mt-8 grid gap-6 md:grid-cols-3">
      {[
        {
          title: "The Problem",
          content: project.caseStudy.problem,
        },
        {
          title: "My Implementation",
          content: project.caseStudy.implementation,
        },
        {
          title: "The Result",
          content: project.caseStudy.result,
        },
      ].map((section) => (
        <article
          key={section.title}
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <h3 className="text-lg font-semibold text-teal-400">
            {section.title}
          </h3>

          <p className="mt-4 leading-7 text-slate-400">
            {section.content}
          </p>
        </article>
      ))}
    </div>
  </section>
)}
      </div>
    </main>
  );
}