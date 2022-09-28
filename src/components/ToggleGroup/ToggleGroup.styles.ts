import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import styled, { css, keyframes } from 'styled-components'

const checked = keyframes`
  0% {
    transform: scale(.8);
  }
  100% {
    transform: scale(1);
  }
`
const unChecked = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(.8);
  }
`

export const ToggleGroupContainer = styled.div(
	({ theme }) => css`
		display: flex;
		flex-direction: column;
		gap: ${theme.spacings.xxs};
	`
)

export const ToggleGroup = styled(ToggleGroupPrimitive.Root)(
	({ theme }) => css`
		display: flex;
		flex-wrap: wrap;
		gap: ${theme.spacings.xxs};
	`
)

export const ToggleGroupItem = styled(ToggleGroupPrimitive.Item)(
	({ theme }) => css`
		width: 3.2rem;
		height: 3.2rem;
		background-color: ${theme.colors.zinc900};
		border: none;
		border-radius: 0.5rem;
		cursor: pointer;
		transition: 0.3s ease;
		color: white;
		font-weight: bold;

		&[data-state='off'] {
			animation: ${unChecked} 150ms ease;
		}

		&[data-state='on'] {
			background-color: ${theme.colors.primary};
			animation: ${checked} 150ms ease;
		}
	`
)
