import { Label } from 'components/Label'
import { Check } from 'phosphor-react'
import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import * as S from './Checkbox.styles'

interface CheckboxProps {
	label: string
	name: string
	defaultValue: boolean
}

export function Checkbox({ label, name, defaultValue }: CheckboxProps) {
	const { setValue } = useFormContext()

	useEffect(() => {
		setValue(name, false)
	}, [defaultValue, name, setValue])

	return (
		<S.checkboxContainer>
			<Label>{label}</Label>
			<S.Checkbox onCheckedChange={(value) => setValue(name, value)}>
				<S.CheckboxIndacator>
					<Check size={24} />
				</S.CheckboxIndacator>
			</S.Checkbox>
		</S.checkboxContainer>
	)
}
