import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#06060e",
        borderRadius: 6,
      }}
    >
      <span
        style={{
          fontSize: 18,
          fontWeight: 800,
          color: "#eaeaf0",
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}
      >
        A<span style={{ color: "#00e5bf" }}>K</span>
      </span>
    </div>,
    { ...size },
  );
}
