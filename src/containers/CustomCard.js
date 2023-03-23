import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { ColorsGenerator, chipInfo } from './CardComponents/Colors';
import HeaderComponent from './CardComponents/HeaderComponent';
import ContentComponent from './CardComponents/ContentComponent';
import UseSetFavorite from '../hooks/UseSetFavorite';

export default function MediaCard ({ data, weaknesses, img, info, limitMaker }) {
  const myTypes = data.types.map((item) => item.type.name);

  const BaseColor = ColorsGenerator(0, myTypes[0]);
  const StrongColor = ColorsGenerator(-1, myTypes[0]);
  const SoftColor = ColorsGenerator(1, myTypes[0]);

  const [isFavorite, addToFavorites, removeFromFavorites] =
    UseSetFavorite(false);

  return (
    <>
      <IconButton
        sx={{
          position: 'absolute',
          left: 3,
          bottom: 3,
          zIndex: 1,
          borderRadius: 2,
          border: 1
        }}
        color='#263238'
        size='medium'
        aria-label='previous pokemon'
        component='label'
        onClick={() => limitMaker(1, false)}
      >
        <ArrowBackIcon fontSize='inherit' />
      </IconButton>
      {isFavorite
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
            onClick={() => removeFromFavorites()}
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
            onClick={() => addToFavorites()}
          >
            <FavoriteBorderIcon fontSize='inherit' />
          </IconButton>
          )}

      <Card
        className='CustomCard'
        sx={{ width: 380, border: 4, borderColor: '#7B7B7B', borderRadius: 2 }}
      >
        <HeaderComponent
          StrongColor={StrongColor}
          SoftColor={SoftColor}
          data={data}
          info={chipInfo}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            margin: 0.4,
            borderRadius: 2,
            background: `linear-gradient(140deg, rgba(${BaseColor},1) 40%, rgba(220,220,220,1) 50%, rgba(${BaseColor},1) 60%)`
          }}
        >
          <CardMedia
            sx={{ width: 180 }}
            height='180'
            component='img'
            image={img}
            alt='pokemon'
          />
        </Box>
        <ContentComponent
          SoftColor={SoftColor}
          data={data}
          StrongColor={StrongColor}
          weaknesses={weaknesses}
          info={info}
          chipInfo={chipInfo}
        />
      </Card>
      <IconButton
        sx={{
          position: 'absolute',
          right: 3,
          bottom: 3,
          zIndex: 1,
          borderRadius: 2,
          border: 1
        }}
        color='#263238'
        size='medium'
        aria-label='next pokemon'
        component='label'
        onClick={() => limitMaker(151, true)}
      >
        <ArrowForwardIcon fontSize='inherit' />
      </IconButton>
    </>
  );
}
