export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "blink arena",
    year: 2024,
    description:
      "introducing blinkarena: a platform where user can either host or join gaming tournament via solana blinks.",
    // url: "https://www.avhimaz.in/projects/blink-arena",
    url: "http://localhost:3000/projects/blink-arena",
  },
  {
    title: "viralxpost",
    year: 2024,
    description:
      "introducing viralxpost: let our ai tool help you create to engaging content that breaks through the noise and gets you seen by the right people.",
    // url: "https://www.avhimaz.in/projects/viralxpost",
    url: "http://localhost:3000/projects/viralxpost",
  },
  {
    title: "portfolio",
    year: 2024,
    description: "the website you're looking at.",
    // url: "https://www.avhimaz.in/projects/portfolio",
    url: "http://localhost:3000/projects/portfolio",
  },
];
