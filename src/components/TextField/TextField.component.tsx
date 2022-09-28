import { Input } from 'components/Input'
import { Label } from 'components/Label'
import { useFormContext } from 'react-hook-form'
import * as S from './TextField.styles'
import { InputHTMLAttributes } from 'react'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string
	label: string
}

export function TextField({ label, name, ...props }: TextFieldProps) {
	const { register, formState } = useFormContext()
	const error: any = formState.errors[name]?.message

	return (
		<S.TextFieldContainer>
			<Label htmlFor={name}>{label}</Label>
			<Input
				data-error={!!error}
				autoComplete='off'
				id={name}
				{...register(name)}
				{...props}
			/>
			<S.FieldError>{error}</S.FieldError>
		</S.TextFieldContainer>
	)
}
