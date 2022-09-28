import styled, { css } from 'styled-components'
import { Container } from 'components/Container'

export const HomeContainer = styled(Container)`
	justify-content: center;
	align-items: center;
`

export const HomeTitle = styled.h1(
	({ theme }) => css`
		font-size: ${theme.font.sizes['5xl']};
		text-align: center;
		color: ${theme.colors.white};

		@media screen and (max-width: 768px) {
			font-size: ${theme.font.sizes['3xl']};
			text-align: center;
		}
	`
)

export const Header = styled.header(
	({ theme }) => css`
		display: flex;
		align-items: center;
		padding: ${theme.spacings.xxl};
		gap: ${theme.spacings.xxl};
		flex-direction: column;
	`
)
