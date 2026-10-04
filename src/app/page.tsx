import AnimatedBackground from "@/components/AnimatedBackground";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import TechnologyBadge from "@/components/projects/TechnologyBadge";
import ContactSection from "@/components/home/ContactSection";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";

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


const skillGroups = [
  {
    title: "Programming Languages",
    skills: [
      "C#",
      "PHP",
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "SQL",
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      "React",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "jQuery",
      "AJAX",
      "Responsive UI",
      "RTL / LTR",
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      "Node.js",
      "Express.js",
      "PHP OOP / MVC",
      "REST APIs",
      "Webhooks",
      "Authentication",
      "RBAC",
      "Third-party Integrations",
      "Google Libraries",
    ],
  },
  {
    title: "Databases & Data",
    skills: [
      "MySQL",
      "MariaDB",
      "MongoDB",
      "Database Design",
      "Migrations",
      "Query Optimization",
      "Data Integrity",
    ],
  },
  {
    title: "Systems & Cloud",
    skills: [
      "Linux",
      "Unix",
      "Windows",
      "Microsoft Azure",
      "Active Directory",
      "Microsoft 365",
      "VPS",
      "Networking",
      "VPNs",
      "Firewalls",
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
      "C# WinForms",
      "System Architecture",
      "Testing",
      "Code Review",
      "Debugging",
      "Deployment",
      "Production Support",
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

      <main className="mx-auto max-w-6xl px-6">
        {/* Hero */}
        <HeroSection />
        {/* About */}
        <AboutSection />

        {/* Experience */}
        <section
          id="experience"
          className="scroll-mt-24 border-t border-white/10 py-24"
        >
          <p className="text-sm font-semibold tracking-widest text-teal-400">
            MY CAREER
          </p>

          <h2 className="mt-4 text-4xl font-bold">Professional Experience</h2>

          <div className="mt-12 space-y-6">
            {experiences.map((job) => (
              <article
                key={job.company}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
              >
                <div className="flex flex-col justify-between gap-4 md:flex-row">
                  <div>
                    <h3 className="text-2xl font-semibold">{job.role}</h3>

                    <p className="mt-2 text-teal-400">{job.company}</p>

                    <p className="mt-1 text-sm text-slate-500">
                      {job.location}
                    </p>
                  </div>

                  <p className="text-sm text-slate-400">{job.period}</p>
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

          <h2 className="mt-4 text-4xl font-bold">Selected Work</h2>

          <p className="mt-5 max-w-2xl leading-7 text-slate-400">
            A selection of my professional engineering experience and personal
            development work. Employer-owned projects are described at a high
            level without publishing proprietary source code or internal
            materials.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 md:auto-rows-fr">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
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

          <h2 className="mt-4 text-4xl font-bold">Skills & Technologies</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
              >
                <h3 className="mb-6 text-lg font-semibold">{group.title}</h3>

                <div className="flex flex-wrap items-start gap-4">
                  {group.skills.map((skill) => (
                    <TechnologyBadge key={skill} name={skill} />
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
                <h3 className="text-xl font-semibold">{item.degree}</h3>

                <p className="mt-2 text-teal-400">{item.institution}</p>

                <p className="mt-2 text-sm text-slate-400">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}

        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Farah Khoury
      </footer>
    </div>
  );
}
