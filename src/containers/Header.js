import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import ThemeContext from '../hooks/ThemeContext'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Switch } from '@mui/material'

function Header () {
  const navigate = useNavigate()
  const ThemeData = useContext(ThemeContext)
  const [checked, setChecked] = useState(false)

  const handleChange = (event) => {
    setChecked(event.target.checked)
    ThemeData.handleTheme()
  }
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        // borderBottom: "1px solid rgb(40,40,40)",
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
