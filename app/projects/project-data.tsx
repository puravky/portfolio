export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Blink Arena",
    year: 2024,
    description:
      "Introducing blinkarena: a platform where user can either host or join gaming tournament via Solana Blinks.",
    url: "https://blinkarena.xyz/",
  },
  {
    title: "Viralxpost",
    year: 2024,
    description:
      "Introducing viralxpost: Let our AI tool help you create to engaging content that breaks through the noise and gets you seen by the right people.",
    url: "https://viralxpost.xyz/",
  },
  {
    title: "Portfolio",
    year: 2024,
    description: "The website you're looking at.",
    url: "https://avhimaz.in/",
  },
];
