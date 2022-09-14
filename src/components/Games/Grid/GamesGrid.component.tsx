import { ReactNode } from 'react'
import * as S from './GamesGrid.styles'

type GamesGridProps = {
	children: ReactNode
}

const GamesGrid = ({ children }: GamesGridProps) => {
	return <S.GamesGrid>{children}</S.GamesGrid>
}

export { GamesGrid }
