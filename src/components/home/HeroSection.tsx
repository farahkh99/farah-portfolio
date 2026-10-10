
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
        Full-Stack Software Engineer
      </p>

      <p className="mt-8 max-w-3xl text-xl font-medium leading-relaxed text-slate-200">
        I build and support software used in everyday business operations.
      </p>

      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
        Over 3 years of professional experience developing
        POS, workforce-management, inventory, and other
        production systems with PHP, C#, JavaScript,
        and MySQL. I build APIs, integrate physical devices,
        and solve production issues. My recent projects
        also use React, Next.js, TypeScript, and Node.js.
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
