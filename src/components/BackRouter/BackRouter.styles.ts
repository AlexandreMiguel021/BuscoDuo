import { Flex } from 'components/Flex'
import styled, { css } from 'styled-components'

export const BackRouter = styled(Flex)(
	({ theme }) => css`
		margin: ${theme.spacings.sm};
		color: white;
		gap: ${theme.spacings.xxs};
		font-size: ${theme.font.sizes.xl};
		cursor: pointer;
		transition: 250ms ease-out;
		width: 20rem;
		display: flex;
		align-items: center;

		:hover {
			transform: translateX(-10px);
			transition: 250ms ease-out;
			opacity: 0.9;
		}

		:focus {
			opacity: 0.7;
		}
	`
)
