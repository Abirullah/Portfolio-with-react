function FishSprite({ className, variant = "cyan", flipped = false }) {
  const colors = {
    cyan: { body: "#42f5e6", fin: "#00bcd4" },
    blue: { body: "#4aa3ff", fin: "#2b6bff" },
    gold: { body: "#ffd166", fin: "#f4a261" },
    pink: { body: "#ff7ab6", fin: "#ff4d6d" },
  };

  const palette = colors[variant] ?? colors.cyan;

  return (
    <svg
      className={className}
      viewBox="0 0 220 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ transform: flipped ? "scaleX(-1)" : undefined }}
    >
      <defs>
        <linearGradient id="fishBody" x1="40" y1="40" x2="180" y2="110">
          <stop stopColor={palette.body} stopOpacity="0.95" />
          <stop stopColor={palette.fin} stopOpacity="0.85" offset="1" />
        </linearGradient>
        <radialGradient id="fishGlow" cx="0" cy="0" r="1">
          <stop stopColor="#ffffff" stopOpacity="0.55" />
          <stop stopColor="#ffffff" stopOpacity="0" offset="1" />
        </radialGradient>
      </defs>

      {/* Tail */}
      <path
        d="M38 72C20 50 12 42 8 38C18 76 18 88 8 106C12 102 20 94 38 72Z"
        fill={palette.fin}
        opacity="0.85"
      />

      {/* Body */}
      <path
        d="M48 72C48 46 78 28 116 28C158 28 190 44 200 64C208 80 196 98 178 110C158 124 134 128 116 128C78 128 48 98 48 72Z"
        fill="url(#fishBody)"
      />

      {/* Fin */}
      <path
        d="M126 60C134 54 148 52 162 56C148 70 142 82 138 96C132 84 126 72 126 60Z"
        fill={palette.fin}
        opacity="0.55"
      />

      {/* Eye */}
      <circle cx="164" cy="66" r="9" fill="#08121a" opacity="0.85" />
      <circle cx="167" cy="63" r="3" fill="#ffffff" opacity="0.9" />

      {/* Soft glow */}
      <ellipse
        cx="120"
        cy="76"
        rx="86"
        ry="52"
        fill="url(#fishGlow)"
        opacity="0.18"
      />
    </svg>
  );
}

export default FishSprite;
