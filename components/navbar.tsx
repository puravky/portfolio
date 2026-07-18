import Link from "next/link";
import { House } from "lucide-react"

export function Navbar({ className }: { className?: string }) {
  return (
    <header className={`sticky top-6 z-50 mt-6 mx-auto w-full max-w-3xl px-6 ${className || ""}`.trim()}>
      <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-zinc-900/70 px-6 py-3.5 text-zinc-400 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4),0_2px_8px_rgba(0,0,0,0.3)] ring-1 ring-white/5">
        <Link
          href="/"
          className="font-mono font-semibold text-base hover:text-white transition-colors"
        >
          home
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
