function DiverSprite({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="diverBody" x1="30" y1="40" x2="90" y2="160">
          <stop stopColor="#ffb366" stopOpacity="0.9" />
          <stop stopColor="#ff8c42" stopOpacity="0.8" offset="1" />
        </linearGradient>
        <radialGradient id="diverGlow" cx="0.5" cy="0.3" r="0.8">
          <stop stopColor="#ffffff" stopOpacity="0.4" />
          <stop stopColor="#ffffff" stopOpacity="0" offset="1" />
        </radialGradient>
      </defs>

      {/* Head */}
      <circle
        cx="60"
        cy="35"
        r="18"
        fill="url(#diverBody)"
        stroke="#ff6b35"
        strokeWidth="1"
      />

      {/* Body */}
      <path
        d="M45 53 L75 53 L78 120 L42 120 Z"
        fill="url(#diverBody)"
        stroke="#ff6b35"
        strokeWidth="1"
      />

      {/* Arms */}
      <path
        d="M35 65 L45 60 L45 75 L35 80 Z"
        fill="url(#diverBody)"
        stroke="#ff6b35"
        strokeWidth="1"
      />
      <path
        d="M85 65 L75 60 L75 75 L85 80 Z"
        fill="url(#diverBody)"
        stroke="#ff6b35"
        strokeWidth="1"
      />

      {/* Legs */}
      <path
        d="M50 120 L50 160 L45 165 Z"
        fill="url(#diverBody)"
        stroke="#ff6b35"
        strokeWidth="1"
      />
      <path
        d="M70 120 L70 160 L75 165 Z"
        fill="url(#diverBody)"
        stroke="#ff6b35"
        strokeWidth="1"
      />

      {/* Fins */}
      <path
        d="M35 160 L50 155 L50 165 L35 170 Z"
        fill="#42f5e6"
        opacity="0.8"
      />
      <path
        d="M85 160 L70 155 L70 165 L85 170 Z"
        fill="#42f5e6"
        opacity="0.8"
      />

      {/* Mask */}
      <path
        d="M48 28 L72 28 L70 38 L50 38 Z"
        fill="#2b6bff"
        opacity="0.9"
      />
      <circle cx="55" cy="33" r="2" fill="#ffffff" opacity="0.8" />
      <circle cx="65" cy="33" r="2" fill="#ffffff" opacity="0.8" />

      {/* Air tank */}
      <rect
        x="40"
        y="70"
        width="40"
        height="25"
        rx="5"
        fill="#666666"
        opacity="0.8"
      />
      <rect
        x="45"
        y="75"
        width="30"
        height="15"
        rx="3"
        fill="#999999"
        opacity="0.6"
      />

      {/* Bubbles */}
      <circle cx="30" cy="25" r="3" fill="#ffffff" opacity="0.6" />
      <circle cx="25" cy="20" r="2" fill="#ffffff" opacity="0.4" />
      <circle cx="90" cy="30" r="4" fill="#ffffff" opacity="0.5" />
      <circle cx="95" cy="25" r="2.5" fill="#ffffff" opacity="0.3" />
    </svg>
  );
}

export default DiverSprite;