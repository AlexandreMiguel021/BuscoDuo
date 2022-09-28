export class Ad {
	public id!: string
	public name!: string
	public weekDays!: number[]
	public useVoiceChannel!: boolean
	public yearsPlaying!: number
	public hourStart!: number
	public hourEnd!: number

	constructor(props: Ad) {
		Object.assign(this, props)
	}
}
