import styled, { css } from 'styled-components'
import { lessThan } from 'utils/breakpoints'

export const Input = styled.input(
	({ theme }) => css`
		background-color: ${theme.colors.zinc900};
		height: ${theme.spacings.xl};
		width: 100%;
		padding: ${theme.spacings.xxs} ${theme.spacings.xs};
		border-radius: 0.4rem;
		color: ${theme.colors.white};
		border: none;
		font-family: ${theme.font.family};
		font-size: ${theme.font.sizes.md};

		:focus {
			outline: 2px solid ${theme.colors.primary}90;
		}

		::placeholder {
			${lessThan('md')} {
				font-size: ${theme.font.sizes.sm};
				color: red;
			}
		}

		&[data-error='true'] {
			outline: 1px solid ${theme.colors.dangers};
		}

		&[type='checkbox'] {
			width: 1.6rem;
			height: 1.6rem;
		}

		&[type='time'] {
			border-radius: 0.5rem;
			color: ${theme.colors.white};
			height: 4rem;
			background-color: ${theme.colors.zinc900};
		}
	`
)
