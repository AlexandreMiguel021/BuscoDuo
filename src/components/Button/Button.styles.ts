import styled, { css } from 'styled-components'

export const Button = styled.button(
	({ theme }) => css`
		color: ${theme.colors.white};
		border-radius: 0.6rem;
		background-color: ${theme.colors.primary};
		height: 4.8rem;
		width: 100%;
		display: flex;
		justify-content: center;
		gap: ${theme.spacings.xxs};
		max-width: 19.3rem;
		align-items: center;
		transition: 100ms ease-in;
		cursor: pointer;

		:hover {
			transform: translateY(-3px);
			opacity: 0.8;
			transition: 150ms ease-in;
		}
	`
)
