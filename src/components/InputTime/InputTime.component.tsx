import { Flex } from 'components/Flex'
import { Input } from 'components/Input/Input.styles'
import { Label } from 'components/Label'
import { FieldError } from 'components/TextField/TextField.styles'
import { InputHTMLAttributes, ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'
import * as S from './InputTime.styles'

interface TimeInputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string
}

interface TimeProps {
	label: string
	children: ReactNode
	id: string
}

export function Time({ label, children, id }: TimeProps) {
	return (
		<S.InputTimeContainer>
			<Label htmlFor={id}>{label}</Label>
			<Flex gap='xxs'>{children}</Flex>
		</S.InputTimeContainer>
	)
}

Time.Input = function TimeInput({ name, ...props }: TimeInputProps) {
	const { register, formState } = useFormContext()
	const error: any = formState.errors[name]?.message

	return (
		<Flex col itemsCenter>
			<Input type='time' {...register(name)} id={name} {...props} />
			<FieldError>{error}</FieldError>
		</Flex>
	)
}
