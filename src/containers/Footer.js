import Box from '@mui/material/Box'
import ThemeContext from '../components/ThemeContext'
import { useContext } from 'react'
function Footer () {
  const ThemeData = useContext(ThemeContext)
  return (
    <Box
      sx={{
        display: 'flex',
        height: '6vh',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
      className={ThemeData.theme}
    >
      <Box sx={{ marginLeft: '10px' }} className={ThemeData.theme}>&#169; 2023 Emmanuel Mercado Luna </Box>
      <Box sx={{ marginRight: '30px' }}>
        ICONS
      </Box>
    </Box>
  )
}

export default Footer
