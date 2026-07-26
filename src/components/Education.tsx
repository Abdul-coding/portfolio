import { education, certifications } from "../data";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" eyebrow="04 · background" title="Education & certifications">
      <div className="grid sm:grid-cols-2 gap-10">
        <div className="rounded-lg border border-hairline bg-panel/60 p-6">
          <p className="font-mono text-[11px] uppercase tracking-widest text-dim mb-3">Education</p>
          <h3 className="font-display text-lg text-fg mb-1">{education.degree}</h3>
          <p className="text-muted">{education.school}</p>
          <p className="font-mono text-xs text-signal mt-3">{education.period}</p>
        </div>
        <div className="rounded-lg border border-hairline bg-panel/60 p-6">
          <p className="font-mono text-[11px] uppercase tracking-widest text-dim mb-3">Certifications</p>
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li key={c.name}>
                <h3 className="font-display text-lg text-fg mb-0.5">
                  {c.url ? (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-stream underline-offset-4 hover:underline visible-focus rounded-sm"
                    >
                      {c.name}
                    </a>
                  ) : (
                    c.name
                  )}
                </h3>
                <p className="text-muted text-sm">{c.issuer}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
