import { motion } from 'framer-motion'
import arrow from '../assets/images/arrow.png'

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

		transition: { type: 'tween', delay: custom * 0.2 }
	})
}

const arrowAnim = {
	hidden: {
		y: 500
	},
	visible: custom => ({
		y: 0,

		transition: { duration: 2, type: 'tween', delay: custom * 0.2 }
	})
}

const Contacts = () => {
	return (
		<div>
			<motion.div initial='hidden' whileInView='visible' viewport={{ amount: 0.2, once: true }} className='info'>
				<motion.img variants={arrowAnim} custom={8} src={arrow} className='arrow' />
				<motion.h1 variants={title} custom={1}>
					Контакты
				</motion.h1>
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ amount: 0.2, once: true }}
					className='contacts'
				>
					<motion.a href='https://github.com/amka-dev' variants={icon} custom={2}>
						<img src='https://img.icons8.com/sf-black-filled/64/ffffff/github.png' alt='github'></img>
					</motion.a>

					<motion.a href='https://www.instagram.com/amka_dev/' variants={icon} custom={3}>
						<img src='https://img.icons8.com/fluency/48/instagram-new.png' alt='instagram'></img>
					</motion.a>

					<motion.a href='https://t.me/amka_dev' variants={icon} custom={4}>
						<img src='https://img.icons8.com/fluency/96/telegram-app.png' alt='telegram'></img>
					</motion.a>
					<motion.a href='https://wa.me/+905510201707' variants={icon} custom={5}>
						<img src='https://img.icons8.com/color/96/whatsapp--v1.png' alt='whatsapp'></img>
					</motion.a>
					<motion.a href='mailto:nasifullinamir064@gmail.com' variants={icon} custom={6}>
						<img src='https://img.icons8.com/color/96/gmail-new.png' alt='gmail'></img>
					</motion.a>
					<motion.a
						href='https://stackoverflow.com/users/23284541/amir-nasifullin'
						variants={icon}
						custom={7}
					>
						<img src='https://img.icons8.com/color/96/stackoverflow.png' alt='css3'></img>
					</motion.a>
				</motion.div>
			</motion.div>
		</div>
	)
}

export default Contacts
