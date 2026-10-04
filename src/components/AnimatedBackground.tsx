export default function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Mobile glows are closer to the center and more visible; desktop stays subtle. */}
      <div className="ambient-orb absolute -left-20 top-[12%] h-72 w-72 rounded-full bg-[#d4af37]/35 blur-2xl sm:-left-40 sm:top-10 sm:h-96 sm:w-96 sm:bg-[#d4af37]/18 sm:blur-3xl" />

      <div className="ambient-orb ambient-orb-slow absolute -right-20 top-[45%] h-72 w-72 rounded-full bg-[#b8901f]/30 blur-2xl sm:-right-32 sm:top-1/3 sm:h-96 sm:w-96 sm:bg-[#b8901f]/16 sm:blur-3xl" />

      <div className="ambient-orb absolute left-[calc(50%-7rem)] top-[74%] h-56 w-56 rounded-full bg-[#e6c766]/16 blur-2xl sm:left-[calc(50%-9rem)] sm:top-2/3 sm:h-72 sm:w-72 sm:bg-[#e6c766]/8 sm:blur-3xl" />
    </div>
  );
}
