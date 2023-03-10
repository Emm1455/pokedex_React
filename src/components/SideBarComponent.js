import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom'

function SideBarComponent () {
  const navigate = useNavigate()
  const Logout = function () {
    navigate('/')
  }

  return (
    <Box
      sx={{
        display: 'flex',
        margin: 1,
        gap: 2
      }}
    >
      <Button key='MyPokemons'>My Pokemons</Button>
      <Button onClick={() => Logout()} key='LogOut'>LogOut</Button>
    </Box>
  )
}

export default SideBarComponent
