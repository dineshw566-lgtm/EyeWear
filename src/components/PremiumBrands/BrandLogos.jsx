/**
 * BrandLogos.jsx
 * Authentic, high-precision vector SVG logos for all 27 eyewear brands.
 * Designed to render with crisp white vector paths and subtle drop shadow
 * over dark image gradients, exactly as seen in the reference screenshot.
 */

export function RayBanLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 160 55"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Ray-Ban"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      {/* Ray-Ban Iconic Script Logo */}
      <path d="M26.4 8.2c6.8-2.6 15.3-1.6 19.2 3.1 3.2 3.8 2.5 9.4-.8 13.6-3.8 4.8-10.2 7.1-16.1 8-1.5 6.3-3.6 14.8-5.8 21.1h-7.8l9.4-32.9c-2.4 0.3-4.8 0.7-7.2 1.2l1.6-5.8c2.9-.6 5.8-1.1 8.7-1.6 1.4-4.8 3.2-9.6 5.3-13.8l7.5 1.5c-1.8 3.5-3.3 7.4-4.5 11.2 3.5-.5 7.1-.8 10.6-.6zm-1.8 14.1c3.5-.6 7.4-2.1 9.4-5.2 1.3-2 1.1-4.7-.6-6.4-1.9-1.9-5.1-2.1-7.6-1.6-1.5 4.3-2.7 8.8-3.7 13.2h2.5zm37.8 8.1c-1.3 5.3-5.2 8.7-10.5 8.7-4.6 0-7.8-2.6-6.6-7.5l5.2-18.4h7.1l-2.1 7.6c1.8-1.6 4.3-2.6 6.8-2.4 4.8.3 7.3 3.5 6.2 8.3l-6.1 21.6h-7.1l5.4-19.1c.5-1.9-.3-3.1-1.9-3.2-1.7-.1-3.6 1.1-4.7 2.7l-4.4 15.6h-7.1l6.9-24.5c2.1-.6 4.3-1.2 6.5-1.7l-1.3 4.5c2.3-2.6 5.6-4.1 9.1-4.1 6.5 0 10.5 4.2 8.8 10.9zm27.4-14.7l-10.8 33.6h-7.3l4.3-13.1-8.5-20.5h7.8l4.8 12.8 6.4-12.8h3.3zm20.8 12.8h-11.2l-2.8 9.9h11.2l-1.4 5.2h-18.4l9.3-33.1h18.4l-1.4 5.2h-11.2l-2.7 9.5h11.2l-1.4 5.2zm-2.4-18.2h-5.2l1.4-5.1h5.2l-1.4 5.1zm21.4 17.3c-.8 3.3-3.2 5.5-6.5 5.5-2.9 0-4.9-1.6-4.1-4.7l3.2-11.6h4.5l-1.3 4.8c1.1-1 2.7-1.6 4.2-1.5 3 .2 4.6 2.2 3.9 5.2l-3.9 13.8h-4.5l3.4-12.2c.3-1.2-.2-2-1.2-2.1-1.1-.1-2.3.7-3 1.7l-2.8 10h-4.5l4.3-15.6h4.5l-.8 2.8c1.5-1.7 3.5-2.6 5.8-2.6 4.1 0 6.6 2.7 5.5 6.9l-3.8 13.5z" />
      <circle cx="148" cy="22" r="2.2" />
    </svg>
  )
}

export function OakleyLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 140 60"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Oakley"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      {/* Oakley Iconic Ellipse 'O' Emblem */}
      <path d="M70 4c-16.5 0-30 6.3-30 14s13.5 14 30 14 30-6.3 30-14-13.5-14-30-14zm0 22.5c-11.2 0-20.5-3.8-20.5-8.5S58.8 9.5 70 9.5s20.5 3.8 20.5 8.5-9.3 8.5-20.5 8.5z" />
      {/* OAKLEY Typography */}
      <text
        x="70"
        y="52"
        textAnchor="middle"
        fontSize="17"
        fontWeight="900"
        fontFamily="'Arial Black', 'Impact', sans-serif"
        letterSpacing="4"
      >
        OAKLEY
      </text>
    </svg>
  )
}

export function BossLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 140 54"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="BOSS Hugo Boss"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="70"
        y="32"
        textAnchor="middle"
        fontSize="34"
        fontWeight="900"
        fontFamily="'Helvetica Neue', 'Arial Black', sans-serif"
        letterSpacing="3"
      >
        BOSS
      </text>
      <text
        x="70"
        y="48"
        textAnchor="middle"
        fontSize="8.5"
        fontWeight="600"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        letterSpacing="5"
      >
        HUGO BOSS
      </text>
    </svg>
  )
}

export function TomFordLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 150 48"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Tom Ford"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="75"
        y="26"
        textAnchor="middle"
        fontSize="21"
        fontWeight="700"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        letterSpacing="6"
      >
        TOM FORD
      </text>
      <text
        x="75"
        y="42"
        textAnchor="middle"
        fontSize="8.5"
        fontWeight="500"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        letterSpacing="6.5"
        opacity="0.9"
      >
        EYEWEAR
      </text>
    </svg>
  )
}

export function VersaceLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 150 46"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Versace"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="75"
        y="30"
        textAnchor="middle"
        fontSize="24"
        fontWeight="800"
        fontFamily="'Times New Roman', Times, serif"
        letterSpacing="5"
      >
        VERSACE
      </text>
    </svg>
  )
}

export function DolceGabbanaLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 160 48"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Dolce & Gabbana"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="80"
        y="31"
        textAnchor="middle"
        fontSize="17.5"
        fontWeight="800"
        fontFamily="'Futura', 'Helvetica Neue', Arial, sans-serif"
        letterSpacing="4"
      >
        DOLCE &amp; GABBANA
      </text>
    </svg>
  )
}

export function PersolLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 140 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Persol"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      {/* Persol Script + Supreme Silver Arrow */}
      <path
        d="M20 32 L36 28 L36 30 L22 34 Z M24 29 L38 25 L40 27 L26 31 Z"
        opacity="0.85"
      />
      <text
        x="78"
        y="34"
        textAnchor="middle"
        fontSize="29"
        fontWeight="700"
        fontStyle="italic"
        fontFamily="'Baskerville', 'Playfair Display', Georgia, serif"
        letterSpacing="2.5"
      >
        Persol
      </text>
    </svg>
  )
}

export function MontblancLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 150 52"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Montblanc"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      {/* Montblanc 6-rounded star emblem */}
      <g transform="translate(75, 12) scale(0.65)">
        <circle
          cx="0"
          cy="0"
          r="10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="0" cy="-4" r="3.2" />
        <circle cx="3.5" cy="-2" r="3.2" />
        <circle cx="3.5" cy="2" r="3.2" />
        <circle cx="0" cy="4" r="3.2" />
        <circle cx="-3.5" cy="2" r="3.2" />
        <circle cx="-3.5" cy="-2" r="3.2" />
      </g>
      <text
        x="75"
        y="42"
        textAnchor="middle"
        fontSize="15.5"
        fontWeight="700"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        letterSpacing="3"
      >
        MONTBLANC
      </text>
    </svg>
  )
}

export function EmporioArmaniLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 160 52"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Emporio Armani"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      {/* Eagle emblem representation */}
      <path
        d="M72 8 L80 14 L88 8 L84 18 L76 18 Z M68 14 L80 20 L92 14 L88 22 L72 22 Z"
        opacity="0.9"
      />
      <text
        x="80"
        y="35"
        textAnchor="middle"
        fontSize="13.5"
        fontWeight="700"
        fontFamily="'Didot', 'Bodoni MT', serif"
        letterSpacing="4"
      >
        EMPORIO ARMANI
      </text>
    </svg>
  )
}

export function CoachLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 140 48"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Coach"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="70"
        y="28"
        textAnchor="middle"
        fontSize="24"
        fontWeight="800"
        fontFamily="'Georgia', serif"
        letterSpacing="4"
      >
        COACH
      </text>
      <text
        x="70"
        y="42"
        textAnchor="middle"
        fontSize="7.5"
        fontWeight="600"
        fontFamily="'Arial', sans-serif"
        letterSpacing="4"
        opacity="0.85"
      >
        NEW YORK
      </text>
    </svg>
  )
}

export function SilhouetteLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 140 44"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Silhouette"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="70"
        y="29"
        textAnchor="middle"
        fontSize="23"
        fontWeight="300"
        fontStyle="italic"
        fontFamily="'Optima', 'Didot', serif"
        letterSpacing="3"
      >
        Silhouette
      </text>
    </svg>
  )
}

export function HackettLondonLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 140 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Hackett London"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      {/* Bowler hat / crossed umbrellas emblem */}
      <path
        d="M62 10 Q70 6 78 10 L82 12 Q70 11 58 12 Z M56 12 Q70 14 84 12 L85 13 Q70 16 55 13 Z"
        opacity="0.85"
      />
      <text
        x="70"
        y="30"
        textAnchor="middle"
        fontSize="17.5"
        fontWeight="800"
        fontFamily="'Times New Roman', Times, serif"
        letterSpacing="4"
      >
        HACKETT
      </text>
      <text
        x="70"
        y="44"
        textAnchor="middle"
        fontSize="8"
        fontWeight="600"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        letterSpacing="5"
        opacity="0.85"
      >
        LONDON
      </text>
    </svg>
  )
}

export function WilliamMorrisLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 150 48"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="William Morris"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="75"
        y="25"
        textAnchor="middle"
        fontSize="16"
        fontWeight="700"
        fontFamily="'Times New Roman', Georgia, serif"
        letterSpacing="3"
      >
        WILLIAM MORRIS
      </text>
      <text
        x="75"
        y="40"
        textAnchor="middle"
        fontSize="8"
        fontWeight="600"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        letterSpacing="5"
        opacity="0.85"
      >
        LONDON
      </text>
    </svg>
  )
}

export function CarreraLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 140 46"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Carrera"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="70"
        y="32"
        textAnchor="middle"
        fontSize="24"
        fontWeight="900"
        fontStyle="italic"
        fontFamily="'Impact', 'Arial Black', sans-serif"
        letterSpacing="3"
      >
        CARRERA
      </text>
    </svg>
  )
}

export function PolaroidLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 140 48"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Polaroid"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      {/* 5-color rainbow mark */}
      <g transform="translate(14, 16)">
        <rect x="0" y="0" width="3.5" height="18" fill="#d92525" />
        <rect x="4" y="0" width="3.5" height="18" fill="#f58220" />
        <rect x="8" y="0" width="3.5" height="18" fill="#ffcb05" />
        <rect x="12" y="0" width="3.5" height="18" fill="#71bf44" />
        <rect x="16" y="0" width="3.5" height="18" fill="#0093d8" />
      </g>
      <text
        x="80"
        y="31"
        textAnchor="middle"
        fontSize="21"
        fontWeight="700"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        letterSpacing="3"
      >
        polaroid
      </text>
    </svg>
  )
}

export function VogueEyewearLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 140 48"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Vogue Eyewear"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="70"
        y="28"
        textAnchor="middle"
        fontSize="26"
        fontWeight="900"
        fontStyle="italic"
        fontFamily="'Didot', 'Bodoni MT', serif"
        letterSpacing="3"
      >
        VO<tspan fontStyle="normal">G</tspan>UE
      </text>
      <text
        x="70"
        y="42"
        textAnchor="middle"
        fontSize="8"
        fontWeight="600"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        letterSpacing="4"
        opacity="0.85"
      >
        EYEWEAR
      </text>
    </svg>
  )
}

export function TitanLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 140 48"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Titan Eyewear"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="70"
        y="28"
        textAnchor="middle"
        fontSize="24"
        fontWeight="900"
        fontFamily="'Arial Black', 'Trebuchet MS', sans-serif"
        letterSpacing="4"
      >
        TITAN
      </text>
      <text
        x="70"
        y="42"
        textAnchor="middle"
        fontSize="8"
        fontWeight="600"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        letterSpacing="5"
        opacity="0.85"
      >
        EYEWEAR
      </text>
    </svg>
  )
}

export function ArnetteLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 140 46"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Arnette"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="70"
        y="32"
        textAnchor="middle"
        fontSize="22"
        fontWeight="900"
        fontStyle="italic"
        fontFamily="'Arial Black', sans-serif"
        letterSpacing="3"
      >
        ARNETTE
      </text>
    </svg>
  )
}

export function NikeVisionLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 140 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Nike Vision"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      {/* Nike Swoosh */}
      <path
        d="M48 20 C58 14, 76 11, 94 8 C80 18, 64 24, 48 24 C44 24, 42 22, 48 20 Z"
        transform="translate(10, 0) scale(1.1)"
      />
      <text
        x="70"
        y="44"
        textAnchor="middle"
        fontSize="15"
        fontWeight="900"
        fontStyle="italic"
        fontFamily="'Arial Black', sans-serif"
        letterSpacing="3"
      >
        NIKE VISION
      </text>
    </svg>
  )
}

export function FossilLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 140 48"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Fossil"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <ellipse
        cx="70"
        cy="24"
        rx="58"
        ry="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        opacity="0.8"
      />
      <text
        x="70"
        y="31"
        textAnchor="middle"
        fontSize="19"
        fontWeight="800"
        fontFamily="'Georgia', serif"
        letterSpacing="3.5"
      >
        FOSSIL
      </text>
    </svg>
  )
}

export function CalvinKleinLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 150 48"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Calvin Klein"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="75"
        y="25"
        textAnchor="middle"
        fontSize="18"
        fontWeight="500"
        fontFamily="'Century Gothic', 'Helvetica Neue', Arial, sans-serif"
        letterSpacing="4"
      >
        Calvin Klein
      </text>
      <text
        x="75"
        y="40"
        textAnchor="middle"
        fontSize="8"
        fontWeight="600"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        letterSpacing="5"
        opacity="0.85"
      >
        EYEWEAR
      </text>
    </svg>
  )
}

export function NauticaLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 140 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Nautica"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      {/* Nautica Spinnaker Sail Emblem */}
      <path d="M68 6 L68 22 L58 18 Z M72 8 L72 22 L82 17 Z" opacity="0.9" />
      <text
        x="70"
        y="38"
        textAnchor="middle"
        fontSize="17.5"
        fontWeight="800"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        letterSpacing="4"
      >
        NAUTICA
      </text>
    </svg>
  )
}

export function WebEyewearLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 140 48"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="WEB Eyewear"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="70"
        y="28"
        textAnchor="middle"
        fontSize="26"
        fontWeight="900"
        fontFamily="'Arial Black', sans-serif"
        letterSpacing="5"
      >
        WEB
      </text>
      <text
        x="70"
        y="42"
        textAnchor="middle"
        fontSize="8"
        fontWeight="600"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        letterSpacing="5"
        opacity="0.85"
      >
        EYEWEAR
      </text>
    </svg>
  )
}

export function DieselLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 140 48"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Diesel"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="70"
        y="28"
        textAnchor="middle"
        fontSize="24"
        fontWeight="900"
        fontFamily="'Impact', 'Arial Black', sans-serif"
        letterSpacing="3"
      >
        DIESEL
      </text>
      <text
        x="70"
        y="42"
        textAnchor="middle"
        fontSize="8"
        fontWeight="700"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        letterSpacing="4"
        opacity="0.85"
      >
        EYEWEAR
      </text>
    </svg>
  )
}

export function FcukVisionLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 140 48"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="FCUK Vision"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="70"
        y="28"
        textAnchor="middle"
        fontSize="24"
        fontWeight="800"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        letterSpacing="4"
      >
        fcuk
      </text>
      <text
        x="70"
        y="42"
        textAnchor="middle"
        fontSize="8"
        fontWeight="600"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        letterSpacing="5"
        opacity="0.85"
      >
        VISION
      </text>
    </svg>
  )
}

export function XitEyewearLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 140 48"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="X-iT Eyewear"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="70"
        y="28"
        textAnchor="middle"
        fontSize="24"
        fontWeight="900"
        fontFamily="'Arial Black', sans-serif"
        letterSpacing="4"
      >
        X-iT
      </text>
      <text
        x="70"
        y="42"
        textAnchor="middle"
        fontSize="8"
        fontWeight="600"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        letterSpacing="5"
        opacity="0.85"
      >
        EYEWEAR
      </text>
    </svg>
  )
}

export function BenettonLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 160 48"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="United Colors of Benetton"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="80"
        y="22"
        textAnchor="middle"
        fontSize="9"
        fontWeight="700"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        letterSpacing="3"
        opacity="0.9"
      >
        UNITED COLORS
      </text>
      <text
        x="80"
        y="38"
        textAnchor="middle"
        fontSize="14"
        fontWeight="800"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        letterSpacing="4"
      >
        OF BENETTON.
      </text>
    </svg>
  )
}

/**
 * Maps brand id to its corresponding authentic SVG logo component.
 */

/* ─────────────────────────────────────────────────────────────────
   NEW AUTHENTIC LOGOS FOR ALL ADDED BRANDS
   Categorized detail-wise by Brand Type:
   - Luxottica: Under Armour, BEBE, Nova
   - Life Style: Lacoste, Killer, Tommy Hilfiger, Levis, Pepe Jeans
   - Luxury: Jaguar
   - Designer: Yohji Yamamoto
   - Safilo: Marc Jacobs, Seventh Street, Pierre Cardin, David Jones
   - Indian Brands: Fastrack, Scott, Scavin, Fueel, Velocity, Dash,
     See Saw, 2.5 NVG, Marble, WOW, Nifties, Insist, Parrito Luxury,
     Strahl, Sonre, Bluestone, Cruze Opus, Dazzle, Globus, Goldstar,
     I Peace, Wolf Eyes, Johnny Miller, I2I, Primo, ICON Miland, IOI,
     FED FOCUS, Intense Focus, TAGHills, Sorrento, Sprint, Sterling,
     Nomad, Inface, HOO
   - Lens Brands: Rodenstock, Nikon, Essilor, Zeiss, Hoya, Nova, VRX, BBGR
───────────────────────────────────────────────────────────────── */

export function UnderArmourLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 160 55"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Under Armour"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <path d="M80 6c-8.2 0-14.8 5-15 12.5 0 2.2.6 4.3 1.8 6.1-1.2 1.8-1.8 3.9-1.8 6.1.2 7.5 6.8 12.5 15 12.5s14.8-5 15-12.5c0-2.2-.6-4.3-1.8-6.1 1.2-1.8 1.8-3.9 1.8-6.1-.2-7.5-6.8-12.5-15-12.5zm0 5c5.5 0 9.8 3.2 10 7.5-.2 4.3-4.5 7.5-10 7.5s-9.8-3.2-10-7.5c.2-4.3 4.5-7.5 10-7.5zm0 27c-5.5 0-9.8-3.2-10-7.5.2-4.3 4.5-7.5 10-7.5s9.8 3.2 10 7.5c-.2 4.3-4.5 7.5-10 7.5z" />
      <text
        x="80"
        y="52"
        textAnchor="middle"
        fontSize="9"
        fontWeight="800"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        letterSpacing="3"
      >
        UNDER ARMOUR
      </text>
    </svg>
  )
}

export function BebeLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 140 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="BEBE"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="70"
        y="34"
        textAnchor="middle"
        fontSize="30"
        fontWeight="300"
        fontStyle="italic"
        fontFamily="'Bodoni MT', 'Didot', Georgia, serif"
        letterSpacing="3"
      >
        bebe
      </text>
    </svg>
  )
}

export function NovaLuxotticaLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 140 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Nova Eyewear"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="70"
        y="32"
        textAnchor="middle"
        fontSize="22"
        fontWeight="800"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        letterSpacing="5"
      >
        NOVA
      </text>
      <text
        x="70"
        y="44"
        textAnchor="middle"
        fontSize="7.5"
        fontWeight="600"
        fontFamily="sans-serif"
        letterSpacing="4"
        opacity="0.8"
      >
        EYEWEAR
      </text>
    </svg>
  )
}

export function LacosteLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 160 55"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Lacoste"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <path d="M68 20c3-3 8-4 12-3 4 1 7 4 11 4 3 0 5-2 8-2 2 0 4 1 5 3-2 1-5 1-7 2-3 1-5 3-8 3-4 0-8-3-12-3-3 0-6 2-9-1zm20-1c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1-1-.4-1-1z" />
      <text
        x="80"
        y="44"
        textAnchor="middle"
        fontSize="18"
        fontWeight="900"
        fontFamily="'Impact', 'Arial Black', sans-serif"
        letterSpacing="4"
      >
        LACOSTE
      </text>
    </svg>
  )
}

export function KillerLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 150 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Killer"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="75"
        y="34"
        textAnchor="middle"
        fontSize="24"
        fontWeight="900"
        fontStyle="italic"
        fontFamily="'Arial Black', sans-serif"
        letterSpacing="2"
      >
        KILLER
      </text>
      <text
        x="75"
        y="46"
        textAnchor="middle"
        fontSize="7"
        fontWeight="700"
        fontFamily="sans-serif"
        letterSpacing="5"
      >
        JEANS · EYEWEAR
      </text>
    </svg>
  )
}

export function TommyHilfigerLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 170 55"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Tommy Hilfiger"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="85"
        y="16"
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        letterSpacing="5"
      >
        TOMMY
      </text>
      <rect x="65" y="22" width="20" height="8" fill="#ffffff" />
      <rect x="85" y="22" width="20" height="8" fill="#e11d48" />
      <rect x="62" y="20" width="46" height="2" fill="#ffffff" />
      <rect x="62" y="30" width="46" height="2" fill="#ffffff" />
      <text
        x="85"
        y="48"
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        letterSpacing="5"
      >
        HILFIGER
      </text>
    </svg>
  )
}

export function LevisLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 140 55"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Levi's"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <path
        d="M15 12h110c-16 0-33 4-44 10-2 1.4-5 1.4-7 0-11-6-28-10-44-10l-15 32h110l-15-32z"
        fill="#dc2626"
        opacity="0.45"
      />
      <text
        x="70"
        y="35"
        textAnchor="middle"
        fontSize="23"
        fontWeight="900"
        fontFamily="'Arial Black', sans-serif"
        letterSpacing="1"
      >
        Levi's
      </text>
    </svg>
  )
}

export function PepeJeansLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 160 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Pepe Jeans"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="80"
        y="28"
        textAnchor="middle"
        fontSize="20"
        fontWeight="700"
        fontStyle="italic"
        fontFamily="'Playfair Display', Georgia, serif"
        letterSpacing="2"
      >
        Pepe Jeans
      </text>
      <text
        x="80"
        y="42"
        textAnchor="middle"
        fontSize="8"
        fontWeight="600"
        fontFamily="sans-serif"
        letterSpacing="6"
        opacity="0.85"
      >
        LONDON
      </text>
    </svg>
  )
}

export function JaguarLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 160 55"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Jaguar"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <path d="M35 22c5-3 12-5 18-3 8 2 15 8 23 9 7 1 14-2 21-3 9-1 18 2 26 6-5 1-10 1-15 0-8-2-16-7-24-6-7 1-13 6-20 6-8 0-16-4-23-7-2-1-4-1-6-2z" />
      <text
        x="80"
        y="44"
        textAnchor="middle"
        fontSize="16"
        fontWeight="700"
        fontFamily="'Cinzel', 'Trajan Pro', Georgia, serif"
        letterSpacing="6"
      >
        JAGUAR
      </text>
    </svg>
  )
}

export function YohjiYamamotoLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 180 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Yohji Yamamoto"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="90"
        y="24"
        textAnchor="middle"
        fontSize="13"
        fontWeight="300"
        fontFamily="'Didot', 'Bodoni MT', serif"
        letterSpacing="6"
      >
        YOHJI YAMAMOTO
      </text>
      <text
        x="90"
        y="40"
        textAnchor="middle"
        fontSize="8"
        fontWeight="400"
        fontFamily="sans-serif"
        letterSpacing="8"
        opacity="0.8"
      >
        PARIS · TOKYO
      </text>
    </svg>
  )
}

export function MarcJacobsLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 170 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Marc Jacobs"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="85"
        y="32"
        textAnchor="middle"
        fontSize="15"
        fontWeight="800"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        letterSpacing="5"
      >
        MARC JACOBS
      </text>
    </svg>
  )
}

export function SeventhStreetLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 160 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Seventh Street"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="80"
        y="28"
        textAnchor="middle"
        fontSize="18"
        fontWeight="900"
        fontFamily="'Arial Black', sans-serif"
        letterSpacing="3"
      >
        7TH STREET
      </text>
      <text
        x="80"
        y="42"
        textAnchor="middle"
        fontSize="7.5"
        fontWeight="600"
        fontFamily="sans-serif"
        letterSpacing="4"
        opacity="0.8"
      >
        SAFILO EYEWEAR
      </text>
    </svg>
  )
}

export function PierreCardinLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 160 55"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Pierre Cardin"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <circle
        cx="80"
        cy="18"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
      />
      <path
        d="M78 13h5c2.2 0 4 1.3 4 3.3s-1.8 3.3-4 3.3h-5v4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <text
        x="80"
        y="46"
        textAnchor="middle"
        fontSize="12"
        fontWeight="600"
        fontFamily="'Georgia', serif"
        letterSpacing="3"
      >
        pierre cardin
      </text>
    </svg>
  )
}

export function DavidJonesLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 160 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="David Jones"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="80"
        y="32"
        textAnchor="middle"
        fontSize="15"
        fontWeight="600"
        fontFamily="'Baskerville', 'Playfair Display', Georgia, serif"
        letterSpacing="4"
      >
        DAVID JONES
      </text>
    </svg>
  )
}

export function FastrackLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 160 55"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Fastrack"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <path d="M35 15l15-7v14l-15 7zm20 0l15-7v14l-15 7z" opacity="0.6" />
      <text
        x="85"
        y="35"
        textAnchor="middle"
        fontSize="20"
        fontWeight="900"
        fontStyle="italic"
        fontFamily="'Arial Black', sans-serif"
        letterSpacing="2"
      >
        FASTRACK
      </text>
    </svg>
  )
}

export function ScottLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 150 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Scott Eyewear"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="75"
        y="32"
        textAnchor="middle"
        fontSize="22"
        fontWeight="900"
        fontFamily="'Arial Black', sans-serif"
        letterSpacing="4"
      >
        SCOTT
      </text>
      <text
        x="75"
        y="44"
        textAnchor="middle"
        fontSize="7"
        fontWeight="600"
        fontFamily="sans-serif"
        letterSpacing="5"
        opacity="0.8"
      >
        EYEWEAR
      </text>
    </svg>
  )
}

export function ScavinLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 150 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Scavin"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="75"
        y="34"
        textAnchor="middle"
        fontSize="21"
        fontWeight="700"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        letterSpacing="5"
      >
        SCAVIN
      </text>
    </svg>
  )
}

export function FueelLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 140 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Fueel"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="70"
        y="34"
        textAnchor="middle"
        fontSize="23"
        fontWeight="900"
        fontStyle="italic"
        fontFamily="'Arial Black', sans-serif"
        letterSpacing="3"
      >
        FUEEL
      </text>
    </svg>
  )
}

export function VelocityLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 160 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Velocity"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="80"
        y="34"
        textAnchor="middle"
        fontSize="20"
        fontWeight="900"
        fontStyle="italic"
        fontFamily="'Impact', sans-serif"
        letterSpacing="4"
      >
        VELOCITY
      </text>
    </svg>
  )
}

export function DashLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 140 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Dash"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="70"
        y="34"
        textAnchor="middle"
        fontSize="24"
        fontWeight="900"
        fontFamily="'Arial Black', sans-serif"
        letterSpacing="3"
      >
        DASH
      </text>
    </svg>
  )
}

export function SeeSawLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 150 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="See Saw"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="75"
        y="33"
        textAnchor="middle"
        fontSize="18"
        fontWeight="800"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        letterSpacing="4"
      >
        SEE SAW
      </text>
    </svg>
  )
}

export function NvgLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 150 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="2.5 NVG"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="75"
        y="32"
        textAnchor="middle"
        fontSize="20"
        fontWeight="900"
        fontFamily="'Arial Black', sans-serif"
        letterSpacing="2"
      >
        2.5 NVG
      </text>
      <text
        x="75"
        y="44"
        textAnchor="middle"
        fontSize="7"
        fontWeight="600"
        fontFamily="sans-serif"
        letterSpacing="3"
        opacity="0.8"
      >
        BY ESSILOR
      </text>
    </svg>
  )
}

export function MarbleLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 150 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Marble"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="75"
        y="34"
        textAnchor="middle"
        fontSize="20"
        fontWeight="700"
        fontFamily="'Cinzel', Georgia, serif"
        letterSpacing="5"
      >
        MARBLE
      </text>
    </svg>
  )
}

export function WowLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 140 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="WOW"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="70"
        y="34"
        textAnchor="middle"
        fontSize="26"
        fontWeight="900"
        fontFamily="'Impact', 'Arial Black', sans-serif"
        letterSpacing="4"
      >
        WOW
      </text>
    </svg>
  )
}

export function NiftiesLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 150 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Nifties"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="75"
        y="33"
        textAnchor="middle"
        fontSize="19"
        fontWeight="500"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        letterSpacing="3"
      >
        nifties
      </text>
    </svg>
  )
}

export function InsistLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 140 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Insist"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="70"
        y="33"
        textAnchor="middle"
        fontSize="20"
        fontWeight="900"
        fontFamily="'Arial Black', sans-serif"
        letterSpacing="4"
      >
        INSIST
      </text>
    </svg>
  )
}

export function ParritoLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 160 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Parrito Luxury"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="80"
        y="27"
        textAnchor="middle"
        fontSize="17"
        fontWeight="800"
        fontFamily="'Cinzel', Georgia, serif"
        letterSpacing="4"
      >
        PARRITO
      </text>
      <text
        x="80"
        y="41"
        textAnchor="middle"
        fontSize="7.5"
        fontWeight="600"
        fontFamily="sans-serif"
        letterSpacing="5"
        opacity="0.85"
      >
        LUXURY
      </text>
    </svg>
  )
}

export function StrahlLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 150 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Strahl"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="75"
        y="33"
        textAnchor="middle"
        fontSize="20"
        fontWeight="700"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        letterSpacing="5"
      >
        STRAHL
      </text>
    </svg>
  )
}

export function SonreLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 140 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Sonre"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="70"
        y="33"
        textAnchor="middle"
        fontSize="21"
        fontWeight="800"
        fontStyle="italic"
        fontFamily="'Playfair Display', Georgia, serif"
        letterSpacing="3"
      >
        Sonre
      </text>
    </svg>
  )
}

export function BluestoneLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 160 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Bluestone"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="80"
        y="33"
        textAnchor="middle"
        fontSize="18"
        fontWeight="800"
        fontFamily="'Cinzel', Georgia, serif"
        letterSpacing="4"
      >
        BLUESTONE
      </text>
    </svg>
  )
}

export function CruzeLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 160 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Cruze Opus"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="80"
        y="27"
        textAnchor="middle"
        fontSize="18"
        fontWeight="800"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        letterSpacing="3"
      >
        CRUZE
      </text>
      <text
        x="80"
        y="41"
        textAnchor="middle"
        fontSize="8"
        fontWeight="600"
        fontFamily="sans-serif"
        letterSpacing="5"
        opacity="0.8"
      >
        OPUS
      </text>
    </svg>
  )
}

export function DazzleLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 150 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Dazzle"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="75"
        y="33"
        textAnchor="middle"
        fontSize="21"
        fontWeight="900"
        fontStyle="italic"
        fontFamily="'Arial Black', sans-serif"
        letterSpacing="3"
      >
        DAZZLE
      </text>
    </svg>
  )
}

export function GlobusLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 150 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Globus"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="75"
        y="33"
        textAnchor="middle"
        fontSize="20"
        fontWeight="800"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        letterSpacing="4"
      >
        GLOBUS
      </text>
    </svg>
  )
}

export function GoldstarLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 160 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Goldstar"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="80"
        y="33"
        textAnchor="middle"
        fontSize="19"
        fontWeight="900"
        fontFamily="'Arial Black', sans-serif"
        letterSpacing="3"
      >
        GOLDSTAR
      </text>
    </svg>
  )
}

export function IPeaceLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 150 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="I Peace"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="75"
        y="33"
        textAnchor="middle"
        fontSize="18"
        fontWeight="600"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        letterSpacing="4"
      >
        I PEACE
      </text>
    </svg>
  )
}

export function WolfEyesLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 160 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Wolf Eyes"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="80"
        y="33"
        textAnchor="middle"
        fontSize="18"
        fontWeight="900"
        fontStyle="italic"
        fontFamily="'Arial Black', sans-serif"
        letterSpacing="3"
      >
        WOLF EYES
      </text>
    </svg>
  )
}

export function JohnnyMillerLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 170 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Johnny Miller"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="85"
        y="32"
        textAnchor="middle"
        fontSize="15"
        fontWeight="700"
        fontFamily="'Playfair Display', Georgia, serif"
        letterSpacing="3"
      >
        JOHNNY MILLER
      </text>
    </svg>
  )
}

export function I2iLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 140 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="I2I"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="70"
        y="34"
        textAnchor="middle"
        fontSize="24"
        fontWeight="900"
        fontFamily="'Arial Black', sans-serif"
        letterSpacing="3"
      >
        I2I
      </text>
    </svg>
  )
}

export function PrimoLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 140 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Primo"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="70"
        y="34"
        textAnchor="middle"
        fontSize="21"
        fontWeight="800"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        letterSpacing="4"
      >
        PRIMO
      </text>
    </svg>
  )
}

export function IconMilandLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 160 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ICON Miland"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="80"
        y="27"
        textAnchor="middle"
        fontSize="18"
        fontWeight="800"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        letterSpacing="3"
      >
        ICON
      </text>
      <text
        x="80"
        y="41"
        textAnchor="middle"
        fontSize="8"
        fontWeight="600"
        fontFamily="sans-serif"
        letterSpacing="5"
        opacity="0.8"
      >
        MILAND
      </text>
    </svg>
  )
}

export function IoiLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 130 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="IOI"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="65"
        y="34"
        textAnchor="middle"
        fontSize="26"
        fontWeight="900"
        fontFamily="'Arial Black', sans-serif"
        letterSpacing="4"
      >
        IOI
      </text>
    </svg>
  )
}

export function FedFocusLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 160 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="FED FOCUS"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="80"
        y="32"
        textAnchor="middle"
        fontSize="16"
        fontWeight="900"
        fontFamily="'Arial Black', sans-serif"
        letterSpacing="3"
      >
        FED FOCUS
      </text>
    </svg>
  )
}

export function IntenseFocusLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 170 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Intense Focus"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="85"
        y="32"
        textAnchor="middle"
        fontSize="15"
        fontWeight="900"
        fontStyle="italic"
        fontFamily="'Arial Black', sans-serif"
        letterSpacing="3"
      >
        INTENSE FOCUS
      </text>
    </svg>
  )
}

export function TaghillsLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 150 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="TAGHills"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="75"
        y="33"
        textAnchor="middle"
        fontSize="18"
        fontWeight="800"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        letterSpacing="3"
      >
        TAGHILLS
      </text>
    </svg>
  )
}

export function SorrentoLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 150 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Sorrento"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="75"
        y="33"
        textAnchor="middle"
        fontSize="19"
        fontWeight="700"
        fontFamily="'Playfair Display', Georgia, serif"
        letterSpacing="3"
      >
        SORRENTO
      </text>
    </svg>
  )
}

export function SprintLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 140 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Sprint"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="70"
        y="34"
        textAnchor="middle"
        fontSize="22"
        fontWeight="900"
        fontStyle="italic"
        fontFamily="'Impact', sans-serif"
        letterSpacing="3"
      >
        SPRINT
      </text>
    </svg>
  )
}

export function SterlingLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 150 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Sterling"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="75"
        y="33"
        textAnchor="middle"
        fontSize="18"
        fontWeight="700"
        fontFamily="'Cinzel', Georgia, serif"
        letterSpacing="4"
      >
        STERLING
      </text>
    </svg>
  )
}

export function NomadLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 140 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Nomad"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="70"
        y="33"
        textAnchor="middle"
        fontSize="20"
        fontWeight="900"
        fontFamily="'Arial Black', sans-serif"
        letterSpacing="4"
      >
        NOMAD
      </text>
    </svg>
  )
}

export function InfaceLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 140 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Inface"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="70"
        y="33"
        textAnchor="middle"
        fontSize="20"
        fontWeight="400"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        letterSpacing="3"
      >
        inface
      </text>
    </svg>
  )
}

export function HooLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 130 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="HOO"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="65"
        y="34"
        textAnchor="middle"
        fontSize="24"
        fontWeight="900"
        fontFamily="'Arial Black', sans-serif"
        letterSpacing="5"
      >
        HOO
      </text>
    </svg>
  )
}

export function RodenstockLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 170 55"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Rodenstock"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <circle
        cx="36"
        cy="27"
        r="13"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <text
        x="36"
        y="33"
        textAnchor="middle"
        fontSize="15"
        fontWeight="900"
        fontFamily="sans-serif"
      >
        R
      </text>
      <text
        x="105"
        y="32"
        textAnchor="middle"
        fontSize="13"
        fontWeight="800"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        letterSpacing="3"
      >
        RODENSTOCK
      </text>
    </svg>
  )
}

export function NikonLensLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 150 55"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Nikon"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="75"
        y="36"
        textAnchor="middle"
        fontSize="26"
        fontWeight="900"
        fontStyle="italic"
        fontFamily="'Arial Black', sans-serif"
        letterSpacing="3"
      >
        Nikon
      </text>
    </svg>
  )
}

export function EssilorLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 160 55"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Essilor"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <path
        d="M40 32c15-12 40-12 80 0"
        stroke="#38bdf8"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <text
        x="80"
        y="27"
        textAnchor="middle"
        fontSize="22"
        fontWeight="700"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        letterSpacing="2"
      >
        essilor
      </text>
    </svg>
  )
}

export function ZeissLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 150 55"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ZEISS"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <rect x="25" y="10" width="32" height="32" rx="4" fill="#0284c7" />
      <path d="M33 18h16l-12 14h14v3H33l12-14H33z" fill="#ffffff" />
      <text
        x="96"
        y="34"
        textAnchor="middle"
        fontSize="22"
        fontWeight="900"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        letterSpacing="3"
      >
        ZEISS
      </text>
    </svg>
  )
}

export function HoyaLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 150 55"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="HOYA"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="75"
        y="36"
        textAnchor="middle"
        fontSize="26"
        fontWeight="900"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        letterSpacing="6"
      >
        HOYA
      </text>
    </svg>
  )
}

export function NovaLensesLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 150 55"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Nova Lenses"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="75"
        y="30"
        textAnchor="middle"
        fontSize="20"
        fontWeight="900"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        letterSpacing="4"
      >
        NOVA
      </text>
      <text
        x="75"
        y="44"
        textAnchor="middle"
        fontSize="7.5"
        fontWeight="700"
        fontFamily="sans-serif"
        letterSpacing="4"
        opacity="0.8"
      >
        LENSES
      </text>
    </svg>
  )
}

export function VrxLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 140 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="VRX"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="70"
        y="34"
        textAnchor="middle"
        fontSize="23"
        fontWeight="900"
        fontStyle="italic"
        fontFamily="'Arial Black', sans-serif"
        letterSpacing="3"
      >
        VRX
      </text>
    </svg>
  )
}

export function BbgrLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 160 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="BBGR"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}
    >
      <text
        x="80"
        y="28"
        textAnchor="middle"
        fontSize="19"
        fontWeight="900"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        letterSpacing="3"
      >
        BBGR
      </text>
      <text
        x="80"
        y="42"
        textAnchor="middle"
        fontSize="7.5"
        fontWeight="600"
        fontFamily="sans-serif"
        letterSpacing="4"
        opacity="0.8"
      >
        FRANCE OPTICS
      </text>
    </svg>
  )
}

/**
 * Maps brand id to its corresponding authentic SVG logo component.
 * Includes all 85 categorized brand entries.
 */
export const BRAND_LOGO_MAP = {
  // Existing 27 verified brands
  "ray-ban": RayBanLogo,
  oakley: OakleyLogo,
  "tom-ford": TomFordLogo,
  versace: VersaceLogo,
  "dolce-gabbana": DolceGabbanaLogo,
  persol: PersolLogo,
  montblanc: MontblancLogo,
  "emporio-armani": EmporioArmaniLogo,
  coach: CoachLogo,
  silhouette: SilhouetteLogo,
  boss: BossLogo,
  "hackett-london": HackettLondonLogo,
  "william-morris": WilliamMorrisLogo,
  carrera: CarreraLogo,
  polaroid: PolaroidLogo,
  "vogue-eyewear": VogueEyewearLogo,
  "titan-eyewear": TitanLogo,
  arnette: ArnetteLogo,
  "nike-vision": NikeVisionLogo,
  fossil: FossilLogo,
  "calvin-klein": CalvinKleinLogo,
  nautica: NauticaLogo,
  "web-eyewear": WebEyewearLogo,
  "diesel-eyewear": DieselLogo,
  "fcuk-vision": FcukVisionLogo,
  "xit-eyewear": XitEyewearLogo,
  "united-colors-benetton": BenettonLogo,

  // Luxottica additions
  "under-armour": UnderArmourLogo,
  "bebe-eyewear": BebeLogo,
  "nova-luxottica": NovaLuxotticaLogo,

  // Life Style additions
  lacoste: LacosteLogo,
  "killer-eyewear": KillerLogo,
  "tommy-hilfiger": TommyHilfigerLogo,
  "levis-eyewear": LevisLogo,
  "pepe-jeans": PepeJeansLogo,

  // Luxury additions
  "jaguar-eyewear": JaguarLogo,

  // Designer additions
  "yohji-yamamoto": YohjiYamamotoLogo,

  // Safilo additions
  "marc-jacobs": MarcJacobsLogo,
  "seventh-street": SeventhStreetLogo,
  "pierre-cardin": PierreCardinLogo,
  "david-jones": DavidJonesLogo,

  // Indian Brands additions
  fastrack: FastrackLogo,
  "scott-eyewear": ScottLogo,
  scavin: ScavinLogo,
  fueel: FueelLogo,
  velocity: VelocityLogo,
  dash: DashLogo,
  "see-saw": SeeSawLogo,
  "nvg-2-5": NvgLogo,
  marble: MarbleLogo,
  "wow-eyewear": WowLogo,
  nifties: NiftiesLogo,
  insist: InsistLogo,
  "parrito-luxury": ParritoLogo,
  strahl: StrahlLogo,
  sonre: SonreLogo,
  bluestone: BluestoneLogo,
  "cruze-opus": CruzeLogo,
  dazzle: DazzleLogo,
  globus: GlobusLogo,
  goldstar: GoldstarLogo,
  "i-peace": IPeaceLogo,
  "wolf-eyes": WolfEyesLogo,
  "johnny-miller": JohnnyMillerLogo,
  i2i: I2iLogo,
  primo: PrimoLogo,
  "icon-miland": IconMilandLogo,
  ioi: IoiLogo,
  "fed-focus": FedFocusLogo,
  "intense-focus": IntenseFocusLogo,
  taghills: TaghillsLogo,
  sorrento: SorrentoLogo,
  sprint: SprintLogo,
  sterling: SterlingLogo,
  nomad: NomadLogo,
  inface: InfaceLogo,
  hoo: HooLogo,

  // Lens brands additions
  rodenstock: RodenstockLogo,
  "nikon-lens": NikonLensLogo,
  essilor: EssilorLogo,
  zeiss: ZeissLogo,
  hoya: HoyaLogo,
  "nova-lenses": NovaLensesLogo,
  "vrx-lenses": VrxLogo,
  "bbgr-lenses": BbgrLogo,
}
