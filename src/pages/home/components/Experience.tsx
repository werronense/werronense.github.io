import { experience } from "../../../data/experience";
import ExperienceItem from "./ExperienceItem";

export default function Experience() {
  return (
    <section className="text-pearl">
      <h2 className="text-xl">Experience</h2>
      <div className="space-y-4">
        {experience.map((item, index) => (
          <ExperienceItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
