import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name}: gym management software for memberships, payments and renewals`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background:
          "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(91, 127, 255,0.35), transparent), #060912",
        color: "#f4f5f7",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <svg width="56" height="56" viewBox="0 0 100 100" fill="none">
          <defs>
            <linearGradient id="g" x1="30" y1="6" x2="46" y2="96" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#1f7bff" />
              <stop offset="0.42" stopColor="#4d5bff" />
              <stop offset="0.7" stopColor="#8b3bf0" />
              <stop offset="1" stopColor="#bb27e8" />
            </linearGradient>
          </defs>
          <path
            d="M27.5 19 Q27.5 14 32.5 14 L41 14 Q44.4 14 44.5 18.2 Q45.2 31 44.8 43 Q44.2 57 42 67 L52.8 82.2 Q55.4 85 51.8 85.6 L33 80.2 Q27.5 78.6 27.5 72.6 Z"
            fill="url(#g)"
          />
          <rect x="54.5" y="32" width="20.5" height="20" rx="4.6" fill="url(#g)" />
          <rect x="54.5" y="57.5" width="20.5" height="22" rx="4.6" fill="url(#g)" />
        </svg>
        <span style={{ fontSize: 40, fontWeight: 600, letterSpacing: -1 }}>{site.name}</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div
          style={{
            display: "flex",
            fontSize: 92,
            fontWeight: 700,
            letterSpacing: -4,
            lineHeight: 1,
          }}
        >
          Run your gym.&nbsp;
          <span style={{ color: "#8ea8ff" }}>Smarter.</span>
        </div>
        <div style={{ fontSize: 34, color: "#9ba1ac", lineHeight: 1.35, maxWidth: 920 }}>
          Memberships, payments, attendance, leads and renewals in one workspace.
        </div>
      </div>

      <div style={{ display: "flex", fontSize: 26, color: "#80869a" }}>liftiq.in</div>
    </div>,
    size,
  );
}
