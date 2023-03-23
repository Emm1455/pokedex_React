import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import ButtonComponent from '../components/ButtonComponent'
import SwitchThemeComponent from '../components/SwitchThemeComponent'
import ThemeContext from '../components/ThemeContext'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

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
        <ButtonComponent
          text='Pokemon cards'
          action={() => navigate('/pokemon-cards')}
        />
        <ButtonComponent
          text='Favorites'
          action={() => navigate('/favorites')}
        />
        <ButtonComponent text='Login' action={() => navigate('/login')} />
        <SwitchThemeComponent state={checked} handleChange={handleChange} />
      </Stack>
    </Box>
  )
}

export default Header
