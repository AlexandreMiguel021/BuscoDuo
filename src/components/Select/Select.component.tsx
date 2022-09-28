import { Listbox } from '@headlessui/react'
import { Label } from 'components/Label'
import { FieldError } from 'components/TextField/TextField.styles'
import Transition from 'components/Transition'
import { CaretDown } from 'phosphor-react'
import { Fragment } from 'react'
import { useFormContext } from 'react-hook-form'
import * as S from './Select.styles'

export interface SelectOption {
	title: string
	id: string
}

interface Value {
	value: {
		title: string
	}
}

interface SelectProps {
	label: string
	name: string
	placeholder?: string
	options: SelectOption[]
}

export function Select({ options, name, label, placeholder }: SelectProps) {
	const { formState, setValue, clearErrors } = useFormContext()
	const error: any = formState.errors[name]?.message

	function handleChange(value: SelectOption) {
		setValue(name, value.id)
		clearErrors(name)
	}

	return (
		<S.SelectContainer>
			<Listbox defaultValue={{} as SelectOption} onChange={handleChange}>
				{({ open }) => (
					<Fragment>
						<Label>{label}</Label>
						<S.SelectButton>
							{({ value }: Value) => (
								<div>
									{value.title || <span>{placeholder}</span>}
									<CaretDown size={24} />
								</div>
							)}
						</S.SelectButton>
						<Transition show={open}>
							<S.SelectPanel>
								{options?.map((option) => (
									<S.SelectOption key={option.id} value={option}>
										{option.title}
									</S.SelectOption>
								))}
							</S.SelectPanel>
						</Transition>
						<FieldError>{error}</FieldError>
					</Fragment>
				)}
			</Listbox>
		</S.SelectContainer>
	)
}
