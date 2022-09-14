import styled, { css } from 'styled-components'

export const GamesGrid = styled.div(
	({ theme }) => css`
		display: grid;
		grid-template-columns: repeat(6, minmax(0, 1fr));
		gap: ${theme.spacings.md};
		padding: ${theme.spacings.md};
	`
)
