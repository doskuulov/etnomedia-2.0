import Aos from 'aos'
import React, { Profiler } from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './Screens/AboutUs'
import ContactUs from './Screens/ContactUs'
import Profile from './Screens/Dashboard/Profile'
import HomeScreen from './Screens/HomeScreen'
import Login from './Screens/Login'
import MoviesPage from './Screens/Movies'
import NotFound from './Screens/NotFound'
import Register from './Screens/Register'
import SingleMovie from './Screens/SingleMovie'
import Password from './Screens/Dashboard/Password'
import WatchPage from './Screens/WatchPage'
import FavoritesMovies from './Screens/Dashboard/FavoritesMovies'

function App() {
	Aos.init()
	return (
		<Routes>
			<Route path='/' element={<HomeScreen />} />
			<Route path='/about-us' element={<AboutUs />} />
			<Route path='/contact-us' element={<ContactUs />} />
			<Route path='/movies' element={<MoviesPage />} />
			<Route path='/movie/:id' element={<SingleMovie />} />
			<Route path='/watch/:id' element={<WatchPage />} />
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route path='/profile' element={<Profile />} />
			<Route path='/password' element={<Password />} />
			<Route path='/favorites' element={<FavoritesMovies />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}

export default App
