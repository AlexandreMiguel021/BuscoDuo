import { Navigation, Pagination, SwiperOptions } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { GameCard } from 'components/Games/Card'
import { CarouselContainer } from './Carousel.styles'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import useGames from 'hooks/useGames'

const swiperOptions: SwiperOptions = {
	slidesPerView: 'auto',
	navigation: true,
	pagination: {
		clickable: true
	},
	modules: [Pagination, Navigation],
	breakpoints: {
		340: {
			slidesPerView: 1.6
		},
		480: {
			slidesPerView: 2.2
		},
		768: {
			slidesPerView: 5
		}
	}
}

export function GameCarousel() {
	const { games } = useGames()

	return (
		<CarouselContainer>
			<Swiper {...swiperOptions}>
				{games?.map((game) => (
					<SwiperSlide key={game.id}>
						<GameCard {...game} />
					</SwiperSlide>
				))}
			</Swiper>
		</CarouselContainer>
	)
}
