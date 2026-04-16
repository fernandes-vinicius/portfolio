import DOMPurify from "isomorphic-dompurify";

type SanitizeOptions = Parameters<typeof DOMPurify.sanitize>[1];

export function sanitizeHtml(dirty: string, options?: SanitizeOptions) {
  return DOMPurify.sanitize(dirty, options);
}
