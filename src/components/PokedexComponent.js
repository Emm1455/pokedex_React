import UseGetData from './CustomHooks/UseGetData'
import CustomCard from './CustomCard'
import Preview from './Preview'
import SideBarComponent from './SideBarComponent'
import ThemeContext from './ThemeContext'
import { useContext } from 'react'
import '../App.css'

function PokedexComponent () {
  const [pokemon, weaknesses, isLoading, info, limitMaker] = UseGetData(1)
  const { theme, handleTheme } = useContext(ThemeContext)
  return (
    <>
      {isLoading
        ? (
          <>
            <div className='CustomCard'>
              <CustomCard
                img={pokemon.sprites.other['official-artwork'].front_default}
                data={pokemon}
                weaknesses={weaknesses}
                info={info}
                limitMaker={limitMaker}
              />

            </div>
            <div className={`SideBar ${theme}`}>
              <SideBarComponent myFunction={handleTheme} />
            </div>
          </>
          )
        : (
          <>
            <Preview />
          </>
          )}
    </>
  )
}

export default PokedexComponent
