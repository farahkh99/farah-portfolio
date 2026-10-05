
import {
  ArrowDown,
  ArrowRight,
  Fingerprint,
  Server,
  Database,
  LayoutDashboard,
  Monitor,
  Braces,
  Plug,
  FileText,
  type LucideIcon,
} from "lucide-react";

import type {
  ArchitectureStep,
  ArchitectureIcon,
} from "@/types/project";

interface ArchitectureFlowProps {
  steps: ArchitectureStep[];
}

const architectureIcons: Record<
  ArchitectureIcon,
  LucideIcon
> = {
  device: Fingerprint,
  server: Server,
  database: Database,
  dashboard: LayoutDashboard,
  desktop: Monitor,
  api: Braces,
  plug: Plug,
  document: FileText,
};

export default function ArchitectureFlow({
  steps,
}: ArchitectureFlowProps) {
  return (
    <section className="mt-16 border-t border-white/10 pt-12">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          Technical Overview
        </p>

        <h2 className="mt-3 text-3xl font-bold text-white">
          System Architecture
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          A high-level overview of the system components
          and how data moves between them.
        </p>
      </div>

    <div className="mt-10 grid gap-6 lg:grid-cols-4 lg:items-stretch">
       {steps.map((step, index) => {
  const StepIcon = architectureIcons[step.icon];

  return (
    <div
      key={`${index}-${step.title}`}
      className="relative"
    >
      <article className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-accent/40">
        <div className="flex flex-col items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
            <StepIcon
              aria-hidden="true"
              className="h-6 w-6 text-accent"
            />
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest text-accent">
              STEP {String(index + 1).padStart(2, "0")}
            </p>

            <h3 className="mt-2 text-lg font-semibold">
              {step.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              {step.description}
            </p>
          </div>
        </div>
      </article>

      {index < steps.length - 1 && (
        <div className="flex justify-center pt-4 lg:absolute lg:-right-5 lg:top-1/2 lg:z-10 lg:-translate-y-1/2 lg:pt-0">
          <ArrowDown
            aria-hidden="true"
            className="h-5 w-5 text-teal-400 lg:hidden"
          />

          <ArrowRight
            aria-hidden="true"
            className="hidden h-5 w-5 text-teal-400 lg:block"
          />
        </div>
      )}
    </div>
  );
})}
      </div>
    </section>
  );
}
