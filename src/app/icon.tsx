import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";
export const runtime = "edge";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#080C14",
          borderRadius: 6,
          fontFamily: "Georgia, serif",
        }}
      >
        <span
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: "#C8A96E",
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          H
        </span>
      </div>
    ),
    { ...size },
  );
}
