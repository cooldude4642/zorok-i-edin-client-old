import { BaseLayout } from 'widgets/base-layout'
import type { WithProvider } from './types'

export const withLayout: WithProvider = (App) => (props) => (
	<BaseLayout>
		<App { ...props }/>
	</BaseLayout>
)
