
export default function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-[650px] scroll-mt-24 flex-col justify-center py-24"
    >
      <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
        <span className="text-accent">Farah Khoury</span>
      </h1>

      <p className="mt-4 text-xl font-medium tracking-wide text-slate-200 sm:text-2xl">
        Software Engineer
      </p>

      <p className="mt-8 max-w-3xl text-xl font-medium leading-relaxed text-slate-200">
        I build reliable software that solves real-world
        business problems.
      </p>

      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
        Full-Stack Software Engineer with 3+ years of
        professional experience. I develop production
        business applications, backend services, and
        complex integrations using C#, PHP, JavaScript,
        and SQL. I also build full-stack projects with
        React, Next.js, TypeScript, and Node.js.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#work"
          className="rounded-xl bg-accent px-6 py-3 font-semibold text-background transition-colors hover:bg-accent-hover"
        >
          Explore My Work
        </a>
      </div>

      <div className="mt-20 grid max-w-xl grid-cols-3 gap-5 border-t border-white/10 pt-8">
        <div>
          <p className="text-3xl font-bold">3+</p>
          <p className="mt-2 text-sm text-slate-400">
            Years Experience
          </p>
        </div>

        <div>
          <p className="text-3xl font-bold">10+</p>
          <p className="mt-2 text-sm text-slate-400">
            Production Systems
          </p>
        </div>

        <div>
          <p className="text-3xl font-bold">7</p>
          <p className="mt-2 text-sm text-slate-400">
            Students Mentored
          </p>
        </div>
      </div>
    </section>
  );
}
