import { ImageResponse } from "next/og";

export const alt =
  "Hannah Kraulik Pagade, Rohimaya Health AI, live conversational AI products";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "edge";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          backgroundColor: "#080C14",
          fontFamily: "Georgia, serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative corner accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 320,
            height: 320,
            background:
              "radial-gradient(circle at top right, rgba(200,169,110,0.12) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: 200,
            height: 200,
            background:
              "radial-gradient(circle at bottom left, rgba(200,169,110,0.08) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Top rule */}
        <div
          style={{
            width: 64,
            height: 3,
            backgroundColor: "#C8A96E",
            marginBottom: 40,
            display: "flex",
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 600,
            color: "#F4EFE6",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            marginBottom: 16,
            display: "flex",
          }}
        >
          Hannah Kraulik Pagade
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 26,
            color: "#C8A96E",
            lineHeight: 1.4,
            marginBottom: 40,
            display: "flex",
          }}
        >
          LPN · Founder, Rohimaya Health AI · Live products you can try
        </div>

        {/* Projects */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          {[
            "OrixLink AI",
            "HealthLiteracy AI",
            "ClearChannel",
            "FinanceLens AI",
          ].map((name) => (
            <div
              key={name}
              style={{
                fontSize: 15,
                color: "#F4EFE6",
                backgroundColor: "rgba(200,169,110,0.12)",
                border: "1px solid rgba(200,169,110,0.25)",
                padding: "10px 20px",
                borderRadius: 4,
                letterSpacing: "0.06em",
                fontFamily: "Arial, sans-serif",
                display: "flex",
              }}
            >
              {name}
            </div>
          ))}
        </div>

        {/* Bottom rule */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            left: 80,
            fontSize: 14,
            color: "rgba(244,239,230,0.4)",
            fontFamily: "Arial, sans-serif",
            letterSpacing: "0.04em",
            display: "flex",
          }}
        >
          hannahkraulikpagade.com
        </div>
      </div>
    ),
    { ...size },
  );
}
