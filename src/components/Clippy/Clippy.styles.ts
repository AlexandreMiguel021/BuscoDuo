import styled, { css } from 'styled-components'

export const Geometry1 = styled.div(
	({ theme }) => css`
		width: 13rem;
		height: 13rem;
		position: fixed;
		top: 10%;
		z-index: -1;
		left: 6%;
		opacity: 0.07;
		background: ${theme.colors.gradient};
		clip-path: polygon(
			20% 0%,
			0% 20%,
			30% 50%,
			0% 80%,
			20% 100%,
			50% 70%,
			80% 100%,
			100% 80%,
			70% 50%,
			100% 20%,
			80% 0%,
			50% 30%
		);
	`
)

export const Geometry2 = styled(Geometry1)`
	top: 70%;
	width: 9rem;
	transform: rotate(-20deg);
	height: 9rem;
	left: 12%;
	opacity: 0.1;
`
export const Geometry3 = styled(Geometry1)`
	top: 40%;
	opacity: 0.04;
	transform: rotate(30deg);
	left: 72%;
`

export const Geometry4 = styled.div(
	({ theme }) => css`
		z-index: -1;
		width: 18rem;
		height: 18rem;
		position: fixed;
		top: -4%;
		left: 80%;
		opacity: 0.04;
		transform: rotate(30deg);
		background: ${theme.colors.gradient};
		clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
	`
)

export const Geometry5 = styled(Geometry4)`
	top: 40%;
	opacity: 0.08;
	width: 7rem;
	height: 7rem;
	transform: rotate(-10deg);
	left: 42%;
	@media screen and (max-width: 768px) {
		display: none;
	}
`

export const Geometry6 = styled(Geometry4)`
	top: 76%;
	opacity: 0.1;
	width: 11rem;
	height: 11rem;
	transform: rotate(30deg);
	left: 52%;
`

export const Geometry7 = styled.div(
	({ theme }) => css`
		z-index: -1;
		clip-path: circle(50% at 50% 50%);
		width: 9rem;
		height: 9rem;
		position: fixed;
		top: 20%;
		left: 70%;
		opacity: 0.09;
		background: ${theme.colors.gradient};
	`
)

export const Geometry8 = styled(Geometry7)`
	top: 41%;
	opacity: 0.08;
	width: 14rem;
	height: 14rem;
	left: 16%;
`

export const Geometry9 = styled(Geometry7)`
	top: 81%;
	opacity: 0.06;
	width: 14rem;
	height: 14rem;
	left: 86%;
`

export const Geometry10 = styled.div(
	({ theme }) => css`
		width: 9rem;
		height: 9rem;
		position: fixed;
		top: 16%;
		left: 24%;
		opacity: 0.05;
		transform: rotate(35deg);
		z-index: -1;
		background: ${theme.colors.gradient};
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);

		@media screen and (max-width: 768px) {
			display: none;
		}
	`
)

export const Geometry11 = styled(Geometry10)`
	top: 41%;
	opacity: 0.06;
	width: 6rem;
	height: 6rem;
	left: 96%;
`
