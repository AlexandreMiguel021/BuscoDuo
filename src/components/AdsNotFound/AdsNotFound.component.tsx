import { Ghost } from 'phosphor-react'
import * as S from './AdsNotFound.styles'

export function AdsNotFound() {
	return (
		<S.AdsNotFound>
			<Ghost size={142} />
			<h2>Parece que não há nenhum anúncio </h2>
		</S.AdsNotFound>
	)
}
