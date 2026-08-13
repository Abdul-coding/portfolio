import { skillGroups } from "../data";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="03 · stack" title="Tools I reach for">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
        {skillGroups.map((g) => (
          <div key={g.title}>
            <h3 className="font-mono text-[11px] uppercase tracking-widest text-dim mb-3">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="text-sm text-muted bg-ink border border-hairline rounded px-2.5 py-1 hover:border-signal hover:text-fg transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
