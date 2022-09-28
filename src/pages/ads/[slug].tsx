import { AdsList } from 'components/Ads/List'
import { BackRouter } from 'components/BackRouter'
import { Layout } from 'components/layout'
import { Ad } from 'entities/Ad'
import { GetServerSideProps } from 'next'
import { adsRequest } from 'services/requests/ads-requests'

interface AdsProps {
	ads: Ad[]
}

export default function Ads({ ads }: AdsProps) {
	return (
		<Layout>
			<BackRouter />
			<AdsList ads={ads} />
		</Layout>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const { slug } = query
	const ads = await adsRequest.getAdsByGameSlug(String(slug))

	return {
		props: {
			ads
		}
	}
}
