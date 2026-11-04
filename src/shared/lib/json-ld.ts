import { siteConfig } from "@/shared/config/seo";

function twitterProfileUrl(handle: string) {
  return `https://x.com/${handle.replace(/^@/, "")}`;
}

/** Site-wide JSON-LD graph (WebSite + Person), rendered in the root layout. */
export function buildSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: siteConfig.locale.replace("_", "-"),
        publisher: { "@id": `${siteConfig.url}#person` },
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.url}#person`,
        name: siteConfig.name,
        url: siteConfig.url,
        sameAs: [twitterProfileUrl(siteConfig.twitter)],
      },
    ],
  };
}
