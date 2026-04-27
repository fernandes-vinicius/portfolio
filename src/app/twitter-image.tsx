import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/seo";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 600,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 72,
        backgroundColor: "#0B0D12",
        backgroundImage:
          "radial-gradient(900px 500px at 20% 20%, rgba(99, 102, 241, 0.35), transparent 60%), radial-gradient(900px 500px at 80% 40%, rgba(236, 72, 153, 0.18), transparent 60%)",
        color: "#FFFFFF",
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial',
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ fontSize: 26, opacity: 0.9 }}>{siteConfig.name}</div>
        <div style={{ fontSize: 60, fontWeight: 700, lineHeight: 1.1 }}>
          {siteConfig.title}
        </div>
        <div style={{ fontSize: 26, opacity: 0.85, maxWidth: 1000 }}>
          {siteConfig.description}
        </div>
      </div>
    </div>,
    size,
  );
}
