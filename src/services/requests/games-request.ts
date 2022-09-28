import { Game } from 'entities/Game'
import { api } from 'services/config/axios-config'

interface IGamesRequest {
	getGameListWithAds(): Promise<Game[]>
}

class GamesRequest implements IGamesRequest {
	public async getGameListWithAds() {
		const { data } = await api.get<Game[]>(`/games`)

		return data
	}
}

export const gamesRequest = new GamesRequest()
