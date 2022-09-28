const breakpoints = {
	sm: '640px',
	md: '768px',
	lg: '1024px',
	xl: '1264px'
}

type Breakpoint = keyof typeof breakpoints

export function lessThan(breakpoint: Breakpoint) {
	return `@media (max-width: ${breakpoints[breakpoint]})`
}

export function moreThan(breakpoint: Breakpoint) {
	return `@media (min-width: ${breakpoints[breakpoint]})`
}
