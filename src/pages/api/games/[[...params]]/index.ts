import { Catch, createHandler, Get, HttpCode, Param } from 'next-api-decorators'
import exceptionHandler from 'utils/exception-handler'
import prisma from 'db/prisma'
import { convertMinutesToHourString } from 'utils/convert-minutes-to-hour-string'

class Games {
	@Get()
	@HttpCode(200)
	@Catch(exceptionHandler)
	public async getGamesWithAds() {
		return await prisma.game.findMany({
			include: {
				_count: {
					select: {
						ads: true
					}
				}
			}
		})
	}

	@Get('/:slug/ads')
	@HttpCode(200)
	@Catch(exceptionHandler)
	public async getAdsByGameSlug(@Param('slug') slug: string) {
		const ads = await prisma.ad.findMany({
			select: {
				id: true,
				name: true,
				weekDays: true,
				useVoiceChannel: true,
				yearsPlaying: true,
				hourStart: true,
				hourEnd: true
			},
			where: {
				game: {
					slug: slug
				}
			},
			orderBy: {
				createAt: 'desc'
			}
		})

		return ads.map((ad) => ({
			...ad,
			hourStart: convertMinutesToHourString(ad.hourStart),
			hourEnd: convertMinutesToHourString(ad.hourEnd)
		}))
	}
}

export default createHandler(Games)
