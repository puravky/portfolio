import Link from "next/link";

export function Navbar({ className }: { className?: string }) {
  return (
    <header className={`sticky top-6 z-50 mt-6 mx-auto w-full max-w-3xl px-6 ${className || ""}`.trim()}>
      <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-zinc-400 backdrop-blur-md shadow-xl">
        <Link
          href="/"
          className="font-mono font-semibold text-lg hover:text-white transition-colors"
        >
          async
        </Link>
        <div className="flex gap-6 font-semibold font-mono text-sm">
          <Link href="/projects" className="hover:text-white transition-colors">
            /projects
          </Link>
          <Link href="/blogs" className="hover:text-white transition-colors">
            /blogs
          </Link>
        </div>
      </nav>
    </header>
  );
}
