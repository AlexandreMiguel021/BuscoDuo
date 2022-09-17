import styled, { css } from 'styled-components'
import { Container } from 'components/Container'

export const HomeContainer = styled(Container)`
	justify-content: center;
	align-items: center;
`

export const HomeTitle = styled.h1(
	({ theme }) => css`
		font-size: ${theme.font.sizes['5xl']};
		color: ${theme.colors.white};
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
