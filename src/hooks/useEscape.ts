import { useEffect } from 'react'

/**
 * @description useEscape é uma função para fechar uma caixa de dialogo (modal, filtro, etc) com a tecla ESC
 * @param {VoidFunction} handler recebe um função de toggle (abrir e fechar), se aberto e ao apertar esc o modal é fechado
 * ```ts
 *useEscape(handleFunction)
 * ```
 */
function useEscape(handler: VoidFunction): void {
	useEffect(() => {
		function keyListener(e: KeyboardEvent) {
			if (e.key === 'Escape') {
				handler()
			}
		}

		document.addEventListener('keydown', keyListener)

		return () => document.removeEventListener('keydown', keyListener)
	})
}

export default useEscape
