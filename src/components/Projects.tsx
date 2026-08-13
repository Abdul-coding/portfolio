import { useState } from "react";
import { projects } from "../data";
import Section from "./Section";

export default function Projects() {
  const [open, setOpen] = useState<string | null>(projects[0]?.name ?? null);

  return (
    <Section id="projects" eyebrow="02 · key projects" title="Platforms shipped to production">
      <div className="space-y-4">
        {projects.map((p) => {
          const isOpen = open === p.name;
          return (
            <div
              key={p.name}
              className="rounded-lg border border-hairline bg-panel overflow-hidden transition-colors hover:border-hairline2"
            >
              <button
                onClick={() => setOpen(isOpen ? null : p.name)}
                aria-expanded={isOpen}
                className="w-full flex items-center gap-5 text-left px-5 sm:px-7 py-5 visible-focus"
              >
                <span className="font-mono text-xs text-dim w-6 shrink-0">
                  {String(projects.indexOf(p) + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h3 className="font-display text-lg sm:text-xl text-fg">
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="hover:text-stream underline-offset-4 hover:underline visible-focus rounded-sm"
                      >
                        {p.name}
                      </a>
                    </h3>
                    <span className="text-muted text-sm">{p.subtitle}</span>
                  </div>
                </div>
                <div className="hidden sm:block text-right shrink-0 mr-2">
                  <div className="font-display text-lg text-signal">{p.stat.value}</div>
                  <div className="font-mono text-[10px] text-dim uppercase tracking-wide">{p.stat.label}</div>
                </div>
                <span
                  className={`font-mono text-signal text-lg transition-transform shrink-0 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>

              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-5 sm:px-7 pb-6 pl-[3.25rem] sm:pl-[3.75rem]">
                    <ul className="space-y-3 mb-5">
                      {p.bullets.map((b, i) => (
                        <li key={i} className="text-muted text-[15px] leading-relaxed">
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[11px] text-stream border border-hairline rounded-full px-2.5 py-1"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
