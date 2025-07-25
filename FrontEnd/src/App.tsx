import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Landing } from './screens/Landing'
import { Game } from './screens/Game'
import { Profile } from './screens/Profile'

function App() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Landing />} />
					<Route path='/game' element={<Game />} />
					<Route path='/profile' element={<Profile />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App