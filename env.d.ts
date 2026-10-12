/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_OPENWEATHER_API_KEY: string
  readonly VITE_GET_BOOK_COUNT_URL?: string
  readonly VITE_GET_ALL_BOOKS_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<object, object, unknown>
  export default component
}
