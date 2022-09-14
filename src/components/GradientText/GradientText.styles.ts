import styled, { css } from 'styled-components'

export const TextGradient = styled.span(
	({ theme }) => css`
		background: ${theme.colors.gradient};
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		background-repeat: repeat;
	`
)
