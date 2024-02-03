import { motion } from 'framer-motion'

const LineActive = () => {
	return (
		<motion.div animate={{ y: [600, 0], opacity: [0, 1] }} transition={{ duration: 0.5, delay: 0.3 }}>
			<div className='line-active'></div>
			<div className='circle'></div>
		</motion.div>
	)
}

export default LineActive
