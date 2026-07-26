import { ReactNode } from "react";

export default function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-6 py-20 sm:py-28 scroll-mt-20">
      <div className="flex items-center gap-4 mb-10 sm:mb-14">
        <span className="font-mono text-xs sm:text-sm font-semibold text-signal tracking-[0.2em] uppercase bg-signal/10 border border-signal/30 rounded px-3 py-1.5 whitespace-nowrap">
          {eyebrow}
        </span>
        <span className="h-px flex-1 bg-hairline" />
        <h2 className="font-display text-2xl sm:text-3xl font-medium text-fg">{title}</h2>
      </div>
      {children}
    </section>
  );
}
