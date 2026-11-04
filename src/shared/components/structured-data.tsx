// Renders schema.org JSON-LD as recommended by the Next.js docs
// (guides/json-ld): a plain <script> with `<` escaped to prevent XSS.
export function StructuredData({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD built in code, with `<` escaped
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
