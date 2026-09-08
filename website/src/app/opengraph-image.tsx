import { ImageResponse } from "next/og";

export const alt = "Emerging Group Bangladesh";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0B2240 0%, #1548B0 55%, #0B2240 100%)",
          padding: "64px",
          color: "white",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              background: "#50B867",
              borderRadius: 4,
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 28, fontWeight: 700, fontFamily: "sans-serif" }}>
              Emerging Group
            </div>
            <div style={{ fontSize: 16, opacity: 0.75, fontFamily: "sans-serif" }}>
              Bangladesh
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 900 }}>
          <div style={{ fontSize: 54, lineHeight: 1.15, letterSpacing: -1 }}>
            Building Bangladesh&apos;s industrial self-reliance.
          </div>
          <div style={{ fontSize: 22, opacity: 0.8, fontFamily: "sans-serif", maxWidth: 760 }}>
            Six verticals · Packaging · Agro-chemicals · Infrastructure · Trading ·
            Technology · Media
          </div>
        </div>
        <div
          style={{
            fontSize: 16,
            letterSpacing: 4,
            textTransform: "uppercase",
            opacity: 0.7,
            fontFamily: "sans-serif",
          }}
        >
          emerginggroup.com.bd
        </div>
      </div>
    ),
    { ...size },
  );
}
