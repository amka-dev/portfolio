import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'

function App() {
	return (
		<div className='wrapper'>
			<div className='content'>
				<div className='container'>
					<Routes>
						<Route path='/portfolio' element={<Home />} />
					</Routes>
				</div>
			</div>
		</div>
	)
}

export default App
