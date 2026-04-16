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
│   ├── favicon.ico
│   ├── globals.css         # tokens CSS (OKLCH), @theme inline, @layer base
│   ├── layout.tsx          # Root layout (fontes, ThemeProvider)
│   └── page.tsx            # Rota raiz /
├── components/
│   ├── common/             # Componentes compartilhados da aplicação
│   │   ├── icons.tsx       # IconProps + wrappers de todos os ícones usados
│   │   ├── theme-provider.tsx  # Client Component para next-themes
│   │   ├── header.tsx      # Header fixo com nav desktop/mobile
│   │   ├── cta-button.tsx  # Botão de call-to-action reutilizável
│   │   ├── nav-button.tsx  # Botão de navegação (links do header)
│   │   └── scroll-to-top.tsx   # Componente para rolar ao topo
│   ├── ui/                 # Componentes shadcn (gerados via CLI)
│   │   ├── button.tsx
│   │   └── popover.tsx
│   └── sections/           # Seções de página (Hero, About, Projects…) — a criar
├── config/
│   ├── fonts.ts            # Definições next/font/google
│   └── seo.ts              # siteConfig + baseMetadata (Next.js Metadata API)
├── hooks/                  # Custom hooks React
│   └── use-scroll-threshold.ts  # Hook para detectar scroll além de threshold
├── lib/
│   ├── utils.ts            # cn() e outras funções reutilizáveis
│   └── sanity/
│       ├── client.ts       # createClient() — instância do cliente Sanity
│       ├── queries.ts      # GROQ queries
│       └── types.ts        # Tipos TypeScript gerados do schema Sanity
├── styles/
│   └── animations.css      # @keyframes e classes de animação reutilizáveis
└── types/                  # Tipos TypeScript globais
    └── index.ts
```

## Onde colocar cada tipo de arquivo

| Tipo | Pasta |
|------|-------|
| Rotas, layouts, páginas | `src/app/` |
| Componentes shadcn (CLI) | `src/components/ui/` |
| Componentes de seção/página | `src/components/sections/` |
| Componentes compartilhados da app | `src/components/common/` |
| Ícones (abstração) | `src/components/common/icons.tsx` |
| ThemeProvider, Header, etc. | `src/components/common/` |
| Fontes (`next/font`) | `src/config/fonts.ts` |
| SEO/Metadata | `src/config/seo.ts` |
| Variáveis de configuração | `src/config/` |
| Funções utilitárias | `src/lib/utils.ts` |
| Custom hooks React | `src/hooks/` |
| Tipos TypeScript globais | `src/types/index.ts` |
| CSS global + tokens de design | `src/app/globals.css` |
| Animações e CSS reutilizável | `src/styles/` |
| CSS de componente específico | co-localizado (`componente.module.css`) |
| Cliente de serviço externo | `src/lib/<serviço>/client.ts` |
| Queries de dados (GROQ, etc.) | `src/lib/<serviço>/queries.ts` |
| Tipos de schema externo | `src/lib/<serviço>/types.ts` |

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

### Ícones
Nunca importar de `lucide-react` diretamente. Sempre usar a abstração:
```tsx
// correto
import { ArrowRightIcon, MenuIcon } from "@/components/common/icons"

// proibido
import { ArrowRight, Menu } from "lucide-react"
```
Para adicionar um novo ícone, exportá-lo de `src/components/common/icons.tsx` como wrapper com `IconProps`:
```tsx
export const NovoIcon = (props: IconProps) => <NomeDoLucide {...props} />;
```

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

### CSS — onde colocar
- **Tokens, reset, `@layer base`** → `src/app/globals.css`
- **`@keyframes` e classes de animação reutilizáveis** → `src/styles/animations.css` (importado no `globals.css`)
- **CSS exclusivo de um componente** → co-localizado com o componente (`hero.module.css` ao lado de `hero.tsx`)
- **Evitar** criar arquivos CSS separados para o que o Tailwind cobre com classes utilitárias
