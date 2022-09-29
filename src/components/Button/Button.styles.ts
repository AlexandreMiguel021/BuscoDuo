import styled, { css } from 'styled-components'

interface ButtonProps {
	bg?: 'primary' | 'zinc500'
	fullWidth?: boolean
	grow1?: boolean
}

export const Button = styled.button<ButtonProps>(
	({ theme, fullWidth, bg = 'primary', grow1 }) => css`
		border: none;
		color: ${theme.colors.white};
		border-radius: 0.6rem;
		background-color: ${theme.colors[bg!]};
		height: 4.8rem;
		display: flex;
		justify-content: center;
		padding: 0 ${theme.spacings.sm};
		gap: ${theme.spacings.xxs};
		align-items: center;
		transition: 100ms ease-in;
		font-size: ${theme.font.sizes.md};
		font-weight: ${theme.font.bold};
		cursor: pointer;
		width: ${fullWidth && '100%'};
		flex-grow: ${grow1 && '1'};

		:hover {
			transform: translateY(-3px);
			opacity: 0.8;
			transition: 150ms ease-in;
		}

		:focus {
			outline: none;
			opacity: 0.9;
		}

		@media screen and (max-width: 768px) {
			font-size: ${theme.font.sizes.sm};
		}
	`
)
