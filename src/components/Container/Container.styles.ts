import { Flex } from 'components/Flex'
import styled, { css } from 'styled-components'

export const Container = styled(Flex)(
	({ theme }) => css`
		width: 100%;
		max-width: ${theme.grid.container};
		margin: 0 auto;
	`
)
