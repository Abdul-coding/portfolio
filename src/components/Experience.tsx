import { experience } from "../data";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="01 · experience" title="Where I've been building">
      {experience.map((job) => (
        <div key={job.company} className="grid sm:grid-cols-[220px_1fr] gap-6 sm:gap-10">
          <div>
            <h3 className="font-display text-xl text-fg">{job.role}</h3>
            <p className="text-muted mt-1">{job.company}</p>
            <p className="font-mono text-xs text-signal mt-3">{job.period}</p>
          </div>
          <ul className="space-y-4 border-l border-hairline pl-6">
            {job.bullets.map((b, i) => (
              <li key={i} className="relative text-muted leading-relaxed">
                <span className="absolute -left-[27px] top-2 w-2 h-2 rounded-full bg-hairline" />
                <span className="text-[15px]">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  );
}
