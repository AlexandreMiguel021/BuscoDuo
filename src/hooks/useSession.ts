import { useEffect } from 'react'
import useUserStore from 'store/user-store'

export default function useSession() {
	const getSession = useUserStore((state) => state.getSession)
	const session = useUserStore((state) => state.session)

	useEffect(() => {
		getSession()
	}, [getSession])

	return { session }
}
