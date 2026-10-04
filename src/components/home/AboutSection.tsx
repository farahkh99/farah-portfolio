
export default function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-white/10 py-24"
    >
      <p className="text-sm font-semibold tracking-widest text-accent">
        GET TO KNOW ME
      </p>

      <h2 className="mt-4 text-4xl font-bold">
        About Me
      </h2>

      <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-slate-400">
        <p>
          I&apos;m a software engineer experienced in
          developing, integrating, and supporting
          production applications across desktop and
          web environments.
        </p>

        <p>
          My experience includes backend development,
          relational databases, responsive multilingual
          interfaces, third-party integrations, and
          complex business workflows.
        </p>

        <p>
          I enjoy designing maintainable solutions,
          solving technical problems, and mentoring
          developers. I&apos;m also expanding my
          experience with TypeScript, React, Next.js,
          and cloud-native development.
        </p>
      </div>
    </section>
  );
}
