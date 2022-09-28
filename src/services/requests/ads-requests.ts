import { api } from 'services/config/axios-config'
import { toast } from 'react-toastify'
import { Ad } from 'entities/Ad'
import AdsDTO from 'types/AdsDTO'
import { Discord } from 'types/Api'

interface IAdsRequest {
	getAdsByGameSlug(gameSlug: string): Promise<Ad[]>
	getDiscordByAdId(adId: string): Promise<Discord>
	createAd(data: AdsDTO, gameId: string): Promise<void>
}

class AdsRequest implements IAdsRequest {
	public async getAdsByGameSlug(gameSlug: string) {
		const { data } = await api.get<Ad[]>(`/games/${gameSlug}/ads`)

		return data
	}

	public async getDiscordByAdId(adsId: string) {
		const { data } = await api.get<Discord>(`/ads/${adsId}/discord`)

		return data
	}

	public async createAd(data: AdsDTO, gameId: string) {
		try {
			await api.post(`/ads/${gameId}`, {
				name: data.name,
				discord: data.discord,
				hourEnd: data.hourEnd,
				hourStart: data.hourStart,
				yearsPlaying: Number(data.yearsPlaying),
				weekDays: data.weekDays.map(Number),
				useVoiceChannel: data.useVoiceChannel
			})

			toast.success('Sua publicação foi criada com sucesso. 🎉 🎮')
		} catch (error) {
			toast.error(error.message)
		}
	}
}

export const adsRequest = new AdsRequest()
