import { Container } from 'components/Container'
import { Ad } from 'entities/Ad'
import { AdCard } from '../Card'
import * as S from './List.styles'

interface AdsListProps {
	ads: Ad[]
}

export function AdsList({ ads }: AdsListProps) {
	return (
		<Container>
			<S.AdsList>
				{ads.map((ad) => (
					<AdCard key={ad.id} {...ad} />
				))}
			</S.AdsList>
		</Container>
	)
}
