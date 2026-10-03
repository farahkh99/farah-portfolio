
import {
  ArrowDown,
  Fingerprint,
  Server,
  Database,
  LayoutDashboard,
  type LucideIcon,
} from "lucide-react";

import type {
  ArchitectureStep,
  ArchitectureIcon,
} from "@/types/project";

interface ArchitectureFlowProps {
  steps: ArchitectureStep[];
}

const architectureIcons: Record<ArchitectureIcon, LucideIcon> = {
  device: Fingerprint,
  server: Server,
  database: Database,
  dashboard: LayoutDashboard,
};

export default function ArchitectureFlow({
  steps,
}: ArchitectureFlowProps) {
  return (
    <section className="mt-16 border-t border-white/10 pt-12">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-teal-400">
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

      <div className="mt-10 space-y-2">
        {steps.map((step, index) => {
          const StepIcon = architectureIcons[step.icon];

          return (
            <div key={`${index}-${step.title}`}>
              {index > 0 && (
                <div className="flex justify-center py-3">
                  <ArrowDown
                    aria-hidden="true"
                    className="h-5 w-5 text-teal-400"
                  />
                </div>
              )}

              <article className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-teal-400/40 hover:bg-teal-400/[0.04]">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-400/10 transition-colors group-hover:bg-teal-400/20">
                    <StepIcon
                      aria-hidden="true"
                      className="h-7 w-7 text-teal-400"
                      strokeWidth={1.8}
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold tracking-widest text-teal-400">
                      STEP {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="mt-2 text-xl font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}
