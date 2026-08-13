import { profile, metrics } from "../data";
import TracePanel from "./TracePanel";
import ResumeButton from "./ResumeButton";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-hairline">
      <div className="absolute inset-0 bg-grid bg-grid pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="max-w-6xl mx-auto px-6 pt-36 pb-20 sm:pt-44 sm:pb-28 relative">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-start">
          <div className="animate-rise">
            <p className="font-mono text-xs tracking-widest text-stream mb-5">
              {profile.role.toLowerCase()} · node.js / typescript
            </p>
            <div className="flex items-center justify-between gap-6 mb-6">
              <h1 className="font-display text-4xl sm:text-6xl leading-[1.05] font-medium text-fg min-w-0">
                {profile.name}
                <span className="block text-muted mt-2 text-2xl sm:text-3xl font-normal">
                  builds systems that don't fall over under load.
                </span>
              </h1>
              <img
                src="/profile.jpg"
                alt={profile.name}
                width={128}
                height={128}
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover shrink-0 border-2 border-stream shadow-[0_0_24px_rgba(15,118,110,0.25)]"
              />
            </div>
            <p className="text-muted text-base sm:text-lg max-w-xl leading-relaxed mb-9">
              {profile.summary}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-signal text-fg font-mono text-sm font-medium px-5 py-3 rounded hover:bg-[#e89b2d] transition-colors visible-focus"
              >
                view key projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-hairline text-fg font-mono text-sm px-5 py-3 rounded hover:border-stream hover:text-stream transition-colors visible-focus"
              >
                get in touch
              </a>
              <ResumeButton variant="ghost" />
            </div>

            <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 pt-8 border-t border-hairline">
              {metrics.map((m) => (
                <div key={m.label}>
                  <dt className="sr-only">{m.label}</dt>
                  <dd className="font-display text-2xl sm:text-3xl text-fg">{m.value}</dd>
                  <dd className="font-mono text-[11px] text-muted mt-1 leading-snug">{m.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="animate-rise lg:pt-2" style={{ animationDelay: "120ms" }}>
            <TracePanel />
            <p className="font-mono text-[11px] text-dim mt-3 leading-relaxed">
              a simplified trace of the caching path I built: single-flight lock prevents
              redundant re-computation when many requests miss the cache at once.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
