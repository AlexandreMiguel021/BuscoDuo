import { useEffect, useState } from 'react'
import theme from 'styles/theme'
import * as S from './Loading.styles'

export function Loading() {
	const [load, setLoad] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setLoad(false)
		}, 2000)
	}, [load])

	return (
		<S.LoadScreen data-load={load}>
			<S.HashLoader color={theme.colors.primary} size={100} />
		</S.LoadScreen>
	)
}
