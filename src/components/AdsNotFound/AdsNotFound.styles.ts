import styled, { css } from 'styled-components'

export const AdsNotFound = styled.div(
	({ theme }) => css`
		color: ${theme.colors.white};
		max-width: 40rem;
		text-align: center;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);

		h2 {
			font-size: ${theme.font.sizes.xxl};
		}
	`
)
