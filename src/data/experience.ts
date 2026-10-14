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
  {
    role: "Full Stack Developer",
    company: "Freelance",
    dates: "7/2024-2/2025",
    location: "Vancouver, BC",
    highlights: [
      "Created and deployed a full stack web app (TypeScript, React.js, Node.js, SQL) with fast time to interactivity and low latency.",
      "Designed and implemented a scalable database schema with robust security features using PostgreSQL and row level security.",
      "Increased usability and accessibility of forms with custom validation using TypeScript and Zod.",
      "Built RESTful APIs for full-stack applications with Ruby on Rails and Next.js + Supabase.",
    ],
  },
  {
    role: "Web Developer & Digital Marketer",
    company: "devEdge Internet Marketing",
    dates: "11/2021-4/2023",
    location: "Vancouver, BC",
    highlights: [
      "Built websites, adapted designs based on client feedback, implemented SEO best practices, and delivered projects on schedule to generate an estimated $12k in revenue.",
      "Increased SEO monthly lead generation by up to 200% by optimizing website performance, improving UX of landing pages, and adding technical SEO features.",
      "Researched keywords, identified target audiences, wrote ad copy, A/B tested campaigns, and analyzed data to run digital ad campaigns with 25%-30% higher conversion rates and 10%-30% lower costs-per-lead than industry averages.",
    ],
  },
  {
    role: "Digital Humanities Researcher",
    company: "University of Copenhagen",
    dates: "4/2018-3/2019",
    location: "Copenhagen, DK",
    highlights: [
      "Collaborated with data scientists, supervised student researchers, and published peer-reviewed research as part of the team on a $1.2M historical linguistics project.",
      "Automated research data collection with Python web scraping scripts, reducing data gathering time by over 90%.",
      "Validated and annotated critical training data using subject matter expertise to improve the performance of an AI (Machine Learning) model.",
    ],
  },
];
