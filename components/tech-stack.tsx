import React from 'react';

const techStacks = [
  'PostgreSQL',
  'Next.js',
  'Streamlit',
  'PyTorch',
  'HuggingFace',
  'Express.js',
  'FastAPI',
  'TypeScript',
  'LangChain',
  'mySQL',
  'React',
  'TailwindCSS',
  'Node.js',
  'Python',
];

export function TechStack() {
  const marqueeItems = [...techStacks, ...techStacks];

  return (
    <div className="mx-auto w-full max-w-3xl px-6 flex flex-col gap-3 mt-6 mb-1">
      {/* Heading */}
      <h2 className="text-md md:text-lg font-mono tracking-normal text-slate-300 uppercase">
        my stack
      </h2>

      {/* Marquee*/}
      <div className="relative flex w-full overflow-hidden rounded-2xl border border-white/10 py-4 bg-zinc-900/20 backdrop-blur-xs">
        <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-0">
          {marqueeItems.map((tech, i) => (
            <span
              key={i}
              className="text-lg md:text-xl font-bold text-slate-500/80 tracking-normal uppercase flex items-center"
            >
              {tech}
              <span className="mx-6 text-slate-500/30 font-light">-</span>
            </span>
          ))}
        </div>
        <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-0" aria-hidden="true">
          {marqueeItems.map((tech, i) => (
            <span
              key={i}
              className="text-lg md:text-xl font-bold text-slate-500/80 tracking-normal uppercase flex items-center"
            >
              {tech}
              <span className="mx-6 text-slate-500/30 font-light">-</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

