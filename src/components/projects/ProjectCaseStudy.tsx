import {
  CheckCircle2,
  Code2,
  Target,
  Wrench,
  UserRoundCog,
  TrendingUp,
} from "lucide-react";

import type { Project } from "@/types/project";

type CaseStudy = NonNullable<Project["caseStudy"]>;

interface ProjectCaseStudyProps {
  caseStudy: CaseStudy;
}

export default function ProjectCaseStudy({
  caseStudy,
}: ProjectCaseStudyProps) {
  const overviewSections = [
    {
      title: "The Problem",
      content: caseStudy.problem,
      icon: Target,
    },
    {
      title: "My Implementation",
      content: caseStudy.implementation,
      icon: Code2,
    },
    {
      title: "The Result",
      content: caseStudy.result,
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="mt-16 border-t border-white/10 pt-12">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">
        Behind the Project
      </p>

      <h2 className="mt-4 text-3xl font-bold">
        Engineering Case Study
      </h2>

      <p className="mt-4 max-w-2xl leading-7 text-slate-400">
        A closer look at the engineering problems,
        technical decisions, responsibilities, and
        production challenges behind the project.
      </p>

      {/* Problem / Implementation / Result */}
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {overviewSections.map((section) => {
          const Icon = section.icon;

          return (
            <article
              key={section.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                <Icon
                  aria-hidden="true"
                  className="h-5 w-5 text-accent"
                />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {section.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {section.content}
              </p>
            </article>
          );
        })}
      </div>

      {/* Challenges + Responsibilities */}
      {(caseStudy.challenges ||
        caseStudy.responsibilities) && (
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {caseStudy.challenges && (
            <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                  <Wrench className="h-5 w-5 text-accent" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                    Engineering
                  </p>

                  <h3 className="text-xl font-semibold">
                    Key Challenges
                  </h3>
                </div>
              </div>

              <ul className="mt-6 space-y-4">
                {caseStudy.challenges.map(
                  (challenge) => (
                    <li
                      key={challenge}
                      className="flex gap-3 text-slate-400"
                    >
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent" />

                      <span>{challenge}</span>
                    </li>
                  ),
                )}
              </ul>
            </article>
          )}

          {caseStudy.responsibilities && (
            <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                  <UserRoundCog className="h-5 w-5 text-accent" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                    Ownership
                  </p>

                  <h3 className="text-xl font-semibold">
                    My Responsibility
                  </h3>
                </div>
              </div>

              <ul className="mt-6 space-y-4">
                {caseStudy.responsibilities.map(
                  (responsibility) => (
                    <li
                      key={responsibility}
                      className="flex gap-3 text-slate-400"
                    >
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent" />

                      <span>{responsibility}</span>
                    </li>
                  ),
                )}
              </ul>
            </article>
          )}
        </div>
      )}

      {/* Real measurable impact */}
      {caseStudy.impact &&
        caseStudy.impact.length > 0 && (
          <article className="mt-8 rounded-2xl border border-accent/20 bg-accent/[0.04] p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                <TrendingUp className="h-5 w-5 text-accent" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  Production Impact
                </p>

                <h3 className="text-xl font-semibold">
                  Real-World Impact
                </h3>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {caseStudy.impact.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-black/20 p-4 text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>
        )}
    </section>
  );
}