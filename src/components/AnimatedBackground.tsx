export default function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="ambient-orb absolute -left-40 top-10 h-96 w-96 rounded-full bg-teal-500/20 blur-3xl" />

      <div className="ambient-orb ambient-orb-slow absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
    </div>
  );
}