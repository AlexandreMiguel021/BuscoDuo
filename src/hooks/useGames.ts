import { Game } from 'entities/Game'
import { api } from 'services/config/axios-config'
import useSWR from 'swr'

const fetcher = (url: string) => api.get(url).then((res) => res.data)

export default function useGames() {
	const { data: games, mutate } = useSWR<Game[]>('/games', fetcher)

	return { games, mutate }
}
