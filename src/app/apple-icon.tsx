import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0b0b0d",
      }}
    >
      <svg width="150" height="150" viewBox="0 0 100 100" fill="none">
        <defs>
          <linearGradient id="g" x1="30" y1="6" x2="46" y2="96" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#1f7bff" />
            <stop offset="0.42" stopColor="#4d5bff" />
            <stop offset="0.7" stopColor="#8b3bf0" />
            <stop offset="1" stopColor="#bb27e8" />
          </linearGradient>
        </defs>
        <g transform="translate(6 8) scale(0.86)">
          <path
            d="M27.5 19 Q27.5 14 32.5 14 L41 14 Q44.4 14 44.5 18.2 Q45.2 31 44.8 43 Q44.2 57 42 67 L52.8 82.2 Q55.4 85 51.8 85.6 L33 80.2 Q27.5 78.6 27.5 72.6 Z"
            fill="url(#g)"
          />
          <rect x="54.5" y="32" width="20.5" height="20" rx="4.6" fill="url(#g)" />
          <rect x="54.5" y="57.5" width="20.5" height="22" rx="4.6" fill="url(#g)" />
        </g>
      </svg>
    </div>,
    size,
  );
}
