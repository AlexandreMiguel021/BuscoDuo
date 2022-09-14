import Image from 'next/image'
import * as S from './GameCard.styles'

type GameCardProps = {
	src: string
	alt: string
	gameName: string
	gameAdverts: string
}

const GameCard = ({ src, alt, gameName, gameAdverts }: GameCardProps) => {
	return (
		<S.GameCard>
			<S.GameImage>
				<Image src={src} alt={alt} layout='fill' />
			</S.GameImage>
			<S.GameDetails>
				<S.GameName>{gameName}</S.GameName>
				<S.GameAdverts>{gameAdverts}</S.GameAdverts>
			</S.GameDetails>
		</S.GameCard>
	)
}

export { GameCard }
