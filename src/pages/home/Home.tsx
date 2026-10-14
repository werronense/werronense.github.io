import portrait from "../../assets/stephen-werronen.jpg";
import { experience } from "../../data/experience";
import ExperienceItem from "./components/ExperienceItem";

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
          <div className="space-y-4">
            {experience.map((item, index) => (
              <ExperienceItem key={index} {...item} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
