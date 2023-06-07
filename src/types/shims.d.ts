declare interface Window {
  // extend the window
}

interface ImportMetaEnv {
  readonly VITE_ENV: string,
  readonly VITE_DSC: string,
  readonly VITE_APP_TRUE_API: string,
  readonly VITE_APP_BASE_API: string,
  readonly VITE_APP_REQUEST_API: string,
  readonly VITE_APP_TITLE: string,
  readonly VITE_APP_DESCRIPTION: string,
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.vue' {
  import { type DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
