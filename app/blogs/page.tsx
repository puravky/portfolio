import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Purav Kumar | Blogs",
  description: "Blog posts and writings by Purav Kumar",
};

export default function BlogsPage() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-12">
      <div className="flex flex-col items-center gap-6">
        <h1 className="font-mono font-semibold text-xl text-white tracking-tight">
          Coming soon!
        </h1>
        <video
          src="/blogs.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-120 h-auto rounded-2xl overflow-hidden border border-white/10"
        />
      </div>
    </main>
  );
}
