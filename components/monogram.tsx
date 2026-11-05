// Roger's personal monogram: an "R" inside a fine platinum orbit ring,
// echoing the Polygrow logo language (intelligence + chaos, order in
// motion) without copying it. Deliberately small and quiet — the photo
// is the hero of the page, this is just a signature seal.
export default function Monogram({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      role="img"
      aria-label="Roger Oria monogram"
    >
      <defs>
        <linearGradient
          id="monogram-plat"
          x1="8"
          y1="6"
          x2="40"
          y2="42"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F4F5F7" />
          <stop offset="0.5" stopColor="#C8CDD6" />
          <stop offset="1" stopColor="#8A919C" />
        </linearGradient>
      </defs>
      {/* orbit ring, tilted like the Polygrow chaos orbit */}
      <ellipse
        cx="24"
        cy="24"
        rx="21"
        ry="9"
        transform="rotate(-24 24 24)"
        stroke="url(#monogram-plat)"
        strokeWidth="1"
        opacity="0.7"
      />
      <circle cx="42" cy="14.5" r="1.6" fill="#00E5FF" />
      <text
        x="24"
        y="31"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="24"
        fontWeight="700"
        fill="url(#monogram-plat)"
      >
        R
      </text>
    </svg>
  )
}
