import { ImageResponse } from "next/og";

export const alt =
  "DriveWatch PC monitoring preview for SSD health, fan RPM, CPU, GPU, disk health, and diagnostics";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #04111f 0%, #07182d 52%, #11102a 100%)",
          color: "white",
          padding: "58px 64px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 70,
              height: 70,
              borderRadius: 999,
              background: "linear-gradient(135deg, #22d3ee, #8b5cf6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 800,
              color: "#07111f",
            }}
          >
            D
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 34, fontWeight: 800 }}>DriveWatch</div>
            <div style={{ color: "#9eeafb", fontSize: 22 }}>Live Storage Intelligence</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ maxWidth: 920, fontSize: 72, lineHeight: 1.02, fontWeight: 800 }}>
            SSD health, fan RPM, CPU and GPU monitoring
          </div>
          <div style={{ maxWidth: 860, color: "#c7f9ff", fontSize: 28, lineHeight: 1.35 }}>
            Professional Windows monitoring software for disk health analytics, hardware
            diagnostics, smart alerts, and real-time PC visibility.
          </div>
        </div>

        <div style={{ display: "flex", gap: 18, color: "#07111f", fontSize: 22, fontWeight: 700 }}>
          {["SSD Health", "Fan RPM", "CPU Temps", "GPU Temps", "Diagnostics"].map((item) => (
            <div
              key={item}
              style={{
                borderRadius: 999,
                background: "#67e8f9",
                padding: "12px 20px",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
