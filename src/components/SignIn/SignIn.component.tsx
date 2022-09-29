import { Dialog } from '@headlessui/react'
import { Button } from 'components/Button'
import { Overlay } from 'components/Overlay'
import { DiscordLogo } from 'phosphor-react'
import useUserStore from 'store/user-store'
import * as S from './SignIn.styles'

export function SignIn() {
	const isOpen = useUserStore((state) => state.isOpenSigInModal)
	const close = useUserStore((state) => state.closeSigInModal)
	const signIn = useUserStore((state) => state.signIn)

	return (
		<Dialog open={isOpen} onClose={close} static>
			<Overlay data-visible={isOpen} />
			<S.Modal data-visible={isOpen}>
				<S.SignInHeader />
				<S.SignInBody>
					<h2>Olá!</h2>
					<p>
						Para criar um anúncio, ou conectar com outro jogador com o discord,
						é necessário estar autenticado.
					</p>
					<S.SignInButtonGroup flexWrap gap='md'>
						<Button onClick={close} bg='zinc500'>
							Cancelar
						</Button>
						<Button onClick={signIn}>
							<DiscordLogo size={28} />
							Conectar com Discord
						</Button>
					</S.SignInButtonGroup>
				</S.SignInBody>
			</S.Modal>
		</Dialog>
	)
}
