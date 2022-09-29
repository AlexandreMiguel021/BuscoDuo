/* eslint-disable react-hooks/exhaustive-deps */
import { Dialog } from '@headlessui/react'
import { Button } from 'components/Button'
import { Flex } from 'components/Flex'
import { Overlay } from 'components/Overlay'
import { Modal } from 'components/SignIn/SignIn.styles'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

const Info = styled.span(
	({ theme }) => css`
		padding: ${theme.spacings.sm};

		h2 {
			font-size: ${theme.font.sizes.lg};
		}
	`
)

export default function UnverifiedEmail() {
	const { asPath } = useRouter()
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		if (asPath.includes('Unverified')) {
			setTimeout(() => {
				setIsOpen(true)
			}, 2800)
		}
	}, [])

	function closeInfo() {
		setIsOpen(false)
	}

	return (
		<Dialog open={isOpen} onClose={closeInfo} static>
			<Overlay data-visible={isOpen} onClick={closeInfo} />
			<Modal data-visible={isOpen}>
				<Info>
					<Flex col gap='md'>
						<h2>
							Enviamos uma mensagem de confirmação para seu email no qual sua
							conta do discord está vinculada, é preciso confirmar para seguir
							autenticado.
						</h2>
						<Button onClick={closeInfo} bg='zinc500'>
							Entendi
						</Button>
					</Flex>
				</Info>
			</Modal>
		</Dialog>
	)
}
