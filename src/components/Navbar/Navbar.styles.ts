import styled, { css } from 'styled-components'

export const Navbar = styled.nav(
	({ theme }) => css`
		max-width: 40rem;
		width: 100%;
		background-color: ${theme.colors.darkPrimary};
		box-shadow: 0 8px 14px #00000030;
		border-bottom-right-radius: 1rem;
		border-bottom-left-radius: 1rem;
		margin: auto;
		position: relative;
		overflow: hidden;
		padding: ${theme.spacings.xs} ${theme.spacings.sm};
		justify-content: center;
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: ${theme.spacings.xxs};
		position: fixed;
		transform: translate(-50%);
		left: 50%;
		z-index: ${theme.layers.menu};

		:before {
			content: '';
			position: absolute;
			height: 0.5rem;
			width: 100%;
			background: ${theme.colors.gradient};
			bottom: 0;
			left: 0;
		}
	`
)

export const Avatar = styled.div(
	() => css`
		position: relative;
		height: 5.5rem;
		width: 5.5rem;
		border-radius: 100%;

		img {
			border-radius: 100%;
		}
	`
)

export const SignOutButton = styled.button(
	({ theme }) => css`
		all: unset;
		color: white;
		cursor: pointer;
		transition: 250ms ease;
		padding: ${theme.spacings.xxs};
		background-color: #f0f0f020;
		border-radius: 0.8rem;
		display: flex;
		align-items: center;
		gap: ${theme.spacings['2xs']};

		:hover {
			transform: translateX(6px);
			transition: 250ms ease;
		}

		:active {
			opacity: 0.7;
		}
	`
)

export const SignInButton = styled(SignOutButton)(() => css``)

export const DiscordName = styled.span(
	({ theme }) => css`
		color: ${theme.colors.lightGray};
		font-weight: bold;
	`
)

export const Name = styled.span(
	({ theme }) => css`
		color: ${theme.colors.lightGray}98;
	`
)

export const AvatarNone = styled.div(
	({ theme }) => css`
		background-color: ${theme.colors.primary};
		border-radius: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 5rem;
		width: 5rem;
		color: white;
	`
)

export const NavSpacer = styled.div(
	() => css`
		height: 10rem;
	`
)
