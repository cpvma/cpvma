import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1E261B",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          gap: "0px"
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            width: "80px",
            height: "3px",
            background: "linear-gradient(to right, #C9BCD4, #67A36F)",
            borderRadius: "999px",
            marginBottom: "32px"
          }}
        />

        {/* Eyebrow */}
        <p
          style={{
            color: "#67A36F",
            fontSize: "16px",
            fontWeight: 600,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            marginBottom: "20px"
          }}
        >
          Canadian Pre-Veterinary Medical Association
        </p>

        {/* Main title */}
        <h1
          style={{
            color: "#F5EDE8",
            fontSize: "88px",
            fontWeight: "bold",
            letterSpacing: "0.08em",
            margin: "0 0 20px 0",
            textAlign: "center",
            lineHeight: 1
          }}
        >
          CPVMA | ACPMV
        </h1>

        {/* Tagline */}
        <p
          style={{
            color: "#C9BCD4",
            fontSize: "24px",
            fontWeight: 400,
            letterSpacing: "0.05em",
            marginTop: "12px",
            textAlign: "center"
          }}
        >
          Building Canada&apos;s pre-veterinary community
        </p>

        {/* Bottom accent */}
        <div
          style={{
            display: "flex",
            gap: "32px",
            marginTop: "52px",
            color: "#F5EDE8",
            opacity: 0.4,
            fontSize: "13px",
            letterSpacing: "0.3em",
            textTransform: "uppercase"
          }}
        >
          <span>4 Annual Symposia</span>
          <span>·</span>
          <span>18+ University Clubs</span>
          <span>·</span>
          <span>Est. 2019</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
