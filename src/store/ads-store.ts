import { Ad } from 'entities/Ad'
import { adsRequest } from 'services/requests/ads-requests'
import create from 'zustand'

interface UseAdsStore {
	ads: Ad[]
	fetchAds(gameSlug: string): void
}

const useAdsStore = create<UseAdsStore>((set) => ({
	ads: [],

	fetchAds: async function (gameSlug: string) {
		const ads = await adsRequest.getAdsByGameSlug(gameSlug)
		set({ ads: ads })
	}
}))

export default useAdsStore
