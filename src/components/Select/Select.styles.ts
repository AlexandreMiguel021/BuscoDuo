import styled, { css } from 'styled-components'
import { Listbox } from '@headlessui/react'
import { Input } from 'components/Input'
import { lessThan } from 'utils/breakpoints'

export const SelectContainer = styled.div(
	() => css`
		flex-direction: column;
		position: relative;
	`
)

export const SelectPanel = styled(Listbox.Options)(
	({ theme }) => css`
		background-color: ${theme.colors.zinc900};
		list-style: none;
		position: absolute;
		width: 100%;
		margin-top: ${theme.spacings.xxs};
		box-shadow: 0 4px 12px #00000050;
		border-radius: 0.5rem;
		overflow: hidden;
	`
)

export const SelectOption: any = styled(Listbox.Option)(
	({ theme }) => css`
		color: ${theme.colors.white};
		padding: ${theme.spacings.xxs};
		cursor: pointer;

		:hover {
			background-color: ${theme.colors.primary}90;
		}

		&[aria-selected='true'] {
			background-color: ${theme.colors.primary}90;
		}
	`
)

export const SelectButton: any = styled(Input).attrs(() => ({
	as: Listbox.Button
}))(
	({ theme }) => css`
		cursor: pointer;
		margin-top: ${theme.spacings.xxs};
		margin-bottom: ${theme.spacings.xxs};

		span {
			opacity: 0.4;

			${lessThan('md')} {
				font-size: ${theme.font.sizes.sm};
				color: red;
			}
		}

		div {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	`
)
