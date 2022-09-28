import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import { FormHTMLAttributes, ReactElement } from 'react'
import { SubmitHandler, UseFormProps } from 'react-hook-form'
import * as S from './Form.styles'

export interface FormProps<T extends FieldValues>
	extends Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
	form: UseFormProps<T>
	children: ReactElement | ReactElement[]
	onSubmit: SubmitHandler<T>
}

export function Form<T extends FieldValues>({
	children,
	onSubmit,
	form,
	...rest
}: FormProps<T>) {
	const methods = useForm<T>(form)

	return (
		<FormProvider {...methods}>
			<S.Form onSubmit={methods.handleSubmit(onSubmit)} {...rest}>
				{children}
			</S.Form>
		</FormProvider>
	)
}
