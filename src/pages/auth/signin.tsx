import { Button } from 'components/Button'
import { supabase } from 'db/supabaseClient'
import { NextPage } from 'next'
import { useEffect } from 'react'

const SingIn: NextPage = () => {
	async function signInWithDiscord() {
		await supabase.auth.signInWithOAuth({
			provider: 'discord'
		})
	}
	useEffect(() => {
		async function get() {
			const { data } = await supabase.auth.getUser()
			console.log(data)
		}
		get()
	}, [])
	return <Button onClick={signInWithDiscord}>login</Button>
}

export default SingIn
