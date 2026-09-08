import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B2240",
          borderRadius: 36,
        }}
      >
        <div
          style={{
            width: 70,
            height: 110,
            background: "#302E7F",
            marginRight: 12,
          }}
        />
        <div style={{ width: 36, height: 90, background: "#50B867" }} />
      </div>
    ),
    { ...size },
  );
}
