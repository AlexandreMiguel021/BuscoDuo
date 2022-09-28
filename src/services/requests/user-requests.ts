import { supabase } from 'db/supabaseClient'
import { User } from '../../entities/User'
import { toast } from 'react-toastify'

interface IUserRequest {
	getUser(): Promise<User | undefined>
	getSession(): Promise<unknown>
	signIn(): Promise<void>
	signOut(): Promise<void>
}

class UserRequest implements IUserRequest {
	public async getUser() {
		try {
			const { data } = await supabase.auth.getUser()
			return new User({
				avatar: data.user?.user_metadata.avatar_url,
				discordName: data.user?.user_metadata.name,
				email: data.user?.user_metadata.email,
				fullName: data.user?.user_metadata.full_name
			})
		} catch (error) {
			toast.error(error.message)
		}
	}

	public async getSession() {
		try {
			const { data } = await supabase.auth.getSession()
			return data.session
		} catch (error) {
			toast.error(error.message)
		}
	}

	public async signIn(): Promise<void> {
		try {
			await supabase.auth.signInWithOAuth({
				provider: 'discord'
			})
		} catch (error) {
			toast.error('Não foi possível reealizar o login.')
		}
	}

	public async signOut(): Promise<void> {
		try {
			await supabase.auth.signOut()
		} catch (error) {
			toast.error('Não foi possível sair.')
		}
	}
}

export const userRequest = new UserRequest()
