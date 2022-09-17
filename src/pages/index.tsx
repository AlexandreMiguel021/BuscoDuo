import { GameCard } from 'components/Games/Card'
import { GamesGrid } from 'components/Games/Grid'
import { Logo } from 'components/Logo'
import { TextGradient } from 'components/GradientText'
import type { NextPage } from 'next'
import { PostAd } from 'components/PostAd'
import * as S from 'styles/pages/Home'

const Home: NextPage = () => {
	return (
		<S.HomeContainer>
			<S.Header>
				<Logo />
				<S.HomeTitle>
					Seu <TextGradient>duo</TextGradient> está aqui.
				</S.HomeTitle>
			</S.Header>
			<GamesGrid>
				<GameCard
					src={'/images/image-1.png'}
					alt={''}
					gameName='League Of Legends'
					gameAdverts={'4 anuncios'}
				/>
				<GameCard
					src={'/images/image-2.png'}
					alt={''}
					gameName='Dota 2'
					gameAdverts={'4 anuncios'}
				/>
				<GameCard
					src={'/images/image-3.png'}
					alt={''}
					gameName='CS GO'
					gameAdverts={'4 anuncios'}
				/>
				<GameCard
					src={'/images/image-4.png'}
					alt={''}
					gameName='Apex Legends'
					gameAdverts={'3 anuncios'}
				/>
				<GameCard
					src={'/images/image-5.png'}
					alt={''}
					gameName='Fortnite'
					gameAdverts={'4 anuncios'}
				/>
				<GameCard
					src={'/images/image-6.png'}
					alt={''}
					gameName='Word of Warcraft'
					gameAdverts={'2 anuncios'}
				/>
			</GamesGrid>

			<PostAd />
		</S.HomeContainer>
	)
}

export default Home
