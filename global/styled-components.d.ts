/* eslint-disable @typescript-eslint/no-empty-interface */

import theme from 'styles/theme'

type Theme = typeof theme

declare module 'styled-components' {
	export interface DefaultTheme extends Theme {}
}

declare global {
	type Spacing =
		| '2xs'
		| 'xxs'
		| 'xs'
		| 'md'
		| 'lg'
		| 'xl'
		| 'xxl'
		| '2xl'
		| '3xl'
		| '4xl'
}
