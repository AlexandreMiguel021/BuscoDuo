import { Dialog } from '@headlessui/react'
import styled, { css } from 'styled-components'
import { CheckboxIndicator, Checkbox as Check } from '@radix-ui/react-checkbox'
import { lessThan } from 'utils/breakpoints'

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
		z-index: 1;
		border-bottom-right-radius: 0;
		border-bottom-left-radius: 0;

		:before {
			content: '';
			position: absolute;
			width: 100%;
			height: 0.5rem;
			background: ${theme.colors.gradient};
			top: 0;
			left: 0;
		}

		${lessThan('md')} {
			flex-direction: column;
			text-align: center;
			width: 100%;
			margin: 0;
			margin-top: ${theme.spacings.md};
			border-radius: 0;
			gap: ${theme.spacings.sm};
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

export const Modal: any = styled(Dialog.Panel)(
	({ theme }) => css`
		position: fixed;
		top: 50%;
		left: 50%;
		width: 100%;
		max-width: 51rem;
		display: flex;
		justify-content: center;
		padding: ${theme.spacings.lg};
		flex-direction: column;
		gap: ${theme.spacings.xl};
		background-color: ${theme.colors.darkPrimary};
		box-shadow: 0 4px 10px #00000030;
		border-radius: 0.8rem;
		transform: translate(-10%, -40%) rotate(20deg);
		overflow: hidden;
		z-index: ${theme.layers.modal};
		transition: 250ms ease;
		opacity: 0;
		visibility: hidden;

		h2 {
			color: ${theme.colors.white};
			font-size: ${theme.font.sizes.xxl};
		}

		&[data-visible='true'] {
			opacity: 1;
			visibility: visible;
			transition: 250ms ease;
			transform: translate(-50%, -50%) rotate(0);
		}

		${lessThan('md')} {
			width: 90%;
			max-height: 90%;
			padding: ${theme.spacings.xs} ${theme.spacings['2xs']};
			gap: ${theme.spacings.xs};

			h2 {
				font-size: ${theme.font.sizes.lg};
				padding: 0 ${theme.spacings.xs};
			}

			form {
				overflow: scroll;
				padding: 0 ${theme.spacings.xs};
			}
		}
	`
)

export const Checkbox = styled(Check)`
	all: unset;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 24px;
	height: 24px;
	background: #18181b;
	border-radius: 4px;
	gap: 7px;
	cursor: pointer;
`
export const Indicator = styled(CheckboxIndicator)`
	color: #34d399;
	display: flex;
`
