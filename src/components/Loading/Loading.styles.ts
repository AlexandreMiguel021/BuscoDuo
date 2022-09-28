import styled, { css } from 'styled-components'
import spinner from 'react-spinners/HashLoader'

export const LoadScreen = styled.div(
	({ theme }) => css`
		width: 100%;
		background: ${theme.colors.mainBg};
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		position: fixed;
		transform: translateY(-100vh);
		transition: 400ms ease-out;
		background-size: cover;
		visibility: hidden;

		&[data-load='true'] {
			z-index: ${theme.layers.alwaysOnTop};
			visibility: visible;
			transform: initial;
			transition: 400ms ease-out;
		}
	`
)

export const HashLoader: any = styled(spinner)`
	transform: translateX(-9rem);
`
