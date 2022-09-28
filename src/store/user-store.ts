import { Session } from '@supabase/supabase-js'
import { User } from 'entities/User'
import { userRequest } from 'services/requests/user-requests'
import create from 'zustand'

interface UseUserStore {
	user: User | null
	isOpenSigInModal: boolean
	session: Session | undefined | null
	signIn(): Promise<void>
	signOut(): Promise<void>
	getUser(): void
	getSession(): void
	openSigInModal(): void
	closeSigInModal(): void
}

const useUserStore = create<UseUserStore>((set) => ({
	user: null,
	isOpenSigInModal: false,
	session: null,

	signIn: async function () {
		await userRequest.signIn()
	},

	signOut: async function () {
		await userRequest.signOut()
		set({ user: null })
		set({ session: null })
	},

	getUser: async function () {
		const user = await userRequest.getUser()
		set({ user })
	},

	getSession: async function () {
		const session = await userRequest.getSession()
		set({ session })
	},

	openSigInModal: function () {
		set({ isOpenSigInModal: true })
	},

	closeSigInModal: function () {
		set({ isOpenSigInModal: false })
	}
}))

export default useUserStore
