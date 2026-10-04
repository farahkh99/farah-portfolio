export default function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Left gold glow */}
      <div className="ambient-orb absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#d4af37]/18 blur-3xl" />

      {/* Right warm gold glow */}
      <div className="ambient-orb ambient-orb-slow absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-[#b8901f]/16 blur-3xl" />

      {/* Optional subtle center glow for richer depth */}
      <div className="ambient-orb absolute left-1/2 top-2/3 h-72 w-72 -translate-x-1/2 rounded-full bg-[#e6c766]/8 blur-3xl" />
    </div>
  );
}