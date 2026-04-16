import { type ClassValue, clsx } from "clsx";
import DOMPurify from "isomorphic-dompurify";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type SanitizeOptions = Parameters<typeof DOMPurify.sanitize>[1];

export function sanitizeHtml(dirty: string, options?: SanitizeOptions) {
  return DOMPurify.sanitize(dirty, options);
}
