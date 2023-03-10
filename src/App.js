import { Routes, Route } from 'react-router-dom'
import SignInComponent from './components/SignInComponent'
import PokedexComponent from './components/PokedexComponent'
import PageNotFoundComponent from './components/PageNotFoundComponent'
import './App.css'

function App () {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<SignInComponent />} />
        <Route path='/pokedex' element={<PokedexComponent />} />
        <Route path='*' element={<PageNotFoundComponent />} />
      </Routes>
    </div>
  )
}

export default App
