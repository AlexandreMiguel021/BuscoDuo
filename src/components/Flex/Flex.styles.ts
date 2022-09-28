import styled, { css, DefaultTheme } from 'styled-components'

interface FlexProps {
	col?: boolean
	gap?: Spacing
	itemsCenter?: boolean
	justifyCenter?: boolean
	justifyBetween?: boolean
	justifyEnd?: boolean
	justifyAround?: boolean
	flex1?: boolean
	fullWidth?: boolean
	flexWrap?: boolean
	px?: Spacing
	py?: Spacing
}

const paddingModifier = {
	pXpY: (px: Spacing, py: Spacing, theme: DefaultTheme) => css`
		padding: ${theme.spacings[py]} ${theme.spacings[px]};
	`,

	pX: (px: Spacing, theme: DefaultTheme) => css`
		padding: 0 ${theme.spacings[px]};
	`,

	pY: (py: Spacing, theme: DefaultTheme) => css`
		padding: ${theme.spacings[py]} 0;
	`
}

export const Flex = styled.div<FlexProps>(
	({ col, gap, theme, ...props }) => css`
		display: flex;
		width: ${props.fullWidth && '100%'};
		margin: 0;
		flex-direction: ${col && 'column'};
		gap: ${theme.spacings[gap!]};
		justify-content: ${props.justifyCenter && 'center'};
		justify-content: ${props.justifyAround && 'space-around'};
		justify-content: ${props.justifyBetween && 'space-between'};
		justify-content: ${props.justifyEnd && 'flex-end'};
		align-items: ${props.itemsCenter && 'center'};
		flex: ${props.flex1 && '1 1 0%'};
		${props.px && props.py && paddingModifier.pXpY(props.px, props.py, theme)}
		${props.px && !props.py && paddingModifier.pX(props.px, theme)}
		${props.py && !props.px && paddingModifier.pY(props.py, theme)}

		@media screen and (max-width: 768px) {
			flex-wrap: ${props.flexWrap ? 'wrap' : 'initial'};
		}
	`
)
