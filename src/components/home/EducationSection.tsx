
import { education } from "@/data/education";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="scroll-mt-24 border-t border-white/10 py-24"
    >
      <p className="text-sm font-semibold tracking-widest text-accent">
        ACADEMIC BACKGROUND
      </p>

      <h2 className="mt-4 text-4xl font-bold">
        Education & Certifications
      </h2>

      <div className="mt-12 space-y-4">
        {education.map((item) => (
          <article
            key={`${item.institution}-${item.degree}`}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-accent/30"
          >
            <h3 className="text-xl font-semibold">
              {item.degree}
            </h3>

            <p className="mt-2 text-accent">
              {item.institution}
            </p>

            <p className="mt-2 text-sm text-slate-400">
              {item.detail}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
