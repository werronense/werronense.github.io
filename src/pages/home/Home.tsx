import portrait from "../../assets/stephen-werronen.jpg";

export default function Home() {
  return (
    <main className="bg-night min-h-screen">
      <div className="flex justify-center items-center py-12 bg-peach">
        <h1 className="text-5xl">Stephen Werronen</h1>
      </div>
      <div className="bg-linear-to-b from-peach from-50% to-night to-50%">
        <img
          src={portrait}
          alt="Stephen Werronen"
          className="rounded-full max-w-48 mx-auto"
        />
      </div>
      <div className="max-w-md mx-auto">
        <section className="text-pearl py-4">
          <div className="space-y-2">
            <h2 className="text-2xl">Full Stack Software Developer</h2>
            <p>
              Software developer with 3+ years of experience, specializing in
              full stack web apps (TypeScript, React, Node.js, SQL) with
              industry experience in legal tech, education, and marketing.
            </p>
            <p>
              Curious, adaptable, and driven to master new skills and apply them
              to achieve great results.
            </p>
          </div>
        </section>
      </div>
      <div className="max-w-md mx-auto py-4">
        <section className="text-pearl">
          <h2 className="text-xl">Experience</h2>
          <section>
            <h3 className="text-lg">
              Full Stack Developer, <span className="italic">command+k</span>
            </h3>
            <p>2/2025-3/2026, Vancouver, BC</p>
            <ul className="list-disc ml-4 py-2 space-y-2">
              <li>
                Collaborated with early-stage startup founders to transform
                their vision into a Legal Tech app that achieved successful
                acquisition.
              </li>
              <li>
                Built dashboards and automations with React, TypeScript,
                Next.js, Node.js, and PostgreSQL to reduce the cost of the core
                product by over 50% and align with business strategy.
              </li>
              <li>
                Took end-to-end ownership of designing and building new features
                of a React app that led to the addition of over 4000 users in
                three months.
              </li>
              <li>
                Managed production updates including PostgreSQL database
                migrations and feature releases with CI/CD tools such as Git,
                GitHub, and Vercel to increase deployment speed by 200%.
              </li>
            </ul>
          </section>
        </section>
      </div>
    </main>
  );
}
