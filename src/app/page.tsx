import AnimatedBackground from "@/components/AnimatedBackground";
import ContactSection from "@/components/home/ContactSection";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import SkillsSection from "@/components/home/SkillsSection";
import EducationSection from "@/components/home/EducationSection";
import ProjectsSection from "@/components/home/ProjectsSection";

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
        <ProjectsSection />

        {/* Skills */}
       <SkillsSection />

        {/* Education */}
      <EducationSection />

        {/* Contact */}

        <ContactSection />
      </main>


    </div>
  );
}
