import styled, { css } from 'styled-components'

interface OverlayProps {
	transparent?: boolean
}

export const Overlay = styled.div<OverlayProps>(
	({ theme, transparent }) => css`
		background-color: ${transparent ? 'transparent ' : `#00000050`};
		height: 100vh;
		width: 100vw;
		position: fixed;
		top: 0;
		visibility: hidden;
		opacity: 0;
		left: 0;
		right: 0;
		bottom: 0;

		&[data-visible='true'] {
			visibility: visible;
			opacity: 1;
			z-index: ${theme.layers.overlay};
		}
	`
)
