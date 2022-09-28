import { Logo } from 'components/Logo'
import { TextGradient } from 'components/GradientText'
import type { NextPage } from 'next'
import { PostAd } from 'components/PostAd'
import * as S from 'styles/pages/Home'
import { SignIn } from 'components/SignIn/SignIn.component'
import { GameCarousel } from 'components/Games/Carousel'
import useUserStore from 'store/user-store'
import { Layout } from 'components/layout'

const Home: NextPage = () => {
	const user = useUserStore((state) => state.user)
	const userName = user?.fullName ?? 'gamer'

	return (
		<Layout>
			<S.HomeContainer>
				<S.Header>
					<Logo />
					<S.HomeTitle>
						Olá {userName}, seu <TextGradient>duo</TextGradient> está aqui!
					</S.HomeTitle>
				</S.Header>
				<GameCarousel />
				<SignIn />
				<PostAd />
			</S.HomeContainer>
		</Layout>
	)
}

export default Home
