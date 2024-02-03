import '../App.css'
import '../scss/app.scss'
import { useAnimation, motion } from 'framer-motion'

import LineFull from '../components/LineFull'

import WhoI from '../components/WhoI'
import Skills from '../components/Skills'
import Works from '../components/Works'
import Main from '../components/Main'
import Contacts from '../components/Contacts'
import LineHalf from '../components/LineHalf'
import cube from '../assets/images/cube.png'

import sage from '../assets/images/sage.png'
import face from '../assets/images/face.png'

const sageImg = {
	hidden: {
		opacity: 0,
		x: 150,
		y: -100
	},
	visible: {
		opacity: 1,
		x: 0,
		y: 0,

		transition: { delay: 1 }
	}
}

const Home = () => {
	const cubeAnim = {
		hidden: {},
		visible: {
			y: [0, 15, 0]
		}
	}

	return (
		<div>
			<div className='container'>
				<div id='home' className='content'>
					<Main />
				</div>

				<div id='whoi' className='content'>
					<div>
						<motion.div initial='hidden' whileInView='visible'>
							<motion.img
								variants={cubeAnim}
								transition={{ repeat: Infinity, duration: 2 }}
								src={cube}
								className='cube'
							></motion.img>
							<motion.img
								variants={cubeAnim}
								transition={{ repeat: Infinity, duration: 2 }}
								src={cube}
								className='cube2'
							></motion.img>
							<motion.img
								variants={cubeAnim}
								transition={{ repeat: Infinity, duration: 2 }}
								src={cube}
								className='cube3'
							></motion.img>
							<motion.img
								variants={cubeAnim}
								transition={{ repeat: Infinity, duration: 2 }}
								src={cube}
								className='cube4'
							></motion.img>
							<motion.img
								variants={cubeAnim}
								transition={{ repeat: Infinity, duration: 2 }}
								src={cube}
								className='cube5'
							></motion.img>
						</motion.div>
					</div>
					<LineFull />

					<WhoI />
				</div>

				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ amount: 0.2, once: true }}
					id='skills'
					className='content'
				>
					<div>
						<motion.img src={sage} variants={sageImg} className='sage' />
					</div>
					<LineFull />
					<Skills />
				</motion.div>

				<div id='works' className='content'>
					<LineFull />
					<img src={face} variants={sageImg} className='face' />
					<Works />
				</div>

				<div id='contact' className='content'>
					<LineHalf />
					<Contacts />
					<div className='invisible-block'></div>
				</div>
			</div>
		</div>
	)
}

export default Home
