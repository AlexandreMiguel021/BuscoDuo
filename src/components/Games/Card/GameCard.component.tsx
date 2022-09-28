import Image from 'next/image'
import Link from 'next/link'
import * as S from './GameCard.styles'

interface GameCardProps {
	title: string
	bannerUrl: string
	slug: string
	_count: {
		ads: number
	}
}

export function GameCard({ title, _count, bannerUrl, slug }: GameCardProps) {
	return (
		<Link href={`/ads/${slug}`}>
			<S.GameCard title={`ver anúncios de ${title}`}>
				<S.GameImage>
					<Image src={bannerUrl} alt={title} layout='fill' />
				</S.GameImage>
				<S.GameDetails>
					<S.GameName>{title}</S.GameName>
					<S.GameAdverts>{_count.ads} anúncio(s)</S.GameAdverts>
				</S.GameDetails>
			</S.GameCard>
		</Link>
	)
}
