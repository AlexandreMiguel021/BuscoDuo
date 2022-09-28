import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import styled, { css } from 'styled-components'

export const checkboxContainer = styled.div(
	({ theme }) => css`
		display: flex;
		flex-direction: row-reverse;
		justify-content: flex-end;
		gap: ${theme.spacings.xxs};
		align-items: center;
	`
)

export const Checkbox = styled(CheckboxPrimitive.Root)(
	({ theme }) => css`
		all: unset;
		width: 2.4rem;
		height: 2.4rem;
		border-radius: 0.5rem;
		background-color: ${theme.colors.zinc900};
		cursor: pointer;
		color: ${theme.colors.emerald};
		display: flex;
		justify-content: center;

		&[data-state='checked'] {
			transform: scale(1.1);
			transition: 150ms ease;
		}
	`
)

export const CheckboxIndacator = styled(CheckboxPrimitive.CheckboxIndicator)(
	() => css``
)
