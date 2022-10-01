import { Ghost } from 'phosphor-react'
import * as S from './GamesNotFound.styles'

export function GamesNotFound() {
	return (
		<S.GamesNotFound>
			<Ghost size={142} />
			<h2>Parece que não há nenhum anúncio </h2>
		</S.GamesNotFound>
	)
}
