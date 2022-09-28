import { Heart } from 'phosphor-react'
import * as S from './Footer.styles'

export function Footer() {
	return (
		<S.Footer>
			<span>
				Made with <Heart size={20} weight='fill' /> by Alexandre Miguel
			</span>
		</S.Footer>
	)
}
