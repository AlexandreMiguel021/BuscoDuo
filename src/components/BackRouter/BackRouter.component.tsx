import { Container } from 'components/Container'
import { useRouter } from 'next/router'
import { ArrowUUpLeft } from 'phosphor-react'
import * as S from './BackRouter.styles'

export function BackRouter() {
	const { back } = useRouter()

	return (
		<Container>
			<S.BackRouter
				tabIndex={1}
				onClick={back}
				onKeyDown={(e) => e.key === 'Enter' && back()}
			>
				<ArrowUUpLeft />
				Voltar
			</S.BackRouter>
		</Container>
	)
}
