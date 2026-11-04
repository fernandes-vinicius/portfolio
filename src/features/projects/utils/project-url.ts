/** "https://www.example.com/app" → "example.com". Falls back to the raw input. */
export function displayHost(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

/** External (absolute) image URLs skip Next's optimizer — no remotePatterns needed. */
export function isExternalUrl(src: string): boolean {
  return /^https?:\/\//.test(src);
}
