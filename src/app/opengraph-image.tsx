import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/seo";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        backgroundColor: "#0B0D12",
        backgroundImage:
          "radial-gradient(900px 500px at 15% 15%, rgba(99, 102, 241, 0.35), transparent 60%), radial-gradient(900px 500px at 85% 35%, rgba(16, 185, 129, 0.28), transparent 55%), radial-gradient(900px 500px at 50% 110%, rgba(236, 72, 153, 0.18), transparent 60%)",
        color: "#FFFFFF",
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial',
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ fontSize: 28, opacity: 0.9 }}>{siteConfig.name}</div>
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
          {siteConfig.title}
        </div>
        <div style={{ fontSize: 28, opacity: 0.85, maxWidth: 980 }}>
          {siteConfig.description}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 24,
          opacity: 0.9,
        }}
      >
        <div>{new URL(siteConfig.url).hostname}</div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "rgba(99, 102, 241, 0.9)",
            }}
          />
          <div>{siteConfig.twitter}</div>
        </div>
      </div>
    </div>,
    size,
  );
}
