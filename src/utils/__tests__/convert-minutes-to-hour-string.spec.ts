import { convertMinutesToHourString } from 'utils/convert-minutes-to-hour-string'
describe('Convert minutes to hour string', () => {
	it('should return minutes to hours in string format', () => {
		const minutes = 150
		const hours = convertMinutesToHourString(minutes)

		expect(hours).toBe(`02:30`)
	})
})

export {}
