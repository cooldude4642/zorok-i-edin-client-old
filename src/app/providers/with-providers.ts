import compose from 'compose-function'
import { withLayout } from './with-layout'
import { withStyles } from './with-styles'

export const withProviders = compose(withStyles, withLayout)
