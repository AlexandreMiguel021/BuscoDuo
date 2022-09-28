import { Flex } from 'components/Flex'
import styled, { css } from 'styled-components'

export const Logo = styled(Flex)(
	({ theme }) => css`
		gap: ${theme.spacings.xxs};
		align-items: center;

		h1 {
			font-size: ${theme.font.sizes['5xl']};
			-webkit-touch-callout: none;
			-webkit-user-select: none;
			-khtml-user-select: none;
			-moz-user-select: none;
			-ms-user-select: none;
			user-select: none;
			transition: 150ms;
		}

		:hover {
			svg {
				transform: rotate(34deg) translateY(-4px);
				transition: 150ms;
			}

			h1 {
				transform: translateY(-4px);
				transition: 150ms;
			}
		}

		svg {
			transition: 150ms;

			color: ${theme.colors.primary};
		}

		@media screen and (max-width: 768px) {
			transform: scale(0.8);
		}
	`
)
