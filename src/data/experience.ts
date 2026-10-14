export type Experience = {
  role: string;
  company: string;
  dates: string;
  location: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "command+k",
    dates: "2/2025-3/2026",
    location: "Vancouver, BC",
    highlights: [
      "Collaborated with early-stage startup founders to transform their vision into a Legal Tech app that achieved successful acquisition.",
      "Built dashboards and automations with React, TypeScript, Next.js, Node.js, and PostgreSQL to reduce the cost of the core product by over 50% and align with business strategy.",
      "Took end-to-end ownership of designing and building new features of a React app that led to the addition of over 4000 users in three months.",
      "Managed production updates including PostgreSQL database migrations and feature releases with CI/CD tools such as Git, GitHub, and Vercel to increase deployment speed by 200%.",
    ],
  },
];
