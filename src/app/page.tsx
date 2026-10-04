import AnimatedBackground from "@/components/AnimatedBackground";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import TechnologyBadge from "@/components/projects/TechnologyBadge";
import ContactSection from "@/components/home/ContactSection";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import SkillsSection from "@/components/home/SkillsSection";
import EducationSection from "@/components/home/EducationSection";

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
        <ExperienceSection />

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
       <SkillsSection />

        {/* Education */}
      <EducationSection />

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
