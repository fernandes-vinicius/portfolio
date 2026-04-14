---
name: architecture
description: Documenta a arquitetura do projeto portfolio (Next.js 16 App Router). Use quando precisar saber onde criar novos arquivos, qual pasta usar para cada tipo de código, ou entender convenções do projeto.
---

# Arquitetura do Projeto Portfolio

## Stack

- **Framework:** Next.js 16 — App Router, RSC por padrão
- **Runtime:** React 19
- **Linguagem:** TypeScript (`strict: true`), alias `@/*` → `./src/*`
- **Estilos:** Tailwind CSS v4 (via `@import "tailwindcss"` no CSS, sem `tailwind.config.ts`)
- **UI:** shadcn/ui (estilo `base-maia`) + Base UI + CVA + Lucide
- **Temas:** `next-themes` com classe `.dark` e variáveis OKLCH
- **Lint/Format:** Biome 2 (substitui ESLint + Prettier)
- **Deploy:** Vercel (imagens sem otimização em produção)

## Estrutura de pastas

```
src/
├── app/                    # App Router — rotas, layouts, páginas
│   ├── globals.css         # tokens CSS (OKLCH), @theme inline, @layer base
│   ├── layout.tsx          # Root layout (fontes, ThemeProvider)
│   └── page.tsx            # Rota raiz /
├── components/
│   ├── ui/                 # Componentes shadcn (gerados via CLI)
│   ├── sections/           # Seções de página (Hero, About, Projects…)
│   └── theme-provider.tsx  # Client Component para next-themes
├── config/
│   ├── fonts.ts            # Definições next/font/google
│   └── seo.ts              # Metadata, site title, OG
├── hooks/                  # Custom hooks React
├── lib/
│   └── utils.ts            # cn() e outras funções reutilizáveis
└── types/                  # Tipos TypeScript globais (opcional)
    └── index.ts
```

## Onde colocar cada tipo de arquivo

| Tipo | Pasta |
|------|-------|
| Rotas, layouts, páginas | `src/app/` |
| Componentes shadcn (CLI) | `src/components/ui/` |
| Componentes de seção/página | `src/components/sections/` |
| Componentes compartilhados | `src/components/` |
| Fontes (`next/font`) | `src/config/fonts.ts` |
| SEO/Metadata | `src/config/seo.ts` |
| Variáveis de configuração | `src/config/` |
| Funções utilitárias | `src/lib/` |
| Custom hooks React | `src/hooks/` |
| Tipos TypeScript globais | `src/types/` |
| CSS global + tokens | `src/app/globals.css` |

## Convenções

### Imports
Sempre usar o alias `@/` ao invés de caminhos relativos:
```ts
import { cn } from "@/lib/utils"
import { fontSans } from "@/config/fonts"
```

### Componentes shadcn
Adicionar via CLI — nunca criar manualmente em `ui/`:
```bash
npx shadcn@latest add <component>
```

### Client Components
Adicionar `"use client"` apenas quando necessário (hooks, eventos, estado). Preferir RSC.

### Fontes
Exportadas de `src/config/fonts.ts` como variáveis CSS e importadas no `layout.tsx`.

### Lint/Format
Biome gerencia tudo. Não usar `eslint` nem `prettier`.
```bash
npm run lint     # biome check
npm run format   # biome format --write
```

### Tokens de cor
Definidos em `globals.css` como variáveis CSS OKLCH (`:root` e `.dark`). Referenciados via `@theme inline` para o Tailwind.
