import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import Types from '../components/TypeChips'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import UseSetFavorite from '../hooks/UseSetFavorite';
import { useSelector } from 'react-redux'

function PokemonCardHeader ({ StrongColor, SoftColor, data, info }) {
  const state = useSelector(state => state.favorites.value);
  const isFav = state.filter(item => item.id === data.id).length !== 0;
  const currentPokemon = {
    id: data.id,
    name: data.name,
    types: data.types.map(item => item.type.name)
  }
  const [isFavorite, addToFavorites, removeFromFavorites] =
    UseSetFavorite(isFav);
  return (
    <CardHeader
      sx={{ bgcolor: `rgb(${StrongColor})`, padding: '8px 16px' }}
      avatar={
        <Avatar
          sx={{
            bgcolor: `rgba(${SoftColor},0.7)`,
            border: 2,
            borderColor: '#F2F2F2'
          }}
          alt='pokemon-small'
          src={data.sprites.front_default}
        />
          }
      title={
        <Typography variant='h5' component='div'>
          {data.name}
        </Typography>
          }
      subheader={
        <Stack direction='row' spacing={1}>
          <Types data={data.types} info={info} />
        </Stack>
          }
      action={
        isFavorite
          ? (
            <IconButton
              sx={{
                position: 'absolute',
                right: 8,
                top: 7,
                zIndex: 1,
                border: 0,
                color: '#F2F2F2'
              }}
              size='large'
              aria-label='add to favorites'
              component='button'
              onClick={() => removeFromFavorites(currentPokemon)}
            >
              <FavoriteIcon fontSize='inherit' />
            </IconButton>
            )
          : (
            <IconButton
              sx={{
                position: 'absolute',
                right: 8,
                top: 7,
                zIndex: 1,
                border: 0,
                color: '#F2F2F2'
              }}
              size='large'
              aria-label='add to favorites'
              component='button'
              onClick={() => addToFavorites(currentPokemon)}
            >
              <FavoriteBorderIcon fontSize='inherit' />
            </IconButton>
            )
          }
    />
  )
}

export default PokemonCardHeader
