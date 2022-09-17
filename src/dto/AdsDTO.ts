class AdsDTO {
	public name!: string
	public yearsPlaying!: number
	public discord!: string
	public weekDays!: number[]
	public hourStart!: string
	public hourEnd!: string
	public useVoiceChannel!: boolean

	constructor(args: AdsDTO) {
		Object.assign(this, args)
	}
}

export default AdsDTO
