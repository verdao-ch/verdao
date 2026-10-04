import { ImageResponse } from "next/og";

export const alt =
  "BAMBOOGO. Bamboo bicycles from Bern, Switzerland. Road, gravel, mountain and cargo concepts in development.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0d0d0d",
          padding: "70px 80px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: 999,
              background: "#e6fd53",
            }}
          />
          <div style={{ fontSize: 26, letterSpacing: 6, color: "#ffffffaa" }}>
            A BICYCLE PROJECT BY VERDAO
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 116,
              fontWeight: 800,
              letterSpacing: -3,
              lineHeight: 1,
            }}
          >
            BAMBOOGO
          </div>
          <div
            style={{
              fontSize: 58,
              fontWeight: 700,
              color: "#e6fd53",
              lineHeight: 1.1,
            }}
          >
            Ride the Story.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 28,
            color: "#ffffffcc",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontWeight: 700 }}>Bamboo bicycles from Bern, Switzerland</div>
            <div style={{ fontSize: 24, color: "#ffffff88" }}>
              Road / Gravel / Mountain / Cargo, in development
            </div>
          </div>
          <div style={{ fontSize: 24, color: "#e6fd53", fontWeight: 700 }}>
            Grown, not forged.
          </div>
        </div>
      </div>
    ),
    size
  );
}