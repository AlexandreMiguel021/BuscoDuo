import { Label } from 'components/Label'
import { FieldError } from 'components/TextField/TextField.styles'
import { useFormContext } from 'react-hook-form'

import * as S from './ToggleGroup.styles'

interface Option {
	title: string
	id: string
}

interface ToggleGroupProps {
	options: Option[]
	name: string
	label: string
}

export function ToggleGroup({ options, name, label }: ToggleGroupProps) {
	const { formState, setValue, clearErrors } = useFormContext()
	const error: any = formState.errors[name]?.message

	function handleValueChange(value: string[]) {
		setValue(name, value)
		clearErrors(name)
	}

	return (
		<S.ToggleGroupContainer>
			<Label>{label}</Label>
			<S.ToggleGroup type='multiple' onValueChange={handleValueChange}>
				{options.map((option) => (
					<S.ToggleGroupItem
						key={option.id}
						value={option.id}
						title={option.title}
					>
						{option.title.slice(0, 1)}
					</S.ToggleGroupItem>
				))}
			</S.ToggleGroup>
			<FieldError>{error}</FieldError>
		</S.ToggleGroupContainer>
	)
}
