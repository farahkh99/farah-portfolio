import { Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function SiteHeader() {
  return (
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-lg">
        <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <a href="#home" className="text-2xl font-bold tracking-tight">
            FARAH<span className="text-teal-400">.</span>
          </a>

          <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a href="#about" className="hover:text-teal-400">
              About
            </a>
            <a href="#experience" className="hover:text-teal-400">
              Experience
            </a>
            <a href="#work" className="hover:text-teal-400">
              Work
            </a>
            <a href="#skills" className="hover:text-teal-400">
              Skills
            </a>
            <a href="#education" className="hover:text-teal-400">
              Education
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="mailto:farah.khoury11@gmail.com"
              aria-label="Send Farah an email"
              title="Email"
              className="rounded-lg p-2 text-slate-300 transition-colors hover:text-teal-400"
            >
              <Mail size={20} aria-hidden="true" />
            </a>

            <a
              href="https://www.linkedin.com/in/farah-khoury-473a3920a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Farah Khoury on LinkedIn"
              title="LinkedIn"
              className="rounded-lg p-2 text-slate-300 transition-colors hover:text-teal-400"
            >
              <FaLinkedin size={20} aria-hidden="true" />
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-teal-400/40 px-4 py-2 text-sm font-medium text-teal-300 transition-colors hover:bg-teal-400/10"
            >
              Contact Me
            </a>
          </div>
        </nav>
      </header>
  );
}
