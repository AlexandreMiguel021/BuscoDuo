import { useCallback, useState } from 'react'
import { GameController, MagnifyingGlassPlus } from 'phosphor-react'
import { Dialog } from '@headlessui/react'
import { yupResolver } from '@hookform/resolvers/yup'

import { Button } from 'components/Button'
import { TextField } from 'components/TextField'
import { Flex } from 'components/Flex'
import { Form } from 'components/Form'
import { Select } from 'components/Select'
import { ToggleGroup } from 'components/ToggleGroup/ToggleGroup.component'
import { Checkbox } from 'components/Checkbox'
import { Time } from 'components/InputTime'
import { Overlay } from 'components/Overlay'

import { adsRequest } from 'services/requests/ads-requests'

import AdsDTO from 'types/AdsDTO'
import weekDays from 'data/week-days.json'
import useUserStore from 'store/user-store'
import useSession from 'hooks/useSession'
import * as S from './PostAd.styles'
import useGames from 'hooks/useGames'

import postAdSchema from 'validations/post-ad'
import { Footer } from 'components/Footer'

interface AdFormValues extends AdsDTO {
	game: string
}

export function PostAd() {
	const [isOpen, setIsOpen] = useState(false)
	const { session } = useSession()
	const { games, mutate } = useGames()
	const user = useUserStore((state) => state.user)
	const openSignInModal = useUserStore((state) => state.openSigInModal)

	const gameOptions = games?.map((game) => ({
		id: game.id,
		title: game.title
	}))

	const onSubmit = (data: AdFormValues) => {
		data.discord = user?.discordName!
		adsRequest.createAd(data, data.game)
		mutate()
		setIsOpen(false)
	}

	const handleClickPostAd = useCallback(async () => {
		if (!session) {
			return openSignInModal()
		}

		setIsOpen(true)
	}, [openSignInModal, session])

	return (
		<S.PostAd>
			<S.AdInfo>
				<strong>Não encontrou seu duo?</strong>
				<span>Publique um anúncio para encontrar novos players!</span>
			</S.AdInfo>
			<Dialog open={isOpen} onClose={() => setIsOpen(false)} static>
				<Overlay data-visible={isOpen} />
				<S.Modal data-visible={isOpen}>
					<h2>Publique um anúncio</h2>
					{isOpen && (
						<Form
							onSubmit={onSubmit}
							form={{ resolver: yupResolver(postAdSchema) }}
						>
							<Select
								name='game'
								placeholder='Selecione um game'
								label='Qual o game?'
								options={gameOptions!}
							/>
							<TextField
								name='name'
								label='Seu nome (ou nickname)'
								placeholder='Como te chamam dentro do game?'
							/>
							<TextField
								name='yearsPlaying'
								label='Joga há quantos anos?'
								type='number'
								min={0}
								placeholder='Tudo bem ser ZERO ^^'
							/>

							<Flex gap='xs' flexWrap>
								<ToggleGroup
									options={weekDays}
									name='weekDays'
									label='Quando costuma jogar?'
								/>

								<Time id='hourStart' label='Qual horário do dia?'>
									<Time.Input name='hourStart' />
									<Time.Input name='hourEnd' />
								</Time>
							</Flex>

							<Checkbox
								defaultValue={false}
								label='Costumo me conectar ao chat de voz'
								name='useVoiceChannel'
							/>

							<Flex justifyEnd gap='xs'>
								<Button
									type='button'
									bg='zinc500'
									onClick={() => setIsOpen(false)}
								>
									Cancelar
								</Button>
								<Button type='submit' grow1>
									<GameController size={24} /> Publicar
								</Button>
							</Flex>
						</Form>
					)}
				</S.Modal>
			</Dialog>
			<Button onClick={handleClickPostAd}>
				<MagnifyingGlassPlus size={24} /> Publicar anúncio
			</Button>
			<Footer />
		</S.PostAd>
	)
}
