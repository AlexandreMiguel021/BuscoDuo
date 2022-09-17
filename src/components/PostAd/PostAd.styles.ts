import styled, { css } from 'styled-components'

export const PostAd = styled.div(
	({ theme }) => css`
		background-color: ${theme.colors.darkPrimary};
		align-self: stretch;
		border-radius: 0.8rem;
		position: relative;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: ${theme.spacings.md};
		margin: ${theme.spacings.xs} ${theme.spacings.md};

		:before {
			content: '';
			position: absolute;
			width: 100%;
			height: 0.5rem;
			background: ${theme.colors.gradient};
			top: 0;
			left: 0;
		}
	`
)

export const AdInfo = styled.div(
	({ theme }) => css`
		display: flex;
		flex-direction: column;
		gap: ${theme.spacings.xxs};

		strong {
			font-size: ${theme.font.sizes.xl};
			color: ${theme.colors.white};
		}

		span {
			color: ${theme.colors.zinc};
			text-shadow: 0 0 3px black;
		}
	`
)
