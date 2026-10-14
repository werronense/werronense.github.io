import type { Experience } from "../../../data/experience";

type ExperienceItemProps = Experience;

export default function ExperienceItem({
  role,
  company,
  dates,
  location,
  highlights,
}: ExperienceItemProps) {
  return (
    <section>
      <h3 className="text-lg">
        {role}, <span className="italic">{company}</span>
      </h3>
      <p>
        {dates}, {location}
      </p>
      <ul className="list-disc ml-4 py-2 space-y-2">
        {highlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>
    </section>
  );
}
