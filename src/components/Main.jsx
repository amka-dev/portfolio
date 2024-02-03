import Line from '../components/Line'
import Header from '../components/Header'
import LineActive from '../components/LineActive'

import { motion } from 'framer-motion'

const Main = () => {
	return (
		<>
			<Header />
			<LineActive />
			<Line />

			<motion.div className='info'>
				<motion.h1 animate={{ y: [-200, 0], opacity: [0, 1] }} transition={{ duration: 0.7 }}>
					Добро пожаловать
				</motion.h1>
				<motion.p animate={{ opacity: [0, 1] }} transition={{ duration: 0.5, delay: 1 }} className='blue-text '>
					Амир Насифуллин
				</motion.p>
				<motion.p animate={{ opacity: [0, 1] }} transition={{ duration: 0.5, delay: 1 }} className='gray-text '>
					Frontend разработчик
				</motion.p>
			</motion.div>
		</>
	)
}

export default Main
