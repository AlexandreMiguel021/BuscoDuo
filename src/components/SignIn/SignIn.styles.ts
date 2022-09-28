import { Dialog } from '@headlessui/react'
import { Flex } from 'components/Flex'
import styled, { css } from 'styled-components'

export const Modal: any = styled(Dialog.Panel)(
	({ theme }) => css`
		position: fixed;
		top: 50%;
		left: 50%;
		width: 100%;
		max-width: 51rem;
		display: flex;
		justify-content: center;
		flex-direction: column;
		transform: translate(-10%, -40%) rotate(20deg);
		background-color: ${theme.colors.darkPrimary};
		box-shadow: 0 4px 10px #00000030;
		border-radius: 0.8rem;
		overflow: hidden;
		z-index: ${theme.layers.modal};
		transition: 250ms ease;
		opacity: 0;
		visibility: hidden;

		&[data-visible='true'] {
			opacity: 1;
			visibility: visible;
			transition: 250ms ease;
			transform: translate(-50%, -50%) rotate(0);
		}

		@media screen and (max-width: 768px) {
			width: 90%;

			button {
				min-width: 100%;
			}
		}

		h2 {
			color: ${theme.colors.white};
			font-size: ${theme.font.sizes.xxl};
		}
	`
)

export const SignInHeader = styled.header(
	() => css`
		height: 30rem;
		width: 100%;
		background-position: 30% 20%;
		background-size: cover;
		filter: opacity(0.8);
		background-image: url('/images/signin.jpg');

		@media screen and (max-width: 768px) {
			height: 20rem;

			button {
				min-width: 100%;
			}
		}
	`
)

export const SignInBody = styled.div(
	({ theme }) => css`
		padding: ${theme.spacings.md};
		display: flex;
		flex-direction: column;
		gap: ${theme.spacings.xxs};

		h2 {
			font-size: ${theme.font.sizes['2xl']};
		}

		p {
			color: white;
			font-size: ${theme.font.sizes.md};
			font-weight: 500;
		}

		span {
			color: ${theme.colors.zinc};
			font-size: ${theme.font.sizes.sm};
			font-weight: 300;
		}

		button {
			margin-top: ${theme.spacings.sm};
		}
	`
)

export const SignInButtonGroup = styled(Flex)(
	() => css`
		@media screen and (max-width: 768px) {
			gap: 0;
		}
	`
)
