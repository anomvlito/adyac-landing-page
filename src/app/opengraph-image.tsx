import { ImageResponse } from "next/og";

export const alt = "Adyac — Producto, diseño y tecnología";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 70,
        color: "#101612",
        background: "#ccff4a",
        fontFamily: "Arial",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", fontSize: 38, fontWeight: 700 }}>
        <span style={{ width: 22, height: 22, marginRight: 14, borderRadius: "50%", background: "#183c2b" }} />
        adyac
      </div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 82, fontWeight: 700, lineHeight: 0.95, letterSpacing: -4 }}>
        <span>Construimos tecnología</span>
        <span>que mueve el trabajo real.</span>
      </div>
      <div style={{ display: "flex", fontSize: 22 }}>Producto · Diseño · Tecnología</div>
    </div>,
    size,
  );
}
