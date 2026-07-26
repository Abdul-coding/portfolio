import { useEffect, useState } from "react";

// Set these in .env (see .env.example). If either is missing, or the
// request fails for any reason, we silently fall back to the static PDF
// in /public so the button never breaks.
const FOLDER_ID = import.meta.env.VITE_RESUME_DRIVE_FOLDER_ID as string | undefined;
const API_KEY = import.meta.env.VITE_GOOGLE_DRIVE_API_KEY as string | undefined;
const FALLBACK_URL = "/Abdul_Resume_Node.pdf";

export interface ResumeFile {
  url: string;
  name: string;
  /** true if this came from the live Drive folder, false if we fell back to the static file */
  isLive: boolean;
}

export function useLatestResume() {
  const [resume, setResume] = useState<ResumeFile>({
    url: FALLBACK_URL,
    name: "Abdul_Resume_Node.pdf",
    isLive: false,
  });
  const [loading, setLoading] = useState(Boolean(FOLDER_ID && API_KEY));

  useEffect(() => {
    if (!FOLDER_ID || !API_KEY) {
      // Not configured yet — just use the static fallback, no error needed.
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    const params = new URLSearchParams({
      q: `'${FOLDER_ID}' in parents and trashed = false`,
      orderBy: "modifiedTime desc",
      pageSize: "1",
      fields: "files(id,name,modifiedTime,webContentLink)",
      key: API_KEY,
    });

    fetch(`https://www.googleapis.com/drive/v3/files?${params.toString()}`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Drive API responded ${res.status}`);
        return res.json();
      })
      .then((data: { files?: { id: string; name: string; webContentLink?: string }[] }) => {
        const file = data.files?.[0];
        if (!file) throw new Error("No file found in the resume folder");
        setResume({
          url: file.webContentLink ?? `https://drive.google.com/uc?export=download&id=${file.id}`,
          name: file.name,
          isLive: true,
        });
      })
      .catch((err) => {
        if (err?.name !== "AbortError") {
          // Keep the static fallback already set in state; just log for debugging.
          console.warn("[resume] Falling back to static PDF —", err.message);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return { resume, loading };
}
