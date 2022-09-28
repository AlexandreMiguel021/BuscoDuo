import { SelectOption } from 'components/Select'
import { Game } from 'entities/Game'
import { gamesRequest } from 'services/requests/games-request'
import create from 'zustand'

interface UseGamesStore {
	games: Game[]
	gameOptions: SelectOption[]
	fetchGames(): void
}

const useGamesStore = create<UseGamesStore>((set) => ({
	games: [],
	gameOptions: [],

	fetchGames: async function () {
		const games = await gamesRequest.getGameListWithAds()
		const gameOptions = games.map((game) => ({
			id: game.id,
			title: game.title
		}))

		set({ gameOptions })
		set({ games: games })
	}
}))

export default useGamesStore
