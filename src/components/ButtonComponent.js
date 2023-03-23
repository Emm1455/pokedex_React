import Button from '@mui/material/Button'

function ButtonComponent ({ text, action }) {
  return (
    <Button variant='text' onClick={action} sx={{ textTransform: 'none' }}>{text}</Button>
  )
}

export default ButtonComponent
