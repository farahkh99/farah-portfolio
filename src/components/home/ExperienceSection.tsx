
import { experiences } from "@/data/experiences";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-white/10 py-24"
    >
      <p className="text-sm font-semibold tracking-widest text-accent">
        MY CAREER
      </p>

      <h2 className="mt-4 text-4xl font-bold">
        Professional Experience
      </h2>

      <div className="mt-12 space-y-6">
        {experiences.map((job) => (
          <article
            key={`${job.company}-${job.role}`}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors duration-300 hover:border-accent/30"
          >
            <div className="flex flex-col justify-between gap-4 md:flex-row">
              <div>
                <h3 className="text-2xl font-semibold">
                  {job.role}
                </h3>

                <p className="mt-2 text-accent">
                  {job.company}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  {job.location}
                </p>

                {"employmentNote" in job && job.employmentNote && (
                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
                    {job.employmentNote}
                  </p>
                )>
              </div>

              <p className="text-sm text-slate-400">
                {job.period}
              </p>
            </div>

            <ul className="mt-7 list-disc space-y-3 pl-5 leading-7 text-slate-400 marker:text-accent">
              {job.responsibilities.map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
