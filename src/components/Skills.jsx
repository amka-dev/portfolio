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

const icon = {
	hidden: {
		opacity: 0,
		x: 150
	},
	visible: custom => ({
		opacity: 1,
		x: 0,

		transition: { type: 'tween', delay: custom * 0.3 }
	})
}

const Skills = () => {
	return (
		<motion.div initial='hidden' whileInView='visible' viewport={{ amount: 0.2, once: true }}>
			<motion.div initial='hidden' whileInView='visible' viewport={{ amount: 0.2, once: true }} className='info'>
				<motion.h1 variants={title} custom={1}>
					Навыки
				</motion.h1>
				<div className='skills'>
					<motion.a variants={icon} custom={2}>
						<img
							src='https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png'
							alt='react'
						></img>
						<p>React</p>
					</motion.a>

					<motion.a variants={icon} custom={3}>
						<img
							src='https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-redux-an-open-source-javascript-library-for-managing-application-state-logo-color-tal-revivo.png'
							alt='redux'
						></img>
						<p>Redux</p>
					</motion.a>
					<motion.a variants={icon} custom={4}>
						<img src='https://img.icons8.com/color/48/javascript--v1.png' alt='javascript--v1'></img>
						<p>JS</p>
					</motion.a>
					<motion.a variants={icon} custom={5}>
						<img src='https://img.icons8.com/color/48/typescript.png' alt='typescript'></img>
						<p>TS</p>
					</motion.a>
					<motion.a variants={icon} custom={6}>
						<img src='https://img.icons8.com/color/48/html-5--v1.png' alt='html-5--v1'></img>
						<p>HTML</p>
					</motion.a>
					<motion.a variants={icon} custom={7}>
						<img src='https://img.icons8.com/color/48/css3.png' alt='css3'></img>
						<p>CSS</p>
					</motion.a>
					<motion.a variants={icon} custom={8}>
						<img src='https://img.icons8.com/color/96/sass.png' alt='sass'></img>
						<p>SASS</p>
					</motion.a>
				</div>
			</motion.div>
		</motion.div>
	)
}

export default Skills
