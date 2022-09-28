import styled, { css } from 'styled-components'

export const Label = styled.label(
	({ theme }) => css`
		color: ${theme.colors.white};
		font-weight: ${theme.font.bold};
	`
)
