import todoapp from '../assets/images/todoapp.jpg'
import bikes from '../assets/images/bikes.jpg'
import coming from '../assets/images/coming.jpg'

import { motion } from 'framer-motion'

const title = {
	hidden: {
		opacity: 0,
		y: -150
	},
	visible: custom => ({
		opacity: 1,
		y: 0,
		transition: { type: 'tween', delay: custom * 0.3 }
	})
}

const work = {
	hidden: {
		opacity: 0,
		y: 150
	},
	visible: custom => ({
		opacity: 1,
		y: 0,

		transition: { type: 'tween', delay: custom * 0.3 }
	})
}

const Works = () => {
	return (
		<motion.div initial='hidden' whileInView='visible' viewport={{ amount: 0.2, once: true }}>
			<motion.div initial='hidden' whileInView='visible' viewport={{ amount: 0.2, once: true }} className='info'>
				<motion.h1 variants={title} custom={1}>
					Мои работы
				</motion.h1>
				<div className='works'>
					<a href='https://amka-dev.github.io/React-Bikes/'>
						<motion.div variants={work} custom={2} className='work'>
							<img src={bikes} alt='bikes' />
							<p>React-bikes</p>
						</motion.div>
					</a>
					<a href='https://amka-dev.github.io/todoApp/'>
						<motion.div variants={work} custom={3} className='work'>
							<img src={todoapp} alt='todoapp' />
							<p>Todo app</p>
						</motion.div>
					</a>
					<motion.div variants={work} custom={4} className='work'>
						<img src={coming} alt='todoapp' />
						<p>В будущем...</p>
					</motion.div>
				</div>
			</motion.div>
		</motion.div>
	)
}

export default Works
