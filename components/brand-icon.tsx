/* SVGL-hosted brand marks: https://svgl.app/ */
/* eslint-disable @next/next/no-img-element */

const routes: Record<string, { light: string; dark?: string }> = {
  github: { light: "https://svgl.app/library/github_light.svg", dark: "https://svgl.app/library/github_dark.svg" },
  linkedin: { light: "https://svgl.app/library/linkedin.svg" },
  x: { light: "https://svgl.app/library/x.svg", dark: "https://svgl.app/library/x_dark.svg" },
  nextjs: { light: "https://svgl.app/library/nextjs_icon_dark.svg" },
  react: { light: "https://svgl.app/library/react_light.svg", dark: "https://svgl.app/library/react_dark.svg" },
  typescript: { light: "https://svgl.app/library/typescript.svg" },
  tailwind: { light: "https://svgl.app/library/tailwindcss.svg" },
  python: { light: "https://svgl.app/library/python.svg" },
  fastapi: { light: "https://svgl.app/library/fastapi.svg" },
  supabase: { light: "https://svgl.app/library/supabase.svg" },
  postgres: { light: "https://svgl.app/library/postgresql.svg" },
};

export function BrandIcon({ name, label }: { name: keyof typeof routes; label: string }) {
  const route = routes[name];
  return (
    <span className="brand-icon" aria-label={label} title={label}>
      <img className="brand-light" src={route.light} alt="" aria-hidden="true" />
      {route.dark && <img className="brand-dark" src={route.dark} alt="" aria-hidden="true" />}
    </span>
  );
}
