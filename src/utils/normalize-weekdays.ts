const week = [
	'Domingo',
	'Segunda',
	'Terça',
	'Quarta',
	'Quinta',
	'Sexta',
	'Sábado'
]

export default function normalizeWeekDays(weekDays: number[]) {
	if (weekDays.length === 7) {
		return 'Todos os dias'
	}

	return weekDays.map((day) => week[day]).join(' / ')
}
