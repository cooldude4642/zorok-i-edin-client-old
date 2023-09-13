import type { App } from '../app'

type AppType = typeof App

export type WithProvider = (App: AppType) => AppType
