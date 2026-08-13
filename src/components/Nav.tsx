import { useEffect, useState } from "react";
import { profile } from "../data";
import ResumeButton from "./ResumeButton";

const links = [
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#education", label: "education" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/85 backdrop-blur border-b border-hairline" : "border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm tracking-tight text-fg visible-focus flex items-center gap-2"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-stream animate-pulseDot" />
          {profile.name.toLowerCase().replace(" ", ".")}
        </a>
        <ul className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-muted">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-signal transition-colors visible-focus">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <ResumeButton variant="nav" label="resume" />
          <a
            href={`mailto:${profile.email}`}
            className="hidden md:inline-block font-mono text-xs uppercase tracking-widest border border-hairline px-3 py-2 rounded hover:border-signal hover:text-signal transition-colors visible-focus"
          >
            say hi
          </a>
        </div>
      </nav>
    </header>
  );
}
