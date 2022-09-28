export class User {
	public avatar!: string
	public email!: string
	public fullName!: string
	public discordName!: string

	constructor(props: User) {
		Object.assign(this, props)
	}
}
