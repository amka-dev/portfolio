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

const text = {
	hidden: {
		opacity: 0,
		x: -150
	},
	visible: custom => ({
		opacity: 1,
		x: 0,

		transition: { type: 'tween', delay: custom * 0.3 }
	})
}

const WhoI = () => {
	return (
		<motion.div initial='hidden' whileInView='visible' viewport={{ once: true }} className='info'>
			<motion.h1 variants={title} custom={1}>
				Кто я?
			</motion.h1>
			<motion.p variants={text} custom={3}>
				Мне <span>17 лет</span>, я начинающий <span>Web</span> разработчик <br />
				Местонахождение: Бишкек, Кыргызстан.
				<br />
				На данный момент я владею <span>Frontend</span> навыками,
				<br /> В будущем обязательно освою <span>Backend</span>.
				<br />
				<span className='gray-text'> На данный момент ищу работу, стажировку.</span>
			</motion.p>
		</motion.div>
	)
}

export default WhoI
