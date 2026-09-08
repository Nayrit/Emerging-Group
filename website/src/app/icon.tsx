import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
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
        }}
      >
        <div
          style={{
            width: 220,
            height: 280,
            display: "flex",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 20,
              top: 40,
              width: 90,
              height: 180,
              background: "#302E7F",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 140,
              top: 70,
              width: 50,
              height: 150,
              background: "#50B867",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 155,
              top: 30,
              width: 22,
              height: 22,
              borderRadius: 22,
              background: "#50B867",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
