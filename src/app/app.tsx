import type { AppProps } from 'next/app'
import { withProviders } from './providers'

export function App ({ Component, pageProps }: AppProps) {
	return <Component { ...pageProps }/>
}

export const WrappedApp = withProviders(App)
