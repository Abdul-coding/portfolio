/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RESUME_DRIVE_FOLDER_ID?: string;
  readonly VITE_GOOGLE_DRIVE_API_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
