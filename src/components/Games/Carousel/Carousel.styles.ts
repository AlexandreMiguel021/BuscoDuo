import styled, { css } from 'styled-components'

export const CarouselContainer = styled.div(
	({ theme }) => css`
		max-width: ${theme.grid.container};
		padding: 0 ${theme.spacings.xxs};

		.swiper-button-prev {
			background-color: ${theme.colors.darkPrimary}99;
			border-radius: 100%;
			color: white;
			padding: ${theme.spacings.md};
			top: 50%;
			transform: translateY(-50%);
			left: 0;

			@media screen and (max-width: 768px) {
				display: none;
			}
		}

		.swiper-button-next {
			background-color: ${theme.colors.darkPrimary}99;
			border-radius: 100%;
			color: white;
			padding: ${theme.spacings.md};
			top: 50%;
			transform: translateY(-50%);
			right: 0;

			@media screen and (max-width: 768px) {
				display: none;
			}
		}

		.swiper-wrapper {
			padding: ${theme.spacings.lg} ${theme.spacings.md};
			max-width: ${theme.grid.container};
			gap: ${theme.spacings.lg};
			margin: ${theme.spacings.md} auto ${theme.spacings['3xl']};

			@media screen and (max-width: 768px) {
				margin: ${theme.spacings.xxs} auto ${theme.spacings.xs};
			}
		}

		.swiper-slide {
			display: flex;
			justify-content: center;
			align-items: center;
			max-width: min-content;
		}

		.swiper-pagination-bullet {
			background-color: ${theme.colors.primary};
			z-index: 2;
		}
	`
)
