import { useCallback, useMemo, useRef, useState } from 'react'
import {
	CalendarCheck,
	Clock,
	Copy,
	DiscordLogo,
	GameController,
	Headset,
	Hourglass
} from 'phosphor-react'

import { Button } from 'components/Button'
import { Flex } from 'components/Flex'

import { Ad } from 'entities/Ad'

import normalizeWeekDays from 'utils/normalize-weekdays'
import * as S from './Card.styles'
import useSession from 'hooks/useSession'
import { toast } from 'react-toastify'
import { adsRequest } from 'services/requests/ads-requests'
import useEscape from 'hooks/useEscape'
import { useOnClickOutside } from 'usehooks-ts'

export function AdCard(ad: Ad) {
	const [isVisible, setIsVisible] = useState(false)
	const [currentUserDiscord, setCurrentDiscord] = useState('')
	const discordPopoverRef = useRef(null)
	const availableVoice = ad.useVoiceChannel ? 'Sim' : 'Não'

	const { session } = useSession()
	useEscape(hideDiscord)
	useOnClickOutside(discordPopoverRef, hideDiscord)

	const days = useMemo(() => {
		return normalizeWeekDays(ad.weekDays)
	}, [ad.weekDays])

	const getUserDiscord = useCallback(async () => {
		const { discord } = await adsRequest.getDiscordByAdId(ad.id)
		setCurrentDiscord(discord)
	}, [ad.id])

	const showDiscord = useCallback(() => {
		if (!session) {
			return toast.info(
				'É preciso estar conectado com a sua conta para visualizar o discord de outros jogadores.'
			)
		}

		!currentUserDiscord && getUserDiscord()
		setIsVisible(true)
	}, [currentUserDiscord, getUserDiscord, session])

	function hideDiscord() {
		setIsVisible(false)
	}

	function handleClipboard() {
		toast.success(
			'Discord copiado! agora é só conectar com o jogador e se divertir! 🎮🎊',
			{
				icon: <Copy size={32} />
			}
		)
		navigator.clipboard.writeText(currentUserDiscord)
	}

	return (
		<S.AdCard>
			<S.DiscordName
				ref={discordPopoverRef}
				data-visible={isVisible}
				aria-hidden={!isVisible}
			>
				<button onClick={handleClipboard} title='copiar nome de usuario'>
					{currentUserDiscord} <Copy size={24} />
				</button>
				<S.CaretDown size={24} weight='fill' />
			</S.DiscordName>
			<Flex col gap='xs'>
				<S.CardHead>
					<Flex itemsCenter gap='xxs'>
						<GameController weight='fill' size={42} />
						<Flex col>
							<h2>{ad.name}</h2>
						</Flex>
					</Flex>
				</S.CardHead>

				<Flex itemsCenter gap='xxs' px='xs'>
					<Flex>
						<Hourglass size={32} />
					</Flex>
					<Flex col gap='2xs'>
						<h3>Tempo de jogo:</h3>
						<S.Years>{ad.yearsPlaying} ano(s)</S.Years>
					</Flex>
				</Flex>

				<S.Spacer />

				<Flex itemsCenter gap='xxs' px='xs'>
					<Flex itemsCenter>
						<CalendarCheck size={32} />
					</Flex>
					<Flex col gap='2xs'>
						<h3>Disponível para jogar:</h3>
						<Flex gap='2xs' flexWrap>
							<S.Day>{days}</S.Day>
						</Flex>
					</Flex>
				</Flex>

				<S.Spacer />

				<Flex itemsCenter gap='xxs' px='xs'>
					<Flex itemsCenter>
						<Clock size={32} />
					</Flex>
					<Flex col gap='2xs'>
						<h3>Horário:</h3>
						<Flex>
							<S.Time>Das: {ad.hourStart}</S.Time>
							<S.Time>até as: {ad.hourEnd}</S.Time>
						</Flex>
					</Flex>
				</Flex>

				<S.Spacer />

				<Flex>
					<Flex itemsCenter gap='xxs' px='xs'>
						<Headset size={32} />
						<Flex col gap='2xs'>
							<h3>Disponível para voice:</h3>
							<S.AvailableVoice>{availableVoice}</S.AvailableVoice>
						</Flex>
					</Flex>
				</Flex>
			</Flex>

			<Flex px='xs' py='xs' justifyCenter>
				<Button fullWidth onClick={showDiscord}>
					<DiscordLogo color='white' size={32} /> Ver Discord
				</Button>
			</Flex>
		</S.AdCard>
	)
}
