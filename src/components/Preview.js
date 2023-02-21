import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function Preview() {
  return (
    <Stack spacing={1} width="450px">
      <Skeleton variant="rounded" height={88} />
      <Skeleton variant="rounded" height={200} />
      <Skeleton variant="rounded" height={400} />
    </Stack>
  )
}

export default Preview