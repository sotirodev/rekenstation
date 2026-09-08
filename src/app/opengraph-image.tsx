import { ImageResponse } from "next/og";

export const alt = "Rekenstation: handige online calculators";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background: "#0e1d3a",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", gap: 6, marginBottom: 40 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 12,
              background: "#0e1d3a",
              border: "2px solid #2db26e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            +
          </div>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 12,
              background: "#2db26e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            −
          </div>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 12,
              background: "#2db26e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            ×
          </div>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 12,
              background: "#0e1d3a",
              border: "2px solid #2db26e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            =
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 700, color: "white" }}>
          Rekenstation
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#94a3bb", marginTop: 16 }}>
          Handige online calculators voor dagelijks gebruik
        </div>
      </div>
    ),
    { ...size },
  );
}
