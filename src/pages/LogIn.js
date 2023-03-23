import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function LogIn () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleSubmit = function (e) {
    // let emailError = ''
    // let passwordError = ''

    // if (!email) {
    //   emailError = "Email can't be empty"
    // }

    // if (!password) {
    //   passwordError = "Password can't be empty"
    // } else if (password.length < 8) {
    //   console.log(password.length)
    //   passwordError = 'Password should be at least 8 characters'
    // }

    // if (emailError || passwordError) {
    //   setEmailError(emailError)
    //   setPasswordError(passwordError)
    //   console.log('emailErrorS', emailErrorS)
    //   console.log('passwordErrorS', passwordErrorS)
    //   alert(JSON.stringify({ emailError, passwordError }))
    //   e.preventDefault()
    // } else {
    // alert(JSON.stringify({email: email, password: password, rememberMe: rememberMe}));
    pokemonCard()
    // }
  }

  const pokemonCard = () => {
    navigate('/pokemon-cards')
  }

  return (
    <Box
      sx={{
        display: 'flex',
        height: '88vh',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          width: '300px',
          padding: '20px',
          border: '3px solid #202020',
          borderRadius: '5px'
        }}
      >
        <img src='https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg' alt='pokemon logo' />
        <TextField
          id='username'
          label='Username'
          variant='outlined'
          size='small'
          value={email}
          onChange={(e) => { setEmail(e.target.value) }}
        />
        <TextField
          id='password'
          label='Password'
          variant='outlined'
          size='small'
          type='password'
          value={password}
          onChange={(e) => { setPassword(e.target.value) }}
        />
        <Button variant='contained' color='success' onClick={handleSubmit}>
          SignIn
        </Button>
      </Box>
    </Box>
  )
}

export default LogIn
