import styled, { css } from 'styled-components'

export const GameCard = styled.a`
	position: relative;
	border-radius: 0.8rem;
	overflow: hidden;
	cursor: pointer;
	transition: 250ms ease;

	:hover {
		transition: 250ms ease;
		transform: scale(1.1) rotate(2deg);
	}
`

export const GameImage = styled.div`
	position: relative;
	width: 180px;
	height: 240px;
`

export const GameDetails = styled.div(
	({ theme }) => css`
		width: 100%;
		background: ${theme.colors.darkGradient};
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		padding: ${theme.spacings.xxl} ${theme.spacings.xxs} ${theme.spacings.xs};
	`
)

export const GameName = styled.span(
	({ theme }) => css`
		font-size: ${theme.font.sizes.md};
		font-weight: ${theme.font.bold};
		color: ${theme.colors.white};
	`
)

export const GameAdverts = styled.span(
	({ theme }) => css`
		color: ${theme.colors.white};
		font-size: ${theme.font.sizes.sm};
	`
)
