import { Button } from 'components/Button'
import { MagnifyingGlassPlus } from 'phosphor-react'

import * as S from './PostAd.styles'

const PostAd = () => {
	return (
		<S.PostAd>
			<S.AdInfo>
				<strong>Não encontrou seu duo?</strong>
				<span>Publique um anúncio para encontrar novos players!</span>
			</S.AdInfo>
			<Button as='a'>
				<MagnifyingGlassPlus size={24} /> Publicar anúncio
			</Button>
		</S.PostAd>
	)
}

export { PostAd }
