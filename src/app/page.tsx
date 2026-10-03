import AnimatedBackground from "@/components/AnimatedBackground";
import SiteHeader from "@/components/layout/SiteHeader";
const experiences = [
  {
    role: "Full-Stack Software Engineer / Technical Lead",
    company: "CTC",
    location: "Yarka, Israel",
    period: "2023 — Present",
    responsibilities: [
      "Developed and maintained business applications across POS, CRM, inventory, workforce management, and digital workflows.",
      "Built backend services, database-driven functionality, REST APIs, authentication, and role-based access control.",
      "Developed multilingual interfaces supporting Arabic, Hebrew, and English with RTL and LTR layouts.",
      "Worked on external integrations, performance improvements, and production troubleshooting.",
      "Mentored seven student developers through implementation, code reviews, testing, and deployment.",
    ],
  },
  {
    role: "IT Specialist",
    company: "Galil Software",
    location: "Nazareth, Israel",
    period: "2022 — 2024",
    responsibilities: [
      "Supported Windows and Linux environments, Microsoft Azure, Active Directory, and Microsoft 365.",
      "Troubleshot networking, VPN, firewall, printing, remote access, and workstation issues.",
      "Diagnosed application, database, connectivity, and infrastructure problems affecting business operations.",
    ],
  },
];

const workHighlights = [
  {
    number: "01",
    title: "Retail & Transaction Systems",
    category: "PROFESSIONAL EXPERIENCE",
    description:
      "Contributed to business transaction workflows, reporting, receipt processing, and integrations between desktop applications, backend services, and hardware.",
    technologies: ["C#", "PHP", "MySQL", "REST APIs"],
  },
  {
    number: "02",
    title: "Business Management Platforms",
    category: "PROFESSIONAL EXPERIENCE",
    description:
      "Developed functionality for inventory, workforce, customer management, and digital-document workflows with relational data models and access controls.",
    technologies: ["PHP", "JavaScript", "SQL", "RBAC"],
  },
  {
    number: "03",
    title: "Multilingual Web Applications",
    category: "PROFESSIONAL EXPERIENCE",
    description:
      "Built responsive business interfaces supporting Arabic, Hebrew, and English, including right-to-left and left-to-right layouts.",
    technologies: ["HTML", "CSS", "JavaScript", "RTL/LTR"],
  },
  {
    number: "04",
    title: "JobFlow",
    category: "PERSONAL PROJECT · IN DEVELOPMENT",
    description:
      "A personal full-stack recruitment application for exploring modern React architecture, job management, APIs, and database integration.",
    technologies: ["Next.js", "TypeScript", "MongoDB"],
  },
];

const skillGroups = [
  {
    title: "Programming",
    skills: ["C#", "PHP", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend & Databases",
    skills: [
      "Node.js",
      "REST APIs",
      "Authentication",
      "MySQL",
      "MariaDB",
      "MongoDB",
    ],
  },
  {
    title: "Tools & Engineering",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Visual Studio",
      "VS Code",
      "Debugging",
    ],
  },
];

const education = [
  {
    degree: "B.Sc. in Computer Science",
    institution: "Ramat Gan Academic College",
    detail: "Evening Program · Starting Fall 2026",
  },
  {
    degree: "Practical Software Engineering Diploma",
    institution: "ORT Braude College",
    detail: "Software Engineering",
  },
  {
    degree: "Quality Assurance Certification",
    institution: "Technion, Haifa",
    detail: "Software Quality Assurance",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <AnimatedBackground />
      {/* Navigation */}
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-6">
        {/* Hero */}
        <section
          id="home"
          className="flex min-h-[650px] scroll-mt-24 flex-col justify-center py-24"
        >


          <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
            Hi, I&apos;m{" "}
            <span className="text-teal-400">Farah Khoury.</span>
          </h1>

          <p className="mt-4 text-xl font-medium tracking-wide text-slate-200 sm:text-2xl">
            Software Engineer
          </p>

          <p className="mt-8 max-w-3xl text-xl font-medium leading-relaxed text-slate-200">
            I build reliable software that solves real-world business
            problems.
          </p>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Full-Stack Software Engineer With 3+ years of professional experience, I develop production business applications, backend services, and complex integrations using C#, PHP, JavaScript, and SQL. I also build full-stack projects with React, Next.js, TypeScript, and Node.js.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-xl bg-teal-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-teal-300"
            >
              Explore My Work
            </a>


          </div>

          <div className="mt-20 grid max-w-xl grid-cols-3 gap-5 border-t border-white/10 pt-8">
            <div>
              <p className="text-3xl font-bold">3+</p>
              <p className="mt-2 text-sm text-slate-400">Years Experience</p>
            </div>

            <div>
              <p className="text-3xl font-bold">10+</p>
              <p className="mt-2 text-sm text-slate-400">Production Systems</p>
            </div>

            <div>
              <p className="text-3xl font-bold">7</p>
              <p className="mt-2 text-sm text-slate-400">Students Mentored</p>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="scroll-mt-24 border-t border-white/10 py-24"
        >
          <p className="text-sm font-semibold tracking-widest text-teal-400">
            GET TO KNOW ME
          </p>

          <h2 className="mt-4 text-4xl font-bold">About Me</h2>

          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-slate-400">
            <p>
              I&apos;m a software engineer experienced in developing,
              integrating, and supporting production applications
              across desktop and web environments.
            </p>

            <p>
              My experience includes backend development, relational
              databases, responsive multilingual interfaces,
              third-party integrations, and complex business workflows.
            </p>

            <p>
              I enjoy designing maintainable solutions, solving
              technical problems, and mentoring developers.
              I&apos;m also expanding my experience with TypeScript,
              React, Next.js, and cloud-native development.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="scroll-mt-24 border-t border-white/10 py-24"
        >
          <p className="text-sm font-semibold tracking-widest text-teal-400">
            MY CAREER
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Professional Experience
          </h2>

          <div className="mt-12 space-y-6">
            {experiences.map((job) => (
              <article
                key={job.company}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
              >
                <div className="flex flex-col justify-between gap-4 md:flex-row">
                  <div>
                    <h3 className="text-2xl font-semibold">
                      {job.role}
                    </h3>

                    <p className="mt-2 text-teal-400">
                      {job.company}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      {job.location}
                    </p>
                  </div>

                  <p className="text-sm text-slate-400">
                    {job.period}
                  </p>
                </div>

                <ul className="mt-7 list-disc space-y-3 pl-5 leading-7 text-slate-400 marker:text-teal-400">
                  {job.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Selected Work */}
        <section
          id="work"
          className="scroll-mt-24 border-t border-white/10 py-24"
        >
          <p className="text-sm font-semibold tracking-widest text-teal-400">
            ENGINEERING WORK
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Selected Work
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-slate-400">
            A selection of my professional engineering experience
            and personal development work. Employer-owned projects
            are described at a high level without publishing
            proprietary source code or internal materials.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {workHighlights.map((project) => (
              <article
                key={project.number}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-teal-400/40"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-slate-500">
                    / {project.number}
                  </span>
                  <span className="text-teal-400">↗</span>
                </div>

                <p className="mt-10 text-xs font-semibold tracking-widest text-teal-400">
                  {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-5 leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-white/10 bg-slate-900 px-3 py-1.5 text-xs text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="scroll-mt-24 border-t border-white/10 py-24"
        >
          <p className="text-sm font-semibold tracking-widest text-teal-400">
            TECHNICAL EXPERTISE
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Skills & Technologies
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
              >
                <h3 className="mb-6 text-lg font-semibold">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-slate-800 px-3 py-2 text-sm text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Education */}
        <section
          id="education"
          className="scroll-mt-24 border-t border-white/10 py-24"
        >
          <p className="text-sm font-semibold tracking-widest text-teal-400">
            ACADEMIC BACKGROUND
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Education & Certifications
          </h2>

          <div className="mt-12 space-y-4">
            {education.map((item) => (
              <article
                key={item.degree}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="text-xl font-semibold">
                  {item.degree}
                </h3>

                <p className="mt-2 text-teal-400">
                  {item.institution}
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="my-20 scroll-mt-24 rounded-3xl border border-teal-400/20 bg-teal-400/[0.05] px-6 py-20 text-center"
        >
          <p className="text-sm font-semibold tracking-widest text-teal-400">
            GET IN TOUCH
          </p>

          <h2 className="mt-5 text-4xl font-bold">
            Let&apos;s Build Something Meaningful
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-slate-400">
            I&apos;m interested in software engineering opportunities
            where I can contribute to meaningful products,
            collaborate with talented teams, and continue growing.
          </p>


        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Farah Khoury.
        Built with Next.js and TypeScript.
      </footer>
    </div>
  );
}
