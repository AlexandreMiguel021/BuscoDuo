import styled, { css } from 'styled-components'

export const TextFieldContainer = styled.div(
	({ theme }) => css`
		display: flex;
		flex-direction: column;
		gap: ${theme.spacings.xxs};
	`
)

export const FieldError = styled.span(
	({ theme }) => css`
		color: ${theme.colors.dangers};
		font-weight: 500;
	`
)
