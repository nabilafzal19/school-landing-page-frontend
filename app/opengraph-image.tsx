import { ImageResponse } from "next/og";
import { SCHOOL_NAME, SCHOOL_TAGLINE } from "@/lib/constants";

export const runtime = "edge";
export const alt = `${SCHOOL_NAME} — ${SCHOOL_TAGLINE}`;
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
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #FDF8F3 0%, #F3EDE4 50%, #EEF2F6 100%)",
          padding: 60,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 80,
            borderRadius: 16,
            background: "#F4A825",
            marginBottom: 32,
          }}
        >
          <div style={{ fontSize: 40 }}>🏫</div>
        </div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: "#0A1628",
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: 16,
          }}
        >
          {SCHOOL_NAME}
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#C8871A",
            textAlign: "center",
          }}
        >
          {SCHOOL_TAGLINE}
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 20,
            color: "#64748b",
          }}
        >
          CBSE Affiliated · Nursery to Class XII · New Delhi
        </div>
      </div>
    ),
    { ...size }
  );
}
