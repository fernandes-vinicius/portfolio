<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project conventions

Feature-based structure (same pattern as `salvia`/`listify`): `src/app` only routes; `src/features/<name>/{components,services,types,utils}` + client-safe `index.ts`; shared code in `src/shared/{components,config,hooks,lib,styles}`; providers in `src/providers`. Features never import from each other; `shared` never imports from `features`.

- Sanity access only through `sanityFetch` (`@/shared/lib/sanity/fetch`) inside `features/<name>/services/*-service.ts` (`import "server-only"`, cache `tags` = document `_type`).
- Sections are Server Components; `"use client"` only for small islands (`Reveal`, `RevealCard`, `CountUp`, header…).
- Absolute `@/` imports, kebab-case files, icons only via `@/shared/components/icons`.
- Full architecture: `README.md` · operational summary: `.cursor/skills/architecture/SKILL.md`.
- Before finishing: `npm run lint` and `npm run typecheck`.
