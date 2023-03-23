import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import SignInComponent from './components/SignInComponent'
import PokedexComponent from './components/PokedexComponent'
import PageNotFoundComponent from './components/PageNotFoundComponent'
import ThemeContext from './components/ThemeContext'
import './App.css'

function App () {
  const data = useContext(ThemeContext)
  return (
    <div className={`App ${data.theme}`}>
      <Routes>
        <Route path='/' element={<SignInComponent />} />
        <Route path='/pokedex' element={<PokedexComponent />} />
        <Route path='*' element={<PageNotFoundComponent />} />
      </Routes>
    </div>
  )
}

export default App
