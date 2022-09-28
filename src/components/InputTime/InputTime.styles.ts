import styled, { css } from 'styled-components'

export const InputTimeContainer = styled.div(
	({ theme }) => css`
		display: flex;
		flex-direction: column;
		gap: ${theme.spacings.xxs};
	`
)
