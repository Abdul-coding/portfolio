import { profile } from "../data";
import ResumeButton from "./ResumeButton";

export default function Contact() {
  return (
    <footer id="contact" className="border-t border-hairline">
      <div className="max-w-6xl mx-auto px-6 py-20 sm:py-28">
        <span className="inline-block font-mono text-xs sm:text-sm font-semibold text-signal tracking-[0.2em] uppercase bg-signal/10 border border-signal/30 rounded px-3 py-1.5 mb-5">
          05 · contact
        </span>
        <h2 className="font-display text-3xl sm:text-5xl text-fg max-w-2xl leading-tight mb-10">
          Building something that needs to hold up under real traffic? Let's talk.
        </h2>
        <div className="flex flex-wrap gap-4 mb-16">
          <ResumeButton variant="primary" />
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 border border-hairline text-fg font-mono text-sm px-5 py-3 rounded hover:border-stream hover:text-stream transition-colors visible-focus"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 border border-hairline text-fg font-mono text-sm px-5 py-3 rounded hover:border-stream hover:text-stream transition-colors visible-focus"
          >
            {profile.phone}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-hairline text-fg font-mono text-sm px-5 py-3 rounded hover:border-stream hover:text-stream transition-colors visible-focus"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-hairline text-fg font-mono text-sm px-5 py-3 rounded hover:border-stream hover:text-stream transition-colors visible-focus"
          >
            GitHub
          </a>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-8 border-t border-hairline font-mono text-[11px] text-dim">
          <span>
            {profile.name} · {profile.role} · {profile.location}
          </span>
        </div>
      </div>
    </footer>
  );
}
