import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// Without nonces — compatible with static generation.
// Nonces would force every page into dynamic rendering, which is unsuitable for a
// mostly-static portfolio. If sensitive data is added later, migrate to proxy.ts with nonces.
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""};
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: https://cdn.sanity.io;
  font-src 'self';
  connect-src 'self' https://*.sanity.io${isDev ? " ws: wss:" : ""};
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`
  .replace(/\n/g, "")
  .replace(/\s{2,}/g, " ")
  .trim();

const nextConfig: NextConfig = {
  images: {
    /**
     * @description: Disable image optimization for production for saving costs on Vercel
     * @see: https://nextjs.org/docs/app/building-your-application/optimizing/images
     */
    unoptimized: process.env.NODE_ENV === "production",
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader,
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
