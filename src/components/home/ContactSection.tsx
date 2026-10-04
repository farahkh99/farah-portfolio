
import { Mail, MapPin } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-28 py-20 md:py-28"
    >
      <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-surface px-6 py-14 text-center md:px-12 md:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
            Get in Touch
          </p>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Let&apos;s Build Something Meaningful.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-muted md:text-lg">
            I&apos;m open to software engineering opportunities
            where I can build meaningful products, solve
            challenging problems, and collaborate with
            talented teams.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:farah.khoury11@gmail.com"
              className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-accent px-7 py-3 font-semibold text-background transition-all duration-200 hover:-translate-y-1 hover:bg-accent-hover sm:w-auto"
            >
              <Mail aria-hidden="true" className="h-5 w-5" />
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/farah-khoury-473a3920a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl border border-accent/40 bg-white/5 px-7 py-3 font-semibold text-foreground transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:text-accent sm:w-auto"
            >
              <FaLinkedin
                aria-hidden="true"
                className="h-5 w-5"
              />
              Connect on LinkedIn
            </a>
          </div>

          <p className="mt-8 flex items-center justify-center gap-2 text-sm text-muted">
            <MapPin
              aria-hidden="true"
              className="h-4 w-4 text-accent"
            />
            Based in Israel
          </p>
        </div>
      </div>
    </section>
  );
}
