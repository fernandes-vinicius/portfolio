import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// ---------------------------------------------------------------------------
// CSP source extensions via environment variables (resolved at build time).
// Add space-separated origins in .env.production or Vercel dashboard.
//
// Common analytics providers:
//
//   Vercel Analytics:
//     CSP_SCRIPT_SRC=https://va.vercel-scripts.com
//     CSP_CONNECT_SRC=https://vitals.vercel-insights.com
//
//   Plausible:
//     CSP_SCRIPT_SRC=https://plausible.io
//     CSP_CONNECT_SRC=https://plausible.io
//
//   Google Analytics 4 (via GTM):
//     CSP_SCRIPT_SRC=https://www.googletagmanager.com https://www.google-analytics.com
//     CSP_CONNECT_SRC=https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com
//     CSP_IMG_SRC=https://www.google-analytics.com
//
// ---------------------------------------------------------------------------
// Without nonces — compatible with static generation.
// Nonces would force every page into dynamic rendering, which is unsuitable for a
// mostly-static portfolio. If sensitive data is added later, migrate to proxy.ts with nonces.
// ---------------------------------------------------------------------------

/** Returns ` <value>` if the env var is set, otherwise an empty string. */
function ext(key: string): string {
  const val = process.env[key]?.trim();
  return val ? ` ${val}` : "";
}

const cspDirectives = [
  `default-src 'self'`,
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}${ext("CSP_SCRIPT_SRC")}`,
  `style-src 'self' 'unsafe-inline'`,
  `img-src 'self' blob: data: https://cdn.sanity.io${ext("CSP_IMG_SRC")}`,
  `font-src 'self'${ext("CSP_FONT_SRC")}`,
  `connect-src 'self' https://*.sanity.io${isDev ? " ws: wss:" : ""}${ext("CSP_CONNECT_SRC")}`,
  `frame-src 'none'${ext("CSP_FRAME_SRC")}`,
  `object-src 'none'`,
  `base-uri 'self'`,
  `form-action 'self'`,
  `frame-ancestors 'none'`,
  `upgrade-insecure-requests`,
];

const cspHeader = cspDirectives.join("; ");

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
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
            value: [
              "camera=()",
              "microphone=()",
              "geolocation=()",
              "browsing-topics=()",
            ].join(", "),
          },
          {
            // Isolates the browsing context — prevents cross-origin windows
            // from retaining a reference to this page via window.opener.
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            // Prevents other origins from hotlinking assets served by this domain.
            // Does NOT affect outbound requests (e.g. Sanity CDN images are unaffected).
            key: "Cross-Origin-Resource-Policy",
            value: "same-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
