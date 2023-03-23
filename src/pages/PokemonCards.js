import UseGetData from '../hooks/UseGetData'
import CustomCard from '../containers/CustomCard'
import Preview from '../containers/Preview'
import Box from '@mui/material/Box'
function PokemonCards () {
  const [pokemon, weaknesses, isLoading, info, limitMaker] = UseGetData(1)
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box sx={{ position: 'relative' }}>
        {isLoading
          ? <CustomCard
              img={pokemon.sprites.other['official-artwork'].front_default}
              data={pokemon}
              weaknesses={weaknesses}
              info={info}
              limitMaker={limitMaker}
            />
          : <Preview />}
      </Box>
    </Box>
  )
}

export default PokemonCards
