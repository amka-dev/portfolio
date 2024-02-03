import { motion } from 'framer-motion'

const textAnimation = {
	hidden: {
		opacity: 0
	},
	visible: custom => ({
		opacity: 1,

		transition: { delay: custom * 0.3 }
	})
}

const Header = () => {
	return (
		<div className='content'>
			<div className='header'>
				<motion.ul
					initial='hidden'
					whileInView='visible'
					viewport={{ amount: 0.2, once: true }}
					className='header__navbar'
				>
					<a href='#whoi'>
						<motion.li variants={textAnimation} custom={1}>
							Обо мне
						</motion.li>
					</a>
					<a href='#skills'>
						<motion.li variants={textAnimation} custom={2}>
							Навыки
						</motion.li>
					</a>
					<a href='#works'>
						<motion.li variants={textAnimation} custom={3}>
							Работы
						</motion.li>
					</a>
					<a href='#contact'>
						<motion.li variants={textAnimation} custom={4}>
							Контакты
						</motion.li>
					</a>
				</motion.ul>
			</div>
		</div>
	)
}

export default Header
