/* eslint-disable boundaries/element-types */
import '../styles/index.css'
import type { WithProvider } from './types'

export const withStyles: WithProvider = (App) => (props) => <App { ...props }/>
