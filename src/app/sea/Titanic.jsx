function Titanic({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 900 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Sunken ship silhouette"
    >
      <defs>
        <linearGradient id="hull" x1="120" y1="40" x2="760" y2="220">
          <stop stopColor="#0c1a24" />
          <stop stopColor="#031019" offset="1" />
        </linearGradient>
        <linearGradient id="rust" x1="220" y1="120" x2="640" y2="240">
          <stop stopColor="#c07a3c" stopOpacity="0.0" />
          <stop stopColor="#c07a3c" stopOpacity="0.22" offset="1" />
        </linearGradient>
        <radialGradient id="light" cx="0" cy="0" r="1">
          <stop stopColor="#7dd3fc" stopOpacity="0.65" />
          <stop stopColor="#7dd3fc" stopOpacity="0.0" offset="1" />
        </radialGradient>
      </defs>

      {/* seabed */}
      <path
        d="M0 220C130 200 240 210 360 230C460 248 590 250 900 226V260H0V220Z"
        fill="#02070d"
      />

      {/* hull */}
      <path
        d="M150 150C238 110 330 92 410 82C530 66 660 72 760 104C820 124 856 154 880 184C732 214 590 222 442 216C300 210 220 194 120 176C132 166 140 158 150 150Z"
        fill="url(#hull)"
      />

      {/* deck + superstructure */}
      <path
        d="M268 128C324 100 386 82 450 76C540 68 628 78 712 110L700 140C626 114 546 106 458 114C382 120 320 140 270 166L268 128Z"
        fill="#061522"
        opacity="0.95"
      />

      {/* funnels */}
      <path
        d="M420 84C432 68 452 66 468 78L476 110L434 116L420 84Z"
        fill="#081a26"
      />
      <path
        d="M508 84C520 68 540 66 556 78L564 110L522 116L508 84Z"
        fill="#081a26"
      />
      <path
        d="M596 90C610 72 632 70 648 84L656 112L610 122L596 90Z"
        fill="#081a26"
      />

      {/* rust overlay */}
      <path
        d="M150 150C238 110 330 92 410 82C530 66 660 72 760 104C820 124 856 154 880 184C732 214 590 222 442 216C300 210 220 194 120 176C132 166 140 158 150 150Z"
        fill="url(#rust)"
      />

      {/* a faint exploration light */}
      <ellipse
        cx="330"
        cy="170"
        rx="200"
        ry="90"
        fill="url(#light)"
        opacity="0.25"
      />

      {/* small portholes */}
      {Array.from({ length: 10 }).map((_, idx) => (
        <circle
          key={idx}
          cx={280 + idx * 42}
          cy={170 + (idx % 2) * 10}
          r="6"
          fill="#0b2433"
          opacity="0.55"
        />
      ))}
    </svg>
  );
}

export default Titanic;
