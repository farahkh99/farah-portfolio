
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X, Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const navigationLinks = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#work" },
  { label: "Skills", href: "/#skills" },
  { label: "Education", href: "/#education" },
  { label: "Contact", href: "/#contact" },
];

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuButtonRef = useRef<HTMLButtonElement>(null);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    if (!isMenuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-6 px-6">

        {/* Brand */}
        <Link
          href="/#home"
          onClick={closeMenu}
          className="shrink-0 text-xl font-bold tracking-tight text-white transition-colors hover:text-teal-400"
        >
          Farah Khoury
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 lg:flex"
        >
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-teal-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Social Links */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="mailto:farah.khoury11@gmail.com"
            aria-label="Send an email"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-teal-400/40 hover:bg-teal-400/10 hover:text-teal-400"
          >
            <Mail
              aria-hidden="true"
              className="h-5 w-5"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/farah-khoury-473a3920a"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit LinkedIn profile"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-teal-400/40 hover:bg-teal-400/10 hover:text-teal-400"
          >
            <FaLinkedin
              aria-hidden="true"
              className="h-5 w-5"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={menuButtonRef}
          type="button"
          aria-label={
            isMenuOpen ? "Close menu" : "Open menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() =>
            setIsMenuOpen((previous) => !previous)
          }
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-teal-400 transition-all duration-200 hover:border-teal-400/40 hover:bg-teal-400/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400 lg:hidden"
        >
          {isMenuOpen ? (
            <X
              aria-hidden="true"
              className="h-6 w-6"
            />
          ) : (
            <Menu
              aria-hidden="true"
              className="h-6 w-6"
            />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-white/10 bg-slate-950 px-6 py-5 shadow-2xl lg:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-2">

            {/* Navigation Links */}
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition-all duration-200 hover:bg-teal-400/10 hover:pl-5 hover:text-teal-400 focus-visible:outline-2 focus-visible:outline-teal-400"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Social Links */}
            <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-5">
              <a
                href="mailto:farah.khoury11@gmail.com"
                aria-label="Send an email"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-colors hover:bg-teal-400/10 hover:text-teal-400"
              >
                <Mail
                  aria-hidden="true"
                  className="h-5 w-5"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/farah-khoury-473a3920a"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn profile"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-colors hover:bg-teal-400/10 hover:text-teal-400"
              >
                <FaLinkedin
                  aria-hidden="true"
                  className="h-5 w-5"
                />
              </a>
            </div>

            {/* Mobile Footer */}
            <p className="mt-4 text-center text-xs text-slate-500">
              Software Engineer · Full Stack Developer
            </p>
          </div>
        </nav>
      )}
    </header>
  );
}
