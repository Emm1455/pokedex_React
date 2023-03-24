import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

function Preview () {
  return (
    <Stack spacing={1} width='380px'>
      <Skeleton variant='rounded' height={70} />
      <Skeleton variant='rounded' height={180} />
      <Skeleton variant='rounded' height={345} />
    </Stack>
  )
}

export default Preview
