import type { PropsWithChildren } from 'react'

export type BaseLayoutProps = PropsWithChildren

export function BaseLayout ({ children }: BaseLayoutProps) {
	return (
		<main>{ children }</main>
	)
}
