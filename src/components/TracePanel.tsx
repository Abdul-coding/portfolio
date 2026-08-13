import { useEffect, useState } from "react";
import { traceSteps } from "../data";

const stateColor: Record<string, string> = {
  in: "text-stream",
  miss: "text-danger",
  wait: "text-signal",
  fetch: "text-signal",
  set: "text-stream",
  out: "text-stream",
};

export default function TracePanel() {
  const [active, setActive] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => {
        const next = prev + 1;
        if (next >= traceSteps.length) {
          setCycle((c) => c + 1);
          return 0;
        }
        return next;
      });
    }, 950);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="relative rounded-lg border border-hairline bg-panel shadow-[0_8px_30px_rgba(15,27,45,0.06)] overflow-hidden"
      role="img"
      aria-label="Animated diagram of a cached request: client request, redis lookup, single-flight lock, batched database fetch, cache pre-warm, response."
    >
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-hairline bg-panel2">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-danger/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-signal/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-stream/70" />
        </div>
        <span className="font-mono text-[11px] text-dim">request-trace.log — run #{cycle + 1}</span>
      </div>

      <div className="p-4 sm:p-5 font-mono text-[13px] leading-7">
        {traceSteps.map((step, i) => {
          const isActive = i === active;
          const isPast = i < active;
          return (
            <div
              key={step.id}
              className={`flex items-center gap-3 transition-opacity duration-300 ${
                isActive || isPast ? "opacity-100" : "opacity-30"
              }`}
            >
              <span className="text-dim w-5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <span
                className={`w-16 sm:w-20 shrink-0 uppercase text-[10px] tracking-wider ${
                  isActive ? stateColor[step.state] : "text-dim"
                }`}
              >
                {step.state}
              </span>
              <span className={isActive ? "text-fg" : "text-muted"}>{step.label}</span>
              <span className="ml-auto text-dim text-[11px] hidden sm:inline">{step.note}</span>
              {isActive && <span className="w-1.5 h-3.5 bg-signal animate-blink" />}
            </div>
          );
        })}
      </div>

      <div className="relative h-px w-full bg-hairline overflow-hidden">
        <span className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-stream to-transparent animate-scan" />
      </div>
    </div>
  );
}
