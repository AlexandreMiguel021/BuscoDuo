import { Navbar } from 'components/Navbar'
import { Fragment, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface LayoutProps {
	children: ReactNode
}

const animation = {
	hidden: { opacity: 0, x: -200, y: 0 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: -100 }
}

export function Layout({ children }: LayoutProps) {
	return (
		<Fragment>
			<Navbar />
			<motion.main
				variants={animation}
				initial='hidden'
				animate='enter'
				exit='exit'
				transition={{ type: 'linear' }}
			>
				{children}
			</motion.main>
		</Fragment>
	)
}
