import { array, object, string } from 'yup'

const postAdSchema = object().shape({
	game: string().required('Parece que vocẽ não selecionou um game!'),
	name: string().required('O seu nome ou nickname precisa ser informado.'),
	yearsPlaying: string()
		.required('Você precisa informar a quanto tempo você joga.')
		.min(0, 'Tempo de jogo de não pode ser menor do que zero!')
		.test(
			'maxYears',
			'Como vocễ joga a tanto tempo assim? por favor, insira um valor válido.',
			(value) => Number(value) < 25
		),
	weekDays: array()
		.required('Adicione pelo menos 1 dia da semana.')
		.min(1, 'Adicione pelo menos 1 dia da semana.'),
	hourStart: string().required('Campo obrigatório'),
	hourEnd: string().required('Campo obrigatório')
})

export default postAdSchema
