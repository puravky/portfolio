/* eslint-disable @next/next/no-img-element */
import React from 'react';

const techStacks = [
  { name: 'MONGODB', slug: 'mongodb' },
  { name: 'NEXT.JS', slug: 'nextdotjs' },
  { name: 'PYTORCH', slug: 'pytorch' },
  { name: 'TYPESCRIPT', slug: 'typescript' },
  { name: 'REACT', slug: 'react' },
  { name: 'TAILWIND CSS', slug: 'tailwindcss' },
  { name: 'NODE.JS', slug: 'nodedotjs' },
  { name: 'PYTHON', slug: 'python' },
];

export function TechStack() {
  // We duplicate the array to create a seamless marquee
  const marqueeItems = [...techStacks, ...techStacks];

  return (
    <div className="w-full flex flex-col gap-12 mt-12 mb-8">
      {/* Logos */}
      <div className="flex flex-col gap-8 items-center px-6">
        <div className="flex gap-8 justify-center flex-wrap">
          {techStacks.slice(0, 4).map((tech) => (
            <div
              key={tech.name}
              className="flex items-center justify-center p-4 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              title={tech.name}
            >
              <img
                src={`https://cdn.simpleicons.org/${tech.slug}/94a3b8`}
                alt={tech.name}
                className="w-8 h-8 md:w-10 md:h-10 opacity-70 hover:opacity-100 transition-opacity duration-300 filter drop-shadow-sm"
              />
            </div>
          ))}
        </div>
        <div className="flex gap-8 justify-center flex-wrap">
          {techStacks.slice(4, 8).map((tech) => (
            <div
              key={tech.name}
              className="flex items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              title={tech.name}
            >
              <img
                src={`https://cdn.simpleicons.org/${tech.slug}/94a3b8`}
                alt={tech.name}
                className="w-8 h-8 md:w-10 md:h-10 opacity-70 hover:opacity-100 transition-opacity duration-300 filter drop-shadow-sm"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Marquee*/}
      <div className="relative flex w-full max-w-3xl mx-auto overflow-hidden border-y border-white/10 py-6 bg-white/2">
        <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-0 z-10 w-max">
          {marqueeItems.map((tech, i) => (
            <span
              key={i}
              className="text-lg md:text-xl font-bold text-slate-500/80 tracking-normal uppercase"
            >
              {tech.name}
              <span className="mx-6 text-slate-500/50">-</span>
            </span>
          ))}
        </div>
        <div
          className="absolute top-0 animate-marquee2 flex min-w-full shrink-0 items-center justify-around gap-2 z-10 w-max py-6"
          aria-hidden="true"
        >
          {marqueeItems.map((tech, i) => (
            <span
              key={i}
              className="text-lg md:text-xl font-bold text-slate-500/80 tracking-normal uppercase"
            >
              {tech.name}
              <span className="mx-6 text-slate-500/50">-</span>
            </span>
          ))}
        </div>
        
      </div>
    </div>
  );
}
