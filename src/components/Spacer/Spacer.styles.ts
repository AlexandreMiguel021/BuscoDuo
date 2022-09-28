import styled, { css } from 'styled-components'

interface SpacerProps {
	spacing: Spacing
}

export const Spacer = styled.div<SpacerProps>(
	({ theme, spacing }) => css`
		display: block;
		width: 100%;
		height: ${theme.spacings[spacing]};
	`
)
