
import { skillGroups } from "@/data/skills";
import TechnologyBadge from "@/components/projects/TechnologyBadge";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-white/10 py-24"
    >
      <p className="text-sm font-semibold tracking-widest text-accent">
        TECHNICAL EXPERTISE
      </p>

      <h2 className="mt-4 text-4xl font-bold">
        Skills & Technologies
      </h2>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors duration-300 hover:border-accent/30"
          >
            <h3 className="mb-6 text-lg font-semibold">
              {group.title}
            </h3>

            <div className="flex flex-wrap items-start gap-4">
              {group.skills.map((skill) => (
                <TechnologyBadge
                  key={skill}
                  name={skill}
                />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
