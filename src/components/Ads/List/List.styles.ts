import styled, { css } from 'styled-components'

export const AdsList = styled.ul(
	({ theme }) => css`
		gap: ${theme.spacings.md};
		margin: auto;
		padding: ${theme.spacings.md};

		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));

		@media screen and (max-width: 940px) {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		@media screen and (max-width: 660px) {
			grid-template-columns: repeat(1, minmax(0, 1fr));
		}
	`
)
