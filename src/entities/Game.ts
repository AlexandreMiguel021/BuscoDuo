export class Game {
	public id!: string
	public title!: string
	public bannerUrl!: string
	public slug!: string
	public _count!: {
		ads: number
	}

	constructor(props: Game) {
		Object.assign(this, props)
	}
}
