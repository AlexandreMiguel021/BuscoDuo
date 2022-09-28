import { Transition as HeadlessuiTransition } from '@headlessui/react'

export default function Transition({ show, children }: any) {
	return (
		<HeadlessuiTransition
			show={show}
			enter='enter'
			enterFrom='enter-from'
			enterTo='enter-to'
			leave='leave'
			leaveFrom='leave-from'
			leaveTo='leave-to'
		>
			{children}
		</HeadlessuiTransition>
	)
}
