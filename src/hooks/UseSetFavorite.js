import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setFavorite, dropFavorite } from '../features/pokemon/favoritesSlice'

function UseSetFavorite (initialState) {
  const [isFavorite, setIsFavorite] = useState(initialState)
  const dispatch = useDispatch();
  function addToFavorites (value) {
    setIsFavorite(true)
    dispatch(setFavorite(value))
  }

  function removeFromFavorites (value) {
    setIsFavorite(false)
    dispatch(dropFavorite(value))
  }
  return (
    [isFavorite, addToFavorites, removeFromFavorites]
  )
}

export default UseSetFavorite
