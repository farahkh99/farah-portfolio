
import type { Project } from "@/types/project";

type CaseStudy = NonNullable<Project["caseStudy"]>;

interface ProjectCaseStudyProps {
  caseStudy: CaseStudy;
}

export default function ProjectCaseStudy({
  caseStudy,
}: ProjectCaseStudyProps) {
  const sections = [
    {
      title: "The Problem",
      content: caseStudy.problem,
    },
    {
      title: "My Implementation",
      content: caseStudy.implementation,
    },
    {
      title: "The Result",
      content: caseStudy.result,
    },
  ];

  return (
    <section className="mt-16 border-t border-white/10 pt-10">
      <p className="text-sm font-semibold tracking-widest text-accent">
        BEHIND THE PROJECT
      </p>

      <h2 className="mt-4 text-3xl font-bold">
        Engineering Case Study
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {sections.map((section) => (
          <article
            key={section.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-accent/30"
          >
            <h3 className="text-lg font-semibold text-accent">
              {section.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              {section.content}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
