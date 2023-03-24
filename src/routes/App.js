import Header from '../containers/Header'
import Footer from '../containers/Footer'
import PokemonCards from '../pages/PokemonCards'
import Home from '../pages/Home'
import LogIn from '../pages/LogIn'
import Favorites from '../pages/Favorites'
import PageNotFound from '../pages/PageNotFound'
import ThemeContext from '../hooks/ThemeContext'
import { Routes, Route } from 'react-router-dom'
import { useContext } from 'react'

import Box from '@mui/material/Box'
import '../App.css'

function App () {
  const ThemeData = useContext(ThemeContext)
  return (
    <Box sx={{ flexGrow: 1, height: '100vh', backgroundColor: '#202020' }}>
      <Header />
      <Box className={ThemeData.theme} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/pokemon-cards' element={<PokemonCards />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  )
}

export default App
