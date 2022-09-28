import {
	Body,
	Catch,
	createHandler,
	Get,
	HttpCode,
	NotFoundException,
	Param,
	Post
} from 'next-api-decorators'
import AdsDTO from 'types/AdsDTO'
import { convertHourStringToMinutes } from 'utils/convert-hour-string-to-minutes'
import exceptionHandler from 'utils/exception-handler'

class Ads {
	@Get('/:id/discord')
	@HttpCode(200)
	@Catch(exceptionHandler)
	public async getDiscordByAdsId(@Param('id') id: string) {
		const discord = await prisma.ad.findUnique({
			select: {
				discord: true
			},
			where: {
				id: id
			}
		})

		if (!discord) {
			throw new NotFoundException('discord não encontrado.')
		}

		return discord
	}

	@Post('/:gameId')
	@HttpCode(201)
	@Catch(exceptionHandler)
	public async createAd(@Param('gameId') gameId: string, @Body() body: AdsDTO) {
		const { hourEnd, hourStart } = body

		return await prisma.ad.create({
			data: {
				...body,
				gameId,
				hourStart: convertHourStringToMinutes(hourStart),
				hourEnd: convertHourStringToMinutes(hourEnd)
			}
		})
	}
}

export default createHandler(Ads)
