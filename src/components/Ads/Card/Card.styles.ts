import styled, { css } from 'styled-components'
import { CaretDown as ArrowDown } from 'phosphor-react'

export const AdCard = styled.div(
	({ theme }) => css`
		background-color: ${theme.colors.darkPrimary};
		border-radius: 0.8rem;
		width: 100%;
		max-width: 33rem;
		display: flex;
		flex-direction: column;
		gap: ${theme.spacings.xs};
		color: ${theme.colors.white};
		box-shadow: 0 8px 18px #00000030;
		justify-self: center;
		position: relative;

		h2 {
			font-weight: 600;
			font-size: ${theme.font.sizes.xl};
			color: ${theme.colors.white};
		}

		h3 {
			font-size: ${theme.font.sizes.md};
			font-weight: 500;
		}

		svg {
			color: ${theme.colors.white};
		}
	`
)

export const CardHead = styled.div(
	({ theme }) => css`
		background: ${theme.colors.gradient};
		display: flex;
		justify-content: center;
		padding: ${theme.spacings.xxs};
		margin-bottom: ${theme.spacings.xs};
		border-top-right-radius: 0.8rem;
		border-top-left-radius: 0.8rem;

		svg {
			color: white;
		}
	`
)

export const Spacer = styled.div(
	({ theme }) => css`
		height: 0.2rem;
		width: 90%;
		background: ${theme.colors.zinc};
		margin: ${theme.spacings['2xs']} auto;
	`
)

export const Day = styled.span(
	({ theme }) => css`
		opacity: 0.9;
		margin-right: ${theme.spacings['2xs']};
		font-size: ${theme.font.sizes.sm};
	`
)

export const DiscordName = styled.div(
	({ theme }) => css`
		position: absolute;
		height: 10rem;
		background-color: ${theme.colors.darkGray};
		width: 20rem;
		display: flex;
		border-radius: 0.8rem;
		bottom: 0;
		z-index: ${theme.layers.modal};
		box-shadow: 2px 2px 14px #00000050;

		display: flex;
		justify-content: center;
		align-items: center;
		right: 50%;
		transform: translate(50%, -3rem) scale(0.4);
		transition: 250ms ease-out;
		opacity: 0;

		&[data-visible='true'] {
			opacity: 1;
			transition: 250ms ease-out;
			transform: translate(50%, -8rem) scale(1);
		}

		button {
			all: unset;
			font-weight: bold;
			text-shadow: 0 0 2px ${theme.colors.darkPrimary};
			font-family: ${theme.font.family};
			text-shadow: 0 0 4px ${theme.colors.darkPrimary};
			font-size: ${theme.font.sizes.lg};
			display: flex;
			gap: ${theme.spacings.xxs};
			align-items: center;
			border-bottom: 0.5px solid transparent;

			:hover {
				cursor: pointer;
				opacity: 0.8;
			}

			:active {
				opacity: 0.7;
				transform: scale(0.98);
			}

			:focus {
				border-bottom: 0.5px solid ${theme.colors.gray};
			}
		}
	`
)

export const CaretDown = styled(ArrowDown)(
	({ theme }) => css`
		position: absolute;
		bottom: -1.5rem;
		right: 50%;
		transform: translateX(50%) scale(1);
		color: ${theme.colors.darkGray} !important;
	`
)

export const Years = styled(Day)``
export const Time = styled(Day)``
export const AvailableVoice = styled(Day)``
