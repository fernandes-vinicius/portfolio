export const SEOConfig = {
  name: 'Vinicius | Desenvolvedor Frontend',
  description: `Sou um desenvolvedor frontend apaixonado pelo processo de criação.`,
  url: 'http://localhost:3000',
  ogImage: '',
  links: {
    whatsApp: 'https://wa.me/+5584999954300',
    curriculum: `https://docs.google.com/document/d/e/2PACX-1vRLSfPqgCode9SFomM_86YiScrqmIwBiVQlWkMYwgClc-LvWZjHKsPQemCG-rBLKJoB_m6Lf4nBS7k4/pub`,
  },
} as const

export type SEOConfig = typeof SEOConfig
