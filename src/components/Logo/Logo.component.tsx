import { TextGradient } from 'components/GradientText'
import { GameController } from 'phosphor-react'
import * as S from './Logo.styles'

export function Logo() {
	return (
		<S.Logo>
			<GameController size={80} />
			<h1>
				<TextGradient>BuscoDuo</TextGradient>
			</h1>
		</S.Logo>
	)
}
