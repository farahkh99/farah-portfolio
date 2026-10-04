import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import ArchitectureFlow from "@/components/projects/ArchitectureFlow";
import TechnologyBadge from "@/components/projects/TechnologyBadge";
import type { Metadata } from "next";
import AnimatedBackground from "@/components/AnimatedBackground";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find((item) => item.id === slug);

  if (!project) {
    notFound();
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-slate-100">
      <AnimatedBackground />
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

        <h1 className="mt-4 text-5xl font-bold">{project.title}</h1>

        <p className="mt-8 text-lg leading-8 text-slate-400">
          {project.description}
        </p>
        <section className="mt-12">
          <h2 className="text-xl font-semibold">Technologies & Integrations</h2>

          <div className="mt-6 flex flex-wrap gap-4">
            {project.technologies.map((technology) => (
              <TechnologyBadge key={technology} name={technology} />
            ))}
          </div>
        </section>
        {project.caseStudy && (
          <section className="mt-16 border-t border-white/10 pt-10">
            <h2 className="text-3xl font-bold">Engineering Case Study</h2>

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
        {project.architecture && (
          <ArchitectureFlow steps={project.architecture} />
        )}
      </div>
    </main>
  );
}
