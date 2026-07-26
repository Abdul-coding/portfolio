import { useLatestResume } from "../hooks/useLatestResume";

const styles = {
  primary:
    "inline-flex items-center gap-2 bg-signal text-ink font-mono text-sm font-medium px-5 py-3 rounded hover:bg-[#ffc576] transition-colors visible-focus",
  ghost:
    "inline-flex items-center gap-2 border border-hairline text-fg font-mono text-sm px-5 py-3 rounded hover:border-stream hover:text-stream transition-colors visible-focus",
  nav: "hidden md:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest border border-hairline px-3 py-2 rounded hover:border-signal hover:text-signal transition-colors visible-focus",
} as const;

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3v12m0 0-4.5-4.5M12 15l4.5-4.5M4 19h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ResumeButton({
  variant = "primary",
  label = "download resume",
}: {
  variant?: keyof typeof styles;
  label?: string;
}) {
  const { resume, loading } = useLatestResume();
  // Same-origin fallback: force a file download. Drive links are cross-origin
  // so the download attr is ignored — open those in a new tab instead.
  const isLocal = resume.url.startsWith("/");

  return (
    <a
      href={resume.url}
      {...(isLocal
        ? { download: resume.name || "Resume.pdf" }
        : { target: "_blank", rel: "noreferrer" })}
      className={styles[variant]}
      aria-label={loading ? "Loading resume" : `Download resume (${resume.name})`}
    >
      <DownloadIcon />
      {loading ? "loading résumé…" : label}
      {resume.isLive && (
        <span
          className="w-1.5 h-1.5 rounded-full bg-stream animate-pulseDot"
          title="Synced live from Google Drive"
        />
      )}
    </a>
  );
}
