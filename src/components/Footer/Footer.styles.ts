import styled, { css } from 'styled-components'
import { lessThan } from 'utils/breakpoints'

export const Footer = styled.footer(
	({ theme }) => css`
		display: flex;
		justify-content: center;
		color: white;

		position: absolute;
		bottom: 0;
		border-top-right-radius: 2rem;
		border-top-left-radius: 2rem;
		left: 50%;
		transform: translateX(-50%);
		opacity: 0.7;
		width: 100%;
		height: ${theme.spacings.xs};
		padding: ${theme.spacings.xs};
		font-size: ${theme.font.sizes.sm};

		${lessThan('md')} {
			font-size: ${theme.font.sizes.xs};
		}

		:hover {
			svg {
				transition: 200ms ease-out;
				transform: scale(1.2);
			}
		}

		span {
			display: flex;
			align-items: center;
			gap: ${theme.spacings['2xs']};
		}

		svg {
			color: ${theme.colors.primary};
		}
	`
)
