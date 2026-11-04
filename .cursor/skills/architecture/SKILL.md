---
name: architecture
description: Documenta a arquitetura do projeto portfolio (Next.js 16 App Router, organização por feature). Use quando precisar saber onde criar novos arquivos, qual pasta usar para cada tipo de código, ou entender convenções do projeto.
---

# Arquitetura do Projeto Portfolio

> A fonte completa é o `README.md` (seção "Arquitetura"). Este arquivo é o resumo operacional.

## Stack

- Next.js 16 (App Router, RSC por padrão) · React 19 · TypeScript strict
- Tailwind CSS v4 (sem `tailwind.config.ts`) · shadcn/ui estilo `radix-maia` (Radix) · CVA · Lucide/react-icons
- Sanity (`next-sanity`, GROQ) · t3-env + Zod · next-themes · Biome 2

## Estrutura

```
src/
├── app/            # SÓ rotas e arquivos especiais do Next (layout, page, loading, og, robots, sitemap)
├── features/<nome>/
│   ├── components/ # seção + cards (Server Components)
│   ├── services/   # <nome>-service.ts: defineQuery + getX() via sanityFetch — `import "server-only"`
│   ├── types/      # <nome>-types.ts: alias do *_QUERY_RESULT gerado pelo TypeGen
│   ├── utils/      # funções puras
│   └── index.ts    # barrel client-safe (componentes + tipos, NUNCA services)
├── shared/
│   ├── components/ # ui/ (shadcn), layout/, effects/, section, reveal, icons, structured-data…
│   ├── config/     # fonts, nav, seo
│   ├── hooks/
│   ├── lib/        # sanity/{client,fetch,types}, env, dayjs, json-ld, utils
│   └── styles/     # animations.css
└── providers/      # theme-provider
```

Features atuais: `profile`, `experience`, `projects`, `skills`, `differentials`, `contact`.

## Onde colocar cada coisa

| Tipo | Pasta |
|------|-------|
| Rota / layout / arquivo especial | `src/app/` |
| Seção ou card de um domínio | `src/features/<nome>/components/` |
| Query GROQ + função de leitura | `src/features/<nome>/services/<nome>-service.ts` |
| Tipo do resultado da query | `src/features/<nome>/types/<nome>-types.ts` |
| Regra pura de uma feature | `src/features/<nome>/utils/` |
| Componente shadcn (CLI) | `src/shared/components/ui/` |
| Header, footer, menu, toggle de tema | `src/shared/components/layout/` |
| Efeito visual decorativo | `src/shared/components/effects/` |
| Componente reutilizável sem domínio | `src/shared/components/` |
| Ícones | `src/shared/components/icons.tsx` |
| Fontes / nav / SEO | `src/shared/config/` |
| Hooks | `src/shared/hooks/` |
| Cliente Sanity, `sanityFetch`, tipos gerados | `src/shared/lib/sanity/` |
| Providers React | `src/providers/` |
| Tokens CSS | `src/app/globals.css` |
| Keyframes / classes de animação | `src/shared/styles/animations.css` |

## Regras de dependência

- `app` → `features` → `shared`. Nunca no sentido contrário.
- Feature **não** importa de outra feature; o que é comum sobe para `shared/`.
- `shared/lib` não importa de `shared/components`.
- Services só são importados pelo caminho direto, em Server Components.

## Convenções

- Imports absolutos com `@/` (nunca relativos).
- Kebab-case em arquivos e pastas; sufixos `-types.ts`, `-service.ts`.
- Acesso ao Sanity **sempre** via `sanityFetch({ query, tags: ["<_type>"] })`; nunca `client.fetch` direto.
- `"use client"` só em ilhas pequenas (`Reveal`, `RevealCard`, `CountUp`, header…). Seções são RSC.
- Não mutar props (`.sort()` em array recebido); ordenar na query GROQ ou com `toSorted` no service.
- Ícones: nunca importar de `lucide-react`/`react-icons` fora de `shared/components/icons.tsx`.
- shadcn: `npx shadcn@latest add <componente>` (aliases já apontam para `shared/`).
- Layouts/páginas tipados com os helpers globais `LayoutProps<"/">` / `PageProps<"/">`.
- JSON-LD com `<StructuredData data={…} />`.
- Antes de finalizar: `npm run lint` e `npm run typecheck`.
