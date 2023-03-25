import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import ThemeContext from '../hooks/ThemeContext'
import CheckTheme from '../functions/CheckTheme'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Switch } from '@mui/material'

function Header () {
  const navigate = useNavigate()
  const ThemeData = useContext(ThemeContext)
  const [checked, setChecked] = useState(CheckTheme() === 'dark')

  const handleChange = (event) => {
    setChecked(event.target.checked)
    ThemeData.handleTheme()
  }
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        height: '6vh'
      }}
      className={ThemeData.theme}
    >
      <Stack spacing={1} direction='row' sx={{ marginRight: '20px' }}>
        <Button variant='text' onClick={() => navigate('/pokemon-cards')} sx={{ textTransform: 'none' }}>Pokemon cards</Button>
        <Button variant='text' onClick={() => navigate('/favorites')} sx={{ textTransform: 'none' }}>Favorites</Button>
        <Button variant='text' onClick={() => navigate('/login')} sx={{ textTransform: 'none' }}>Login</Button>
        <Switch checked={checked} onChange={handleChange} />
      </Stack>
    </Box>
  )
}

export default Header
