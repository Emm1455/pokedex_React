// import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';

function FavoritesList () {
  const state = useSelector(state => state.favorites.value);
  const favoritesList = state.map(item => (
    <div key={item.id}>
      N°{item.id} | {item.name} | {item.types.map(element => element + ', ')}
    </div>
  ))
  return (<ul>{favoritesList}</ul>);
}

export default FavoritesList;
