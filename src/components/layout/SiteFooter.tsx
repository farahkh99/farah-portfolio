export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-auto border-t border-white/10 bg-background/90">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-6 py-8 text-center">
        <p className="text-sm text-slate-400">
          © {year} Farah Khoury. All rights reserved.
        </p>
      </div>
    </footer>
  );
}