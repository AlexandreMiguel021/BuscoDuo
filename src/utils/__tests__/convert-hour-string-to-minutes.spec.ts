import { convertHourStringToMinutes } from 'utils/convert-hour-string-to-minutes'

describe('Convert hour string to Minutes', () => {
	it('should return hours in minutes', () => {
		const hours = '02:30'
		const minutes = convertHourStringToMinutes(hours)

		expect(minutes).toBe(150)
	})
})

export {}
