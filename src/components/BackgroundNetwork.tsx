/** Hero background: SVG node graph with dashed flowing edges (same effect as MY-PORTFOLIO). */
export default function BackgroundNetwork() {
  return (
    <div
      className="bg-network fixed inset-0 z-0 pointer-events-none opacity-70"
      aria-hidden="true"
    >
      <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="edge" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2d7a62" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#e85d04" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#2d7a62" stopOpacity="0.15" />
          </linearGradient>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e85d04" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#e85d04" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g fill="none" stroke="url(#edge)" strokeWidth="1.25">
          <path className="flow" d="M180 180 C320 140, 420 260, 560 240" />
          <path className="flow" d="M560 240 C700 210, 760 340, 920 310" />
          <path className="flow" d="M180 180 C260 320, 340 380, 420 520" />
          <path className="flow" d="M560 240 C540 380, 620 460, 700 580" />
          <path className="flow" d="M920 310 C880 430, 820 520, 700 580" />
          <path className="flow" d="M420 520 C520 560, 600 600, 700 580" />
          <path className="flow" d="M920 310 C980 220, 1040 180, 1100 140" />
        </g>

        <g>
          <circle className="node" cx="180" cy="180" r="38" fill="url(#nodeGlow)" />
          <circle className="node" cx="180" cy="180" r="7" fill="#0b1f1a" opacity="0.55" />

          <circle className="node" cx="560" cy="240" r="48" fill="url(#nodeGlow)" />
          <circle className="node" cx="560" cy="240" r="9" fill="#e85d04" opacity="0.7" />

          <circle className="node" cx="920" cy="310" r="42" fill="url(#nodeGlow)" />
          <circle className="node" cx="920" cy="310" r="8" fill="#0b1f1a" opacity="0.5" />

          <circle className="node" cx="420" cy="520" r="36" fill="url(#nodeGlow)" />
          <circle className="node" cx="420" cy="520" r="6" fill="#2d7a62" opacity="0.65" />

          <circle className="node" cx="700" cy="580" r="44" fill="url(#nodeGlow)" />
          <circle className="node" cx="700" cy="580" r="8" fill="#0b1f1a" opacity="0.55" />

          <circle className="node" cx="1100" cy="140" r="28" fill="url(#nodeGlow)" />
          <circle className="node" cx="1100" cy="140" r="5" fill="#e85d04" opacity="0.55" />
        </g>

        <g
          fill="none"
          stroke="#0b1f1a"
          strokeOpacity="0.08"
          strokeWidth="1"
          fontFamily="JetBrains Mono, monospace"
        >
          <rect x="70" y="620" width="160" height="54" />
          <rect x="980" y="520" width="140" height="54" />
        </g>
        <text
          x="90"
          y="652"
          fill="#0b1f1a"
          fillOpacity="0.28"
          fontSize="13"
          fontFamily="JetBrains Mono, monospace"
        >
          kafka · redis
        </text>
        <text
          x="998"
          y="552"
          fill="#0b1f1a"
          fillOpacity="0.28"
          fontSize="13"
          fontFamily="JetBrains Mono, monospace"
        >
          nest · grpc
        </text>
      </svg>
    </div>
  );
}
