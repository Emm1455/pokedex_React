import Box from '@mui/material/Box'
import FavoritesList from '../features/pokemon/FavoritesList'

function Favorites () {
  return (
    <Box sx={{ display: 'flex', height: '88vh', justifyContent: 'center', alignItems: 'center' }}>
      <FavoritesList />
    </Box>
  )
}

export default Favorites
