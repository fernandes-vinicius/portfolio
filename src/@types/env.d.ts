declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      NEXT_PUBLIC_GITHUB_URL: string
      NEXT_PUBLIC_LINKED_IN_URL: string
      NEXT_PUBLIC_INSTAGRAM_URL: string
      NEXT_PUBLIC_EMAIL_URL: string
      NEXT_PUBLIC_WHATS_APP_URL: string
    }
  }
}

export {}
