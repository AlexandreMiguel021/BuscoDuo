import styled, { css } from 'styled-components'
import { FlexProps } from './Flex.types'

const Flex = styled.div<FlexProps>(
	({ theme, ...props }) => css`
		display: ${props.flex && 'flex'};

		justify-content: ${props.justifyCenter && 'center'};
		justify-content: ${props.justifyBetween && 'space-beetween'};
		justify-content: ${props.justifyEvenly && 'space-evenly'};
		justify-content: ${props.justifyAround && 'space-around'};

		align-items: ${props.itemsCenter && 'center'};
		gap: ${theme.spacings[props.gap!]};
		flex-direction: ${props.column && 'column'};

		padding: ${props.pd && `${theme.spacings[props.pd!]}`};
		padding: ${props.py && `${theme.spacings[props.py!]} 0`};
		padding: ${props.px && `0 ${theme.spacings[props.px!]}`};

		margin: ${props.mg && `${theme.spacings[props.mg!]}`};
		margin: ${props.my && `${theme.spacings[props.my!]} 0`};
		margin: ${props.mx && `0 ${theme.spacings[props.mx!]}`};
	`
)

export { Flex }
